# Funciones de MaxTools

MaxTools permite que las herramientas de tus jugadores evolucionen de forma dinámica a medida que se utilizan, desbloqueando hitos, encantamientos y habilidades especiales.

## Herramientas Rastreables (Tracked Tools)
El plugin rastrea automáticamente el progreso de las herramientas configuradas. Soporta las herramientas principales en todos sus materiales (desde madera hasta netherita):
* **Picos (Pickaxes):** `WOODEN_PICKAXE` a `NETHERITE_PICKAXE`.
* **Hachas (Axes):** `WOODEN_AXE` a `NETHERITE_AXE`.
* **Palas (Shovels):** `WOODEN_SHOVEL` a `NETHERITE_SHOVEL`.

## Sistema de Hitos (Milestones)
La progresión se basa en la cantidad de bloques minados. Al alcanzar un número determinado de bloques, la herramienta sube de nivel y alcanza un "Hito".

* **Recompensas:** Cada hito puede otorgar mejoras en encantamientos (como Eficiencia, Fortuna o Mending) o desbloquear poderosas **habilidades especiales**.
* **Configuración por defecto:** El sistema cuenta con 50 hitos preconfigurados, llegando hasta los 792,000 bloques minados.

## Habilidades Especiales (Special Abilities)
Las habilidades transforman por completo la experiencia de minería. Actualmente, existen 11 habilidades únicas:

| Habilidad | Descripción |
|---|---|
| **Self-Repair** | Repara la durabilidad de la herramienta automáticamente al activarse. |
| **Auto-Smelt** | Funde minerales automáticamente (ej. Hierro Crudo a Lingote) al romper la mena. |
| **Telepathy** | Envía los ítems minados directamente al inventario del jugador. |
| **Drill / Hammer** | Permite minería en área (3x3 o superior) ideal para picos y palas de diamante/netherita. |
| **Vein-Miner** | Rompe toda la veta de mineral conectada de un solo golpe. |
| **XP-Boost** | Multiplica la experiencia natural obtenida al romper el bloque. |
| **Haste** | Otorga el efecto de poción de Prisa (Haste) de forma pasiva. |
| **Momentum** | Acumula cargas temporales de Prisa mientras el jugador mantiene una racha de minería. |
| **Saturation Pulse** | Restaura el hambre y puede aplicar un efecto breve de Saturación. |
| **Luck Surge** | Aumenta drásticamente y de forma temporal los drops de minerales compatibles. |

::: info Compatibilidad
Todas las habilidades cuentan con un ajuste `compatible-with-mending` para decidir si funcionan en conjunto con el encantamiento de Reparación.
:::