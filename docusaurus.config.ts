import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '前端',
  tagline: '前端非常酷',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: "docs/html",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    ["@docusaurus/plugin-content-docs",
      {
        id: 'exam-module',
        path: 'docs/exam',
        routeBasePath: 'exam',
        sidebarPath: './sidebars.ts',
      }],
    ["@docusaurus/plugin-content-docs", {
      id: 'micro-module',
      path: 'docs/micro',
      routeBasePath: 'micro',
      sidebarPath: './sidebars.ts',
    }],
    ["@docusaurus/plugin-content-docs", {
      id: 'arith-module',
      path: 'docs/arith',
      routeBasePath: 'arith',
      sidebarPath: './sidebars.ts',
    }],
    ["@docusaurus/plugin-content-docs", {
      id: 'network-module',
      path: 'docs/network',
      routeBasePath: 'network',
      sidebarPath: './sidebars.ts',
    }],
    ["@docusaurus/plugin-content-docs", {
      id: 'electron-module',
      path: 'docs/electron',
      routeBasePath: 'electron',
      sidebarPath: './sidebars.ts',
    }],
    ["@docusaurus/plugin-content-docs", {
      id: 'tool-module',
      path: 'docs/tool',
      routeBasePath: 'tool',
      sidebarPath: './sidebars.ts',
    }],
    ["@docusaurus/plugin-content-docs", {
      id: 'vue-module',
      path: 'docs/vue',
      routeBasePath: 'vue',
      sidebarPath: './sidebars.ts',
    }],
    ["@docusaurus/plugin-content-docs", {
      id: 'node-module',
      path: 'docs/node',
      routeBasePath: 'node',
      sidebarPath: './sidebars.ts',
    }]
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '前端',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'HTML',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '面试',
          docsPluginId: `exam-module`,
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '微前端',
          docsPluginId: `micro-module`,
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '算法',
          docsPluginId: `arith-module`,
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '网络',
          docsPluginId: `network-module`,
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Electron',
          docsPluginId: `electron-module`,
        }, {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '前端工具',
          docsPluginId: `tool-module`,
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Vue',
          docsPluginId: `vue-module`,
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Node',
          docsPluginId: `node-module`,
        },

        // { to: '/blog', label: 'Blog', position: 'left' },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-error",
          line: "error-next",
          block: { start: "error-start", end: "error-end" },
        },
        {
          className: "code-sucess",
          line: "sucess-next",
          block: { start: "sucess-start", end: "sucess-end" },
        },
        {
          className: "code-warn",
          line: "warn-next",
          block: { start: "warn-start", end: "warn-end" },
        },
      ],
    },
  } satisfies Preset.ThemeConfig,

  themes: ['@docusaurus/theme-live-codeblock'],
};

export default config;
