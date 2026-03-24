# PLUGIN INFORMATION

> MaxClear is a plugin designed to optimize Minecraft server performance by removing unnecessary entities and controlling mob spawning to prevent lag.

## 1. Automatic Entity Optimization

> The core of the plugin is designed to keep the server clean autonomously:

* `Scheduled Cleanup:` Performs automatic cleanups at configurable intervals (default: every 5 minutes).
* `Alert System:` Notifies players with customizable warning messages before each cleanup to prevent accidental item loss.
* `Manual Cleanup:` Allows administrators to force an immediate cleanup across all worlds or specific worlds.

## 2. Chunk-Based Farm Control

> A preventive system designed to avoid entity abuse in confined areas:

* `Chunk Limits:` Sets a maximum number of entities allowed per chunk to prevent lag caused by large-scale farms.
* `Spawn Management:` Automatically cancels creature spawning when the configured limit is exceeded, protecting the server's TPS.

## 3. Intelligent Filtering and Exclusions

> Detailed configurations to ensure that only unnecessary entities are removed:

* `Exclusion List:` Protects important entities such as Villagers, Players, Item Frames, Armor Stands, and different types of Minecarts.
* `Valuable Item Protection:` Option to ignore items with custom names (Nametags).
* `Spawn Protection Radius:` Allows defining a minimum distance from the world spawn where entities will not be removed.
