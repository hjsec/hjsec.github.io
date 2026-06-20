---
title: "学习路线"
description: "从零开始学习信息安全的推荐路径"
layout: ../../layouts/MarkdownLayout.astro
prev: /blog/security-fields
next: null
---

<div style="text-align: center; margin-bottom: 2.5rem;">
  <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 0.5rem;">🗺️ 学习路线</h1>
  <p style="font-size: 1.2rem; opacity: 0.8;">从零开始，一步步成为安全高手</p>
</div>

<div style="background: rgba(99,179,237,0.08); border-left: 4px solid #63b3ed; border-radius: 0 0.5rem 0.5rem 0; padding: 1rem 1.5rem; margin: 1.5rem 0;">
  <strong>💡 新手入门建议</strong><br>
  不要贪多，先集中精力在一个方向，比如二进制或 Web。打好基础再横向扩展。
</div>

<div style="position: relative; margin: 2rem 0; padding-left: 2rem; border-left: 2px solid var(--border-color-subtle, #e2e8f0);">

  <div style="margin-bottom: 2rem;">
    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
      <div style="background: var(--color-primary, #4f8cc9); color: white; width: 2rem; height: 2rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.9rem;">1</div>
      <h3 style="margin: 0; font-size: 1.1rem;">打好编程基础</h3>
    </div>
    <p style="margin-left: 2.75rem;">至少熟练掌握一门语言，推荐 <strong>Python</strong>（写脚本方便）和 <strong>C</strong>（理解底层）。</p>
  </div>

  <div style="margin-bottom: 2rem;">
    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
      <div style="background: var(--color-primary, #4f8cc9); color: white; width: 2rem; height: 2rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.9rem;">2</div>
      <h3 style="margin: 0; font-size: 1.1rem;">学习 Linux</h3>
    </div>
    <p style="margin-left: 2.75rem;">绝大部分安全工具和服务器环境都在 Linux 上运行，熟悉命令行是基本功。</p>
  </div>

  <div style="margin-bottom: 2rem;">
    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
      <div style="background: var(--color-primary, #4f8cc9); color: white; width: 2rem; height: 2rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.9rem;">3</div>
      <h3 style="margin: 0; font-size: 1.1rem;">理解网络协议</h3>
    </div>
    <p style="margin-left: 2.75rem;">TCP/IP、HTTP、DNS 等，这是 Web 安全和流量分析的基础。</p>
  </div>

  <div style="margin-bottom: 2rem;">
    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
      <div style="background: var(--color-primary, #4f8cc9); color: white; width: 2rem; height: 2rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.9rem;">4</div>
      <h3 style="margin: 0; font-size: 1.1rem;">选择一个方向深入</h3>
    </div>
    <p style="margin-left: 2.75rem;">二进制、Web、逆向…… 选你最感兴趣的，不要同时学太多。</p>
  </div>

  <div style="margin-bottom: 2rem;">
    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
      <div style="background: var(--color-primary, #4f8cc9); color: white; width: 2rem; height: 2rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.9rem;">5</div>
      <h3 style="margin: 0; font-size: 1.1rem;">参加 CTF 比赛</h3>
    </div>
    <p style="margin-left: 2.75rem;">实践出真知，从简单的签到题开始，积累经验。</p>
  </div>

</div>

<div style="background: var(--background-color, #fff); border: 1px solid var(--border-color-subtle, #e2e8f0); border-radius: 0.75rem; padding: 1.25rem; margin-top: 2rem;">
  <h3 style="margin-top: 0;">📚 推荐资源</h3>
  <ul style="margin-bottom: 0;">
    <li><strong>在线平台</strong>：CTFhub、BUUCTF、攻防世界</li>
    <li><strong>书籍</strong>：《深入理解计算机系统》（CSAPP）、《0day安全：软件漏洞分析技术》</li>
    <li><strong>工具</strong>：GDB + pwntools（二进制）、Burp Suite（Web）、Ghidra（逆向）</li>
  </ul>
</div>

<div style="text-align: center; margin-top: 2.5rem;">
  <a href="/blog/resource" style="display: inline-block; background: var(--color-primary, #4f8cc9); color: white; padding: 0.6rem 1.5rem; border-radius: 2rem; text-decoration: none; font-weight: 500;">
    查看资源汇总 →
  </a>
</div>
