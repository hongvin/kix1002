import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'KIX1002',
  tagline: 'KIX1002 Engineering Mathematics 2',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kix1002.hongvin.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hongvin', // Usually your GitHub org/user name.
  projectName: 'kix1002', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'KIX1002',
      logo: {
        alt: 'KIX1002',
        src: 'img/hero.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/assignment', label: 'Assignment', position: 'left'},
        {to: '/lecture', label: 'Lecture Notes', position: 'left'},
        {to: '/past-year', label: 'Past Year Papers', position: 'left'},
        {
          href: 'https://github.com/hongvin/kix1002',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} hongvin. Built with Docusaurus.`,
      links: [
        {
          title: 'Support the development',
          items: [
            {
              html: `
                <img src="/img/duitnow.png" alt="duitnow QR" / height=100>
              `,
            },
          ],
        },
        {
          title: 'Previous Years',
          items: [
            {
              label: "KIX1001 Session 2022/2023",
              href: "https://kix1001.hongvin.xyz/"
            },
            {
              label: "KIX1001 Session 2021/2022",
              href: "https://2021.kix1001.hongvin.xyz/"
            },
            {
              label: "KIX1002 Session 2021/2022",
              href: "https://2022.kix1002.hongvin.xyz/"
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
