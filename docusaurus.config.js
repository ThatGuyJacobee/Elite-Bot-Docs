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
		  href: 'https://discord.com/api/oauth2/authorize?client_id=528660579208921098&permissions=1239533562928&scope=bot%20applications.commands',
          label: 'Invite Elite Bot',
		},
		{
		  href: 'https://top.gg/bot/528660579208921098',
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
              label: 'Discord',
              href: 'https://discord.gg/2XvwvgR',
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
      copyright: `Copyright © ${new Date().getFullYear()} Elite Gaming & Elite Bot`,
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
      },
    ],
  ],
};
