# Placeholders (PAPI)

> MaxStaff features deep integration with PlaceholderAPI, allowing you to extract plugin data and display it dynamically in any compatible plugin.

## Requirements

* Have the [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) plugin installed.
* The plugin will automatically detect PAPI on startup.

## Information

> These placeholders will work as long as you have PlaceholderAPI installed:

### Staff States

* `%maxstaff_in_staff_mode%` - Indicates whether the user has Staff Mode enabled.
* `%maxstaff_vanished%` - Indicates whether the user is invisible (Vanish).
* `%maxstaff_frozen%` - Indicates whether the player is currently frozen (SS).
* `%maxstaff_is_spy%` - Indicates whether the staff member has command spy enabled.

### Punishment Statistics

* `%maxstaff_warn_count%` - Total number of warnings.
* `%maxstaff_ban_count%` - Total number of bans.
* `%maxstaff_mute_count%` - Total number of mutes.
* `%maxstaff_kick_count%` - Total number of kicks.
* `%maxstaff_total_punishments%` - Total sum of bans, mutes, and kicks.

### Player Statistics

* `%maxstaff_playtime%` - Total playtime formatted (e.g., 2h 30m).

### Customization

You can change the "Yes" and "No" texts (boolean states) directly from your messages file:

1. Open `lang/messages_es.yml` (or your selected language file).
2. Locate the `placeholders` section:

```yaml
placeholders:
  status-true: "&aYes"
  status-false: "&cNo"
  playtime-format: "{hours}h {minutes}m"
```

3. These changes will automatically apply to all your placeholders.