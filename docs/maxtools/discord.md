# Integración con Discord

¡Celebra los logros de tus jugadores! MaxTools incluye soporte nativo para **Webhooks de Discord**.

## Cómo habilitarlo
Para enviar notificaciones a tu servidor de Discord, dirígete al archivo `config.yml` y ajusta la sección `discord`:

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

Por defecto, el plugin envía **Embeds** modernos y enriquecidos (`discord.embeds.enabled: true`).

* **Avatares:** Incluye automáticamente el rostro de la skin del jugador (`https://mc-heads.net/avatar/{player}/128`).
* **Placeholders:** Soporta etiquetas dinámicas como `{player}`, `{tool}`, `{blocks}` y `{ability}`.
* **Formatos Opcionales:** Si prefieres mensajes de texto simple, puedes desactivar los embeds y configurar la sección `templates`.

::: tip Prueba de Conexión
Una vez configurado, usa `/met discordtest` (o su alias `/met dctest`) dentro del servidor para enviar un mensaje de prueba a tu canal y verificar que el formato y la URL sean correctos.
:::