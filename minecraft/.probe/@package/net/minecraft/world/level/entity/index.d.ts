import { $Writer } from "@package/java/io";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Long2ObjectFunction_, $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $Logger } from "@package/org/slf4j";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $PositionedEntityTrackingSection } from "@package/net/caffeinemc/mods/lithium/common/entity";
import { $Entity, $Entity$RemovalReason_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UUID, $UUID_, $List_, $Set } from "@package/java/util";
import { $AbortableIterationConsumer_, $ClassInstanceMultiMap, $AbortableIterationConsumer$Continuation } from "@package/net/minecraft/util";
import { $ChunkAwareEntityIterable } from "@package/net/caffeinemc/mods/lithium/common/world";
import { $Consumer_ } from "@package/java/util/function";
import { $FullChunkStatus_, $FullChunkStatus } from "@package/net/minecraft/server/level";
import { $PersistentEntitySectionManagerAccessor, $EntitySectionAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/minimal_nonvanilla/spawning";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $EntitySectionAccessor as $EntitySectionAccessor$2 } from "@package/net/caffeinemc/mods/lithium/mixin/block/hopper";
import { $LongStream, $Stream } from "@package/java/util/stream";
import { $PersistentEntitySectionManagerAccessor as $PersistentEntitySectionManagerAccessor$1 } from "@package/net/caffeinemc/mods/lithium/mixin/util/entity_movement_tracking";
import { $PersistentEntitySectionManagerAccessor as $PersistentEntitySectionManagerAccessor$2, $EntitySectionAccessor as $EntitySectionAccessor$1, $TransientEntitySectionManagerAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/util/accessors";
import { $Enum, $AutoCloseable, $Class, $Object, $Iterable } from "@package/java/lang";
import { $EntityMovementTrackerSection, $ToggleableMovementTracker, $SectionedEntityMovementTracker } from "@package/net/caffeinemc/mods/lithium/common/tracking/entity";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/entity" {
    export class $EntityTickList {
        remove(entity: $Entity): void;
        add(entity: $Entity): void;
        contains(entity: $Entity): boolean;
        forEach(entity: $Consumer_<$Entity>): void;
        constructor();
    }
    export class $Visibility extends $Enum<$Visibility> {
        isTicking(): boolean;
        static fromFullChunkStatus(fullChunkStatus: $FullChunkStatus_): $Visibility;
        static values(): $Visibility[];
        static valueOf(arg0: string): $Visibility;
        isAccessible(): boolean;
        static TICKING: $Visibility;
        static TRACKED: $Visibility;
        static HIDDEN: $Visibility;
        get ticking(): boolean;
        get accessible(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Visibility}.
     */
    export type $Visibility_ = "hidden" | "tracked" | "ticking";
    export class $EntityPersistentStorage<T> {
    }
    export interface $EntityPersistentStorage<T> extends $AutoCloseable {
        loadEntities(pos: $ChunkPos): $CompletableFuture<$ChunkEntities<T>>;
        storeEntities(entities: $ChunkEntities<T>): void;
        flush(synchronize: boolean): void;
        close(): void;
    }
    export class $ChunkStatusUpdateListener {
    }
    export interface $ChunkStatusUpdateListener {
        onChunkStatusChange(chunkPos: $ChunkPos, fullChunkStatus: $FullChunkStatus_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChunkStatusUpdateListener}.
     */
    export type $ChunkStatusUpdateListener_ = ((arg0: $ChunkPos, arg1: $FullChunkStatus) => void);
    export class $EntitySection<T extends $EntityAccess> implements $EntitySectionAccessor$2<any>, $EntitySectionAccessor<any>, $EntitySectionAccessor$1<any>, $PositionedEntityTrackingSection, $EntityMovementTrackerSection {
        updateChunkStatus(chunkStatus: $Visibility_): $Visibility;
        lithium$setPos(arg0: number): void;
        modifyReturnValue$caj000$lithium$modifyIsEmpty(arg0: boolean): boolean;
        localvar$caj000$lithium$swapStatus(chunkStatus: $Visibility_): $Visibility;
        lithium$addListener(arg0: $SectionedEntityMovementTracker<any, any>): void;
        lithium$removeListener(arg0: $EntitySectionStorage<any>, arg1: $SectionedEntityMovementTracker<any, any>): void;
        lithium$getPos(): number;
        lithium$trackEntityMovement(arg0: number, arg1: number): void;
        lithium$getChangeTime(arg0: number): number;
        lithium$listenToMovementOnce(arg0: $SectionedEntityMovementTracker<any, any>, arg1: number): void;
        lithium$removeListenToMovementOnce(arg0: $SectionedEntityMovementTracker<any, any>, arg1: number): void;
        getEntities<U extends T>(test: $EntityTypeTest<$Object, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): $AbortableIterationConsumer$Continuation;
        getEntities(): $Stream<$Object>;
        getEntities(bounds: $AABB_, consumer: $AbortableIterationConsumer_<$Object>): $AbortableIterationConsumer$Continuation;
        remove(entity: $Object): boolean;
        size(): number;
        isEmpty(): boolean;
        add(entity: $Object): void;
        getStatus(): $Visibility;
        getCollection(): $ClassInstanceMultiMap<$Object>;
        constructor(entityClazz: $Class<$Object>, chunkStatus: $Visibility_);
        get empty(): boolean;
        get status(): $Visibility;
        get collection(): $ClassInstanceMultiMap<$Object>;
    }
    export class $PersistentEntitySectionManager$Callback implements $EntityInLevelCallback, $ToggleableMovementTracker {
    }
    export class $EntityTypeTest<B, T extends B> {
        static forExactClass<B, T extends B>(clazz: $Class<T>): $EntityTypeTest<B, T>;
        static forClass<B, T extends B>(clazz: $Class<T>): $EntityTypeTest<B, T>;
    }
    export interface $EntityTypeTest<B, T extends B> {
        getBaseClass(): $Class<B>;
        tryCast(entity: B): T;
        get baseClass(): $Class<B>;
    }
    export class $EntityAccess {
    }
    export interface $EntityAccess {
        getId(): number;
        blockPosition(): $BlockPos;
        getUUID(): $UUID;
        getBoundingBox(): $AABB;
        setRemoved(removalReason: $Entity$RemovalReason_): void;
        getSelfAndPassengers(): $Stream<$EntityAccess>;
        setLevelCallback(levelCallback: $EntityInLevelCallback): void;
        shouldBeSaved(): boolean;
        isAlwaysTicking(): boolean;
        getPassengersAndSelf(): $Stream<$EntityAccess>;
        get id(): number;
        get UUID(): $UUID;
        get boundingBox(): $AABB;
        set removed(value: $Entity$RemovalReason_);
        get selfAndPassengers(): $Stream<$EntityAccess>;
        set levelCallback(value: $EntityInLevelCallback);
        get alwaysTicking(): boolean;
        get passengersAndSelf(): $Stream<$EntityAccess>;
    }
    export class $EntityLookup<T extends $EntityAccess> {
        getAllEntities(): $Iterable<T>;
        getEntities<U extends T>(test: $EntityTypeTest<T, U>, consumer: $AbortableIterationConsumer_<U>): void;
        getEntity(uuid: $UUID_): T;
        getEntity(id: number): T;
        remove(entity: T): void;
        add(entity: T): void;
        count(): number;
        constructor();
        get allEntities(): $Iterable<T>;
    }
    export class $LevelEntityGetter<T extends $EntityAccess> {
    }
    export interface $LevelEntityGetter<T extends $EntityAccess> {
        getAll(): $Iterable<T>;
        get<U extends T>(test: $EntityTypeTest<T, U>, consumer: $AbortableIterationConsumer_<U>): void;
        get<U extends T>(test: $EntityTypeTest<T, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): void;
        get(boundingBox: $AABB_, consumer: $Consumer_<T>): void;
        get(uuid: $UUID_): T;
        get(id: number): T;
        get all(): $Iterable<T>;
    }
    export class $LevelCallback<T> {
    }
    export interface $LevelCallback<T> {
        onDestroyed(entity: T): void;
        onCreated(entity: T): void;
        onTickingStart(entity: T): void;
        onTickingEnd(entity: T): void;
        onTrackingStart(entity: T): void;
        onTrackingEnd(entity: T): void;
        onSectionChange(entity: T): void;
    }
    export class $PersistentEntitySectionManager<T extends $EntityAccess> implements $AutoCloseable, $PersistentEntitySectionManagerAccessor<any>, $PersistentEntitySectionManagerAccessor$2<any>, $PersistentEntitySectionManagerAccessor$1<any> {
        updateChunkStatus(pos: $ChunkPos, visibility: $Visibility_): void;
        updateChunkStatus(chunkPos: $ChunkPos, fullChunkStatus: $FullChunkStatus_): void;
        saveAll(): void;
        autoSave(): void;
        addNewEntityWithoutEvent(entity: $Object): boolean;
        addNewEntity(entity: $Object): boolean;
        dumpSections(writer: $Writer): void;
        getEntityGetter(): $LevelEntityGetter<$Object>;
        addLegacyChunkEntities(entities: $Stream<$Object>): void;
        addWorldGenChunkEntities(entities: $Stream<$Object>): void;
        areEntitiesLoaded(chunkPos: number): boolean;
        canPositionTick(pos: $BlockPos_): boolean;
        canPositionTick(chunkPos: $ChunkPos): boolean;
        stopTicking(entity: $Object): void;
        startTicking(entity: $Object): void;
        startTracking(entity: $Object): void;
        removeSectionIfEmpty(sectionKey: number, arg1: $EntitySection<$Object>): void;
        static getEffectiveStatus<T extends $EntityAccess>(entity: T, visibility: $Visibility_): $Visibility;
        stopTracking(entity: $Object): void;
        tick(): void;
        count(): number;
        close(): void;
        isLoaded(uuid: $UUID_): boolean;
        gatherStats(): string;
        getCache(): $EntitySectionStorage<$Object>;
        visibleEntityStorage: $EntityLookup<$Object>;
        callbacks: $LevelCallback<$Object>;
        static LOGGER: $Logger;
        sectionStorage: $EntitySectionStorage<$Object>;
        knownUuids: $Set<$UUID>;
        constructor(entityClass: $Class<$Object>, callbacks: $LevelCallback<$Object>, permanentStorage: $EntityPersistentStorage<$Object>);
        get entityGetter(): $LevelEntityGetter<$Object>;
        get cache(): $EntitySectionStorage<$Object>;
    }
    export class $EntityInLevelCallback {
        static NULL: $EntityInLevelCallback;
    }
    export interface $EntityInLevelCallback {
        onRemove(reason: $Entity$RemovalReason_): void;
        onMove(): void;
    }
    export class $PersistentEntitySectionManager$ChunkLoadStatus extends $Enum<$PersistentEntitySectionManager$ChunkLoadStatus> {
    }
    /**
     * Values that may be interpreted as {@link $PersistentEntitySectionManager$ChunkLoadStatus}.
     */
    export type $PersistentEntitySectionManager$ChunkLoadStatus_ = "fresh" | "pending" | "loaded";
    export class $EntitySectionStorage<T extends $EntityAccess> implements $ChunkAwareEntityIterable<any> {
        getSection(sectionPos: number): $EntitySection<$Object>;
        lithium$IterateEntitiesInTrackedSections(): $Iterable<any>;
        getExistingSectionsInChunk(pos: number): $Stream<$EntitySection<$Object>>;
        getOrCreateSection(sectionPos: number): $EntitySection<$Object>;
        forEachAccessibleNonEmptySection(boundingBox: $AABB_, consumer: $AbortableIterationConsumer_<$EntitySection<$Object>>): void;
        handler$bom000$lithium$forEachInBox(arg0: $AABB_, arg1: $AbortableIterationConsumer_<any>, arg2: $CallbackInfo, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        getAllChunksWithExistingSections(): $LongSet;
        getExistingSectionPositionsInChunk(pos: number): $LongStream;
        getEntities<U extends T>(test: $EntityTypeTest<$Object, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): void;
        getEntities(boundingBox: $AABB_, consumer: $AbortableIterationConsumer_<$Object>): void;
        remove(sectionId: number): void;
        count(): number;
        constructor(entityClass: $Class<$Object>, initialSectionVisibility: $Long2ObjectFunction_<$Visibility>);
        get allChunksWithExistingSections(): $LongSet;
    }
    export class $TransientEntitySectionManager$Callback implements $EntityInLevelCallback {
    }
    export class $TransientEntitySectionManager<T extends $EntityAccess> implements $TransientEntitySectionManagerAccessor<any> {
        addEntity(entity: $Object): void;
        getEntityGetter(): $LevelEntityGetter<$Object>;
        stopTicking(pos: $ChunkPos): void;
        startTicking(pos: $ChunkPos): void;
        removeSectionIfEmpty(section: number, arg1: $EntitySection<$Object>): void;
        count(): number;
        gatherStats(): string;
        getCache(): $EntitySectionStorage<$Object>;
        entityStorage: $EntityLookup<$Object>;
        callbacks: $LevelCallback<$Object>;
        static LOGGER: $Logger;
        sectionStorage: $EntitySectionStorage<$Object>;
        constructor(clazz: $Class<$Object>, callbacks: $LevelCallback<$Object>);
        get entityGetter(): $LevelEntityGetter<$Object>;
        get cache(): $EntitySectionStorage<$Object>;
    }
    export class $LevelEntityGetterAdapter<T extends $EntityAccess> implements $LevelEntityGetter<T> {
        getAll(): $Iterable<T>;
        get<U extends T>(test: $EntityTypeTest<T, U>, bounds: $AABB_, consumer: $AbortableIterationConsumer_<U>): void;
        get(boundingBox: $AABB_, consumer: $Consumer_<T>): void;
        get<U extends T>(test: $EntityTypeTest<T, U>, consumer: $AbortableIterationConsumer_<U>): void;
        get(id: number): T;
        get(uuid: $UUID_): T;
        constructor(visibleEntities: $EntityLookup<T>, sectionStorage: $EntitySectionStorage<T>);
        get all(): $Iterable<T>;
    }
    export class $ChunkEntities<T> {
        getEntities(): $Stream<T>;
        isEmpty(): boolean;
        getPos(): $ChunkPos;
        constructor(pos: $ChunkPos, entities: $List_<T>);
        get entities(): $Stream<T>;
        get empty(): boolean;
        get pos(): $ChunkPos;
    }
}
