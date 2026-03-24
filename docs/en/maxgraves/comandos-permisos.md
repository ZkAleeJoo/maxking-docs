# Commands and Permissions

::: info Command Syntax
Remember the command structure before configuring them:

* `[ ]` **Required Argument**
* `< >` **Optional Argument**
  :::

## 1. Main Commands

| Command      | Alias                         | Usage               | Permission       |
| :----------- | :---------------------------- | :------------------ | :--------------- |
| `/maxgraves` | `/maxgrave`, `/mg`, `/graves` | `/maxgraves`        | `maxgrave.admin` |
| `/maxgraves` | -                             | `/maxgraves reload` | `maxgrave.admin` |
| `/maxgraves` | -                             | `/maxgraves info`   | `maxgrave.info`  |

## 2. Additional Permissions

| Permission    | Description                                                      |
| :------------ | :--------------------------------------------------------------- |
| `maxgrave.tp` | Allows players to teleport to their grave using the locator map. |

::: warning Full Access
The `maxgrave.admin` permission grants access to all commands and internal plugin configurations.
:::