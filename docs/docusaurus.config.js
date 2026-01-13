// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MarzPOS',
  tagline: 'Cloud-Based POS & ERP System Documentation',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://tino-ryan.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/marzpos/',

  // GitHub pages deployment config.
  organizationName: 'tino-ryan', // Your GitHub username
  projectName: 'marzpos', // Your repo name
  deploymentBranch: 'gh-pages', // Deploy to gh-pages branch
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Remove edit URL or point to your repo
          editUrl: 'https://github.com/tino-ryan/marzpos/tree/main/',
        },
        blog: false, // Disable blog if you don't need it
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/marzpos-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'MarzPOS',
        logo: {
          alt: 'MarzPOS Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://marzpos.com',
            label: 'Live System',
            position: 'right',
          },
          {
            href: 'https://github.com/tino-ryan/marzpos',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Standard Operating Procedures',
                to: '/docs/sops',
              },
              {
                label: 'Modules',
                to: '/docs/modules/pos-system',
              },
            ],
          },
          {
            title: 'System',
            items: [
              {
                label: 'Production Site',
                href: 'https://marzpos.com',
              },
              {
                label: 'Test Environment',
                href: 'https://marztest.marzpos.com',
              },
              {
                label: 'Vape Garage Store',
                href: 'https://www.vapegarage.co.za/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub Repository',
                href: 'https://github.com/tino-ryan/marzpos',
              },
              {
                label: 'Report Issue',
                href: 'https://github.com/tino-ryan/marzpos/issues',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SOFTA - Tinotenda Gozho & Mckale. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;