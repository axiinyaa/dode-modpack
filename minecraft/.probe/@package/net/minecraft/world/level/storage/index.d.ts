import { $Lifecycle, $Dynamic } from "@package/com/mojang/serialization";
import { $MinecraftServer, $WorldLoader$PackConfig } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $DateTimeFormatter } from "@package/java/time/format";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SavedData$Factory_, $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Spliterator, $Iterator, $UUID, $List, $UUID_, $List_, $Set } from "@package/java/util";
import { $EndDragonFight$Data_, $EndDragonFight$Data } from "@package/net/minecraft/world/level/dimension/end";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $DirectoryLock } from "@package/net/minecraft/util";
import { $WorldBorder$Settings } from "@package/net/minecraft/world/level/border";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $TimerQueue } from "@package/net/minecraft/world/level/timers";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $HolderLookup$Provider, $BlockPos, $RegistryAccess$Frozen, $BlockPos_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $LevelStorageAccessAccessorMixin } from "@package/me/ichun/mods/ichunutil/mixin";
import { $Enum, $Record, $RuntimeException, $AutoCloseable, $Comparable, $Iterable } from "@package/java/lang";
import { $WorldDimensions$Complete_, $WorldOptions, $WorldDimensions$Complete } from "@package/net/minecraft/world/level/levelgen";
import { $File, $File_ } from "@package/java/io";
import { $LevelSettings, $GameType, $WorldDataConfiguration, $GameRules, $GameType_, $LevelHeightAccessor, $Level, $WorldDataConfiguration_ } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Instant, $LocalDateTime } from "@package/java/time";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $Stream } from "@package/java/util/stream";
import { $PrimaryLevelDataExtension } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LevelStem_ } from "@package/net/minecraft/world/level/dimension";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
export * as loot from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage" {
    export class $CommandStorage {
        get(id: $ResourceLocation_): $CompoundTag;
        set(id: $ResourceLocation_, nbt: $CompoundTag_): void;
        keys(): $Stream<$ResourceLocation>;
        constructor(storage: $DimensionDataStorage);
    }
    export class $CommandStorage$Container extends $SavedData {
    }
    export class $LevelStorageSource$LevelDirectory extends $Record {
        rawDataFile(dateTime: $LocalDateTime): $Path;
        lockFile(): $Path;
        corruptedDataFile(dateTime: $LocalDateTime): $Path;
        path(): $Path;
        resourcePath(resource: $LevelResource): $Path;
        dataFile(): $Path;
        directoryName(): string;
        iconFile(): $Path;
        oldDataFile(): $Path;
        constructor(path: $Path_);
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelDirectory}.
     */
    export type $LevelStorageSource$LevelDirectory_ = { path?: $Path_,  } | [path?: $Path_, ];
    export class $LevelDataAndDimensions extends $Record {
        dimensions(): $WorldDimensions$Complete;
        worldData(): $WorldData;
        constructor(arg0: $WorldData, arg1: $WorldDimensions$Complete_);
    }
    /**
     * Values that may be interpreted as {@link $LevelDataAndDimensions}.
     */
    export type $LevelDataAndDimensions_ = { dimensions?: $WorldDimensions$Complete_, worldData?: $WorldData,  } | [dimensions?: $WorldDimensions$Complete_, worldData?: $WorldData, ];
    export class $WorldData {
        static ANVIL_VERSION_ID: number;
        static MCREGION_VERSION_ID: number;
    }
    export interface $WorldData {
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        setGameType(type: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        endDragonFightData(): $EndDragonFight$Data;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        /**
         * Get current world name
         */
        getLevelName(): string;
        getVersion(): number;
        getDataConfiguration(): $WorldDataConfiguration;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        getKnownServerBrands(): $Set<string>;
        getRemovedFeatureFlags(): $Set<string>;
        setModdedInfo(name: string, isModded: boolean): void;
        getStorageVersionName(storageVersionId: number): string;
        getCustomBossEvents(): $CompoundTag;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        overworldData(): $ServerLevelData;
        getLevelSettings(): $LevelSettings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        setDifficulty(difficulty: $Difficulty_): void;
        setDifficultyLocked(locked: boolean): void;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        worldGenSettingsLifecycle(): $Lifecycle;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        enabledFeatures(): $FeatureFlagSet;
        getDifficulty(): $Difficulty;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        get flatWorld(): boolean;
        get levelName(): string;
        get version(): number;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get levelSettings(): $LevelSettings;
        get allowCommands(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get debugWorld(): boolean;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
    }
    export class $LevelSummary$CorruptedLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_, lastPlayed: number);
    }
    export class $LevelSummary$SymlinkLevelSummary extends $LevelSummary {
        static PLAY_WORLD: $Component;
        constructor(levelId: string, icon: $Path_);
    }
    export class $DataVersion {
        getVersion(): number;
        isSideSeries(): boolean;
        getSeries(): string;
        isCompatible(dataVersion: $DataVersion): boolean;
        static MAIN_SERIES: string;
        constructor(version: number);
        constructor(version: number, series: string);
        get version(): number;
        get sideSeries(): boolean;
        get series(): string;
    }
    export class $DerivedLevelData implements $ServerLevelData {
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(time: number): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        setGameType(type: $GameType_): void;
        setClearWeatherTime(time: number): void;
        setRainTime(time: number): void;
        setThunderTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setRaining(initialized: boolean): void;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Get current world time
         */
        getGameTime(): number;
        getDifficulty(): $Difficulty;
        getDayTimeFraction(): number;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        constructor(worldData: $WorldData, wrapped: $ServerLevelData);
        get difficultyLocked(): boolean;
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get levelName(): string;
        get allowCommands(): boolean;
        get hardcore(): boolean;
        get difficulty(): $Difficulty;
        get gameRules(): $GameRules;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
    }
    export class $LevelStorageException extends $RuntimeException {
        getMessageComponent(): $Component;
        constructor(messageComponent: $Component_);
        get messageComponent(): $Component;
    }
    export class $WritableLevelData {
    }
    export interface $WritableLevelData extends $LevelData {
        setSpawn(spawnPoint: $BlockPos_, spawnAngle: number): void;
    }
    export class $LevelData {
    }
    export interface $LevelData {
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        /**
         * Sets whether it is raining or not.
         */
        setRaining(raining: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        /**
         * Get current world time
         */
        getGameTime(): number;
        getDifficulty(): $Difficulty;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        get difficultyLocked(): boolean;
        get hardcore(): boolean;
        get gameTime(): number;
        get difficulty(): $Difficulty;
        get dayTime(): number;
        get gameRules(): $GameRules;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get thundering(): boolean;
    }
    export class $DimensionDataStorage {
        readTagFromDisk(filename: string, dataFixType: $DataFixTypes_ | null, version: number): $CompoundTag;
        get<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        set(name: string, savedData: $SavedData): void;
        computeIfAbsent<T extends $SavedData>(factory: $SavedData$Factory_<T>, name: string): T;
        save(): void;
        dataFolder: $File;
        constructor(dataFolder: $File_, fixerUpper: $DataFixer, registries: $HolderLookup$Provider);
    }
    export class $LevelSummary$BackupStatus extends $Enum<$LevelSummary$BackupStatus> {
        getTranslationKey(): string;
        isSevere(): boolean;
        static values(): $LevelSummary$BackupStatus[];
        static valueOf(arg0: string): $LevelSummary$BackupStatus;
        shouldBackup(): boolean;
        static UPGRADE_TO_SNAPSHOT: $LevelSummary$BackupStatus;
        static DOWNGRADE: $LevelSummary$BackupStatus;
        static NONE: $LevelSummary$BackupStatus;
        get translationKey(): string;
        get severe(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelSummary$BackupStatus}.
     */
    export type $LevelSummary$BackupStatus_ = "none" | "downgrade" | "upgrade_to_snapshot";
    export class $LevelStorageSource$LevelStorageAccess implements $AutoCloseable, $LevelStorageAccessAccessorMixin {
        createPlayerStorage(): $PlayerDataStorage;
        getDimensionPath(dimensionPath: $ResourceKey_<$Level>): $Path;
        readAdditionalLevelSaveData(arg0: boolean): void;
        getLevelPath(folderName: $LevelResource): $Path;
        safeClose(): void;
        checkForLowDiskSpace(): boolean;
        estimateDiskSpace(): number;
        getDataTagFallback(): $Dynamic<never>;
        getWorldDir(): $Path;
        handler$cnl000$xaerominimap$onDeleteLevel(arg0: $CallbackInfo): void;
        handler$dfi001$xaeroworldmap$onDeleteLevel(arg0: $CallbackInfo): void;
        renameLevel(saveName: string): void;
        renameAndDropPlayer(saveName: string): void;
        makeWorldBackup(): number;
        restoreLevelDataFromOld(): boolean;
        getDataTag(): $Dynamic<never>;
        getSummary(dynamic: $Dynamic<never>): $LevelSummary;
        parent(): $LevelStorageSource;
        close(): void;
        deleteLevel(): void;
        getFileModificationTime(useFallback: boolean): $Instant;
        hasWorldData(): boolean;
        getIconFile(): ($Path) | undefined;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData, hostPlayerNBT: $CompoundTag_ | null): void;
        saveDataTag(registries: $RegistryAccess, serverConfiguration: $WorldData): void;
        getLevelId(): string;
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        levelDirectory: $LevelStorageSource$LevelDirectory;
        this$0: $LevelStorageSource;
        lock: $DirectoryLock;
        constructor(levelId: $LevelStorageSource, levelDir: string, arg2: $Path_);
        get dataTagFallback(): $Dynamic<never>;
        get worldDir(): $Path;
        get dataTag(): $Dynamic<never>;
        get iconFile(): ($Path) | undefined;
        get levelId(): string;
    }
    export class $PlayerDataStorage {
        getPlayerDir(): $File;
        handler$fig000$owo$onPlayerDataSaved(player: $Player, ci: $CallbackInfo, tag: $CompoundTag_): void;
        load(player: $Player): ($CompoundTag) | undefined;
        save(player: $Player): void;
        fixerUpper: $DataFixer;
        constructor(levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer);
        get playerDir(): $File;
    }
    export class $ServerLevelData {
    }
    export interface $ServerLevelData extends $WritableLevelData {
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(time: number): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        setGameType(type: $GameType_): void;
        setClearWeatherTime(time: number): void;
        setRainTime(time: number): void;
        setThunderTime(time: number): void;
        /**
         * Sets the initialization status of the World.
         */
        setThundering(initialized: boolean): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Sets the initialization status of the World.
         */
        setInitialized(initialized: boolean): void;
        /**
         * Returns `true` if the World is initialized.
         */
        isInitialized(): boolean;
        /**
         * Returns `true` if the World is initialized.
         */
        isAllowCommands(): boolean;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        getWorldBorder(): $WorldBorder$Settings;
        getDayTimeFraction(): number;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        set thundering(value: boolean);
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        set dayTime(value: number);
        get levelName(): string;
        get allowCommands(): boolean;
        set gameTime(value: number);
    }
    export class $LevelVersion {
        snapshot(): boolean;
        static parse(nbt: $Dynamic<never>): $LevelVersion;
        levelDataVersion(): number;
        lastPlayed(): number;
        minecraftVersionName(): string;
        minecraftVersion(): $DataVersion;
    }
    export class $LevelStorageSource {
        getLevelPath(saveName: string): $Path;
        getName(): string;
        static getLevelDataAndDimensions(dynamic: $Dynamic<never>, dataConfiguration: $WorldDataConfiguration_, levelStemRegistry: $Registry<$LevelStem_>, registry: $RegistryAccess$Frozen): $LevelDataAndDimensions;
        findLevelCandidates(): $LevelStorageSource$LevelCandidates;
        loadLevelSummaries(candidates: $LevelStorageSource$LevelCandidates_): $CompletableFuture<$List<$LevelSummary>>;
        static readLevelDataTagRaw(levelPath: $Path_): $CompoundTag;
        static readLevelDataTagFixed(levelPath: $Path_, dataFixer: $DataFixer): $Dynamic<never>;
        makeLevelSummary(dynamic: $Dynamic<never>, levelDirectory: $LevelStorageSource$LevelDirectory_, locked: boolean): $LevelSummary;
        static getFileModificationTime(dataFilePath: $Path_): $Instant;
        isNewLevelIdAcceptable(saveName: string): boolean;
        levelExists(saveName: string): boolean;
        /**
         * Gets the folder where backups are stored
         */
        getBaseDir(): $Path;
        /**
         * Gets the folder where backups are stored
         */
        getBackupPath(): $Path;
        validateAndCreateAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        getWorldDirValidator(): $DirectoryValidator;
        createAccess(saveName: string): $LevelStorageSource$LevelStorageAccess;
        static readDataConfig(dynamic: $Dynamic<never>): $WorldDataConfiguration;
        static getPackConfig(dynamic: $Dynamic<never>, packRepository: $PackRepository, safeMode: boolean): $WorldLoader$PackConfig;
        static parseValidator(validator: $Path_): $DirectoryValidator;
        static createDefault(savesDir: $Path_): $LevelStorageSource;
        fixerUpper: $DataFixer;
        static ALLOWED_SYMLINKS_CONFIG_NAME: string;
        static FORMATTER: $DateTimeFormatter;
        static LOGGER: $Logger;
        constructor(baseDir: $Path_, backupDir: $Path_, worldDirValidator: $DirectoryValidator, fixerUpper: $DataFixer);
        get name(): string;
        get baseDir(): $Path;
        get backupPath(): $Path;
        get worldDirValidator(): $DirectoryValidator;
    }
    export class $PrimaryLevelData implements $ServerLevelData, $WorldData, $PrimaryLevelDataExtension {
        setPreset(arg0: $ResourceLocation_): void;
        setEndDragonFight(endDragonFightData: $EndDragonFight$Data_): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnDelay(): number;
        setWanderingTraderSpawnDelay(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getWanderingTraderSpawnChance(): number;
        setWanderingTraderSpawnChance(time: number): void;
        getWanderingTraderId(): $UUID;
        setWanderingTraderId(id: $UUID_): void;
        handler$epe000$collective$hasConfirmedExperimentalWarning(arg0: $CallbackInfoReturnable<any>): void;
        /**
         * Gets the GameType.
         */
        getGameType(): $GameType;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        setGameType(type: $GameType_): void;
        worldGenOptions(): $WorldOptions;
        endDragonFightData(): $EndDragonFight$Data;
        setClearWeatherTime(time: number): void;
        setRainTime(time: number): void;
        setThunderTime(time: number): void;
        setRaining(locked: boolean): void;
        setThundering(locked: boolean): void;
        getScheduledEvents(): $TimerQueue<$MinecraftServer>;
        /**
         * Set current world time
         */
        setDayTime(time: number): void;
        /**
         * Return the number of ticks until rain.
         */
        getClearWeatherTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getThunderTime(): number;
        /**
         * Return the number of ticks until rain.
         */
        getRainTime(): number;
        setEndDragonFightData(endDragonFightData: $EndDragonFight$Data_): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isFlatWorld(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        hasConfirmedExperimentalWarning(): boolean;
        withConfirmedWarning(arg0: boolean): $PrimaryLevelData;
        getPreset(): $ResourceLocation;
        createTag(registries: $RegistryAccess, hostPlayerNBT: $CompoundTag_ | null): $CompoundTag;
        /**
         * Get current world name
         */
        getLevelName(): string;
        /**
         * Return the number of ticks until rain.
         */
        getVersion(): number;
        static parse<T>(tag: $Dynamic<T>, levelSettings: $LevelSettings, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldOptions: $WorldOptions, worldGenSettingsLifecycle: $Lifecycle): $PrimaryLevelData;
        setInitialized(locked: boolean): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isInitialized(): boolean;
        getDataConfiguration(): $WorldDataConfiguration;
        setDataConfiguration(dataConfiguration: $WorldDataConfiguration_): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        wasModded(): boolean;
        getKnownServerBrands(): $Set<string>;
        getRemovedFeatureFlags(): $Set<string>;
        setModdedInfo(name: string, isModded: boolean): void;
        getCustomBossEvents(): $CompoundTag;
        setCustomBossEvents(nbt: $CompoundTag_ | null): void;
        overworldData(): $ServerLevelData;
        getLevelSettings(): $LevelSettings;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isAllowCommands(): boolean;
        setDifficulty(difficulty: $Difficulty_): void;
        setDifficultyLocked(locked: boolean): void;
        getLoadedPlayerTag(): $CompoundTag;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDebugWorld(): boolean;
        worldGenSettingsLifecycle(): $Lifecycle;
        setWorldBorder(serializer: $WorldBorder$Settings): void;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isHardcore(): boolean;
        getWorldBorder(): $WorldBorder$Settings;
        /**
         * Get current world time
         */
        getGameTime(): number;
        getDifficulty(): $Difficulty;
        getDayTimeFraction(): number;
        /**
         * Get current world time
         */
        getDayTime(): number;
        /**
         * Gets the GameRules class Instance.
         */
        getGameRules(): $GameRules;
        fillCrashReportCategory(crashReportCategory: $CrashReportCategory, level: $LevelHeightAccessor): void;
        getSpawnPos(): $BlockPos;
        getSpawnAngle(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isRaining(): boolean;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isThundering(): boolean;
        setDayTimeFraction(arg0: number): void;
        getDayTimePerTick(): number;
        setDayTimePerTick(arg0: number): void;
        /**
         * Set current world time
         */
        setGameTime(time: number): void;
        getStorageVersionName(storageVersionId: number): string;
        enabledFeatures(): $FeatureFlagSet;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        static PLAYER: string;
        static WORLD_GEN_SETTINGS: string;
        static LEVEL_NAME: string;
        constructor(settings: $LevelSettings, worldOptions: $WorldOptions, specialWorldProperty: $PrimaryLevelData$SpecialWorldProperty_, worldGenSettingsLifecycle: $Lifecycle);
        set endDragonFight(value: $EndDragonFight$Data_);
        get scheduledEvents(): $TimerQueue<$MinecraftServer>;
        get flatWorld(): boolean;
        get levelName(): string;
        get version(): number;
        get knownServerBrands(): $Set<string>;
        get removedFeatureFlags(): $Set<string>;
        get levelSettings(): $LevelSettings;
        get allowCommands(): boolean;
        get loadedPlayerTag(): $CompoundTag;
        get debugWorld(): boolean;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
    }
    export class $LevelSummary implements $Comparable<$LevelSummary> {
        isDisabled(): boolean;
        isExperimental(): boolean;
        /**
         * Gets the EnumGameType.
         */
        getGameMode(): $GameType;
        getSettings(): $LevelSettings;
        /**
         * Returns the file name.
         */
        getLevelName(): string;
        getInfo(): $Component;
        compareTo(other: $LevelSummary): number;
        isLocked(): boolean;
        getIcon(): $Path;
        canDelete(): boolean;
        levelVersion(): $LevelVersion;
        requiresManualConversion(): boolean;
        getLastPlayed(): number;
        hasCommands(): boolean;
        getWorldVersionName(): $MutableComponent;
        shouldBackup(): boolean;
        backupStatus(): $LevelSummary$BackupStatus;
        isDowngrade(): boolean;
        primaryActionMessage(): $Component;
        primaryActionActive(): boolean;
        canUpload(): boolean;
        canEdit(): boolean;
        canRecreate(): boolean;
        isHardcore(): boolean;
        /**
         * Returns the file name.
         */
        getLevelId(): string;
        isCompatible(): boolean;
        static PLAY_WORLD: $Component;
        constructor(settings: $LevelSettings, levelVersion: $LevelVersion, levelId: string, requiresManualConversion: boolean, locked: boolean, experimental: boolean, icon: $Path_);
        get disabled(): boolean;
        get experimental(): boolean;
        get gameMode(): $GameType;
        get settings(): $LevelSettings;
        get levelName(): string;
        get info(): $Component;
        get locked(): boolean;
        get icon(): $Path;
        get lastPlayed(): number;
        get worldVersionName(): $MutableComponent;
        get downgrade(): boolean;
        get hardcore(): boolean;
        get levelId(): string;
        get compatible(): boolean;
    }
    export class $FileNameDateFormatter {
        static create(): $DateTimeFormatter;
        constructor();
    }
    export class $LevelResource {
        getId(): string;
        static PLAYER_ADVANCEMENTS_DIR: $LevelResource;
        static PLAYER_OLD_DATA_DIR: $LevelResource;
        static GENERATED_DIR: $LevelResource;
        static LEVEL_DATA_FILE: $LevelResource;
        static MAP_RESOURCE_FILE: $LevelResource;
        static ROOT: $LevelResource;
        static ICON_FILE: $LevelResource;
        static LOCK_FILE: $LevelResource;
        static OLD_LEVEL_DATA_FILE: $LevelResource;
        static PLAYER_STATS_DIR: $LevelResource;
        static PLAYER_DATA_DIR: $LevelResource;
        static DATAPACK_DIR: $LevelResource;
        constructor(id: string);
        get id(): string;
    }
    /**
     * @deprecated
     */
    export class $PrimaryLevelData$SpecialWorldProperty extends $Enum<$PrimaryLevelData$SpecialWorldProperty> {
        static values(): $PrimaryLevelData$SpecialWorldProperty[];
        static valueOf(arg0: string): $PrimaryLevelData$SpecialWorldProperty;
        static FLAT: $PrimaryLevelData$SpecialWorldProperty;
        static NONE: $PrimaryLevelData$SpecialWorldProperty;
        static DEBUG: $PrimaryLevelData$SpecialWorldProperty;
    }
    /**
     * Values that may be interpreted as {@link $PrimaryLevelData$SpecialWorldProperty}.
     */
    export type $PrimaryLevelData$SpecialWorldProperty_ = "none" | "flat" | "debug";
    export class $LevelStorageSource$LevelCandidates extends $Record implements $Iterable<$LevelStorageSource$LevelDirectory> {
        levels(): $List<$LevelStorageSource$LevelDirectory>;
        isEmpty(): boolean;
        iterator(): $Iterator<$LevelStorageSource$LevelDirectory>;
        spliterator(): $Spliterator<$LevelStorageSource$LevelDirectory>;
        forEach(arg0: $Consumer_<$LevelStorageSource$LevelDirectory>): void;
        constructor(levels: $List_<$LevelStorageSource$LevelDirectory_>);
        [Symbol.iterator](): Iterator<$LevelStorageSource$LevelDirectory>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageSource$LevelCandidates}.
     */
    export type $LevelStorageSource$LevelCandidates_ = { levels?: $List_<$LevelStorageSource$LevelDirectory_>,  } | [levels?: $List_<$LevelStorageSource$LevelDirectory_>, ];
}
