import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MaxKing Docs',
  description: 'Documentación oficial de mis plugins de Minecraft',
  base: '/maxking-docs/',

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'GitHub', link: 'https://github.com/ZkAleeJoo' }
    ],

    sidebar: [
      {
        text: 'Inicio',
        items: [
          { text: 'MaxKing Docs', link: '/' }
        ]
      },
      {
        text: 'MaxStaff',
        items: [
          { text: 'Overview', link: '/maxstaff/' },
          { text: 'Installation', link: '/maxstaff/installation' },
          { text: 'Commands', link: '/maxstaff/commands' },
          { text: 'Permissions', link: '/maxstaff/permissions' }
        ]
      },
      {
        text: 'MaxClear',
        items: [
          { text: 'Overview', link: '/maxclear/' },
          { text: 'Installation', link: '/maxclear/installation' },
          { text: 'Commands', link: '/maxclear/commands' }
        ]
      },
      {
        text: 'MaxGraves',
        items: [
          { text: 'Overview', link: '/maxgraves/' },
          { text: 'Installation', link: '/maxgraves/installation' },
          { text: 'Commands', link: '/maxgraves/commands' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZkAleeJoo' }
    ]
  }
})