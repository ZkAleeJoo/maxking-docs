# Commands and Permissions

::: info Command Syntax
Before getting started, keep the following legend in mind when reading commands:

* `[ ]` **Required Argument**
* `< >` **Optional Argument**
  :::

## 1. Main Commands

These are the core system and administration commands of the plugin.

| Command     | Alias | Usage                                  | Permission       |
| :---------- | :---- | :------------------------------------- | :--------------- |
| `/maxstaff` | `/ms` | `/maxstaff`                            | `maxstaff.admin` |
| `/maxstaff` | -     | `/maxstaff reload`                     | `maxstaff.admin` |
| `/maxstaff` | -     | `/maxstaff help`                       | `maxstaff.admin` |
| `/maxstaff` | -     | `/maxstaff get [type] [player]`        | `maxstaff.admin` |
| `/maxstaff` | -     | `/maxstaff reset [type] [player]`      | `maxstaff.admin` |
| `/maxstaff` | -     | `/maxstaff debugperms [type] [player]` | `maxstaff.admin` |

## 2. Moderation and Punishment Commands

| Command       | Alias              | Usage                                  | Permission                |
| :------------ | :----------------- | :------------------------------------- | :------------------------ |
| `/staff`      | `/s`, `/staffmode` | `/staff`                               | `maxstaff.command.staff`  |
| `/ban`        | -                  | `/ban [player] <time> <reason>`        | `maxstaff.punish.ban`     |
| `/tempban`    | -                  | `/tempban [player] [time] <reason>`    | `maxstaff.punish.ban`     |
| `/ban-ip`     | -                  | `/ban-ip [player] <time> <reason>`     | `maxstaff.punish.banip`   |
| `/tempban-ip` | -                  | `/tempban-ip [player] [time] <reason>` | `maxstaff.punish.banip`   |
| `/unban`      | -                  | `/unban [player]`                      | `maxstaff.punish.unban`   |
| `/unban-ip`   | -                  | `/unban-ip [player]`                   | `maxstaff.punish.unbanip` |
| `/mute`       | -                  | `/mute [player] <time> <reason>`       | `maxstaff.punish.mute`    |
| `/tempmute`   | -                  | `/tempmute [time] <reason>`            | `maxstaff.punish.mute`    |
| `/unmute`     | -                  | `/unmute [player]`                     | `maxstaff.punish.unmute`  |
| `/kick`       | -                  | `/kick [player] <reason>`              | `maxstaff.punish.kick`    |
| `/warn`       | -                  | `/warn [player] <reason>`              | `maxstaff.punish.warn`    |
| `/history`    | -                  | `/history [player]`                    | `maxstaff.history`        |
| `/sanction`   | -                  | `/sanction [player]`                   | `maxstaff.punish`         |
| `/freeze`     | `/ss`              | `/freeze [player]`                     | `maxstaff.freeze`         |
| `/unfreeze`   | `/uss`             | `/unfreeze [player]`                   | `maxstaff.freeze`         |
| `fly`         |                    | `/fly 1 2 3`                           | `maxstaff.fly`            |

## 3. Staff Utilities

| Command     | Alias           | Usage                  | Permission            |
| :---------- | :-------------- | :--------------------- | :-------------------- |
| `/vanish`   | -               | `/vanish`              | `maxstaff.vanish`     |
| `/sc`       | -               | `/sc [message]`        | `maxstaff.staffchat`  |
| `/cmdspy`   | -               | `/cmdspy`              | `maxstaff.cmdspy`     |
| `/chat`     | -               | `/chat [clear / mute]` | `maxstaff.chat.admin` |
| `/gamemode` | `/gm`           | `/gm [1/2/3]`          | `maxstaff.gamemode`   |
| `/alts`     | `/alt`, `/accs` | `/alts [player]`       | `maxstaff.alts`       |
| `/report`   | `/reportar`     | `/report [player]`     | `maxstaff.report`     |
| `/invsee`   | -               | `/invsee [player]`     | `maxstaff.invsee`     |
| `/revive`   | -               | `/revive [player]`     | `maxstaff.revive`     |

---

## Additional Permissions

There are permissions that are not tied to a direct command, but rather to passive features or protections within the server.

| Permission                   | Description                                                                 |
| :--------------------------- | :-------------------------------------------------------------------------- |
| `maxstaff.mode`              | Allows entering Staff Mode.                                                 |
| `maxstaff.see.vanish`        | Allows seeing other staff members who are hidden in vanish mode.            |
| `maxstaff.cmdspy.raw`        | Allows viewing raw sensitive arguments in cmdspy logs.                      |
| `maxstaff.cmdspy.raw.owners` | Group node (usually for owners) that includes raw cmdspy access.            |
| `maxstaff.report.notify`     | Allows staff to receive notifications when someone uses the report command. |
| `maxstaff.report.bypass`     | Allows players to bypass report cooldowns.                                  |
| `maxstaff.punish.override`   | Allows bypassing protections to punish protected staff members.             |
| `maxstaff.punish.protected`  | Protects a player from being punished by lower-ranked staff.                |
| `maxstaff.client.notify`     | Allows staff to receive notifications from the client detection system.     |

::: warning Full Access
The `maxstaff.admin` permission grants full access to **all** commands and features of the plugin. Assign it only to highly trusted administrators.
:::