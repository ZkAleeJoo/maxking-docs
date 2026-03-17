# INFORMACIÓN GENERAL
> MaxStaff transforma la experiencia de moderación mediante un sistema de **"MODO-STAFF"** que optimiza las tareas de monitoreo y sanción todas estas sanciones se manejan mediante menus interactivos, baneos, kicks, muteos, historial, permisos, inventario, etc....

## 1. Modo Staff
> Cuando ejecutas el comando `/staff`, el plugin realiza automáticamente las siguientes acciones para facilitar tu trabajo:

- `Guardado de Inventario:` Tu inventario actual, armadura, modo de juego y nivel de hambre se guardan de forma segura para restaurarse cuando salgas del modo, si por motivos X te desconectas del servidor, tus datos quedarán guardados en un archivo, así, cuando vuelvas a entrar al servidor recuperarás tus cosas.
- `Capacidades Administrativas:` Se activa el vuelo, obtienes invulnerabilidad, se bloquea la pérdida de hambre, nadie te puede escuchar, no puedes golpear a los jugadores, etc...
- `Vanish Automático:` Al entrar en este modo te vuelves invisible para los jugadores que no tengan permisos especiales, se le puede otorgar un permiso especial a los jugadores para poder ver al staff en vanish [Permisos](/maxstaff/permisos)
- `Action Bar:` Aparecerá un mensaje constante sobre tu barra de inventario indicando tu estado de invisibilidad.


## 2. Inventario
> Al activar el modo staff recibirás un conjunto de herramientas configurables en los siguientes slots:

- `Sanción (Slot 0):` Haz clic derecho sobre un jugador o usa la herramienta para abrir el menú rápido de sanciones.
- `Freeze (Slot 1):` Permite congelar instantáneamente a un jugador para realizar una revisión (SS).
- `Jugadores Online (Slot 4):` Abre un menú con las cabezas de todos los jugadores conectados para teletransportarte rápidamente.
- `Teletransportaación (Slot 6):` Un reloj que te permitirá atravesar bloques para moverte más rapido.
- `Inspeccionar (Slot 7):` Haz clic derecho sobre un jugador para ver su inventario y armadura en tiempo real.
- `Vanish (Slot 8):` Activa o desactiva tu invisibilidad rápidamente sin necesidad de escribir comandos.

## 3. Invisiblidad
> Oculta tu presencia en el servidor usando el comando `/vanish`. Los jugadores sin el permiso `maxstaff.see.vanish` no podrán verte ni en el mundo ni en la lista de jugadores.
- **Efectos:** Al activarlo o desactivarlo escucharás un sonido de confirmación.

## 4. Comando espía
> Usando el comando `/cmdspy` permite a los miembros del staff monitorear en tiempo real los comandos que ejecutan los jugadores.

- Los mensajes aparecerán con el formato configurado en `messages_es.yml`  
*(ejemplo: `[SPY] Usuario: /msg ...`)*.

## 5. Canal Staff
> Usando el comando `/sc <mensaje>` te abrirá un canal de comunicación exclusivo y seguro para el equipo de staff.

- Los mensajes enviados aquí no son visibles para los jugadores normales y están formateados para destacar en el chat.

## 6. Inspección Silenciosa
> Mientras estés en **Modo Staff**, puedes interactuar silenciosamente con contenedores (cofres, ender chests, barriles, etc.):

- **Cofres de Jugadores:** Puedes abrir cofres sin que se reproduzca la animación ni el sonido de apertura, permitiéndote revisar su contenido sin alertar al sospechoso.
- **Control de Inspección:** El plugin evita que dos miembros del staff inspeccionen el mismo contenedor al mismo tiempo para prevenir conflictos de datos.