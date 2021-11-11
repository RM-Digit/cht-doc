// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chronic Token',
  tagline: 'Chronic Token(CHT) is a decentralized block chain payment system designed for thecannabis community.',
  url: 'http://localhost:3000',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'CHT', // Usually your GitHub org/user name.
  projectName: 'Chronic Token', // Usually your repo name.
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'fr'],
  // },
  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local')
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/',
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
      navbar: {
        title: 'CHRONIC TOKEN',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Doc',
          },
          // {
          //   type: 'localeDropdown',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Doc',
                to: '/docs/intro',
              },
              {
                label: 'About',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Social Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/chronictokencht/',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/chronicToken',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/chronictokencht',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CHRONIC TOKEN`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
