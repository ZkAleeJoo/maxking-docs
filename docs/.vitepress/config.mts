import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "MaxKing Docs",
  lastUpdated: true,
  appearance: 'force-dark',

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#ff8a3d' }],
    ['meta', { property: 'og:title', content: 'MaxKing Docs' }],
    ['meta', { property: 'og:image', content: 'https://docs.maxking.lat/favicon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary' }]
  ],

  //ESPAÑOL
  locales: {
    root: {
      label: 'Español',
      lang: 'es-ES',
      description: "Documentación oficial de los plugins Max.",
      themeConfig: {
        outline: {
          label: 'En esta página',
          level: [2, 3]
        },
        lastUpdated: { text: 'Última actualización' },
        docFooter: { prev: 'Página anterior', next: 'Siguiente página' },
        returnToTopLabel: 'Volver arriba',
        sidebarMenuLabel: 'Menú',
        darkModeSwitchLabel: 'Apariencia',

        nav: [
          { text: 'Inicio', link: '/' },
          {
            text: 'Plugins',
            items: [
              {
                text: '👑 PREMIUM',
                items: [
                  { text: 'MaxStaff', link: '/maxstaff/' },
                  { text: 'MaxTools', link: '/maxtools/' }
                ]
              },
              {
                text: '🌳 GRATIS',
                items: [
                  { text: 'MaxClear', link: '/maxclear/' },
                  { text: 'MaxGraves', link: '/maxgraves/' },
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
          '/maxtools/': [
            {
              text: 'MAXTOOLS',
              items: [
                { text: '1. Inicio', link: '/maxtools/' },
                { text: '2. Funciones', link: '/maxtools/funciones' },
                { text: '3. Comandos y Permisos', link: '/maxtools/comandos-permisos' },
                { text: '4. Menus (GUI)', link: '/maxtools/menus' },
                { text: '5. Discord', link: '/maxtools/discord' }
              ]
            },
            {
              text: 'Adicional',
              collapsed: true,
              items: [
                { text: '1. Personalización', link: '/maxtools/adicional/personalización' },
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
        },

        footer: {
          message: 'Cualquier duda o consulta por nuestro servidor de discord',
          copyright: 'Copyright © 2026 MaxKing'
        }
      }
    },

    //INGLES
    en: {
      label: 'English',
      lang: 'en-US',
      description: "Official documentation for Max plugins.",
      themeConfig: {
        outline: {
          label: 'On this page',
          level: [2, 3]
        },
        lastUpdated: { text: 'Last updated' },
        docFooter: { prev: 'Previous page', next: 'Next page' },
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Appearance',

        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Plugins',
            items: [
              {
                text: '👑 PREMIUM',
                items: [
                  { text: 'MaxStaff', link: '/en/maxstaff/' },
                  { text: 'MaxTools', link: '/en/maxtools/' }
                ]
              },
              {
                text: '🌳 FREE',
                items: [
                  { text: 'MaxClear', link: '/en/maxclear/' },
                  { text: 'MaxGraves', link: '/en/maxgraves/' },
                ]
              }
            ]
          },
          { text: 'Contact', link: 'https://discord.gg/Vr46JHm2kd' }
        ],

        sidebar: {
          '/en/maxstaff/': [
            {
              text: 'MAXSTAFF',
              items: [
                { text: '1. Home', link: '/en/maxstaff/' },
                { text: '2. Features', link: '/en/maxstaff/funciones' },
                { text: '3. Commands & Permissions', link: '/en/maxstaff/comandos-permisos' },
                { text: '4. Punishments (GUI)', link: '/en/maxstaff/sanciones' },
                { text: '5. PlaceholderAPI', link: '/en/maxstaff/placeholderapi' },
                { text: '6. Database', link: '/en/maxstaff/database' },
                { text: '7. Discord', link: '/en/maxstaff/discord' }
              ]
            },
            {
              text: 'Additional',
              collapsed: true,
              items: [
                { text: '1. Customization', link: '/en/maxstaff/adicional/personalización' },
                { text: '2. Protections', link: '/en/maxstaff/adicional/protecciones' },
                { text: '3. Tools', link: '/en/maxstaff/adicional/herramientas' }
              ]
            }
          ],
          '/en/maxtools/': [
            {
              text: 'MAXTOOLS',
              items: [
                { text: '1. Home', link: '/en/maxtools/' },
                { text: '2. Features', link: '/en/maxtools/funciones' },
                { text: '3. Commands & Permissions', link: '/en/maxtools/comandos-permisos' },
                { text: '4. Menus (GUI)', link: '/en/maxtools/menus' },
                { text: '5. Discord', link: '/en/maxtools/discord' }
              ]
            },
            {
              text: 'Additional',
              collapsed: true,
              items: [
                { text: '1. Customization', link: '/en/maxtools/adicional/personalización' },
              ]
            }
          ],
          '/en/maxclear/': [
            {
              text: 'MAXCLEAR',
              items: [
                { text: '1. Home', link: '/en/maxclear/' },
                { text: '2. Features', link: '/en/maxclear/funciones' },
                { text: '3. Commands & Permissions', link: '/en/maxclear/comandos-permisos' }
              ]
            }
          ],
          '/en/maxgraves/': [
            {
              text: 'MAXGRAVES',
              items: [
                { text: '1. Home', link: '/en/maxgraves/' },
                { text: '2. Features', link: '/en/maxgraves/funciones' },
                { text: '3. Commands & Permissions', link: '/en/maxgraves/comandos-permisos' }
              ]
            }
          ],
        },

        footer: {
          message: 'For any questions or support, join our Discord server',
          copyright: 'Copyright © 2026 MaxKing'
        }
      }
    }
  },

  // Configuración global (común para ambos idiomas)
  themeConfig: {
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/Vr46JHm2kd' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
              modal: {
                noResultsText: 'No se encontraron resultados para',
                resetButtonTitle: 'Borrar criterio de búsqueda',
                footer: { selectText: 'para seleccionar', navigateText: 'para navegar', closeText: 'para cerrar' }
              }
            }
          },
          en: {
            translations: {
              button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
              modal: {
                noResultsText: 'No results found for',
                resetButtonTitle: 'Clear search query',
                footer: { selectText: 'to select', navigateText: 'to navigate', closeText: 'to close' }
              }
            }
          }
        }
      }
    }
  }
})
