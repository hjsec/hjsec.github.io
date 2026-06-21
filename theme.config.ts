import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: '花江安全',
  id: 'accessible-astro-starter',
  logo: logoImage,
  seo: {
    title: '花江安全',
    description:
      'An Accessible Starter Theme for Astro including several accessibility features and tools to help you build faster.',
    author: 'Incluud',
    image: previewImage,
  },
  colors: {
    primary: '#d648ff',
    secondary: '#00d1b7',
    neutral: '#b9bec4',
    outline: '#ff4500',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: '首页',
        href: '/',
      },
      {
        type: 'link',
        label: '关于我们',
        href: '/about',
      },
      {
        type: 'link',
        label: '成员',
        href: '/portfolio',
      },
      {
        label: '知识库',
        type: 'dropdown',
        items: [
          {
            label: '知识库首页',
            href: '/blog',
          },
          {
            label: '什么是 CTF？',
            href: '/blog/what-is-ctf',
          },
          {
            label: '安全方向简介',
            href: '/blog/security-fields',
          },
          {
            label: '学习路线',
            href: '/blog/learning-path',
          },
          {
            label: '资源',
            href: '/blog/resource',
          },
        ],
      },
      {
        type: 'link',
        label: '加入我们',
        href: '/contact',
      },
      {
        type: 'link',
        label: 'Go to our GitHub page, opens in new tab',
        href: 'https://github.com/hjsec/hjsec.github.io',
        icon: 'lucide:github',
        external: true,
        excludeFromLauncher: true,
      },
    ],
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/incluud/',
      icon: 'lucide:github',
    },
    {
      label: 'Bluesky',
      href: 'https://bsky.app/profile/incluud.dev',
      icon: 'lucide:bot-message-square',
    },
    {
      label: 'Open Collective',
      href: 'https://opencollective.com/incluud',
      icon: 'lucide:hand-heart',
    },
  ],
})
