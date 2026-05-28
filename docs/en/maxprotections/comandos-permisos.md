# Commands & Permissions

::: info Command Syntax
* `[ ]` **Required argument**
* `< >` **Optional argument**
:::

## Main Commands

Root command: `/maxprotections`. Alias: `/mp`.

| Command | Alias | Usage | Permission |
| :--- | :--- | :--- | :--- |
| `/maxprotections` | `/mp` | `/mp create` | `maxprotections.admin` |
| `/maxprotections` | `/mp` | `/mp reload` | `maxprotections.admin` |
| `/maxprotections` | `/mp` | `/mp lang` | `maxprotections.admin` |
| `/maxprotections` | `/mp` | `/mp debug [region]` | `maxprotections.admin.debug` |
| `/maxprotections` | `/mp` | `/mp listplaced` | `maxprotections.admin.listplaced` |
| `/maxprotections` | `/mp` | `/mp report protections` | `maxprotections.admin.report` |
| `/maxprotections` | `/mp` | `/mp repair` | `maxprotections.admin.repair` |
| `/maxprotections` | `/mp` | `/mp migrate` | `maxprotections.admin.repair` |
| `/maxprotections` | `/mp` | `/mp repair cleanup` | `maxprotections.admin.repair` |

## Protection Commands

Root command: `/protection`. Alias: `/p`.

| Command | Alias | Usage | Permission |
| :--- | :--- | :--- | :--- |
| `/protection` | `/p` | `/p give [player] [protection] [amount]` | `maxprotections.protection.give` |
| `/protection` | `/p` | `/p buy [protection]` | `maxprotections.protection.buy` |
| `/protection` | `/p` | `/p rent <region or alias>` | `maxprotections.protection` + owner |
| `/protection` | `/p` | `/p fly` | `maxprotections.protection.fly` + protection access |
| `/protection` | `/p` | `/p menu` | Owner/member-admin rank or `maxprotections.admin` |
| `/protection` | `/p` | `/p settings` | `maxprotections.flags` + management access |
| `/protection` | `/p` | `/p member` | Owner/member-admin rank or `maxprotections.admin` |
| `/protection` | `/p` | `/p members` | Alias for `/p member` |
| `/protection` | `/p` | `/p member add [player]` | Owner/member-admin rank or `maxprotections.admin` |
| `/protection` | `/p` | `/p member remove [player]` | Owner/member-admin rank or `maxprotections.admin` |
| `/protection` | `/p` | `/p trust [player]` | Shortcut for inviting a member |
| `/protection` | `/p` | `/p untrust [player]` | Shortcut for removing a member |
| `/protection` | `/p` | `/p invite accept [id]` | Invited player |
| `/protection` | `/p` | `/p invite deny [id]` | Invited player |
| `/protection` | `/p` | `/p teleport [id or alias]` | Protection access |
| `/protection` | `/p` | `/p tp [id or alias]` | Alias for `/p teleport` |
| `/protection` | `/p` | `/p home` | Opens accessible homes |
| `/protection` | `/p` | `/p homes` | Alias for `/p home` |
| `/protection` | `/p` | `/p sethome` | Current protection owner |
| `/protection` | `/p` | `/p set-home` | Alias for `/p sethome` |
| `/protection` | `/p` | `/p alias [alias]` | Owner/member-admin rank or `maxprotections.admin` |
| `/protection` | `/p` | `/p info <id or alias>` | Protection access |
| `/protection` | `/p` | `/p view` | Player inside a protection |
| `/protection` | `/p` | `/p leave` | Non-owner member inside a protection |
| `/protection` | `/p` | `/p list` | Lists owned protections |

## Permissions

| Permission | Default | Description |
| :--- | :--- | :--- |
| `maxprotections.admin` | OP | Full access and includes admin/protection child permissions. |
| `maxprotections.admin.debug` | OP | Allows `/mp debug [region]`. |
| `maxprotections.admin.listplaced` | OP | Allows `/mp listplaced`. |
| `maxprotections.admin.repair` | OP | Allows `/mp repair`, `/mp migrate`, and `/mp repair cleanup`. |
| `maxprotections.admin.report` | OP | Allows `/mp report protections`. |
| `maxprotections.protection` | Everyone | Allows base protection commands such as `/p rent`. |
| `maxprotections.protection.give` | OP | Allows giving stones with `/p give`. |
| `maxprotections.protection.buy` | Everyone | Allows buying stones with `/p buy`. |
| `maxprotections.protection.fly` | OP | Allows `/p fly` inside accessible protections. |
| `maxprotections.protection.remove.others` | OP | Allows removing another player's protection stones. |
| `maxprotections.flags` | Everyone | Allows changing flags from the menu when the player also has valid rank/access. |

## Dynamic Limit Permissions

Limit permissions come from `limits.groups` in `config.yml`. Defaults:

| Group | Permission | Priority |
| :--- | :--- | :--- |
| `vip` | `maxprotections.limits.vip` | `10` |
| `mvp` | `maxprotections.limits.mvp` | `20` |

You can create more groups and change their permission. The player uses the matching group with the highest priority.

::: warning Full Access
`maxprotections.admin` includes sensitive permissions such as giving stones, repairing tracking, viewing reports, and removing other players' protections. Assign it only to trusted administrators.
:::
