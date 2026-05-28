# Funciones de MaxProtections

MaxProtections crea regiones de WorldGuard usando piedras de proteccion configurables. La informacion editable vive en YAML y el estado real de las protecciones colocadas se guarda en SQLite.

## Sistema de protecciones

* **Piedras configurables:** cada proteccion tiene ID, nombre visible, item/bloque, radio, precio, precio de renta, flags iniciales y actionbar.
* **Region automatica:** al colocar una piedra, el plugin crea la region con WorldGuard y registra propietario, ubicacion, limites, home y estado en `protections.db`.
* **Remocion segura:** al romper la piedra se elimina la region, se devuelve el item y se limpian sesiones como el fly de proteccion.
* **Soporte de cabezas custom:** el item/bloque puede conservar skins de cabezas cuando se crea desde el menu.

## Menus incluidos

| Menu | Uso |
| :--- | :--- |
| Creacion | `/mp create`, crea nuevos YAML de piedras sin tocar codigo. |
| Proteccion | `/p menu`, acceso rapido a ajustes, informacion, miembros y remover. |
| Ajustes | `/p settings`, cambia flags de gameplay. |
| Miembros | `/p member`, gestiona miembros, ascensos, degradaciones y removidos. |
| Homes | `/p home`, lista protecciones accesibles para teletransportarse. |
| Admin colocadas | `/mp listplaced`, muestra protecciones registradas y estados de WorldGuard/YAML/bloque. |
| Confirmacion de borrado | Evita borrar una proteccion accidentalmente. |
| Idioma | `/mp lang`, aplica plantillas de idioma. |

## Miembros y rangos

Las protecciones diferencian propietario, admins/miembros avanzados y miembros normales. Los miembros pueden acceder a la proteccion; los rangos superiores pueden gestionar miembros o flags segun el permiso y rango correspondiente.

Tambien existen accesos rapidos:

* `/p trust <jugador>` envia una invitacion.
* `/p untrust <jugador>` elimina un miembro.
* `/p invite accept <id>` acepta una invitacion pendiente.
* `/p invite deny <id>` rechaza una invitacion pendiente.

## Flags de proteccion

Las flags pueden ser de acceso (`Nadie`, `Miembros+`, `Todo el servidor`) o de activado/desactivado. El menu controla:

| Flag | Que controla |
| :--- | :--- |
| `pvp` | Combate entre jugadores. |
| `pvp-mobs` | Combate entre jugadores y mobs/animales. |
| `entry` | Entrada a la region. |
| `pressure-plates` | Placas de presion. |
| `doors` | Puertas, trampillas y portones. |
| `buttons` | Botones y palancas. |
| `place-blocks` | Colocacion de bloques. |
| `break-blocks` | Rotura de bloques. |
| `storage` | Cofres, barriles, shulkers, hornos, tolvas y otros almacenamientos. |
| `workstations` | Mesas de trabajo, yunques y mesas de encantamientos. |
| `tnt` | TNT, creepers y otras explosiones. |
| `leaf-decay` | Caida natural de hojas. |

## Economia y rentas

Vault es opcional. Si esta instalado, el plugin puede cobrar:

* `price`: precio de compra de la piedra.
* `price-rent`: precio periodico de renta por proteccion colocada.

La renta se activa desde `protection.rent.enabled`. Si el propietario no puede pagar, la proteccion se suspende de forma segura: se conserva la base SQLite, miembros, alias, home y piedra, pero se retira la region de WorldGuard hasta que se pague con `/p rent`.

## Fly de proteccion

`/p fly` permite volar dentro de protecciones accesibles si el jugador tiene `maxprotections.protection.fly`. El fly se desactiva al salir de la region, morir, desconectarse, cambiar de mundo o perder acceso.

## Diagnostico y reparacion

* `/mp debug <region>` muestra estado de WorldGuard, YAML, propietario, miembros, limites, fecha y piedra.
* `/mp listplaced` abre un menu admin con todas las protecciones registradas.
* `/mp report protections` muestra totales SQL, regiones activas/huerfanas, regiones mas grandes, propietarios principales y eventos.
* `/mp repair` reconstruye tracking faltante solo cuando puede identificar de forma segura la region, el YAML y la piedra.
* `/mp repair cleanup` elimina entradas obsoletas cuyo WorldGuard region ya no existe.
