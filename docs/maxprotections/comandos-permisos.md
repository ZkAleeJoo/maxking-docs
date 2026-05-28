# Comandos y Permisos

::: info Sintaxis de Comandos
* `[ ]` **Argumento obligatorio**
* `< >` **Argumento opcional**
:::

## Comandos principales

Comando raiz: `/maxprotections`. Alias: `/mp`.

| Comando | Alias | Uso | Permiso |
| :--- | :--- | :--- | :--- |
| `/maxprotections` | `/mp` | `/mp create` | `maxprotections.admin` |
| `/maxprotections` | `/mp` | `/mp reload` | `maxprotections.admin` |
| `/maxprotections` | `/mp` | `/mp lang` | `maxprotections.admin` |
| `/maxprotections` | `/mp` | `/mp debug [region]` | `maxprotections.admin.debug` |
| `/maxprotections` | `/mp` | `/mp listplaced` | `maxprotections.admin.listplaced` |
| `/maxprotections` | `/mp` | `/mp report protections` | `maxprotections.admin.report` |
| `/maxprotections` | `/mp` | `/mp repair` | `maxprotections.admin.repair` |
| `/maxprotections` | `/mp` | `/mp migrate` | `maxprotections.admin.repair` |
| `/maxprotections` | `/mp` | `/mp repair cleanup` | `maxprotections.admin.repair` |

## Comandos de proteccion

Comando raiz: `/protection`. Alias: `/p`.

| Comando | Alias | Uso | Permiso |
| :--- | :--- | :--- | :--- |
| `/protection` | `/p` | `/p give [jugador] [proteccion] [cantidad]` | `maxprotections.protection.give` |
| `/protection` | `/p` | `/p buy [proteccion]` | `maxprotections.protection.buy` |
| `/protection` | `/p` | `/p rent <region o alias>` | `maxprotections.protection` + ser dueno |
| `/protection` | `/p` | `/p fly` | `maxprotections.protection.fly` + acceso a la proteccion |
| `/protection` | `/p` | `/p menu` | Dueno/rango admin de miembro o `maxprotections.admin` |
| `/protection` | `/p` | `/p settings` | `maxprotections.flags` + permiso de gestion |
| `/protection` | `/p` | `/p member` | Dueno/rango admin de miembro o `maxprotections.admin` |
| `/protection` | `/p` | `/p members` | Alias de `/p member` |
| `/protection` | `/p` | `/p member add [jugador]` | Dueno/rango admin de miembro o `maxprotections.admin` |
| `/protection` | `/p` | `/p member remove [jugador]` | Dueno/rango admin de miembro o `maxprotections.admin` |
| `/protection` | `/p` | `/p trust [jugador]` | Atajo para invitar miembro |
| `/protection` | `/p` | `/p untrust [jugador]` | Atajo para remover miembro |
| `/protection` | `/p` | `/p invite accept [id]` | Jugador invitado |
| `/protection` | `/p` | `/p invite deny [id]` | Jugador invitado |
| `/protection` | `/p` | `/p teleport [id o alias]` | Acceso a la proteccion |
| `/protection` | `/p` | `/p tp [id o alias]` | Alias de `/p teleport` |
| `/protection` | `/p` | `/p home` | Abre homes accesibles |
| `/protection` | `/p` | `/p homes` | Alias de `/p home` |
| `/protection` | `/p` | `/p sethome` | Dueno de la proteccion actual |
| `/protection` | `/p` | `/p set-home` | Alias de `/p sethome` |
| `/protection` | `/p` | `/p alias [alias]` | Dueno/rango admin de miembro o `maxprotections.admin` |
| `/protection` | `/p` | `/p info <id o alias>` | Acceso a la proteccion |
| `/protection` | `/p` | `/p view` | Jugador dentro de una proteccion |
| `/protection` | `/p` | `/p leave` | Miembro no propietario dentro de una proteccion |
| `/protection` | `/p` | `/p list` | Lista protecciones propias |

## Permisos

| Permiso | Default | Descripcion |
| :--- | :--- | :--- |
| `maxprotections.admin` | OP | Acceso total e incluye permisos hijos administrativos y de proteccion. |
| `maxprotections.admin.debug` | OP | Permite `/mp debug [region]`. |
| `maxprotections.admin.listplaced` | OP | Permite `/mp listplaced`. |
| `maxprotections.admin.repair` | OP | Permite `/mp repair`, `/mp migrate` y `/mp repair cleanup`. |
| `maxprotections.admin.report` | OP | Permite `/mp report protections`. |
| `maxprotections.protection` | Todos | Permite comandos base de proteccion como `/p rent`. |
| `maxprotections.protection.give` | OP | Permite entregar piedras con `/p give`. |
| `maxprotections.protection.buy` | Todos | Permite comprar piedras con `/p buy`. |
| `maxprotections.protection.fly` | OP | Permite usar `/p fly` dentro de protecciones accesibles. |
| `maxprotections.protection.remove.others` | OP | Permite remover protecciones de otros jugadores. |
| `maxprotections.flags` | Todos | Permite modificar flags desde el menu cuando el jugador tambien tiene rango/acceso valido. |

## Permisos dinamicos de limites

Los permisos de limite salen de `limits.groups` en `config.yml`. Por defecto existen:

| Grupo | Permiso | Prioridad |
| :--- | :--- | :--- |
| `vip` | `maxprotections.limits.vip` | `10` |
| `mvp` | `maxprotections.limits.mvp` | `20` |

Puedes crear mas grupos y cambiar su permiso. El jugador usa el grupo con mayor prioridad entre los que tenga.

::: warning Acceso total
`maxprotections.admin` incluye permisos sensibles como dar piedras, reparar tracking, ver reportes y remover protecciones ajenas. Asignalo solo a administradores de confianza.
:::
