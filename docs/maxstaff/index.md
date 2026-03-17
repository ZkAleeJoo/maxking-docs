# INSTALACIÓN Y REQUISITOS
> En esta sección aprenderás cómo instalar **MaxStaff** en tu servidor y realizar la configuración inicial básica para que el plugin funcione de buena manera, como siempre tienes el servidor de discord https://discord.gg/Vr46JHm2kd

## 1. Requisitos del servidor
> Antes de continuar, asegúrate de que tu entorno cumpla con los siguientes requisitos:
- **Versión de Minecraft:** 1.19.x (Probado específicamente en 1.19.4).
- **Java:** Versión 17 o superior.
- **Software del servidor:** Paper, Purpur, Puperfish o cualquier fork compatible con la API de Paper.

## 2. Dependencias opcionales
> Aunque el plugin funciona por sí solo, recomendamos instalar:
- [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/): Necesario para mostrar estadísticas de sanciones y estados del staff en otros plugins (Scoreboards, TabLists, etc.). Esto es recomendado si quieres tener mas información de lo que sucede en tu servidor, puedes encontrar los placeholder de **MaxStaff** en la sección de [Placeholders MaxStaff](/maxstaff/placeholderapi)

## 3. Guía de instalación
- Descarga el archivo **.jar** de la última versión de **MaxStaff**.
- Sube el archivo a la carpeta `/plugins/` de tu servidor de Minecraft.
- Reinicia el servidor (o usa un cargador de plugins) para generar los archivos de configuración.
- ¡Listo! El plugin ahora estará activo con la configuración por defecto.

## 4. Configuración Inicial
> Por defecto, el plugin se genera en inglés. Sigue estos pasos para cambiarlo a español:
1. Ve a la carpeta `/plugins/MaxStaff/`.
2. Abre el archivo `config.yml`.
3. Busca la opción `language` dentro de la sección `general`.
4. Cambia `"en"` por `"es"`.