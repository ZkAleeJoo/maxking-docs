# Integración con Discord (Webhooks)
> El plugin permite enviar notificaciones automáticas y registros detallados a un canal de tu servidor de Discord a través de Webhooks. Puedes registrar sanciones, alertas administrativas y reportes de jugadores en tiempo real.

## 1. Configuración Básica
> Para activar esta función, debes configurar el archivo `discord.yml`.

1. Ve a tu servidor de Discord, haz clic derecho en el canal donde deseas recibir las alertas y selecciona **Editar canal**.
2. Dirígete a **Integraciones** > **Webhooks** y crea un nuevo Webhook.
3. Copia la URL del Webhook y pégala en tu archivo `discord.yml`:

```yaml
# Reemplaza "URL_AQUI" con el enlace de tu Webhook
webhook-url: "URL_AQUI"
enabled: true

# Opciones de personalización global
global-image: "[https://imgur.com/xLVotZb](https://imgur.com/xLVotZb)"
server-name: "Survival 1.20"
```

## 2. Categorías de Notificaciones
> El sistema está dividido en tres categorías principales. Puedes personalizar el color (en formato HEX), el autor y los campos de información para cada una.

### Sanciones
> Se envían automáticamente cuando un miembro del staff castiga a un jugador.
- `Ban:` Registra al usuario, el staff, la duración y la razón.
- `Mute:` Registra al usuario, el staff, la duración y la razón.
- `Kick:` Registra al usuario, el staff y la razón de la expulsión.
- `Warn:` Registra al usuario, el staff, la razón y la **cantidad de advertencias acumuladas**.

### Alertas Administrativas
> Notificaciones sobre acciones de moderación generales en el servidor.
- `Freeze / Unfreeze:` Avisa cuando un jugador es congelado o descongelado para revisión (SS).
- `Gestión de Chat:` Avisa cuando el chat global es limpiado (`chat_clear`), bloqueado (`chat_mute`) o desbloqueado (`chat_unmute`).
- `Staff Mode:` Registra cuando un miembro del equipo entra o sale del modo staff.

### Reportes
> Avisa al instante cuando un jugador usa el comando de reportes.
- Muestra quién reportó, a quién reportó, la razón y las **coordenadas exactas** (mundo, X, Y, Z) donde ocurrió el incidente.

## 3. Variables Disponibles
> Puedes usar estas variables dentro de la configuración de tus *embeds* en el `discord.yml` para mostrar información dinámica:

| Variable            | Descripción                                                 |
| :-------------------| :-----------------------------------------------------------|
| `{target}`          | Nombre del jugador afectado o reportado                     |
| `{staff}`           | Nombre del miembro del staff que ejecutó la acción          |
| `{reason}`          | Razón de la sanción, alerta o reporte                       |
| `{duration}`        | Tiempo de la sanción (solo aplica para temporal bans/mutes) |
| `{count}`           | Número de advertencias (warns) acumuladas del jugador       |
| `{reporter}`        | Nombre del jugador que emitió un reporte                    |
| `{face}`            | URL que muestra el avatar/cabeza 3D del jugador afectado    |
| `{world}`           | Mundo donde se encontraba el jugador (usado en reportes)    |
| `{x}`, `{y}`, `{z}` | Coordenadas exactas del jugador (usado en reportes)         |
