# Commands and Permissions

MaxTools uses one main command: `/maxtools`.

::: tip Command Alias
You can use `/met` as a shortcut for every `/maxtools` subcommand.
:::

## Player Commands

| Command | Alias | Description | Permission |
| :--- | :--- | :--- | :--- |
| `/met menu` | `hub`, `gui` | Opens the main evolution menu for the held tool. | `maxtools.menu` (default: true) |
| `/met toolinfo <gui/text/legacy>` | - | Shows the current tool evolution progress. `gui` forces the menu; `text` or `legacy` forces chat output. | `maxtools.toolinfo` (default: true) |

## Administration Commands

Use `maxtools.admin` to grant every administrative feature without assigning each permission one by one.

| Command | Alias | Description | Permission |
| :--- | :--- | :--- | :--- |
| `/met reload` | - | Reloads configuration, menus, language, evolution data, webhook, and runtime state. | `maxtools.admin.reload` |
| `/met preview` | `adminpreview` | Opens the administrator preview menu. | `maxtools.admin.preview` |
| `/met discordtest` | `dctest` | Sends a test message to the Discord webhook. | `maxtools.admin.discordtest` |
| `/met testtool [material] <ability/all> <usage>` | `testtools` | Creates a registered test tool. | `maxtools.admin.testtool` |
| `/met cleartesttool <id>` | `cleartest`, `untesttool`, `cleartestool`, `cleartestools` | Deletes the held test tool or removes a registered test ID. | `maxtools.admin.cleartesttool` |
| `/met admintoolsremove confirm` | `adminremove`, `purgetools`, `toolspurge` | Removes MaxTools custom tools from loaded inventories and clears the registry. This is destructive. | `maxtools.admin.admintoolsremove` |
| `/met lang` | - | Opens the visual language selector. | `maxtools.admin.lang` |
| `/met sync` | - | Synchronizes the held tool with the current `evolution.yml` milestones. | `maxtools.admin.sync` |

## Config Placeholders

MaxTools does not register its own PlaceholderAPI expansion. Current placeholders are internal configuration placeholders, especially for Discord:

| Placeholder | Where it is used |
| :--- | :--- |
| `{player}` | Player who unlocked the event or ran the test. |
| `{player_uuid}` | Player UUID. |
| `{tool}` | Display name of the tool. |
| `{tool_type}` | Tool material/type. |
| `{blocks}` | Block/use progress. |
| `{ability}` | Unlocked ability. |
| `{reward}` | Milestone reward. |
| `{timestamp}` | Event timestamp. |
| `{server}` | Name configured in `discord.server-name`. |
| `{server_software}` | Server software, for example Paper. |
| `{plugin}` | Plugin name. |

::: warning Destructive Command
`/met admintoolsremove confirm` removes detected MaxTools tools from loaded inventories, entities, and the database registry. Use it only for administrative maintenance.
:::
