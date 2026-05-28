# MaxTools Functions

MaxTools lets player tools evolve dynamically as they are used, unlocking milestones, enchantments, and special abilities.

## Trackable Tools

The plugin automatically tracks configured tools from `evolution.yml`. By default it supports:

* **Pickaxes:** `WOODEN_PICKAXE` to `NETHERITE_PICKAXE`.
* **Axes:** `WOODEN_AXE` to `NETHERITE_AXE`.
* **Shovels:** `WOODEN_SHOVEL` to `NETHERITE_SHOVEL`.

## Milestone System

Progression is based on blocks mined with valid tools. When a configured block count is reached, the tool receives rewards.

* **Rewards:** each milestone can grant enchantments or unlock abilities.
* **Current default configuration:** the bundled `evolution.yml` includes 13 milestones, from 100 to 9000 blocks.
* **Customizable:** you can add more milestones, change requirements, change enchantments, and move abilities to different progression points.

## Special Abilities

The engine supports 11 ability types. The default file enables an initial selection, but you can add other abilities under `special-abilities` when needed.

| Ability | Description |
| :--- | :--- |
| **Self-Repair** | Repairs durability after walking with the tool in hand. |
| **Auto-Smelt** | Smelts compatible drops when breaking ores. |
| **Telepathy** | Sends drops directly to the inventory. |
| **Drill** | Area mining for high-tier pickaxes and shovels. |
| **Hammer** | Area-mining variant supported by the engine. |
| **Vein-Miner** | Breaks connected blocks of the same material, ideal for ore veins. |
| **XP-Boost** | Multiplies natural block experience. |
| **Haste** | Applies passive Haste while holding the tool. |
| **Momentum** | Builds temporary Haste during mining streaks. |
| **Saturation Pulse** | Restores hunger and can apply brief Saturation. |
| **Luck Surge** | Temporarily boosts compatible ore drops. |

::: info Compatibility
Abilities include `compatible-with-mending` to decide whether they work with Mending.
:::

## Anti-Farm Protection

MaxTools prevents unfair progression with counting rules:

* `require-preferred-tool` requires the correct tool.
* `strict-tool-category-match` validates the tool category.
* `whitelist-materials` restricts which blocks count.
* `blacklist-materials` blocks abusive materials from progress.
* The plugin also tracks player-placed blocks to prevent artificial progression.
