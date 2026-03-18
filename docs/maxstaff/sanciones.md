# INFORMACIÓN:
> Acá verás información sobre como usar bien las sanciones, algunos archivos y demás, como siempre, tienes nuestro discord para cualquier consulta o duda https://discord.gg/Vr46JHm2kd

## 1. Sistema Visual de Sanciones (GUI)
> El comando principal para la moderación visual es `/sanction <jugador>` o usando el modo staff `/staff` cuando se ejecuta estos comandos se abre un panel donde se podrá ver el menú interactivo para poder inspeccionar al jugador.

<details>
  <summary>Vista previa del menú</summary>

  ![alt text](/maxstaff/imagenes/menu.png)

  ![alt text](/maxstaff/imagenes/menu-sanciones.png)

</details>

- `Información:` Muestra estadísticas del jugador (vida, hambre, IP, total de sanciones y si tiene cuentas vinculadas).
- `Estadísticas:` Información sobre el jugador UUID, tiempo jugado, sanciones totales.
- `Historial:` Abré un menú informativo mostrando todas las sanciones que tiene el usuario.
- `Sancionar:` En este apartado verás el menú más importante, con este podrás sancionar a los jugadores.
- `Multi-Cuentas:` Un apartado para ver todas las cuentas que tenga un jugador.
- `Inventario:` Te permite visualizar el inventario del jugador
- `Permisos:` Este es un menú adicional que permite ver todos los permisos del jugador

## 2. Formatos de Tiempo
Para sanciones temporales, utiliza las siguientes unidades:
- `s`: segundos | `m`: minutos | `h`: horas | `d`: días | `w`: semanas
- Ejemplo: `/ban ZkAleeJoo 30d Uso de hacks`.

## 3. Sistema de Congelamiento (Freeze/SS)
Diseñado para revisiones de pantalla o interrogatorios. Al usar **/freeze jugador**:
- `Inmovilización:` El jugador no puede moverse, romper bloques ni abrir contenedores.
- `Efectos Visuales:` Se aplican automáticamente un efecto de ceguera y un casco de hielo (PACKED_ICE).

<details>
  <summary>Vista previa del freeze</summary>

  ![alt text](/maxstaff/imagenes/freeze-staff.png)

  ![alt text](/maxstaff/imagenes/freeze-player.png)

</details>

## 4. Historial y Gestión de Datos
- `Ver Historial:` Usa **/history [jugador]** para ver el registro detallado de todas las sanciones pasadas, quién las aplicó y por qué motivo.
- `Limpiar Datos:` Solo los administradores pueden usar los subcomandos de **/maxstaff**:
  1. **/maxstaff reset [jugador] [tipo/ALL]**: Elimina el historial completo.
  2. **/maxstaff take [jugador] [tipo] [cantidad]**: Elimina una cantidad específica de sanciones del registro.

## 5. Sistema de Reportes
Los jugadores pueden colaborar con la moderación usando el comando **/report [jugador] [motivo]**.
- `Notificaciones:` El staff en línea recibirá una alerta inmediata con el nombre del acusador, el acusado y el motivo.
- `Protección:` Incluye un sistema de cooldown para evitar que los jugadores abusen del sistema de reportes.

<details>
  <summary>Vista previa de los reportes</summary>

  ![alt text](/maxstaff/imagenes/reportes.png)

</details>
