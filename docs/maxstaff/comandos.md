---
title: 'Comandos y Permisos'
description: 'Lista completa de todos los comandos disponibles en MaxStaff.'
---

# Comandos y Permisos

MaxStaff cuenta con una amplia variedad de comandos administrativos. A continuación, encontrarás la tabla de comandos junto con el permiso necesario para ejecutarlos. 

*El permiso maestro para tener acceso total al plugin es `maxstaff.admin`*.

| Comando | Descripción | Permiso |
| :--- | :--- | :--- |
| `/maxstaff` | Comando principal del plugin | `maxstaff.admin` |
| `/staff` | Activa o desactiva el modo staff | `maxstaff.command.staff` |
| `/vanish` | Alterna la invisibilidad del jugador | `maxstaff.vanish` |
| `/sanction` | Abre el menú avanzado de sanciones | `maxstaff.punish` |
| `/ban <jugador>` | Banea a un jugador | `maxstaff.punish.ban` |
| `/mute <jugador>` | Silencia a un jugador | `maxstaff.punish.mute` |
| `/kick <jugador>` | Expulsa a un jugador del servidor | `maxstaff.punish.kick` |
| `/warn <jugador>` | Advierte a un jugador | `maxstaff.punish.warn` |
| `/freeze <jugador>` | Congela (SS) a un jugador | `maxstaff.freeze` |
| `/invsee <jugador>`| Permite ver el inventario de un jugador en tiempo real | `maxstaff.invsee` |
| `/revive <jugador>`| Restaura inventarios de muertes recientes | `maxstaff.revive` |
| `/sc <mensaje>` | Envía un mensaje por el chat del staff | `maxstaff.staffchat` |
| `/alts <jugador>` | Muestra las cuentas alternativas de un usuario | `maxstaff.alts` |
| `/history` | Muestra el historial de sanciones | `maxstaff.history` |
| `/report <jugador>`| Permite a los usuarios reportar a alguien | `maxstaff.report` |
| `/cmdspy` | Espía los comandos ejecutados por otros | `maxstaff.cmdspy` |
| `/gamemode` | Selector de modo de juego | `maxstaff.gamemode` |
| `/chat` | Gestiona el chat global (limpiar/mutear) | `maxstaff.chat.admin` |

*(Nota: Los comandos /ban, /mute y /ban-ip tienen sus respectivas variantes temporales como /tempban y /tempmute que utilizan los mismos permisos)*.