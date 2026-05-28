# MaxProtections Features

MaxProtections creates WorldGuard regions using configurable protection stones. Editable definitions live in YAML, while placed-protection runtime state is stored in SQLite.

## Protection System

* **Configurable stones:** each protection has an ID, display name, item/block, radius, price, rent price, initial flags, and actionbar.
* **Automatic region:** placing a stone creates the WorldGuard region and stores owner, location, bounds, home, and state in `protections.db`.
* **Safe removal:** breaking the stone removes the region, returns the item, and cleans sessions such as protection flight.
* **Custom head support:** items/blocks can preserve custom head skins when created from the menu.

## Included Menus

| Menu | Use |
| :--- | :--- |
| Creation | `/mp create`, creates new stone YAML files without touching code. |
| Protection | `/p menu`, quick access to settings, information, members, and removal. |
| Settings | `/p settings`, changes gameplay flags. |
| Members | `/p member`, manages members, promotions, demotions, and removals. |
| Homes | `/p home`, lists accessible protections for teleporting. |
| Admin Placed | `/mp listplaced`, shows tracked protections and WorldGuard/YAML/block state. |
| Remove Confirmation | Prevents accidental protection deletion. |
| Language | `/mp lang`, applies language templates. |

## Members and Ranks

Protections distinguish owner, admin/advanced members, and regular members. Members can access the protection; higher ranks can manage members or flags depending on permission and rank.

Shortcuts:

* `/p trust <player>` sends an invitation.
* `/p untrust <player>` removes a member.
* `/p invite accept <id>` accepts a pending invitation.
* `/p invite deny <id>` rejects a pending invitation.

## Protection Flags

Flags can be access based (`Nobody`, `Members+`, `Everyone`) or simple enabled/disabled toggles. The settings menu controls:

| Flag | Controls |
| :--- | :--- |
| `pvp` | Player combat. |
| `pvp-mobs` | Combat between players and mobs/animals. |
| `entry` | Region entry. |
| `pressure-plates` | Pressure plates. |
| `doors` | Doors, trapdoors, and gates. |
| `buttons` | Buttons and levers. |
| `place-blocks` | Block placement. |
| `break-blocks` | Block breaking. |
| `storage` | Chests, barrels, shulkers, furnaces, hoppers, and other storage. |
| `workstations` | Crafting tables, anvils, and enchanting tables. |
| `tnt` | TNT, creepers, and other explosions. |
| `leaf-decay` | Natural leaf decay. |

## Economy and Rent

Vault is optional. If installed, the plugin can charge:

* `price`: one-time stone purchase price.
* `price-rent`: recurring rent price for a placed protection.

Rent is enabled with `protection.rent.enabled`. If the owner cannot pay, the protection is safely suspended: SQLite data, members, alias, home, and stone remain, but the WorldGuard region is removed until rent is paid with `/p rent`.

## Protection Flight

`/p fly` allows flight inside accessible protections when the player has `maxprotections.protection.fly`. Flight is removed when leaving the region, dying, disconnecting, changing world, or losing access.

## Diagnostics and Repair

* `/mp debug <region>` shows WorldGuard state, YAML state, owner, members, bounds, date, and stone.
* `/mp listplaced` opens an admin menu with every tracked protection.
* `/mp report protections` shows SQL totals, active/orphaned regions, largest regions, top owners, and events.
* `/mp repair` reconstructs missing tracking only when the region, YAML, and stone can be safely identified.
* `/mp repair cleanup` removes stale tracker entries whose WorldGuard region no longer exists.
