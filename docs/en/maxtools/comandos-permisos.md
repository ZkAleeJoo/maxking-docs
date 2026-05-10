# Commands and Permissions

The plugin uses one main and intuitive command.

::: tip Command Alias
Instead of typing `/maxtools`, you and your players can use the shortcut `/met`.
:::

## Player Commands

| Command | Description | Permission |
|---|---|---|
| `/met menu` (o `hub`, `gui`) | Opens the main tool evolution menu. | `maxtools.menu` (Default: true) |
| `/met toolinfo [gui/text]` | Shows the evolution progress of the current tool. | `maxtools.toolinfo` (Default: true) |

## Administration Commands

To have access to all administrative functions without adding permissions one by one, you can use the parent permission: `maxtools.admin`.

| Command | Description | Permission |
|---|---|---|
| `/met lang` | Opens the visual selector to change the language (English/Spanish). | `maxtools.admin.lang` |
| `/met reload` | Reloads all configuration (menus, evolution, languages, and webhook). | `maxtools.admin.reload` |
| `/met preview` | Opens the preview menu for administrators. | `maxtools.admin.preview` |
| `/met discordtest` | Sends a test message to the Discord Webhook. | `maxtools.admin.discordtest` |
| `/met testtool` | Generates a test tool registered by the plugin. | `maxtools.admin.testtool` |
| `/met cleartesttool` | Deletes the test tool or clears test IDs. | `maxtools.admin.cleartesttool` |