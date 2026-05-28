# Commands and Permissions

::: info Command Syntax
* `[ ]` **Required argument**
* `< >` **Optional argument**
:::

## 1. Main Commands

| Command | Alias | Usage | Permission |
| :--- | :--- | :--- | :--- |
| `/maxgraves` | `/maxgrave`, `/mg`, `/graves` | `/maxgraves` | - |
| `/maxgraves` | `/maxgrave`, `/mg`, `/graves` | `/maxgraves reload` | `maxgrave.admin` |
| `/maxgraves` | `/maxgrave`, `/mg`, `/graves` | `/maxgraves info` | `maxgrave.info` (default: true) |

## 2. Additional Permissions

| Permission | Description |
| :--- | :--- |
| `maxgrave.admin` | Administrative access; includes `maxgrave.tp` and `maxgrave.info`. |
| `maxgrave.tp` | Allows teleporting to a grave using the locator paper. |
| `maxgrave.info` | Allows opening the grave information menu with `/maxgraves info`. |

## 3. Config Placeholders

MaxGraves does not register a PlaceholderAPI expansion. These placeholders are used inside `config.yml`, especially in holograms and the `/maxgraves info` menu.

| Placeholder | Where it is used |
| :--- | :--- |
| `{player}` | Name of the grave owner. |
| `{player_level}` | Player experience level at death. |
| `{killer}` | Killer name when available. |
| `{time_left}` | Remaining time before the grave despawns. |
| `{x}` | Grave X coordinate. |
| `{y}` | Grave Y coordinate. |
| `{z}` | Grave Z coordinate. |
| `{world}` | Grave world, used in the info menu. |
| `{index}` | Visual grave number in the info menu. |
| `{id}` | Internal grave UUID, used in the info menu. |

::: warning Full Access
`maxgrave.admin` grants reload access and administrative child permissions. Do not assign it to normal players.
:::
