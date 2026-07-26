import { $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Services_ } from "@package/net/minecraft/server";
import { $DispenserBlockEntityAccessor } from "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder, $AbstractCookingRecipe, $RecipeHolder_, $CampfireCookingRecipe, $RecipeType_, $CraftingInput, $CraftingInput$Positioned } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompletableFuture, $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $EntityType_, $Entity, $EntityType, $LivingEntity, $Pose } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Mesh } from "@package/dev/tr7zw/skinlayers/api";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $AccessorBlockEntity, $AccessorBlockEntityType } from "@package/com/railwayteam/railways/mixin";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $FormattedCharSequence, $RandomSource, $StringRepresentable } from "@package/net/minecraft/util";
import { $VaultBlockEntity } from "@package/net/minecraft/world/level/block/entity/vault";
import { $RandomizableContainer, $MenuProvider, $Nameable, $Container, $Clearable, $LockCode_, $WorldlyContainer } from "@package/net/minecraft/world";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IBlockEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $Connection } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $BeaconLightBehavior_, $BeaconLightBehavior } from "@package/dev/lambdaurora/lambdynlights/api/behavior";
import { $DataComponentMap$Builder, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $CraftingContainer, $AbstractContainerMenu, $ContainerData, $StackedContentsCompatible, $RecipeCraftingHolder } from "@package/net/minecraft/world/inventory";
import { $TransactionContext } from "@package/net/fabricmc/fabric/api/transfer/v1/transaction";
import { $Cullable } from "@package/dev/tr7zw/entityculling/versionless/access";
import { $UpdateReceiver, $LithiumStackList } from "@package/net/caffeinemc/mods/lithium/common/hopper";
import { $InventoryChangeTracker, $InventoryChangeListener, $InventoryChangeEmitter } from "@package/net/caffeinemc/mods/lithium/common/block/entity/inventory_change_tracking";
import { $Item, $JukeboxSongPlayer, $Item_, $DyeColor, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SkullSettings } from "@package/dev/tr7zw/skinlayers/accessor";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $FilteredText_ } from "@package/net/minecraft/server/network";
import { $PlayerModelPart_, $Inventory, $Player, $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $SpecialLogicInventory } from "@package/net/fabricmc/fabric/impl/transfer/item";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $ComparatorTracker } from "@package/net/caffeinemc/mods/lithium/common/block/entity/inventory_comparator_tracking";
import { $ExtendedBlockEntityType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $StructureMode, $StructureMode_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $VibrationSystem$User, $VibrationSystem$Data, $VibrationSystem, $VibrationSystem$Listener } from "@package/net/minecraft/world/level/gameevent/vibrations";
import { $LithiumTransferConditionInventory, $LithiumInventory } from "@package/net/caffeinemc/mods/lithium/api/inventory";
import { $BlockEntityTypeAccessor } from "@package/net/neoforged/neoforge/mixins";
import { $Mirror_, $Mirror, $Block, $Block_, $Rotation_, $SculkSpreader, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_, $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityAccessor as $BlockEntityAccessor$1 } from "@package/com/copycatsplus/copycats/mixin/foundation/copycat";
import { $Type } from "@package/com/mojang/datafixers/types";
import { $RenderDataBlockEntity } from "@package/net/fabricmc/fabric/api/blockview/v2";
import { $FabricBlockEntityType, $FabricBlockEntityType$Builder } from "@package/net/fabricmc/fabric/api/object/builder/v1/block/entity";
import { $ETFEntity } from "@package/traben/entity_texture_features/utils";
import { $PistonMovingBlockEntity } from "@package/net/minecraft/world/level/block/piston";
import { $BlockEntityAccessor } from "@package/io/wispforest/owo/mixin/ui/access";
import { $BeaconBlockEntityLightSource } from "@package/dev/lambdaurora/lambdynlights/echo";
import { $GameEventListener, $GameEvent, $GameEventListener$Provider, $PositionSource, $GameEvent$Context_, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $BlockEntityRenderPredicate, $BlockEntityRenderPredicate_ } from "@package/net/caffeinemc/mods/sodium/api/blockentity";
import { $UUID_, $Set_, $Map, $List, $Map_, $List_, $Set, $UUID } from "@package/java/util";
import { $WrappedBlockEntityTickInvokerAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/world/block_entity_ticking/sleeping";
import { $BlockEntityTypeExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $ObjIntConsumer_, $UnaryOperator_, $BooleanSupplier_, $Predicate_, $Function_ } from "@package/java/util/function";
import { $ReferenceArraySet } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $BlockPos, $BlockPos_, $Holder$Reference, $Vec3i, $HolderLookup$Provider, $Holder, $Direction_, $NonNullList, $Direction, $Registry, $HolderGetter, $Holder_ } from "@package/net/minecraft/core";
import { $RenderAttachmentBlockEntity } from "@package/net/fabricmc/fabric/api/rendering/data/v1";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $SetChangedHandlingBlockEntity, $SleepingBlockEntity } from "@package/net/caffeinemc/mods/lithium/common/block/entity";
import { $Enum, $Iterable, $Record, $Class, $Object } from "@package/java/lang";
import { $SectionedEntityMovementListener } from "@package/net/caffeinemc/mods/lithium/common/tracking/entity";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ContainerSingleItem$BlockContainerSingleItem } from "@package/net/minecraft/world/ticks";
import { $ItemLike_, $Spawner, $BlockGetter, $BaseCommandBlock, $BaseSpawner, $Level_, $Level } from "@package/net/minecraft/world/level";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $TrialSpawner$StateAccessor, $TrialSpawner, $TrialSpawnerState_, $TrialSpawnerState } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $Logger } from "@package/org/slf4j";
import { $BlockEntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $CustomData, $ResolvableProfile_, $ResolvableProfile } from "@package/net/minecraft/world/item/component";
import { $ClientboundBlockEntityDataPacket, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $SupportCache } from "@package/net/caffeinemc/mods/lithium/common/world/blockentity";
import { $EMFEntity } from "@package/traben/entity_model_features/utils";
import { $ETFEntityRenderState } from "@package/traben/entity_texture_features/features/state";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Team } from "@package/net/minecraft/world/scores";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ETFPlayerEntity } from "@package/traben/entity_texture_features/features/player";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as trialspawner from "@package/net/minecraft/world/level/block/entity/trialspawner";
export * as vault from "@package/net/minecraft/world/level/block/entity/vault";

