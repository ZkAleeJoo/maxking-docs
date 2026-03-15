# Paquete de Administración

| Permiso | Por defecto | Descripción |
|---------|-------------|-------------|
| `maxstaff.admin` | OP | Acceso total a MaxStaff. Incluye todos los permisos listados abajo. |

> ℹ️ Este permiso hereda automáticamente todos los demás permisos del plugin.

---

# Sanciones

| Permiso | Por defecto | Descripción |
|---------|-------------|-------------|
| `maxstaff.punish.ban` | OP | Usar `/ban` y `/tempban` |
| `maxstaff.punish.mute` | OP | Usar `/mute` y `/tempmute` |
| `maxstaff.punish.kick` | OP | Usar `/kick` |
| `maxstaff.punish.warn` | OP | Usar `/warn` |
| `maxstaff.punish.unban` | OP | Usar `/unban` |
| `maxstaff.punish.unmute` | OP | Usar `/unmute` |
| `maxstaff.punish.banip` | OP | Usar `/ban-ip` y `/tempban-ip` |
| `maxstaff.punish.unbanip` | OP | Usar `/unban-ip` |
| `maxstaff.punish` | OP | Usar el menú de sanciones `/sanction` |
| `maxstaff.punish.override` | OP | Saltarse la protección de staff al sancionar |
| `maxstaff.punish.protected` | `false` | Protege al jugador de sanciones por staff de menor rango |

---

# Herramientas de Staff

| Permiso | Por defecto | Descripción |
|---------|-------------|-------------|
| `maxstaff.command.staff` | OP | Usar el comando `/staff` |
| `maxstaff.mode` | OP | Entrar al modo staff |
| `maxstaff.vanish` | OP | Usar `/vanish` |
| `maxstaff.see.vanish` | OP | Ver a otros miembros del staff en vanish |
| `maxstaff.freeze` | OP | Usar `/freeze` y `/unfreeze` |
| `maxstaff.gamemode` | OP | Usar `/gm` para abrir la GUI de gamemode |
| `maxstaff.history` | OP | Usar `/history` |
| `maxstaff.invsee` | OP | Usar `/invsee` |
| `maxstaff.revive` | OP | Usar `/revive` para restaurar inventarios |
| `maxstaff.alts` | OP | Usar el sistema de seguimiento de alts |

---

# Chat y Supervisión

| Permiso | Por defecto | Descripción |
|---------|-------------|-------------|
| `maxstaff.staffchat` | OP | Usar y ver el chat de staff |
| `maxstaff.chat.admin` | OP | Silenciar y limpiar el chat global |
| `maxstaff.cmdspy` | OP | Espiar comandos con `/cmdspy` |
| `maxstaff.cmdspy.raw` | `false` | Ver argumentos sensibles en los logs de cmdspy |
| `maxstaff.cmdspy.raw.owners` | OP | Grupo para dueños con acceso completo a cmdspy raw |

---

# Reportes y Notificaciones

| Permiso | Por defecto | Descripción |
|---------|-------------|-------------|
| `maxstaff.report` | `true` (todos) | Permite a los jugadores usar `/report` |
| `maxstaff.report.notify` | OP | Recibir notificaciones de reportes |
| `maxstaff.report.bypass` | OP | Saltarse el cooldown de reportes |
| `maxstaff.client.notify` | OP | Recibir notificaciones de detección de clientes |