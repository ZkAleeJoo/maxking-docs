# Comandos y Permisos

::: info Sintaxis de Comandos
* `[ ]` **Argumento obligatorio**
* `< >` **Argumento opcional**
:::

## 1. Comandos Principales

| Comando | Alias | Uso | Permiso |
| :--- | :--- | :--- | :--- |
| `/maxgraves` | `/maxgrave`, `/mg`, `/graves` | `/maxgraves` | - |
| `/maxgraves` | `/maxgrave`, `/mg`, `/graves` | `/maxgraves reload` | `maxgrave.admin` |
| `/maxgraves` | `/maxgrave`, `/mg`, `/graves` | `/maxgraves info` | `maxgrave.info` (default: true) |

## 2. Permisos Adicionales

| Permiso | Descripcion |
| :--- | :--- |
| `maxgrave.admin` | Acceso administrativo; incluye `maxgrave.tp` y `maxgrave.info`. |
| `maxgrave.tp` | Permite teletransportarse a una tumba usando el papel localizador. |
| `maxgrave.info` | Permite abrir el menu de informacion de tumbas con `/maxgraves info`. |

## 3. Placeholders Configurables

MaxGraves no registra expansion de PlaceholderAPI. Estos placeholders se usan dentro de `config.yml`, especialmente en hologramas y el menu `/maxgraves info`.

| Placeholder | Donde se usa |
| :--- | :--- |
| `{player}` | Nombre del jugador dueño de la tumba. |
| `{player_level}` | Nivel de experiencia del jugador al morir. |
| `{killer}` | Nombre del asesino si aplica. |
| `{time_left}` | Tiempo restante antes de que la tumba desaparezca. |
| `{x}` | Coordenada X de la tumba. |
| `{y}` | Coordenada Y de la tumba. |
| `{z}` | Coordenada Z de la tumba. |
| `{world}` | Mundo de la tumba, usado en el menu de informacion. |
| `{index}` | Numero visual de la tumba en el menu de informacion. |
| `{id}` | UUID interno de la tumba, usado en el menu de informacion. |

::: warning Acceso Total
`maxgrave.admin` entrega acceso a recarga y permisos hijos administrativos. No lo asignes a jugadores normales.
:::
