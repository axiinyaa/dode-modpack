import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $MapCodec_, $DataResult, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ChunkGeneratorAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $MobCategory_, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $BitStorage, $CrudeIncrementalIntIdentityHashBiMap } from "@package/net/minecraft/util";
import { $AttachmentType, $AttachmentType_, $IAttachmentHolder, $AttachmentHolder$AsField } from "@package/net/neoforged/neoforge/attachment";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $WorldBorderListenerOnce } from "@package/net/caffeinemc/mods/lithium/common/world/listeners";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $AttachmentType as $AttachmentType$1 } from "@package/net/fabricmc/fabric/api/attachment/v1";
import { $StructureSet_, $StructureSet, $StructureStart, $Structure_, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ShortList } from "@package/it/unimi/dsi/fastutil/shorts";
import { $StructurePlacement, $ConcentricRingsStructurePlacement } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $DebugLevelChunkExtension } from "@package/dev/ryanhcode/sable/mixinterface/loaded_chunk_debug";
import { $BiomeResolver_, $BiomeSource, $Biome, $FeatureSorter$StepFeatureData, $BiomeManager, $BiomeManager$NoiseBiomeSource, $Climate$Sampler_, $Biome_, $BiomeGenerationSettings, $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ChunkAccessAccessor } from "@package/com/copycatsplus/copycats/mixin/foundation/copycat";
import { $GameEventListenerRegistry } from "@package/net/minecraft/world/level/gameevent";
import { $Set_, $Map, $Map$Entry, $Set, $List, $Map_, $List_, $Collection } from "@package/java/util";
import { $LevelLightEngine, $ChunkSkyLightSources } from "@package/net/minecraft/world/level/lighting";
import { $WrappedBlockEntityTickInvokerAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/world/block_entity_ticking/sleeping";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $BiConsumer_, $Function_, $UnaryOperator_, $BiPredicate_, $BooleanSupplier_, $Supplier } from "@package/java/util/function";
import { $WorldGenRegion, $FullChunkStatus, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $RegistryAccess, $Registry, $HolderLookup$Provider, $Holder_, $Holder, $Direction_, $SectionPos, $IdMap, $Direction, $HolderLookup } from "@package/net/minecraft/core";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $ChunkStatus, $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $Enum, $RuntimeException, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $Heightmap$Types_, $BelowZeroRetrogen, $RandomState, $GenerationStep$Carving_, $NoiseChunk, $Heightmap$Types, $Heightmap } from "@package/net/minecraft/world/level/levelgen";
import { $PalettedContainerROExtension } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $LevelAccessor, $LightLayer_, $ChunkPos, $BlockGetter, $ClipContext, $NoiseColumn, $ClipBlockStateContext, $WorldGenLevel, $LevelHeightAccessor, $Level, $StructureManager, $Level_ } from "@package/net/minecraft/world/level";
import { $SerializableTickContainer_, $SerializableTickContainer, $TickContainerAccess, $ProtoChunkTicks, $LevelChunkTicks } from "@package/net/minecraft/world/ticks";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $Logger } from "@package/org/slf4j";
import { $FluidState, $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $Blender, $BlendingData } from "@package/net/minecraft/world/level/levelgen/blending";
import { $ClientboundLevelChunkPacketData$BlockEntityTagOutput } from "@package/net/minecraft/network/protocol/game";
import { $LongStream, $Stream } from "@package/java/util/stream";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $LevelChunkAuxiliaryLightManager, $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $BlockEntityType_, $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as storage from "@package/net/minecraft/world/level/chunk/storage";
export * as status from "@package/net/minecraft/world/level/chunk/status";

