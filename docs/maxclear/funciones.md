# INFORMACIÓN DEL PLUGIN
> MaxClear es un plugin diseñado para optimizar el rendimiento de servidores de Minecraft, eliminando entidades innecesarias y controlando la generación de criaturas para prevenir el lag. 

## 1. Optimización Automática de Entidades
> El núcleo del plugin está diseñado para mantener el servidor limpio de forma autónoma:

- `Limpieza Programada:` Realiza limpiezas automáticas en intervalos configurables (por defecto cada 5 minutos).
- `Sistema de Alertas:` Notifica a los jugadores con mensajes de advertencia personalizables antes de cada limpieza para evitar la pérdida accidental de objetos.
- `Limpieza Manual:` Permite a los administradores forzar una limpieza inmediata en todos los mundos o en mundos específicos.

## 2. Control de Granjas por Chunk
> Un sistema preventivo diseñado para evitar el abuso de entidades en áreas reducidas:

- `Límites por Chunk:` Establece un número máximo de entidades permitidas por chunk para prevenir lag causado por granjas masivas.
- `Gestión de Spawns:` Cancela automáticamente la generación de criaturas si se supera el límite configurado, protegiendo el TPS del servidor.

## 3. Filtrado Inteligente y Exclusiones
> Configuraciones detalladas para asegurar que solo se eliminen entidades innecesarias:

- `Lista de Exclusión:` Protege entidades importantes como Aldeanos, Jugadores, Marcos, Soportes de Armaduras y diferentes tipos de Minecarts.
- `Protección de Objetos Valiosos:` Opción para ignorar objetos con nombres personalizados (Nametags).
- `Radio de Protección del Spawn:` Permite definir una distancia mínima desde el spawn del mundo donde las entidades no serán eliminadas.