import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $EntityType_, $EntityType, $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $MenuProvider, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $IBlockStateExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockBehaviourAccess } from "@package/snownee/snow/mixin";
import { $ItemAbility_ } from "@package/net/neoforged/neoforge/common";
import { $BlockPropertiesAccessor } from "@package/com/supermartijn642/core/mixin";
import { $Item, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Projectile } from "@package/net/minecraft/world/entity/projectile";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $NoteBlockInstrument, $Property, $NoteBlockInstrument_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $RenderShape, $Mirror_, $SoundType_, $SoundType, $Block, $Block_, $Rotation_, $SupportType_ } from "@package/net/minecraft/world/level/block";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $BlockStateKJS, $BlockBehaviourKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $HitResult, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $FastMap } from "@package/malte0811/ferritecore/fastmap";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $PhysicsBlockPropertiesDefinition_, $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_ } from "@package/dev/ryanhcode/sable/physics/config/block_properties";
import { $BlockStateExtension } from "@package/dev/ryanhcode/sable/mixinterface/block_properties";
import { $AbstractBlockSettingsAccessor, $AbstractBlockAccessor } from "@package/net/fabricmc/fabric/mixin/object/builder";
import { $BlockBehaviourAccessor, $StateHolderAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Map, $Map$Entry, $List, $Map_, $Collection_, $Collection } from "@package/java/util";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $BiConsumer_, $ToIntFunction, $Function_, $Supplier, $ToIntFunction_ } from "@package/java/util/function";
import { $Reference2ObjectArrayMap, $Reference2ObjectMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $PathType, $PathType_, $PathComputationType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $ServerPlayer$RespawnPosAngle, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $HolderSet_, $BlockPos_, $Registry, $Holder_, $Holder, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ShapeUpdateHandlingBlockBehaviour } from "@package/net/caffeinemc/mods/lithium/common/block/entity";
import { $Enum, $Comparable_, $Comparable, $Object } from "@package/java/lang";
import { $LootTable, $LootParams$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockAndTintGetter, $Explosion, $LevelAccessor, $LevelReader, $BlockGetter, $SignalGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $FluidState, $Fluid_, $PushReaction_, $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $ImmutableList, $Table } from "@package/com/google/common/collect";
import { $Pattern } from "@package/java/util/regex";
import { $FastMapStateHolder, $BlockStateCacheAccess } from "@package/malte0811/ferritecore/ducks";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $BlockBehaviourAccessor as $BlockBehaviourAccessor$1 } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker } from "@package/net/minecraft/world/level/block/entity";
import { $BubbleColumnDirection } from "@package/net/neoforged/neoforge/common/enums";
export * as pattern from "@package/net/minecraft/world/level/block/state/pattern";
export * as properties from "@package/net/minecraft/world/level/block/state/properties";
export * as predicate from "@package/net/minecraft/world/level/block/state/predicate";

