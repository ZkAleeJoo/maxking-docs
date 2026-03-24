# Protection System (Hierarchy)

> MaxStaff includes an internal security system to prevent lower-ranked staff members (e.g., Helpers or Moderators) from accidentally or maliciously punishing Administrators or Server Owners.

## 1. Protecting a Staff Member

To make a user "immune" to punishments within MaxStaff menus or commands, you must grant them the following permission using your permissions plugin (e.g., [LuckPerms](https://luckperms.net/)):

* **Permission:** `maxstaff.punish.protected`
* **Effect:** If someone attempts to ban, mute, or kick this player, the plugin will automatically block the action.

## 2. Bypassing Protection (Override)

Server Owners or Head Administrators need the ability to punish anyone, even if that person has the protection permission mentioned above. For this, there is an "Override" permission:

* **Permission:** `maxstaff.punish.override`
* **Effect:** Allows bypassing protections. A player with this permission can punish anyone, regardless of whether the target is protected or not.

> **Usage Recommendation:** Grant `maxstaff.punish.protected` to all your Administrators and Moderators.
> Grant `maxstaff.punish.override` **only** to Owners or the highest-ranked role on your server.