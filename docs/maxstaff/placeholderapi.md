# Placeholders (PlaceholderAPI)

MaxStaff registra la expansion `maxstaff` cuando PlaceholderAPI esta instalado.

## Requisitos

* Tener [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) instalado.
* Reiniciar o recargar el servidor para que MaxStaff detecte la dependencia.

## Placeholders Disponibles

### Estados de Staff

| Placeholder | Resultado |
| :--- | :--- |
| `%maxstaff_in_staff_mode%` | Devuelve el texto verdadero/falso segun si el jugador tiene Staff Mode activo. |
| `%maxstaff_vanished%` | Devuelve el texto verdadero/falso segun si el jugador esta en vanish. |
| `%maxstaff_frozen%` | Devuelve el texto verdadero/falso segun si el jugador esta congelado. |
| `%maxstaff_is_spy%` | Devuelve el texto verdadero/falso segun si el staff tiene cmdspy activo. |

### Estadisticas de Sanciones

| Placeholder | Resultado |
| :--- | :--- |
| `%maxstaff_warn_count%` | Total de warns del jugador. |
| `%maxstaff_ban_count%` | Total de bans del jugador. |
| `%maxstaff_mute_count%` | Total de mutes del jugador. |
| `%maxstaff_kick_count%` | Total de kicks del jugador. |
| `%maxstaff_total_punishments%` | Suma de bans, mutes y kicks. |

### Estadisticas del Jugador

| Placeholder | Resultado |
| :--- | :--- |
| `%maxstaff_playtime%` | Tiempo jugado del jugador online en formato `2h 30m`. Si esta offline devuelve `0h 0m`. |

## Personalizacion

Los placeholders booleanos usan estos textos del archivo de idioma activo:

```yaml
placeholders:
  status-true: "&aYes"
  status-false: "&cNo"
```

El placeholder `%maxstaff_playtime%` usa el tiempo de juego nativo de Bukkit (`PLAY_ONE_MINUTE`) y actualmente devuelve horas/minutos en formato corto.