declare module "@package/net/minecraft/world/level/block/entity" {
    export class $BeehiveBlockEntity$BeeReleaseStatus extends $Enum<$BeehiveBlockEntity$BeeReleaseStatus> {
        static values(): $BeehiveBlockEntity$BeeReleaseStatus[];
        static valueOf(arg0: string): $BeehiveBlockEntity$BeeReleaseStatus;
        static BEE_RELEASED: $BeehiveBlockEntity$BeeReleaseStatus;
        static EMERGENCY: $BeehiveBlockEntity$BeeReleaseStatus;
        static HONEY_DELIVERED: $BeehiveBlockEntity$BeeReleaseStatus;
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$BeeReleaseStatus}.
     */
    export type $BeehiveBlockEntity$BeeReleaseStatus_ = "honey_delivered" | "bee_released" | "emergency";
    export class $SculkCatalystBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$SculkCatalystBlockEntity$CatalystListener> {
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, sculkCatalyst: $SculkCatalystBlockEntity): void;
        getListener(): $SculkCatalystBlockEntity$CatalystListener;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get listener(): $SculkCatalystBlockEntity$CatalystListener;
    }
    export class $HopperBlockEntity extends $RandomizableContainerBlockEntity implements $Hopper, $LithiumInventory, $InventoryChangeListener, $UpdateReceiver, $SectionedEntityMovementListener, $InventoryChangeTracker, $SleepingBlockEntity {
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        lithium$invalidateCacheOnUndirectedNeighborUpdate(): void;
        lithium$invalidateCacheOnNeighborUpdate(arg0: boolean): void;
        lithium$invalidateCacheOnNeighborUpdate(arg0: $Direction_): void;
        static getContainerAt(level: $Level_, pos: $BlockPos_): $Container;
        static pushItemsTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $HopperBlockEntity): void;
        lithium$handleInventoryRemoved(arg0: $Container): void;
        lithium$handleComparatorAdded(arg0: $Container): boolean;
        lithium$handleInventoryContentModified(arg0: $Container): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        lithium$startSleeping(): boolean;
        static suckInItems(level: $Level_, hopper: $Hopper): boolean;
        /**
         * @return the x position for this hopper.
         */
        getLevelX(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelY(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelZ(): number;
        isGridAligned(): boolean;
        setCooldown(cooldownTime: number): void;
        isOnCustomCooldown(): boolean;
        static getItemsAtAndAbove(level: $Level_, hopper: $Hopper): $List<$ItemEntity>;
        handler$cbb003$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        getLastUpdateTime(): number;
        getExtractBlockInventory(level: $Level_, pos: $BlockPos_, state: $BlockState_): $Container;
        getInsertInventory(arg0: $Level_): $Container;
        getInsertBlockInventory(arg0: $Level_): $Container;
        lithium$handleEntityMovement(arg0: $Class<any>): void;
        /**
         * Attempts to place the passed stack in the container, using as many slots as required.
         * @return any leftover stack
         */
        static addItem(source: $Container | null, destination: $Container, stack: $ItemStack_, direction: $Direction_ | null): $ItemStack;
        static addItem(container: $Container, item: $ItemEntity): boolean;
        static entityInside(level: $Level_, pos: $BlockPos_, state: $BlockState_, entity: $Entity, blockEntity: $HopperBlockEntity): void;
        getSuckAabb(): $AABB;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        sleepOnlyCurrentTick(): void;
        isSleeping(): boolean;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        level: $Level;
        static $assertionsDisabled: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        static HOPPER_CONTAINER_SIZE: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        static MOVE_ITEM_SPEED: number;
        hasComparators: number;
        lootTableSeed: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get levelX(): number;
        get levelY(): number;
        get levelZ(): number;
        get gridAligned(): boolean;
        set cooldown(value: number);
        get onCustomCooldown(): boolean;
        get lastUpdateTime(): number;
        get suckAabb(): $AABB;
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export interface $DecoratedPotPattern extends RegistryMarked<RegistryTypes.DecoratedPotPatternTag, RegistryTypes.DecoratedPotPattern> {}
    export class $BlockEntityTicker<T extends $BlockEntity> {
    }
    export interface $BlockEntityTicker<T extends $BlockEntity> {
        tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: T): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityTicker}.
     */
    export type $BlockEntityTicker_<T> = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: T) => void);
    export class $SkullBlockEntity extends $BlockEntity implements $ETFPlayerEntity, $SkullSettings {
        getNoteBlockSound(): $ResourceLocation;
        static fetchProfileByName(name: string, services: $Services_): $CompletableFuture<($GameProfile) | undefined>;
        static fetchProfileById(id: $UUID_, services: $Services_, cacheUninitialized: $BooleanSupplier_): $CompletableFuture<($GameProfile) | undefined>;
        getOwnerProfile(): $ResolvableProfile;
        static fetchGameProfile(profileName: string): $CompletableFuture<($GameProfile) | undefined>;
        static fetchGameProfile(profileUuid: $UUID_): $CompletableFuture<($GameProfile) | undefined>;
        getHeadLayers(): $Mesh;
        setupHeadLayers(box: $Mesh): void;
        setLastTexture(texture: $ResourceLocation_): void;
        getLastTexture(): $ResourceLocation;
        setOwner(owner: $ResolvableProfile_ | null): void;
        static clear(): void;
        static setup(services: $Services_, mainThreadExecutor: $Executor_): void;
        initialized(): boolean;
        setInitialized(initialized: boolean): void;
        static animation(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SkullBlockEntity): void;
        etf$getEntity(): $Entity;
        /**
         * Returns whether this `BlockEntity` has custom outline rendering behavior.
         */
        etf$isTeammate(player: $Player): boolean;
        etf$getInventory(): $Inventory;
        etf$isPartVisible(part: $PlayerModelPart_): boolean;
        etf$getName(): $Component;
        etf$getUuidAsString(): string;
        getAnimation(partialTick: number): number;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getMesh(): $Mesh;
        worldPosition: $BlockPos;
        static CHECKED_MAIN_THREAD_EXECUTOR: $Executor;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get noteBlockSound(): $ResourceLocation;
        get ownerProfile(): $ResolvableProfile;
        get headLayers(): $Mesh;
        set upHeadLayers(value: $Mesh);
        set owner(value: $ResolvableProfile_ | null);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get mesh(): $Mesh;
    }
    export class $LidBlockEntity {
    }
    export interface $LidBlockEntity {
        getOpenNess(partialTicks: number): number;
    }
    /**
     * Values that may be interpreted as {@link $LidBlockEntity}.
     */
    export type $LidBlockEntity_ = ((arg0: number) => number);
    export class $ComparatorBlockEntity extends $BlockEntity {
        getOutputSignal(): number;
        setOutputSignal(output: number): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $DecoratedPotPattern extends $Record {
        assetId(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotPattern}.
     */
    export type $DecoratedPotPattern_ = RegistryTypes.DecoratedPotPattern | { assetId?: $ResourceLocation_,  } | [assetId?: $ResourceLocation_, ];
    export class $JigsawBlockEntity$JointType extends $Enum<$JigsawBlockEntity$JointType> implements $StringRepresentable {
        getTranslatedName(): $Component;
        static values(): $JigsawBlockEntity$JointType[];
        static valueOf(arg0: string): $JigsawBlockEntity$JointType;
        static byName(name: string): ($JigsawBlockEntity$JointType) | undefined;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ROLLABLE: $JigsawBlockEntity$JointType;
        static ALIGNED: $JigsawBlockEntity$JointType;
        get translatedName(): $Component;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $JigsawBlockEntity$JointType}.
     */
    export type $JigsawBlockEntity$JointType_ = "rollable" | "aligned";
    export class $CommandBlockEntity$Mode extends $Enum<$CommandBlockEntity$Mode> {
        static values(): $CommandBlockEntity$Mode[];
        static valueOf(arg0: string): $CommandBlockEntity$Mode;
        static AUTO: $CommandBlockEntity$Mode;
        static REDSTONE: $CommandBlockEntity$Mode;
        static SEQUENCE: $CommandBlockEntity$Mode;
    }
    /**
     * Values that may be interpreted as {@link $CommandBlockEntity$Mode}.
     */
    export type $CommandBlockEntity$Mode_ = "sequence" | "auto" | "redstone";
    export class $ChestLidController {
        tickLid(): void;
        shouldBeOpen(shouldBeOpen: boolean): void;
        getOpenness(partialTicks: number): number;
        constructor();
    }
    export class $BlockEntity$DataComponentInput {
    }
    export interface $BlockEntity$DataComponentInput {
    }
    export class $BeehiveBlockEntity$BeeData {
    }
    export class $BeaconBlockEntity extends $BlockEntity implements $MenuProvider, $Nameable, $BeaconBlockEntityLightSource {
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        static filterEffect(effect: $Holder_<$MobEffect> | null): $Holder<$MobEffect>;
        getBeamSections(): $List<$BeaconBlockEntity$BeaconBeamSection>;
        lambdynlights$setDynamicLightBeam(beam: $BeaconLightBehavior_): void;
        lambdynlights$getLevels(): number;
        lambdynlights$getDynamicLightBeam(): $BeaconLightBehavior;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BeaconBlockEntity): void;
        getDisplayName(): $Component;
        getName(): $Component;
        static playSound(level: $Level_, pos: $BlockPos_, sound: $SoundEvent_): void;
        getCustomName(): $Component;
        /**
         * Sets the custom name for this beacon.
         */
        setCustomName(name: $Component_ | null): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        hasCustomName(): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        primaryPower: $Holder<$MobEffect>;
        static BEACON_EFFECTS: $List<$List<$Holder<$MobEffect>>>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        beamSections: $List<$BeaconBlockEntity$BeaconBeamSection>;
        worldPosition: $BlockPos;
        secondaryPower: $Holder<$MobEffect>;
        static DATA_SECONDARY: number;
        name: $Component;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        static DATA_LEVELS: number;
        levels: number;
        static DATA_PRIMARY: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get displayName(): $Component;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $SculkShriekerBlockEntity$VibrationUser implements $VibrationSystem$User {
        requiresAdjacentChunksToBeTicking(): boolean;
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        calculateTravelTimeInTicks(arg0: number): number;
        isValidVibration(arg0: $Holder_<$GameEvent>, arg1: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $SignText {
        getRenderMessages(renderMessagesFiltered: boolean, formatter: $Function_<$Component, $FormattedCharSequence>): $FormattedCharSequence[];
        hasAnyClickCommands(player: $Player): boolean;
        hasMessage(player: $Player): boolean;
        hasGlowingText(): boolean;
        setHasGlowingText(hasGlowingText: boolean): $SignText;
        setColor(color: $DyeColor_): $SignText;
        getMessage(index: number, isFiltered: boolean): $Component;
        setMessage(index: number, text: $Component_, filteredText: $Component_): $SignText;
        setMessage(index: number, text: $Component_): $SignText;
        getMessages(isFiltered: boolean): $Component[];
        getColor(): $DyeColor;
        static DIRECT_CODEC: $Codec<$SignText>;
        static LINES: number;
        constructor();
        constructor(messages: $Component_[], filteredMessages: $Component_[], color: $DyeColor_, hasGlowingText: boolean);
    }
    export class $BedBlockEntity extends $BlockEntity {
        setColor(color: $DyeColor_): void;
        getColor(): $DyeColor;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, color: $DyeColor_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $TrappedChestBlockEntity extends $ChestBlockEntity {
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BlockEntityType<T extends $BlockEntity> implements $BlockEntityTypeAccessor, $ExtendedBlockEntityType<any>, $BlockEntityTypeExtension<any>, $FabricBlockEntityType, $AccessorBlockEntityType {
        flywheel$getVisualizer(): $BlockEntityVisualizer<any>;
        flywheel$setVisualizer(visualizer: $BlockEntityVisualizer<any>): void;
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): boolean;
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<any>[];
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<any>): void;
        addSupportedBlock(arg0: $Block_): void;
        isValid(state: $BlockState_): boolean;
        static getKey(blockEntityType: $BlockEntityType_<never>): $ResourceLocation;
        create(pos: $BlockPos_, state: $BlockState_): $Object;
        getBlockEntity(level: $BlockGetter, pos: $BlockPos_): $Object;
        builtInRegistryHolder(): $Holder$Reference<$BlockEntityType<never>>;
        getValidBlocks(): $Set<$Block>;
        neoforge$setValidBlocks(validBlocks: $Set_<$Block_>): void;
        setValidBlocks(validBlocks: $Set_<$Block_>): void;
        static BLAST_FURNACE: $BlockEntityType<$BlastFurnaceBlockEntity>;
        static HANGING_SIGN: $BlockEntityType<$HangingSignBlockEntity>;
        static COMPARATOR: $BlockEntityType<$ComparatorBlockEntity>;
        static VAULT: $BlockEntityType<$VaultBlockEntity>;
        static SKULL: $BlockEntityType<$SkullBlockEntity>;
        static CHISELED_BOOKSHELF: $BlockEntityType<$ChiseledBookShelfBlockEntity>;
        static JIGSAW: $BlockEntityType<$JigsawBlockEntity>;
        static DECORATED_POT: $BlockEntityType<$DecoratedPotBlockEntity>;
        static BEACON: $BlockEntityType<$BeaconBlockEntity>;
        static CRAFTER: $BlockEntityType<$CrafterBlockEntity>;
        validBlocks: $Set<$Block>;
        static FURNACE: $BlockEntityType<$FurnaceBlockEntity>;
        static BEEHIVE: $BlockEntityType<$BeehiveBlockEntity>;
        static PISTON: $BlockEntityType<$PistonMovingBlockEntity>;
        static TRAPPED_CHEST: $BlockEntityType<$TrappedChestBlockEntity>;
        static END_PORTAL: $BlockEntityType<$TheEndPortalBlockEntity>;
        static ENDER_CHEST: $BlockEntityType<$EnderChestBlockEntity>;
        static COMMAND_BLOCK: $BlockEntityType<$CommandBlockEntity>;
        static SIGN: $BlockEntityType<$SignBlockEntity>;
        static STRUCTURE_BLOCK: $BlockEntityType<$StructureBlockEntity>;
        static BELL: $BlockEntityType<$BellBlockEntity>;
        static ENCHANTING_TABLE: $BlockEntityType<$EnchantingTableBlockEntity>;
        static BREWING_STAND: $BlockEntityType<$BrewingStandBlockEntity>;
        static BED: $BlockEntityType<$BedBlockEntity>;
        static MOB_SPAWNER: $BlockEntityType<$SpawnerBlockEntity>;
        static CALIBRATED_SCULK_SENSOR: $BlockEntityType<$CalibratedSculkSensorBlockEntity>;
        static SCULK_CATALYST: $BlockEntityType<$SculkCatalystBlockEntity>;
        static CONDUIT: $BlockEntityType<$ConduitBlockEntity>;
        static CAMPFIRE: $BlockEntityType<$CampfireBlockEntity>;
        static END_GATEWAY: $BlockEntityType<$TheEndGatewayBlockEntity>;
        static SMOKER: $BlockEntityType<$SmokerBlockEntity>;
        static DISPENSER: $BlockEntityType<$DispenserBlockEntity>;
        static SCULK_SHRIEKER: $BlockEntityType<$SculkShriekerBlockEntity>;
        static HOPPER: $BlockEntityType<$HopperBlockEntity>;
        static CHEST: $BlockEntityType<$ChestBlockEntity>;
        static DAYLIGHT_DETECTOR: $BlockEntityType<$DaylightDetectorBlockEntity>;
        static BANNER: $BlockEntityType<$BannerBlockEntity>;
        static SCULK_SENSOR: $BlockEntityType<$SculkSensorBlockEntity>;
        static TRIAL_SPAWNER: $BlockEntityType<$TrialSpawnerBlockEntity>;
        static LECTERN: $BlockEntityType<$LecternBlockEntity>;
        static SHULKER_BOX: $BlockEntityType<$ShulkerBoxBlockEntity>;
        static BRUSHABLE_BLOCK: $BlockEntityType<$BrushableBlockEntity>;
        static JUKEBOX: $BlockEntityType<$JukeboxBlockEntity>;
        static BARREL: $BlockEntityType<$BarrelBlockEntity>;
        static DROPPER: $BlockEntityType<$DropperBlockEntity>;
        constructor(factory: $BlockEntityType$BlockEntitySupplier_<$Object>, validBlocks: $Set_<$Block_>, dataType: $Type<never>);
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType}.
     */
    export type $BlockEntityType_<T> = RegistryTypes.BlockEntityType;
    export class $SmokerBlockEntity extends $AbstractFurnaceBlockEntity {
        inventoryChangeListeners: $ReferenceArraySet<any>;
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $CampfireBlockEntity extends $BlockEntity implements $Clearable, $SleepingBlockEntity {
        dowse(): void;
        clearContent(): void;
        getCookableRecipe(stack: $ItemStack_): ($RecipeHolder<$CampfireCookingRecipe>) | undefined;
        placeFood(entity: $LivingEntity | null, food: $ItemStack_, cookTime: number): boolean;
        /**
         * @return the items currently held in this campfire
         */
        getItems(): $NonNullList<$ItemStack>;
        static particleTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        static cookTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        static cooldownTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $CampfireBlockEntity): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        lithium$startSleeping(): boolean;
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        sleepOnlyCurrentTick(): void;
        isSleeping(): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get items(): $NonNullList<$ItemStack>;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export class $BarrelBlockEntity extends $RandomizableContainerBlockEntity implements $LithiumInventory, $InventoryChangeTracker {
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        recheckOpen(): void;
        handler$can000$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        updateBlockState(state: $BlockState_, open: boolean): void;
        playSound(state: $BlockState_, sound: $SoundEvent_): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        lootTableSeed: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BeaconBlockEntity$BeaconBeamSection {
        increaseHeight(): void;
        getHeight(): number;
        getColor(): number;
        color: number;
        constructor(color: number);
        get height(): number;
    }
    export class $SculkSensorBlockEntity$VibrationUser implements $VibrationSystem$User {
        requiresAdjacentChunksToBeTicking(): boolean;
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        calculateTravelTimeInTicks(distance: number): number;
        isValidVibration(gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_): boolean;
        onDataChanged(): void;
        get listenableEvents(): $TagKey<$GameEvent>;
    }
    export class $PotDecorations extends $Record {
        ordered(): $List<$Item>;
        front(): ($Item) | undefined;
        back(): ($Item) | undefined;
        static load(tag: $CompoundTag_ | null): $PotDecorations;
        save(tag: $CompoundTag_): $CompoundTag;
        left(): ($Item) | undefined;
        right(): ($Item) | undefined;
        static CODEC: $Codec<$PotDecorations>;
        static EMPTY: $PotDecorations;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PotDecorations>;
        constructor(back: $Item_, left: $Item_, right: $Item_, front: $Item_);
        constructor(arg0: ($Item_) | undefined, arg1: ($Item_) | undefined, arg2: ($Item_) | undefined, arg3: ($Item_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PotDecorations}.
     */
    export type $PotDecorations_ = { back?: ($Item_) | undefined, left?: ($Item_) | undefined, right?: ($Item_) | undefined, front?: ($Item_) | undefined,  } | [back?: ($Item_) | undefined, left?: ($Item_) | undefined, right?: ($Item_) | undefined, front?: ($Item_) | undefined, ];
    export class $BannerPatternLayers extends $Record {
        layers(): $List<$BannerPatternLayers$Layer>;
        removeLast(): $BannerPatternLayers;
        static CODEC: $Codec<$BannerPatternLayers>;
        static LOGGER: $Logger;
        static EMPTY: $BannerPatternLayers;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers>;
        constructor(arg0: $List_<$BannerPatternLayers$Layer_>);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers}.
     */
    export type $BannerPatternLayers_ = { layers?: $List_<$BannerPatternLayers$Layer_>,  } | [layers?: $List_<$BannerPatternLayers$Layer_>, ];
    export class $ChestBlockEntity extends $RandomizableContainerBlockEntity implements $LidBlockEntity, $InventoryChangeEmitter, $LithiumInventory, $InventoryChangeTracker {
        static lidAnimateTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ChestBlockEntity): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        recheckOpen(): void;
        static getOpenCount(level: $BlockGetter, pos: $BlockPos_): number;
        handler$cap001$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        getOpenNess(partialTicks: number): number;
        static swapContents(chest: $ChestBlockEntity, otherChest: $ChestBlockEntity): void;
        signalOpenCount(level: $Level_, pos: $BlockPos_, state: $BlockState_, eventId: number, eventParam: number): void;
        static playSound(level: $Level_, pos: $BlockPos_, state: $BlockState_, sound: $SoundEvent_): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        lootTableSeed: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BeehiveBlockEntity$Occupant extends $Record {
        ticksInHive(): number;
        minTicksInHive(): number;
        createEntity(level: $Level_, pos: $BlockPos_): $Entity;
        static of(entity: $Entity): $BeehiveBlockEntity$Occupant;
        static create(ticksInHive: number): $BeehiveBlockEntity$Occupant;
        entityData(): $CustomData;
        static CODEC: $Codec<$BeehiveBlockEntity$Occupant>;
        static LIST_CODEC: $Codec<$List<$BeehiveBlockEntity$Occupant>>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BeehiveBlockEntity$Occupant>;
        constructor(arg0: $CustomData, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$Occupant}.
     */
    export type $BeehiveBlockEntity$Occupant_ = { minTicksInHive?: number, entityData?: $CustomData, ticksInHive?: number,  } | [minTicksInHive?: number, entityData?: $CustomData, ticksInHive?: number, ];
    export class $CalibratedSculkSensorBlockEntity extends $SculkSensorBlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BlockEntity extends $AttachmentHolder implements $IBlockEntityExtension, $RenderDataBlockEntity, $RenderAttachmentBlockEntity, $SupportCache, $ComparatorTracker, $SetChangedHandlingBlockEntity, $Cullable, $AccessorBlockEntity, $EMFEntity, $ETFEntity, $BlockEntityAccessor, $BlockEntityAccessor$1 {
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setTimeout(): void;
        getLevel(): $Level;
        setLevel(level: $Level_): void;
        getType(): $BlockEntityType<never>;
        components(): $DataComponentMap;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isRemoved(): boolean;
        getBlockPos(): $BlockPos;
        getBlockState(): $BlockState;
        saveCustomAndMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        /**
         * @deprecated
         */
        removeComponentsFromTag(tag: $CompoundTag_): void;
        collectComponents(): $DataComponentMap;
        applyComponents(components: $DataComponentMap_, patch: $DataComponentPatch_): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setChanged(): void;
        static setChanged(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        etf$canBeBright(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        etf$isBlockEntity(): boolean;
        etf$getType(): $EntityType<any>;
        etf$getUuid(): $UUID;
        etf$getWorld(): $Level;
        etf$getBlockPos(): $BlockPos;
        etf$getOptifineId(): number;
        etf$getOptifineVehicleId(): number;
        etf$getBlockY(): number;
        /**
         * Gets a `CompoundTag` that can be used to store custom data for this block entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        etf$getNbt(): $CompoundTag;
        /**
         * @return whether this BlockEntity's level has been set
         */
        etf$hasCustomName(): boolean;
        etf$getCustomName(): $Component;
        etf$getScoreboardTeam(): $Team;
        etf$getItemsEquipped(): $Iterable<any>;
        etf$getHandItems(): $Iterable<any>;
        etf$getArmorItems(): $Iterable<any>;
        etf$distanceTo(entity: $Entity): number;
        etf$getVelocity(): $Vec3;
        etf$getPose(): $Pose;
        etf$getEntityKey(): string;
        /**
         * Gets a `CompoundTag` that can be used to store custom data for this block entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getPersistentData(): $CompoundTag;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        setRemoved(): void;
        fillCrashReportCategory(reportCategory: $CrashReportCategory): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        onlyOpCanSetNbt(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isForcedVisible(): boolean;
        setCulled(value: boolean): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isCulled(): boolean;
        setOutOfCamera(value: boolean): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        isOutOfCamera(): boolean;
        emf$prevX(): number;
        emf$getX(): number;
        emf$prevY(): number;
        emf$getY(): number;
        emf$prevZ(): number;
        emf$getZ(): number;
        emf$prevPitch(): number;
        emf$getPitch(): number;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isTouchingWater(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isOnFire(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$hasVehicle(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isOnGround(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isAlive(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isGlowing(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isInLava(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isInvisible(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$hasPassengers(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isSneaking(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isSprinting(): boolean;
        /**
         * @return whether this BlockEntity's level has been set
         */
        emf$isWet(): boolean;
        emf$age(): number;
        emf$getYaw(): number;
        emf$getVelocity(): $Vec3;
        emf$getTypeString(): string;
        emf$getVariableMap(): $Map<any, any>;
        handler$epb000$collective$setLevel(arg0: $Level_, arg1: $CallbackInfo): void;
        isValidBlockState(arg0: $BlockState_): boolean;
        static getPosFromTag(tag: $CompoundTag_): $BlockPos;
        /**
         * @return whether this BlockEntity's level has been set
         */
        hasLevel(): boolean;
        loadAdditional(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        loadWithComponents(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        loadCustomOnly(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        saveAdditional(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        saveWithFullMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        saveWithoutMetadata(registries: $HolderLookup$Provider): $CompoundTag;
        saveWithId(registries: $HolderLookup$Provider): $CompoundTag;
        saveCustomOnly(registries: $HolderLookup$Provider): $CompoundTag;
        static addEntityType(tag: $CompoundTag_, entityType: $BlockEntityType_<never>): void;
        saveToItem(stack: $ItemStack_, registries: $HolderLookup$Provider): void;
        static loadStatic(pos: $BlockPos_, state: $BlockState_, tag: $CompoundTag_, registries: $HolderLookup$Provider): $BlockEntity;
        getUpdatePacket(): $Packet<$ClientGamePacketListener>;
        getUpdateTag(registries: $HolderLookup$Provider): $CompoundTag;
        handler$epb000$collective$setRemoved(arg0: $CallbackInfo): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        clearRemoved(): void;
        triggerEvent(id: number, type: number): boolean;
        handler$coi000$yumi_mc_core$yumi$onPopulateCrashDetails(crashReportCategory: $CrashReportCategory, ci: $CallbackInfo): void;
        /**
         * @deprecated
         */
        setBlockState(blockState: $BlockState_): void;
        applyImplicitComponents(componentInput: $BlockEntity$DataComponentInput): void;
        applyComponentsFromItemStack(stack: $ItemStack_): void;
        collectImplicitComponents(components: $DataComponentMap$Builder): void;
        setComponents(components: $DataComponentMap_): void;
        static parseCustomNameSafe(customName: string, registries: $HolderLookup$Provider): $Component;
        getRenderAttachmentData(): $Object;
        getRenderData(): $Object;
        /**
         * @return whether this BlockEntity's level has been set
         */
        lithium$isSupported(): boolean;
        lithium$onComparatorAdded(arg0: $Direction_, arg1: number): void;
        /**
         * @return whether this BlockEntity's level has been set
         */
        lithium$hasAnyComparatorNearby(): boolean;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        onLoad(): void;
        /**
         * Returns whether this `BlockEntity` has custom outline rendering behavior.
         */
        hasCustomOutlineRendering(player: $Player): boolean;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        invalidateCapabilities(): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        requestModelDataUpdate(): void;
        /**
         * Called when you receive a TileEntityData packet for the location this
         * TileEntity is currently in. On the client, the NetworkManager will always
         * be the remote server. On the server, it will be whomever is responsible for
         * sending the packet.
         */
        onDataPacket(net: $Connection, pkt: $ClientboundBlockEntityDataPacket, lookupProvider: $HolderLookup$Provider): void;
        handleUpdateTag(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        onChunkUnloaded(): void;
        /**
         * Allows you to return additional model data.
         * This data can be used to provide additional functionality in your `BakedModel`.
         * You need to schedule a refresh of you model data via `#requestModelDataUpdate()` if the result of this function changes.
         * 
         * This method is always called on the main client thread.
         */
        getModelData(): $ModelData;
        /**
         * Marks this `BlockEntity` as valid again (no longer removed from the level).
         */
        lithium$handleSetChanged(): void;
        etf$getETFRenderState(): $ETFEntityRenderState;
        setWorldPosition(arg0: $BlockPos_): void;
        owo$setCachedState(blockState: $BlockState_): void;
        callSaveMetadata(tag: $CompoundTag_): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        get blockPos(): $BlockPos;
        get persistentData(): $CompoundTag;
        get forcedVisible(): boolean;
        get updatePacket(): $Packet<$ClientGamePacketListener>;
        get renderAttachmentData(): $Object;
        get renderData(): $Object;
        get modelData(): $ModelData;
    }
    export class $ShulkerBoxBlockEntity$AnimationStatus extends $Enum<$ShulkerBoxBlockEntity$AnimationStatus> {
        static values(): $ShulkerBoxBlockEntity$AnimationStatus[];
        static valueOf(arg0: string): $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSED: $ShulkerBoxBlockEntity$AnimationStatus;
        static CLOSING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENING: $ShulkerBoxBlockEntity$AnimationStatus;
        static OPENED: $ShulkerBoxBlockEntity$AnimationStatus;
    }
    /**
     * Values that may be interpreted as {@link $ShulkerBoxBlockEntity$AnimationStatus}.
     */
    export type $ShulkerBoxBlockEntity$AnimationStatus_ = "closed" | "opening" | "opened" | "closing";
    export class $ShulkerBoxBlockEntity extends $RandomizableContainerBlockEntity implements $WorldlyContainer, $LithiumInventory, $InventoryChangeTracker, $SleepingBlockEntity {
        getAnimationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        getProgress(partialTicks: number): number;
        getSlotsForFace(side: $Direction_): number[];
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        handler$cbc004$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        loadFromTag(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        handler$bce000$supplementaries$supp$preventInsertion(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $CallbackInfoReturnable<any>): void;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ShulkerBoxBlockEntity): void;
        isClosed(): boolean;
        getColor(): $DyeColor;
        getBoundingBox(state: $BlockState_): $AABB;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        lithium$startSleeping(): boolean;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        sleepOnlyCurrentTick(): void;
        isSleeping(): boolean;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        static EVENT_SET_OPEN_COUNT: number;
        static CONTAINER_SIZE: number;
        static COLUMNS: number;
        static OPENING_TICK_LENGTH: number;
        hasComparators: number;
        static MAX_LID_HEIGHT: number;
        static MAX_LID_ROTATION: number;
        lootTableSeed: number;
        static ROWS: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(color: $DyeColor_ | null, pos: $BlockPos_, blockState: $BlockState_);
        get animationStatus(): $ShulkerBoxBlockEntity$AnimationStatus;
        get closed(): boolean;
        get color(): $DyeColor;
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export class $DecoratedPotBlockEntity$WobbleStyle extends $Enum<$DecoratedPotBlockEntity$WobbleStyle> {
        static values(): $DecoratedPotBlockEntity$WobbleStyle[];
        static valueOf(arg0: string): $DecoratedPotBlockEntity$WobbleStyle;
        duration: number;
        static POSITIVE: $DecoratedPotBlockEntity$WobbleStyle;
        static NEGATIVE: $DecoratedPotBlockEntity$WobbleStyle;
    }
    /**
     * Values that may be interpreted as {@link $DecoratedPotBlockEntity$WobbleStyle}.
     */
    export type $DecoratedPotBlockEntity$WobbleStyle_ = "positive" | "negative";
    export interface $BannerPattern extends RegistryMarked<RegistryTypes.BannerPatternTag, RegistryTypes.BannerPattern> {}
    export class $BlockEntity$ComponentHelper {
        static COMPONENTS_CODEC: $Codec<$DataComponentMap>;
    }
    export class $BrushableBlockEntity extends $BlockEntity {
        unpackLootTable(player: $Player): void;
        checkReset(): void;
        brush(startTick: number, arg1: $Player, player: $Direction_): boolean;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        getHitDirection(): $Direction;
        getItem(): $ItemStack;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get hitDirection(): $Direction;
        get item(): $ItemStack;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $EnderChestBlockEntity extends $BlockEntity implements $LidBlockEntity {
        static lidAnimateTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $EnderChestBlockEntity): void;
        recheckOpen(): void;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        getOpenNess(partialTicks: number): number;
        stillValid(player: $Player): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BaseContainerBlockEntity extends $BlockEntity implements $Container, $MenuProvider, $Nameable, $InventoryChangeEmitter, $SpecialLogicInventory {
        createMenu(containerId: number, inventory: $Inventory): $AbstractContainerMenu;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        canOpen(player: $Player): boolean;
        clearContent(): void;
        getItems(): $NonNullList<$ItemStack>;
        lithium$emitStackListReplaced(): void;
        getDefaultName(): $Component;
        setItems(items: $NonNullList<$ItemStack_>): void;
        lithium$forwardContentChangeOnce(arg0: $InventoryChangeListener, arg1: $LithiumStackList): void;
        lithium$emitContentModified(): void;
        lithium$forwardMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        lithium$stopForwardingMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        handler$cao000$lithium$readNbtStackListReplacement(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $CallbackInfo): void;
        static canUnlock(player: $Player, code: $LockCode_, displayName: $Component_): boolean;
        wrapOperation$ffj000$fabric_transfer_api_v1$fabric_redirectMarkDirty(arg0: $BaseContainerBlockEntity, arg1: $Operation_<any>): void;
        fabric_setSuppress(arg0: boolean): void;
        fabric_onFinalCommit(arg0: number, arg1: $ItemStack_, arg2: $ItemStack_): void;
        getDisplayName(): $Component;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        getName(): $Component;
        isEmpty(): boolean;
        stillValid(player: $Player): boolean;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        getCustomName(): $Component;
        lithium$emitRemoved(): void;
        lithium$emitFirstComparatorAdded(): void;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        hasCustomName(): boolean;
        emitCallbackReplaced(): void;
        fabric_onTransfer(arg0: number, arg1: $TransactionContext): void;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        get defaultName(): $Component;
        get displayName(): $Component;
        get name(): $Component;
        get customName(): $Component;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$Builder<T extends $BlockEntity> implements $FabricBlockEntityType$Builder<any> {
        static of<T extends $BlockEntity>(factory: $BlockEntityType$BlockEntitySupplier_<T>, ...validBlocks: $Block_[]): $BlockEntityType$Builder<T>;
        build(): $BlockEntityType<any>;
        build(dataType: $Type<never>): $BlockEntityType<$Object>;
        validBlocks: $Set<$Block>;
    }
    export class $CommandBlockEntity extends $BlockEntity {
        getCommandBlock(): $BaseCommandBlock;
        setAutomatic(auto: boolean): void;
        isPowered(): boolean;
        setPowered(auto: boolean): void;
        markConditionMet(): boolean;
        wasConditionMet(): boolean;
        isConditional(): boolean;
        onModeSwitch(): void;
        getMode(): $CommandBlockEntity$Mode;
        isAutomatic(): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get commandBlock(): $BaseCommandBlock;
        get conditional(): boolean;
        get mode(): $CommandBlockEntity$Mode;
    }
    export class $DecoratedPotPatterns {
        static getPatternFromItem(item: $Item_): $ResourceKey<$DecoratedPotPattern>;
        static bootstrap(registry: $Registry<$DecoratedPotPattern_>): $DecoratedPotPattern;
        static GUSTER: $ResourceKey<$DecoratedPotPattern>;
        static MINER: $ResourceKey<$DecoratedPotPattern>;
        static ITEM_TO_POT_TEXTURE: $Map<$Item, $ResourceKey<$DecoratedPotPattern>>;
        static ARMS_UP: $ResourceKey<$DecoratedPotPattern>;
        static FRIEND: $ResourceKey<$DecoratedPotPattern>;
        static SHEAF: $ResourceKey<$DecoratedPotPattern>;
        static SKULL: $ResourceKey<$DecoratedPotPattern>;
        static SCRAPE: $ResourceKey<$DecoratedPotPattern>;
        static ARCHER: $ResourceKey<$DecoratedPotPattern>;
        static FLOW: $ResourceKey<$DecoratedPotPattern>;
        static BURN: $ResourceKey<$DecoratedPotPattern>;
        static EXPLORER: $ResourceKey<$DecoratedPotPattern>;
        static HEARTBREAK: $ResourceKey<$DecoratedPotPattern>;
        static SNORT: $ResourceKey<$DecoratedPotPattern>;
        static DANGER: $ResourceKey<$DecoratedPotPattern>;
        static ANGLER: $ResourceKey<$DecoratedPotPattern>;
        static BREWER: $ResourceKey<$DecoratedPotPattern>;
        static HEART: $ResourceKey<$DecoratedPotPattern>;
        static BLANK: $ResourceKey<$DecoratedPotPattern>;
        static SHELTER: $ResourceKey<$DecoratedPotPattern>;
        static PLENTY: $ResourceKey<$DecoratedPotPattern>;
        static BLADE: $ResourceKey<$DecoratedPotPattern>;
        static HOWL: $ResourceKey<$DecoratedPotPattern>;
        static MOURNER: $ResourceKey<$DecoratedPotPattern>;
        static PRIZE: $ResourceKey<$DecoratedPotPattern>;
        constructor();
    }
    export class $StructureBlockEntity$UpdateType extends $Enum<$StructureBlockEntity$UpdateType> {
        static values(): $StructureBlockEntity$UpdateType[];
        static valueOf(arg0: string): $StructureBlockEntity$UpdateType;
        static UPDATE_DATA: $StructureBlockEntity$UpdateType;
        static SAVE_AREA: $StructureBlockEntity$UpdateType;
        static LOAD_AREA: $StructureBlockEntity$UpdateType;
        static SCAN_AREA: $StructureBlockEntity$UpdateType;
    }
    /**
     * Values that may be interpreted as {@link $StructureBlockEntity$UpdateType}.
     */
    export type $StructureBlockEntity$UpdateType_ = "update_data" | "save_area" | "load_area" | "scan_area";
    export class $SculkCatalystBlockEntity$CatalystListener implements $GameEventListener {
        getSculkSpreader(): $SculkSpreader;
        /**
         * Gets the listening radius of the listener. Events within this radius will notify the listener when broadcasted.
         */
        getListenerRadius(): number;
        /**
         * Gets the position of the listener itself.
         */
        getListenerSource(): $PositionSource;
        handleGameEvent(level: $ServerLevel, gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_, pos: $Vec3_): boolean;
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        static PULSE_TICKS: number;
        sculkSpreader: $SculkSpreader;
        constructor(blockState: $BlockState_, positionSource: $PositionSource);
        get listenerRadius(): number;
        get listenerSource(): $PositionSource;
        get deliveryMode(): $GameEventListener$DeliveryMode;
    }
    export class $DaylightDetectorBlockEntity extends $BlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export interface $BlockEntityType<T> extends RegistryMarked<RegistryTypes.BlockEntityTypeTag, RegistryTypes.BlockEntityType> {}
    export class $CrafterBlockEntity extends $RandomizableContainerBlockEntity implements $CraftingContainer, $SleepingBlockEntity, $SetChangedHandlingBlockEntity {
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, crafter: $CrafterBlockEntity): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getRedstoneSignal(): number;
        setTriggered(triggered: boolean): void;
        setCraftingTicksRemaining(craftingTicksRemaining: number): void;
        fillStackedContents(contents: $StackedContents): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        setSlotState(slot: number, state: boolean): void;
        isSlotDisabled(slot: number): boolean;
        isTriggered(): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        asCraftInput(): $CraftingInput;
        asPositionedCraftInput(): $CraftingInput$Positioned;
        lithium$startSleeping(): boolean;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        sleepOnlyCurrentTick(): void;
        isSleeping(): boolean;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        static CONTAINER_WIDTH: number;
        level: $Level;
        static SLOT_ENABLED: number;
        static SLOT_DISABLED: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static NUM_DATA: number;
        remove: boolean;
        static CONTAINER_HEIGHT: number;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        static DATA_TRIGGERED: number;
        static CONTAINER_SIZE: number;
        hasComparators: number;
        containerData: $ContainerData;
        lootTableSeed: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get redstoneSignal(): number;
        set craftingTicksRemaining(value: number);
        get width(): number;
        get height(): number;
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export class $HangingSignBlockEntity extends $SignBlockEntity {
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $BellBlockEntity$ResonationEndAction {
    }
    export interface $BellBlockEntity$ResonationEndAction {
    }
    /**
     * Values that may be interpreted as {@link $BellBlockEntity$ResonationEndAction}.
     */
    export type $BellBlockEntity$ResonationEndAction_ = (() => void);
    export class $BrewingStandBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $LithiumInventory, $InventoryChangeTracker, $SleepingBlockEntity, $SetChangedHandlingBlockEntity {
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BrewingStandBlockEntity): void;
        getSlotsForFace(side: $Direction_): number[];
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        lithium$startSleeping(): boolean;
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        sleepOnlyCurrentTick(): void;
        isSleeping(): boolean;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        static DATA_BREW_TIME: number;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        dataAccess: $ContainerData;
        static DATA_FUEL_USES: number;
        level: $Level;
        fuel: number;
        brewTime: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static FUEL_USES: number;
        remove: boolean;
        worldPosition: $BlockPos;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export class $StructureBlockEntity extends $BlockEntity {
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isPowered(): boolean;
        setPowered(ignoreEntities: boolean): void;
        usedBy(player: $Player): boolean;
        createdBy(author: $LivingEntity): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        saveStructure(): boolean;
        /**
         * Saves the template, either updating the local version or writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        saveStructure(writeToDisk: boolean): boolean;
        placeStructure(level: $ServerLevel): void;
        unloadStructure(): void;
        getStructureName(): string;
        setStructureName(metaData: string | null): void;
        setStructureName(structureName: $ResourceLocation_ | null): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        hasStructureName(): boolean;
        getStructurePos(): $BlockPos;
        setStructurePos(structurePos: $BlockPos_): void;
        getStructureSize(): $Vec3i;
        setStructureSize(structureSize: $Vec3i): void;
        setMirror(mirror: $Mirror_): void;
        setRotation(rotation: $Rotation_): void;
        getMetaData(): string;
        setMetaData(metaData: string): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isIgnoreEntities(): boolean;
        setIgnoreEntities(ignoreEntities: boolean): void;
        getIntegrity(): number;
        setIntegrity(integrity: number): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        detectSize(): boolean;
        static createRandom(seed: number): $RandomSource;
        placeStructureIfSameSize(level: $ServerLevel): boolean;
        loadStructureInfo(level: $ServerLevel): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        isStructureLoadable(): boolean;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        getShowAir(): boolean;
        setShowAir(ignoreEntities: boolean): void;
        /**
         * Saves the template, writing it to disk.
         * 
         * @return true if the template was successfully saved.
         */
        getShowBoundingBox(): boolean;
        setShowBoundingBox(ignoreEntities: boolean): void;
        setMode(mode: $StructureMode_): void;
        getMode(): $StructureMode;
        setSeed(seed: number): void;
        getSeed(): number;
        getMirror(): $Mirror;
        getRotation(): $Rotation;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static AUTHOR_TAG: string;
        static MAX_OFFSET_PER_AXIS: number;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        static MAX_SIZE_PER_AXIS: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get structureLoadable(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $AbstractFurnaceBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $RecipeCraftingHolder, $StackedContentsCompatible, $LithiumInventory, $InventoryChangeTracker, $SleepingBlockEntity, $SetChangedHandlingBlockEntity, $SpecialLogicInventory, $Clearable {
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $AbstractFurnaceBlockEntity): void;
        getRecipesToAwardAndPopExperience(level: $ServerLevel, popVec: $Vec3_): $List<$RecipeHolder<never>>;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        static invalidateCache(): void;
        /**
         * @deprecated
         */
        static getFuel(): $Map<$Item, number>;
        static buildFuels(arg0: $ObjIntConsumer_<$Either<$Item, $TagKey<$Item>>>): void;
        getBurnDuration(fuel: $ItemStack_): number;
        static isFuel(stack: $ItemStack_): boolean;
        setRecipeUsed(recipe: $RecipeHolder_<never> | null): void;
        fillStackedContents(helper: $StackedContents): void;
        getSlotsForFace(side: $Direction_): number[];
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canPlaceItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_ | null): boolean;
        /**
         * Returns `true` if automation can insert the given item in the given slot from the given side.
         */
        canTakeItemThroughFace(index: number, itemStack: $ItemStack_, direction: $Direction_): boolean;
        handler$fff000$fabric_transfer_api_v1$setStackSuppressUpdate(arg0: number, arg1: $ItemStack_, arg2: $CallbackInfo): void;
        getRecipeUsed(): $RecipeHolder<never>;
        awardUsedRecipes(player: $Player, items: $List_<$ItemStack_>): void;
        awardUsedRecipesAndPopExperience(player: $ServerPlayer): void;
        lithium$getTickWrapper(): $WrappedBlockEntityTickInvokerAccessor;
        lithium$setTickWrapper(arg0: $WrappedBlockEntityTickInvokerAccessor): void;
        lithium$setSleepingTicker(arg0: $TickingBlockEntity): void;
        lithium$getSleepingTicker(): $TickingBlockEntity;
        static add(map: $Map_<$Item_, number>, itemTag: $TagKey_<$Item>, burnTime: number): void;
        static add(map: $Map_<$Item_, number>, item: $ItemLike_, burnTime: number): void;
        setRecipeUsed(level: $Level_, players: $ServerPlayer, recipe: $RecipeHolder_<never>): boolean;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        lithium$startSleeping(): boolean;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        wakeUpNow(): void;
        setTicker(arg0: $TickingBlockEntity): void;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        sleepOnlyCurrentTick(): void;
        isSleeping(): boolean;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_, recipeType: $RecipeType_<$AbstractCookingRecipe>);
        set ticker(value: $TickingBlockEntity);
        get sleeping(): boolean;
    }
    export class $EnchantingTableBlockEntity extends $BlockEntity implements $Nameable {
        static bookAnimationTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, enchantingTable: $EnchantingTableBlockEntity): void;
        getName(): $Component;
        getCustomName(): $Component;
        setCustomName(customName: $Component_ | null): void;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        oFlip: number;
        flipA: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        worldPosition: $BlockPos;
        rot: number;
        tRot: number;
        flipT: number;
        oOpen: number;
        time: number;
        oRot: number;
        hasComparators: number;
        flip: number;
        open: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get name(): $Component;
        get displayName(): $Component;
    }
    export class $BeehiveBlockEntity extends $BlockEntity {
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, beehive: $BeehiveBlockEntity): void;
        emptyAllLivingFromHive(player: $Player | null, state: $BlockState_, releaseStatus: $BeehiveBlockEntity$BeeReleaseStatus_): void;
        getOccupantCount(): number;
        isFireNearby(): boolean;
        isSedated(): boolean;
        static getHoneyLevel(state: $BlockState_): number;
        addOccupant(occupant: $Entity): void;
        storeBee(occupant: $BeehiveBlockEntity$Occupant_): void;
        isFull(): boolean;
        isEmpty(): boolean;
        static IGNORED_BEE_TAGS: $List<string>;
        worldPosition: $BlockPos;
        level: $Level;
        static MIN_OCCUPATION_TICKS_NECTARLESS: number;
        static MAX_OCCUPANTS: number;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get occupantCount(): number;
        get fireNearby(): boolean;
        get sedated(): boolean;
        get full(): boolean;
        get empty(): boolean;
    }
    export class $TickingBlockEntity {
    }
    export interface $TickingBlockEntity {
        tick(): void;
        getType(): string;
        isRemoved(): boolean;
        getPos(): $BlockPos;
        get type(): string;
        get removed(): boolean;
        get pos(): $BlockPos;
    }
    export class $SpawnerBlockEntity extends $BlockEntity implements $Spawner {
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SpawnerBlockEntity): void;
        setEntityId(type: $EntityType_<never>, random: $RandomSource): void;
        getSpawner(): $BaseSpawner;
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $SpawnerBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get spawner(): $BaseSpawner;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $BellBlockEntity extends $BlockEntity {
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BellBlockEntity): void;
        onHit(direction: $Direction_): void;
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $BellBlockEntity): void;
        worldPosition: $BlockPos;
        ticks: number;
        level: $Level;
        clickDirection: $Direction;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        shaking: boolean;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $DropperBlockEntity extends $DispenserBlockEntity {
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        lootTableSeed: number;
        remove: boolean;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $SignBlockEntity extends $BlockEntity {
        isWaxed(): boolean;
        isFacingFrontText(player: $Player): boolean;
        executeClickCommandsIfPresent(player: $Player, level: $Level_, pos: $BlockPos_, frontText: boolean): boolean;
        getSignInteractionFailedSoundEvent(): $SoundEvent;
        canExecuteClickCommands(isFrontText: boolean, player: $Player): boolean;
        setAllowedPlayerEditor(playWhoMayEdit: $UUID_ | null): void;
        getPlayerWhoMayEdit(): $UUID;
        createDefaultSignText(): $SignText;
        getFrontText(): $SignText;
        getBackText(): $SignText;
        getTextLineHeight(): number;
        getMaxTextLineWidth(): number;
        updateSignText(player: $Player, isFrontText: boolean, filteredText: $List_<$FilteredText_>): void;
        updateText(updater: $UnaryOperator_<$SignText>, isFrontText: boolean): boolean;
        setWaxed(isWaxed: boolean): boolean;
        playerIsTooFarAwayToEdit(uuid: $UUID_): boolean;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, sign: $SignBlockEntity): void;
        setText(text: $SignText, isFrontText: boolean): boolean;
        getText(isFrontText: boolean): $SignText;
        static createCommandSourceStack(player: $Player | null, level: $Level_, pos: $BlockPos_): $CommandSourceStack;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(type: $BlockEntityType_<any>, pos: $BlockPos_, blockState: $BlockState_);
        get signInteractionFailedSoundEvent(): $SoundEvent;
        set allowedPlayerEditor(value: $UUID_ | null);
        get playerWhoMayEdit(): $UUID;
        get frontText(): $SignText;
        get backText(): $SignText;
        get textLineHeight(): number;
        get maxTextLineWidth(): number;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $JukeboxBlockEntity extends $BlockEntity implements $Clearable, $ContainerSingleItem$BlockContainerSingleItem, $SpecialLogicInventory {
        getSongPlayer(): $JukeboxSongPlayer;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getComparatorOutput(): number;
        popOutTheItem(): void;
        getTheItem(): $ItemStack;
        setTheItem(stack: $ItemStack_): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        fabric_setSuppress(hasRecord: boolean): void;
        fabric_onFinalCommit(arg0: number, arg1: $ItemStack_, arg2: $ItemStack_): void;
        onSongChanged(): void;
        splitTheItem(amount: number): $ItemStack;
        handler$zbd000$yungsapi$checkIfLevelNull(arg0: $ItemStack_, arg1: $CallbackInfo): void;
        getContainerBlockEntity(): $BlockEntity;
        setSongItemWithoutPlaying(stack: $ItemStack_): void;
        tryForcePlaySong(): void;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, jukebox: $JukeboxBlockEntity): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        fabric_onTransfer(arg0: number, arg1: $TransactionContext): void;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        removeTheItem(): $ItemStack;
        getItem(amount: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        isEmpty(): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getContainerSize(): number;
        removeItemNoUpdate(amount: number): $ItemStack;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        getMaxStackSize(stack: $ItemStack_): number;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        getStackInSlot(amount: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        worldPosition: $BlockPos;
        static SONG_ITEM_TAG_ID: string;
        level: $Level;
        jukeboxSongPlayer: $JukeboxSongPlayer;
        static TICKS_SINCE_SONG_STARTED_TAG_ID: string;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get songPlayer(): $JukeboxSongPlayer;
        get comparatorOutput(): number;
        get containerBlockEntity(): $BlockEntity;
        set songItemWithoutPlaying(value: $ItemStack_);
        get containerSize(): number;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
    }
    export interface $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity> {
        create(pos: $BlockPos_, state: $BlockState_): T;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityType$BlockEntitySupplier}.
     */
    export type $BlockEntityType$BlockEntitySupplier_<T> = ((arg0: $BlockPos, arg1: $BlockState) => T);
    export class $TheEndPortalBlockEntity extends $BlockEntity {
        shouldRenderFace(face: $Direction_): boolean;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPatternLayers$Builder {
        /**
         * @deprecated
         */
        addIfRegistered(patterns: $HolderGetter<$BannerPattern_>, patternKey: $ResourceKey_<$BannerPattern>, color: $DyeColor_): $BannerPatternLayers$Builder;
        add(layer: $BannerPatternLayers$Layer_): $BannerPatternLayers$Builder;
        add(pattern: $Holder_<$BannerPattern>, color: $DyeColor_): $BannerPatternLayers$Builder;
        addAll(layers: $BannerPatternLayers_): $BannerPatternLayers$Builder;
        build(): $BannerPatternLayers;
        constructor();
    }
    export class $SculkSensorBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        getVibrationUser(): $VibrationSystem$User;
        getLastVibrationFrequency(): number;
        getVibrationData(): $VibrationSystem$Data;
        createVibrationUser(): $VibrationSystem$User;
        setLastVibrationFrequency(lastVibrationFrequency: number): void;
        getListener(): $VibrationSystem$Listener;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
        get listener(): $VibrationSystem$Listener;
    }
    export class $TrialSpawnerBlockEntity extends $BlockEntity implements $Spawner, $TrialSpawner$StateAccessor {
        markUpdated(): void;
        getTrialSpawner(): $TrialSpawner;
        setEntityId(entityType: $EntityType_<never>, random: $RandomSource): void;
        getState(): $TrialSpawnerState;
        setState(level: $Level_, state: $TrialSpawnerState_): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get trialSpawner(): $TrialSpawner;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $DispenserBlockEntity extends $RandomizableContainerBlockEntity implements $LithiumInventory, $InventoryChangeTracker, $DispenserBlockEntityAccessor {
        getRandomSlot(random: $RandomSource): number;
        handler$cba002$lithium$setInventoryStackListReplacement(arg0: $NonNullList<any>, arg1: $CallbackInfo): void;
        insertItem(stack: $ItemStack_): $ItemStack;
        /**
         * Called when this is first added to the world (by `LevelChunk#addAndRegisterBlockEntity(BlockEntity)`)
         * or right before the first tick when the chunk is generated or loaded from disk.
         * Override instead of adding `if (firstTick)` stuff in update.
         */
        generateLootLithium(): void;
        listenForContentChangesOnce(arg0: $LithiumStackList, arg1: $InventoryChangeListener): void;
        listenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        stopListenForMajorInventoryChanges(arg0: $InventoryChangeListener): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        setInventoryLithium(items: $NonNullList<$ItemStack_>): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static CONTAINER_SIZE: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        lootTableSeed: number;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $TheEndGatewayBlockEntity extends $TheEndPortalBlockEntity {
        static beamAnimationTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        static portalTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        getParticleAmount(): number;
        isCoolingDown(): boolean;
        static triggerCooldown(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $TheEndGatewayBlockEntity): void;
        getPortalPosition(level: $ServerLevel, pos: $BlockPos_): $Vec3;
        isSpawning(): boolean;
        getSpawnPercent(partialTicks: number): number;
        setExitPosition(exitPortal: $BlockPos_, exactTeleport: boolean): void;
        getCooldownPercent(partialTicks: number): number;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get particleAmount(): number;
        get coolingDown(): boolean;
        get spawning(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $FurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        inventoryChangeListeners: $ReferenceArraySet<any>;
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPatterns {
        static register(context: $BootstrapContext<$BannerPattern_>, resourceKey: $ResourceKey_<$BannerPattern>): void;
        static bootstrap(context: $BootstrapContext<$BannerPattern_>): void;
        static GUSTER: $ResourceKey<$BannerPattern>;
        static STRIPE_BOTTOM: $ResourceKey<$BannerPattern>;
        static GLOBE: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_MIDDLE: $ResourceKey<$BannerPattern>;
        static TRIANGLE_TOP: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_CENTER: $ResourceKey<$BannerPattern>;
        static STRAIGHT_CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_LEFT: $ResourceKey<$BannerPattern>;
        static SKULL: $ResourceKey<$BannerPattern>;
        static RHOMBUS_MIDDLE: $ResourceKey<$BannerPattern>;
        static CIRCLE_MIDDLE: $ResourceKey<$BannerPattern>;
        static HALF_HORIZONTAL: $ResourceKey<$BannerPattern>;
        static GRADIENT: $ResourceKey<$BannerPattern>;
        static FLOW: $ResourceKey<$BannerPattern>;
        static BASE: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_RIGHT: $ResourceKey<$BannerPattern>;
        static CREEPER: $ResourceKey<$BannerPattern>;
        static STRIPE_LEFT: $ResourceKey<$BannerPattern>;
        static BRICKS: $ResourceKey<$BannerPattern>;
        static TRIANGLES_BOTTOM: $ResourceKey<$BannerPattern>;
        static SQUARE_TOP_LEFT: $ResourceKey<$BannerPattern>;
        static FLOWER: $ResourceKey<$BannerPattern>;
        static STRIPE_SMALL: $ResourceKey<$BannerPattern>;
        static TRIANGLE_BOTTOM: $ResourceKey<$BannerPattern>;
        static CURLY_BORDER: $ResourceKey<$BannerPattern>;
        static TRIANGLES_TOP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_RIGHT: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNLEFT: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT_MIRROR: $ResourceKey<$BannerPattern>;
        static STRIPE_DOWNRIGHT: $ResourceKey<$BannerPattern>;
        static PIGLIN: $ResourceKey<$BannerPattern>;
        static GRADIENT_UP: $ResourceKey<$BannerPattern>;
        static DIAGONAL_LEFT: $ResourceKey<$BannerPattern>;
        static BORDER: $ResourceKey<$BannerPattern>;
        static MOJANG: $ResourceKey<$BannerPattern>;
        static HALF_VERTICAL: $ResourceKey<$BannerPattern>;
        static CROSS: $ResourceKey<$BannerPattern>;
        static SQUARE_BOTTOM_RIGHT: $ResourceKey<$BannerPattern>;
        constructor();
    }
    export class $RandomizableContainerBlockEntity extends $BaseContainerBlockEntity implements $RandomizableContainer {
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        setLootTableSeed(seed: number): void;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        unpackLootTable(player: $Player | null): void;
        tryLoadLootTable(tag: $CompoundTag_): boolean;
        trySaveLootTable(tag: $CompoundTag_): boolean;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        inventoryChangeListeners: $ReferenceArraySet<any>;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        lootTableSeed: number;
        remove: boolean;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BlastFurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
        inventoryChangeListeners: $ReferenceArraySet<any>;
        dataAccess: $ContainerData;
        static DATA_LIT_DURATION: number;
        level: $Level;
        cookingTotalTime: number;
        static SLOT_INPUT: number;
        static DATA_COOKING_PROGRESS: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventoryHandlingTypeListeners: $ReferenceArraySet<any>;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static BURN_COOL_SPEED: number;
        remove: boolean;
        cookingProgress: number;
        litDuration: number;
        worldPosition: $BlockPos;
        static DATA_COOKING_TOTAL_TIME: number;
        static BURN_TIME_STANDARD: number;
        static SLOT_RESULT: number;
        hasComparators: number;
        static NUM_DATA_VALUES: number;
        litTime: number;
        static DATA_LIT_TIME: number;
        items: $NonNullList<$ItemStack>;
        static SLOT_FUEL: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
    }
    export class $BannerPattern extends $Record {
        assetId(): $ResourceLocation;
        translationKey(): string;
        static CODEC: $Codec<$Holder<$BannerPattern>>;
        static DIRECT_CODEC: $Codec<$BannerPattern>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$BannerPattern>>;
        constructor(arg0: $ResourceLocation_, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $BannerPattern}.
     */
    export type $BannerPattern_ = RegistryTypes.BannerPattern | { assetId?: $ResourceLocation_, translationKey?: string,  } | [assetId?: $ResourceLocation_, translationKey?: string, ];
    export class $LecternBlockEntity extends $BlockEntity implements $Clearable, $MenuProvider {
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        clearContent(): void;
        /**
         * Sets the ItemStack in this lectern. Note that this does not update the block state, use `LecternBlock#tryPlaceBook` for that.
         */
        setBook(stack: $ItemStack_): void;
        /**
         * Sets the ItemStack in this lectern. Note that this does not update the block state, use `LecternBlock#tryPlaceBook` for that.
         */
        setBook(stack: $ItemStack_, player: $Player | null): void;
        getBook(): $ItemStack;
        getRedstoneSignal(): number;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        hasBook(): boolean;
        onBookItemRemove(): void;
        setPage(page: number): void;
        getPage(): number;
        getDisplayName(): $Component;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        /**
         * @return whether the ItemStack in this lectern is a book or written book
         */
        shouldCloseCurrentScreen(): boolean;
        worldPosition: $BlockPos;
        static NUM_SLOTS: number;
        static DATA_PAGE: number;
        level: $Level;
        book: $ItemStack;
        static ATTACHMENTS_NBT_KEY: string;
        page: number;
        hasComparators: number;
        static SLOT_BOOK: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static NUM_DATA: number;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get redstoneSignal(): number;
        get displayName(): $Component;
    }
    export class $BannerBlockEntity extends $BlockEntity implements $Nameable {
        fromItem(stack: $ItemStack_, color: $DyeColor_): void;
        getPatterns(): $BannerPatternLayers;
        getBaseColor(): $DyeColor;
        getItem(): $ItemStack;
        getName(): $Component;
        getCustomName(): $Component;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        static MAX_PATTERNS: number;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, baseColor: $DyeColor_);
        get patterns(): $BannerPatternLayers;
        get baseColor(): $DyeColor;
        get item(): $ItemStack;
        get name(): $Component;
        get customName(): $Component;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        get displayName(): $Component;
    }
    export class $Hopper {
        static SUCK_AABB: $AABB;
    }
    export interface $Hopper extends $Container {
        /**
         * @return the x position for this hopper.
         */
        getLevelX(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelY(): number;
        /**
         * @return the x position for this hopper.
         */
        getLevelZ(): number;
        isGridAligned(): boolean;
        getSuckAabb(): $AABB;
        get levelX(): number;
        get levelY(): number;
        get levelZ(): number;
        get gridAligned(): boolean;
        get suckAabb(): $AABB;
    }
    export class $ChiseledBookShelfBlockEntity extends $BlockEntity implements $Container, $LithiumTransferConditionInventory {
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        clearContent(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getLastInteractedSlot(): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        isEmpty(): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        getMaxStackSize(stack: $ItemStack_): number;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        worldPosition: $BlockPos;
        static MAX_BOOKS_IN_STORAGE: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get lastInteractedSlot(): number;
        get containerSize(): number;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $ConduitBlockEntity extends $BlockEntity {
        static serverTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ConduitBlockEntity): void;
        isHunting(): boolean;
        getActiveRotation(partialTick: number): number;
        isActive(): boolean;
        static clientTick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $ConduitBlockEntity): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        tickCount: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get hunting(): boolean;
        get active(): boolean;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $ContainerOpenersCounter {
        incrementOpeners(player: $Player, level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        decrementOpeners(player: $Player, level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        getOpenerCount(): number;
        recheckOpeners(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        onOpen(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        openerCountChanged(level: $Level_, pos: $BlockPos_, state: $BlockState_, count: number, openCount: number): void;
        isOwnContainer(player: $Player): boolean;
        onClose(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        constructor();
        get openerCount(): number;
    }
    export class $JigsawBlockEntity extends $BlockEntity {
        getFinalState(): string;
        getJoint(): $JigsawBlockEntity$JointType;
        getPlacementPriority(): number;
        getSelectionPriority(): number;
        setPool(pool: $ResourceKey_<$StructureTemplatePool>): void;
        setFinalState(finalState: string): void;
        setJoint(joint: $JigsawBlockEntity$JointType_): void;
        setPlacementPriority(placementPriority: number): void;
        setSelectionPriority(placementPriority: number): void;
        getName(): $ResourceLocation;
        setName(name: $ResourceLocation_): void;
        getPool(): $ResourceKey<$StructureTemplatePool>;
        getTarget(): $ResourceLocation;
        setTarget(name: $ResourceLocation_): void;
        generate(level: $ServerLevel, maxDepth: number, keepJigsaws: boolean): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        static TARGET: string;
        level: $Level;
        static FINAL_STATE: string;
        static SELECTION_PRIORITY: string;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        static NAME: string;
        worldPosition: $BlockPos;
        static POOL: string;
        static PLACEMENT_PRIORITY: string;
        hasComparators: number;
        static JOINT: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $CalibratedSculkSensorBlockEntity$VibrationUser extends $SculkSensorBlockEntity$VibrationUser {
    }
    export class $BannerPatternLayers$Layer extends $Record {
        pattern(): $Holder<$BannerPattern>;
        color(): $DyeColor;
        description(): $MutableComponent;
        static CODEC: $Codec<$BannerPatternLayers$Layer>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BannerPatternLayers$Layer>;
        constructor(arg0: $Holder_<$BannerPattern>, arg1: $DyeColor_);
    }
    /**
     * Values that may be interpreted as {@link $BannerPatternLayers$Layer}.
     */
    export type $BannerPatternLayers$Layer_ = { color?: $DyeColor_, pattern?: $Holder_<$BannerPattern>,  } | [color?: $DyeColor_, pattern?: $Holder_<$BannerPattern>, ];
    export class $DecoratedPotBlockEntity extends $BlockEntity implements $RandomizableContainer, $ContainerSingleItem$BlockContainerSingleItem {
        getTheItem(): $ItemStack;
        setTheItem(item: $ItemStack_): void;
        getPotAsItem(): $ItemStack;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        setLootTableSeed(seed: number): void;
        splitTheItem(amount: number): $ItemStack;
        getContainerBlockEntity(): $BlockEntity;
        setFromItem(item: $ItemStack_): void;
        static createDecoratedPotItem(decorations: $PotDecorations_): $ItemStack;
        getDecorations(): $PotDecorations;
        getDirection(): $Direction;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        wobble(style: $DecoratedPotBlockEntity$WobbleStyle_): void;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        unpackLootTable(player: $Player | null): void;
        tryLoadLootTable(tag: $CompoundTag_): boolean;
        trySaveLootTable(tag: $CompoundTag_): boolean;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        startOpen(player: $Player): void;
        stopOpen(player: $Player): void;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item_): number;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item_>): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        clearContent(): void;
        removeTheItem(): $ItemStack;
        setTransferCooldown(seed: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        self(): $Container;
        getBlock(level: $Level_): $LevelBlock;
        isMutable(): boolean;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        getStackInSlot(amount: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        getSlotLimit(slot: number): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        clear(): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        setChanged(): void;
        asContainer(): $Container;
        isEmpty(): boolean;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        clear(match: $ItemPredicate_): void;
        find(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        static TAG_SHERDS: string;
        lastWobbleStyle: $DecoratedPotBlockEntity$WobbleStyle;
        static TAG_ITEM: string;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static EVENT_POT_WOBBLES: number;
        remove: boolean;
        worldPosition: $BlockPos;
        lootTable: $ResourceKey<$LootTable>;
        wobbleStartedAtTick: number;
        hasComparators: number;
        lootTableSeed: number;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get potAsItem(): $ItemStack;
        get containerBlockEntity(): $BlockEntity;
        set fromItem(value: $ItemStack_);
        get decorations(): $PotDecorations;
        get direction(): $Direction;
        get updatePacket(): $ClientboundBlockEntityDataPacket;
        set transferCooldown(value: number);
        get mutable(): boolean;
        get slots(): number;
        get width(): number;
        get height(): number;
        get empty(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $SculkShriekerBlockEntity extends $BlockEntity implements $GameEventListener$Provider<$VibrationSystem$Listener>, $VibrationSystem {
        getVibrationUser(): $VibrationSystem$User;
        static tryGetPlayer(entity: $Entity | null): $ServerPlayer;
        getVibrationData(): $VibrationSystem$Data;
        tryRespond(level: $ServerLevel): void;
        tryShriek(level: $ServerLevel, player: $ServerPlayer | null): void;
        getListener(): $VibrationSystem$Listener;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
        get listener(): $VibrationSystem$Listener;
    }
}
