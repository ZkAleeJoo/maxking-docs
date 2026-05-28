# Configuration

MaxProtections is configured through `config.yml`, language files, and YAML files inside `protections/`.

## General Settings

| Path | Description |
| :--- | :--- |
| `general.language` | Active language (`en` or `es`). |
| `general.prefix` | Prefix used in messages. |
| `general.update-check` | Enables update checks. |
| `general.bstats` | Enables anonymous bStats metrics. |

## Protections

| Path | Description |
| :--- | :--- |
| `protection.home-cooldown-seconds` | Cooldown between protection home teleports. |
| `protection.default-actionbar.enter` | Actionbar shown when entering a protection. |
| `protection.default-actionbar.exit` | Actionbar shown when leaving a protection. |
| `protection.preview.cinematic.*` | Cinematic preview settings: enabled, duration, cooldown, height, border material, and fake blocks. |
| `protection.visual-effects.place/remove/view.*` | Particles, colors, duration, intervals, and cooldown for place/remove/border view effects. |
| `protection.sounds.buy/place/remove/error/flag-change.*` | Configurable sounds per action. |

## Rent

| Path | Description |
| :--- | :--- |
| `protection.rent.enabled` | Enables or disables rent. |
| `protection.rent.period-hours` | Hours before rent expires. |
| `protection.rent.check-interval-minutes` | Minutes between overdue rent checks. |

Each stone uses `price-rent` in `protections/<id>.yml`. If missing, the plugin can fall back to `price` for compatibility.

## Rank Limits

`limits.default` defines base limits:

| Path | Description |
| :--- | :--- |
| `limits.default.max-protections` | Maximum protections per player. |
| `limits.default.max-radius` | Maximum allowed radius. |
| `limits.default.min-price` | Minimum allowed protection price. |
| `limits.default.max-price` | Maximum allowed protection price. |

You can add groups under `limits.groups`. The plugin uses the matching group with the highest `priority`.

```yaml
limits:
  groups:
    vip:
      permission: "maxprotections.limits.vip"
      priority: 10
      max-protections: 10
      max-radius: 50
      min-price: 0
      max-price: 250000
```

## Configurable Menus

These menus live under `menus` and let you change titles, sizes, fillers, slots, materials, names, lore, and placeholders:

| Menu | Path |
| :--- | :--- |
| Stone creator | `menus.creation` |
| Main protection menu | `menus.protection` |
| Homes | `menus.protection-home` |
| Members | `menus.protection-members` |
| Admin placed protections | `menus.admin-placed` |
| Remove confirmation | `menus.protection-remove-confirm` |
| Settings/flags | `menus.protection-settings` |
| Language selector | `menus.language` |

## Per-Stone YAML

Files under `protections/<id>.yml` control each stone type:

| Path | Description |
| :--- | :--- |
| `protection.id` | Internal protection type ID. |
| `protection.display-name` | Display name. |
| `protection.radius` | Region radius. |
| `protection.priority` | WorldGuard priority. |
| `item.block` | Item/block used as the stone. |
| `item.lore` | Lore for given/purchased items. |
| `price` | Purchase price. |
| `price-rent` | Rent price. |
| `worldguard.region-id-format` | Region format, default `mp_%id%_%compact%`. |
| `worldguard.flags.*` | Initial flags applied when creating the region. |
| `actionbar.enter` / `actionbar.exit` | Messages when entering/leaving that protection. |

## Internal Placeholders

MaxProtections does not register a PlaceholderAPI expansion. These placeholders are used inside configs, menus, and messages.

### Menus

| Placeholder | Use |
| :--- | :--- |
| `%alias%` | Visible protection alias. |
| `%protection_id%` | Protection type ID. |
| `%protection%` | Protection display name. |
| `%owner%`, `%owners%`, `%members%`, `%member%` | Owner and member data. |
| `%role%`, `%created_date%` | Member role and date. |
| `%size%` | Visual protection size/radius. |
| `%world%`, `%x%`, `%y%`, `%z%` | World and coordinates. |
| `%stone_x%`, `%stone_y%`, `%stone_z%` | Stone coordinates. |
| `%min_x%`, `%min_z%`, `%max_x%`, `%max_z%` | Horizontal bounds. |
| `%region%` | WorldGuard region ID. |
| `%state%` | Current flag or panel state. |
| `%state_worldguard%`, `%state_yaml%`, `%state_stone%` | Admin diagnostic state. |
| `%page%`, `%max_page%`, `%total%` | Pagination and totals. |
| `%value%` | Current value in the creation menu. |

### Messages

| Placeholder | Use |
| :--- | :--- |
| `%player%`, `%inviter%` | Involved players. |
| `%id%`, `%lookup%`, `%region%`, `%alias%` | Target identifiers. |
| `%price%`, `%amount%`, `%delivered%` | Purchases and item delivery. |
| `%paid_until%`, `%rent_status%`, `%rent_paid_until%` | Rent state. |
| `%flag%`, `%state%`, `%action%` | Flags and intrusion alerts. |
| `%current%`, `%max%`, `%group%`, `%max_radius%`, `%min_price%`, `%max_price%` | Rank limits. |
| `%active%`, `%orphaned%`, `%events%`, `%largest_regions%`, `%top_owners%` | Admin reports. |
| `%repaired%`, `%cleaned%`, `%skipped%`, `%reason%` | Repair results. |
| `%home_x%`, `%home_y%`, `%home_z%` | Protection home. |
