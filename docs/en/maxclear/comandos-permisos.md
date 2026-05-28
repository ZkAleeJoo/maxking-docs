# Commands and Permissions

::: info Command Syntax
* `[ ]` **Required argument**
* `< >` **Optional argument**
:::

## Command List

| Command | Alias | Usage | Permission |
| :--- | :--- | :--- | :--- |
| `/maxclear` | `/mc` | `/maxclear` | `maxclear.admin` |
| `/maxclear` | `/mc` | `/maxclear reload` | `maxclear.admin` |
| `/maxclear` | `/mc` | `/maxclear clear` | `maxclear.admin` |
| `/maxclear` | `/mc` | `/maxclear get <author/version>` | `maxclear.admin` |

::: info Console
Console can run `reload`, `clear`, and `get`. In game, players need `maxclear.admin`.
:::

## Config Placeholders

MaxClear does not register a PlaceholderAPI expansion. Its placeholders are internal `config.yml` message tokens:

| Placeholder | Usage |
| :--- | :--- |
| `{time}` | Seconds remaining before an automatic clear. |
| `{count}` | Number of removed entities. |
| `{player}` | Player who executed a manual clear. |
| `{version}` | Available/current version in update-check messages. |

::: warning Full Access
`maxclear.admin` grants access to every cleanup and reload command in the plugin.
:::
