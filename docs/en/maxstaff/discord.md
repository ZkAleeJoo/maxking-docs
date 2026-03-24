# Discord Integration (Webhooks)

> The plugin allows you to send automatic notifications and detailed logs to a Discord channel using Webhooks. You can log punishments, administrative alerts, and player reports in real time.

## 1. Basic Configuration

> To enable this feature, you must configure the `discord.yml` file.

1. Go to your Discord server, right-click the channel where you want to receive alerts, and select **Edit Channel**.
2. Navigate to **Integrations** > **Webhooks** and create a new Webhook.
3. Copy the Webhook URL and paste it into your `discord.yml` file:

```yaml
# Replace "URL_HERE" with your Webhook link
webhook-url: "URL_HERE"
enabled: true

# Global customization options
global-image: "https://imgur.com/xLVotZb"
server-name: "Survival 1.20"
```

## 2. Notification Categories

> The system is divided into three main categories. You can customize the color (HEX format), author, and information fields for each one.

### Punishments

> Automatically sent when a staff member punishes a player.

* `Ban:` Logs the player, staff member, duration, and reason.
* `Mute:` Logs the player, staff member, duration, and reason.
* `Kick:` Logs the player, staff member, and reason.
* `Warn:` Logs the player, staff member, reason, and the **total number of accumulated warnings**.

### Administrative Alerts

> Notifications about general moderation actions on the server.

* `Freeze / Unfreeze:` Notifies when a player is frozen or unfrozen for review (SS).
* `Chat Management:` Notifies when the global chat is cleared (`chat_clear`), muted (`chat_mute`), or unmuted (`chat_unmute`).
* `Staff Mode:` Logs when a staff member enters or exits staff mode.

### Reports

> Instantly notifies when a player uses the report command.

* Displays who reported, who was reported, the reason, and the **exact coordinates** (world, X, Y, Z) where the incident occurred.

## 3. Available Variables

> You can use these variables inside your embed configuration in `discord.yml` to display dynamic information:

| Variable            | Description                                                       |
| :------------------ | :---------------------------------------------------------------- |
| `{target}`          | Name of the affected or reported player                           |
| `{staff}`           | Name of the staff member who executed the action                  |
| `{reason}`          | Reason for the punishment, alert, or report                       |
| `{duration}`        | Duration of the punishment (only applies to temporary bans/mutes) |
| `{count}`           | Number of accumulated warnings for the player                     |
| `{reporter}`        | Name of the player who submitted the report                       |
| `{face}`            | URL displaying the player’s avatar/3D head                        |
| `{world}`           | World where the player was located (used in reports)              |
| `{x}`, `{y}`, `{z}` | Exact player coordinates (used in reports)                        |