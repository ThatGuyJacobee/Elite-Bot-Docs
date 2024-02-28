module.exports = {
  title: 'Elite Bot Documentation',
  tagline: 'Hi there! Elite Bot is a highly customisable and feature-packed Multipurpose Verfied Discord Bot! 👋',
  url: 'https://ThatGuyJacobee.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/elitegaming.ico',
  organizationName: 'ThatGuyJacobee', // Usually your GitHub org/user name.
  projectName: 'Elite-Bot-Docs', // Usually your repo name.
  themeConfig: {
	metadata: [{name: 'description', content: 'Hi there! Elite Bot is a highly customisable and feature-packed Multipurpose Verfied Discord Bot! 👋'}, {name: 'keywords', content: 'elitebot, discordbot, elite, elitebotdocs, documentation'}],
	colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Elite Bot',
      logo: {
        alt: 'Elite Gaming Logo',
        src: 'img/elitegaming.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
			to: 'blog/',
			label: 'Update Blog',
			position: 'left'
		},
		{
		  href: 'https://discord.com/oauth2/authorize?client_id=723275350922100840&permissions=1376969370742&scope=bot%20applications.commands',
          label: 'Invite Elite Bot',
		},
		{
		  href: 'https://top.gg/bot/723275350922100840',
          label: 'Vote for Elite Bot',
		},
		{
		  href: 'https://discord.elitegami.ng',
          label: 'Support',
		},
		{
		  href: 'https://status.elite-bot.com/',
          label: 'Status',
		},
        {
          href: 'https://github.com/ThatGuyJacobee/Elite-Bot-Docs',
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
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Bot Feature Setup',
              to: 'docs/xp-system',
            },
			{
              label: 'Configuration Commands',
              to: 'docs/configuration-commands',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Support Discord',
              href: 'http://discord.eguk.me',
            },
			{
              label: 'Twitter',
              href: 'https://twitter.com/EliteGamingUK_',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/elitegaming_uk/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Terms of Service',
              to: 'docs/terms-of-service',
            },
			{
              label: 'Privacy Policy',
              to: 'docs/privacy-policy',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ThatGuyJacobee/Elite-Bot-Docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Elite Bot & ThatGuyJacobee`,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ThatGuyJacobee/Elite-Bot-Docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ThatGuyJacobee/Elite-Bot-Docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
		gtag: {
          trackingID: 'G-LP4RT3ESKJ',
          anonymizeIP: false,
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/elitegaming.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#1b1b1d',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/elitegaming.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/elitegaming.png',
            color: '#fd0201',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/elitegaming.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
	[
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: '/docs/contact-us',
            from: '/docs/support',
          },
          // Redirect from multiple old paths to the new path
          /*{
            to: '/docs/newDoc2',
            from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
          },*/
        ],
      },
    ],
    require.resolve('docusaurus-plugin-image-zoom')
  ],
  /*scripts: [
    // String format.
    //'https://unpkg.com/emojisplosion/lib/global.js',
    // Object format.
    {
      src: 'https://unpkg.com/emojisplosion/lib/easy.js',
      async: true,
    },
  ],*/
};
