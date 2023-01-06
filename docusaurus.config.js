module.exports = {
  title: 'Elite Bot Documentation',
  tagline: '',
  url: 'https://ThatGuyJacobee.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/elitegaming.ico',
  organizationName: 'ThatGuyJacobee', // Usually your GitHub org/user name.
  projectName: 'Elite-Bot-Docs', // Usually your repo name.
  themeConfig: {
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
        //{to: 'blog', label: 'Blog', position: 'left'},
		{
		  href: 'https://discord.com/oauth2/authorize?client_id=723275350922100840&permissions=1376969370742&scope=bot%20applications.commands',
          label: 'Invite Elite Bot',
		},
		{
		  href: 'https://top.gg/bot/723275350922100840',
          label: 'Vote for Elite Bot',
		},
		{
		  href: 'http://discord.eguk.me',
          label: 'Support',
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
      copyright: `Copyright © ${new Date().getFullYear()} Elite Bot & Elite Gaming`,
    },
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
