# GENERAL INFORMATION

> MaxStaff transforms the moderation experience through a **"STAFF MODE"** system that optimizes monitoring and punishment tasks. All punishments are handled through interactive menus, including bans, kicks, mutes, history, permissions, inventory, and more.

## 1. Staff Mode

> When you execute the `/staff` command, the plugin automatically performs the following actions to facilitate your work:

* `Inventory Saving:` Your current inventory, armor, game mode, and hunger level are safely stored and restored when you exit the mode. If you disconnect for any reason, your data will be saved in a file, so when you rejoin the server, you will recover your items.
* `Administrative Capabilities:` Flight is enabled, you gain invulnerability, hunger loss is disabled, players cannot hear you, you cannot hit players, etc.
* `Automatic Vanish:` Upon entering this mode, you become invisible to players without special permissions. A specific permission can be granted to allow players to see staff in vanish mode [Permissions](/maxstaff/comandos-permisos)
* `Action Bar:` A constant message will appear above your hotbar indicating your invisibility status.

## 2. Inventory

> When activating staff mode, you will receive a set of configurable tools in the following slots:

* `Sanction (Slot 0):` Right-click a player or use the tool to open the quick punishment menu.
* `Freeze (Slot 1):` Instantly freezes a player for review (SS).
* `Online Players (Slot 4):` Opens a menu with the heads of all connected players for quick teleportation.
* `Teleportation (Slot 6):` A clock that allows you to phase through blocks and move faster.
* `Inspect (Slot 7):` Right-click a player to view their inventory and armor in real time.
* `Vanish (Slot 8):` Quickly toggle your invisibility without typing commands.

## 3. Vanish

> Hide your presence on the server using the `/vanish` command. Players without the `maxstaff.see.vanish` permission will not be able to see you in the world or in the player list.

* **Effects:** When toggled, a confirmation sound will be played.

## 4. Command Spy

> Using the `/cmdspy` command allows staff members to monitor player commands in real time.

* Messages will appear formatted according to the configuration in `messages_es.yml`
  *(example: `[SPY] User: /msg ...`)*.

## 5. Staff Channel

> Using the `/sc <message>` command opens an exclusive and secure communication channel for the staff team.

* Messages sent here are not visible to regular players and are formatted to stand out in chat.

## 6. Silent Inspection

> While in **Staff Mode**, you can silently interact with containers (chests, ender chests, barrels, etc.):

* **Player Containers:** You can open chests without triggering the opening animation or sound, allowing you to inspect their contents without alerting the suspect.
* **Inspection Control:** The plugin prevents multiple staff members from inspecting the same container simultaneously to avoid data conflicts.