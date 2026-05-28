# Comandos y Permisos

::: info Sintaxis de Comandos
* `[ ]` **Argumento obligatorio**
* `< >` **Argumento opcional**
:::

## Lista de Comandos

| Comando | Alias | Uso | Permiso |
| :--- | :--- | :--- | :--- |
| `/maxclear` | `/mc` | `/maxclear` | `maxclear.admin` |
| `/maxclear` | `/mc` | `/maxclear reload` | `maxclear.admin` |
| `/maxclear` | `/mc` | `/maxclear clear` | `maxclear.admin` |
| `/maxclear` | `/mc` | `/maxclear get <author/version>` | `maxclear.admin` |

::: info Consola
La consola puede ejecutar `reload`, `clear` y `get`. En juego, el jugador necesita `maxclear.admin`.
:::

## Placeholders Configurables

MaxClear no registra expansion de PlaceholderAPI. Sus placeholders son tokens internos para mensajes de `config.yml`:

| Placeholder | Uso |
| :--- | :--- |
| `{time}` | Segundos restantes antes de una limpieza automatica. |
| `{count}` | Cantidad de entidades eliminadas. |
| `{player}` | Jugador que ejecuto una limpieza manual. |
| `{version}` | Version disponible o version actual en mensajes de update-check. |

::: warning Acceso Total
`maxclear.admin` da acceso a todos los comandos de limpieza y recarga del plugin.
:::
