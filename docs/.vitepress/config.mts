import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'es-ES',
  title: 'MaxKing Docs',
  description: 'Documentación oficial de mis plugins de Minecraft',
  base: '/maxking-docs/',

  appearance: 'force-dark',

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/maxking-docs/favicon.ico' }]
  ],

  themeConfig: {
    logo: '/favicon.ico',

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
        text: 'MAXGRAVES',
        collapsed: true,
        items: [
          { text: '1. Introducción', link: '/maxgraves/' },
          { text: '2. Funciones', link: '/maxgraves/funciones' },
          { text: '3. Comandos y Permisos', link: '/maxgraves/comandos-permisos' }
        ]
      },
      {
        text: 'MAXSTAFF',
        collapsed: true,
        items: [
          { text: '1. Introducción', link: '/maxstaff/' },
          { text: '2. Funciones', link: '/maxstaff/funciones' },
          { text: '3. Comandos y Permisos', link: '/maxstaff/comandos-permisos' },
          { text: '4. Sanciones', link: '/maxstaff/sanciones' },
          { text: '5. PlaceHolder', link: '/maxstaff/placeholderapi' },
          { text: '6. Discord', link: '/maxstaff/discord' }
        ]
      },
      {
        text: 'MAXCLEAR',
        collapsed: true,
        items: [
          { text: '1. Introducción', link: '/maxclear/' },
          { text: '2. Funciones', link: '/maxclear/funciones' },
          { text: '3. Comandos y Permisos', link: '/maxclear/comandos-permisos' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZkAleeJoo' }
    ],

    outline: {
      level: [2, 3],
      label: 'En esta página'
    },

    docFooter: {
      prev: 'Página anterior',
      next: 'Página siguiente'
    },

    darkModeSwitchLabel: 'Tema',
    sidebarMenuLabel: 'Menú',
    returnToTopLabel: 'Volver arriba'
  }
})