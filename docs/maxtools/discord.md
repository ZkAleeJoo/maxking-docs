# Integracion con Discord

MaxTools incluye soporte nativo para webhooks de Discord y puede enviar notificaciones cuando un jugador desbloquea milestones o habilidades.

## Como Habilitarlo

Edita la seccion `discord` de `config.yml`:

```yaml
discord:
  enabled: true
  webhook-url: 'TU_ENLACE_AQUI'
  server-name: 'TuServidor'
  events:
    milestone-unlocked: true
    ability-unlocked: true
```

## Embeds Personalizados

Por defecto, el plugin envia embeds modernos (`discord.embeds.enabled: true`).

* **Avatares:** Puedes usar el rostro de la skin del jugador con `https://mc-heads.net/avatar/{player}/128`.
* **Placeholders:** Los templates y valores del embed aceptan `{player}`, `{player_uuid}`, `{tool}`, `{tool_type}`, `{blocks}`, `{ability}`, `{reward}`, `{timestamp}`, `{server}`, `{server_software}` y `{plugin}`.
* **Formato legacy:** Si desactivas los embeds, MaxTools usa los mensajes de `discord.templates`.
* **Pings seguros:** `allowed-mentions.parse` controla si Discord puede mencionar `everyone`, roles o usuarios. Por defecto queda vacio para evitar pings accidentales.

::: tip Prueba de Conexion
Usa `/met discordtest` o `/met dctest` para enviar un mensaje de prueba y validar la URL, el formato y los placeholders.
:::
