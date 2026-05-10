# Personalización y Ajustes

MaxTools está diseñado para ser extremadamente flexible, permitiéndote adaptar desde la estética de los ítems hasta las reglas de progresión para evitar abusos.

## Lore de Evolución (Visuales)

El plugin inyecta automáticamente información dinámica en el Lore de las herramientas evolucionadas. Puedes configurar cada sección en el `config.yml` bajo la clave `evolution-lore`.

### Barra de Progreso
Puedes personalizar totalmente cómo se ve la barra de carga en el ítem:
* **Caracteres:** Define el símbolo de llenado (`filled-char`) y vacío (`empty-char`).
* **Longitud:** Ajusta el largo total de la barra con `bar-length`.
* **Optimización:** El ajuste `update-interval-blocks` define cada cuántos bloques se refresca el Lore (se recomienda un valor de 5 para mantener el rendimiento alto).

### Tiers y Estados
Define las rarezas y los mensajes de estado que verán los jugadores:
* **Tiers por defecto:** `Common`, `Rare`, `Epic`, `Mythic` y `Legendary`.
* **Estados de Habilidad:** Puedes traducir las etiquetas de `active`, `cooldown` y `blocked` directamente en la configuración.

---

## Reglas de Conteo (Anti-Farm)

Para asegurar un juego justo, MaxTools incluye un sistema que controla qué bloques suman progreso a la evolución en el archivo `evolution.yml`.

| Ajuste | Descripción |
|---|---|
| `require-preferred-tool` | Si es `true`, solo los bloques que corresponden a la herramienta (ej. piedra con pico) cuentan. |
| `strict-tool-category-match` | Enforce que el tag de la herramienta coincida exactamente con la categoría del bloque. |
| `whitelist-materials` | Lista de materiales únicos que dan progreso. Si está vacía, todos valen (menos la lista negra). |
| `blacklist-materials` | Lista de bloques que **nunca** darán progreso (ideal para evitar granjas de flores o nieve). |

---

## Perfiles de Idioma Inteligentes

MaxTools utiliza un sistema de **Sincronización de Perfiles** (`language-profile-sync`) para que no pierdas tus personalizaciones al cambiar de idioma.

1. **Activación:** Al usar `/met lang` y seleccionar un idioma, el plugin busca el perfil correspondiente en `/plugins/MaxTools/language_profiles/`.
2. **Independencia:** Puedes tener un `config_es.yml` con prefijos y colores totalmente distintos a la versión `config_en.yml`.
3. **Persistencia:** El plugin intercambia automáticamente los archivos `config.yml` y `menus.yml` por los del idioma seleccionado, manteniendo tus cambios guardados para cada uno.

::: info Nota sobre Perfiles
Si un perfil de idioma aún no existe, el plugin lo generará automáticamente basándose en su plantilla interna la primera vez que se seleccione.
:::

---

## Formato del Nombre de Herramientas

Puedes decidir cómo se muestra el contador de progreso directamente en el nombre del ítem mediante la sección `progress-display` en `evolution.yml`.

* **Placeholders:** Utiliza `{current}`, `{target}` y `{unit}` para armar tu formato.
* **Estado Máximo:** Define un mensaje especial (ej: `&lMAXED`) para cuando la herramienta alcanza el último hito.
* **Renombrado Dinámico:** El ajuste `refresh-base-name-on-rename` permite decidir si el plugin debe actualizar el nombre base si un jugador renombra su herramienta en un yunque.