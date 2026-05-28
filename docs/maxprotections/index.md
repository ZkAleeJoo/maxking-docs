# MaxProtections

> En esta seccion aprenderas como instalar y configurar **MaxProtections**, un plugin gratuito de protecciones basado en WorldGuard, piedras configurables, menus interactivos, rangos de miembros y almacenamiento seguro en SQLite.

## Requisitos

* **Java 21 o superior.**
* Servidor **Paper 1.21 compatible**.
* **WorldGuard obligatorio.**
* **Vault opcional**, necesario solo para compras, precios y alquileres de protecciones.

::: warning Compatibilidad
MaxProtections usa APIs modernas de Paper. No esta pensado para Spigot puro.
:::

## Instalacion

1. Descarga el archivo `.jar` de **MaxProtections**.
2. Coloca el `.jar` en la carpeta `/plugins/` de tu servidor.
3. Asegurate de tener WorldGuard instalado y funcionando.
4. Reinicia el servidor para generar los archivos.
5. Revisa `/plugins/MaxProtections/config.yml`, la carpeta `lang/` y la carpeta `protections/`.

## Archivos importantes

| Archivo | Funcion |
| :--- | :--- |
| `config.yml` | Configuracion general, limites, menus, efectos, sonidos, idioma y rentas. |
| `lang/messages_en.yml` / `lang/messages_es.yml` | Mensajes del plugin. |
| `extra_lang/config_en.yml` / `extra_lang/config_es.yml` | Plantillas completas de configuracion por idioma. |
| `protections/<id>.yml` | Definicion editable de cada piedra de proteccion. |
| `protections.db` | Base SQLite runtime para protecciones colocadas, miembros, flags, invitaciones, eventos, homes, alias y rentas. |

::: danger No edites la base runtime
No modifiques `protections.db` manualmente mientras el servidor esta encendido. Para editar tipos de piedras usa los YAML dentro de `protections/`; para reparar diferencias usa `/mp repair`.
:::

## Primeros pasos

* Usa `/mp create` para crear una piedra desde el menu administrativo.
* Entrega una piedra con `/p give <jugador> <proteccion> <cantidad>` o permite compras con `/p buy <proteccion>`.
* Los jugadores colocan la piedra para crear una region de WorldGuard.
* La administracion normal de una proteccion se hace con `/p menu`, `/p settings`, `/p member`, `/p home`, `/p sethome` y `/p info`.
