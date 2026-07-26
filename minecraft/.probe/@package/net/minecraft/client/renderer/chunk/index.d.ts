import { $Long2ObjectFunction_, $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $SectionBufferBuilderPack, $RenderBuffers, $SectionBufferBuilderPool, $RenderType, $LevelRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Set_, $Collection_, $List_, $Map, $Set } from "@package/java/util";
import { $LevelLightEngine } from "@package/net/minecraft/world/level/lighting";
import { $RenderSectionAccessor } from "@package/dev/ryanhcode/sable/mixin/sublevel_render";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $AddSectionGeometryEvent$AdditionalSectionRenderer_ } from "@package/net/neoforged/neoforge/client/event";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos$MutableBlockPos, $Holder, $BlockPos_, $Direction_, $SectionPos } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RenderAttachedBlockView } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $Enum, $Comparable, $Object } from "@package/java/lang";
import { $BlockAndTintGetter, $ClipContext, $ClipBlockStateContext, $LightLayer_, $ChunkPos, $Level, $ColorResolver_, $Level_ } from "@package/net/minecraft/world/level";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $RenderDataMapConsumer } from "@package/net/fabricmc/fabric/impl/blockview/client";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $Stream } from "@package/java/util/stream";
import { $AtomicReference } from "@package/java/util/concurrent/atomic";
import { $MeshData, $MeshData$SortState, $VertexSorting_, $ByteBufferBuilder$Result, $VertexSorting, $VertexBuffer } from "@package/com/mojang/blaze3d/vertex";
import { $AuxiliaryLightManager } from "@package/net/neoforged/neoforge/common/world";
import { $RenderSectionExtension, $RenderSectionExtension$DirtyListener_ } from "@package/dev/ryanhcode/sable/mixinterface/sublevel_render/vanilla";
import { $AABB_, $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";

declare module "@package/net/minecraft/client/renderer/chunk" {
    export class $SectionRenderDispatcher$RenderSection implements $RenderSectionAccessor, $RenderSectionExtension {
        hasAllNeighbors(): boolean;
        getRelativeOrigin(direction: $Direction_): $BlockPos;
        setOrigin(x: number, y: number, z: number): void;
        compileSync(regionCache: $RenderRegionCache): void;
        getDistToPlayerSqr(): number;
        handler$gio000$sable$setDirty(arg0: boolean, arg1: $CallbackInfo): void;
        resortTransparency(renderType: $RenderType, sectionRenderDispatcher: $SectionRenderDispatcher): boolean;
        createCompileTask(regionCache: $RenderRegionCache): $SectionRenderDispatcher$RenderSection$CompileTask;
        isAxisAlignedWith(x: number, y: number, z: number): boolean;
        setCompiled(compiled: $SectionRenderDispatcher$CompiledSection): void;
        createVertexSorting(): $VertexSorting;
        sable$addDirtyListener(arg0: $RenderSectionExtension$DirtyListener_): void;
        sable$setListening(playerChanged: boolean): void;
        releaseBuffers(): void;
        setDirty(playerChanged: boolean): void;
        cancelTasks(): boolean;
        getCompiled(): $SectionRenderDispatcher$CompiledSection;
        isDirtyFromPlayer(): boolean;
        setNotDirty(): void;
        rebuildSectionAsync(sectionRenderDispatcher: $SectionRenderDispatcher, regionCache: $RenderRegionCache): void;
        updateGlobalBlockEntities(blockEntities: $Collection_<$BlockEntity>): void;
        getOrigin(): $BlockPos;
        isDirty(): boolean;
        getBuffer(renderType: $RenderType): $VertexBuffer;
        getBoundingBox(): $AABB;
        getGlobalBlockEntities(): $Set<$BlockEntity>;
        compiled: $AtomicReference<$SectionRenderDispatcher$CompiledSection>;
        static SIZE: number;
        origin: $BlockPos$MutableBlockPos;
        this$0: $SectionRenderDispatcher;
        index: number;
        constructor(index: $SectionRenderDispatcher, originX: number, originY: number, originZ: number, arg4: number);
        get distToPlayerSqr(): number;
        get dirtyFromPlayer(): boolean;
        get boundingBox(): $AABB;
        get globalBlockEntities(): $Set<$BlockEntity>;
    }
    export class $SectionRenderDispatcher {
        getFreeBufferCount(): number;
        getToBatchCount(): number;
        getToUpload(): number;
        uploadSectionLayer(meshData: $MeshData, vertexBuffer: $VertexBuffer): $CompletableFuture<void>;
        uploadSectionIndexBuffer(result: $ByteBufferBuilder$Result, vertexBuffer: $VertexBuffer): $CompletableFuture<void>;
        setCamera(camera: $Vec3_): void;
        blockUntilClear(): void;
        rebuildSectionSync(section: $SectionRenderDispatcher$RenderSection, regionCache: $RenderRegionCache): void;
        uploadAllPendingUploads(): void;
        getCameraPosition(): $Vec3;
        dispose(): void;
        setLevel(level: $ClientLevel): void;
        isQueueEmpty(): boolean;
        schedule(task: $SectionRenderDispatcher$RenderSection$CompileTask): void;
        getStats(): string;
        bufferPool: $SectionBufferBuilderPool;
        renderer: $LevelRenderer;
        sectionCompiler: $SectionCompiler;
        level: $ClientLevel;
        fixedBuffers: $SectionBufferBuilderPack;
        constructor(level: $ClientLevel, renderer: $LevelRenderer, executor: $Executor_, buffers: $RenderBuffers, blockRenderer: $BlockRenderDispatcher, blockEntityRenderer: $BlockEntityRenderDispatcher);
        get freeBufferCount(): number;
        get toBatchCount(): number;
        get toUpload(): number;
        set camera(value: $Vec3_);
        get cameraPosition(): $Vec3;
        get queueEmpty(): boolean;
        get stats(): string;
    }
    export class $RenderRegionCache$ChunkInfo {
        renderChunk(): $RenderChunk;
        chunk(): $LevelChunk;
        constructor(chunk: $LevelChunk);
    }
    export class $RenderChunk {
    }
    export class $SectionRenderDispatcher$CompiledSection {
        getRenderableBlockEntities(): $List<$BlockEntity>;
        hasNoRenderableLayers(): boolean;
        facesCanSeeEachother(face1: $Direction_, face2: $Direction_): boolean;
        isEmpty(renderType: $RenderType): boolean;
        transparencyState: $MeshData$SortState;
        hasBlocks: $Set<$RenderType>;
        visibilitySet: $VisibilitySet;
        static UNCOMPILED: $SectionRenderDispatcher$CompiledSection;
        static EMPTY: $SectionRenderDispatcher$CompiledSection;
        renderableBlockEntities: $List<$BlockEntity>;
        constructor();
    }
    export class $RenderChunkRegion implements $BlockAndTintGetter, $RenderDataMapConsumer, $RenderAttachedBlockView, $SubLevelContainerHolder {
        fabric_acceptRenderDataMap(arg0: $Long2ObjectMap<any>): void;
        getHeight(): number;
        static index(minX: number, minZ: number, x: number, z: number): number;
        getBlockState(pos: $BlockPos_): $BlockState;
        getBlockEntity(pos: $BlockPos_): $BlockEntity;
        sable$getPlotContainer(): $SubLevelContainer;
        getFluidState(pos: $BlockPos_): $FluidState;
        getMinBuildHeight(): number;
        /**
         * Retrieves model data for a block at the given position.
         */
        getModelData(pos: $BlockPos_): $ModelData;
        getLightEngine(): $LevelLightEngine;
        getShade(direction: $Direction_, shade: boolean): number;
        /**
         * Computes the shade for a given normal.
         * Alternate version of the vanilla method taking in a `Direction`.
         */
        getShade(normalX: number, normalY: number, normalZ: number, shade: boolean): number;
        getBlockTint(pos: $BlockPos_, colorResolver: $ColorResolver_): number;
        /**
         * Get the `AuxiliaryLightManager` of the chunk at the given `ChunkPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $ChunkPos): $AuxiliaryLightManager;
        getBlockEntityRenderData(arg0: $BlockPos_): $Object;
        hasBiomes(): boolean;
        getBiomeFabric(arg0: $BlockPos_): $Holder<any>;
        getBrightness(lightType: $LightLayer_, blockPos: $BlockPos_): number;
        canSeeSky(pos: $BlockPos_): boolean;
        getRawBrightness(blockPos: $BlockPos_, amount: number): number;
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
        getBlockEntity<T extends $BlockEntity>(pos: $BlockPos_, blockEntityType: $BlockEntityType_<T>): (T) | undefined;
        clip(failContext: $ClipContext): $BlockHitResult;
        getLightEmission(pos: $BlockPos_): number;
        getBlockFloorHeight(shape: $VoxelShape, belowShapeSupplier: $Supplier_<$VoxelShape>): number;
        getBlockFloorHeight(pos: $BlockPos_): number;
        isBlockInLine(context: $ClipBlockStateContext): $BlockHitResult;
        getMaxLightLevel(): number;
        clipWithInteractionOverride(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_, shape: $VoxelShape, state: $BlockState_): $BlockHitResult;
        getBlockStates(area: $AABB_): $Stream<$BlockState>;
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
         * Get the `AuxiliaryLightManager` of the chunk containing the given `BlockPos`.
         * 
         * The light manager must be used to hold light values controlled by dynamic data from `BlockEntity`s
         * to ensure access to the light data is thread-safe and the data is available during chunk load from disk
         * where `BlockEntity`s are not yet added to the chunk.
         */
        getAuxLightManager(pos: $BlockPos_): $AuxiliaryLightManager;
        static RADIUS: number;
        level: $Level;
        chunks: $RenderChunk[];
        static SIZE: number;
        /**
         * @deprecated
         */
        constructor(level: $Level_, minChunkX: number, minChunkZ: number, chunks: $RenderChunk[]);
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: $RenderChunk[], arg4: $Long2ObjectFunction_<$ModelData>);
        get height(): number;
        get minBuildHeight(): number;
        get lightEngine(): $LevelLightEngine;
        get maxLightLevel(): number;
        get maxBuildHeight(): number;
        get sectionsCount(): number;
        get maxSection(): number;
        get minSection(): number;
    }
    export class $SectionCompiler {
        compile(arg0: $SectionPos, arg1: $RenderChunkRegion, arg2: $VertexSorting_, arg3: $SectionBufferBuilderPack, arg4: $List_<$AddSectionGeometryEvent$AdditionalSectionRenderer_>): $SectionCompiler$Results;
        compile(sectionPos: $SectionPos, region: $RenderChunkRegion, vertexSorting: $VertexSorting_, sectionBufferBuilderPack: $SectionBufferBuilderPack): $SectionCompiler$Results;
        constructor(blockRenderer: $BlockRenderDispatcher, blockEntityRenderer: $BlockEntityRenderDispatcher);
    }
    export class $SectionRenderDispatcher$RenderSection$CompileTask implements $Comparable<$SectionRenderDispatcher$RenderSection$CompileTask> {
    }
    export class $VisGraph {
        resolve(): $VisibilitySet;
        setOpaque(pos: $BlockPos_): void;
        constructor();
        set opaque(value: $BlockPos_);
    }
    export class $VisibilitySet {
        visibilityBetween(face: $Direction_, otherFace: $Direction_): boolean;
        add(faces: $Set_<$Direction_>): void;
        set(face: $Direction_, otherFace: $Direction_, visible: boolean): void;
        setAll(visible: boolean): void;
        constructor();
        set all(value: boolean);
    }
    export class $RenderRegionCache {
        createRegion(level: $Level_, sectionPos: $SectionPos): $RenderChunkRegion;
        createRegion(arg0: $Level_, arg1: $SectionPos, arg2: boolean): $RenderChunkRegion;
        constructor();
    }
    export class $SectionRenderDispatcher$RenderSection$RebuildTask extends $SectionRenderDispatcher$RenderSection$CompileTask {
        this$1: $SectionRenderDispatcher$RenderSection;
        region: $RenderChunkRegion;
    }
    export class $SectionRenderDispatcher$RenderSection$ResortTransparencyTask extends $SectionRenderDispatcher$RenderSection$CompileTask {
    }
    export class $SectionRenderDispatcher$SectionTaskResult extends $Enum<$SectionRenderDispatcher$SectionTaskResult> {
    }
    /**
     * Values that may be interpreted as {@link $SectionRenderDispatcher$SectionTaskResult}.
     */
    export type $SectionRenderDispatcher$SectionTaskResult_ = "successful" | "cancelled";
    export class $SectionCompiler$Results {
        release(): void;
        transparencyState: $MeshData$SortState;
        visibilitySet: $VisibilitySet;
        globalBlockEntities: $List<$BlockEntity>;
        blockEntities: $List<$BlockEntity>;
        renderedLayers: $Map<$RenderType, $MeshData>;
        constructor();
    }
}
