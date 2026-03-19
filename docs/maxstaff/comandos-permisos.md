# Comandos y Permisos <Badge type="tip" text="Premium" />

::: info Sintaxis de Comandos
Antes de empezar, ten en cuenta la siguiente leyenda para la lectura de los comandos:
* `[ ]` **Argumento Obligatorio**
* `< >` **Argumento Opcional**
:::

## 1. Comandos Principales

Estos son los comandos base del sistema y de administración del plugin.

| Comando | Alias | Uso | Permiso |
| :--- | :--- | :--- | :--- |
| `/maxstaff` | `/ms` | `/maxstaff` | `maxstaff.admin` |
| `/maxstaff` | - | `/maxstaff reload` | `maxstaff.admin` |
| `/maxstaff` | - | `/maxstaff help` | `maxstaff.admin` |
| `/maxstaff` | - | `/maxstaff get [tipo] [jugador]` | `maxstaff.admin` |
| `/maxstaff` | - | `/maxstaff reset [tipo] [jugador]` | `maxstaff.admin` |
| `/maxstaff` | - | `/maxstaff debugperms [tipo] [jugador]` | `maxstaff.admin` |

## 2. Comandos de Moderación y Sanción

| Comando | Alias | Uso | Permiso |
| :--- | :--- | :--- | :--- |
| `/staff` | `/s`, `/staffmode` | `/staff` | `maxstaff.command.staff` | 
| `/ban` | - | `/ban [jugador] <tiempo> <razón>` | `maxstaff.punish.ban` |
| `/tempban` | - | `/tempban [jugador] [tiempo] <razón>` | `maxstaff.punish.ban` |
| `/ban-ip` | - | `/ban-ip [jugador] <tiempo> <razón>` | `maxstaff.punish.banip` |
| `/tempban-ip`| - | `/tempban-ip [jugador] [tiempo] <razón>`| `maxstaff.punish.banip` |
| `/unban` | - | `/unban [jugador]` | `maxstaff.punish.unban` |
| `/unban-ip` | - | `/unban-ip [jugador]` | `maxstaff.punish.unbanip` |
| `/mute` | - | `/mute [jugador] <tiempo> <razón>` | `maxstaff.punish.mute` |
| `/tempmute` | - | `/tempmute [tiempo] <razón>` | `maxstaff.punish.mute` |
| `/unmute` | - | `/unmute [jugador]` | `maxstaff.punish.unmute` |
| `/kick` | - | `/kick [jugador] <razón>` | `maxstaff.punish.kick` |
| `/warn` | - | `/warn [jugador] <razón>` | `maxstaff.punish.warn` |
| `/history` | - | `/history [jugador]` | `maxstaff.history` |
| `/sanction` | - | `/sanction [jugador]` | `maxstaff.punish` |
| `/freeze` | `/ss` | `/freeze [jugador]` | `maxstaff.freeze` |
| `/unfreeze` | `/uss` | `/unfreeze [jugador]` | `maxstaff.freeze` |

## 3. Utilidades del Staff

| Comando | Alias | Uso | Permiso |
| :--- | :--- | :--- | :--- |
| `/vanish` | - | `/vanish` | `maxstaff.vanish` |
| `/sc` | - | `/sc [mensaje]` | `maxstaff.staffchat` |
| `/cmdspy` | - | `/cmdspy` | `maxstaff.cmdspy` |
| `/chat` | - | `/chat [clear / mute]` | `maxstaff.chat.admin` |
| `/gamemode` | `/gm` | `/gm [1/2/3]` | `maxstaff.gamemode` |
| `/alts` | `/alt`, `/accs`| `/alts [jugador]` | `maxstaff.alts` |
| `/report` | `/reportar` | `/report [jugador]` | `maxstaff.report` |
| `/invsee` | - | `/invsee [jugador]` | `maxstaff.invsee` |
| `/revive` | - | `/revive [jugador]` | `maxstaff.revive` |

---

## Permisos Adicionales <Badge type="info" text="Configuración" />

Existen permisos que no están ligados a un comando directo, sino a funciones o protecciones pasivas dentro del servidor.

| Permiso | Descripción |
| :--- | :--- |
| `maxstaff.mode` | Permite entrar en modo Staff. |
| `maxstaff.see.vanish` | Permite ver a otros miembros del staff que estén ocultos en vanish. |
| `maxstaff.cmdspy.raw` | Permite ver argumentos sensibles sin procesar en los registros de cmdspy. |
| `maxstaff.cmdspy.raw.owners` | Nodo de grupo (usualmente para dueños) que incluye el acceso raw de cmdspy. |
| `maxstaff.report.notify` | Permite al staff recibir notificaciones cuando alguien usa el comando de reportes. |
| `maxstaff.report.bypass` | Permite al jugador evadir los tiempos de espera (cooldowns) al reportar. |
| `maxstaff.punish.override` | Permite saltarse las protecciones para sancionar a un staff protegido. |
| `maxstaff.punish.protected` | Protege a un jugador para que no pueda ser sancionado por staff de menor rango. |
| `maxstaff.client.notify` | Permite al staff recibir notificaciones del sistema de detección de clientes. |

::: warning Acceso Total
El permiso `maxstaff.admin` otorga acceso absoluto a **todos** los comandos y características del plugin. Asígnalo únicamente a administradores de extrema confianza.
:::