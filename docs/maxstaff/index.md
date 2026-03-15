# Instalación y Requisitos
En esta sección aprenderás cómo instalar **MaxStaff** en tu servidor y realizar la configuración inicial básica.

# Requisitos Técnicos
Antes de continuar, asegúrate de que tu entorno cumpla con los siguientes requisitos:

- **Versión de Minecraft:** 1.19.x (Probado específicamente en 1.19.4).
- **Java:** Versión 17 o superior.
- **Software del servidor:** Paper o cualquier fork compatible con la API de Spigot.

# Dependencias Opcionales
Aunque el plugin funciona por sí solo, recomendamos instalar:

- [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/):  
  Necesario para mostrar estadísticas de sanciones y estados del staff en otros plugins (Scoreboards, TabLists, etc.).

# Guía de Instalación
1. Descarga el archivo **.jar** de la última versión de **MaxStaff**.
2. Sube el archivo a la carpeta `/plugins/` de tu servidor de Minecraft.
3. Reinicia el servidor (o usa un cargador de plugins) para generar los archivos de configuración.
4. ¡Listo! El plugin ahora estará activo con la configuración por defecto.

# Configuración Inicial: Cambiar a Español
Por defecto, el plugin se genera en inglés. Sigue estos pasos para cambiarlo a español:

1. Ve a la carpeta `/plugins/MaxStaff/`.
2. Abre el archivo `config.yml`.
3. Busca la opción `language` dentro de la sección `general`.
4. Cambia `"en"` por `"es"`.