# INFORMACIÓN
> [ ] **Obligatorio** `|` < > **Opcional**

## 1. COMANDOS Y PERMISOS

| Comando | Alias | Uso | Permiso |
|---------|-------|-------|-------|
| `/maxstaff` | `/ms` | - | maxstaff.admin |
| `/maxstaff` | - | `/maxstaff reload` | maxstaff.admin |
| `/maxstaff` | - | `/maxstaff help` | maxstaff.admin |
| `/maxstaff` | - | `/maxstaff get [tipo] [jugador]` | maxstaff.admin |
| `/maxstaff` | - | `/maxstaff reset [tipo] [jugador]` | maxstaff.admin |
| `/maxstaff` | - | `/maxstaff debugperms [tipo] [jugador]` | maxstaff.admin |
| `/staff` | `/s`, `/staffmode` | - | maxstaff.command.staff | 
| `/ban` | - | `/ban [jugador] <tiempo> <razón>` | maxstaff.punish.ban |
| `/tempban` | - | `/tempban [jugador] [tiempo] <razón>` | maxstaff.punish.ban |
| `/mute` | - | `/mute [jugador] <tiempo> <razón>` | maxstaff.punish.mute |
| `/tempmute` | - | `/tempmute [tiempo] <razón>` | maxstaff.punish.mute |
| `/kick` | - | `/kick [jugador] <razón>` | maxstaff.punish.kick |
| `/unban` | - | `/unban [jugador]` | maxstaff.punish.unban |
| `/unmute` | - | `/unmute [jugador]` | maxstaff.punish.unmute |
| `/warn` | - | `/warn [jugador] <razón>` | maxstaff.punish.warn |
| `/history` | - | `/history [jugador]` | maxstaff.history |
| `/vanish` | - | `/vanish` | maxstaff.vanish |
| `/ban-ip` | - | `/ban-ip [jugador] <tiempo> <razón>` | maxstaff.punish.banip |
| `/tempban-ip` | - | `/tempban-ip [jugador] [tiempo] <razón>` | maxstaff.punish.banip |
| `/unban-ip` | - | `/unban-ip [jugador]` | maxstaff.punish.unbanip |
| `/sc` | - | `/sc [mensaje]` | maxstaff.staffchat |
| `/cmdspy` | - | - | maxstaff.cmdspy |
| `/chat` | - | `/chat [clear]-[mute]` | maxstaff.chat.admin |
| `/gamemode` | `/gm` | `/gm [1-2-3]` | maxstaff.gamemode |
| `/alts` | `/alt - /accs` | `/alts [jugador]` | maxstaff.alts |
| `/sanction` | - | `/sanction [jugador]` | maxstaff.punish |
| `/freeze` | `/ss` | `/freeze [jugador]` | maxstaff.freeze |
| `/unfreeze` | `/uss` | `/unfreeze [jugador]` | maxstaff.freeze |
| `/report` | `/reportar` | `/report [jugador]` | maxstaff.report |
| `/invsee` | - | `/invsee [jugador]` | maxstaff.invsee |
| `/revive` | - | `/revive [jugador]` | maxstaff.revive |

## 2. PERMISOS ADICIONALES

| Permiso | Descripción |
|---------|-------------|
| `maxstaff.mode` | Permite entrar en modo Staff |
| `maxstaff.see.vanish` | Permite ver a otros miembros del staff que estén en vanish |
| `maxstaff.cmdspy.raw` | Permite ver argumentos sensibles sin procesar en los registros de cmdspy |
| `maxstaff.cmdspy.raw.owners` | Nodo de grupo (usualmente para dueños) que incluye el acceso raw de cmdspy |
| `maxstaff.report.notify` | Permite al staff recibir notificaciones cuando alguien usa el comando de reportes |
| `maxstaff.report.bypass` | Permite al jugador evadir los tiempos de espera (cooldowns) al reportar |
| `maxstaff.punish.override` | Permite saltarse las protecciones para poder sancionar a un staff protegido |
| `maxstaff.punish.protected` | Protege a un jugador para que no pueda ser sancionado por miembros del staff de menor rango |
| `maxstaff.client.notify` | Permite al staff recibir notificaciones del sistema de detección de clientes |

> El permiso `maxstaff.admin` da acceso a todos los comandos del plugin