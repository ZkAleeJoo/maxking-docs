# Configuracion

MaxProtections es configurable desde `config.yml`, los archivos de idioma y los YAML dentro de `protections/`.

## Configuracion general

| Ruta | Descripcion |
| :--- | :--- |
| `general.language` | Idioma activo (`en` o `es`). |
| `general.prefix` | Prefijo usado en mensajes. |
| `general.update-check` | Activa la comprobacion de actualizaciones. |
| `general.bstats` | Activa metricas anonimas de bStats. |

## Protecciones

| Ruta | Descripcion |
| :--- | :--- |
| `protection.home-cooldown-seconds` | Cooldown de teletransporte entre homes. |
| `protection.default-actionbar.enter` | Actionbar al entrar en una proteccion. |
| `protection.default-actionbar.exit` | Actionbar al salir de una proteccion. |
| `protection.preview.cinematic.*` | Vista previa cinematica: activacion, duracion, cooldown, altura, material de borde y bloques fake. |
| `protection.visual-effects.place/remove/view.*` | Particulas, colores, duracion, intervalos y cooldown del efecto de colocar, remover o ver bordes. |
| `protection.sounds.buy/place/remove/error/flag-change.*` | Sonidos configurables por accion. |

## Rentas

| Ruta | Descripcion |
| :--- | :--- |
| `protection.rent.enabled` | Activa o desactiva rentas. |
| `protection.rent.period-hours` | Cada cuantas horas vence una renta. |
| `protection.rent.check-interval-minutes` | Cada cuantos minutos se revisan rentas vencidas. |

Cada piedra usa `price-rent` en `protections/<id>.yml`. Si no existe, el plugin puede usar `price` como compatibilidad.

## Limites por rango

`limits.default` define limites base:

| Ruta | Descripcion |
| :--- | :--- |
| `limits.default.max-protections` | Maximo de protecciones por jugador. |
| `limits.default.max-radius` | Radio maximo permitido. |
| `limits.default.min-price` | Precio minimo permitido para una proteccion. |
| `limits.default.max-price` | Precio maximo permitido. |

Puedes agregar grupos en `limits.groups`. El plugin usa el grupo con permiso y mayor `priority`.

```yaml
limits:
  groups:
    vip:
      permission: "maxprotections.limits.vip"
      priority: 10
      max-protections: 10
      max-radius: 50
      min-price: 0
      max-price: 250000
```

## Menus configurables

Todos estos menus viven bajo `menus` y permiten cambiar titulo, size, filler, slots, materiales, nombres, lore y placeholders:

| Menu | Ruta |
| :--- | :--- |
| Creador de piedras | `menus.creation` |
| Menu principal de proteccion | `menus.protection` |
| Homes | `menus.protection-home` |
| Miembros | `menus.protection-members` |
| Protecciones colocadas admin | `menus.admin-placed` |
| Confirmacion de remover | `menus.protection-remove-confirm` |
| Ajustes/flags | `menus.protection-settings` |
| Selector de idioma | `menus.language` |

## YAML de cada piedra

Los archivos `protections/<id>.yml` controlan cada tipo de piedra:

| Ruta | Descripcion |
| :--- | :--- |
| `protection.id` | ID interno del tipo de proteccion. |
| `protection.display-name` | Nombre visible. |
| `protection.radius` | Radio de la region. |
| `protection.priority` | Prioridad de WorldGuard. |
| `item.block` | Item/bloque que representa la piedra. |
| `item.lore` | Lore del item entregado/comprado. |
| `price` | Precio de compra. |
| `price-rent` | Precio de renta. |
| `worldguard.region-id-format` | Formato de region, por defecto `mp_%id%_%compact%`. |
| `worldguard.flags.*` | Flags iniciales aplicadas al crear la region. |
| `actionbar.enter` / `actionbar.exit` | Mensajes al entrar/salir de esa proteccion. |

## Placeholders internos

MaxProtections no registra una expansion de PlaceholderAPI. Los placeholders se usan dentro de configuraciones, menus y mensajes.

### Menus

| Placeholder | Uso |
| :--- | :--- |
| `%alias%` | Alias visible de la proteccion. |
| `%protection_id%` | ID del tipo de proteccion. |
| `%protection%` | Nombre visible de la proteccion. |
| `%owner%`, `%owners%`, `%members%`, `%member%` | Datos de propietario y miembros. |
| `%role%`, `%created_date%` | Rol y fecha del miembro. |
| `%size%` | Tamano/radio visual de la proteccion. |
| `%world%`, `%x%`, `%y%`, `%z%` | Mundo y coordenadas. |
| `%stone_x%`, `%stone_y%`, `%stone_z%` | Coordenadas de la piedra. |
| `%min_x%`, `%min_z%`, `%max_x%`, `%max_z%` | Bordes horizontales. |
| `%region%` | ID de region WorldGuard. |
| `%state%` | Estado actual de una flag o panel. |
| `%state_worldguard%`, `%state_yaml%`, `%state_stone%` | Estado de diagnostico admin. |
| `%page%`, `%max_page%`, `%total%` | Paginacion y totales. |
| `%value%` | Valor actual en el menu de creacion. |

### Mensajes

| Placeholder | Uso |
| :--- | :--- |
| `%player%`, `%inviter%` | Jugadores involucrados. |
| `%id%`, `%lookup%`, `%region%`, `%alias%` | Identificadores buscados o afectados. |
| `%price%`, `%amount%`, `%delivered%` | Compra y entrega de items. |
| `%paid_until%`, `%rent_status%`, `%rent_paid_until%` | Rentas. |
| `%flag%`, `%state%`, `%action%` | Flags e intrusiones. |
| `%current%`, `%max%`, `%group%`, `%max_radius%`, `%min_price%`, `%max_price%` | Limites de rango. |
| `%active%`, `%orphaned%`, `%events%`, `%largest_regions%`, `%top_owners%` | Reportes admin. |
| `%repaired%`, `%cleaned%`, `%skipped%`, `%reason%` | Resultado de reparacion. |
| `%home_x%`, `%home_y%`, `%home_z%` | Home de la proteccion. |
