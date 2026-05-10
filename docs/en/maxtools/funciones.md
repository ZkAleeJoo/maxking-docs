# MaxTools Functions

MaxTools allows your players' tools to evolve dynamically as they are used, unlocking milestones, enchantments, and special abilities.

## Trackable Tools
The plugin automatically tracks the progress of configured tools. It supports the main tools in all their materials (from wood to netherite):
* **Pickaxes:** `WOODEN_PICKAXE` to `NETHERITE_PICKAXE`.
* **Axes:** `WOODEN_AXE` to `NETHERITE_AXE`.
* **Shovels:** `WOODEN_SHOVEL` to `NETHERITE_SHOVEL`.

## Milestone System
Progression is based on the number of blocks mined. Upon reaching a certain number of blocks, the tool levels up and reaches a "Milestone".

* **Rewards:** Each milestone can grant enchantment upgrades (such as Efficiency, Fortune, or Mending) or unlock powerful **special abilities**.
* **Default Configuration:** The system has 50 pre-configured milestones, reaching up to 792,000 blocks mined.

## Special Abilities
Abilities completely transform the mining experience. Currently, there are 11 unique abilities:

| Ability | Description |
|---|---|
| **Self-Repair** | Repairs the tool's durability automatically when activated. |
| **Auto-Smelt** | Smelts minerals automatically (e.g., Raw Iron to Ingot) when breaking the ore. |
| **Telepathy** | Sends the mined items directly to the player's inventory. |
| **Drill / Hammer** | Allows area mining (3x3 or larger) ideal for diamond/netherite pickaxes and shovels. |
| **Vein-Miner** | Breaks the entire connected ore vein in a single strike. |
| **XP-Boost** | Multiplies the natural experience gained when breaking the block. |
| **Haste** | Grants the Haste status effect passively. |
| **Momentum** | Accumulates temporary Haste charges while the player maintains a mining streak. |
| **Saturation Pulse** | Restores hunger and can apply a brief Saturation effect. |
| **Luck Surge** | Drastically increases and temporarily boosts compatible ore drops. |

::: info Compatibility
All abilities have a `compatible-with-mending` setting to decide whether they work together with the Mending enchantment.
:::