declare module "@package/net/minecraft/world/level/block/state" {
    export class $BlockBehaviour$OffsetType extends $Enum<$BlockBehaviour$OffsetType> {
        static values(): $BlockBehaviour$OffsetType[];
        static valueOf(arg0: string): $BlockBehaviour$OffsetType;
        static XZ: $BlockBehaviour$OffsetType;
        static XYZ: $BlockBehaviour$OffsetType;
        static NONE: $BlockBehaviour$OffsetType;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetType}.
     */
    export type $BlockBehaviour$OffsetType_ = "none" | "xz" | "xyz";
    export class $StateDefinition<O, S extends $StateHolder<O, S>> {
        any(): S;
        getProperty(propertyName: string): $Property<never>;
        getProperties(): $Collection<$Property<never>>;
        getOwner(): O;
        getPossibleStates(): $ImmutableList<S>;
        static NAME_PATTERN: $Pattern;
        constructor(stateValueFunction: $Function_<O, S>, owner: O, valueFunction: $StateDefinition$Factory_<O, S>, propertiesByName: $Map_<string, $Property<never>>);
        get properties(): $Collection<$Property<never>>;
        get owner(): O;
        get possibleStates(): $ImmutableList<S>;
    }
    export class $BlockBehaviour$BlockStateBase$Cache implements $BlockStateCacheAccess {
    }
    export class $StateDefinition$Builder<O, S extends $StateHolder<O, S>> {
        add(...properties: $Property<never>[]): $StateDefinition$Builder<O, S>;
        create(stateValueFunction: $Function_<O, S>, stateFunction: $StateDefinition$Factory_<O, S>): $StateDefinition<O, S>;
        constructor(owner: O);
    }
    export class $BlockBehaviour implements $FeatureElement, $BlockBehaviourAccess, $ShapeUpdateHandlingBlockBehaviour, $AbstractBlockAccessor, $BlockBehaviourAccessor$1, $BlockBehaviourKJS, $BlockBehaviourAccessor {
        getMaxHorizontalOffset(): number;
        getMaxVerticalOffset(): number;
        isOcclusionShapeFullBlock(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        defaultMapColor(): $MapColor;
        asBlock(): $Block;
        static simpleCodec<B extends $Block>(factory: $Function_<$BlockBehaviour$Properties, B>): $MapCodec<B>;
        setHasCollision(arg0: boolean): void;
        setExplosionResistance(arg0: number): void;
        setIsRandomlyTicking(arg0: boolean): void;
        setRandomTickCallback(callback: $Consumer_<any>): void;
        setSoundType(arg0: $SoundType_): void;
        setFriction(arg0: number): void;
        setSpeedFactor(arg0: number): void;
        setJumpFactor(arg0: number): void;
        defaultDestroyTime(): number;
        getShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        /**
         * Performs a random tick on a block.
         */
        tick(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        /**
         * Return a random long to be passed to `BakedModel#getQuads`, used for random model rotations
         */
        getSeed(state: $BlockState_, pos: $BlockPos_): number;
        properties(): $BlockBehaviour$Properties;
        /**
         * Returns the blockstate with the given rotation from the passed blockstate. If inapplicable, returns the passed blockstate.
         */
        rotate(state: $BlockState_, rotation: $Rotation_): $BlockState;
        /**
         * Returns the blockstate with the given mirror of the passed blockstate. If inapplicable, returns the passed blockstate.
         */
        mirror(state: $BlockState_, mirror: $Mirror_): $BlockState;
        codec(): $MapCodec<$Block>;
        onRemove(state: $BlockState_, level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        requiredFeatures(): $FeatureFlagSet;
        asItem(): $Item;
        /**
         * The type of render function called. MODEL for mixed tesr and static model, MODELBLOCK_ANIMATED for TESR-only, LIQUID for vanilla liquids, INVISIBLE to skip all rendering
         */
        getRenderShape(state: $BlockState_): $RenderShape;
        isAir(state: $BlockState_): boolean;
        attack(state: $BlockState_, level: $Level_, pos: $BlockPos_, player: $Player): void;
        useItemOn(stack: $ItemStack_, state: $BlockState_, level: $Level_, pos: $BlockPos_, player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult): $ItemInteractionResult;
        getFluidState(state: $BlockState_): $FluidState;
        canSurvive(state: $BlockState_, level: $LevelReader, pos: $BlockPos_): boolean;
        getLootTable(): $ResourceKey<$LootTable>;
        /**
         * @deprecated
         */
        getSoundType(state: $BlockState_): $SoundType;
        getCollisionShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        entityInside(state: $BlockState_, level: $Level_, pos: $BlockPos_, entity: $Entity): void;
        isCollisionShapeFullBlock(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        onExplosionHit(state: $BlockState_, level: $Level_, pos: $BlockPos_, explosion: $Explosion, dropConsumer: $BiConsumer_<$ItemStack, $BlockPos>): void;
        useShapeForLightOcclusion(state: $BlockState_): boolean;
        isRandomlyTicking(state: $BlockState_): boolean;
        /**
         * Called on server when `Level#blockEvent` is called. If server returns true, then also called on the client. On the Server, this may perform additional changes to the world, like pistons replacing the block with an extended base. On the client, the update may involve replacing block entities or effects such as sounds or particles
         */
        triggerEvent(state: $BlockState_, level: $Level_, pos: $BlockPos_, id: number, param: number): boolean;
        propagatesSkylightDown(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        getLightBlock(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): number;
        getOcclusionShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getShadeBrightness(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): number;
        isSignalSource(state: $BlockState_): boolean;
        /**
         * Returns the direct signal this block emits in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getSignal(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        hasAnalogOutputSignal(state: $BlockState_): boolean;
        /**
         * Returns the analog signal this block emits. This is the signal a comparator can read from it.
         */
        getAnalogOutputSignal(state: $BlockState_, level: $Level_, pos: $BlockPos_): number;
        /**
         * Get the hardness of this Block relative to the ability of the given player
         */
        getDestroyProgress(state: $BlockState_, player: $Player, level: $BlockGetter, pos: $BlockPos_): number;
        /**
         * Returns the direct signal this block emits in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getDirectSignal(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        skipRendering(state: $BlockState_, adjacentState: $BlockState_, direction: $Direction_): boolean;
        getBlockSupportShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getVisualShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        getInteractionShape(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        neighborChanged(state: $BlockState_, level: $Level_, pos: $BlockPos_, neighborBlock: $Block_, neighborPos: $BlockPos_, movedByPiston: boolean): void;
        onPlace(state: $BlockState_, level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        /**
         * Performs a random tick on a block.
         */
        randomTick(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        /**
         * Perform side-effects from block dropping, such as creating silverfish
         */
        spawnAfterBreak(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, stack: $ItemStack_, dropExperience: boolean): void;
        getDrops(state: $BlockState_, params: $LootParams$Builder): $List<$ItemStack>;
        updateIndirectNeighbourShapes(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: number, arg4: number): void;
        useWithoutItem(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $BlockHitResult): $InteractionResult;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        isPathfindable(arg0: $BlockState_, arg1: $PathComputationType_): boolean;
        canBeReplaced(arg0: $BlockState_, arg1: $Fluid_): boolean;
        canBeReplaced(arg0: $BlockState_, arg1: $BlockPlaceContext): boolean;
        getMenuProvider(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): $MenuProvider;
        onProjectileHit(arg0: $Level_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $Projectile): void;
        static propertiesCodec<B extends $Block>(): $RecordCodecBuilder<B, $BlockBehaviour$Properties>;
        isEnabled(arg0: $FeatureFlagSet): boolean;
        lithium$handleShapeUpdate(arg0: $LevelReader, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: $BlockState_): void;
        getTypeData(): $Map<string, $Object>;
        getKey(): $ResourceKey<$Block>;
        getId(): string;
        asHolder(): $Holder<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getMod(): string;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        callEntityInside(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Entity): void;
        callGetSoundType(arg0: $BlockState_): $SoundType;
        getHasCollision(): boolean;
        create$getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getProperties(): $BlockBehaviour$Properties;
        explosionResistance: number;
        drops: $ResourceKey<$LootTable>;
        dynamicShape: boolean;
        static UPDATE_SHAPE_ORDER: $Direction[];
        speedFactor: number;
        hasCollision: boolean;
        soundType: $SoundType;
        friction: number;
        jumpFactor: number;
        constructor(properties: $BlockBehaviour$Properties);
        get maxHorizontalOffset(): number;
        get maxVerticalOffset(): number;
        set randomTickCallback(value: $Consumer_<any>);
        get lootTable(): $ResourceKey<$LootTable>;
        get typeData(): $Map<string, $Object>;
        get key(): $ResourceKey<$Block>;
        get id(): string;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get idLocation(): $ResourceLocation;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Block>>;
        get tags(): $List<$ResourceLocation>;
    }
    export class $BlockState extends $BlockBehaviour$BlockStateBase implements $IBlockStateExtension, $BlockStateExtension {
        sable$getProperty(arg0: $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_<any>): $Object;
        sable$loadProperties(arg0: $StateDefinition<any, any>, arg1: $PhysicsBlockPropertiesDefinition_): void;
        isEmpty(): boolean;
        rotate(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Rotation_): $BlockState;
        getCloneItemStack(arg0: $HitResult, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Player): $ItemStack;
        addLandingEffects(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: $LivingEntity, arg4: number): boolean;
        getSoundType(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): $SoundType;
        getFriction(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Entity): number;
        isScaffolding(arg0: $LivingEntity): boolean;
        isBed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        setBedOccupied(arg0: $Level_, arg1: $BlockPos_, arg2: $LivingEntity, arg3: boolean): void;
        getBedDirection(arg0: $LevelReader, arg1: $BlockPos_): $Direction;
        collisionExtendsVertically(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        addRunningEffects(arg0: $Level_, arg1: $BlockPos_, arg2: $Entity): boolean;
        hasDynamicLightEmission(): boolean;
        getLightEmission(arg0: $BlockGetter, arg1: $BlockPos_): number;
        ignitedByLava(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        isLadder(arg0: $LevelReader, arg1: $BlockPos_, arg2: $LivingEntity): boolean;
        canHarvestBlock(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Player): boolean;
        onDestroyedByPlayer(arg0: $Level_, arg1: $BlockPos_, arg2: $Player, arg3: boolean, arg4: $FluidState): boolean;
        onDestroyedByPushReaction(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $FluidState): void;
        getRespawnPosition(arg0: $EntityType_<never>, arg1: $LevelReader, arg2: $BlockPos_, arg3: number): ($ServerPlayer$RespawnPosAngle) | undefined;
        getExplosionResistance(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): number;
        canSustainPlant(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_): $TriState;
        onTreeGrow(arg0: $LevelReader, arg1: $BiConsumer_<$BlockPos, $BlockState>, arg2: $RandomSource, arg3: $BlockPos_, arg4: $TreeConfiguration): boolean;
        isFertile(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        isConduitFrame(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        isPortalFrame(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getExpDrop(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockEntity, arg3: $Entity, arg4: $ItemStack_): number;
        getEnchantPowerBonus(arg0: $LevelReader, arg1: $BlockPos_): number;
        onNeighborChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): void;
        shouldCheckWeakPower(arg0: $SignalGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getWeakChanges(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        getBeaconColorMultiplier(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_): number;
        getStateAtViewpoint(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Vec3_): $BlockState;
        isSlimeBlock(): boolean;
        isStickyBlock(): boolean;
        canStickTo(arg0: $BlockState_): boolean;
        getFlammability(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        isFlammable(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        onCaughtFire(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $LivingEntity): void;
        getFireSpreadSpeed(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): number;
        isFireSource(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_): boolean;
        canEntityDestroy(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Entity): boolean;
        isBurning(arg0: $BlockGetter, arg1: $BlockPos_): boolean;
        getBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob): $PathType;
        getAdjacentBlockPathType(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Mob, arg3: $PathType_): $PathType;
        canDropFromExplosion(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Explosion): boolean;
        onBlockExploded(arg0: $Level_, arg1: $BlockPos_, arg2: $Explosion): void;
        shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState): boolean;
        handler$zzp000$fabric_rendering_fluids_v1$shouldDisplayFluidOverlay(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $CallbackInfoReturnable<any>): void;
        getToolModifiedState(arg0: $UseOnContext, arg1: $ItemAbility_, arg2: boolean): $BlockState;
        canRedstoneConnectTo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        hidesNeighborFace(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        supportsExternalFaceHiding(): boolean;
        onBlockStateChange(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_): void;
        canBeHydrated(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $FluidState, arg3: $BlockPos_): boolean;
        getAppearance(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $Direction_, arg3: $BlockState_, arg4: $BlockPos_): $BlockState;
        getBubbleColumnDirection(): $BubbleColumnDirection;
        shouldHideAdjacentFluidFace(arg0: $Direction_, arg1: $FluidState): boolean;
        static PROPERTIES_TAG: string;
        owner: $Block;
        cache: $BlockBehaviour$BlockStateBase$Cache;
        static CODEC: $Codec<$BlockState>;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$BlockState>;
        constructor(arg0: $Block_, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, arg2: $MapCodec_<$BlockState_>);
        get empty(): boolean;
        get slimeBlock(): boolean;
        get stickyBlock(): boolean;
        get bubbleColumnDirection(): $BubbleColumnDirection;
    }
    /**
     * Values that may be interpreted as {@link $BlockState}.
     */
    export type $BlockState_ = $Block_;
    export class $StateDefinition$Factory<O, S> {
    }
    export interface $StateDefinition$Factory<O, S> {
        create(owner: O, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<S>): S;
    }
    /**
     * Values that may be interpreted as {@link $StateDefinition$Factory}.
     */
    export type $StateDefinition$Factory_<O, S> = ((arg0: O, arg1: $Reference2ObjectArrayMap<$Property<never>, $Comparable<never>>, arg2: $MapCodec<S>) => S);
    export class $BlockBehaviour$BlockStateBase extends $StateHolder<$Block, $BlockState> implements $BlockStateKJS {
        getShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        getShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        initCache(): void;
        tick(level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        getBlock(): $Block;
        getSeed(pos: $BlockPos_): number;
        is(tag: $TagKey_<$Block>, predicate: $Predicate_<$BlockBehaviour$BlockStateBase>): boolean;
        is(tag: $TagKey_<$Block>): boolean;
        is(block: $ResourceKey_<$Block>): boolean;
        is(block: $Block_): boolean;
        is(block: $Holder_<$Block>): boolean;
        is(holder: $HolderSet_<$Block>): boolean;
        getOffset(level: $BlockGetter, pos: $BlockPos_): $Vec3;
        /**
         * @deprecated
         * @return the blockstate with the given rotation. If inapplicable, returns itself.
         */
        rotate(rotation: $Rotation_): $BlockState;
        /**
         * @return the blockstate mirrored in the given way. If inapplicable, returns itself.
         */
        mirror(mirror: $Mirror_): $BlockState;
        onRemove(level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        getRenderShape(): $RenderShape;
        isAir(): boolean;
        attack(level: $Level_, pos: $BlockPos_, player: $Player): void;
        useItemOn(stack: $ItemStack_, level: $Level_, player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult): $ItemInteractionResult;
        hasBlockEntity(): boolean;
        getFluidState(): $FluidState;
        instrument(): $NoteBlockInstrument;
        getDestroySpeed(level: $BlockGetter, pos: $BlockPos_): number;
        requiresCorrectToolForDrops(): boolean;
        canSurvive(level: $LevelReader, pos: $BlockPos_): boolean;
        /**
         * @deprecated
         */
        getSoundType(): $SoundType;
        /**
         * @deprecated
         */
        blocksMotion(): boolean;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getTags(): $Stream<$TagKey<$Block>>;
        entityInside(level: $Level_, pos: $BlockPos_, entity: $Entity): void;
        isCollisionShapeFullBlock(level: $BlockGetter, pos: $BlockPos_): boolean;
        getPistonPushReaction(): $PushReaction;
        onExplosionHit(level: $Level_, pos: $BlockPos_, explosion: $Explosion, dropConsumer: $BiConsumer_<$ItemStack, $BlockPos>): void;
        isSuffocating(level: $BlockGetter, pos: $BlockPos_): boolean;
        useShapeForLightOcclusion(): boolean;
        /**
         * @deprecated
         */
        liquid(): boolean;
        canOcclude(): boolean;
        isRedstoneConductor(level: $BlockGetter, pos: $BlockPos_): boolean;
        isViewBlocking(level: $BlockGetter, pos: $BlockPos_): boolean;
        hasPostProcess(level: $BlockGetter, pos: $BlockPos_): boolean;
        emissiveRendering(level: $BlockGetter, pos: $BlockPos_): boolean;
        isRandomlyTicking(): boolean;
        handler$hoh000$ferritecore$cacheStateHead(arg0: $CallbackInfo): void;
        handler$hoh000$ferritecore$cacheStateTail(arg0: $CallbackInfo): void;
        getBlockHolder(): $Holder<$Block>;
        triggerEvent(level: $Level_, pos: $BlockPos_, id: number, param: number): boolean;
        /**
         * @deprecated
         */
        isSolid(): boolean;
        isValidSpawn(level: $BlockGetter, pos: $BlockPos_, entityType: $EntityType_<never>): boolean;
        propagatesSkylightDown(level: $BlockGetter, pos: $BlockPos_): boolean;
        getLightBlock(level: $BlockGetter, pos: $BlockPos_): number;
        getFaceOcclusionShape(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): $VoxelShape;
        getOcclusionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        hasLargeCollisionShape(): boolean;
        getMapColor(level: $BlockGetter, pos: $BlockPos_): $MapColor;
        getShadeBrightness(level: $BlockGetter, pos: $BlockPos_): number;
        handler$zbm000$iris$getShadeBrightness(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $CallbackInfoReturnable<any>): void;
        isSignalSource(): boolean;
        getSignal(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        hasAnalogOutputSignal(): boolean;
        getAnalogOutputSignal(level: $Level_, pos: $BlockPos_): number;
        getDestroyProgress(player: $Player, level: $BlockGetter, pos: $BlockPos_): number;
        getDirectSignal(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        /**
         * @deprecated
         */
        getLightEmission(): number;
        /**
         * @deprecated
         */
        ignitedByLava(): boolean;
        asState(): $BlockState;
        isSolidRender(level: $BlockGetter, pos: $BlockPos_): boolean;
        skipRendering(state: $BlockState_, face: $Direction_): boolean;
        getBlockSupportShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getVisualShape(level: $BlockGetter, pos: $BlockPos_, context: $CollisionContext): $VoxelShape;
        getInteractionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        entityCanStandOn(level: $BlockGetter, pos: $BlockPos_, entity: $Entity): boolean;
        /**
         * @return true if the collision box of this state covers the entire upper face of the blockspace
         */
        entityCanStandOnFace(level: $BlockGetter, pos: $BlockPos_, entity: $Entity, face: $Direction_): boolean;
        modifyReturnValue$bco000$supplementaries$supp$modifyPlanterOffset(arg0: $Vec3_, arg1: $BlockGetter, arg2: $BlockPos_): $Vec3;
        hasOffsetFunction(): boolean;
        handleNeighborChanged(level: $Level_, pos: $BlockPos_, block: $Block_, fromPos: $BlockPos_, isMoving: boolean): void;
        updateNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number, recursionLeft: number): void;
        updateNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number): void;
        onPlace(level: $Level_, pos: $BlockPos_, oldState: $BlockState_, movedByPiston: boolean): void;
        randomTick(level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): void;
        handler$cgk000$sereneseasons$onRandomTick(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $RandomSource, arg3: $CallbackInfo): void;
        spawnAfterBreak(level: $ServerLevel, pos: $BlockPos_, stack: $ItemStack_, dropExperience: boolean): void;
        getDrops(lootParams: $LootParams$Builder): $List<$ItemStack>;
        updateIndirectNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number, recursionLeft: number): void;
        updateIndirectNeighbourShapes(level: $LevelAccessor, pos: $BlockPos_, flags: number): void;
        useWithoutItem(level: $Level_, player: $Player, hitResult: $BlockHitResult): $InteractionResult;
        updateShape(direction: $Direction_, neighborState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, neighborPos: $BlockPos_): $BlockState;
        isPathfindable(arg0: $PathComputationType_): boolean;
        canBeReplaced(useContext: $BlockPlaceContext): boolean;
        canBeReplaced(fluid: $Fluid_): boolean;
        canBeReplaced(): boolean;
        getMenuProvider(level: $Level_, pos: $BlockPos_): $MenuProvider;
        getTicker<T extends $BlockEntity>(level: $Level_, blockEntityType: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        onProjectileHit(level: $Level_, state: $BlockState_, hit: $BlockHitResult, projectile: $Projectile): void;
        isFaceSturdy(level: $BlockGetter, pos: $BlockPos_, face: $Direction_, supportType: $SupportType_): boolean;
        isFaceSturdy(level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): boolean;
        shouldSpawnTerrainParticles(): boolean;
        setDestroySpeed(arg0: number): void;
        setRequiresTool(arg0: boolean): void;
        setLightEmission(arg0: number): void;
        getKey(): $ResourceKey<$Block>;
        getId(): string;
        randomTickOverride(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, random: $RandomSource): boolean;
        asHolder(): $Holder<$Block>;
        getRegistryId(): $ResourceKey<$Registry<$Block>>;
        getRegistry(): $Registry<$Block>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getWebIconURL(size: number): $RelativeURL;
        toString(): string;
        specialEquals(o: $Object, shallow: boolean): boolean;
        getIdLocation(): $ResourceLocation;
        getMod(): string;
        getTagKeys(): $List<$TagKey<$Block>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        static PROPERTIES_TAG: string;
        owner: $Block;
        cache: $BlockBehaviour$BlockStateBase$Cache;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$BlockState>;
        constructor(owner: $Block_, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<$BlockState_>);
        get block(): $Block;
        get renderShape(): $RenderShape;
        get air(): boolean;
        get fluidState(): $FluidState;
        get soundType(): $SoundType;
        get pistonPushReaction(): $PushReaction;
        get randomlyTicking(): boolean;
        get blockHolder(): $Holder<$Block>;
        get solid(): boolean;
        get signalSource(): boolean;
        set requiresTool(value: boolean);
        get key(): $ResourceKey<$Block>;
        get id(): string;
        get registryId(): $ResourceKey<$Registry<$Block>>;
        get registry(): $Registry<$Block>;
        get idLocation(): $ResourceLocation;
        get mod(): string;
        get tagKeys(): $List<$TagKey<$Block>>;
    }
    export class $BlockBehaviour$OffsetFunction {
    }
    export interface $BlockBehaviour$OffsetFunction {
        evaluate(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$OffsetFunction}.
     */
    export type $BlockBehaviour$OffsetFunction_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => $Vec3_);
    export class $BlockBehaviour$StatePredicate {
    }
    export interface $BlockBehaviour$StatePredicate {
        test(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StatePredicate}.
     */
    export type $BlockBehaviour$StatePredicate_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean);
    export class $BlockBehaviour$Properties implements $BlockPropertiesAccessor, $AbstractBlockSettingsAccessor {
        lightLevel(lightEmission: $ToIntFunction_<$BlockState>): $BlockBehaviour$Properties;
        static ofFullCopy(blockBehaviour: $BlockBehaviour): $BlockBehaviour$Properties;
        noLootTable(): $BlockBehaviour$Properties;
        explosionResistance(destroyTime: number): $BlockBehaviour$Properties;
        friction(destroyTime: number): $BlockBehaviour$Properties;
        speedFactor(destroyTime: number): $BlockBehaviour$Properties;
        jumpFactor(destroyTime: number): $BlockBehaviour$Properties;
        dynamicShape(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        static ofLegacyCopy(blockBehaviour: $BlockBehaviour): $BlockBehaviour$Properties;
        offsetType(offsetType: $BlockBehaviour$OffsetType_): $BlockBehaviour$Properties;
        noTerrainParticles(): $BlockBehaviour$Properties;
        noCollission(): $BlockBehaviour$Properties;
        noOcclusion(): $BlockBehaviour$Properties;
        instabreak(): $BlockBehaviour$Properties;
        randomTicks(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        dropsLike(block: $Block_): $BlockBehaviour$Properties;
        lootFrom(arg0: $Supplier_<$Block>): $BlockBehaviour$Properties;
        static of(): $BlockBehaviour$Properties;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $BlockBehaviour$Properties;
        sound(soundType: $SoundType_): $BlockBehaviour$Properties;
        air(): $BlockBehaviour$Properties;
        instrument(instrument: $NoteBlockInstrument_): $BlockBehaviour$Properties;
        strength(destroyTime: number, explosionResistance: number): $BlockBehaviour$Properties;
        strength(destroyTime: number): $BlockBehaviour$Properties;
        requiresCorrectToolForDrops(): $BlockBehaviour$Properties;
        isSuffocating(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        liquid(): $BlockBehaviour$Properties;
        pushReaction(pushReaction: $PushReaction_): $BlockBehaviour$Properties;
        mapColor(mapColor: $Function_<$BlockState, $MapColor>): $BlockBehaviour$Properties;
        mapColor(mapColor: $DyeColor_): $BlockBehaviour$Properties;
        mapColor(mapColor: $MapColor): $BlockBehaviour$Properties;
        isRedstoneConductor(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        isViewBlocking(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        hasPostProcess(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        emissiveRendering(emissiveRendering: $BlockBehaviour$StatePredicate_): $BlockBehaviour$Properties;
        replaceable(): $BlockBehaviour$Properties;
        destroyTime(destroyTime: number): $BlockBehaviour$Properties;
        forceSolidOn(): $BlockBehaviour$Properties;
        /**
         * @deprecated
         */
        forceSolidOff(): $BlockBehaviour$Properties;
        isValidSpawn(isValidSpawn: $BlockBehaviour$StateArgumentPredicate_<$EntityType<never>>): $BlockBehaviour$Properties;
        ignitedByLava(): $BlockBehaviour$Properties;
        getHasCollision(): boolean;
        setRequiresCorrectToolForDrops(arg0: boolean): void;
        isRequiresCorrectToolForDrops(): boolean;
        getLootTableSupplier(): $Supplier<$ResourceKey<$LootTable>>;
        setLootTableSupplier(supplier: $Supplier_<$ResourceKey<$LootTable>>): void;
        getDestroyTime(): number;
        getIsRandomlyTicking(): boolean;
        getDynamicShape(): boolean;
        getCanOcclude(): boolean;
        getIsAir(): boolean;
        getIsValidSpawn(): $BlockBehaviour$StateArgumentPredicate<$EntityType<never>>;
        getIsRedstoneConductor(): $BlockBehaviour$StatePredicate;
        getIsSuffocating(): $BlockBehaviour$StatePredicate;
        getIsViewBlocking(): $BlockBehaviour$StatePredicate;
        getHasPostProcess(): $BlockBehaviour$StatePredicate;
        getEmissiveRendering(): $BlockBehaviour$StatePredicate;
        getOffsetFunction(): $BlockBehaviour$OffsetFunction;
        getSpawnTerrainParticles(): boolean;
        getRequiredFeatures(): $FeatureFlagSet;
        getIgnitedByLava(): boolean;
        getForceSolidOff(): boolean;
        getForceSolidOn(): boolean;
        getPushReaction(): $PushReaction;
        getInstrument(): $NoteBlockInstrument;
        getReplaceable(): boolean;
        setHasCollision(arg0: boolean): void;
        setIsRandomlyTicking(arg0: boolean): void;
        setMapColor(arg0: $Function_<$BlockState, $MapColor>): void;
        setDynamicShape(arg0: boolean): void;
        setCanOcclude(arg0: boolean): void;
        setIsAir(arg0: boolean): void;
        setDrops(arg0: $ResourceKey_<$LootTable>): void;
        setSpawnTerrainParticles(arg0: boolean): void;
        setRequiredFeatures(arg0: $FeatureFlagSet): void;
        setOffsetFunction(arg0: $BlockBehaviour$OffsetFunction_): void;
        setIgnitedByLava(arg0: boolean): void;
        setLiquid(arg0: boolean): void;
        setForceSolidOff(arg0: boolean): void;
        setForceSolidOn(arg0: boolean): void;
        setReplaceable(arg0: boolean): void;
        getLiquid(): boolean;
        getSoundType(): $SoundType;
        getFriction(): number;
        getLuminance(): $ToIntFunction<$BlockState>;
        getJumpFactor(): number;
        getSpeedFactor(): number;
        getMapColor(): $Function<$BlockState, $MapColor>;
        getExplosionResistance(): number;
        getDrops(): $ResourceKey<$LootTable>;
        offsetFunction: $BlockBehaviour$OffsetFunction;
        canOcclude: boolean;
        lightEmission: $ToIntFunction<$BlockState>;
        drops: $ResourceKey<$LootTable>;
        soundType: $SoundType;
        static CODEC: $Codec<$BlockBehaviour$Properties>;
        isRandomlyTicking: boolean;
        spawnTerrainParticles: boolean;
        isAir: boolean;
        hasCollision: boolean;
        constructor();
        get luminance(): $ToIntFunction<$BlockState>;
    }
    export class $BlockBehaviour$StateArgumentPredicate<A> {
    }
    export interface $BlockBehaviour$StateArgumentPredicate<A> {
        test(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, value: A): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviour$StateArgumentPredicate}.
     */
    export type $BlockBehaviour$StateArgumentPredicate_<A> = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: A) => boolean);
    export class $StateHolder<O, S> implements $StateHolderAccessor<any, any>, $FastMapStateHolder<any> {
        getValues(): $Map<$Property<never>, $Comparable<never>>;
        /**
         * @return the value of the given Property for this state
         */
        getValue<T extends $Comparable<T>>(property: $Property<T>): T;
        /**
         * @return an unmodifiable collection of all possible properties.
         */
        getProperties(): $Collection<$Property<never>>;
        setValue<T extends $Comparable<T>, V extends T>(property: $Property<T>, value: V): $Object;
        hasProperty<T extends $Comparable<T>>(property: $Property<T>): boolean;
        static codec<O, S extends $StateHolder<O, S>>(propertyMap: $Codec<O>, holderFunction: $Function_<O, S>): $Codec<S>;
        cycle<T extends $Comparable<T>>(property: $Property<T>): $Object;
        replacePropertyMap(arg0: $Reference2ObjectMap<any, any>): void;
        static findNextInCollection<T>(collection: $Collection_<T>, value: T): T;
        getOptionalValue<T extends $Comparable<T>>(property: $Property<T>): (T) | undefined;
        redirect$hod000$ferritecore$getNeighborFromFastMap(arg0: $Table<any, any, any>, arg1: $Object, arg2: $Object): $Object;
        trySetValue<T extends $Comparable<T>, V extends T>(property: $Property<T>, value: V): $Object;
        populateNeighbours(possibleStateMap: $Map_<any, any>): void;
        getStateMap(): $FastMap<any>;
        getStateIndex(): number;
        getVanillaPropertyMap(): $Reference2ObjectMap<any, any>;
        setStateMap(arg0: $FastMap<any>): void;
        setStateIndex(arg0: number): void;
        setNeighborTable(arg0: $Table<any, any, any>): void;
        getNeighborTable(): $Table<any, any, any>;
        getOwner(): $Object;
        static PROPERTIES_TAG: string;
        owner: $Object;
        static PROPERTY_ENTRY_TO_STRING_FUNCTION: $Function<$Map$Entry<$Property<never>, $Comparable<never>>, string>;
        static NAME_TAG: string;
        propertiesCodec: $MapCodec<$Object>;
        constructor(owner: $Object, values: $Reference2ObjectArrayMap<$Property<never>, $Comparable_<never>>, propertiesCodec: $MapCodec_<$Object>);
        get values(): $Map<$Property<never>, $Comparable<never>>;
        get properties(): $Collection<$Property<never>>;
        get vanillaPropertyMap(): $Reference2ObjectMap<any, any>;
    }
}
