# Personalización y Archivos
> MaxStaff es 100% configurable. Puedes modificar cada mensaje, menú, color y prefijo del plugin para adaptarlo a la temática de tu servidor.

## 1. Cambiar el Idioma
El plugin viene con traducciones oficiales integradas. Para cambiar el idioma base:
1. Ve a `plugins/MaxStaff/config.yml`.
2. Busca la opción `language:` dentro de la sección general.
3. Cambia `"en"` por `"es"` para español (o viceversa).
4. Usa `/maxstaff reload` en el servidor. El archivo `messages_es.yml` se generará automáticamente en la carpeta `lang/`.

## 2. Códigos de Color y Formato
Todos los archivos del plugin soportan los códigos de color tradicionales de Minecraft usando el símbolo `&` (ej. `&a` para verde, `&c` para rojo).

Además, si tu servidor está en una versión que soporta colores hexadecimales (1.16+), puedes usarlos en cualquier mensaje o menú usando el formato tradicional de Spigot.

## 3. Desactivar Módulos (Comandos)
Si ya utilizas otro plugin para un comando específico (por ejemplo, si prefieres usar el `/vanish` de Essentials en lugar del de MaxStaff), puedes desactivar el comando de MaxStaff directamente desde el `config.yml`.

- Busca la sección de comandos en la configuración y ponlos en `false`.
- Al hacerlo, si alguien intenta usar ese comando de MaxStaff, el plugin liberará el comando para que lo tome tu otro plugin sin generar conflictos.