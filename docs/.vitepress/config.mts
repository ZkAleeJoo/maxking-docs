import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MaxKing Docs",
  description: "Documentación oficial de los plugins Max.",
  lang: 'es-ES',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'MaxStaff', link: '/maxstaff/' },
      { text: 'MaxClear', link: '/maxclear/' },
      { text: 'MaxGraves', link: '/maxgraves/' },
      { text: 'EvolutionTools', link: '/maxevolutiontools/' }
    ],

    sidebar: {
      '/maxstaff/': [
        {
          text: 'MaxStaff',
          items: [
            { text: 'Inicio', link: '/maxstaff/' },
            { text: 'Funciones', link: '/maxstaff/funciones' },
            { text: 'Comandos y Permisos', link: '/maxstaff/comandos-permisos' },
            { text: 'Sanciones (GUI)', link: '/maxstaff/sanciones' },
            { text: 'PlaceholderAPI', link: '/maxstaff/placeholderapi' },
            { text: 'Base de Datos', link: '/maxstaff/database' },
            { text: 'Discord', link: '/maxstaff/discord' }
          ]
        },
        {
          text: 'Adicional',
          collapsed: true,
          items: [
            { text: 'Personalización', link: '/maxstaff/adicional/personalización' },
            { text: 'Protecciones', link: '/maxstaff/adicional/protecciones' },
            { text: 'Herramientas', link: '/maxstaff/adicional/herramientas' }
          ]
        }
      ],

      '/maxclear/': [
        {
          text: 'MaxClear',
          items: [
            { text: 'Inicio', link: '/maxclear/' },
            { text: 'Funciones', link: '/maxclear/funciones' },
            { text: 'Comandos y Permisos', link: '/maxclear/comandos-permisos' }
          ]
        }
      ],

      '/maxgraves/': [
        {
          text: 'MaxGraves',
          items: [
            { text: 'Inicio', link: '/maxgraves/' },
            { text: 'Funciones', link: '/maxgraves/funciones' },
            { text: 'Comandos y Permisos', link: '/maxgraves/comandos-permisos' }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Buscar',
                buttonAriaLabel: 'Buscar'
              },
              modal: {
                noResultsText: 'No se encontraron resultados para',
                resetButtonTitle: 'Borrar criterio de búsqueda',
                footer: {
                  selectText: 'para seleccionar',
                  navigateText: 'para navegar',
                  closeText: 'para cerrar'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/TU_LINK_AQUI' }
    ],

    footer: {
      message: 'Cualquier duda o consutla por nuestro servidor de discord',
      copyright: 'Copyright © 2026 MaxKing'
    }
  }
})