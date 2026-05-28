# Funciones de MaxTools

MaxTools permite que las herramientas de tus jugadores evolucionen de forma dinamica a medida que se utilizan, desbloqueando hitos, encantamientos y habilidades especiales.

## Herramientas Rastreables

El plugin rastrea automaticamente el progreso de las herramientas configuradas en `evolution.yml`. Por defecto soporta:

* **Picos:** `WOODEN_PICKAXE` a `NETHERITE_PICKAXE`.
* **Hachas:** `WOODEN_AXE` a `NETHERITE_AXE`.
* **Palas:** `WOODEN_SHOVEL` a `NETHERITE_SHOVEL`.

## Sistema de Hitos

La progresion se basa en bloques minados con herramientas validas. Al alcanzar una cantidad configurada, la herramienta obtiene recompensas.

* **Recompensas:** cada hito puede dar encantamientos o desbloquear habilidades.
* **Configuracion actual por defecto:** el `evolution.yml` incluido trae 13 hitos, desde 100 hasta 9000 bloques.
* **Personalizable:** puedes agregar mas hitos, cambiar requisitos, cambiar encantamientos y mover las habilidades a otros puntos de progreso.

## Habilidades Especiales

El motor soporta 11 tipos de habilidades. El archivo por defecto activa una seleccion inicial, pero puedes agregar otras en `special-abilities` si las necesitas.

| Habilidad | Descripcion |
| :--- | :--- |
| **Self-Repair** | Repara durabilidad al caminar con la herramienta en mano. |
| **Auto-Smelt** | Funde drops compatibles al romper minerales. |
| **Telepathy** | Envia drops directamente al inventario. |
| **Drill** | Mineria en area para picos y palas de alto tier. |
| **Hammer** | Variante de mineria en area soportada por el motor. |
| **Vein-Miner** | Rompe bloques conectados del mismo material, ideal para vetas. |
| **XP-Boost** | Multiplica la experiencia natural del bloque. |
| **Haste** | Aplica prisa pasiva mientras sostienes la herramienta. |
| **Momentum** | Acumula prisa temporal durante rachas de mineria. |
| **Saturation Pulse** | Restaura hambre y puede aplicar saturacion breve. |
| **Luck Surge** | Aumenta temporalmente drops de minerales compatibles. |

::: info Compatibilidad
Las habilidades tienen `compatible-with-mending` para decidir si funcionan junto al encantamiento de Reparacion.
:::

## Proteccion anti-farm

MaxTools evita progresion injusta con reglas de conteo:

* `require-preferred-tool` obliga a usar la herramienta correcta.
* `strict-tool-category-match` valida la categoria de herramienta.
* `whitelist-materials` permite limitar los bloques que cuentan.
* `blacklist-materials` evita progreso con bloques abusables.
* El plugin tambien registra bloques colocados por jugadores para evitar progreso artificial.
