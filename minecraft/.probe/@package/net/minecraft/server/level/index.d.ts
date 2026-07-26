import { $Long2ObjectLinkedOpenHashMap, $Long2ObjectOpenHashMap, $LongSet, $Long2ByteMap, $Long2ObjectMap, $Long2LongMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ServerScoreboard, $PlayerAdvancements, $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $VeilPacketManager$PacketSink } from "@package/foundry/veil/api/network";
import { $EntityDimensions, $WalkAnimationState, $HumanoidArm_, $PortalProcessor, $Entity, $Entity$RemovalReason_, $HumanoidArm, $Entity$RemovalReason, $LivingEntity, $Mob, $Pose, $ReputationEventHandler_ } from "@package/net/minecraft/world/entity";
import { $ILevelEventRedirect } from "@package/net/mehvahdjukaar/supplementaries/common/entities/dispenser_minecart";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $PlayerFreezeExtension } from "@package/dev/ryanhcode/sable/mixinterface/player_freezing";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $IServerChunkCacheExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ServerLevelSceneExtension } from "@package/dev/ryanhcode/sable/mixinterface/physics";
import { $BoundingBox, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ServerPlayerAccessor } from "@package/com/railwayteam/railways/mixin/conductor_possession";
import { $BlueprintServerLevel } from "@package/com/teamabnormals/blueprint/common/world/storage/receiver";
import { $OutgoingChatMessage, $RemoteChatSession, $RemoteChatSession_, $Component_, $ChatType$Bound_, $Component } from "@package/net/minecraft/network/chat";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $ServerPlayerRespawnExtension } from "@package/dev/ryanhcode/sable/mixinterface/respawn_point";
import { $LevelChunk, $ImposterProtoChunk, $ChunkGeneratorStructureState, $LightChunkGetter, $ChunkSource, $ChunkGenerator, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $SlotReference, $IQuiverPlayer } from "@package/net/mehvahdjukaar/supplementaries/common/utils";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $DimensionDataStorage, $LevelStorageSource$LevelStorageAccess, $LevelData, $WritableLevelData, $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $BlockDestructionProgressExtension } from "@package/com/simibubi/create/foundation/block/render";
import { $Duration_ } from "@package/java/time";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $ChunkMapAccessor, $ChunkMapAccessor$TrackedEntityAccessor } from "@package/com/railwayteam/railways/neoforge/mixin";
import { $BlockableEventLoop, $ProcessorHandle, $ProcessorMailbox } from "@package/net/minecraft/util/thread";
import { $LevelStem_, $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $ServerStatsCounter, $ServerRecipeBook } from "@package/net/minecraft/stats";
import { $ICapabilityInvalidationListener_ } from "@package/net/neoforged/neoforge/capabilities";
import { $IWorldMapServerLevel } from "@package/xaero/map/core";
import { $PacketAndPayloadAcceptor } from "@package/net/neoforged/neoforge/network/bundle";
import { $ServerStatus_ } from "@package/net/minecraft/network/protocol/status";
import { $ChestMenuData } from "@package/dev/latvian/mods/kubejs/gui/chest";
import { $GameEvent, $GameEvent$Context_ } from "@package/net/minecraft/world/level/gameevent";
import { $ServerLevelAccessor as $ServerLevelAccessor$3 } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID_, $Set_, $ArrayList, $Stack, $List, $List_, $Collection, $Queue, $Comparator, $Set, $UUID } from "@package/java/util";
import { $ChunkMapAccessor as $ChunkMapAccessor$1, $TrackedEntityAccessor } from "@package/net/blay09/mods/balm/mixin";
import { $BlockPos, $BlockPos_, $Holder$Reference, $Holder, $Direction_, $HolderLookup, $RegistryAccess, $Registry, $Holder_, $SectionPos } from "@package/net/minecraft/core";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $BlockApiCacheImpl, $ServerWorldCache } from "@package/net/fabricmc/fabric/impl/lookup/block";
import { $Throwable, $IllegalStateException, $Runnable, $Enum, $Comparable, $Iterable, $Thread, $Record, $AutoCloseable, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $Writer } from "@package/java/io";
import { $CustomSpawner_, $Explosion, $LightLayer_, $ChunkPos, $BlockGetter, $Level$ExplosionInteraction_, $ColorResolver_, $ExplosionDamageCalculator, $Level_, $GameType, $GameType_, $EntityGetter, $ClipContext, $ClipBlockStateContext, $WorldGenLevel, $NaturalSpawner$SpawnState, $LevelHeightAccessor, $Level, $StructureManager } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $LaunchedPlungerEntity } from "@package/dev/simulated_team/simulated/content/entities/launched_plunger";
import { $FluidState, $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ServerWorldExtended } from "@package/net/caffeinemc/mods/lithium/common/world";
import { $WaterOcclusionContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $SynchedEntityData, $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $FoodData } from "@package/net/minecraft/world/food";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $DimensionTransition$PostDimensionTransition_, $PortalForcer, $DimensionTransition, $DimensionTransition_ } from "@package/net/minecraft/world/level/portal";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $WaterOcclusionContainer } from "@package/dev/ryanhcode/sable/sublevel/water_occlusion";
import { $Codec } from "@package/com/mojang/serialization";
import { $Either, $Pair as $Pair$1 } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $ServerPlayerData as $ServerPlayerData$1, $IServerPlayer as $IServerPlayer$2 } from "@package/xaero/common/server/player";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ServerChunkCacheAccessor } from "@package/dev/ryanhcode/sable/mixin/level_accelerator";
import { $RandomSource, $ProgressListener, $StaticCache2D, $Unit, $SortedArraySet } from "@package/net/minecraft/util";
import { $IServerPlayer, $ServerPlayerData } from "@package/xaero/lib/common/player";
import { $ConductorEntity, $ServerPlayerPossessionAccess } from "@package/com/railwayteam/railways/content/conductor";
import { $BossEvent$BossBarColor, $BossEvent$BossBarOverlay_, $InteractionResult, $BossEvent$BossBarOverlay, $InteractionHand_, $Container, $BossEvent, $RandomSequences, $DifficultyInstance, $BossEvent$BossBarColor_, $InteractionHand, $Difficulty } from "@package/net/minecraft/world";
import { $ReportedException } from "@package/net/minecraft";
import { $SoundSource_, $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $AbstractContainerMenu, $InventoryMenu, $PlayerEnderChestContainer } from "@package/net/minecraft/world/inventory";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $PersistentEntitySectionManager, $EntityInLevelCallback, $EntityTypeTest, $LevelCallback, $EntityTickList, $ChunkStatusUpdateListener_ } from "@package/net/minecraft/world/level/entity";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeJSGUI } from "@package/dev/latvian/mods/kubejs/gui";
import { $Biome$Precipitation, $Biome, $BiomeManager, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $TextFilter, $ServerPlayerConnection, $ServerGamePacketListenerImpl } from "@package/net/minecraft/server/network";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Inventory, $ChatVisiblity, $Player, $ChatVisiblity_ } from "@package/net/minecraft/world/entity/player";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $Pair } from "@package/it/unimi/dsi/fastutil";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ChunkScanAccess, $ChunkStorage } from "@package/net/minecraft/world/level/chunk/storage";
import { $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $InventoryKJS, $ServerLevelKJS, $ServerPlayerKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $ServerChunkLoadingManagerAccessor, $EntityTrackerAccessor } from "@package/net/fabricmc/fabric/mixin/networking/accessor";
import { $EndDragonFight } from "@package/net/minecraft/world/level/dimension/end";
import { $DynamicGraphMinFixedPoint, $LightEngine, $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $ChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Supplier_, $Function, $IntConsumer_, $BooleanSupplier_, $Supplier, $Consumer_, $Predicate_, $IntSupplier_, $IntConsumer, $IntSupplier, $Function_ } from "@package/java/util/function";
import { $ServerWorldCapabilities } from "@package/xaero/map/capabilities";
import { $PathTypeCache } from "@package/net/minecraft/world/level/pathfinder";
import { $Object2DoubleMap, $ObjectSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $Path_ } from "@package/java/nio/file";
import { $ChunkStep_, $ChunkStatus, $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $Heightmap$Types_, $RandomState } from "@package/net/minecraft/world/level/levelgen";
import { $LevelTickAccess, $LevelTicks, $TickPriority_ } from "@package/net/minecraft/world/ticks";
import { $ChunkLevelTypeEventTracker } from "@package/net/fabricmc/fabric/impl/event/lifecycle";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $PoiManager } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $Logger } from "@package/org/slf4j";
import { $EntityAnchorArgument$Anchor_ } from "@package/net/minecraft/commands/arguments";
import { $ServerboundPlayerActionPacket$Action_, $CommonPlayerSpawnInfo, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $Raid, $Raids } from "@package/net/minecraft/world/entity/raid";
import { $ServerPlayerData as $ServerPlayerData$2, $IServerPlayer as $IServerPlayer$1 } from "@package/xaero/map/server/player";
import { $ServerLevelAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/minimal_nonvanilla/spawning";
import { $Stream } from "@package/java/util/stream";
import { $ServerLevelAccessor as $ServerLevelAccessor$2 } from "@package/net/caffeinemc/mods/lithium/mixin/util/entity_movement_tracking";
import { $ServerLevelAccessor as $ServerLevelAccessor$1 } from "@package/net/caffeinemc/mods/lithium/mixin/util/accessors";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as progress from "@package/net/minecraft/server/level/progress";

declare module "@package/net/minecraft/server/level" {
    export class $ChunkTrackingView$Positioned extends $Record implements $ChunkTrackingView {
        viewDistance(): number;
        /**
         * Determines if another `ChunkTrackingView`'s bounds intersects with its own
         */
        squareIntersects(other: $ChunkTrackingView$Positioned_): boolean;
        minX(): number;
        contains(x: number, z: number, includeOuterChunksAdjacentToViewBorder: boolean): boolean;
        forEach(action: $Consumer_<$ChunkPos>): void;
        center(): $ChunkPos;
        maxX(): number;
        minZ(): number;
        maxZ(): number;
        isInViewDistance(x: number, z: number): boolean;
        contains(chunkPos: $ChunkPos): boolean;
        contains(x: number, z: number): boolean;
        constructor(arg0: $ChunkPos, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ChunkTrackingView$Positioned}.
     */
    export type $ChunkTrackingView$Positioned_ = { viewDistance?: number, center?: $ChunkPos,  } | [viewDistance?: number, center?: $ChunkPos, ];
    export class $PlayerRespawnLogic {
        static getOverworldRespawnPos(level: $ServerLevel, x: number, z: number): $BlockPos;
        static getSpawnPosInChunk(level: $ServerLevel, chunkPos: $ChunkPos): $BlockPos;
        constructor();
    }
    export class $Ticket<T> implements $Comparable<$Ticket<never>> {
        getTicketLevel(): number;
        setCreatedTick(timestamp: number): void;
        isForceTicks(): boolean;
        timedOut(currentTime: number): boolean;
        compareTo(other: $Ticket<never>): number;
        getType(): $TicketType<$Ticket<never>>;
        createdTick: number;
        constructor(type: $TicketType<$Ticket<never>>, ticketLevel: number, key: $Ticket<never>);
        constructor(arg0: $TicketType<$Ticket<never>>, arg1: number, arg2: $Ticket<never>, arg3: boolean);
        get ticketLevel(): number;
        get forceTicks(): boolean;
        get type(): $TicketType<$Ticket<never>>;
    }
    export class $TicketType<T> {
        getComparator(): $Comparator<T>;
        static create<T>(name: string, comparator: $Comparator<T>, lifespan: number): $TicketType<T>;
        static create<T>(name: string, comparator: $Comparator<T>): $TicketType<T>;
        timeout(): number;
        static PLAYER: $TicketType<$ChunkPos>;
        static POST_TELEPORT: $TicketType<number>;
        static DRAGON: $TicketType<$Unit>;
        static START: $TicketType<$Unit>;
        static FORCED: $TicketType<$ChunkPos>;
        static UNKNOWN: $TicketType<$ChunkPos>;
        static PORTAL: $TicketType<$BlockPos>;
        constructor(name: string, comparator: $Comparator<T>, timeout: number);
        get comparator(): $Comparator<T>;
    }
    export class $ChunkHolder$PlayerProvider {
    }
    export interface $ChunkHolder$PlayerProvider {
        /**
         * Returns the players tracking the given chunk.
         */
        getPlayers(pos: $ChunkPos, boundaryOnly: boolean): $List<$ServerPlayer>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkHolder$PlayerProvider}.
     */
    export type $ChunkHolder$PlayerProvider_ = ((arg0: $ChunkPos, arg1: boolean) => $List_<$ServerPlayer>);
    export class $ServerBossEvent extends $BossEvent {
        removeAllPlayers(): void;
        /**
         * The returned collection is unmodifiable
         */
        getPlayers(): $Collection<$ServerPlayer>;
        /**
         * Makes the boss visible to the given player.
         */
        addPlayer(player: $ServerPlayer): void;
        /**
         * Makes the boss visible to the given player.
         */
        removePlayer(player: $ServerPlayer): void;
        setVisible(visible: boolean): void;
        isVisible(): boolean;
        darkenScreen: boolean;
        playBossMusic: boolean;
        color: $BossEvent$BossBarColor;
        overlay: $BossEvent$BossBarOverlay;
        name: $Component;
        progress: number;
        createWorldFog: boolean;
        constructor(name: $Component_, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_);
        get players(): $Collection<$ServerPlayer>;
    }
    export class $ChunkHolder$LevelChangeListener {
    }
    export interface $ChunkHolder$LevelChangeListener {
        onLevelChange(chunkPos: $ChunkPos, queueLevelGetter: $IntSupplier_, ticketLevel: number, queueLevelSetter: $IntConsumer_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkHolder$LevelChangeListener}.
     */
    export type $ChunkHolder$LevelChangeListener_ = ((arg0: $ChunkPos, arg1: $IntSupplier, arg2: number, arg3: $IntConsumer) => void);
    export class $ChunkHolder extends $GenerationChunkHolder implements $ChunkLevelTypeEventTracker {
        blockChanged(pos: $BlockPos_): void;
        getTickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        getTickingChunk(): $LevelChunk;
        getFullChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        sectionLightChanged(type: $LightLayer_, sectionY: number): void;
        fabric_getCurrentEventLevelType(): $FullChunkStatus;
        fabric_setCurrentEventLevelType(arg0: $FullChunkStatus_): void;
        updateFutures(chunkMap: $ChunkMap, executor: $Executor_): void;
        setTicketLevel(queueLevel: number): void;
        wasAccessibleSinceLastSave(): boolean;
        refreshAccessibility(): void;
        getSaveSyncFuture(): $CompletableFuture<never>;
        isReadyForSaving(): boolean;
        getChunkToSend(): $LevelChunk;
        getEntityTickingChunkFuture(): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        addSendDependency(dependency: $CompletableFuture<never>): void;
        getSendSyncFuture(): $CompletableFuture<never>;
        broadcastChanges(chunk: $LevelChunk): void;
        currentlyLoading: $LevelChunk;
        pos: $ChunkPos;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        entityTickingChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        static UNLOADED_LEVEL_CHUNK: $ChunkResult<$LevelChunk>;
        tickingChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        fullChunkFuture: $CompletableFuture<$ChunkResult<$LevelChunk>>;
        constructor(pos: $ChunkPos, ticketLevel: number, levelHeightAccessor: $LevelHeightAccessor, lightEngine: $LevelLightEngine, onLevelChange: $ChunkHolder$LevelChangeListener_, playerProvider: $ChunkHolder$PlayerProvider_);
        get tickingChunk(): $LevelChunk;
        set ticketLevel(value: number);
        get saveSyncFuture(): $CompletableFuture<never>;
        get readyForSaving(): boolean;
        get chunkToSend(): $LevelChunk;
        get sendSyncFuture(): $CompletableFuture<never>;
    }
    export class $WorldGenRegion implements $WorldGenLevel {
        ensureCanWrite(pos: $BlockPos_): boolean;
        setCurrentlyGenerating(currentlyGenerating: $Supplier_<string> | null): void;
        localvar$bkn000$visualworkbench$setBlock(blockState: $BlockState_): $BlockState;
        isOldChunkAround(pos: $ChunkPos, radius: number): boolean;
        /**
         * Gets all entities within the specified AABB excluding the one passed into it.
         */
        getEntities(entity: $Entity | null, boundingBox: $AABB_, predicate: $Predicate_<$Entity> | null): $List<$Entity>;
        getEntities<T extends $Entity>(entityTypeTest: $EntityTypeTest<$Entity, T>, bounds: $AABB_, predicate: $Predicate_<T>): $List<T>;
        getHeight(): number;
        getHeight(heightmapType: $Heightmap$Types_, x: number, z: number): number;
        /**
         * @deprecated
         */
        getLevel(): $ServerLevel;
        /**
         * Gets the random world seed.
         */
        getSeed(): number;
        setBlock(pos: $BlockPos_, state: $BlockState_, flags: number, recursionLeft: number): boolean;
        /**
         * Returns the world's WorldInfo object
         */
        getLevelData(): $LevelData;
        getBlockState(pos: $BlockPos_): $BlockState;
        enabledFeatures(): $FeatureFlagSet;
        getWorldBorder(): $WorldBorder;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        registryAccess(): $RegistryAccess;
        getFluidState(pos: $BlockPos_): $FluidState;
        isClientSide(): boolean;
        gameEvent(gameEvent: $Holder_<$GameEvent>, pos: $Vec3_, context: $GameEvent$Context_): void;
        getRandom(): $RandomSource;
        addParticle(particleData: $ParticleOptions_, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): void;
        /**
         * Plays a sound. On the server, the sound is broadcast to all nearby *except* the given player. On the client, the sound only plays if the given player is the client player. Thus, this method is intended to be called from code running on both sides. The client plays it locally and the server plays it for everyone else.
         */
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent_, category: $SoundSource_, volume: number, pitch: number): void;
        addFreshEntity(entity: $Entity): boolean;
        getServer(): $MinecraftServer;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ChunkSource;
        getMinBuildHeight(): number;
        levelEvent(player: $Player | null, type: number, pos: $BlockPos_, data: number): void;
        getCenter(): $ChunkPos;
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $ChunkAccess;
        getChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        dimensionType(): $DimensionType;
        removeBlock(pos: $BlockPos_, isMoving: boolean): boolean;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null, recursionLeft: number): boolean;
        hasChunk(chunkX: number, chunkZ: number): boolean;
        getSeaLevel(): number;
        getLightEngine(): $LevelLightEngine;
        getCurrentDifficultyAt(pos: $BlockPos_): $DifficultyInstance;
        getSkyDarken(): number;
        isStateAtPosition(pos: $BlockPos_, predicate: $Predicate_<$BlockState>): boolean;
        isFluidAtPosition(pos: $BlockPos_, predicate: $Predicate_<$FluidState>): boolean;
        getBiomeManager(): $BiomeManager;
        /**
         * Gets the random world seed.
         */
        nextSubTickCount(): number;
        getBlockTicks(): $LevelTickAccess<$Block>;
        getFluidTicks(): $LevelTickAccess<$Fluid>;
        getShade(direction: $Direction_, shade: boolean): number;
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: $Predicate_<$Entity>): $Player;
        getUncachedNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        addFreshEntityWithPassengers(entity: $Entity): void;
        gameEvent(gameEvent: $ResourceKey_<$GameEvent>, pos: $BlockPos_, context: $GameEvent$Context_): void;
        gameEvent(entity: $Entity | null, gameEvent: $Holder_<$GameEvent>, pos: $Vec3_): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>, pos: $BlockPos_, context: $GameEvent$Context_): void;
        gameEvent(entity: $Entity | null, gameEvent: $Holder_<$GameEvent>, pos: $BlockPos_): void;
        getDifficulty(): $Difficulty;
        playSound(player: $Player | null, pos: $BlockPos_, sound: $SoundEvent_, source: $SoundSource_): void;
        levelEvent(type: number, pos: $BlockPos_, data: number): void;
        blockUpdated(pos: $BlockPos_, block: $Block_): void;
        neighborShapeChanged(direction: $Direction_, queried: $BlockState_, pos: $BlockPos_, offsetPos: $BlockPos_, flags: number, recursionLevel: number): void;
        /**
         * Gets the random world seed.
         */
        dayTime(): number;
        scheduleTick(pos: $BlockPos_, fluid: $Fluid_, delay: number, priority: $TickPriority_): void;
        scheduleTick(pos: $BlockPos_, block: $Block_, delay: number, priority: $TickPriority_): void;
        scheduleTick(pos: $BlockPos_, block: $Block_, delay: number): void;
        scheduleTick(pos: $BlockPos_, fluid: $Fluid_, delay: number): void;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        getHeightmapPos(heightmapType: $Heightmap$Types_, pos: $BlockPos_): $BlockPos;
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntityCollisions(entity: $Entity | null, area: $AABB_): $List<$VoxelShape>;
        isUnobstructed(entity: $Entity | null, shape: $VoxelShape): boolean;
        getTimeOfDay(partialTick: number): number;
        getMoonBrightness(): number;
        getMoonPhase(): number;
        /**
         * Will get all entities within the specified AABB excluding the one passed into it. Args: entityToExclude, aabb
         */
        getEntities(entity: $Entity | null, area: $AABB_): $List<$Entity>;
        getEntitiesOfClass<T extends $Entity>(entityClass: $Class<T>, area: $AABB_): $List<T>;
        getEntitiesOfClass<T extends $Entity>(clazz: $Class<T>, area: $AABB_, filter: $Predicate_<T>): $List<T>;
        getNearestPlayer(predicate: $TargetingConditions, target: $LivingEntity, x: number, arg3: number, y: number): $Player;
        getNearestPlayer(predicate: $TargetingConditions, x: number, arg2: number, y: number): $Player;
        getNearestPlayer(predicate: $TargetingConditions, target: $LivingEntity): $Player;
        getNearestPlayer(x: number, arg1: number, y: number, arg3: number, z: boolean): $Player;
        getNearestPlayer(entity: $Entity, distance: number): $Player;
        hasNearbyAlivePlayer(x: number, arg1: number, y: number, arg3: number): boolean;
        getNearestEntity<T extends $LivingEntity>(entities: $List_<T>, predicate: $TargetingConditions, target: $LivingEntity | null, x: number, arg4: number, y: number): T;
        getNearestEntity<T extends $LivingEntity>(entityClazz: $Class<T>, conditions: $TargetingConditions, target: $LivingEntity | null, x: number, arg4: number, y: number, arg6: $AABB_): T;
        getNearbyPlayers(predicate: $TargetingConditions, target: $LivingEntity, area: $AABB_): $List<$Player>;
        getNearbyEntities<T extends $LivingEntity>(entityClazz: $Class<T>, entityPredicate: $TargetingConditions, entity: $LivingEntity, area: $AABB_): $List<T>;
        getPlayerByUUID(uniqueId: $UUID_): $Player;
        getBiome(pos: $BlockPos_): $Holder<$Biome>;
        /**
         * @deprecated
         */
        hasChunkAt(chunkX: number, chunkZ: number): boolean;
        /**
         * @deprecated
         */
        hasChunkAt(pos: $BlockPos_): boolean;
        containsAnyLiquid(collisionBox: $AABB_): boolean;
        getBlockStatesIfLoaded(aabb: $AABB_): $Stream<$BlockState>;
        /**
         * @deprecated
         */
        hasChunksAt(fromX: number, fromZ: number, toX: number, toZ: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(fromX: number, fromY: number, fromZ: number, toX: number, toY: number, toZ: number): boolean;
        /**
         * @deprecated
         */
        hasChunksAt(from: $BlockPos_, to: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(pos: $BlockPos_): number;
        getChunk(pos: $BlockPos_): $ChunkAccess;
        getChunk(chunkX: number, chunkZ: number, chunkStatus: $ChunkStatus_): $ChunkAccess;
        getChunkForCollisions(chunkX: number, chunkZ: number): $BlockGetter;
        holderLookup<T>(registryKey: $ResourceKey_<$Registry<T>>): $HolderLookup<T>;
        lithium$getLoadedChunk(chunkX: number, chunkZ: number): $ChunkAccess;
        getBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        isEmptyBlock(pos: $BlockPos_): boolean;
        canSeeSkyFromBelowWater(pos: $BlockPos_): boolean;
        getMaxLocalRawBrightness(pos: $BlockPos_): number;
        getMaxLocalRawBrightness(pos: $BlockPos_, amount: number): number;
        isWaterAt(pos: $BlockPos_): boolean;
        getPathfindingCostFromLightLevels(pos: $BlockPos_): number;
        self(): $EntityGetter;
        getMcEntities(): $Iterable<$Entity>;
        getMcPlayers(): $List<$Player>;
        getPlayers(): $EntityArrayList;
        getEntitiesWithin(aabb: $AABB_): $EntityArrayList;
        getBrightness(lightType: $LightLayer_, blockPos: $BlockPos_): number;
        canSeeSky(pos: $BlockPos_): boolean;
        getRawBrightness(pos: $BlockPos_, amount: number): number;
        noCollision(entity: $Entity): boolean;
        noCollision(entity: $Entity | null, boundingBox: $AABB_): boolean;
        noCollision(collisionBox: $AABB_): boolean;
        noBlockCollision(entity: $Entity | null, boundingBox: $AABB_): boolean;
        findSupportingBlock(entity: $Entity, box: $AABB_): ($BlockPos) | undefined;
        getBlockCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        findFreePosition(entity: $Entity | null, shape: $VoxelShape, pos: $Vec3_, x: number, arg4: number, y: number): ($Vec3) | undefined;
        isUnobstructed(entity: $Entity): boolean;
        isUnobstructed(state: $BlockState_, pos: $BlockPos_, context: $CollisionContext): boolean;
        getCollisions(entity: $Entity | null, collisionBox: $AABB_): $Iterable<$VoxelShape>;
        collidesWithSuffocatingBlock(entity: $Entity | null, boundingBox: $AABB_): boolean;
        /**
         * Returns the direct redstone signal emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getSignal(pos: $BlockPos_, direction: $Direction_): number;
        /**
         * Returns the direct redstone signal emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getDirectSignal(pos: $BlockPos_, direction: $Direction_): number;
        getDirectSignalTo(pos: $BlockPos_): number;
        /**
         * Returns the control signal emitted from the given position in the given direction.
         * If `diodesOnly` is `true`, this method returns the direct signal emitted if
         * and only if this position is occupied by a diode (i.e. a repeater or comparator).
         * Otherwise, if this position is occupied by a
         * redstone block,
         * this method will return the redstone signal emitted by it. If not, this method will
         * return the direct signal emitted from this position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getControlInputSignal(pos: $BlockPos_, direction: $Direction_, diodesOnly: boolean): number;
        /**
         * Returns whether a redstone signal is emitted from the given position in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        hasSignal(pos: $BlockPos_, direction: $Direction_): boolean;
        hasNeighborSignal(pos: $BlockPos_): boolean;
        getBestNeighborSignal(pos: $BlockPos_): number;
        /**
         * Shortcut method to get an optional holder from a ResourceKey.
         * see `IHolderLookupProviderExtension`
         */
        holder<T>(key: $ResourceKey_<T>): ($Holder$Reference<T>) | undefined;
        /**
         * Shortcut method to get a holder from a ResourceKey.
         * see `IHolderLookupProviderExtension`
         */
        holderOrThrow<T>(key: $ResourceKey_<T>): $Holder<T>;
        isAreaLoaded(center: $BlockPos_, range: number): boolean;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        /**
         * Sets a block state into this world.Flags are as follows:
         * 1 will cause a block update.
         * 2 will send the change to clients.
         * 4 will prevent the block from being re-rendered.
         * 8 will force any re-renders to run on the main thread instead
         * 16 will prevent neighbor reactions (e.g. fences connecting, observers pulsing).
         * 32 will prevent neighbor reactions from spawning drops.
         * 64 will signify the block is being moved.
         * Flags can be OR-ed
         */
        setBlock(pos: $BlockPos_, newState: $BlockState_, flags: number): boolean;
        destroyBlock(pos: $BlockPos_, isMoving: boolean): boolean;
        destroyBlock(pos: $BlockPos_, dropBlock: boolean, entity: $Entity | null): boolean;
        getEntityByUUID(id: $UUID_): $Entity;
        getEntityByNetworkID(id: number): $Entity;
        getEntities(): $EntityArrayList;
        /**
         * Checks if there's block between `from` and `to` of context.
         * This uses the collision shape of provided block.
         */
        clip(context: $ClipContext): $BlockHitResult;
        getLightEmission(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(pos: $BlockPos_): number;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        getMaxLightLevel(): number;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        getBlockStates(aabb: $AABB_): $Stream<$BlockState>;
        /**
         * Computes the shade for a given normal.
         * Alternate version of the vanilla method taking in a `Direction`.
         */
        getShade(normalX: number, normalY: number, normalZ: number, shade: boolean): number;
        getMaxBuildHeight(): number;
        getSectionsCount(): number;
        getMaxSection(): number;
        getMinSection(): number;
        isOutsideBuildHeight(pos: $BlockPos_): boolean;
        isOutsideBuildHeight(y: number): boolean;
        getSectionIndex(sectionIndex: number): number;
        getSectionIndexFromSectionY(sectionIndex: number): number;
        getSectionYFromSectionIndex(sectionIndex: number): number;
        /**
         * Retrieves model data for a block at the given position.
         */
        getModelData(pos: $BlockPos_): $ModelData;
        /**
         * Get the `AuxiliaryLightManager` of the chunk at the given `ChunkPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $ChunkPos): $AuxiliaryLightManager;
        /**
         * Get the `AuxiliaryLightManager` of the chunk containing the given `BlockPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $BlockPos_): $AuxiliaryLightManager;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        getBiomeFabric(pos: $BlockPos_): $Holder<$Biome>;
        constructor(level: $ServerLevel, cache: $StaticCache2D<$GenerationChunkHolder>, generatingStep: $ChunkStep_, center: $ChunkAccess);
        set currentlyGenerating(value: $Supplier_<string> | null);
        get level(): $ServerLevel;
        get seed(): number;
        get levelData(): $LevelData;
        get worldBorder(): $WorldBorder;
        get clientSide(): boolean;
        get random(): $RandomSource;
        get server(): $MinecraftServer;
        get chunkSource(): $ChunkSource;
        get minBuildHeight(): number;
        get center(): $ChunkPos;
        get seaLevel(): number;
        get lightEngine(): $LevelLightEngine;
        get skyDarken(): number;
        get biomeManager(): $BiomeManager;
        get blockTicks(): $LevelTickAccess<$Block>;
        get fluidTicks(): $LevelTickAccess<$Fluid>;
        get difficulty(): $Difficulty;
        get moonBrightness(): number;
        get moonPhase(): number;
        get mcEntities(): $Iterable<$Entity>;
        get mcPlayers(): $List<$Player>;
        get players(): $EntityArrayList;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $ChunkTrackingView {
        static isInViewDistance(centerX: number, centerZ: number, viewDistance: number, x: number, z: number): boolean;
        /**
         * Check if a chunk `(x,z)` is within a `viewDistance` which is centered on `(centerX, centerZ)`
         */
        static isWithinDistance(centerX: number, centerZ: number, viewDistance: number, x: number, z: number, includeOuterChunksAdjacentToViewBorder: boolean): boolean;
        /**
         * Calculates the chunks that the player needs to drop in the `oldChunkTrackingView` and the chunks that need to be sent for the `newChunkTrackingView`. The chunks that overlap in both views can be kept.
         */
        static difference(oldChunkTrackingView: $ChunkTrackingView, newChunkTrackingView: $ChunkTrackingView, chunkMarker: $Consumer_<$ChunkPos>, chunkDropper: $Consumer_<$ChunkPos>): void;
        static of(center: $ChunkPos, viewDistance: number): $ChunkTrackingView;
        static EMPTY: $ChunkTrackingView;
    }
    export interface $ChunkTrackingView {
        isInViewDistance(x: number, z: number): boolean;
        contains(chunkPos: $ChunkPos): boolean;
        contains(x: number, z: number): boolean;
        contains(x: number, z: number, includeOuterChunksAdjacentToViewBorder: boolean): boolean;
        forEach(action: $Consumer_<$ChunkPos>): void;
    }
    export class $GenerationChunkHolder {
        getPersistedStatus(): $ChunkStatus;
        getChunkIfPresent(status: $ChunkStatus_): $ChunkAccess;
        scheduleChunkGenerationTask(targetStatus: $ChunkStatus_, chunkMap: $ChunkMap): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        getTicketLevel(): number;
        getChunkIfPresentUnchecked(status: $ChunkStatus_): $ChunkAccess;
        removeTask(task: $ChunkGenerationTask): void;
        replaceProtoChunk(chunk: $ImposterProtoChunk): void;
        rescheduleChunkTask(chunkMap: $ChunkMap, targetStatus: $ChunkStatus_ | null): void;
        updateHighestAllowedStatus(chunkMap: $ChunkMap): void;
        getLatestStatus(): $ChunkStatus;
        getLatestChunk(): $ChunkAccess;
        getGenerationRefCount(): number;
        increaseGenerationRefCount(): void;
        decreaseGenerationRefCount(): void;
        applyStep(step: $ChunkStep_, chunkMap: $GeneratingChunkMap, cache: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        getAllFutures(): $List<$Pair$1<$ChunkStatus, $CompletableFuture<$ChunkResult<$ChunkAccess>>>>;
        getQueueLevel(): number;
        getPos(): $ChunkPos;
        getFullStatus(): $FullChunkStatus;
        currentlyLoading: $LevelChunk;
        pos: $ChunkPos;
        static UNLOADED_CHUNK: $ChunkResult<$ChunkAccess>;
        static UNLOADED_CHUNK_FUTURE: $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        constructor(pos: $ChunkPos);
        get persistedStatus(): $ChunkStatus;
        get ticketLevel(): number;
        get latestStatus(): $ChunkStatus;
        get latestChunk(): $ChunkAccess;
        get generationRefCount(): number;
        get allFutures(): $List<$Pair$1<$ChunkStatus, $CompletableFuture<$ChunkResult<$ChunkAccess>>>>;
        get queueLevel(): number;
        get fullStatus(): $FullChunkStatus;
    }
    export class $ChunkResult<T> {
        static of<T>(value: T): $ChunkResult<T>;
        static orElse<R>(chunkResult: $ChunkResult<R>, orElse: R | null): R;
        static error<T>(error: string): $ChunkResult<T>;
        static error<T>(errorSupplier: $Supplier_<string>): $ChunkResult<T>;
    }
    export interface $ChunkResult<T> {
        map<R>(mappingFunction: $Function_<T, R>): $ChunkResult<R>;
        orElse(value: T | null): T;
        orElseThrow<E extends $Throwable>(exceptionSupplier: $Supplier_<E>): T;
        isSuccess(): boolean;
        ifSuccess(action: $Consumer_<T>): $ChunkResult<T>;
        getError(): string;
        get success(): boolean;
    }
    export class $ServerChunkCache$ChunkAndHolder extends $Record {
        chunk(): $LevelChunk;
        holder(): $ChunkHolder;
        constructor(chunk: $LevelChunk, holder: $ChunkHolder);
    }
    /**
     * Values that may be interpreted as {@link $ServerChunkCache$ChunkAndHolder}.
     */
    export type $ServerChunkCache$ChunkAndHolder_ = { chunk?: $LevelChunk, holder?: $ChunkHolder,  } | [chunk?: $LevelChunk, holder?: $ChunkHolder, ];
    export class $ServerChunkCache extends $ChunkSource implements $IServerChunkCacheExtension, $ServerChunkCacheAccessor {
        getGeneratorState(): $ChunkGeneratorStructureState;
        getDataStorage(): $DimensionDataStorage;
        chunkScanner(): $ChunkScanAccess;
        randomState(): $RandomState;
        getPoiManager(): $PoiManager;
        addEntity(entity: $Entity): void;
        blockChanged(pos: $BlockPos_): void;
        removeRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        getLastSpawnState(): $NaturalSpawner$SpawnState;
        isPositionTicking(chunkPos: number): boolean;
        removeEntity(entity: $Entity): void;
        handler$dch000$immersive_melodies$immersiveMelodies$injectServerChunkManagerInit(arg0: $ServerLevel, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $DataFixer, arg3: $StructureTemplateManager, arg4: $Executor_, arg5: $ChunkGenerator, arg6: number, arg7: number, arg8: boolean, arg9: $ChunkProgressListener, arg10: $ChunkStatusUpdateListener_, arg11: $Supplier_<any>, arg12: $CallbackInfo): void;
        handler$gef000$sable$init(arg0: $ServerLevel, arg1: $LevelStorageSource$LevelStorageAccess, arg2: $DataFixer, arg3: $StructureTemplateManager, arg4: $Executor_, arg5: $ChunkGenerator, arg6: number, arg7: number, arg8: boolean, arg9: $ChunkProgressListener, arg10: $ChunkStatusUpdateListener_, arg11: $Supplier_<any>, arg12: $CallbackInfo): void;
        getChunkFuture(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $CompletableFuture<$ChunkResult<$ChunkAccess>>;
        runDistanceManagerUpdates(): boolean;
        setViewDistance(simulationDistance: number): void;
        setSimulationDistance(simulationDistance: number): void;
        getChunkDebugData(chunkPos: $ChunkPos): string;
        pollTask(): boolean;
        move(player: $ServerPlayer): void;
        getLevel(): $Level;
        getGenerator(): $ChunkGenerator;
        save(flush: boolean): void;
        getTickingGenerated(): number;
        removeTicketsOnClosing(): void;
        getPendingTasksCount(): number;
        broadcastAndSend(entity: $Entity, packet: $Packet<never>): void;
        broadcast(entity: $Entity, packet: $Packet<never>): void;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        addRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        getLightEngine(): $ThreadedLevelLightEngine;
        self(): $ServerChunkCache;
        /**
         * Sends a payload to all players watching the given entity.
         * 
         * If the entity is a player, the payload will not be sent to that player.
         */
        broadcastAndSend(entity: $Entity, payload: $CustomPacketPayload_): void;
        /**
         * Sends a payload to all players watching the given entity.
         * 
         * If the entity is a player, the payload will not be sent to that player.
         */
        broadcast(entity: $Entity, payload: $CustomPacketPayload_): void;
        invokeGetVisibleChunkIfPresent(chunkPos: number): $ChunkHolder;
        mainThread: $Thread;
        level: $ServerLevel;
        lightEngine: $ThreadedLevelLightEngine;
        chunkMap: $ChunkMap;
        constructor(level: $ServerLevel, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer, structureManager: $StructureTemplateManager, dispatcher: $Executor_, generator: $ChunkGenerator, viewDistance: number, simulationDistance: number, sync: boolean, progressListener: $ChunkProgressListener, chunkStatusListener: $ChunkStatusUpdateListener_, overworldDataStorage: $Supplier_<$DimensionDataStorage>);
        get generatorState(): $ChunkGeneratorStructureState;
        get dataStorage(): $DimensionDataStorage;
        get poiManager(): $PoiManager;
        get lastSpawnState(): $NaturalSpawner$SpawnState;
        set viewDistance(value: number);
        set simulationDistance(value: number);
        get generator(): $ChunkGenerator;
        get tickingGenerated(): number;
        get pendingTasksCount(): number;
    }
    export class $ChunkResult$Success<T> extends $Record implements $ChunkResult<T> {
        value(): T;
        map<R>(arg0: $Function_<T, R>): $ChunkResult<R>;
        orElse(arg0: T | null): T;
        orElseThrow<E extends $Throwable>(arg0: $Supplier_<E>): T;
        isSuccess(): boolean;
        ifSuccess(arg0: $Consumer_<T>): $ChunkResult<T>;
        getError(): string;
        constructor(arg0: T);
        get success(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChunkResult$Success}.
     */
    export type $ChunkResult$Success_<T> = { value?: any,  } | [value?: any, ];
    export class $PlayerMap {
        addPlayer(player: $ServerPlayer, skipPlayer: boolean): void;
        removePlayer(player: $ServerPlayer): void;
        getAllPlayers(): $Set<$ServerPlayer>;
        ignoredOrUnknown(player: $ServerPlayer): boolean;
        ignorePlayer(player: $ServerPlayer): void;
        unIgnorePlayer(player: $ServerPlayer): void;
        ignored(player: $ServerPlayer): boolean;
        constructor();
        get allPlayers(): $Set<$ServerPlayer>;
    }
    export class $ChunkLevel {
        static fullStatus(level: number): $FullChunkStatus;
        static byStatus(status: $FullChunkStatus_): number;
        static byStatus(status: $ChunkStatus_): number;
        static isEntityTicking(level: number): boolean;
        static isBlockTicking(level: number): boolean;
        static generationStatus(level: number): $ChunkStatus;
        static getStatusAroundFullChunk(distance: number, chunkStatus: $ChunkStatus_ | null): $ChunkStatus;
        static getStatusAroundFullChunk(level: number): $ChunkStatus;
        static isLoaded(level: number): boolean;
        static RADIUS_AROUND_FULL_CHUNK: number;
        static ENTITY_TICKING_LEVEL: number;
        static MAX_LEVEL: number;
        static BLOCK_TICKING_LEVEL: number;
        constructor();
    }
    export class $ServerEntity {
        getPositionBase(): $Vec3;
        getLastSentXRot(): number;
        getLastSentYRot(): number;
        getLastSentMovement(): $Vec3;
        sendChanges(): void;
        removePairing(player: $ServerPlayer): void;
        addPairing(player: $ServerPlayer): void;
        getLastSentYHeadRot(): number;
        sendPairingData(arg0: $ServerPlayer, arg1: $PacketAndPayloadAcceptor<$ClientGamePacketListener>): void;
        static FORCED_POS_UPDATE_PERIOD: number;
        constructor(level: $ServerLevel, entity: $Entity, updateInterval: number, trackDelta: boolean, broadcast: $Consumer_<$Packet<never>>);
        get positionBase(): $Vec3;
        get lastSentXRot(): number;
        get lastSentYRot(): number;
        get lastSentMovement(): $Vec3;
        get lastSentYHeadRot(): number;
    }
    export class $GeneratingChunkMap {
    }
    export interface $GeneratingChunkMap {
        runGenerationTasks(): void;
        acquireGeneration(chunkPos: number): $GenerationChunkHolder;
        releaseGeneration(chunk: $GenerationChunkHolder): void;
        applyStep(chunk: $GenerationChunkHolder, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkAccess>;
        scheduleGenerationTask(targetStatus: $ChunkStatus_, pos: $ChunkPos): $ChunkGenerationTask;
    }
    export class $ColumnPos extends $Record {
        toChunkPos(): $ChunkPos;
        toLong(): number;
        x(): number;
        z(): number;
        static asLong(x: number, z: number): number;
        static getX(pos: number): number;
        static getZ(pos: number): number;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ColumnPos}.
     */
    export type $ColumnPos_ = { z?: number, x?: number,  } | [z?: number, x?: number, ];
    export class $ChunkTaskPriorityQueue<T> {
        getAcquired(): $LongSet;
        resortChunkTasks(queueLevel: number, chunkPos: $ChunkPos, ticketLevel: number): void;
        submit(task: (T) | undefined, chunkPos: number, arg2: number): void;
        release(chunkPos: number, arg1: boolean): void;
        pop(): $Stream<$Either<T, $Runnable>>;
        hasWork(): boolean;
        static PRIORITY_LEVEL_COUNT: number;
        constructor(name: string, maxTasks: number);
        get acquired(): $LongSet;
    }
    export class $ChunkGenerationTask {
        markForCancellation(): void;
        runUntilWait(): $CompletableFuture<never>;
        static create(chunkMap: $GeneratingChunkMap, targetStatus: $ChunkStatus_, pos: $ChunkPos): $ChunkGenerationTask;
        getCenter(): $GenerationChunkHolder;
        targetStatus: $ChunkStatus;
        get center(): $GenerationChunkHolder;
    }
    export class $ServerChunkCache$MainThreadExecutor extends $BlockableEventLoop<$Runnable> {
        this$0: $ServerChunkCache;
        constructor(level: $ServerChunkCache, arg1: $Level_);
    }
    export class $BlockDestructionProgress implements $Comparable<$BlockDestructionProgress>, $BlockDestructionProgressExtension {
        /**
         * Inserts damage value into this partially destroyed Block. -1 causes client renderer to delete it, otherwise ranges from 1 to 10.
         */
        updateTick(damage: number): void;
        /**
         * Retrieves the 'date' at which the PartiallyDestroyedBlock was created.
         */
        getProgress(): number;
        /**
         * Inserts damage value into this partially destroyed Block. -1 causes client renderer to delete it, otherwise ranges from 1 to 10.
         */
        setProgress(damage: number): void;
        /**
         * Retrieves the 'date' at which the PartiallyDestroyedBlock was created.
         */
        getUpdatedRenderTick(): number;
        create$setExtraPositions(arg0: $Set_<any>): void;
        create$getExtraPositions(): $Set<any>;
        compareTo(other: $BlockDestructionProgress): number;
        /**
         * Retrieves the 'date' at which the PartiallyDestroyedBlock was created.
         */
        getId(): number;
        getPos(): $BlockPos;
        constructor(id: number, pos: $BlockPos_);
        get updatedRenderTick(): number;
        get id(): number;
        get pos(): $BlockPos;
    }
    export class $TickingTracker extends $ChunkTracker {
        addTicket<T>(type: $TicketType<T>, chunkPos: $ChunkPos, ticketLevel: number, key: T): void;
        addTicket(chunkPos: number, arg1: $Ticket<never>): void;
        removeTicket(chunkPos: number, arg1: $Ticket<never>): void;
        removeTicket<T>(type: $TicketType<T>, chunkPos: $ChunkPos, ticketLevel: number, key: T): void;
        replacePlayerTicketsLevel(ticketLevel: number): void;
        getTicketDebugString(chunkPos: number): string;
        getLevel(chunkPos: $ChunkPos): number;
        runAllUpdates(): void;
        levelCount: number;
        chunks: $Long2ByteMap;
        static SOURCE: number;
        static MAX_LEVEL: number;
        constructor();
    }
    export class $ThreadedLevelLightEngine extends $LevelLightEngine implements $AutoCloseable {
        updateChunkStatus(chunkPos: $ChunkPos): void;
        lightChunk(chunk: $ChunkAccess, lightEnabled: boolean): $CompletableFuture<$ChunkAccess>;
        initializeLight(chunk: $ChunkAccess, lightEnabled: boolean): $CompletableFuture<$ChunkAccess>;
        tryScheduleUpdate(): void;
        runUpdate(): void;
        waitForPendingTasks(x: number, z: number): $CompletableFuture<never>;
        close(): void;
        static DEFAULT_BATCH_SIZE: number;
        static LIGHT_SECTION_PADDING: number;
        skyEngine: $LightEngine<never, never>;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEngine: $LightEngine<never, never>;
        constructor(lightChunk: $LightChunkGetter, chunkMap: $ChunkMap, skyLight: boolean, taskMailbox: $ProcessorMailbox<$Runnable_>, sorterMailbox: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable_>>);
    }
    export class $ThreadedLevelLightEngine$TaskType extends $Enum<$ThreadedLevelLightEngine$TaskType> {
    }
    /**
     * Values that may be interpreted as {@link $ThreadedLevelLightEngine$TaskType}.
     */
    export type $ThreadedLevelLightEngine$TaskType_ = "pre_update" | "post_update";
    export class $ChunkTaskPriorityQueueSorter$Release {
        task: $Runnable;
        pos: number;
        clearQueue: boolean;
        constructor(task: $Runnable_, pos: number, arg2: boolean);
    }
    export class $DistanceManager$FixedPlayerDistanceChunkTracker extends $ChunkTracker {
        levelCount: number;
        static SOURCE: number;
    }
    export class $DistanceManager$PlayerTicketTracker extends $DistanceManager$FixedPlayerDistanceChunkTracker {
        levelCount: number;
        static SOURCE: number;
    }
    export class $DemoMode extends $ServerPlayerGameMode {
        static DEMO_DAYS: number;
        static TOTAL_PLAY_TICKS: number;
        isDestroyingBlock: boolean;
        level: $ServerLevel;
        player: $ServerPlayer;
        constructor(player: $ServerPlayer);
    }
    export class $ChunkTracker extends $DynamicGraphMinFixedPoint {
        getLevelFromSource(pos: number): number;
        update(pos: number, arg1: number, level: boolean): void;
        levelCount: number;
        static SOURCE: number;
        constructor(firstQueuedLevel: number, width: number, height: number);
    }
    export class $ChunkResult$Fail<T> extends $Record implements $ChunkResult<T> {
        map<R>(arg0: $Function_<T, R>): $ChunkResult<R>;
        orElse(arg0: T | null): T;
        orElseThrow<E extends $Throwable>(arg0: $Supplier_<E>): T;
        error(): $Supplier<string>;
        isSuccess(): boolean;
        ifSuccess(arg0: $Consumer_<T>): $ChunkResult<T>;
        getError(): string;
        constructor(arg0: $Supplier_<string>);
        get success(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ChunkResult$Fail}.
     */
    export type $ChunkResult$Fail_<T> = { error?: $Supplier_<string>,  } | [error?: $Supplier_<string>, ];
    export class $ChunkTaskPriorityQueueSorter$Message<T> {
        task: $Function<$ProcessorHandle<$Unit>, T>;
        pos: number;
        level: $IntSupplier;
        constructor(task: $Function_<$ProcessorHandle<$Unit>, T>, pos: number, arg2: $IntSupplier_);
    }
    export class $FullChunkStatus extends $Enum<$FullChunkStatus> {
        static values(): $FullChunkStatus[];
        static valueOf(arg0: string): $FullChunkStatus;
        isOrAfter(status: $FullChunkStatus_): boolean;
        static ENTITY_TICKING: $FullChunkStatus;
        static INACCESSIBLE: $FullChunkStatus;
        static FULL: $FullChunkStatus;
        static BLOCK_TICKING: $FullChunkStatus;
    }
    /**
     * Values that may be interpreted as {@link $FullChunkStatus}.
     */
    export type $FullChunkStatus_ = "inaccessible" | "full" | "block_ticking" | "entity_ticking";
    export class $ServerLevel$EntityCallbacks implements $LevelCallback<$Entity> {
        onDestroyed(arg0: $Entity): void;
        onCreated(arg0: $Entity): void;
        onTickingStart(arg0: $Entity): void;
        onTickingEnd(arg0: $Entity): void;
        onTrackingStart(arg0: $Entity): void;
        onTrackingEnd(arg0: $Entity): void;
        onSectionChange(arg0: $Entity): void;
        this$0: $ServerLevel;
        constructor(arg0: $ServerLevel);
    }
    export class $ClientInformation extends $Record {
        textFilteringEnabled(): boolean;
        allowsListing(): boolean;
        viewDistance(): number;
        chatColors(): boolean;
        modelCustomisation(): number;
        mainHand(): $HumanoidArm;
        language(): string;
        write(buffer: $FriendlyByteBuf): void;
        static createDefault(): $ClientInformation;
        chatVisibility(): $ChatVisiblity;
        static MAX_LANGUAGE_LENGTH: number;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: string, arg1: number, arg2: $ChatVisiblity_, arg3: boolean, arg4: number, arg5: $HumanoidArm_, arg6: boolean, arg7: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ClientInformation}.
     */
    export type $ClientInformation_ = { modelCustomisation?: number, viewDistance?: number, language?: string, allowsListing?: boolean, chatVisibility?: $ChatVisiblity_, chatColors?: boolean, mainHand?: $HumanoidArm_, textFilteringEnabled?: boolean,  } | [modelCustomisation?: number, viewDistance?: number, language?: string, allowsListing?: boolean, chatVisibility?: $ChatVisiblity_, chatColors?: boolean, mainHand?: $HumanoidArm_, textFilteringEnabled?: boolean, ];
    export class $ChunkMap extends $ChunkStorage implements $ChunkHolder$PlayerProvider, $GeneratingChunkMap, $ChunkMapAccessor$1, $ChunkMapAccessor, $ServerChunkLoadingManagerAccessor {
        resendBiomesForChunks(chunks: $List_<$ChunkAccess>): void;
        waitForLightBeforeSending(chunkPos: $ChunkPos, range: number): void;
        randomState(): $RandomState;
        getDistanceManager(): $DistanceManager;
        getPoiManager(): $PoiManager;
        /**
         * Returns the players tracking the given chunk.
         */
        getPlayers(pos: $ChunkPos, boundaryOnly: boolean): $List<$ServerPlayer>;
        addEntity(entity: $Entity): void;
        dumpChunks(writer: $Writer): void;
        removeEntity(entity: $Entity): void;
        getVisibleChunkIfPresent(chunkPos: number): $ChunkHolder;
        promoteChunkMap(): boolean;
        runGenerationTasks(): void;
        anyPlayerCloseEnoughForSpawning(chunkPos: $ChunkPos): boolean;
        generatorState(): $ChunkGeneratorStructureState;
        setServerViewDistance(viewDistance: number): void;
        getChunkDebugData(pos: $ChunkPos): string;
        onFullChunkStatusChange(chunkPos: $ChunkPos, fullChunkStatus: $FullChunkStatus_): void;
        getChunkQueueLevel(chunkPos: number): $IntSupplier;
        /**
         * Checks if a chunk is on the edge of the player's view distance.
         */
        isChunkTracked(player: $ServerPlayer, x: number, z: number): boolean;
        getUpdatingChunkIfPresent(chunkPos: number): $ChunkHolder;
        debugFuturesAndCreateReportedException(exception: $IllegalStateException, details: string): $ReportedException;
        prepareEntityTickingChunk(holder: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        /**
         * Sets level and loads/unloads chunk.
         */
        updateChunkScheduling(chunkPos: number, arg1: number, newLevel: $ChunkHolder | null, holder: number): $ChunkHolder;
        saveChunkIfNeeded(holder: $ChunkHolder): boolean;
        scheduleUnload(chunkPos: number, arg1: $ChunkHolder): void;
        acquireGeneration(chunkPos: number): $GenerationChunkHolder;
        releaseGeneration(chunk: $GenerationChunkHolder): void;
        applyStep(chunk: $GenerationChunkHolder, step: $ChunkStep_, cache: $StaticCache2D<$GenerationChunkHolder>): $CompletableFuture<$ChunkAccess>;
        scheduleGenerationTask(targetStatus: $ChunkStatus_, pos: $ChunkPos): $ChunkGenerationTask;
        prepareTickingChunk(holder: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        prepareAccessibleChunk(holder: $ChunkHolder): $CompletableFuture<$ChunkResult<$LevelChunk>>;
        getPlayerViewDistance(player: $ServerPlayer): number;
        getChunkToSend(chunkPos: number): $LevelChunk;
        getPlayersCloseForSpawning(chunkPos: $ChunkPos): $List<$ServerPlayer>;
        updatePlayerStatus(player: $ServerPlayer, track: boolean): void;
        scheduleOnMainThreadMailbox(arg0: $ChunkTaskPriorityQueueSorter$Message<$Runnable_>): void;
        /**
         * Gets an unmodifiable iterable of all loaded chunks in the chunk manager
         */
        getChunks(): $Iterable<$ChunkHolder>;
        move(player: $ServerPlayer): void;
        tick(): void;
        tick(hasMoreTime: $BooleanSupplier_): void;
        size(): number;
        generator(): $ChunkGenerator;
        getTickingGenerated(): number;
        saveAllChunks(flush: boolean): void;
        getStorageName(): string;
        getPlayersWatching(arg0: $Entity): $List<$ServerPlayer>;
        hasWork(): boolean;
        broadcastAndSend(entity: $Entity, packet: $Packet<never>): void;
        broadcast(entity: $Entity, packet: $Packet<never>): void;
        getLightEngine(): $ThreadedLevelLightEngine;
        getEntityMap(): $Int2ObjectMap<$TrackedEntityAccessor>;
        fixerUpper: $DataFixer;
        entityMap: $Int2ObjectMap<$ChunkMap$TrackedEntity>;
        toDrop: $LongSet;
        level: $ServerLevel;
        updatingChunkMap: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        static $assertionsDisabled: boolean;
        static MAX_VIEW_DISTANCE: number;
        static LAST_MONOLYTH_STRUCTURE_DATA_VERSION: number;
        unloadQueue: $Queue<$Runnable>;
        static MIN_VIEW_DISTANCE: number;
        visibleChunkMap: $Long2ObjectLinkedOpenHashMap<$ChunkHolder>;
        modified: boolean;
        static FORCED_TICKET_LEVEL: number;
        chunkSaveCooldowns: $Long2LongMap;
        constructor(level: $ServerLevel, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer, structureManager: $StructureTemplateManager, dispatcher: $Executor_, mainThreadExecutor: $BlockableEventLoop<$Runnable_>, lightChunk: $LightChunkGetter, generator: $ChunkGenerator, progressListener: $ChunkProgressListener, chunkStatusListener: $ChunkStatusUpdateListener_, overworldDataStorage: $Supplier_<$DimensionDataStorage>, viewDistance: number, sync: boolean);
        get distanceManager(): $DistanceManager;
        get poiManager(): $PoiManager;
        set serverViewDistance(value: number);
        get chunks(): $Iterable<$ChunkHolder>;
        get tickingGenerated(): number;
        get storageName(): string;
        get lightEngine(): $ThreadedLevelLightEngine;
    }
    export class $ServerPlayerGameMode {
        destroyAndAck(pos: $BlockPos_, sequence: number, message: string): void;
        handler$eob000$pandalib$onBlockBreakEventPost(pos: $BlockPos_, cir: $CallbackInfoReturnable<any>): void;
        handler$eob000$pandalib$onBlockBreakEventPre(pos: $BlockPos_, cir: $CallbackInfoReturnable<any>): void;
        getGameModeForPlayer(): $GameType;
        getPreviousGameModeForPlayer(): $GameType;
        setGameModeForPlayer(gameModeForPlayer: $GameType_, previousGameModeForPlayer: $GameType_ | null): void;
        changeGameModeForPlayer(gameModeForPlayer: $GameType_): boolean;
        /**
         * Get if we are in creative game mode.
         */
        isSurvival(): boolean;
        tick(): void;
        /**
         * Sets the world instance.
         */
        setLevel(serverLevel: $ServerLevel): void;
        useItemOn(player: $ServerPlayer, level: $Level_, stack: $ItemStack_, hand: $InteractionHand_, hitResult: $BlockHitResult): $InteractionResult;
        useItem(player: $ServerPlayer, level: $Level_, stack: $ItemStack_, hand: $InteractionHand_): $InteractionResult;
        /**
         * Get if we are in creative game mode.
         */
        isCreative(): boolean;
        /**
         * Attempts to harvest a block
         */
        destroyBlock(pos: $BlockPos_): boolean;
        handleBlockBreakAction(pos: $BlockPos_, action: $ServerboundPlayerActionPacket$Action_, face: $Direction_, maxBuildHeight: number, sequence: number): void;
        isDestroyingBlock: boolean;
        level: $ServerLevel;
        player: $ServerPlayer;
        constructor(player: $ServerPlayer);
        get previousGameModeForPlayer(): $GameType;
        get survival(): boolean;
        get creative(): boolean;
    }
    export class $ChunkMap$DistanceManager extends $DistanceManager {
        ticketThrottlerInput: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable>>;
        ticketsToRelease: $LongSet;
        chunksToUpdateFutures: $Set<$ChunkHolder>;
        tickets: $Long2ObjectOpenHashMap<$SortedArraySet<$Ticket<never>>>;
        ticketThrottler: $ChunkTaskPriorityQueueSorter;
        this$0: $ChunkMap;
        playersPerChunk: $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        static LOGGER: $Logger;
        mainThreadExecutor: $Executor;
        ticketThrottlerReleaser: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Release>;
        static PLAYER_TICKET_LEVEL: number;
        tickingTicketsTracker: $TickingTracker;
        constructor(dispatcher: $ChunkMap, mainThreadExecutor: $Executor_, arg2: $Executor_);
    }
    export class $ServerPlayer$RespawnPosAngle extends $Record {
        position(): $Vec3;
        static of(position: $Vec3_, towardsPos: $BlockPos_): $ServerPlayer$RespawnPosAngle;
        yaw(): number;
        constructor(position: $Vec3_, yaw: number);
    }
    /**
     * Values that may be interpreted as {@link $ServerPlayer$RespawnPosAngle}.
     */
    export type $ServerPlayer$RespawnPosAngle_ = { yaw?: number, position?: $Vec3_,  } | [yaw?: number, position?: $Vec3_, ];
    export class $DistanceManager {
        inBlockTickingRange(chunkPos: number): boolean;
        addPlayer(sectionPos: $SectionPos, player: $ServerPlayer): void;
        removeRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        removeRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        updateChunkForced(pos: $ChunkPos, add: boolean): void;
        /**
         * Returns the number of chunks taken into account when calculating the mob cap
         */
        getNaturalSpawnChunkCount(): number;
        getDebugStatus(): string;
        inEntityTickingRange(chunkPos: number): boolean;
        removePlayer(sectionPos: $SectionPos, player: $ServerPlayer): void;
        updateSimulationDistance(viewDistance: number): void;
        addTicket(chunkPos: number, arg1: $Ticket<never>): void;
        addTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        purgeStaleTickets(): void;
        shouldForceTicks(chunkPos: number): boolean;
        removeTicket(chunkPos: number, arg1: $Ticket<never>): void;
        removeTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        updateChunkScheduling(chunkPos: number, arg1: number, newLevel: $ChunkHolder | null, holder: number): $ChunkHolder;
        hasTickets(): boolean;
        updatePlayerTickets(viewDistance: number): void;
        tickingTracker(): $TickingTracker;
        getTicketDebugString(chunkPos: number): string;
        hasPlayersNearby(chunkPos: number): boolean;
        isChunkToRemove(chunkPos: number): boolean;
        removeTicketsOnClosing(): void;
        runAllUpdates(chunkMap: $ChunkMap): boolean;
        addRegionTicket<T>(type: $TicketType<T>, pos: $ChunkPos, distance: number, value: T): void;
        addRegionTicket<T>(arg0: $TicketType<T>, arg1: $ChunkPos, arg2: number, arg3: T, arg4: boolean): void;
        getChunk(chunkPos: number): $ChunkHolder;
        ticketThrottlerInput: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<$Runnable>>;
        ticketsToRelease: $LongSet;
        chunksToUpdateFutures: $Set<$ChunkHolder>;
        tickets: $Long2ObjectOpenHashMap<$SortedArraySet<$Ticket<never>>>;
        ticketThrottler: $ChunkTaskPriorityQueueSorter;
        playersPerChunk: $Long2ObjectMap<$ObjectSet<$ServerPlayer>>;
        static LOGGER: $Logger;
        mainThreadExecutor: $Executor;
        ticketThrottlerReleaser: $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Release>;
        static PLAYER_TICKET_LEVEL: number;
        tickingTicketsTracker: $TickingTracker;
        constructor(dispatcher: $Executor_, mainThreadExecutor: $Executor_);
        get naturalSpawnChunkCount(): number;
        get debugStatus(): string;
    }
    export class $ServerPlayer extends $Player implements $VeilPacketManager$PacketSink, $IQuiverPlayer, $IServerPlayer$2, $IServerPlayer$1, $ServerPlayerAccessor, $ServerPlayerKJS, $IServerPlayer, $PlayerFreezeExtension, $ServerPlayerRespawnExtension, $ServerPlayerPossessionAccess {
        serverLevel(): $ServerLevel;
        /**
         * Returns if other players can attack this player
         */
        isChangingDimension(): boolean;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        requestedViewDistance(): number;
        /**
         * Returns if other players can attack this player
         */
        allowsListing(): boolean;
        /**
         * Add experience levels to this player.
         */
        setExperiencePoints(levels: number): void;
        /**
         * Add experience levels to this player.
         */
        setExperienceLevels(levels: number): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        initInventoryMenu(): void;
        handler$gbe005$sable$tick(arg0: $CallbackInfo): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        trackStartFallingPosition(): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        trackEnteredOrExitedLavaOnVehicle(): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        doTick(): void;
        handler$dgj000$item_obliterator$playerTick(arg0: $CallbackInfo, arg1: number): void;
        findRespawnPositionAndUseSpawnBlock(keepInventory: boolean, postDimensionTransition: $DimensionTransition$PostDimensionTransition_): $DimensionTransition;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getRespawnAngle(): number;
        /**
         * Returns if other players can attack this player
         */
        isRespawnForced(): boolean;
        getRespawnDimension(): $ResourceKey<$Level>;
        static findRespawnAndUseSpawnBlock(level: $ServerLevel, pos: $BlockPos_, angle: number, forced: boolean, keepInventory: boolean): ($ServerPlayer$RespawnPosAngle) | undefined;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        showEndCredits(): void;
        handler$eod000$pandalib$afterDimensionChange(teleportTransition: $DimensionTransition_, cir: $CallbackInfoReturnable<any>): void;
        handler$eod000$pandalib$beforeDimensionChange(teleportTransition: $DimensionTransition_, cir: $CallbackInfoReturnable<any>): void;
        createCommonSpawnInfo(level: $ServerLevel): $CommonPlayerSpawnInfo;
        setServerLevel(level: $ServerLevel): void;
        handler$cgg000$glitchcore$onChangeDimension(arg0: $DimensionTransition_, arg1: $CallbackInfoReturnable<any>): void;
        bedInRange(pos: $BlockPos_, direction: $Direction_): boolean;
        doCheckFallDamage(movementX: number, arg1: number, movementY: number, arg3: boolean): void;
        setPlayerInput(strafe: number, forward: number, jumping: boolean, sneaking: boolean): void;
        checkMovementStatistics(dx: number, arg1: number, dy: number): void;
        checkRidingStatistics(dx: number, arg1: number, dy: number): void;
        /**
         * Returns if other players can attack this player
         */
        hasDisconnected(): boolean;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        resetSentInfo(): void;
        handler$epg000$collective$ServerPlayer_restoreFrom(arg0: $ServerPlayer, arg1: boolean, arg2: $CallbackInfo): void;
        wrapMethod$gdf000$sable$teleportTo(arg0: number, arg1: number, arg2: number, arg3: $Operation_<any>): void;
        wrapMethod$gdf000$sable$teleportTo(arg0: $ServerLevel, arg1: number, arg2: number, arg3: number, arg4: $Set_<any>, arg5: number, arg6: number, arg7: $Operation_<any>): boolean;
        /**
         * Changes the player's gamemode.
         * 
         * @param gameMode One of: `'survival'`, `'creative'`, `'adventure'`, `'spectator'`.
         */
        setGameMode(gameMode: $GameType_): boolean;
        sendChatMessage(message: $OutgoingChatMessage, filtered: boolean, boundType: $ChatType$Bound_): void;
        /**
         * Gets the player's IP address. Used in /banip.
         */
        getIpAddress(): string;
        clientInformation(): $ClientInformation;
        /**
         * Returns if other players can attack this player
         */
        canChatInColor(): boolean;
        getChatVisibility(): $ChatVisiblity;
        sendServerStatus(serverStatus: $ServerStatus_): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        resetLastActionTime(): void;
        getRecipeBook(): $ServerRecipeBook;
        getLastActionTime(): number;
        /**
         * Returns null which indicates the tab list should just display the player's name, return a different value to display the specified text instead of the player's name
         */
        getTabListDisplayName(): $Component;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        hasChangedDimension(): void;
        setRespawnPosition(dimension: $ResourceKey_<$Level>, position: $BlockPos_ | null, angle: number, forced: boolean, sendMessage: boolean): void;
        getLastSectionPos(): $SectionPos;
        setLastSectionPos(sectionPos: $SectionPos): void;
        getChunkTrackingView(): $ChunkTrackingView;
        setChunkTrackingView(chunkTrackingView: $ChunkTrackingView): void;
        /**
         * Returns null which indicates the tab list should just display the player's name, return a different value to display the specified text instead of the player's name
         */
        getTabListHeader(): $Component;
        setTabListHeader(component: $Component_): void;
        setTabListHeaderFooter(arg0: $Component_, arg1: $Component_): void;
        /**
         * Returns null which indicates the tab list should just display the player's name, return a different value to display the specified text instead of the player's name
         */
        getTabListFooter(): $Component;
        setTabListFooter(component: $Component_): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        refreshTabListName(): void;
        getTextFilter(): $TextFilter;
        loadGameTypes(compound: $CompoundTag_ | null): void;
        shouldFilterMessageTo(player: $ServerPlayer): boolean;
        setSpawnExtraParticlesOnFall(spawnExtraParticlesOnFall: boolean): void;
        setChatSession(chatSession: $RemoteChatSession_): void;
        getChatSession(): $RemoteChatSession;
        setKnownMovement(knownMovement: $Vec3_): void;
        setRaidOmenPosition(raidOmenPosition: $BlockPos_): void;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        clearRaidOmenPosition(): void;
        getRaidOmenPosition(): $BlockPos;
        sendPacket(arg0: $Packet<any>): void;
        supplementaries$getQuiverSlot(): $SlotReference;
        supplementaries$setQuiverSlot(arg0: $SlotReference): void;
        getXaeroMinimapPlayerData(): $ServerPlayerData$1;
        setXaeroMinimapPlayerData(arg0: $ServerPlayerData$1): void;
        getXaeroWorldMapPlayerData(): $ServerPlayerData$2;
        setXaeroWorldMapPlayerData(arg0: $ServerPlayerData$2): void;
        xaerolib_getData(): $ServerPlayerData;
        xaerolib_setData(arg0: $ServerPlayerData): void;
        sable$getRespawnPoint(): $UUID;
        copyRespawnPosition(player: $ServerPlayer): void;
        sable$takeQueuedFreezeFrom(player: $ServerPlayer): void;
        sable$getQueuedFreeze(): $Pair<any, any>;
        railways$getPossessedConductor(): $ConductorEntity;
        railways$setPossessedConductor(arg0: $ConductorEntity): void;
        drop(bypassHiddenChat: boolean): boolean;
        /**
         * Gets the player's IP address. Used in /banip.
         */
        getLanguage(): string;
        /**
         * Sets the current crafting inventory back to the 2x2 square.
         */
        disconnect(): void;
        getStatsCounter(): $ServerStatsCounter;
        updateOptions(clientInformation: $ClientInformation_): void;
        getAdvancements(): $PlayerAdvancements;
        lookAt(fromAnchor: $EntityAnchorArgument$Anchor_, entity: $Entity, toAnchor: $EntityAnchorArgument$Anchor_): void;
        teleportTo(newLevel: $ServerLevel, x: number, arg2: number, y: number, arg4: number, z: number): void;
        sendSystemMessage(chatComponent: $Component_, actionBar: boolean): void;
        restoreFrom(that: $ServerPlayer, keepEverything: boolean): void;
        getRespawnPosition(): $BlockPos;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        /**
         * Kicks the player from the server with the provided reason.
         * 
         * @param reason A text component, containing the kick reason. It may be a string, which will be implicitly wrapped into a text component.
         */
        kick(component: $Component_): void;
        /**
         * Kicks the player from the server with a generic reason.
         * Sets the current crafting inventory back to the 2x2 square.
         */
        kick(): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number, rows: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_, columns: number): void;
        openInventoryGUI(inventory: $InventoryKJS, title: $Component_): void;
        openChestGUI(title: $Component_, rows: number, gui: $Consumer_<$ChestMenuData>): void;
        openChestGUI(gui: $Consumer_<$KubeJSGUI>): void;
        captureInventory(autoRestore: boolean): $Container;
        /**
         * Switches the player's gamemode between Creative and Survival.
         * To change the player's gamemode to a mode other than Creative or Survival, use `setGameMode`.
         * 
         * @param mode `true` to change the player's gamemode to Creative.
         * `false` to change the player's gamemode to Survival.
         */
        setCreativeMode(spawnExtraParticlesOnFall: boolean): void;
        /**
         * Checks, whether the player is a server operator.
         * Returns if other players can attack this player
         */
        isOp(): boolean;
        /**
         * Bans the player from the server.
         * 
         * @param banner A string, that specifies who/what banned the player.
         * @param reason A string, that contains the ban reason.
         * @param banDuration Duration of a ban. Negative durations will result in a 10-year ban.
         */
        ban(banner: string, reason: string, banDuration: $Duration_): void;
        isAdvancementDone(id: $ResourceLocation_): boolean;
        unlockAdvancement(statKey: $ResourceLocation_): void;
        revokeAdvancement(statKey: $ResourceLocation_): void;
        getSpawnLocation(): $LevelBlock;
        setSpawnLocation(c: $LevelBlock): void;
        /**
         * Heals the player to full, and fully restores hunger and saturation.
         * Sets the current crafting inventory back to the 2x2 square.
         */
        heal(): void;
        getCamera(): $Entity;
        /**
         * Attacks for the player the targeted entity with the currently equipped item.  The equipped item has hitEntity called on it. Args: targetEntity
         */
        setCamera(targetEntity: $Entity): void;
        lerpYRot: number;
        static USE_ITEM_INTERVAL: number;
        lerpYHeadRot: number;
        useItem: $ItemStack;
        jumpTriggerTime: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        simulated$currentTypeWriter: $BlockPos;
        removalReason: $Entity$RemovalReason;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        boardingCooldown: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        noCulling: boolean;
        gameMode: $ServerPlayerGameMode;
        appliedScale: number;
        object: $Object;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        static UUID_TAG: string;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        hurtDir: number;
        static DEFAULT_BABY_SCALE: number;
        static DEFAULT_BB_HEIGHT: number;
        seenCredits: boolean;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        noActionTime: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        yCloak: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        animStepO: number;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        yRot: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        enchantmentSeed: number;
        static FLAG_FALL_FLYING: number;
        xOld: number;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        attackStrengthTicker: number;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        invulnerableTime: number;
        wasUnderwater: boolean;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventory: $Inventory;
        random: $RandomSource;
        lerpSteps: number;
        yOld: number;
        static HAND_SLOTS: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        levelCallback: $EntityInLevelCallback;
        lerpXRot: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        animStep: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        yyzsbackpack$player: $ServerPlayer;
        deathScore: number;
        oBob: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        lastHurtByPlayerTime: number;
        autoSpinAttackItemStack: $ItemStack;
        static DEFAULT_BASE_GRAVITY: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        connection: $ServerGamePacketListenerImpl;
        static FLAG_ONFIRE: number;
        zza: number;
        rotOffs: number;
        static INTERACTION_DISTANCE_VERIFICATION_BUFFER: number;
        static WAKE_UP_DURATION: number;
        xRotO: number;
        simulated$launchedPlunger: $LaunchedPlungerEntity;
        zo: number;
        wonGame: boolean;
        lastHurt: number;
        walkAnimation: $WalkAnimationState;
        static STANDING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MODE_CUSTOMISATION: $EntityDataAccessor<number>;
        yya: number;
        server: $MinecraftServer;
        oAttackAnim: number;
        yHeadRotO: number;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static SWIMMING_BB_HEIGHT: number;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        xxa: number;
        zCloak: number;
        lerpHeadSteps: number;
        static $assertionsDisabled: boolean;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        xCloakO: number;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        rotA: number;
        dimensions: $EntityDimensions;
        static ENDER_SLOT_OFFSET: number;
        firstTick: boolean;
        static HELD_ITEM_SLOT: number;
        uuid: $UUID;
        lastHurtByPlayer: $Player;
        static SWING_DURATION: number;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        enderChestInventory: $PlayerEnderChestContainer;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        oRun: number;
        bob: number;
        experienceProgress: number;
        totalExperience: number;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        foodData: $FoodData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        static DATA_PLAYER_MAIN_HAND: $EntityDataAccessor<number>;
        static EQUIPMENT_SLOT_OFFSET: number;
        defaultFlySpeed: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        inventoryMenu: $InventoryMenu;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        static DATA_SHOULDER_LEFT: $EntityDataAccessor<$CompoundTag>;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        fishing: $FishingHook;
        static SWIMMING_BB_WIDTH: number;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        static TOTAL_AIR_SUPPLY: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static DATA_SHOULDER_RIGHT: $EntityDataAccessor<$CompoundTag>;
        currentExplosionCause: $Entity;
        constructor(server: $MinecraftServer, level: $ServerLevel, gameProfile: $GameProfile, clientInformation: $ClientInformation_);
        get changingDimension(): boolean;
        set experiencePoints(value: number);
        set experienceLevels(value: number);
        get respawnAngle(): number;
        get respawnForced(): boolean;
        get respawnDimension(): $ResourceKey<$Level>;
        get ipAddress(): string;
        get chatVisibility(): $ChatVisiblity;
        get recipeBook(): $ServerRecipeBook;
        get lastActionTime(): number;
        get tabListDisplayName(): $Component;
        get textFilter(): $TextFilter;
        set spawnExtraParticlesOnFall(value: boolean);
        set knownMovement(value: $Vec3_);
        get language(): string;
        get statsCounter(): $ServerStatsCounter;
        get advancements(): $PlayerAdvancements;
        set creativeMode(value: boolean);
        get op(): boolean;
    }
    export class $ChunkTaskPriorityQueueSorter implements $ChunkHolder$LevelChangeListener, $AutoCloseable {
        getDebugStatus(): string;
        onLevelChange(chunkPos: $ChunkPos, queueLevelGetter: $IntSupplier_, ticketLevel: number, queueLevelSetter: $IntConsumer_): void;
        getReleaseProcessor(processor: $ProcessorHandle<$Runnable_>): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Release>;
        static message<T>(task: $Function_<$ProcessorHandle<$Unit>, T>, pos: number, arg2: $IntSupplier_): $ChunkTaskPriorityQueueSorter$Message<T>;
        static message(task: $Runnable_, pos: number, arg2: $IntSupplier_): $ChunkTaskPriorityQueueSorter$Message<$Runnable>;
        static message<T>(chunk: $GenerationChunkHolder, task: $Function_<$ProcessorHandle<$Unit>, T>): $ChunkTaskPriorityQueueSorter$Message<T>;
        static message(chunk: $GenerationChunkHolder, task: $Runnable_): $ChunkTaskPriorityQueueSorter$Message<$Runnable>;
        close(): void;
        static release(task: $Runnable_, pos: number, arg2: boolean): $ChunkTaskPriorityQueueSorter$Release;
        hasWork(): boolean;
        getProcessor<T>(processor: $ProcessorHandle<T>, flush: boolean): $ProcessorHandle<$ChunkTaskPriorityQueueSorter$Message<T>>;
        constructor(queues: $List_<$ProcessorHandle<never>>, task: $Executor_, maxTasks: number);
        get debugStatus(): string;
    }
    export class $ServerLevel extends $Level implements $WorldGenLevel, $VeilPacketManager$PacketSink, $ILevelEventRedirect, $ServerWorldExtended, $ServerLevelAccessor, $ServerLevelAccessor$1, $ServerLevelAccessor$2, $IWorldMapServerLevel, $ServerWorldCache, $ServerLevelKJS, $ServerLevelAccessor$3, $ServerLevelSceneExtension, $SubLevelContainerHolder, $WaterOcclusionContainerHolder, $BlueprintServerLevel {
        isFlat(): boolean;
        removePlayerImmediately(player: $ServerPlayer, reason: $Entity$RemovalReason_): void;
        canSleepThroughNights(): boolean;
        /**
         * Resets the updateEntityTick field to 0
         */
        tickTime(): void;
        sendPacket(packet: $Packet<any>): void;
        structureManager(): $StructureManager;
        getStructureManager(): $StructureTemplateManager;
        getDataStorage(): $DimensionDataStorage;
        /**
         * @deprecated
         */
        setDragonFight(dragonFight: $EndDragonFight | null): void;
        setWeatherParameters(clearTime: number, weatherTime: number, isRaining: boolean, isThundering: boolean): void;
        setDayTime(time: number): void;
        tickCustomSpawners(spawnEnemies: boolean, spawnFriendlies: boolean): void;
        tickChunk(chunk: $LevelChunk, randomTickSpeed: number): void;
        findLightningTargetAround(pos: $BlockPos_): $BlockPos;
        tickPrecipitation(blockPos: $BlockPos_): void;
        getPoiManager(): $PoiManager;
        isHandlingTick(): boolean;
        /**
         * Resets the updateEntityTick field to 0
         */
        resetWeatherCycle(): void;
        tickNonPassenger(entity: $Entity): void;
        handler$dci000$immersive_melodies$immersiveMelodies$injectTickEntity(arg0: $Entity, arg1: $CallbackInfo): void;
        handler$dci000$immersive_melodies$immersiveMelodies$injectTickPassenger(arg0: $Entity, arg1: $Entity, arg2: $CallbackInfo): void;
        handler$geg000$sable$saveSubLevels(arg0: $ProgressListener, arg1: boolean, arg2: boolean, arg3: $CallbackInfo): void;
        getDragons(): $List<$EnderDragon>;
        getPlayers(predicate: $Predicate_<$ServerPlayer>, maxResults: number): $List<$ServerPlayer>;
        getPlayers(predicate: $Predicate_<$ServerPlayer>): $List<$ServerPlayer>;
        getRandomPlayer(): $ServerPlayer;
        handler$gbj000$sable$kickEntity(arg0: $Entity, arg1: $CallbackInfoReturnable<any>): void;
        addNewPlayer(player: $ServerPlayer): void;
        addRespawnedPlayer(player: $ServerPlayer): void;
        handler$cgd000$glitchcore$onAddPlayer(arg0: $ServerPlayer, arg1: $CallbackInfo): void;
        /**
         * Called when an entity is spawned in the world. This includes players.
         */
        tryAddFreshEntityWithPassengers(entity: $Entity): boolean;
        getLogicalHeight(): number;
        wrapMethod$gdj000$sable$preExplode(arg0: $Entity, arg1: $DamageSource_, arg2: $ExplosionDamageCalculator, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Level$ExplosionInteraction_, arg9: $ParticleOptions_, arg10: $ParticleOptions_, arg11: $Holder_<any>, arg12: $Operation_<any>): $Explosion;
        getPortalForcer(): $PortalForcer;
        /**
         * @deprecated
         * Returns the Entity with the given ID, or null if it doesn't exist in this World.
         */
        getEntityOrPart(id: number): $Entity;
        findNearestMapStructure(structureTag: $TagKey_<$Structure>, pos: $BlockPos_, radius: number, skipExistingChunks: boolean): $BlockPos;
        findClosestBiome3d(biomePredicate: $Predicate_<$Holder<$Biome>>, pos: $BlockPos_, radius: number, horizontalStep: number, verticalStep: number): $Pair$1<$BlockPos, $Holder<$Biome>>;
        setDefaultSpawnPos(pos: $BlockPos_, angle: number): void;
        getForcedChunks(): $LongSet;
        setChunkForced(chunkX: number, chunkZ: number, add: boolean): boolean;
        isVillage(pos: $BlockPos_): boolean;
        isVillage(pos: $SectionPos): boolean;
        isCloseToVillage(pos: $BlockPos_, sections: number): boolean;
        sectionsToVillage(pos: $SectionPos): number;
        getRaids(): $Raids;
        getRaidAt(pos: $BlockPos_): $Raid;
        isRaided(pos: $BlockPos_): boolean;
        onReputationEvent(type: $ReputationEventType, target: $Entity, host: $ReputationEventHandler_): void;
        saveDebugReport(path: $Path_): void;
        clearBlockEvents(boundingBox: $BoundingBox): void;
        /**
         * Gets an unmodifiable iterator of all loaded entities in the world.
         */
        getAllEntities(): $Iterable<$Entity>;
        getDragonFight(): $EndDragonFight;
        /**
         * Returns the name of the current chunk provider, by calling chunkprovider.makeString()
         */
        getWatchdogStats(): string;
        addLegacyChunkEntities(entities: $Stream<$Entity>): void;
        addWorldGenChunkEntities(entities: $Stream<$Entity>): void;
        startTickingChunk(chunk: $LevelChunk): void;
        onStructureStartsAvailable(chunk: $ChunkAccess): void;
        getPathTypeCache(): $PathTypeCache;
        handler$epf000$collective$serverLevel_close(arg0: $CallbackInfo): void;
        areEntitiesLoaded(chunkPos: number): boolean;
        isPositionEntityTicking(pos: $BlockPos_): boolean;
        isNaturalSpawningAllowed(pos: $BlockPos_): boolean;
        isNaturalSpawningAllowed(chunkPos: $ChunkPos): boolean;
        getRandomSequence(location: $ResourceLocation_): $RandomSource;
        getRandomSequences(): $RandomSequences;
        registerCapabilityListener(arg0: $BlockPos_, arg1: $ICapabilityInvalidationListener_): void;
        /**
         * Resets the updateEntityTick field to 0
         */
        cleanCapabilityListenerReferences(): void;
        supp$setRedirected(arg0: boolean, arg1: $Vec3_): void;
        /**
         * Resets the updateEntityTick field to 0
         */
        seamlesssleep$invokeWakeSleepingPlayers(): void;
        /**
         * Resets the updateEntityTick field to 0
         */
        seamlesssleep$invokeResetWeather(): void;
        lithium$setNavigationActive(arg0: $Mob): void;
        lithium$setNavigationInactive(arg0: $Mob): void;
        areEntityNavigationsConsistent(): boolean;
        redirect$cgm000$sereneseasons$tickIceAndSnow_getPrecipitationAt(arg0: $Biome_, arg1: $BlockPos_): $Biome$Precipitation;
        getXaero_wm_capabilities(): $ServerWorldCapabilities;
        setXaero_wm_capabilities(arg0: $ServerWorldCapabilities): void;
        fabric_registerCache(arg0: $BlockPos_, arg1: $BlockApiCacheImpl<any, any>): void;
        fabric_invalidateCache(blockPos: $BlockPos_): void;
        sable$getSceneID(): number;
        sable$setSceneID(timeFlash: number): void;
        sable$getWaterOcclusionContainer(): $WaterOcclusionContainer<any>;
        getEntities<T extends $Entity>(typeTest: $EntityTypeTest<$Entity, T>, predicate: $Predicate_<T>): $List<T>;
        getEntities<T extends $Entity>(typeTest: $EntityTypeTest<$Entity, T>, predicate: $Predicate_<T>, output: $List_<T>): void;
        getEntities<T extends $Entity>(typeTest: $EntityTypeTest<$Entity, T>, predicate: $Predicate_<T>, output: $List_<T>, maxResults: number): void;
        /**
         * Runs a single tick for the world
         */
        tick(hasTimeLeft: $BooleanSupplier_): void;
        getLevel(): $ServerLevel;
        /**
         * Gets the random world seed.
         */
        getSeed(): number;
        save(progress: $ProgressListener | null, flush: boolean, skipSave: boolean): void;
        unload(chunk: $LevelChunk): void;
        getLevelData(arg0: number): $Object;
        sable$getPlotContainer(): $SubLevelContainer;
        sendParticles<T extends $ParticleOptions>(type: T, posX: number, arg2: number, posY: number, arg4: number, posZ: number, arg6: number, particleCount: number, xOffset: number): number;
        sendParticles<T extends $ParticleOptions>(player: $ServerPlayer, type: T, longDistance: boolean, posX: number, arg4: number, posY: number, arg6: number, posZ: number, arg8: number, particleCount: number, xOffset: number): boolean;
        sendParticles(player: $ServerPlayer, longDistance: boolean, posX: number, arg3: number, posY: number, arg5: $Packet<never>): boolean;
        getScoreboard(): $ServerScoreboard;
        /**
         * Resets the updateEntityTick field to 0
         */
        updateSleepingPlayerList(): void;
        /**
         * Called when an entity is spawned in the world. This includes players.
         */
        addWithUUID(entity: $Entity): boolean;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ServerChunkCache;
        getPersistentData(): $CompoundTag;
        addDuringTeleport(entity: $Entity): void;
        /**
         * Resets the updateEntityTick field to 0
         */
        resetEmptyTime(): void;
        getBlockTicks(): $LevelTicks<$Block>;
        getFluidTicks(): $LevelTicks<$Fluid>;
        ensureCanWrite(pos: $BlockPos_): boolean;
        setCurrentlyGenerating(currentlyGenerating: $Supplier_<string> | null): void;
        sendPacket(...arg0: $CustomPacketPayload_[]): void;
        self(): $ServerLevel;
        addFreshEntityWithPassengers(entity: $Entity): void;
        getEntityManager(): $PersistentEntitySectionManager<$Entity>;
        create$getEntityTickList(): $EntityTickList;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static RAIN_DELAY: $IntProvider;
        xaero_wm_capabilities: $ServerWorldCapabilities;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        navigatingMobs: $Set<$Mob>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        entityTickList: $EntityTickList;
        raids: $Raids;
        rainLevel: number;
        dragonParts: $Int2ObjectMap<$PartEntity<never>>;
        oThunderLevel: number;
        static THUNDER_DURATION: $IntProvider;
        serverLevelData: $ServerLevelData;
        static RAIN_DURATION: $IntProvider;
        players: $List<$ServerPlayer>;
        static $assertionsDisabled: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        isUpdatingNavigations: boolean;
        addend: number;
        entityManager: $PersistentEntitySectionManager<$Entity>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static END_SPAWN_POINT: $BlockPos;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(server: $MinecraftServer, dispatcher: $Executor_, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, serverLevelData: $ServerLevelData, dimension: $ResourceKey_<$Level>, levelStem: $LevelStem_, progressListener: $ChunkProgressListener, isDebug: boolean, biomeZoomSeed: number, arg9: $List_<$CustomSpawner_>, customSpawners: boolean, tickTime: $RandomSequences | null);
        get flat(): boolean;
        get dataStorage(): $DimensionDataStorage;
        get poiManager(): $PoiManager;
        get handlingTick(): boolean;
        get dragons(): $List<$EnderDragon>;
        get randomPlayer(): $ServerPlayer;
        get logicalHeight(): number;
        get portalForcer(): $PortalForcer;
        get forcedChunks(): $LongSet;
        get allEntities(): $Iterable<$Entity>;
        get watchdogStats(): string;
        get pathTypeCache(): $PathTypeCache;
        get randomSequences(): $RandomSequences;
        get level(): $ServerLevel;
        get seed(): number;
        get scoreboard(): $ServerScoreboard;
        get chunkSource(): $ServerChunkCache;
        get persistentData(): $CompoundTag;
        get blockTicks(): $LevelTicks<$Block>;
        get fluidTicks(): $LevelTicks<$Fluid>;
        set currentlyGenerating(value: $Supplier_<string> | null);
    }
    export class $SectionTracker extends $DynamicGraphMinFixedPoint {
        getLevelFromSource(pos: number): number;
        update(pos: number, arg1: number, level: boolean): void;
        levelCount: number;
        static SOURCE: number;
        constructor(firstQueuedLevel: number, width: number, height: number);
    }
    export class $ChunkMap$TrackedEntity implements $TrackedEntityAccessor, $ChunkMapAccessor$TrackedEntityAccessor, $EntityTrackerAccessor {
        updatePlayers(playersList: $List_<$ServerPlayer>): void;
        removePlayer(player: $ServerPlayer): void;
        updatePlayer(player: $ServerPlayer): void;
        broadcastRemoved(): void;
        localvar$dpp000$railways$securitycraft$modifyFlag(arg0: boolean): boolean;
        broadcastAndSend(packet: $Packet<never>): void;
        broadcast(packet: $Packet<never>): void;
        getSeenBy(): $Set<$ServerPlayerConnection>;
        getPlayersTracking(): $Set<$ServerPlayerConnection>;
        serverEntity: $ServerEntity;
        lastSectionPos: $SectionPos;
        this$0: $ChunkMap;
        entity: $Entity;
        seenBy: $Set<$ServerPlayerConnection>;
        constructor(entity: $ChunkMap, range: $Entity, updateInterval: number, trackDelta: number, arg4: boolean);
        get playersTracking(): $Set<$ServerPlayerConnection>;
    }
    export class $DistanceManager$ChunkTicketTracker extends $ChunkTracker {
        levelCount: number;
        static SOURCE: number;
    }
}
