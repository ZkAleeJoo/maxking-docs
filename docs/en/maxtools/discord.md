# Discord Integration

MaxTools includes native Discord webhook support and can send notifications when a player unlocks milestones or abilities.

## How to Enable It

Edit the `discord` section in `config.yml`:

```yaml
discord:
  enabled: true
  webhook-url: 'YOUR_LINK_HERE'
  server-name: 'YourServer'
  events:
    milestone-unlocked: true
    ability-unlocked: true
```

## Custom Embeds

By default, the plugin sends modern embeds (`discord.embeds.enabled: true`).

* **Avatars:** You can use the player's skin face with `https://mc-heads.net/avatar/{player}/128`.
* **Placeholders:** Templates and embed values accept `{player}`, `{player_uuid}`, `{tool}`, `{tool_type}`, `{blocks}`, `{ability}`, `{reward}`, `{timestamp}`, `{server}`, `{server_software}`, and `{plugin}`.
* **Legacy format:** If embeds are disabled, MaxTools uses the messages in `discord.templates`.
* **Safe pings:** `allowed-mentions.parse` controls whether Discord may mention `everyone`, roles, or users. It is empty by default to avoid accidental pings.

::: tip Connection Test
Use `/met discordtest` or `/met dctest` to send a test message and validate the URL, format, and placeholders.
:::
