---
title: 'Configuración General'
description: 'Visión general de los archivos de configuración y bases de datos.'
---

# Archivos de Configuración

MaxStaff Premium es altamente personalizable. Tras iniciar el servidor por primera vez, se generarán varios archivos clave en la carpeta del plugin:

* **`config.yml`:** Es el archivo principal que controla el comportamiento global, los menús interactivos (GUI), las sanciones, la base de datos y los módulos específicos como el rastreador de clientes o las capturas de inventario.
* **`discord.yml`:** Dedicado a la configuración de webhooks y el formato visual de los embeds enviados a Discord.
* **`lang/messages_es.yml` y `lang/messages_en.yml`:** Contienen todos los textos de la interfaz gráfica y los mensajes enviados por el plugin.
* **`plugin.yml`:** Define los comandos base y el árbol de permisos.

## 🗄️ Almacenamiento y Base de Datos

El plugin ofrece dos métodos principales para guardar la información de historiales y castigos:

1. **Local YAML:** Es el formato por defecto y es muy útil para servidores individuales.
2. **MySQL:** Altamente recomendado para entornos con múltiples servidores (networks). Al habilitarlo (`database.enabled=true`), permite la sincronización en tiempo real de baneos, mutes, kicks y baneos de IP entre diferentes servidores.

> **Sistema a prueba de fallos:** Si MySQL está configurado pero falla al intentar conectarse durante el inicio, el plugin cambiará automáticamente al uso de YAML local (fallback) para asegurar que el servidor pueda arrancar correctamente.

### Almacenamiento Adicional
Dependiendo de los módulos que actives, el plugin creará archivos secundarios como `reports.yml` para almacenar los reportes de los usuarios y la carpeta `invsee-cache/*.yml` para guardar las capturas temporales de inventarios.