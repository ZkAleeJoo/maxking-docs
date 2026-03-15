# Sistema Visual de Sanciones (GUI)
El comando principal para la moderación visual es `/sanction <jugador>`. Este comando abre un flujo de trabajo diseñado para evitar errores humanos.
1. Menú de Información: Muestra estadísticas del jugador (vida, hambre, IP, total de sanciones y si tiene cuentas vinculadas).
2. Selección de Tipo: Elige entre Ban, Mute o Kick.
3. Selección de Motivo: Se presentan los motivos configurados en tu `config.yml` (ej: X-Ray, Spam, Toxicidad).
4. Duración: Cada motivo tiene 4 duraciones predefinidas (ej: 7d, 30d, Permanente) representadas por tintes de colores.
5. Confirmación: Una pantalla final para verificar los datos antes de aplicar la sanción.

# Formatos de Tiempo
Para sanciones temporales, utiliza las siguientes unidades:
- `s`: segundos | `m`: minutos | `h`: horas | `d`: días | `w`: semanas
- Ejemplo: `/ban ZkAleeJoo 30d Uso de hacks`.

# Sistema de Congelamiento (Freeze/SS)
Diseñado para revisiones de pantalla o interrogatorios. Al usar `/freeze <jugador>`:
- Inmovilización: El jugador no puede moverse, romper bloques ni abrir contenedores.
- Efectos Visuales: Se aplican automáticamente un efecto de ceguera y un casco de hielo (PACKED_ICE).
- Alerta Intrusiva: El jugador recibe un mensaje gigante en pantalla advirtiéndole que no se desconecte.

# Historial y Gestión de Datos
- Ver Historial: Usa `/history <jugador>` para ver el registro detallado de todas las sanciones pasadas, quién las aplicó y por qué motivo.
- Limpiar Datos: Solo los administradores pueden usar los subcomandos de `/maxstaff`:
  - `/maxstaff reset <jugador> <tipo/ALL>`: Elimina el historial completo.
  - `/maxstaff take <jugador> <tipo> [cantidad]`: Elimina una cantidad específica de sanciones del registro.

# Sistema de Reportes
Los jugadores pueden colaborar con la moderación usando el comando `/report <jugador> <motivo>`.
- Notificaciones: El staff en línea recibirá una alerta inmediata con el nombre del acusador, el acusado y el motivo.
- Protección: Incluye un sistema de cooldown para evitar que los jugadores abusen del sistema de reportes.