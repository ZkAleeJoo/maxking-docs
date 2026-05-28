# Commands and Permissions

::: info Command Syntax
Before getting started, keep this legend in mind:
* `[ ]` **Required argument**
* `< >` **Optional argument**
:::

## 1. Main Commands

These commands manage MaxStaff and require `maxstaff.admin`.

| Command | Alias | Usage | Permission |
| :--- | :--- | :--- | :--- |
| `/maxstaff` | `/ms` | `/maxstaff` or `/maxstaff help` | `maxstaff.admin` |
| `/maxstaff` | `/ms` | `/maxstaff reload` | `maxstaff.admin` |
| `/maxstaff` | `/ms` | `/maxstaff cleanupbans` | `maxstaff.admin` |
| `/maxstaff` | `/ms` | `/maxstaff reset [player] [BAN/MUTE/KICK/WARN/ALL]` | `maxstaff.admin` |
| `/maxstaff` | `/ms` | `/maxstaff take [player] [BAN/MUTE/KICK/WARN] <amount>` | `maxstaff.admin` |
| `/maxstaff` | `/ms` | `/maxstaff debugperm [player] [mute/ban/kick/warn]` | `maxstaff.admin` |

::: tip MySQL
`/maxstaff cleanupbans` only removes expired punishments when the plugin is using MySQL storage.
:::

## 2. Moderation and Punishment

| Command | Alias | Usage | Permission |
| :--- | :--- | :--- | :--- |
| `/ban` | - | `/ban [player] <time> <reason>` | `maxstaff.punish.ban` |
| `/tempban` | - | `/tempban [player] <time> <reason>` | `maxstaff.punish.ban` |
| `/ban-ip` | - | `/ban-ip [player] <time> <reason>` | `maxstaff.punish.banip` |
| `/tempban-ip` | - | `/tempban-ip [player] <time> <reason>` | `maxstaff.punish.banip` |
| `/unban` | - | `/unban [player]` | `maxstaff.punish.unban` |
| `/unban-ip` | - | `/unban-ip [player]` | `maxstaff.punish.unbanip` |
| `/mute` | - | `/mute [player] <time> <reason>` | `maxstaff.punish.mute` |
| `/tempmute` | - | `/tempmute [player] <time> <reason>` | `maxstaff.punish.mute` |
| `/unmute` | - | `/unmute [player]` | `maxstaff.punish.unmute` |
| `/kick` | - | `/kick [player] <reason>` | `maxstaff.punish.kick` |
| `/warn` | - | `/warn [player] <reason>` | `maxstaff.punish.warn` |
| `/history` | - | `/history [player]` | `maxstaff.history` |
| `/sanction` | - | `/sanction [player]` | `maxstaff.punish` |
| `/sanction` | - | `/sanction list` | `maxstaff.sanctions.list` |
| `/silent` | - | `/silent [ban/tempban/mute/tempmute/kick/warn/ban-ip/tempban-ip] [player] <time> <reason>` | `maxstaff.punish.silent` + the punishment permission |

`maxstaff.admin` can also use punishment commands even without the specific node. Durations accept tokens such as `10s`, `5m`, `1h`, `7d`, `30d`, or `perm`.

## 3. Staff Utilities

| Command | Alias | Usage | Permission |
| :--- | :--- | :--- | :--- |
| `/staff` | `/s`, `/staffmode` | `/staff` | `maxstaff.command.staff` |
| `/vanish` | - | `/vanish` | `maxstaff.vanish` |
| `/freeze` | `/ss` | `/freeze [player]` | `maxstaff.freeze` |
| `/unfreeze` | `/uss` | `/unfreeze [player]` | `maxstaff.freeze` |
| `/sc` | `/staffchat` | `/sc [message]` | `maxstaff.staffchat` |
| `/cmdspy` | - | `/cmdspy` | `maxstaff.cmdspy` |
| `/chat` | - | `/chat [clear/mute]` | `maxstaff.chat.admin` |
| `/gamemode` | `/gm` | `/gm [0/1/2/3]` | `maxstaff.gamemode` |
| `/alts` | `/alt`, `/accs` | `/alts [player]` | `maxstaff.alts` |
| `/report` | `/reportar` | `/report [player] [reason]` | `maxstaff.report` |
| `/invsee` | - | `/invsee [player]` | `maxstaff.invsee` |
| `/revive` | - | `/revive` | `maxstaff.revive` |
| `/fly` | - | `/fly <1/2/3>` | `maxstaff.fly` |
| `/xray` | - | `/xray` | `maxstaff.antixray.alert` |

::: info Invsee and revive
`/invsee` uses `maxstaff.invsee` to view/edit online inventories and open offline snapshots. `maxstaff.revive` is also accepted by inspection autocomplete, but the `/invsee` command itself is protected by `maxstaff.invsee`.
:::

## 4. Additional Permissions

| Permission | Description |
| :--- | :--- |
| `maxstaff.admin` | Parent permission for plugin administration and commands. |
| `maxstaff.mode` | Legacy alias for staff mode; includes `maxstaff.command.staff`. |
| `maxstaff.see.vanish` | Allows seeing vanished staff members. |
| `maxstaff.vanish.join` | Automatically enables vanish on join. |
| `maxstaff.cmdspy.raw` | Allows viewing unfiltered sensitive arguments in cmdspy. |
| `maxstaff.cmdspy.raw.owners` | Owner group node; includes `maxstaff.cmdspy.raw`. |
| `maxstaff.report.notify` | Allows receiving report notifications. |
| `maxstaff.report.bypass` | Allows bypassing `/report` cooldowns. |
| `maxstaff.punish.override` | Allows punishing protected players. |
| `maxstaff.punish.protected` | Protects the player from staff without override. |
| `maxstaff.client.notify` | Allows receiving client detection alerts. |
| `maxstaff.antixray.bypass` | Prevents AntiXray alerts from being generated for that player. |

::: warning Full Access
Only assign `maxstaff.admin` to trusted administrators. The plugin also has protective nodes such as `maxstaff.punish.protected` and `maxstaff.vanish.join` that are not granted as normal admin command access.
:::
