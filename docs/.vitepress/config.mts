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
        text: 'MAXSTAFF',
        collapsed: true,
        items: [
          { text: '1. Introducción', link: '/maxstaff/' },
          { text: '2. Funciones', link: '/maxstaff/funciones' },
          { text: '3. Comandos', link: '/maxstaff/comandos' },
          { text: '4. Permisos', link: '/maxstaff/permisos' },
          { text: '5. Sanciones', link: '/maxstaff/sanciones' },
          { text: '6. PlaceHolder', link: '/maxstaff/placeholderapi' }
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