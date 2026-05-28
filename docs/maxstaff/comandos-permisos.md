# Comandos y Permisos

::: info Sintaxis de Comandos
Antes de empezar, ten en cuenta la siguiente leyenda:
* `[ ]` **Argumento obligatorio**
* `< >` **Argumento opcional**
:::

## 1. Comandos Principales

Estos comandos administran MaxStaff y requieren `maxstaff.admin`.

| Comando | Alias | Uso | Permiso |
| :--- | :--- | :--- | :--- |
| `/maxstaff` | `/ms` | `/maxstaff` o `/maxstaff help` | `maxstaff.admin` |
| `/maxstaff` | `/ms` | `/maxstaff reload` | `maxstaff.admin` |
| `/maxstaff` | `/ms` | `/maxstaff cleanupbans` | `maxstaff.admin` |
| `/maxstaff` | `/ms` | `/maxstaff reset [player] [BAN/MUTE/KICK/WARN/ALL]` | `maxstaff.admin` |
| `/maxstaff` | `/ms` | `/maxstaff take [player] [BAN/MUTE/KICK/WARN] <amount>` | `maxstaff.admin` |
| `/maxstaff` | `/ms` | `/maxstaff debugperm [player] [mute/ban/kick/warn]` | `maxstaff.admin` |

::: tip MySQL
`/maxstaff cleanupbans` solo limpia sanciones expiradas cuando el plugin esta usando almacenamiento MySQL.
:::

## 2. Moderacion y Sanciones

| Comando | Alias | Uso | Permiso |
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
| `/silent` | - | `/silent [ban/tempban/mute/tempmute/kick/warn/ban-ip/tempban-ip] [player] <time> <reason>` | `maxstaff.punish.silent` + permiso de la sancion |

`maxstaff.admin` tambien puede usar los comandos de sanciones aunque no tenga el nodo especifico. Las duraciones aceptan tokens como `10s`, `5m`, `1h`, `7d`, `30d` o `perm`.

## 3. Utilidades del Staff

| Comando | Alias | Uso | Permiso |
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

::: info Invsee y revive
`/invsee` usa `maxstaff.invsee` para ver/editar inventarios online y abrir snapshots offline. El permiso `maxstaff.revive` tambien aparece en el autocompletado de inspeccion, pero el comando `/invsee` queda protegido por `maxstaff.invsee`.
:::

## 4. Permisos Adicionales

| Permiso | Descripcion |
| :--- | :--- |
| `maxstaff.admin` | Permiso padre para administracion y comandos del plugin. |
| `maxstaff.mode` | Alias heredado para modo staff; incluye `maxstaff.command.staff`. |
| `maxstaff.see.vanish` | Permite ver staff oculto en vanish. |
| `maxstaff.vanish.join` | Activa vanish automaticamente al entrar. |
| `maxstaff.cmdspy.raw` | Permite ver argumentos sensibles sin filtrar en cmdspy. |
| `maxstaff.cmdspy.raw.owners` | Nodo de grupo para propietarios; incluye `maxstaff.cmdspy.raw`. |
| `maxstaff.report.notify` | Permite recibir notificaciones de reportes. |
| `maxstaff.report.bypass` | Permite saltar el cooldown de `/report`. |
| `maxstaff.punish.override` | Permite sancionar jugadores protegidos. |
| `maxstaff.punish.protected` | Protege al jugador de sanciones de staff sin override. |
| `maxstaff.client.notify` | Permite recibir alertas de deteccion de cliente. |
| `maxstaff.antixray.bypass` | Evita generar alertas AntiXray para ese jugador. |

::: warning Acceso Total
Asigna `maxstaff.admin` solo a administradores de confianza. El plugin tambien tiene nodos protectores como `maxstaff.punish.protected` y `maxstaff.vanish.join` que no se entregan como permisos normales a todos los admins.
:::
