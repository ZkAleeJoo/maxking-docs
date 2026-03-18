# Sistema de Protecciones (Jerarquía)
> MaxStaff cuenta con un sistema de seguridad interno para evitar que miembros del staff de menor rango (ej. Ayudantes o Moderadores) sancionen por accidente o por malicia a los Administradores o Dueños del servidor.

## 1. Proteger a un Staff
Para hacer que un usuario sea "inmune" a las sanciones dentro del menú de MaxStaff o mediante comandos, debes otorgarle el siguiente permiso desde tu plugin de rangos (ej. [LuckPerms](https://luckperms.net/)):

- **Permiso:** `maxstaff.punish.protected`
- **Efecto:** Si alguien intenta banear, mutear o kickear a este jugador, el plugin bloqueará la acción automáticamente.

## 2. Evadir la Protección (Override)
Los Dueños o Administradores Supremos necesitan tener la capacidad de sancionar a cualquier persona, incluso si esa persona tiene el permiso de protección mencionado arriba. Para ello, existe el permiso de "Override" (Anulación):

- **Permiso:** `maxstaff.punish.override`
- **Efecto:** Permite ignorar las protecciones. Un jugador con este permiso puede sancionar a quien sea, sin importar si el objetivo está protegido o no.

> **Recomendación de uso:** Dale `maxstaff.punish.protected` a todos tus Administradores y Moderadores.
> Dale `maxstaff.punish.override` **solo** a los Dueños (Owners) o al rango más alto de tu servidor.