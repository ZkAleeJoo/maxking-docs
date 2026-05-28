# INFORMACION

> MaxGraves crea tumbas para que los jugadores puedan recuperar sus objetos y experiencia despues de morir.

## 1. Caracteristicas

* `Sistema de Tumbas:` al morir, se genera una tumba que guarda items, armadura, mano secundaria y experiencia.
* `Recuperacion Rapida:` al reclamar la tumba, el plugin devuelve el contenido y equipa automaticamente armadura/offhand cuando puede.
* `Menu de Tumbas:` `/mg info` abre un menu con las tumbas activas del jugador.
* `Papel Localizador:` al morir, el jugador recibe un localizador para teletransportarse a su tumba si tiene `maxgrave.tp`.
* `Acumulacion de Tumbas:` las tumbas se mantienen por jugador hasta que expiran o son reclamadas.

## 2. Marcadores de Tumba

`grave.marker.type` controla el bloque visual:

| Tipo | Comportamiento |
| :--- | :--- |
| `HEAD` | Usa la cabeza/skin del jugador, hologramas, particulas y animacion de reclamo. |
| `CHEST` | Coloca un cofre y permite abrir la tumba como inventario para tomar items uno por uno. Mantiene hologramas, pero no usa particulas ni animacion de reclamo. |

## 3. Acceso y PvP

Por defecto las tumbas son privadas. Si activas `grave.access.public-player-kill`, las tumbas generadas por muerte de jugador pueden ser abiertas o loteadas por cualquiera.

## 4. Configuracion destacada

| Ruta | Descripcion |
| :--- | :--- |
| `grave.despawn-time` | Segundos antes de desaparecer. |
| `grave.blacklisted-worlds` | Mundos donde no se crean tumbas. |
| `grave.search-max-radius` | Radio horizontal para buscar una ubicacion segura si el punto de muerte esta bloqueado. |
| `grave.create-on-death` | Activa o desactiva creacion de tumbas. |
| `grave.debug-death-events` | Muestra trazas detalladas de muerte en consola. |
| `grave.info-menu.item.material` | Material usado en cada entrada del menu `/mg info`. |
| `grave.hologram.*` | Hologramas, altura, separacion, intervalo y lineas. |
| `grave.claim-animation.*` | Delay, rayo visual y sonido al reclamar. |
| `grave.effects.*` | Particulas, espiral y sonido ambiente para tumbas tipo `HEAD`. |
