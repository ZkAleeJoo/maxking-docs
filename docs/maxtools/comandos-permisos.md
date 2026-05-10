# Comandos y Permisos

El plugin utiliza un comando principal e intuitivo.

::: tip Alias del comando
En lugar de escribir `/maxtools`, tus jugadores y tú pueden utilizar el atajo `/met`.
:::

## Comandos para Jugadores

| Comando | Descripción | Permiso |
|---|---|---|
| `/met menu` (o `hub`, `gui`) | Abre el menú principal de evolución de la herramienta. | `maxtools.menu` (Por defecto: true) |
| `/met toolinfo [gui/text]` | Muestra el progreso de evolución de la herramienta actual. | `maxtools.toolinfo` (Por defecto: true) |

## Comandos de Administración

Para tener acceso a todas las funciones administrativas sin agregar permisos uno por uno, puedes usar el permiso padre: `maxtools.admin`.

| Comando | Descripción | Permiso |
|---|---|---|
| `/met lang` | Abre el selector visual para cambiar el idioma (Inglés/Español). | `maxtools.admin.lang` |
| `/met reload` | Recarga toda la configuración (menús, evolución, lenguajes y webhook). | `maxtools.admin.reload` |
| `/met preview` | Abre el menú de previsualización para administradores. | `maxtools.admin.preview` |
| `/met discordtest` | Envía un mensaje de prueba al Webhook de Discord. | `maxtools.admin.discordtest` |
| `/met testtool` | Genera una herramienta de prueba registrada por el plugin. | `maxtools.admin.testtool` |
| `/met cleartesttool` | Elimina la herramienta de prueba o limpia IDs de prueba. | `maxtools.admin.cleartesttool` |