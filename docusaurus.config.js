// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LaraDocs',
  tagline: 'My awesome docs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://laradocs.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'laragis', // Usually your GitHub org/user name.
  projectName: 'laradocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/laragis/laradocs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/laragis/laradocs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'LaraDocs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {type: 'docSidebar', sidebarId: 'design', label: 'Design'},
          {type: 'docSidebar', sidebarId: 'dev', label: 'Dev'},
          {type: 'docSidebar', sidebarId: 'db', label: 'DB'},
          {type: 'docSidebar', sidebarId: 'devops', label: 'DevOps'},
          {type: 'docSidebar', sidebarId: 'gis', label: 'GIS'},
          {type: 'docSidebar', sidebarId: 'ai', label: 'AI'},
          {type: 'docSidebar', sidebarId: 'os', label: 'OS'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/laragis/laradocs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
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
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/laragis/laradocs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LaraDocs, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'JHZH3SPE77',
        apiKey: '93af816b5b7be567c347df2795c66122',
        indexName: 'prod_Laradocs',
        contextualSearch: true,
      },
    }),
};

module.exports = config;
