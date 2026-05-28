# Information

> MaxGraves creates graves so players can recover their items and experience after death.

## 1. Features

* `Grave System:` when a player dies, a grave stores items, armor, offhand, and experience.
* `Quick Recovery:` when claiming the grave, the plugin returns the contents and equips armor/offhand when possible.
* `Grave Menu:` `/mg info` opens a menu with the player's active graves.
* `Locator Paper:` after death, the player receives a locator that can teleport to the grave when they have `maxgrave.tp`.
* `Multiple Graves:` graves stay per player until they expire or are claimed.

## 2. Grave Markers

`grave.marker.type` controls the visual block:

| Type | Behavior |
| :--- | :--- |
| `HEAD` | Uses the dead player's head/skin, holograms, particles, and claim animation. |
| `CHEST` | Places a chest and opens the grave as an inventory so items can be taken one by one. Keeps holograms, but skips particles and claim animation. |

## 3. Access and PvP

Graves are private by default. If `grave.access.public-player-kill` is enabled, graves created by player kills can be opened or looted by anyone.

## 4. Key Configuration

| Path | Description |
| :--- | :--- |
| `grave.despawn-time` | Seconds before the grave disappears. |
| `grave.blacklisted-worlds` | Worlds where graves are not created. |
| `grave.search-max-radius` | Horizontal radius for finding a safe location if the death spot is blocked. |
| `grave.create-on-death` | Enables or disables grave creation. |
| `grave.debug-death-events` | Prints detailed death-event traces to console. |
| `grave.info-menu.item.material` | Material used by each `/mg info` menu entry. |
| `grave.hologram.*` | Holograms, height, spacing, interval, and lines. |
| `grave.claim-animation.*` | Delay, visual lightning, and claim sound. |
| `grave.effects.*` | Particles, spiral, and ambient sound for `HEAD` graves. |
