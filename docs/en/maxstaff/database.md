# Database

> MaxStaff is designed to work efficiently on both standalone servers and large networks (BungeeCord/Velocity) thanks to its database support. *Note: as of 03/18/2026, the .jar is not compatible with BungeeCord/Velocity servers*, but this does not prevent punishments from working in backend environments within networks.

## 1. Local Storage

> This is the default option. No additional configuration is required.

* **Who is it for?** Single-mode servers (e.g., Survival only, Gens, BoxPvP, Skyblock, etc.).
* **How does it work?** The plugin automatically creates a local file inside the `/plugins/MaxStaff/` folder where it stores all punishments, histories, and alt account records.

## 2. Global Synchronization

> Recommended for networks with multiple servers. Allows a player banned in the "Lobby" to also be prevented from joining "Survival".

* **Who is it for?** Networks that need to share punishment history across multiple server modes.

### MySQL Configuration

To enable synchronization, you must edit the `config.yml` file on **all** servers where the plugin is installed:

1. Go to the `database` section.
2. Change `enabled` from `false` to `true`.
3. Fill in your database credentials:

```yaml
database:
  enabled: true # Enable this option
  host: "localhost"
  port: 3306
  database: "maxstaff_db"
  username: "root"
  password: ""
  use-ssl: false # If you have connection issues between servers, set this to true
  server-id: "server-1"
  status-servers: # This is optional, used to track server status
    survival:
      name: "Survival" 
      host: "127.0.0.1"
      port: 3306
    lobby:
      name: "Lobby"
      host: "127.0.0.1"
      port: 3306
```

4. Save the file and restart your servers. Done! All history will now be synchronized.