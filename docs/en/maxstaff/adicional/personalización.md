# Customization and Files

> MaxStaff is 100% configurable. You can modify every message, menu, color, and plugin prefix to match your server’s theme.

## 1. Changing the Language

The plugin comes with built-in official translations. To change the default language:

1. Go to `plugins/MaxStaff/config.yml`.
2. Locate the `language:` option within the general section.
3. Change `"en"` to `"es"` for Spanish (or vice versa).
4. Use `/maxstaff reload` on the server. The `messages_es.yml` file will be automatically generated in the `lang/` folder.

## 2. Color Codes and Formatting

All plugin files support traditional Minecraft color codes using the `&` symbol (e.g., `&a` for green, `&c` for red).

Additionally, if your server is running a version that supports hexadecimal colors (1.16+), you can use them in any message or menu using the standard Spigot format.

## 3. Disabling Modules (Commands)

If you are already using another plugin for a specific command (for example, if you prefer using Essentials' `/vanish` instead of MaxStaff’s), you can disable the MaxStaff command directly from the `config.yml`.

* Locate the commands section in the configuration and set them to `false`.
* Once disabled, if someone tries to use that MaxStaff command, the plugin will release it so your other plugin can handle it without conflicts.