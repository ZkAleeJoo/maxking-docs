# Personalization and Settings

MaxTools is designed to be extremely flexible, allowing you to adapt everything from the aesthetics of the items to the progression rules to prevent abuse.

## Evolution Lore (Visuals)

The plugin automatically injects dynamic information into the Lore of evolved tools. You can configure each section in `config.yml` under the `evolution-lore` key.

### Progress Bar
You can fully customize how the loading bar looks on the item:
* **Characters:** Define the fill (`filled-char`) and empty (`empty-char`) symbols.
* **Length:** Adjust the total length of the bar with `bar-length`.
* **Optimization:** The `update-interval-blocks` setting defines how often the Lore is refreshed (a value of 5 is recommended to maintain high performance).

### Tiers and Status
Define the rarities and status messages that players will see:
* **Default Tiers:** `Common`, `Rare`, `Epic`, `Mythic`, and `Legendary`.
* **Ability Status:** You can translate the `active`, `cooldown`, and `blocked` labels directly in the configuration.

---

## Counting Rules (Anti-Farm)

To ensure fair play, MaxTools includes a system that controls which blocks add progress to the evolution in the `evolution.yml` file.

| Setting | Description |
|---|---|
| `require-preferred-tool` | If `true`, only blocks that correspond to the tool (e.g., stone with pickaxe) count. |
| `strict-tool-category-match` | Enforce that the tool's tag matches the block's category exactly. |
| `whitelist-materials` | List of unique materials that give progress. If empty, all count (except the blacklist). |
| `blacklist-materials` | List of blocks that **never** give progress (ideal for avoiding flower or snow farms). |

---

## Smart Language Profiles

MaxTools uses a **Profile Synchronization** system (`language-profile-sync`) so you don't lose your customizations when changing languages.

1. **Activation:** When using `/met lang` and selecting a language, the plugin looks for the corresponding profile in `/plugins/MaxTools/language_profiles/`.
2. **Independence:** You can have a `config_es.yml` with completely different prefixes and colors than the `config_en.yml` version.
3. **Persistence:** The plugin automatically swaps the `config.yml` and `menus.yml` files with those of the selected language, keeping your changes saved for each one.

::: info Note about Profiles
If a language profile does not exist yet, the plugin will generate it automatically based on its internal template the first time it is selected.
:::

---

## Tool Name Format

You can decide how the progress counter is displayed directly on the item's name using the `progress-display` section in `evolution.yml`.

* **Placeholders:** Use `{current}`, `{target}`, and `{unit}` to build your format.
* **Max Status:** Define a special message (e.g., `&lMAXED`) for when the tool reaches the last milestone.
* **Dynamic Rename:** The `refresh-base-name-on-rename` setting allows you to decide if the plugin should update the base name if a player renames their tool in an anvil.