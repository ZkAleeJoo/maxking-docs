# Placeholders (PAPI)
> MaxStaff cuenta con una integración profunda con PlaceholderAPI, lo que te permite extraer datos del plugin y mostrarlos dinámicamente en cualquier otro plugin compatible.

# Requisitos
- Tener el plugin [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) instalado.
- El plugin detectará automáticamente la presencia de PAPI al iniciar.

# Lista de Variables Disponibles
Usa estas variables para mostrar el estado o las estadísticas de jugadores y staff:

- `%maxstaff_in_staff_mode%` - Indica si el usuario tiene el modo staff activo.
- `%maxstaff_vanished%` - Indica si el usuario está invisible (Vanish).
- `%maxstaff_frozen%` - Indica si el jugador está actualmente congelado (SS).
- `%maxstaff_is_spy%` - Indica si el staff tiene el modo espía de comandos activo.

# Estadísticas de Sanciones
Estas variables muestran el historial acumulado del jugador:
- `%maxstaff_warn_count%` - Total de advertencias.
- `%maxstaff_ban_count%` - Total de baneos (Bans).
- `%maxstaff_mute_count%` - Total de silencios (Mutes).
- `%maxstaff_kick_count%` - Total de expulsiones (Kicks).
- `%maxstaff_total_punishments%` - Suma total de Bans, Mutes y Kicks.

# Estadísticas del Jugador
- `%maxstaff_playtime%` - Tiempo de juego total formateado (ej: 2h 30m)

# Personalización
Puedes cambiar los textos de "Sí" y "No" (los estados booleanos) directamente desde tu archivo de mensajes:
1. Abre `lang/messages_es.yml` (o el idioma que uses).
2. Busca la sección `placeholders`:
```YAML
placeholders:
  status-true: "&aYes"
  status-false: "&cNo"
  playtime-format: "{hours}h {minutes}m"
```
3. Estos cambios se reflejarán automáticamente en todos tus placeholders.