declare module "@package/net/minecraft/world/level/chunk" {
    export class $PalettedContainer$Configuration<T> extends $Record {
        createData(registry: $IdMap<T>, paletteResize: $PaletteResize_<T>, size: number): $PalettedContainer$Data<T>;
        factory(): $Palette$Factory;
        bits(): number;
        constructor(factory: $Palette$Factory_, bits: number);
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$Configuration}.
     */
    export type $PalettedContainer$Configuration_<T> = { bits?: number, factory?: $Palette$Factory_,  } | [bits?: number, factory?: $Palette$Factory_, ];
    /**
     * A representation of a 16x16x16 cube of nibbles (half-bytes).
     */
    export class $DataLayer {
        isDefinitelyHomogenous(): boolean;
        layerToString(unused: number): string;
        isDefinitelyFilledWith(value: number): boolean;
        /**
         * Note all coordinates must be in the range [0, 16), they **are not checked**, and will either silently overrun the array or throw an exception.
         * @return The value of this data layer at the provided position.
         */
        get(x: number, y: number, z: number): number;
        isEmpty(): boolean;
        fill(size: number): void;
        /**
         * Sets the value of this data layer at the provided position.
         * Note all coordinates must be in the range [0, 16), they **are not checked**, and will either silently overrun the array or throw an exception.
         */
        set(x: number, y: number, z: number, value: number): void;
        copy(): $DataLayer;
        getData(): number[];
        data: number[];
        static LAYER_COUNT: number;
        static SIZE: number;
        static LAYER_SIZE: number;
        constructor();
        constructor(data: number[]);
        constructor(size: number);
        get definitelyHomogenous(): boolean;
        get empty(): boolean;
    }
    export class $ChunkGenerator implements $ChunkGeneratorAccessor {
        createState(structureSetLookup: $HolderLookup<$StructureSet_>, randomState: $RandomState, seed: number): $ChunkGeneratorStructureState;
        findNearestMapStructure(level: $ServerLevel, structure: $HolderSet_<$Structure>, pos: $BlockPos_, searchRadius: number, skipKnownStructures: boolean): $Pair<$BlockPos, $Holder<$Structure>>;
        getGenDepth(): number;
        getFirstOccupiedHeight(x: number, z: number, type: $Heightmap$Types_, level: $LevelHeightAccessor, random: $RandomState): number;
        getBaseColumn(x: number, z: number, height: $LevelHeightAccessor, random: $RandomState): $NoiseColumn;
        getBaseHeight(x: number, z: number, type: $Heightmap$Types_, level: $LevelHeightAccessor, random: $RandomState): number;
        /**
         * @deprecated
         */
        getBiomeGenerationSettings(biome: $Holder_<$Biome>): $BiomeGenerationSettings;
        addDebugScreenInfo(info: $List_<string>, random: $RandomState, pos: $BlockPos_): void;
        createBiomes(randomState: $RandomState, blender: $Blender, structureManager: $StructureManager, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        buildSurface(level: $WorldGenRegion, structureManager: $StructureManager, random: $RandomState, chunk: $ChunkAccess): void;
        applyCarvers(level: $WorldGenRegion, seed: number, arg2: $RandomState, random: $BiomeManager, biomeManager: $StructureManager, structureManager: $ChunkAccess, chunk: $GenerationStep$Carving_): void;
        fillFromNoise(blender: $Blender, randomState: $RandomState, structureManager: $StructureManager, chunk: $ChunkAccess): $CompletableFuture<$ChunkAccess>;
        spawnOriginalMobs(level: $WorldGenRegion): void;
        refreshFeaturesPerStep(): void;
        getTypeNameForDataFixer(): ($ResourceKey<$MapCodec<$ChunkGenerator>>) | undefined;
        getNearestGeneratedStructure(structureHoldersSet: $Set_<$Holder_<$Structure>>, level: $ServerLevel, structureManager: $StructureManager, pos: $BlockPos_, skipKnownStructures: boolean, placement: $ConcentricRingsStructurePlacement): $Pair<$BlockPos, $Holder<$Structure>>;
        applyBiomeDecoration(level: $WorldGenLevel, chunk: $ChunkAccess, structureManager: $StructureManager): void;
        getSpawnHeight(level: $LevelHeightAccessor): number;
        getMobsAt(biome: $Holder_<$Biome>, structureManager: $StructureManager, category: $MobCategory_, pos: $BlockPos_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        createStructures(registryAccess: $RegistryAccess, structureState: $ChunkGeneratorStructureState, structureManager: $StructureManager, chunk: $ChunkAccess, structureTemplateManager: $StructureTemplateManager): void;
        createReferences(level: $WorldGenLevel, structureManager: $StructureManager, chunk: $ChunkAccess): void;
        getFirstFreeHeight(x: number, z: number, type: $Heightmap$Types_, level: $LevelHeightAccessor, random: $RandomState): number;
        getMinY(): number;
        validate(): void;
        codec(): $MapCodec<$ChunkGenerator>;
        getSeaLevel(): number;
        getBiomeSource(): $BiomeSource;
        setBiomeSource(biomeSource: $BiomeSource): void;
        setFeaturesPerStep(supplier: $Supplier_<$List<$FeatureSorter$StepFeatureData>>): void;
        getGetter(): $Function<$Holder<$Biome>, $BiomeGenerationSettings>;
        featuresPerStep: $Supplier<$List<$FeatureSorter$StepFeatureData>>;
        static CODEC: $Codec<$ChunkGenerator>;
        biomeSource: $BiomeSource;
        constructor(biomeSource: $BiomeSource);
        constructor(biomeSource: $BiomeSource, generationSettingsGetter: $Function_<$Holder<$Biome>, $BiomeGenerationSettings>);
        get genDepth(): number;
        get typeNameForDataFixer(): ($ResourceKey<$MapCodec<$ChunkGenerator>>) | undefined;
        get minY(): number;
        get seaLevel(): number;
        get getter(): $Function<$Holder<$Biome>, $BiomeGenerationSettings>;
    }
    export class $PalettedContainerRO$Unpacker<T, C extends $PalettedContainerRO<T>> {
    }
    export interface $PalettedContainerRO$Unpacker<T, C extends $PalettedContainerRO<T>> {
        read(registry: $IdMap<T>, strategy: $PalettedContainer$Strategy, packedData: $PalettedContainerRO$PackedData_<T>): $DataResult<C>;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainerRO$Unpacker}.
     */
    export type $PalettedContainerRO$Unpacker_<T, C> = ((arg0: $IdMap<T>, arg1: $PalettedContainer$Strategy, arg2: $PalettedContainerRO$PackedData<T>) => $DataResult<C>);
    export class $PaletteResize<T> {
    }
    export interface $PaletteResize<T> {
        /**
         * Called when the underlying palette needs to resize itself to support additional objects.
         * @return The new integer mapping for the object added.
         */
        onResize(bits: number, objectAdded: T): number;
    }
    /**
     * Values that may be interpreted as {@link $PaletteResize}.
     */
    export type $PaletteResize_<T> = ((arg0: number, arg1: T) => number);
    export class $BlockColumn {
    }
    export interface $BlockColumn {
        getBlock(pos: number): $BlockState;
        setBlock(pos: number, state: $BlockState_): void;
    }
    export class $CarvingMask$Mask {
    }
    export interface $CarvingMask$Mask {
        test(x: number, y: number, z: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CarvingMask$Mask}.
     */
    export type $CarvingMask$Mask_ = ((arg0: number, arg1: number, arg2: number) => boolean);
    export class $Palette$Factory {
    }
    export interface $Palette$Factory {
        create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
    }
    /**
     * Values that may be interpreted as {@link $Palette$Factory}.
     */
    export type $Palette$Factory_ = ((arg0: number, arg1: $IdMap<any>, arg2: $PaletteResize<any>, arg3: $List<any>) => $Palette<any>);
    export class $LinearPalette<T> implements $Palette<T> {
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        valueFor(id: number): T;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
        idFor(state: T): number;
        get serializedSize(): number;
        get size(): number;
    }
    export class $ChunkGeneratorStructureState {
        ensureStructuresGenerated(): void;
        randomState(): $RandomState;
        getLevelSeed(): number;
        hasStructureChunkInRange(structureSet: $Holder_<$StructureSet>, x: number, z: number, range: number): boolean;
        getRingPositionsFor(placement: $ConcentricRingsStructurePlacement): $List<$ChunkPos>;
        static createForFlat(randomState: $RandomState, levelSeed: number, arg2: $BiomeSource, biomeSource: $Stream<$Holder_<$StructureSet>>): $ChunkGeneratorStructureState;
        static createForNormal(randomState: $RandomState, seed: number, arg2: $BiomeSource, biomeSource: $HolderLookup<$StructureSet_>): $ChunkGeneratorStructureState;
        getPlacementsForStructure(structure: $Holder_<$Structure>): $List<$StructurePlacement>;
        possibleStructureSets(): $List<$Holder<$StructureSet>>;
        get levelSeed(): number;
    }
    export class $StructureAccess {
    }
    export interface $StructureAccess {
        getStartForStructure(structure: $Structure_): $StructureStart;
        setStartForStructure(structure: $Structure_, structureStart: $StructureStart): void;
        getReferencesForStructure(structure: $Structure_): $LongSet;
        addReferenceForStructure(structure: $Structure_, reference: number): void;
        getAllReferences(): $Map<$Structure, $LongSet>;
        setAllReferences(structureReferencesMap: $Map_<$Structure_, $LongSet>): void;
    }
    export class $PalettedContainerRO$PackedData<T> extends $Record {
        paletteEntries(): $List<T>;
        storage(): ($LongStream) | undefined;
        constructor(arg0: $List_<T>, arg1: ($LongStream) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainerRO$PackedData}.
     */
    export type $PalettedContainerRO$PackedData_<T> = { storage?: ($LongStream) | undefined, paletteEntries?: $List_<any>,  } | [storage?: ($LongStream) | undefined, paletteEntries?: $List_<any>, ];
    /**
     * During world generation, adjacent chunks may be fully generated (and thus be level chunks), but are often needed in proto chunk form. This wraps a completely generated chunk as a proto chunk.
     */
    export class $ImposterProtoChunk extends $ProtoChunk {
        getWrapped(): $LevelChunk;
        upgradeData: $UpgradeData;
        chunkPos: $ChunkPos;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(wrapped: $LevelChunk, allowWrites: boolean);
        get wrapped(): $LevelChunk;
    }
    export class $PalettedContainer$Strategy {
        calculateBitsForSerialization<A>(registry: $IdMap<A>, size: number): number;
        size(): number;
        getIndex(x: number, y: number, z: number): number;
        getConfiguration<A>(registry: $IdMap<A>, size: number): $PalettedContainer$Configuration<A>;
        static SECTION_STATES: $PalettedContainer$Strategy;
        static SINGLE_VALUE_PALETTE_FACTORY: $Palette$Factory;
        static GLOBAL_PALETTE_FACTORY: $Palette$Factory;
        static LINEAR_PALETTE_FACTORY: $Palette$Factory;
        static SECTION_BIOMES: $PalettedContainer$Strategy;
        static HASHMAP_PALETTE_FACTORY: $Palette$Factory;
        constructor(sizeBits: number);
    }
    export class $LevelChunkSection$1BlockCounter implements $PalettedContainer$CountConsumer<$BlockState> {
    }
    export class $ChunkAccess$TicksToSave extends $Record {
        blocks(): $SerializableTickContainer<$Block>;
        fluids(): $SerializableTickContainer<$Fluid>;
        constructor(blocks: $SerializableTickContainer_<$Block>, fluids: $SerializableTickContainer_<$Fluid>);
    }
    /**
     * Values that may be interpreted as {@link $ChunkAccess$TicksToSave}.
     */
    export type $ChunkAccess$TicksToSave_ = { blocks?: $SerializableTickContainer_<$Block>, fluids?: $SerializableTickContainer_<$Fluid>,  } | [blocks?: $SerializableTickContainer_<$Block>, fluids?: $SerializableTickContainer_<$Fluid>, ];
    export class $LevelChunk$BoundTickingBlockEntity<T extends $BlockEntity> implements $TickingBlockEntity, $WorldBorderListenerOnce {
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        onBorderSizeSet(border: $WorldBorder, size: number): void;
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, size: number): void;
        onBorderSetDamagePerBlock(border: $WorldBorder, size: number): void;
        onBorderSetWarningTime(border: $WorldBorder, warningBlocks: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, warningBlocks: number): void;
        onAreaReplaced(arg0: $WorldBorder): void;
    }
    export class $LightChunk {
    }
    export interface $LightChunk extends $BlockGetter {
        findBlockLightSources(output: $BiConsumer_<$BlockPos, $BlockState>): void;
        getSkyLightSources(): $ChunkSkyLightSources;
        get skyLightSources(): $ChunkSkyLightSources;
    }
    export class $ChunkAccess implements $BlockGetter, $BiomeManager$NoiseBiomeSource, $LightChunk, $StructureAccess, $IAttachmentHolder, $ChunkAccessAccessor {
        addEntity(entity: $Entity): void;
        getAllStarts(): $Map<$Structure, $StructureStart>;
        getSection(index: number): $LevelChunkSection;
        markPosForPostprocessing(pos: $BlockPos_): void;
        getHighestFilledSectionIndex(): number;
        /**
         * @deprecated
         */
        getHighestSectionPosition(): number;
        getOrCreateHeightmapUnprimed(type: $Heightmap$Types_): $Heightmap;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isLightCorrect(): boolean;
        getListenerRegistry(sectionY: number): $GameEventListenerRegistry;
        getBlockEntitiesPos(): $Set<$BlockPos>;
        getHeightmaps(): $Collection<$Map$Entry<$Heightmap$Types, $Heightmap>>;
        setHeightmap(type: $Heightmap$Types_, data: number[]): void;
        hasPrimedHeightmap(type: $Heightmap$Types_): boolean;
        getStartForStructure(structure: $Structure_): $StructureStart;
        setStartForStructure(structure: $Structure_, structureStart: $StructureStart): void;
        setAllStarts(structureReferencesMap: $Map_<$Structure_, $StructureStart>): void;
        getReferencesForStructure(structure: $Structure_): $LongSet;
        addReferenceForStructure(structure: $Structure_, reference: number): void;
        getAllReferences(): $Map<$Structure, $LongSet>;
        setAllReferences(structureReferencesMap: $Map_<$Structure_, $LongSet>): void;
        isYSpaceEmpty(startY: number, endY: number): boolean;
        isSectionEmpty(y: number): boolean;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isUnsaved(): boolean;
        getPersistedStatus(): $ChunkStatus;
        getHighestGeneratedStatus(): $ChunkStatus;
        getBelowZeroRetrogen(): $BelowZeroRetrogen;
        getPostProcessing(): $ShortList[];
        addPackedPostProcess(packedPosition: number, index: number): void;
        static getOrCreateOffsetList(packedPositions: $ShortList[], index: number): $ShortList;
        setBlockEntityNbt(tag: $CompoundTag_): void;
        getBlockEntityNbt(pos: $BlockPos_): $CompoundTag;
        getBlockEntityNbtForSaving(pos: $BlockPos_, registries: $HolderLookup$Provider): $CompoundTag;
        findBlockLightSources(output: $BiConsumer_<$BlockPos, $BlockState>): void;
        /**
         * @deprecated
         */
        findBlocks(arg0: $BiPredicate_<$BlockState, $BlockPos>, arg1: $BiConsumer_<$BlockPos, $BlockState>): void;
        findBlocks(predicate: $Predicate_<$BlockState>, output: $BiConsumer_<$BlockPos, $BlockState>): void;
        findBlocks(arg0: $Predicate_<$BlockState>, arg1: $BiPredicate_<$BlockState, $BlockPos>, arg2: $BiConsumer_<$BlockPos, $BlockState>): void;
        getTicksForSerialization(): $ChunkAccess$TicksToSave;
        getUpgradeData(): $UpgradeData;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isOldNoiseGeneration(): boolean;
        getBlendingData(): $BlendingData;
        setBlendingData(blendingData: $BlendingData): void;
        incrementInhabitedTime(amount: number): void;
        setInhabitedTime(amount: number): void;
        setLightCorrect(lightCorrect: boolean): void;
        getOrCreateNoiseChunk(noiseChunkCreator: $Function_<$ChunkAccess, $NoiseChunk>): $NoiseChunk;
        /**
         * @deprecated
         */
        carverBiome(caverBiomeSettingsSupplier: $Supplier_<$BiomeGenerationSettings>): $BiomeGenerationSettings;
        fillBiomesFromNoise(resolver: $BiomeResolver_, sampler: $Climate$Sampler_): void;
        getHeightAccessorForGeneration(): $LevelHeightAccessor;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        hasAnyStructureReferences(): boolean;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isUpgrading(): boolean;
        initializeLightSources(): void;
        getSkyLightSources(): $ChunkSkyLightSources;
        getAttachmentHolder(): $AttachmentHolder$AsField;
        writeAttachmentsToNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        readAttachmentsFromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        removeData<T>(arg0: $AttachmentType_<T>): T;
        getHeight(type: $Heightmap$Types_, x: number, z: number): number;
        getHeight(): number;
        setData<T>(arg0: $AttachmentType_<T>, arg1: T): T;
        getLevel(): $Level;
        getData<T>(arg0: $AttachmentType_<T>): T;
        getSections(): $LevelChunkSection[];
        getMinBuildHeight(): number;
        getPos(): $ChunkPos;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        hasAttachments(): boolean;
        /**
         * Returns `true` if there is a data attachment of the give type, `false` otherwise.
         */
        hasData(type: $AttachmentType_<never>): boolean;
        getExistingDataOrNull<T>(arg0: $AttachmentType_<T>): T;
        setBlockState(pos: $BlockPos_, state: $BlockState_, isMoving: boolean): $BlockState;
        setBlockEntity(blockEntity: $BlockEntity): void;
        removeBlockEntity(pos: $BlockPos_): void;
        setUnsaved(lightCorrect: boolean): void;
        getInhabitedTime(): number;
        getBlockTicks(): $TickContainerAccess<$Block>;
        getFluidTicks(): $TickContainerAccess<$Fluid>;
        /**
         * Gets the biome at the given quart positions.
         * Note that the coordinates passed into this method are 1/4 the scale of block coordinates.
         */
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        clip(failContext: $ClipContext): $BlockHitResult;
        getLightEmission(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(pos: $BlockPos_): number;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        getMaxLightLevel(): number;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        getBlockStates(area: $AABB_): $Stream<$BlockState>;
        removeData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        setData<T>(arg0: $Supplier_<$AttachmentType<T>>, arg1: T): T;
        getData<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
        /**
         * @return an optional possibly containing a data attachment value of the given type
         * 
         * If there is no data attachment of the given type, an empty optional is returned.
         */
        getExistingData<T>(type: $Supplier_<$AttachmentType<T>>): (T) | undefined;
        /**
         * @return an optional possibly containing a data attachment value of the given type
         * 
         * If there is no data attachment of the given type, an empty optional is returned.
         */
        getExistingData<T>(type: $AttachmentType_<T>): (T) | undefined;
        /**
         * Syncs a data attachment of the given type with all relevant clients.
         * 
         * If there is currently no attachment of the given type,
         * the removal of the attachment is synced to the client.
         */
        syncData(type: $AttachmentType_<never>): void;
        /**
         * Syncs a data attachment of the given type with all relevant clients.
         * 
         * If there is currently no attachment of the given type,
         * the removal of the attachment is synced to the client.
         */
        syncData(type: $Supplier_<$AttachmentType<never>>): void;
        /**
         * Returns `true` if there is a data attachment of the give type, `false` otherwise.
         */
        hasData<T>(type: $Supplier_<$AttachmentType<T>>): boolean;
        getExistingDataOrNull<T>(arg0: $Supplier_<$AttachmentType<T>>): T;
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
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<$Biome>;
        getAttached<A>(arg0: $AttachmentType$1<A>): A;
        setAttached<A>(arg0: $AttachmentType$1<A>, arg1: A): A;
        getAttachedOrThrow<A>(arg0: $AttachmentType$1<A>): A;
        getAttachedOrSet<A>(arg0: $AttachmentType$1<A>, arg1: A): A;
        getAttachedOrCreate<A>(arg0: $AttachmentType$1<A>, arg1: $Supplier_<A>): A;
        getAttachedOrCreate<A>(arg0: $AttachmentType$1<A>): A;
        getAttachedOrElse<A>(arg0: $AttachmentType$1<A>, arg1: A): A;
        getAttachedOrGet<A>(arg0: $AttachmentType$1<A>, arg1: $Supplier_<A>): A;
        hasAttached(arg0: $AttachmentType$1<never>): boolean;
        removeAttached<A>(arg0: $AttachmentType$1<A>): A;
        modifyAttached<A>(arg0: $AttachmentType$1<A>, arg1: $UnaryOperator_<A>): A;
        getBlockEntities(): $Map<$BlockPos, $BlockEntity>;
        upgradeData: $UpgradeData;
        chunkPos: $ChunkPos;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(chunkPos: $ChunkPos, upgradeData: $UpgradeData, levelHeightAccessor: $LevelHeightAccessor, biomeRegistry: $Registry<$Biome_>, inhabitedTime: number, arg5: $LevelChunkSection[] | null, sections: $BlendingData | null);
        get highestFilledSectionIndex(): number;
        get highestSectionPosition(): number;
        get blockEntitiesPos(): $Set<$BlockPos>;
        get persistedStatus(): $ChunkStatus;
        get highestGeneratedStatus(): $ChunkStatus;
        get belowZeroRetrogen(): $BelowZeroRetrogen;
        get ticksForSerialization(): $ChunkAccess$TicksToSave;
        get oldNoiseGeneration(): boolean;
        get heightAccessorForGeneration(): $LevelHeightAccessor;
        get upgrading(): boolean;
        get attachmentHolder(): $AttachmentHolder$AsField;
        get level(): $Level;
        get minBuildHeight(): number;
        get pos(): $ChunkPos;
        get blockTicks(): $TickContainerAccess<$Block>;
        get fluidTicks(): $TickContainerAccess<$Fluid>;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $LevelChunk$RebindableTickingBlockEntityWrapper implements $TickingBlockEntity, $WrappedBlockEntityTickInvokerAccessor {
    }
    export class $LevelChunk$EntityCreationType extends $Enum<$LevelChunk$EntityCreationType> {
        static values(): $LevelChunk$EntityCreationType[];
        static valueOf(arg0: string): $LevelChunk$EntityCreationType;
        static QUEUED: $LevelChunk$EntityCreationType;
        static CHECK: $LevelChunk$EntityCreationType;
        static IMMEDIATE: $LevelChunk$EntityCreationType;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunk$EntityCreationType}.
     */
    export type $LevelChunk$EntityCreationType_ = "immediate" | "queued" | "check";
    export class $PalettedContainer$Data<T> extends $Record {
        getSerializedSize(): number;
        copyFrom(palette: $Palette<T>, bitStorage: $BitStorage): void;
        write(buffer: $FriendlyByteBuf): void;
        configuration(): $PalettedContainer$Configuration<T>;
        copy(): $PalettedContainer$Data<T>;
        storage(): $BitStorage;
        palette(): $Palette<T>;
        constructor(configuration: $PalettedContainer$Configuration_<T>, storage: $BitStorage, palette: $Palette<T>);
        get serializedSize(): number;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$Data}.
     */
    export type $PalettedContainer$Data_<T> = { configuration?: $PalettedContainer$Configuration_<any>, storage?: $BitStorage, palette?: $Palette<any>,  } | [configuration?: $PalettedContainer$Configuration_<any>, storage?: $BitStorage, palette?: $Palette<any>, ];
    export class $PalettedContainer<T> implements $PaletteResize<T>, $PalettedContainerRO<T>, $PalettedContainerROExtension<any> {
        /**
         * Called when the underlying palette needs to resize itself to support additional objects.
         * @return The new integer mapping for the object added.
         */
        onResize(bits: number, objectAdded: T): number;
        maybeHas(predicate: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        static codecRW<T>(registry: $IdMap<T>, codec: $Codec<T>, strategy: $PalettedContainer$Strategy, value: T): $Codec<$PalettedContainer<T>>;
        sodium$unpack(arg0: $Object[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        sodium$unpack(arg0: $Object[]): void;
        getAndSetUnchecked(x: number, y: number, z: number, state: T): T;
        recreate(): $PalettedContainer<T>;
        static codecRO<T>(registry: $IdMap<T>, codec: $Codec<T>, strategy: $PalettedContainer$Strategy, value: T): $Codec<$PalettedContainerRO<T>>;
        handler$bng000$lithium$removeLockHelper(arg0: $CallbackInfo): void;
        handler$bnj000$lithium$count(arg0: $PalettedContainer$CountConsumer_<any>, arg1: $CallbackInfo): void;
        sodium$copy(): $PalettedContainerRO<any>;
        pack(registry: $IdMap<any>, strategy: $PalettedContainer$Strategy): $PalettedContainerRO$PackedData<any>;
        getAll(consumer: $Consumer_<T>): void;
        get(x: number, y: number, z: number): T;
        get(index: number): T;
        /**
         * Counts the number of instances of each state in the container.
         * The provided consumer is invoked for each state with the number of instances.
         */
        count(countConsumer: $PalettedContainer$CountConsumer_<T>): void;
        set(x: number, y: number, z: number, state: T): void;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $PalettedContainer<T>;
        getAndSet(x: number, y: number, z: number, state: T): T;
        release(): void;
        acquire(): void;
        constructor(registry: $IdMap<T>, palette: T, strategy: $PalettedContainer$Strategy);
        constructor(registry: $IdMap<T>, strategy: $PalettedContainer$Strategy, configuration: $PalettedContainer$Configuration_<T>, storage: $BitStorage, values: $List_<T>);
        get serializedSize(): number;
    }
    export class $PalettedContainer$CountConsumer<T> {
    }
    export interface $PalettedContainer$CountConsumer<T> {
        accept(state: T, count: number): void;
    }
    /**
     * Values that may be interpreted as {@link $PalettedContainer$CountConsumer}.
     */
    export type $PalettedContainer$CountConsumer_<T> = ((arg0: T, arg1: number) => void);
    export class $UpgradeData {
        upgrade(chunk: $LevelChunk): void;
        isEmpty(): boolean;
        write(): $CompoundTag;
        static CHUNKY_FIXERS: $Set<$UpgradeData$BlockFixer>;
        static EMPTY: $UpgradeData;
        static MAP: $Map<$Block, $UpgradeData$BlockFixer>;
        constructor(tag: $CompoundTag_, level: $LevelHeightAccessor);
        get empty(): boolean;
    }
    export class $PalettedContainerRO<T> {
    }
    export interface $PalettedContainerRO<T> {
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        recreate(): $PalettedContainer<T>;
        pack(registry: $IdMap<T>, strategy: $PalettedContainer$Strategy): $PalettedContainerRO$PackedData<T>;
        getAll(consumer: $Consumer_<T>): void;
        get(x: number, y: number, z: number): T;
        count(countConsumer: $PalettedContainer$CountConsumer_<T>): void;
        write(buffer: $FriendlyByteBuf): void;
        get serializedSize(): number;
    }
    export class $LevelChunk$PostLoadProcessor {
    }
    export interface $LevelChunk$PostLoadProcessor {
        run(chunk: $LevelChunk): void;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunk$PostLoadProcessor}.
     */
    export type $LevelChunk$PostLoadProcessor_ = ((arg0: $LevelChunk) => void);
    export class $UpgradeData$BlockFixers extends $Enum<$UpgradeData$BlockFixers> implements $UpgradeData$BlockFixer {
        processChunk(level: $LevelAccessor): void;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData$BlockFixers}.
     */
    export type $UpgradeData$BlockFixers_ = "blacklist" | "default" | "chest" | "leaves" | "stem_block";
    export class $SingleValuePalette<T> implements $Palette<T> {
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        valueFor(id: number): T;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, value: $List_<A>): $Palette<A>;
        idFor(state: T): number;
        constructor(registry: $IdMap<T>, resizeHandler: $PaletteResize_<T>, value: $List_<T>);
        get serializedSize(): number;
        get size(): number;
    }
    export class $MissingPaletteEntryException extends $RuntimeException {
        constructor(index: number);
    }
    export class $LevelChunkSection {
        readBiomes(buffer: $FriendlyByteBuf): void;
        /**
         * @return `true` if this section has any states matching the given predicate. As the internal representation uses a `Palette`, this is more efficient than looping through every position in the section, or indeed the chunk.
         */
        maybeHas(predicate: $Predicate_<$BlockState>): boolean;
        fillBiomesFromNoise(biomeResolver: $BiomeResolver_, climateSampler: $Climate$Sampler_, x: number, y: number, z: number): void;
        getBiomes(): $PalettedContainerRO<$Holder<$Biome>>;
        getSerializedSize(): number;
        recalcBlockCounts(): void;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        isRandomlyTickingBlocks(): boolean;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        isRandomlyTickingFluids(): boolean;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        release(): void;
        acquire(): void;
        getStates(): $PalettedContainer<$BlockState>;
        getBlockState(x: number, y: number, z: number): $BlockState;
        getFluidState(x: number, y: number, z: number): $FluidState;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        isRandomlyTicking(): boolean;
        setBlockState(x: number, y: number, z: number, state: $BlockState_, useLocks: boolean): $BlockState;
        setBlockState(x: number, y: number, z: number, state: $BlockState_): $BlockState;
        /**
         * @return `true` if this section consists only of air-like blocks.
         */
        hasOnlyAir(): boolean;
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        static SECTION_WIDTH: number;
        static SECTION_HEIGHT: number;
        static BIOME_CONTAINER_BITS: number;
        static SECTION_SIZE: number;
        constructor(states: $PalettedContainer<$BlockState_>, biomes: $PalettedContainerRO<$Holder_<$Biome>>);
        constructor(biomeRegistry: $Registry<$Biome_>);
        get biomes(): $PalettedContainerRO<$Holder<$Biome>>;
        get serializedSize(): number;
        get randomlyTickingBlocks(): boolean;
        get randomlyTickingFluids(): boolean;
        get states(): $PalettedContainer<$BlockState>;
        get randomlyTicking(): boolean;
    }
    export class $LevelChunk extends $ChunkAccess implements $IAttachmentHolder, $DebugLevelChunkExtension {
        clearAllBlockEntities(): void;
        unregisterTickContainerFromLevel(level: $ServerLevel): void;
        unpackTicks(pos: number): void;
        redirect$geh000$sable$getLightEngine(arg0: $ChunkSource): $LevelLightEngine;
        isTicking(pos: $BlockPos_): boolean;
        runPostLoad(): void;
        replaceWithPacketData(buffer: $FriendlyByteBuf, tag: $CompoundTag_, outputTagConsumer: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): void;
        replaceBiomes(buffer: $FriendlyByteBuf): void;
        setLoaded(loaded: boolean): void;
        postProcessGeneration(): void;
        registerTickContainerInLevel(level: $ServerLevel): void;
        setFullStatus(fullStatus: $Supplier_<$FullChunkStatus>): void;
        registerAllBlockEntitiesAfterLevelLoad(): void;
        setGameEventListenerRegistrySections(arg0: $Int2ObjectMap<any>): void;
        sable$setUpdated(): void;
        sable$getLastUpdate(): number;
        /**
         * Returns `true` if there is any data attachments, `false` otherwise.
         */
        isEmpty(): boolean;
        getBlockEntity(pos: $BlockPos_, creationType: $LevelChunk$EntityCreationType_): $BlockEntity;
        getFluidState(x: number, y: number, z: number): $FluidState;
        getFullStatus(): $FullChunkStatus;
        addAndRegisterBlockEntity(blockEntity: $BlockEntity): void;
        getAuxLightManager(arg0: $ChunkPos): $LevelChunkAuxiliaryLightManager;
        upgradeData: $UpgradeData;
        xaero_wm_chunkClean: boolean;
        chunkPos: $ChunkPos;
        level: $Level;
        xaero_chunkClean: boolean;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        static LOGGER: $Logger;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(level: $Level_, pos: $ChunkPos);
        constructor(level: $Level_, pos: $ChunkPos, data: $UpgradeData, blockTicks: $LevelChunkTicks<$Block_>, fluidTicks: $LevelChunkTicks<$Fluid_>, inhabitedTime: number, arg6: $LevelChunkSection[] | null, sections: $LevelChunk$PostLoadProcessor_ | null, postLoad: $BlendingData | null);
        constructor(level: $ServerLevel, chunk: $ProtoChunk, postLoad: $LevelChunk$PostLoadProcessor_ | null);
        set loaded(value: boolean);
        set gameEventListenerRegistrySections(value: $Int2ObjectMap<any>);
        get empty(): boolean;
    }
    export class $ChunkSource implements $LightChunkGetter, $AutoCloseable {
        updateChunkForced(pos: $ChunkPos, add: boolean): void;
        getChunkNow(chunkX: number, chunkZ: number): $LevelChunk;
        getLoadedChunksCount(): number;
        tick(hasTimeLeft: $BooleanSupplier_, tickChunks: boolean): void;
        close(): void;
        getChunk(chunkX: number, chunkZ: number, load: boolean): $LevelChunk;
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $ChunkAccess;
        /**
         * @return `true` if a chunk is loaded at the provided position, without forcing a chunk load.
         */
        hasChunk(chunkX: number, chunkZ: number): boolean;
        getLightEngine(): $LevelLightEngine;
        setSpawnSettings(hostile: boolean, peaceful: boolean): void;
        /**
         * @return A human-readable string representing data about this chunk source.
         */
        gatherStats(): string;
        getChunkForLighting(chunkX: number, chunkZ: number): $LightChunk;
        onLightUpdate(layer: $LightLayer_, pos: $SectionPos): void;
        constructor();
        get loadedChunksCount(): number;
        get lightEngine(): $LevelLightEngine;
    }
    export class $ProtoChunk extends $ChunkAccess {
        addEntity(tag: $CompoundTag_): void;
        unpackBlockTicks(): $LevelChunkTicks<$Block>;
        unpackFluidTicks(): $LevelChunkTicks<$Fluid>;
        getBlockEntityNbts(): $Map<$BlockPos, $CompoundTag>;
        static unpackOffsetCoordinates(packedPos: number, yOffset: number, chunkPos: $ChunkPos): $BlockPos;
        getCarvingMask(step: $GenerationStep$Carving_): $CarvingMask;
        getOrCreateCarvingMask(step: $GenerationStep$Carving_): $CarvingMask;
        setPersistedStatus(status: $ChunkStatus_): void;
        setLightEngine(lightEngine: $LevelLightEngine): void;
        setBelowZeroRetrogen(belowZeroRetrogen: $BelowZeroRetrogen | null): void;
        setCarvingMask(step: $GenerationStep$Carving_, carvingMask: $CarvingMask): void;
        getEntities(): $List<$CompoundTag>;
        static packOffsetCoordinates(pos: $BlockPos_): number;
        upgradeData: $UpgradeData;
        chunkPos: $ChunkPos;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(chunkPos: $ChunkPos, upgradeData: $UpgradeData, sections: $LevelChunkSection[] | null, blockTicks: $ProtoChunkTicks<$Block_>, liquidTicks: $ProtoChunkTicks<$Fluid_>, levelHeightAccessor: $LevelHeightAccessor, biomeRegistry: $Registry<$Biome_>, blendingData: $BlendingData | null);
        constructor(chunkPos: $ChunkPos, upgradeData: $UpgradeData, levelHeightAccessor: $LevelHeightAccessor, biomeRegistry: $Registry<$Biome_>, blendingData: $BlendingData | null);
        get blockEntityNbts(): $Map<$BlockPos, $CompoundTag>;
        set persistedStatus(value: $ChunkStatus_);
        set lightEngine(value: $LevelLightEngine);
        set belowZeroRetrogen(value: $BelowZeroRetrogen | null);
        get entities(): $List<$CompoundTag>;
    }
    export class $HashMapPalette<T> implements $Palette<T> {
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        valueFor(id: number): T;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
        getEntries(): $List<T>;
        idFor(state: T): number;
        values: $CrudeIncrementalIntIdentityHashBiMap<T>;
        constructor(registry: $IdMap<T>, bits: number, resizeHandler: $PaletteResize_<T>, values: $List_<T>);
        constructor(registry: $IdMap<T>, bits: number, resizeHandler: $PaletteResize_<T>);
        get serializedSize(): number;
        get size(): number;
        get entries(): $List<T>;
    }
    export class $UpgradeData$BlockFixer {
    }
    export interface $UpgradeData$BlockFixer {
        processChunk(level: $LevelAccessor): void;
        updateShape(state: $BlockState_, direction: $Direction_, offsetState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, offsetPos: $BlockPos_): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $UpgradeData$BlockFixer}.
     */
    export type $UpgradeData$BlockFixer_ = ((arg0: $BlockState, arg1: $Direction, arg2: $BlockState, arg3: $LevelAccessor, arg4: $BlockPos, arg5: $BlockPos) => $BlockState_);
    export class $BulkSectionAccess implements $AutoCloseable {
        getSection(pos: $BlockPos_): $LevelChunkSection;
        close(): void;
        getBlockState(pos: $BlockPos_): $BlockState;
        constructor(level: $LevelAccessor);
    }
    export class $ChunkGenerators {
        static bootstrap(registry: $Registry<$MapCodec_<$ChunkGenerator>>): $MapCodec<$ChunkGenerator>;
        constructor();
    }
    export class $LightChunkGetter {
    }
    export interface $LightChunkGetter {
        onLightUpdate(layer: $LightLayer_, pos: $SectionPos): void;
        getLevel(): $BlockGetter;
        getChunkForLighting(chunkX: number, chunkZ: number): $LightChunk;
        get level(): $BlockGetter;
    }
    export class $GlobalPalette<T> implements $Palette<T> {
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        valueFor(id: number): T;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        static create<A>(bits: number, registry: $IdMap<A>, resizeHandler: $PaletteResize_<A>, values: $List_<A>): $Palette<A>;
        idFor(state: T): number;
        constructor(registry: $IdMap<T>);
        get serializedSize(): number;
        get size(): number;
    }
    export class $Palette<T> {
    }
    export interface $Palette<T> {
        maybeHas(filter: $Predicate_<T>): boolean;
        getSerializedSize(): number;
        valueFor(id: number): T;
        write(buffer: $FriendlyByteBuf): void;
        read(buffer: $FriendlyByteBuf): void;
        copy(): $Palette<T>;
        getSize(): number;
        idFor(state: T): number;
        get serializedSize(): number;
        get size(): number;
    }
    export class $EmptyLevelChunk extends $LevelChunk {
        upgradeData: $UpgradeData;
        xaero_wm_chunkClean: boolean;
        chunkPos: $ChunkPos;
        level: $Level;
        xaero_chunkClean: boolean;
        pendingBlockEntities: $Map<$BlockPos, $CompoundTag>;
        noiseChunk: $NoiseChunk;
        sections: $LevelChunkSection[];
        skyLightSources: $ChunkSkyLightSources;
        postProcessing: $ShortList[];
        blendingData: $BlendingData;
        static LOGGER: $Logger;
        levelHeightAccessor: $LevelHeightAccessor;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        unsaved: boolean;
        heightmaps: $Map<$Heightmap$Types, $Heightmap>;
        static NO_FILLED_SECTION: number;
        constructor(level: $Level_, pos: $ChunkPos, biome: $Holder_<$Biome>);
    }
    export class $CarvingMask {
        setAdditionalMask(additionalMask: $CarvingMask$Mask_): void;
        get(x: number, y: number, z: number): boolean;
        toArray(): number[];
        stream(pos: $ChunkPos): $Stream<$BlockPos>;
        set(x: number, y: number, z: number): void;
        constructor(mask: number[], minY: number);
        constructor(mask: number, minY: number);
        set additionalMask(value: $CarvingMask$Mask_);
    }
}
