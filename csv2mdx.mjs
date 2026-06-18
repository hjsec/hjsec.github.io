import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const csvFile = process.argv[2] || 'members.csv';
const outputDir = 'src/content/projects';

if (!fs.existsSync(csvFile)) {
  console.error(`错误：找不到文件 ${csvFile}`);
  process.exit(1);
}

const csvData = fs.readFileSync(csvFile, 'utf-8');
const records = parse(csvData, {
  columns: true,
  skip_empty_lines: true,
  trim: true,
});

fs.mkdirSync(outputDir, { recursive: true });

records.forEach((row) => {
  const { id, name, image, bio, motto, grade, links } = row;

  // 解析 links
  const linkList = [];
  if (links) {
    links.split(',').forEach((item) => {
      const [type, url] = item.split(':').map(s => s.trim());
      if (type && url) {
        linkList.push({ [type]: url });
      }
    });
  }

  const yamlLinks = linkList.length
    ? linkList
        .map((l) => {
          const [k, v] = Object.entries(l)[0];
          return `  - ${k}: "${v}"`;
        })
        .join('\n')
    : '';   // 空数组时，后面会用 links: []

  const linksYaml = linkList.length ? `links:\n${yamlLinks}` : 'links: []';

  const frontMatter = `---
title: "${name}"
author: "花江安全局"
description: "${bio}"
tags: ["${grade}级"]
image: "/img/${id}.jpeg"
motto: "${motto || ''}"
${linksYaml}
---`;

  const body = `这里是 ${name} 的个人介绍页面。`;

  const mdxContent = `${frontMatter}\n\n${body}\n`;
  const filePath = path.join(outputDir, `${id}.mdx`);
  fs.writeFileSync(filePath, mdxContent, 'utf-8');
  console.log(`✅ 生成 ${id}.mdx`);
});

console.log('🎉 完成！所有成员文件已生成到 src/content/projects/');
