# Moderation Tools

> MaxStaff includes a set of utilities designed to simplify server management, revert damage caused by hackers, and monitor players in an advanced way.

## 1. Inventory Restoration (Revive)

> The system automatically saves a snapshot of a player’s inventory and armor each time they die. It is the perfect tool to restore items if a player was killed by a cheater or due to a server issue.

* **Command:** `/revive <player>`
* **Usage:** When executing the command, an interactive menu will open showing the player’s recent death history. With a single click, the inventory from that moment will be fully restored.

## 2. Client Detection (Client Tracker)

> MaxStaff automatically detects the client brand used by players when connecting to the server (Vanilla, Lunar Client, Forge, Fabric, etc.).

* **How does it work?** The plugin reads internal data channels at the moment of connection.
* **Staff Alerts:** Staff members with the `maxstaff.client.notify` permission will receive a silent chat message indicating which client each player is using upon joining, helping to detect modified clients.

## 3. Global Chat Control

> Quick-response utilities to moderate public communication in cases of raids, mass spam, or extreme toxicity.

* **Clear Chat:** Use `/chat clear` to instantly remove all visible chat history. This clears inappropriate messages or malicious links from all players' screens.
* **Mute Chat:** Use `/chat mute` to completely silence the server. While active, only players with admin permissions will be able to speak. Run it again to unmute.

## 4. Inventory Viewer (InvSee)

> Check what players are carrying without needing to be near them or in staff mode.

* **Command:** `/invsee <player>`
* **Usage:** Opens the player’s inventory in real time. Allows administrators to confiscate illegal items directly from the interface or inspect their equipped armor.