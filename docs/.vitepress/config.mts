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
          { text: 'Instalación', link: '/maxstaff/instalacion' },
          { text: 'Configuración', link: '/maxstaff/configuracion' },
          { text: 'Comandos', link: '/maxstaff/comandos' },
          { text: 'Permisos', link: '/maxstaff/permisos' },
          { text: 'Sanciones', link: '/maxstaff/sanciones' }
        ]
      },
      {
        text: 'MaxClear',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/maxclear/' },
          { text: 'Installation', link: '/maxclear/installation' },
          { text: 'Commands', link: '/maxclear/commands' }
        ]
      },
      {
        text: 'MaxGraves',
        collapsed: true,
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