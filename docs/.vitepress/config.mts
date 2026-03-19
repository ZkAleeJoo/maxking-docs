import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MaxKing Docs",
  description: "Documentación oficial de los plugins Max.",
  lang: 'es-ES',

  appearance: 'force-dark',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      {
        text: 'Plugins',
        items: [
          {
            text: '👑 PREMIUM',
            items: [
              { text: 'MaxStaff', link: '/maxstaff/' }
            ]
          },
          {
            text: '🌳 GRATUITOS',
            items: [
              { text: 'MaxClear', link: '/maxclear/' },
              { text: 'MaxGraves', link: '/maxgraves/' },
              { text: 'MaxEvolutionTools', link: '/maxevolutiontools/' }
            ]
          }
        ]
      },
      { text: 'Contacto', link: 'https://discord.gg/Vr46JHm2kd' }
    ],

    sidebar: {
      '/maxstaff/': [
        {
          text: 'MAXSTAFF',
          items: [
            { text: '1. Inicio', link: '/maxstaff/' },
            { text: '2. Funciones', link: '/maxstaff/funciones' },
            { text: '3. Comandos y Permisos', link: '/maxstaff/comandos-permisos' },
            { text: '4. Sanciones (GUI)', link: '/maxstaff/sanciones' },
            { text: '5. PlaceholderAPI', link: '/maxstaff/placeholderapi' },
            { text: '6. Base de Datos', link: '/maxstaff/database' },
            { text: '7. Discord', link: '/maxstaff/discord' }
          ]
        },
        {
          text: 'Adicional',
          collapsed: true,
          items: [
            { text: '1. Personalización', link: '/maxstaff/adicional/personalización' },
            { text: '2. Protecciones', link: '/maxstaff/adicional/protecciones' },
            { text: '3. Herramientas', link: '/maxstaff/adicional/herramientas' }
          ]
        }
      ],

      '/maxclear/': [
        {
          text: 'MAXCLEAR',
          items: [
            { text: '1. Inicio', link: '/maxclear/' },
            { text: '2. Funciones', link: '/maxclear/funciones' },
            { text: '3. Comandos y Permisos', link: '/maxclear/comandos-permisos' }
          ]
        }
      ],

      '/maxgraves/': [
        {
          text: 'MAXGRAVES',
          items: [
            { text: '1. Inicio', link: '/maxgraves/' },
            { text: '2. Funciones', link: '/maxgraves/funciones' },
            { text: '3. Comandos y Permisos', link: '/maxgraves/comandos-permisos' }
          ]
        }
      ],

      '/maxevolutiontools/': [
        {
          text: 'MAXEVOLUTIONTOOLS',
          items: [
            { text: '1. Inicio', link: '/maxevolutiontools/' },
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