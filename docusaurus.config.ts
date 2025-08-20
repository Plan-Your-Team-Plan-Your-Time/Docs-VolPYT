import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import getLocalizedConfigValue from './static/code/getLocalizedConfigValue';

const config: Config = {
  title: 'VolPYT',
  tagline: getLocalizedConfigValue('tagline'),
  favicon: 'img/mine/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs-volpyt.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Plan Your Team, Plan Your Time', // Usually your GitHub org/user name.
  projectName: 'Docs-VolPYT', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],
  markdown: {
    mermaid: true, // si usas Mermaid también
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve("docusaurus-plugin-search-local"),
      {
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
        hashed: true, 
        translations: {
          search_placeholder: "Buscar...",
          no_results: "No se encontraron resultados.",
        },
      },
    ],
  ],

  scripts: [
    {
      src: "https://cdn.vercel-insights.com/v1/speed-insights.js",
      defer: true,
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/mine/social-card.svg',
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
    colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'VolPYT',
      logo: {
        alt: 'VolPYT Logo',
        src: 'img/mine/logo.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {to: 'pricing', label: 'Precios', position: 'left'},
        {
          href: 'https://github.com/Plan-Your-Team-Plan-Your-Time/Docs-VolPYT',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '¿Quienes somos?',
              to: '/docs/intro',
            },
            {
              label: 'Documentación',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Plan-Your-Team-Plan-Your-Time/Docs-VolPYT',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
