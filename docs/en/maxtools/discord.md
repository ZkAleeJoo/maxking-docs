# Discord Integration

Celebrate your players' achievements! MaxTools includes native support for **Discord Webhooks**.

## How to Enable It
To send notifications to your Discord server, go to the `config.yml` file and adjust the `discord` section:

```yaml
discord:
  enabled: true
  webhook-url: 'YOUR_LINK_HERE'
  server-name: 'TuServidor'
  events:
    milestone-unlocked: true
    ability-unlocked: true

```

## Custom Embeds

By default, the plugin sends modern and rich **Embeds** (`discord.embeds.enabled: true`).

* **Avatars:** Automatically includes the player's skin face (`https://mc-heads.net/avatar/{player}/128`).
* **Placeholders:** Supports dynamic tags like `{player}`, `{tool}`, `{blocks}`, and `{ability}`.
* **Optional Formats:** If you prefer plain text messages, you can disable embeds and configure the `templates` section.

::: tip Connection Test
Once configured, use `/met discordtest` (or its alias `/met dctest`) in-game to send a test message to your channel and verify that the format and URL are correct.
:::