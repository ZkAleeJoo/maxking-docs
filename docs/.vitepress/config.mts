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
        link: '/'
      },
      {
        text: 'MaxStaff',
        collapsed: true,
        items: [
          { text: 'Introducción', link: '/maxstaff/' },
          { text: 'Funciones', link: '/maxstaff/funciones' },
          { text: 'Comandos', link: '/maxstaff/comandos' },
          { text: 'Permisos', link: '/maxstaff/permisos' },
          { text: 'Sanciones', link: '/maxstaff/sanciones' },
          { text: 'PlaceHolder', link: '/maxstaff/placeholderapi' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZkAleeJoo' }
    ]
  }
})