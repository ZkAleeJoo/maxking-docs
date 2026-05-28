# Placeholders (PlaceholderAPI)

MaxStaff registers the `maxstaff` expansion when PlaceholderAPI is installed.

## Requirements

* Install [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/).
* Restart or reload the server so MaxStaff can detect the dependency.

## Available Placeholders

### Staff States

| Placeholder | Result |
| :--- | :--- |
| `%maxstaff_in_staff_mode%` | Returns the true/false text depending on whether the player has Staff Mode enabled. |
| `%maxstaff_vanished%` | Returns the true/false text depending on whether the player is vanished. |
| `%maxstaff_frozen%` | Returns the true/false text depending on whether the player is frozen. |
| `%maxstaff_is_spy%` | Returns the true/false text depending on whether the staff member has cmdspy enabled. |

### Punishment Statistics

| Placeholder | Result |
| :--- | :--- |
| `%maxstaff_warn_count%` | Total warns for the player. |
| `%maxstaff_ban_count%` | Total bans for the player. |
| `%maxstaff_mute_count%` | Total mutes for the player. |
| `%maxstaff_kick_count%` | Total kicks for the player. |
| `%maxstaff_total_punishments%` | Sum of bans, mutes, and kicks. |

### Player Statistics

| Placeholder | Result |
| :--- | :--- |
| `%maxstaff_playtime%` | Online player's playtime in `2h 30m` format. Offline players return `0h 0m`. |

## Customization

Boolean placeholders use these texts from the active language file:

```yaml
placeholders:
  status-true: "&aYes"
  status-false: "&cNo"
```

`%maxstaff_playtime%` uses Bukkit's native playtime statistic (`PLAY_ONE_MINUTE`) and currently returns short hours/minutes output.
