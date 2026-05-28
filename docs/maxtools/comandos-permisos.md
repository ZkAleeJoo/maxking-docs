# Comandos y Permisos

MaxTools usa un comando principal: `/maxtools`.

::: tip Alias del comando
Puedes usar `/met` como atajo para todos los subcomandos de `/maxtools`.
:::

## Comandos para Jugadores

| Comando | Alias | Descripcion | Permiso |
| :--- | :--- | :--- | :--- |
| `/met menu` | `hub`, `gui` | Abre el menu principal de evolucion de la herramienta en mano. | `maxtools.menu` (default: true) |
| `/met toolinfo <gui/text/legacy>` | - | Muestra el progreso de evolucion de la herramienta actual. `gui` fuerza menu; `text` o `legacy` fuerza chat. | `maxtools.toolinfo` (default: true) |

## Comandos de Administracion

Usa `maxtools.admin` para entregar todas las funciones administrativas sin asignar cada permiso por separado.

| Comando | Alias | Descripcion | Permiso |
| :--- | :--- | :--- | :--- |
| `/met reload` | - | Recarga configuracion, menus, idioma, evolucion, webhook y estado runtime. | `maxtools.admin.reload` |
| `/met preview` | `adminpreview` | Abre el menu de previsualizacion para administradores. | `maxtools.admin.preview` |
| `/met discordtest` | `dctest` | Envia un mensaje de prueba al webhook de Discord. | `maxtools.admin.discordtest` |
| `/met testtool [material] <ability/all> <usage>` | `testtools` | Crea una herramienta de prueba registrada por el plugin. | `maxtools.admin.testtool` |
| `/met cleartesttool <id>` | `cleartest`, `untesttool`, `cleartestool`, `cleartestools` | Elimina la herramienta de prueba en mano o borra un ID registrado. | `maxtools.admin.cleartesttool` |
| `/met admintoolsremove confirm` | `adminremove`, `purgetools`, `toolspurge` | Elimina herramientas custom MaxTools de inventarios cargados y limpia el registro. Es destructivo. | `maxtools.admin.admintoolsremove` |
| `/met lang` | - | Abre el selector visual de idioma. | `maxtools.admin.lang` |
| `/met sync` | - | Sincroniza la herramienta en mano con los milestones actuales de `evolution.yml`. | `maxtools.admin.sync` |

## Placeholders Configurables

MaxTools no registra una expansion propia de PlaceholderAPI. Los placeholders actuales son internos de configuracion, especialmente para Discord:

| Placeholder | Donde se usa |
| :--- | :--- |
| `{player}` | Jugador que desbloqueo el evento o ejecuto el test. |
| `{player_uuid}` | UUID del jugador. |
| `{tool}` | Nombre visible de la herramienta. |
| `{tool_type}` | Material/tipo de herramienta. |
| `{blocks}` | Progreso en bloques/uso. |
| `{ability}` | Habilidad desbloqueada. |
| `{reward}` | Recompensa del milestone. |
| `{timestamp}` | Marca de tiempo del evento. |
| `{server}` | Nombre configurado en `discord.server-name`. |
| `{server_software}` | Software del servidor, por ejemplo Paper. |
| `{plugin}` | Nombre del plugin. |

::: warning Comando destructivo
`/met admintoolsremove confirm` borra herramientas MaxTools detectadas en inventarios cargados, entidades y registro de base de datos. Usalo solo para mantenimiento administrativo.
:::
