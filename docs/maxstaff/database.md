# Base de Datos
> MaxStaff está diseñado para funcionar de manera eficiente tanto en servidores individuales como en grandes redes (BungeeCord/Velocity) gracias a su soporte para bases de datos. *Recordar que al día 18/03/2026 el .jar no es compatible con servidores con BungeeCord/Velocity* pero eso no implica que funcionen las sanciones en entornos backends en networks.

## 1. Almacenamiento Local
> Es la opción por defecto. No requiere configuración adicional.
- **¿Para quién es?** Servidores de una sola modalidad (ej. Solo Survival, Gens, BoxPvP, Skyblock, etc).
- **¿Cómo funciona?** El plugin crea automáticamente un archivo local dentro de la carpeta `/plugins/MaxStaff/` donde guarda todas las sanciones, historiales y el registro de multi-cuentas (Alts).

## 2. Sincronización Global
> Recomendado para redes con múltiples servidores. Permite que un jugador baneado en el "Lobby" tampoco pueda entrar al "Survival".
- **¿Para quién es?** Redes (Networks) que necesitan compartir el historial de sanciones entre varias modalidades.

### Configuración de MySQL
Para activar la sincronización, debes editar el archivo `config.yml` en **todos** los servidores donde instales el plugin:

1. Dirígete a la sección `database`.
2. Cambia el tipo de `false` a `true`.
3. Completa los datos con las credenciales de tu base de datos:

```yaml
database:
  enabled: true #Se cambia esta opción
  host: "localhost"
  port: 3306
  database: "maxstaff_db"
  username: "root"
  password: ""
  use-ssl: false #Si tienes problemas con la conexción entre servidores activa esto a true
  server-id: "server-1"
  status-servers: #Esto es meramente opcional, simplemente para tener un conteo de los servidores
    survival:
      name: "Survival" 
      host: "127.0.0.1"
      port: 3306
    lobby:
      name: "Lobby"
      host: "127.0.0.1"
      port: 3306
```
4. Guarda el archivo y reinicia los servidores. ¡Listo! Todo el historial estará sincronizado.