# MaxProtections

> This section explains how to install and configure **MaxProtections**, a free protection plugin based on WorldGuard, configurable protection stones, interactive menus, member ranks, and safe SQLite runtime storage.

## Requirements

* **Java 21 or newer.**
* **Paper 1.21 compatible** server.
* **WorldGuard is required.**
* **Vault is optional**, only needed for purchases, prices, and protection rent.

::: warning Compatibility
MaxProtections uses modern Paper APIs. It is not designed for pure Spigot.
:::

## Installation

1. Download the **MaxProtections** `.jar`.
2. Upload it to your server `/plugins/` folder.
3. Make sure WorldGuard is installed and working.
4. Restart the server to generate the files.
5. Review `/plugins/MaxProtections/config.yml`, `lang/`, and `protections/`.

## Important Files

| File | Purpose |
| :--- | :--- |
| `config.yml` | General settings, limits, menus, effects, sounds, language, and rent. |
| `lang/messages_en.yml` / `lang/messages_es.yml` | Plugin messages. |
| `extra_lang/config_en.yml` / `extra_lang/config_es.yml` | Full language configuration templates. |
| `protections/<id>.yml` | Editable definition for each protection stone. |
| `protections.db` | Runtime SQLite database for placed protections, members, flags, invites, events, homes, aliases, and rent. |

::: danger Do not edit runtime storage
Do not edit `protections.db` manually while the server is running. Edit protection stone YAML files instead, and use `/mp repair` for safe tracking repairs.
:::

## First Steps

* Use `/mp create` to create a protection stone from the admin menu.
* Give a stone with `/p give <player> <protection> <amount>` or allow purchases with `/p buy <protection>`.
* Players place the stone to create a WorldGuard region.
* Normal protection management is handled with `/p menu`, `/p settings`, `/p member`, `/p home`, `/p sethome`, and `/p info`.
