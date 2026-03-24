# INFORMATION:

> Here you will find information on how to properly use punishments, some files, and more. As always, you can join our Discord for any questions or support: [https://discord.gg/Vr46JHm2kd](https://discord.gg/Vr46JHm2kd)

## 1. Visual Punishment System (GUI)

> The main command for visual moderation is `/sanction <player>` or by using staff mode `/staff`. When these commands are executed, a panel will open displaying an interactive menu to inspect the player.

<details>
  <summary>Menu preview</summary>

![alt text](/maxstaff/imagenes/menu.png)

![alt text](/maxstaff/imagenes/menu-sanciones.png)

</details> 

* `Information:` Displays player stats (health, hunger, IP, total punishments, and linked accounts).
* `Statistics:` Shows player data such as UUID, playtime, and total punishments.
* `History:` Opens an informative menu showing all punishments applied to the player.
* `Sanction:` The most important section, where you can punish players through the interactive menu.
* `Alt Accounts:` Section to view all accounts associated with a player.
* `Inventory:` Allows you to view the player’s inventory.
* `Permissions:` Additional menu that allows you to view all player permissions.

## 2. Time Formats

For temporary punishments, use the following units:

* `s`: seconds | `m`: minutes | `h`: hours | `d`: days | `w`: weeks
* Example: `/ban ZkAleeJoo 30d Use of hacks`.

## 3. Freeze System (Freeze/SS)

Designed for screen checks or investigations. When using **/freeze player**:

* `Immobilization:` The player cannot move, break blocks, or open containers.
* `Visual Effects:` A blindness effect and an ice helmet (PACKED_ICE) are automatically applied.

<details>
  <summary>Freeze preview</summary>

![alt text](/maxstaff/imagenes/freeze-staff.png)

![alt text](/maxstaff/imagenes/freeze-player.png)

</details>

## 4. History and Data Management

* `View History:` Use **/history [player]** to see a detailed log of all past punishments, including who applied them and the reason.
* `Clear Data:` Only administrators can use **/maxstaff** subcommands:

  1. **/maxstaff reset [player] [type/ALL]**: Deletes the full history.
  2. **/maxstaff take [player] [type] [amount]**: Removes a specific number of punishments from the record.

## 5. Report System

Players can assist moderation using the command **/report [player] [reason]**.

* `Notifications:` Online staff will receive an instant alert with the reporter’s name, the reported player, and the reason.
* `Protection:` Includes a cooldown system to prevent report abuse.

<details>
  <summary>Report preview</summary>

![alt text](/maxstaff/imagenes/reportes.png)

</details>