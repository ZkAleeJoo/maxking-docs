# Herramientas de Moderación
> MaxStaff incluye un conjunto de utilidades diseñadas para facilitar el control del servidor, revertir daños causados por hackers y monitorear a los jugadores de forma avanzada.

## 1. Restauración de Inventarios (Revive)
> El sistema guarda automáticamente una captura (snapshot) del inventario y la armadura de un jugador cada vez que muere. Es la herramienta perfecta para devolverle sus cosas a un usuario si fue asesinado por un tramposo o un error del servidor.

- **Comando:** `/revive <jugador>`
- **Uso:** Al ejecutar el comando, se abrirá un menú interactivo mostrando el historial de muertes recientes del jugador. Con un solo clic, el inventario previo a esa muerte será restaurado por completo.

## 2. Detección de Clientes (Client Tracker)
> MaxStaff detecta automáticamente la marca del cliente que están usando los jugadores para conectarse al servidor (Vanilla, Lunar Client, Forge, Fabric, etc.).

- **¿Cómo funciona?** El plugin lee los canales de datos internos al momento de la conexión.
- **Alertas Staff:** Los miembros del equipo que tengan el permiso `maxstaff.client.notify` recibirán un mensaje silencioso en el chat indicando qué cliente está usando cada jugador al entrar, ayudando a detectar posibles clientes modificados.

## 3. Control de Chat Global
> Utilidades de respuesta rápida para moderar la comunicación pública en caso de raideos, spam masivo o toxicidad extrema.

- **Limpiar Chat:** Usa `/chat clear` para borrar todo el historial del chat visible al instante. Esto elimina mensajes inapropiados o links maliciosos de la pantalla de todos los jugadores.
- **Bloquear Chat:** Usa `/chat mute` para silenciar el servidor por completo. Mientras esté activo, solo los jugadores con el permiso de administrador podrán hablar. Vuelve a ejecutarlo para desbloquearlo.

## 4. Visor de Inventarios (InvSee)
> Revisa lo que los jugadores llevan encima sin necesidad de estar cerca de ellos o en modo staff.

- **Comando:** `/invsee <jugador>`
- **Uso:** Abre el inventario del jugador en tiempo real. Permite a los administradores confiscar objetos ilegales directamente desde la interfaz o revisar la armadura que llevan puesta.