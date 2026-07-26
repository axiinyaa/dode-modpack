import { $ServerLinks, $ServerLinks_ } from "@package/net/minecraft/server";
import { $LevelRenderer, $PanoramaRenderer, $CubeMap, $DimensionSpecialEffects } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $XaeroMinimapSession } from "@package/xaero/common";
import { $Entity, $Entity$RemovalReason_ } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $CloseableResourceManager, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";
import { $ClientCommonNetworkHandlerAccessor, $ClientLoginNetworkHandlerAccessor } from "@package/io/wispforest/owo/mixin";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $InetSocketAddress, $URL } from "@package/java/net";
import { $DisconnectionDetails_, $ServerboundPacketListener, $TickablePacketListener, $Connection, $FriendlyByteBuf, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $AccessorClientChunkCacheStorage } from "@package/com/railwayteam/railways/mixin/conductor_possession";
import { $KubeAnimatedParticle, $KubeSessionData } from "@package/dev/latvian/mods/kubejs/client";
import { $PlayerChatMessage_, $RemoteChatSession, $PlayerChatMessage, $RemoteChatSession_, $SignedMessageValidator, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LevelChunk, $ChunkSource } from "@package/net/minecraft/world/level/chunk";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $VeilClientSuggestionProvider } from "@package/foundry/veil/ext";
import { $SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$ElementSuggestionType_, $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $Duration_ } from "@package/java/time";
import { $LocalSampleLogger } from "@package/net/minecraft/util/debugchart";
import { $NeoListenableNetworkHandler } from "@package/org/sinytra/fabric/networking_api";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $IXaeroMinimapClientWorld, $MinimapClientWorldData } from "@package/xaero/common/minimap/mcworld";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $StatsCounter } from "@package/net/minecraft/stats";
import { $AccessClientCommonPacketListenerImpl } from "@package/lol/bai/badpackets/impl/mixin/client";
import { $IWorldMapClientPlayNetHandler } from "@package/xaero/map/core";
import { $ServerStatus$Players } from "@package/net/minecraft/network/protocol/status";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $PredictiveAction_, $BlockStatePredictionHandler } from "@package/net/minecraft/client/multiplayer/prediction";
import { $UUID_, $Set_, $List, $List_, $UUID, $ArrayList, $Map, $Map_, $Collection, $Set } from "@package/java/util";
import { $ChunkTrackerHolder, $ChunkTracker } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/map";
import { $ClientboundCookieRequestPacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $HolderLookup$Provider, $RegistryAccess$Frozen, $RegistrySynchronization$PackedRegistryEntry_, $Direction_, $LayeredRegistryAccess, $Holder_, $BlockPos, $BlockPos_, $BlockPos$MutableBlockPos, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $FabricClientCommandSource } from "@package/net/fabricmc/fabric/api/client/command/v2";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $Iterable, $Object, $Exception, $Throwable, $Record, $Runnable_ } from "@package/java/lang";
import { $ClientLoginNetworkAddon } from "@package/net/fabricmc/fabric/impl/networking/client";
import { $BiomeSeedProvider } from "@package/net/caffeinemc/mods/sodium/client/world";
import { $GameRules, $ChunkPos, $ColorResolver_, $Level_, $GameType, $LevelHeightAccessor, $Level, $GameType_ } from "@package/net/minecraft/world/level";
import { $DebugScreenOverlay, $ChatComponent$State, $Renderable, $CycleButton } from "@package/net/minecraft/client/gui/components";
import { $ClientboundHelloPacket, $ClientboundLoginDisconnectPacket, $ClientboundCustomQueryPacket_, $ClientboundGameProfilePacket_, $ClientboundLoginCompressionPacket, $ClientLoginPacketListener } from "@package/net/minecraft/network/protocol/login";
import { $ClientChunkCacheStorageAccessor } from "@package/dev/ryanhcode/sable/mixin/loaded_chunk_debug";
import { $ClientboundPongResponsePacket_ } from "@package/net/minecraft/network/protocol/ping";
import { $IXaeroMinimapClientPlayNetHandler } from "@package/xaero/common/core";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $WaterOcclusionContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $ClientPacketListenerAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Screen, $ConfirmScreen } from "@package/net/minecraft/client/gui/screens";
import { $ChannelHandlerContext, $SimpleChannelInboundHandler } from "@package/io/netty/channel";
import { $ClientLoginNetworkHandlerAccessor as $ClientLoginNetworkHandlerAccessor$1 } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ResourceKey, $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $WaterOcclusionContainer } from "@package/dev/ryanhcode/sable/sublevel/water_occlusion";
import { $RecipeManager, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $DebugQueryHandler, $Minecraft, $NarratorStatus, $User, $ClientRecipeBook } from "@package/net/minecraft/client";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AdvancementTree$Listener, $AdvancementHolder_, $AdvancementTree, $AdvancementHolder, $AdvancementProgress, $AdvancementNode } from "@package/net/minecraft/advancements";
import { $InteractionHand_, $Difficulty_, $InteractionResult, $Difficulty } from "@package/net/minecraft/world";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $ExtendedServerListData } from "@package/net/neoforged/neoforge/client";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $BooleanConsumer } from "@package/it/unimi/dsi/fastutil/booleans";
import { $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $CommandContext } from "@package/com/mojang/brigadier/context";
import { $LevelCallback, $EntityTickList, $LevelEntityGetter, $TransientEntitySectionManager } from "@package/net/minecraft/world/level/entity";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $PacketHandlerHolder, $ClientConfigPacketHandler, $ClientPlayPacketHandler } from "@package/lol/bai/badpackets/impl/handler";
import { $TooltipFlag, $Item$TooltipContext, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $DebugChunkProviderAttachments } from "@package/dev/ryanhcode/sable/mixinterface/loaded_chunk_debug";
import { $SpriteSet } from "@package/net/minecraft/client/particle";
import { $SubLevelContainerHolder } from "@package/dev/ryanhcode/sable/mixinterface/plot";
import { $ProfileKeyPair, $Player, $ProfileKeyPair_ } from "@package/net/minecraft/world/entity/player";
import { $Function_ } from "@package/it/unimi/dsi/fastutil";
import { $IWorldMapClientWorld, $WorldMapClientWorldData } from "@package/xaero/map/mcworld";
import { $ClientLevelAccessor } from "@package/dev/ryanhcode/offroad/mixin/client/multimining_destruction_progress";
import { $KnownPack_, $KnownPack, $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $AtomicReferenceArray } from "@package/java/util/concurrent/atomic";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $ClientPacketListenerKJS, $ClientLevelKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $SearchTree } from "@package/net/minecraft/client/searchtree";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";
import { $Vec3_, $BlockHitResult, $EntityHitResult, $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $SubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $NetworkHandlerExtensions } from "@package/net/fabricmc/fabric/impl/networking";
import { $LevelPoseProviderExtension } from "@package/dev/ryanhcode/sable/mixinterface/clip_overwrite";
import { $ClientboundResourcePackPopPacket_, $ClientboundCustomPayloadPacket_, $ClientboundPingPacket, $ClientboundCustomReportDetailsPacket_, $ClientboundServerLinksPacket_, $ClientboundStoreCookiePacket_, $ClientboundTransferPacket_, $ClientboundDisconnectPacket_, $ClientboundKeepAlivePacket, $ClientCommonPacketListener, $ClientboundResourcePackPushPacket_ } from "@package/net/minecraft/network/protocol/common";
import { $Supplier_, $BooleanSupplier_, $Consumer_ } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $SuggestionsBuilder, $Suggestions } from "@package/com/mojang/brigadier/suggestion";
import { $ChunkStatus_ } from "@package/net/minecraft/world/level/chunk/status";
import { $MapId_, $MapId, $MapItemSavedData } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TagNetworkSerialization$NetworkPayload } from "@package/net/minecraft/tags";
import { $Pose3dc } from "@package/dev/ryanhcode/sable/companion/math";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $ClientboundSetBorderSizePacket, $ClientboundDamageEventPacket_, $ClientboundUpdateAttributesPacket, $ClientboundHurtAnimationPacket_, $ClientboundPlayerInfoRemovePacket_, $ClientboundSetSimulationDistancePacket_, $ClientboundSetActionBarTextPacket_, $ClientboundSetCarriedItemPacket, $ClientboundLevelChunkWithLightPacket, $ClientboundDisguisedChatPacket_, $ClientboundPlayerCombatEnterPacket, $ClientboundSetBorderCenterPacket, $ClientboundTickingStepPacket_, $ClientboundSetDisplayObjectivePacket, $ClientboundTakeItemEntityPacket, $ClientboundSetExperiencePacket, $ClientboundStartConfigurationPacket, $ClientboundUpdateRecipesPacket, $ClientboundPlayerInfoUpdatePacket, $ClientboundPlayerCombatEndPacket, $ClientboundBlockChangedAckPacket_, $ClientboundRemoveEntitiesPacket, $ClientboundSetCameraPacket, $ClientboundSetEquipmentPacket, $ClientboundPlayerPositionPacket, $ClientboundCustomChatCompletionsPacket$Action_, $ClientboundAwardStatsPacket_, $ClientboundForgetLevelChunkPacket_, $ClientboundAddEntityPacket, $ClientboundSetDefaultSpawnPositionPacket, $ClientboundSetTitlesAnimationPacket, $ClientboundSetChunkCacheCenterPacket, $ClientboundCommandsPacket, $ClientboundLevelEventPacket, $ClientboundLevelParticlesPacket, $ClientboundSystemChatPacket_, $ClientboundPlayerChatPacket_, $ClientboundContainerSetSlotPacket, $ClientboundTabListPacket_, $ClientboundSetScorePacket_, $ClientboundMerchantOffersPacket, $ClientboundTeleportEntityPacket, $ClientboundUpdateAdvancementsPacket, $ClientboundChunkBatchStartPacket, $ClientboundMoveEntityPacket, $ClientboundChunkBatchFinishedPacket_, $ClientboundSetPlayerTeamPacket, $ClientboundContainerSetDataPacket, $ClientboundSetBorderWarningDelayPacket, $ClientboundExplodePacket, $ClientboundSelectAdvancementsTabPacket, $ClientboundDebugSamplePacket_, $ClientboundCooldownPacket_, $ClientboundLevelChunkPacketData, $ClientboundSetBorderWarningDistancePacket, $ClientboundSetBorderLerpSizePacket, $ClientboundBlockEntityDataPacket, $ClientboundAnimatePacket, $ClientboundDeleteChatPacket_, $ClientboundServerDataPacket_, $ClientboundContainerSetContentPacket, $ClientboundSoundPacket, $ClientboundCustomChatCompletionsPacket_, $ClientboundMoveVehiclePacket, $ClientboundSetTitleTextPacket_, $ClientboundTickingStatePacket_, $ClientboundPlayerLookAtPacket, $ClientboundSectionBlocksUpdatePacket, $ClientboundSetPassengersPacket, $ClientboundUpdateMobEffectPacket, $ClientboundLightUpdatePacket, $ClientboundBlockDestructionPacket, $ClientboundOpenBookPacket, $ClientboundBlockUpdatePacket, $ClientboundStopSoundPacket, $ClientboundLevelChunkPacketData$BlockEntityTagOutput, $ClientboundLoginPacket_, $ClientboundSetEntityLinkPacket, $ClientboundRespawnPacket_, $ClientboundRecipePacket, $ClientboundPlayerCombatKillPacket_, $ClientboundChunksBiomesPacket_, $ClientboundContainerClosePacket, $ClientboundSetEntityDataPacket_, $ClientboundSetObjectivePacket, $ClientboundPlaceGhostRecipePacket, $ClientboundHorseScreenOpenPacket, $ClientboundClearTitlesPacket, $ClientboundProjectilePowerPacket, $ClientboundBossEventPacket, $ClientboundAddExperienceOrbPacket, $ClientboundGameEventPacket, $ClientboundSetSubtitleTextPacket_, $ClientboundRotateHeadPacket, $ClientboundChangeDifficultyPacket, $ClientboundSetHealthPacket, $ClientboundSetEntityMotionPacket, $ClientboundRemoveMobEffectPacket_, $ClientboundSetTimePacket, $ClientboundResetScorePacket_, $ClientboundSetChunkCacheRadiusPacket, $ClientboundSoundEntityPacket, $ClientboundTagQueryPacket, $ClientboundMapItemDataPacket_, $ClientboundInitializeBorderPacket, $ClientboundEntityEventPacket, $ClientGamePacketListener, $ClientboundOpenScreenPacket, $ClientboundBundlePacket, $ClientboundCommandSuggestionsPacket_, $ClientboundOpenSignEditorPacket, $ClientboundBlockEventPacket, $ClientboundPlayerAbilitiesPacket } from "@package/net/minecraft/network/protocol/game";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $CachingClientLevel, $ClonedClientLevel } from "@package/com/sonicether/soundphysics/world";
import { $ClientboundUpdateEnabledFeaturesPacket_, $ClientboundFinishConfigurationPacket, $ClientboundResetChatPacket, $ClientConfigurationPacketListener, $ClientboundRegistryDataPacket_, $ClientboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $ClientLevelAccessor as $ClientLevelAccessor$1 } from "@package/com/yungnickyoung/minecraft/ribbits/mixin/mixins/client/accessor";
import { $MultiPlayerGameModeAccessor } from "@package/fuzs/proplacer/mixin/client/accessor";
import { $Stream } from "@package/java/util/stream";
import { $WorldSessionTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $PotionBrewing } from "@package/net/minecraft/world/item/alchemy";
import { $WorldMapSession } from "@package/xaero/map";
import { $IClientLevel, $ClientLevelData } from "@package/xaero/lib/client/level";
import { $ClientWorldAccessor } from "@package/net/caffeinemc/mods/lithium/common/client";
import { $Scoreboard, $PlayerTeam } from "@package/net/minecraft/world/scores";
import { $Font } from "@package/net/minecraft/client/gui";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as chat from "@package/net/minecraft/client/multiplayer/chat";
export * as resolver from "@package/net/minecraft/client/multiplayer/resolver";
export * as prediction from "@package/net/minecraft/client/multiplayer/prediction";

declare module "@package/net/minecraft/client/multiplayer" {
    export class $SessionSearchTrees$Key {
        constructor();
    }
    export class $TagCollector {
        updateTags(registryAccess: $RegistryAccess, isMemoryConnection: boolean): void;
        append(registryKey: $ResourceKey_<$Registry<never>>, networkPayload: $TagNetworkSerialization$NetworkPayload): void;
        constructor();
    }
    export class $ServerData$State extends $Enum<$ServerData$State> {
        static values(): $ServerData$State[];
        static valueOf(arg0: string): $ServerData$State;
        static PINGING: $ServerData$State;
        static SUCCESSFUL: $ServerData$State;
        static INITIAL: $ServerData$State;
        static INCOMPATIBLE: $ServerData$State;
        static UNREACHABLE: $ServerData$State;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$State}.
     */
    export type $ServerData$State_ = "initial" | "pinging" | "unreachable" | "incompatible" | "successful";
    export class $AccountProfileKeyPairManager implements $ProfileKeyPairManager {
        shouldRefreshKeyPair(): boolean;
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
        constructor(userApiService: $UserApiService, uuid: $UUID_, gameDirectory: $Path_);
    }
    export class $ClientConfigurationPacketListenerImpl extends $ClientCommonPacketListenerImpl implements $ClientConfigurationPacketListener, $TickablePacketListener, $NeoListenableNetworkHandler, $PacketHandlerHolder<any> {
        handleSelectKnownPacks(packet: $ClientboundSelectKnownPacks_): void;
        handleConfigurationFinished(packet: $ClientboundFinishConfigurationPacket): void;
        tick(): void;
        handleResetChat(packet: $ClientboundResetChatPacket): void;
        handleRegistryData(packet: $ClientboundRegistryDataPacket_): void;
        handleEnabledFeatures(packet: $ClientboundUpdateEnabledFeaturesPacket_): void;
        handler$eon000$pandalib$onInit(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_, ci: $CallbackInfo): void;
        handler$fea000$fabric_networking_api_v1$handleComplete(arg0: $ClientboundFinishConfigurationPacket, arg1: $CallbackInfo): void;
        handler$fip000$owo$owoNeo$handleComplete(packet: $ClientboundFinishConfigurationPacket, ci: $CallbackInfo): void;
        handleDisconnect(): void;
        badpackets_handler(): $ClientConfigPacketHandler;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverLinks: $ServerLinks;
        serverCookies: $Map<$ResourceLocation, number[]>;
        connection: $Connection;
        chatState: $ChatComponent$State;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
    }
    export class $ClientHandshakePacketListenerImpl$State extends $Enum<$ClientHandshakePacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ClientHandshakePacketListenerImpl$State}.
     */
    export type $ClientHandshakePacketListenerImpl$State_ = "connecting" | "authorizing" | "encrypting" | "joining";
    export class $LevelLoadStatusManager {
        loadingPacketsReceived(): void;
        levelReady(): boolean;
        tick(): void;
        constructor(player: $LocalPlayer, level: $ClientLevel, levelRenderer: $LevelRenderer);
    }
    export class $ClientPacketListener extends $ClientCommonPacketListenerImpl implements $ClientGamePacketListener, $TickablePacketListener, $NeoListenableNetworkHandler, $PacketHandlerHolder<any>, $ClientPacketListenerAccessor, $IXaeroMinimapClientPlayNetHandler, $IWorldMapClientPlayNetHandler, $ClientPacketListenerKJS {
        handleTickingState(packet: $ClientboundTickingStatePacket_): void;
        handleTickingStep(packet: $ClientboundTickingStepPacket_): void;
        /**
         * Updates the specified entity's position by the specified relative momentum and absolute rotation. Note that subclassing of the packet allows for the specification of a subset of this data (e.g. only rel. position, abs. rotation or both).
         */
        handleMoveEntity(packet: $ClientboundMoveEntityPacket): void;
        /**
         * Updates the direction in which the specified entity is looking, normally this head rotation is independent of the rotation of the entity itself
         */
        handleRotateMob(packet: $ClientboundRotateHeadPacket): void;
        handleRemoveEntities(packet: $ClientboundRemoveEntitiesPacket): void;
        /**
         * Received from the servers PlayerManager if between 1 and 64 blocks in a chunk are changed. If only one block requires an update, the server sends S23PacketBlockChange and if 64 or more blocks are changed, the server sends S21PacketChunkData
         */
        handleChunkBlocksUpdate(packet: $ClientboundSectionBlocksUpdatePacket): void;
        handler$cni000$xaerominimap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handler$dfh001$xaeroworldmap$onOnChunkDeltaUpdate(arg0: $ClientboundSectionBlocksUpdatePacket, arg1: $CallbackInfo): void;
        handleLevelChunkWithLight(packet: $ClientboundLevelChunkWithLightPacket): void;
        handler$cni000$xaerominimap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handler$dfh001$xaeroworldmap$onHandleLevelChunkWithLight(arg0: $ClientboundLevelChunkWithLightPacket, arg1: $CallbackInfo): void;
        handleChunksBiomes(packet: $ClientboundChunksBiomesPacket_): void;
        handler$cni000$xaerominimap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handler$dfh001$xaeroworldmap$onOnChunkData(arg0: number, arg1: number, arg2: $ClientboundLevelChunkPacketData, arg3: $CallbackInfo): void;
        handleForgetLevelChunk(packet: $ClientboundForgetLevelChunkPacket_): void;
        handler$cni000$xaerominimap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        handler$dfh001$xaeroworldmap$onQueueLightRemoval(arg0: $ClientboundForgetLevelChunkPacket_, arg1: $CallbackInfo): void;
        /**
         * Updates the block and metadata and generates a blockupdate (and notify the clients)
         */
        handleBlockUpdate(packet: $ClientboundBlockUpdatePacket): void;
        handler$cni000$xaerominimap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handler$dfh001$xaeroworldmap$onOnBlockUpdate(arg0: $ClientboundBlockUpdatePacket, arg1: $CallbackInfo): void;
        handleConfigurationStart(packet: $ClientboundStartConfigurationPacket): void;
        handleTakeItemEntity(packet: $ClientboundTakeItemEntityPacket): void;
        handler$zme000$pickupnotifier$handleTakeItemEntity(packet: $ClientboundTakeItemEntityPacket, callback: $CallbackInfo): void;
        handleSystemChat(packet: $ClientboundSystemChatPacket_): void;
        handlePlayerChat(packet: $ClientboundPlayerChatPacket_): void;
        handler$zoi000$chat_heads$chatheads$captureSenderInfo(packet: $ClientboundPlayerChatPacket_, ci: $CallbackInfo, senderInfo: $LocalRef<any>): void;
        modify$zoi000$chat_heads$chatheads$rememberSenderInfo(playerChatMessage: $PlayerChatMessage_, senderInfo: $LocalRef<any>): $PlayerChatMessage;
        handleDisguisedChat(packet: $ClientboundDisguisedChatPacket_): void;
        handleDeleteChat(packet: $ClientboundDeleteChatPacket_): void;
        handleHurtAnimation(packet: $ClientboundHurtAnimationPacket_): void;
        handleSetTime(packet: $ClientboundSetTimePacket): void;
        handleSetSpawn(packet: $ClientboundSetDefaultSpawnPositionPacket): void;
        handler$cni000$xaerominimap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handler$dfh001$xaeroworldmap$onOnPlayerSpawnPosition(arg0: $ClientboundSetDefaultSpawnPositionPacket, arg1: $CallbackInfo): void;
        handleSetEntityPassengersPacket(packet: $ClientboundSetPassengersPacket): void;
        handleEntityLinkPacket(packet: $ClientboundSetEntityLinkPacket): void;
        handleSetHealth(packet: $ClientboundSetHealthPacket): void;
        handleSetExperience(packet: $ClientboundSetExperiencePacket): void;
        handleRespawn(packet: $ClientboundRespawnPacket_): void;
        handler$eom000$pandalib$handleBeforeRespawn(packet: $ClientboundRespawnPacket_, ci: $CallbackInfo): void;
        handler$eom000$pandalib$handleRespawn(packet: $ClientboundRespawnPacket_, ci: $CallbackInfo): void;
        /**
         * Initiates a new explosion (sound, particles, drop spawn) for the affected blocks indicated by the packet.
         */
        handleExplosion(packet: $ClientboundExplodePacket): void;
        handleHorseScreenOpen(packet: $ClientboundHorseScreenOpenPacket): void;
        handleOpenScreen(packet: $ClientboundOpenScreenPacket): void;
        /**
         * Handles picking up an ItemStack or dropping one in your inventory or an open (non-creative) container
         */
        handleContainerSetSlot(packet: $ClientboundContainerSetSlotPacket): void;
        /**
         * Handles the placement of a specified ItemStack in a specified container/inventory slot
         */
        handleContainerContent(packet: $ClientboundContainerSetContentPacket): void;
        /**
         * Creates a sign in the specified location if it didn't exist and opens the GUI to edit its text
         */
        handleOpenSignEditor(packet: $ClientboundOpenSignEditorPacket): void;
        /**
         * Updates the NBTTagCompound metadata of instances of the following entitytypes: Mob spawners, command blocks, beacons, skulls, flowerpot
         */
        handleBlockEntityData(packet: $ClientboundBlockEntityDataPacket): void;
        /**
         * Sets the progressbar of the opened window to the specified value
         */
        handleContainerSetData(packet: $ClientboundContainerSetDataPacket): void;
        handleSetEquipment(packet: $ClientboundSetEquipmentPacket): void;
        /**
         * Triggers Block.onBlockEventReceived, which is implemented in BlockPistonBase for extension/retraction, BlockNote for setting the instrument (including audiovisual feedback) and in BlockContainer to set the number of players accessing a (Ender)Chest
         */
        handleBlockEvent(packet: $ClientboundBlockEventPacket): void;
        /**
         * Updates all registered IWorldAccess instances with destroyBlockInWorldPartially
         */
        handleBlockDestruction(packet: $ClientboundBlockDestructionPacket): void;
        /**
         * Updates the worlds MapStorage with the specified MapData for the specified map-identifier and invokes a MapItemRenderer for it
         */
        handleMapItemData(packet: $ClientboundMapItemDataPacket_): void;
        handleLevelEvent(packet: $ClientboundLevelEventPacket): void;
        handleUpdateAdvancementsPacket(packet: $ClientboundUpdateAdvancementsPacket): void;
        handleSelectAdvancementsTab(packet: $ClientboundSelectAdvancementsTabPacket): void;
        handleCommands(packet: $ClientboundCommandsPacket): void;
        handleStopSoundEvent(packet: $ClientboundStopSoundPacket): void;
        /**
         * This method is only called for manual tab-completion (the minecraft:ask_server suggestion provider).
         */
        handleCommandSuggestions(packet: $ClientboundCommandSuggestionsPacket_): void;
        handleUpdateRecipes(packet: $ClientboundUpdateRecipesPacket): void;
        handleLookAt(packet: $ClientboundPlayerLookAtPacket): void;
        handleTagQueryPacket(packet: $ClientboundTagQueryPacket): void;
        /**
         * Updates the players statistics or achievements
         */
        handleAwardStats(packet: $ClientboundAwardStatsPacket_): void;
        handleAddOrRemoveRecipes(packet: $ClientboundRecipePacket): void;
        handleUpdateMobEffect(packet: $ClientboundUpdateMobEffectPacket): void;
        handlePlayerCombatEnd(packet: $ClientboundPlayerCombatEndPacket): void;
        handlePlayerCombatEnter(packet: $ClientboundPlayerCombatEnterPacket): void;
        handlePlayerCombatKill(packet: $ClientboundPlayerCombatKillPacket_): void;
        handleSetCamera(packet: $ClientboundSetCameraPacket): void;
        handleInitializeBorder(packet: $ClientboundInitializeBorderPacket): void;
        handler$fml000$xaerolib$onHandleInitializeBorder(arg0: $ClientboundInitializeBorderPacket, arg1: $CallbackInfo): void;
        handleSetBorderCenter(packet: $ClientboundSetBorderCenterPacket): void;
        handleSetBorderLerpSize(packet: $ClientboundSetBorderLerpSizePacket): void;
        handleSetBorderSize(packet: $ClientboundSetBorderSizePacket): void;
        handleSetBorderWarningDistance(packet: $ClientboundSetBorderWarningDistancePacket): void;
        handleSetBorderWarningDelay(packet: $ClientboundSetBorderWarningDelayPacket): void;
        handleTitlesClear(packet: $ClientboundClearTitlesPacket): void;
        handleServerData(packet: $ClientboundServerDataPacket_): void;
        handleCustomChatCompletions(packet: $ClientboundCustomChatCompletionsPacket_): void;
        setActionBarText(packet: $ClientboundSetActionBarTextPacket_): void;
        setTitleText(packet: $ClientboundSetTitleTextPacket_): void;
        setSubtitleText(packet: $ClientboundSetSubtitleTextPacket_): void;
        setTitlesAnimation(packet: $ClientboundSetTitlesAnimationPacket): void;
        handleTabListCustomisation(packet: $ClientboundTabListPacket_): void;
        handleRemoveMobEffect(packet: $ClientboundRemoveMobEffectPacket_): void;
        handlePlayerInfoRemove(packet: $ClientboundPlayerInfoRemovePacket_): void;
        handlePlayerInfoUpdate(packet: $ClientboundPlayerInfoUpdatePacket): void;
        handleSoundEvent(packet: $ClientboundSoundPacket): void;
        handleSoundEntityEvent(packet: $ClientboundSoundEntityPacket): void;
        handleBossUpdate(packet: $ClientboundBossEventPacket): void;
        handleItemCooldown(packet: $ClientboundCooldownPacket_): void;
        handleOpenBook(packet: $ClientboundOpenBookPacket): void;
        /**
         * May create a scoreboard objective, remove an objective from the scoreboard or update an objectives' displayname
         */
        handleAddObjective(packet: $ClientboundSetObjectivePacket): void;
        /**
         * Either updates the score with a specified value or removes the score for an objective
         */
        handleSetScore(packet: $ClientboundSetScorePacket_): void;
        handleResetScore(packet: $ClientboundResetScorePacket_): void;
        /**
         * Removes or sets the ScoreObjective to be displayed at a particular scoreboard position (list, sidebar, below name)
         */
        handleSetDisplayObjective(packet: $ClientboundSetDisplayObjectivePacket): void;
        /**
         * Updates a team managed by the scoreboard: Create/Remove the team registration, Register/Remove the player-team-memberships, Set team displayname/prefix/suffix and/or whether friendly fire is enabled
         */
        handleSetPlayerTeamPacket(packet: $ClientboundSetPlayerTeamPacket): void;
        /**
         * Spawns a specified number of particles at the specified location with a randomized displacement according to specified bounds
         */
        handleParticleEvent(packet: $ClientboundLevelParticlesPacket): void;
        /**
         * Updates en entity's attributes and their respective modifiers, which are used for speed bonuses (player sprinting, animals fleeing, baby speed), weapon/tool attackDamage, hostiles followRange randomization, zombie maxHealth and knockback resistance as well as reinforcement spawning chance.
         */
        handleUpdateAttributes(packet: $ClientboundUpdateAttributesPacket): void;
        handleLightUpdatePacket(packet: $ClientboundLightUpdatePacket): void;
        handler$cni000$xaerominimap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handler$dfh001$xaeroworldmap$onHandleLightUpdatePacket(arg0: $ClientboundLightUpdatePacket, arg1: $CallbackInfo): void;
        handleMerchantOffers(packet: $ClientboundMerchantOffersPacket): void;
        handleSetChunkCacheRadius(packet: $ClientboundSetChunkCacheRadiusPacket): void;
        handleSetSimulationDistance(packet: $ClientboundSetSimulationDistancePacket_): void;
        handleSetChunkCacheCenter(packet: $ClientboundSetChunkCacheCenterPacket): void;
        handleBundlePacket(packet: $ClientboundBundlePacket): void;
        handleProjectilePowerPacket(packet: $ClientboundProjectilePowerPacket): void;
        handleChunkBatchStart(packet: $ClientboundChunkBatchStartPacket): void;
        handleChunkBatchFinished(packet: $ClientboundChunkBatchFinishedPacket_): void;
        handleDebugSample(packet: $ClientboundDebugSamplePacket_): void;
        handlePongResponse(packet: $ClientboundPongResponsePacket_): void;
        getListedOnlinePlayers(): $Collection<$PlayerInfo>;
        getDebugQueryHandler(): $DebugQueryHandler;
        markMessageAsProcessed(chatMessage: $PlayerChatMessage_, acknowledged: boolean): void;
        handler$cni000$xaerominimap$onSendCommand(arg0: string, arg1: $CallbackInfo): void;
        handler$cni000$xaerominimap$onSendUnsignedCommand(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        setKeyPair(keyPair: $ProfileKeyPair_): void;
        isFeatureEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        getXaero_minimapSession(): $XaeroMinimapSession;
        setXaero_minimapSession(arg0: $XaeroMinimapSession): void;
        getXaero_worldmapSession(): $WorldMapSession;
        setXaero_worldmapSession(arg0: $WorldMapSession): void;
        getXaero_serverChunkRadius(): number;
        getLocalGameProfile(): $GameProfile;
        handleBlockChangedAck(packet: $ClientboundBlockChangedAckPacket_): void;
        /**
         * Gets the client's description information about another player on the server.
         */
        getPlayerInfo(name: string): $PlayerInfo;
        getPlayerInfo(uniqueId: $UUID_): $PlayerInfo;
        sendCommand(message: string): void;
        handleGameEvent(packet: $ClientboundGameEventPacket): void;
        levels(): $Set<$ResourceKey<$Level>>;
        tick(): void;
        getLevel(): $ClientLevel;
        getId(): $UUID;
        close(): void;
        sendChat(message: string): void;
        serverLinks(): $ServerLinks;
        handleDisconnect(): void;
        getOnlinePlayerIds(): $Collection<$UUID>;
        getOnlinePlayers(): $Collection<$PlayerInfo>;
        enabledFeatures(): $FeatureFlagSet;
        getAdvancements(): $ClientAdvancements;
        clearLevel(): void;
        registryAccess(): $RegistryAccess$Frozen;
        getServerData(): $ServerData;
        updateSearchTrees(): void;
        getRecipeManager(): $RecipeManager;
        sendUnsignedCommand(command: string): boolean;
        scoreboard(): $Scoreboard;
        handleDamageEvent(packet: $ClientboundDamageEventPacket_): void;
        /**
         * Invokes the entities' handleUpdateHealth method which is implemented in LivingBase (hurt/death), MinecartMobSpawner (spawn delay), FireworkRocket & MinecartTNT (explosion), IronGolem (throwing, ...), Witch (spawn particles), Zombie (villager transformation), Animal (breeding mode particles), Horse (breeding/smoke particles), Sheep (...), Tameable (...), Villager (particles for breeding mode, angry and happy), Wolf (...)
         */
        handleEntityEvent(packet: $ClientboundEntityEventPacket): void;
        getCommands(): $CommandDispatcher<$SharedSuggestionProvider>;
        potionBrewing(): $PotionBrewing;
        searchTrees(): $SessionSearchTrees;
        kjs$sessionData(): $KubeSessionData;
        getSuggestionsProvider(): $ClientSuggestionProvider;
        handler$cni001$xaerominimap$onClose(arg0: $CallbackInfo): void;
        handler$dfh000$xaeroworldmap$onCleanup(arg0: $CallbackInfo): void;
        /**
         * Registers some server properties (gametype, hardcore-mode, terraintype, difficulty, player limit), creates a new WorldClient and sets the player initial dimension.
         */
        handleLogin(packet: $ClientboundLoginPacket_): void;
        handler$cni000$xaerominimap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$dfj001$xaeroworldmap$onOnGameJoin(arg0: $ClientboundLoginPacket_, arg1: $CallbackInfo): void;
        handler$eom000$pandalib$handleLogin(packet: $ClientboundLoginPacket_, ci: $CallbackInfo): void;
        /**
         * Spawns an instance of the objecttype indicated by the packet and sets its position and momentum
         */
        handleAddEntity(packet: $ClientboundAddEntityPacket): void;
        /**
         * Spawns an experience orb and sets its value (amount of XP)
         */
        handleAddExperienceOrb(packet: $ClientboundAddExperienceOrbPacket): void;
        /**
         * Sets the velocity of the specified entity to the specified value
         */
        handleSetEntityMotion(packet: $ClientboundSetEntityMotionPacket): void;
        /**
         * Invoked when the server registers new proximate objects in your watchlist or when objects in your watchlist have changed -> Registers any changes locally
         */
        handleSetEntityData(packet: $ClientboundSetEntityDataPacket_): void;
        /**
         * Updates an entity's position and rotation as specified by the packet
         */
        handleTeleportEntity(packet: $ClientboundTeleportEntityPacket): void;
        handleMoveVehicle(packet: $ClientboundMoveVehiclePacket): void;
        handleMovePlayer(packet: $ClientboundPlayerPositionPacket): void;
        /**
         * Updates which hotbar slot of the player is currently selected
         */
        handleSetCarriedItem(packet: $ClientboundSetCarriedItemPacket): void;
        /**
         * Renders a specified animation: Waking up a player, a living entity swinging its currently held item, being hurt or receiving a critical hit by normal or magical means
         */
        handleAnimate(packet: $ClientboundAnimatePacket): void;
        /**
         * Resets the ItemStack held in hand and closes the window that is opened
         */
        handleContainerClose(packet: $ClientboundContainerClosePacket): void;
        handlePlaceRecipe(packet: $ClientboundPlaceGhostRecipePacket): void;
        handlePlayerAbilities(packet: $ClientboundPlayerAbilitiesPacket): void;
        handleChangeDifficulty(packet: $ClientboundChangeDifficultyPacket): void;
        badpackets_handler(): $ClientPlayPacketHandler;
        catnip$getServerChunkRadius(): number;
        xaero_worldmapSession: $WorldMapSession;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        serverChunkRadius: number;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        xaero_minimapSession: $XaeroMinimapSession;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverCookies: $Map<$ResourceLocation, number[]>;
        connection: $Connection;
        commands: $CommandDispatcher<$SharedSuggestionProvider>;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
        set actionBarText(value: $ClientboundSetActionBarTextPacket_);
        set titleText(value: $ClientboundSetTitleTextPacket_);
        set subtitleText(value: $ClientboundSetSubtitleTextPacket_);
        set titlesAnimation(value: $ClientboundSetTitlesAnimationPacket);
        get listedOnlinePlayers(): $Collection<$PlayerInfo>;
        get debugQueryHandler(): $DebugQueryHandler;
        set keyPair(value: $ProfileKeyPair_);
        get xaero_serverChunkRadius(): number;
        get localGameProfile(): $GameProfile;
        get level(): $ClientLevel;
        get id(): $UUID;
        get onlinePlayerIds(): $Collection<$UUID>;
        get onlinePlayers(): $Collection<$PlayerInfo>;
        get advancements(): $ClientAdvancements;
        get recipeManager(): $RecipeManager;
        get suggestionsProvider(): $ClientSuggestionProvider;
    }
    export class $ServerData$ServerPackStatus extends $Enum<$ServerData$ServerPackStatus> {
        getName(): $Component;
        static values(): $ServerData$ServerPackStatus[];
        static valueOf(arg0: string): $ServerData$ServerPackStatus;
        static DISABLED: $ServerData$ServerPackStatus;
        static PROMPT: $ServerData$ServerPackStatus;
        static ENABLED: $ServerData$ServerPackStatus;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$ServerPackStatus}.
     */
    export type $ServerData$ServerPackStatus_ = "enabled" | "disabled" | "prompt";
    export class $ServerData {
        static validateIcon(icon: number[] | null): number[];
        setIconBytes(iconBytes: number[] | null): void;
        getResourcePackStatus(): $ServerData$ServerPackStatus;
        copyNameIconFrom(serverData: $ServerData): void;
        setResourcePackStatus(packStatus: $ServerData$ServerPackStatus_): void;
        getIconBytes(): number[];
        copyFrom(serverData: $ServerData): void;
        type(): $ServerData$Type;
        /**
         * Returns an NBTTagCompound with the server's name, IP and maybe acceptTextures.
         */
        write(): $CompoundTag;
        /**
         * Takes an NBTTagCompound with 'name' and 'ip' keys, returns a ServerData instance.
         */
        static read(nbtCompound: $CompoundTag_): $ServerData;
        state(): $ServerData$State;
        setState(state: $ServerData$State_): void;
        /**
         * Returns `true` if the server is a LAN server.
         */
        isRealm(): boolean;
        /**
         * Returns `true` if the server is a LAN server.
         */
        isLan(): boolean;
        neoForgeData: $ExtendedServerListData;
        motd: $Component;
        protocol: number;
        players: $ServerStatus$Players;
        ping: number;
        ip: string;
        playerList: $List<$Component>;
        name: string;
        version: $Component;
        status: $Component;
        constructor(name: string, ip: string, type: $ServerData$Type_);
        get realm(): boolean;
        get lan(): boolean;
    }
    export class $LegacyServerPinger extends $SimpleChannelInboundHandler<$ByteBuf> {
        channelRead0(context: $ChannelHandlerContext, buffer: $ByteBuf): void;
        constructor(address: $ServerAddress, output: $LegacyServerPinger$Output_);
    }
    export class $ServerList {
        static saveSingleServer(serverData: $ServerData): void;
        unhide(ip: string): $ServerData;
        remove(serverData: $ServerData): void;
        /**
         * Counts the number of ServerData instances in the list.
         */
        size(): number;
        get(ip: string): $ServerData;
        /**
         * Gets the ServerData instance stored for the given index in the list.
         */
        get(index: number): $ServerData;
        /**
         * Loads a list of servers from servers.dat, by running ServerData.getServerDataFromNBTCompound on each NBT compound found in the "servers" tag list.
         */
        load(): void;
        replace(index: number, server: $ServerData): void;
        add(server: $ServerData, hidden: boolean): void;
        /**
         * Loads a list of servers from servers.dat, by running ServerData.getServerDataFromNBTCompound on each NBT compound found in the "servers" tag list.
         */
        save(): void;
        /**
         * Takes two list indexes, and swaps their order around.
         */
        swap(pos1: number, pos2: number): void;
        constructor(minecraft: $Minecraft);
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen extends $ConfirmScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        noButton: $Component;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        callback: $BooleanConsumer;
        static PANORAMA: $PanoramaRenderer;
        yesButton: $Component;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $ClientChunkCache$Storage implements $AccessorClientChunkCacheStorage, $ClientChunkCacheStorageAccessor {
        inRange(x: number, z: number): boolean;
        replace(chunkIndex: number, chunk: $LevelChunk | null): void;
        replace(chunkIndex: number, chunk: $LevelChunk, replaceWith: $LevelChunk | null): $LevelChunk;
        getIndex(x: number, z: number): number;
        getChunk(chunkIndex: number): $LevelChunk;
        railways$getViewCenterX(): number;
        railways$getViewCenterZ(): number;
        railways$setViewCenterX(arg0: number): void;
        railways$setViewCenterZ(arg0: number): void;
        getChunks(): $AtomicReferenceArray<$LevelChunk>;
        chunkRadius: number;
        viewCenterZ: number;
        chunks: $AtomicReferenceArray<$LevelChunk>;
        chunkCount: number;
        this$0: $ClientChunkCache;
        viewCenterX: number;
        constructor(chunkRadius: $ClientChunkCache, arg1: number);
    }
    export class $ClientLevel$EntityCallbacks implements $LevelCallback<$Entity> {
    }
    export class $PlayerInfo {
        getMessageValidator(): $SignedMessageValidator;
        setTabListDisplayName(displayName: $Component_ | null): void;
        clearChatSession(enforcesSecureChat: boolean): void;
        hasVerifiableChat(): boolean;
        setGameMode(gameMode: $GameType_): void;
        getTabListDisplayName(): $Component;
        setChatSession(chatSession: $RemoteChatSession_): void;
        getChatSession(): $RemoteChatSession;
        getGameMode(): $GameType;
        getSkin(): $PlayerSkin;
        /**
         * Returns the GameProfile for the player represented by this NetworkPlayerInfo instance
         */
        getProfile(): $GameProfile;
        getLatency(): number;
        setLatency(latency: number): void;
        getTeam(): $PlayerTeam;
        constructor(profile: $GameProfile, enforeSecureChat: boolean);
        get messageValidator(): $SignedMessageValidator;
        get skin(): $PlayerSkin;
        get profile(): $GameProfile;
        get team(): $PlayerTeam;
    }
    export class $PingDebugMonitor {
        onPongReceived(packet: $ClientboundPongResponsePacket_): void;
        tick(): void;
        constructor(connection: $ClientPacketListener, delayTimer: $LocalSampleLogger);
    }
    export class $ProfileKeyPairManager {
        static create(userApiService: $UserApiService, user: $User, gameDirectory: $Path_): $ProfileKeyPairManager;
        static EMPTY_KEY_MANAGER: $ProfileKeyPairManager;
    }
    export interface $ProfileKeyPairManager {
        shouldRefreshKeyPair(): boolean;
        prepareKeyPair(): $CompletableFuture<($ProfileKeyPair) | undefined>;
    }
    export class $SessionSearchTrees {
        updateRecipes(recipeBook: $ClientRecipeBook, registries: $RegistryAccess$Frozen): void;
        rebuildAfterLanguageChange(): void;
        updateCreativeTags(items: $List_<$ItemStack_>): void;
        updateCreativeTags(arg0: $List_<$ItemStack_>, arg1: $SessionSearchTrees$Key): void;
        creativeTagSearch(): $SearchTree<$ItemStack>;
        creativeTagSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeNameSearch(arg0: $SessionSearchTrees$Key): $SearchTree<$ItemStack>;
        creativeNameSearch(): $SearchTree<$ItemStack>;
        updateCreativeTooltips(registries: $HolderLookup$Provider, items: $List_<$ItemStack_>): void;
        updateCreativeTooltips(arg0: $HolderLookup$Provider, arg1: $List_<$ItemStack_>, arg2: $SessionSearchTrees$Key): void;
        register(key: $SessionSearchTrees$Key, reloader: $Runnable_): void;
        static getTooltipLines(items: $Stream<$ItemStack_>, context: $Item$TooltipContext, tooltipFlag: $TooltipFlag): $Stream<string>;
        recipes(): $SearchTree<$RecipeCollection>;
        static CREATIVE_NAMES: $SessionSearchTrees$Key;
        static CREATIVE_TAGS: $SessionSearchTrees$Key;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest}.
     */
    export type $ClientCommonPacketListenerImpl$PackConfirmScreen$PendingRequest_ = { hash?: string, url?: $URL, id?: $UUID_,  } | [hash?: string, url?: $URL, id?: $UUID_, ];
    export class $ClientAdvancements {
        getTree(): $AdvancementTree;
        get(id: $ResourceLocation_): $AdvancementHolder;
        update(packet: $ClientboundUpdateAdvancementsPacket): void;
        setSelectedTab(advancement: $AdvancementHolder_ | null, tellServer: boolean): void;
        setListener(listener: $ClientAdvancements$Listener | null): void;
        constructor(minecraft: $Minecraft, telemetryManager: $WorldSessionTelemetryManager);
        get tree(): $AdvancementTree;
        set listener(value: $ClientAdvancements$Listener | null);
    }
    export class $MultiPlayerGameMode implements $MultiPlayerGameModeAccessor {
        getPreviousPlayerMode(): $GameType;
        /**
         * Returns `true` if player is in creative mode.
         */
        isAlwaysFlying(): boolean;
        getPlayerMode(): $GameType;
        handler$ffe000$fallingtrees$startDestroyBlock(loc: $BlockPos_, face: $Direction_, cir: $CallbackInfoReturnable<any>): void;
        startPrediction(level: $ClientLevel, action: $PredictiveAction_): void;
        sameDestroyTarget(pos: $BlockPos_): boolean;
        getDestroyStage(): number;
        handler$ffe003$fallingtrees$tick(ci: $CallbackInfo): void;
        handler$eok000$pandalib$clientOnBlockDestroyedEvent(pos: $BlockPos_, cir: $CallbackInfoReturnable<any>, level: $Level_, state: $BlockState_): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        canHurtPlayer(): boolean;
        handler$ddg000$treechop$dontPredictBlockBreak(arg0: $BlockPos_, arg1: $CallbackInfoReturnable<any>): void;
        /**
         * GuiEnchantment uses this during multiplayer to tell PlayerControllerMP to send a packet indicating the enchantment action the player has taken.
         */
        handleInventoryButtonClick(containerId: number, buttonId: number): void;
        /**
         * Sends a Packet107 to the server to drop the item on the ground
         */
        handleCreativeModeItemDrop(stack: $ItemStack_): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasExperience(): boolean;
        /**
         * Syncs the current player item with the server
         */
        tick(): void;
        handleInventoryMouseClick(containerId: number, slotId: number, mouseButton: number, clickType: $ClickType_, player: $Player): void;
        handleSlotStateChanged(slotId: number, containerId: number, newState: boolean): void;
        continueDestroyBlock(posBlock: $BlockPos_, directionFacing: $Direction_): boolean;
        /**
         * Syncs the current player item with the server
         */
        stopDestroyBlock(): void;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasMissTime(): boolean;
        /**
         * Attacks an entity
         */
        attack(player: $Player, targetEntity: $Entity): void;
        startDestroyBlock(posBlock: $BlockPos_, directionFacing: $Direction_): boolean;
        /**
         * Returns `true` if player is in creative mode.
         */
        isDestroying(): boolean;
        /**
         * Handles right-clicking an entity from the entities side, sends a packet to the server.
         */
        interactAt(player: $Player, target: $Entity, ray: $EntityHitResult, hand: $InteractionHand_): $InteractionResult;
        /**
         * Handles right-clicking an entity, sends a packet to the server.
         */
        interact(player: $Player, target: $Entity, hand: $InteractionHand_): $InteractionResult;
        useItemOn(player: $LocalPlayer, hand: $InteractionHand_, result: $BlockHitResult): $InteractionResult;
        /**
         * Returns `true` if player is in creative mode.
         */
        hasInfiniteItems(): boolean;
        useItem(player: $Player, hand: $InteractionHand_): $InteractionResult;
        /**
         * Returns `true` if player is in creative mode.
         */
        isServerControlledInventory(): boolean;
        /**
         * Sets player capabilities depending on current gametype.
         */
        releaseUsingItem(player: $Player): void;
        /**
         * Used in PlayerControllerMP to update the server with an ItemStack in a slot.
         */
        handleCreativeModeItemAdd(stack: $ItemStack_, slotId: number): void;
        handlePickItem(index: number): void;
        destroyBlock(pos: $BlockPos_): boolean;
        createPlayer(level: $ClientLevel, statsManager: $StatsCounter, recipes: $ClientRecipeBook): $LocalPlayer;
        createPlayer(level: $ClientLevel, statsManager: $StatsCounter, recipes: $ClientRecipeBook, wasShiftKeyDown: boolean, wasSprinting: boolean): $LocalPlayer;
        /**
         * Sets player capabilities depending on current gametype.
         */
        adjustPlayer(player: $Player): void;
        /**
         * Sets the game type for the player.
         */
        setLocalMode(type: $GameType_): void;
        setLocalMode(localPlayerMode: $GameType_, previousLocalPlayerMode: $GameType_ | null): void;
        handlePlaceRecipe(containerId: number, recipe: $RecipeHolder_<never>, shiftDown: boolean): void;
        proplacer$setDestroyDelay(index: number): void;
        destroyDelay: number;
        static $assertionsDisabled: boolean;
        connection: $ClientPacketListener;
        destroyProgress: number;
        constructor(minecraft: $Minecraft, connection: $ClientPacketListener);
        get previousPlayerMode(): $GameType;
        get alwaysFlying(): boolean;
        get playerMode(): $GameType;
        get destroyStage(): number;
        get destroying(): boolean;
        get serverControlledInventory(): boolean;
    }
    export class $ServerData$Type extends $Enum<$ServerData$Type> {
        static values(): $ServerData$Type[];
        static valueOf(arg0: string): $ServerData$Type;
        static OTHER: $ServerData$Type;
        static LAN: $ServerData$Type;
        static REALM: $ServerData$Type;
    }
    /**
     * Values that may be interpreted as {@link $ServerData$Type}.
     */
    export type $ServerData$Type_ = "lan" | "realm" | "other";
    export class $LegacyServerPinger$Output {
    }
    export interface $LegacyServerPinger$Output {
        handleResponse(version: number, motd: string, players: string, capacity: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LegacyServerPinger$Output}.
     */
    export type $LegacyServerPinger$Output_ = ((arg0: number, arg1: string, arg2: string, arg3: number, arg4: number) => void);
    export class $ClientHandshakePacketListenerImpl implements $ClientLoginPacketListener, $ClientLoginNetworkHandlerAccessor$1, $NetworkHandlerExtensions, $ClientLoginNetworkHandlerAccessor {
        setMinigameName(minigameName: string | null): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        isAcceptingMessages(): boolean;
        getAddon(): $ClientLoginNetworkAddon;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        handleHello(packet: $ClientboundHelloPacket): void;
        handleGameProfile(packet: $ClientboundGameProfilePacket_): void;
        handleDisconnect(packet: $ClientboundLoginDisconnectPacket): void;
        handleCompression(packet: $ClientboundLoginCompressionPacket): void;
        handleCustomQuery(packet: $ClientboundCustomQueryPacket_): void;
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
        protocol(): $ConnectionProtocol;
        flow(): $PacketFlow;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        fillCrashReport(crashReport: $CrashReport): void;
        getConnection(): $Connection;
        owo$getConnection(): $Connection;
        constructor(connection: $Connection, minecraft: $Minecraft, serverData: $ServerData | null, parent: $Screen | null, newWorld: boolean, worldLoadDuration: $Duration_ | null, updateStatus: $Consumer_<$Component>, cookies: $TransferState_ | null);
        set minigameName(value: string | null);
        get acceptingMessages(): boolean;
        get addon(): $ClientLoginNetworkAddon;
        get connection(): $Connection;
    }
    export class $TransferState extends $Record {
        cookies(): $Map<$ResourceLocation, number[]>;
        constructor(arg0: $Map_<$ResourceLocation_, number[]>);
    }
    /**
     * Values that may be interpreted as {@link $TransferState}.
     */
    export type $TransferState_ = { cookies?: $Map_<$ResourceLocation_, number[]>,  } | [cookies?: $Map_<$ResourceLocation_, number[]>, ];
    export class $DebugSampleSubscriber {
        tick(): void;
        static REQUEST_INTERVAL_MS: number;
        constructor(connection: $ClientPacketListener, debugScreenOverlay: $DebugScreenOverlay);
    }
    export class $ClientAdvancements$Listener {
    }
    export interface $ClientAdvancements$Listener extends $AdvancementTree$Listener {
        onSelectedTabChanged(advancement: $AdvancementHolder_ | null): void;
        onUpdateAdvancementProgress(advancement: $AdvancementNode, advancementProgress: $AdvancementProgress): void;
    }
    export class $RegistryDataCollector$ContentsCollector {
    }
    export class $RegistryDataCollector {
        appendContents(registryKey: $ResourceKey_<$Registry<never>>, registryEntries: $List_<$RegistrySynchronization$PackedRegistryEntry_>): void;
        appendTags(tags: $Map_<$ResourceKey_<$Registry<never>>, $TagNetworkSerialization$NetworkPayload>): void;
        collectGameRegistries(resourceProvider: $ResourceProvider_, registryAccess: $RegistryAccess, isMemoryConnection: boolean): $RegistryAccess$Frozen;
        constructor();
    }
    export class $ClientLevel extends $Level implements $ClientWorldAccessor, $BiomeSeedProvider, $ChunkTrackerHolder, $ClientLevelAccessor, $IXaeroMinimapClientWorld, $IWorldMapClientWorld, $ClientLevelKJS, $IClientLevel, $SubLevelContainerHolder, $WaterOcclusionContainerHolder, $LevelPoseProviderExtension, $ClientLevelAccessor$1, $CachingClientLevel {
        xaerolib_getData(): $ClientLevelData;
        xaerolib_setData(arg0: $ClientLevelData): void;
        /**
         * Sets the world time.
         */
        setDayTime(time: number): void;
        tickNonPassenger(entity: $Entity): void;
        addEntity(entity: $Entity): void;
        setDefaultSpawnPos(spawnPos: $BlockPos_, spawnAngle: number): void;
        sable$getWaterOcclusionContainer(): $WaterOcclusionContainer<any>;
        getEntityCount(): number;
        handleBlockChangedAck(sequence: number): void;
        setServerVerifiedBlockState(pos: $BlockPos_, state: $BlockState_, flags: number): void;
        syncBlockState(pos: $BlockPos_, state: $BlockState_, playerPos: $Vec3_): void;
        getBlockStatePredictionHandler(): $BlockStatePredictionHandler;
        queueLightUpdate(task: $Runnable_): void;
        /**
         * If on MP, sends a quitting packet.
         */
        pollLightUpdates(): void;
        isLightUpdateQueueEmpty(): boolean;
        entitiesForRendering(): $Iterable<$Entity>;
        handler$dcl001$immersive_melodies$immersiveMelodies$injectTickEntity(arg0: $Entity, arg1: $CallbackInfo): void;
        handler$cof000$entityculling$tickEntity(entity: $Entity, info: $CallbackInfo): void;
        handler$dcl001$immersive_melodies$immersiveMelodies$injectTickPassenger(arg0: $Entity, arg1: $Entity, arg2: $CallbackInfo): void;
        onChunkLoaded(chunkPos: $ChunkPos): void;
        /**
         * If on MP, sends a quitting packet.
         */
        clearTintCaches(): void;
        removeEntity(entityId: number, reason: $Entity$RemovalReason_): void;
        handler$eol001$pandalib$disconnect(ci: $CallbackInfo): void;
        doAnimateTick(posX: number, posY: number, posZ: number, range: number, random: $RandomSource, block: $Block_ | null, blockPos: $BlockPos$MutableBlockPos): void;
        handler$ghn000$sable$subLevelAnimateTick(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo, arg4: $RandomSource, arg5: $Block_, arg6: $BlockPos$MutableBlockPos): void;
        overrideMapData(mapId: $MapId_, mapData: $MapItemSavedData): void;
        setSectionDirtyWithNeighbors(posX: number, posY: number, posZ: number): void;
        getSkyColor(pos: $Vec3_, partialTick: number): $Vec3;
        getSkyFlashTime(): number;
        getCloudColor(partialTick: number): $Vec3;
        getStarBrightness(partialTick: number): number;
        calculateBlockTint(blockPos: $BlockPos_, colorResolver: $ColorResolver_): number;
        getAllMapData(): $Map<$MapId, $MapItemSavedData>;
        addMapData(map: $Map_<$MapId_, $MapItemSavedData>): void;
        setServerSimulationDistance(sequence: number): void;
        getServerSimulationDistance(): number;
        lithium$getEntityManager(): $TransientEntitySectionManager<any>;
        sodium$getBiomeZoomSeed(): number;
        sodium$getTracker(): $ChunkTracker;
        getXaero_minimapData(): $MinimapClientWorldData;
        setXaero_minimapData(arg0: $MinimapClientWorldData): void;
        getXaero_worldmapData(): $WorldMapClientWorldData;
        setXaero_worldmapData(arg0: $WorldMapClientWorldData): void;
        sable$pushPoseSupplier(arg0: $Function_<any, any>): void;
        /**
         * If on MP, sends a quitting packet.
         */
        sable$popPoseSupplier(): void;
        sound_physics_remastered$getCachedClone(): $ClonedClientLevel;
        sound_physics_remastered$setCachedClone(arg0: $ClonedClientLevel | null): void;
        /**
         * Runs a single tick for the world
         */
        tick(hasTimeLeft: $BooleanSupplier_): void;
        unload(chunk: $LevelChunk): void;
        /**
         * Returns the world's WorldInfo object
         */
        getLevelData(): $ClientLevel$ClientLevelData;
        /**
         * If on MP, sends a quitting packet.
         */
        tickEntities(): void;
        animateTick(posX: number, posY: number, posZ: number): void;
        sable$getPlotContainer(): $SubLevelContainer;
        effects(): $DimensionSpecialEffects;
        /**
         * Gets the world's chunk provider
         */
        getChunkSource(): $ClientChunkCache;
        sable$getPose(arg0: $SubLevel): $Pose3dc;
        getSkyDarken(partialTick: number): number;
        /**
         * Sets the world time.
         */
        setGameTime(time: number): void;
        kubeParticle(x: number, y: number, z: number, spriteSet: $SpriteSet): $KubeAnimatedParticle;
        self(): $ClientLevel;
        getLevelRenderer(): $LevelRenderer;
        callGetEntities(): $LevelEntityGetter<$Entity>;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        tickingEntities: $EntityTickList;
        static LONG_PARTICLE_CLIP_RANGE: number;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        levelRenderer: $LevelRenderer;
        rainLevel: number;
        oThunderLevel: number;
        static ATTACHMENTS_NBT_KEY: string;
        addend: number;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        entityStorage: $TransientEntitySectionManager<$Entity>;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(connection: $ClientPacketListener, clientLevelData: $ClientLevel$ClientLevelData, dimension: $ResourceKey_<$Level>, dimensionType: $Holder_<$DimensionType>, viewDistance: number, serverSimulationDistance: number, profiler: $Supplier_<$ProfilerFiller>, levelRenderer: $LevelRenderer, isDebug: boolean, biomeZoomSeed: number);
        get entityCount(): number;
        get blockStatePredictionHandler(): $BlockStatePredictionHandler;
        get lightUpdateQueueEmpty(): boolean;
        get skyFlashTime(): number;
        get allMapData(): $Map<$MapId, $MapItemSavedData>;
        get chunkSource(): $ClientChunkCache;
        set gameTime(value: number);
    }
    export class $ClientRegistryLayer extends $Enum<$ClientRegistryLayer> {
        static createRegistryAccess(): $LayeredRegistryAccess<$ClientRegistryLayer>;
        static values(): $ClientRegistryLayer[];
        static valueOf(arg0: string): $ClientRegistryLayer;
        static REMOTE: $ClientRegistryLayer;
        static STATIC: $ClientRegistryLayer;
    }
    /**
     * Values that may be interpreted as {@link $ClientRegistryLayer}.
     */
    export type $ClientRegistryLayer_ = "static" | "remote";
    export class $ClientLevel$ClientLevelData implements $WritableLevelData {
        getClearColorScale(): number;
        /**
         * Returns `true` if hardcore mode is enabled, otherwise `false`.
         */
        isDifficultyLocked(): boolean;
        setRaining(difficultyLocked: boolean): void;
        setDayTime(dayTime: number): void;
        setSpawn(spawnPoint: $BlockPos_, angle: number): void;
        getHorizonHeight(level: $LevelHeightAccessor): number;
        setDifficulty(difficulty: $Difficulty_): void;
        setDifficultyLocked(difficultyLocked: boolean): void;
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
        setGameTime(dayTime: number): void;
        constructor(difficulty: $Difficulty_, hardcore: boolean, isFlat: boolean);
        get clearColorScale(): number;
        get hardcore(): boolean;
        get gameRules(): $GameRules;
        get spawnPos(): $BlockPos;
        get spawnAngle(): number;
        get thundering(): boolean;
    }
    export class $ServerStatusPinger {
        onPingFailed(reason: $Component_, serverData: $ServerData): void;
        pingLegacyServer(resolvedServerAddress: $InetSocketAddress, serverAddress: $ServerAddress, serverData: $ServerData): void;
        static formatPlayerCount(players: number, capacity: number): $Component;
        pingServer(serverData: $ServerData, serverListUpdater: $Runnable_, stateUpdater: $Runnable_): void;
        tick(): void;
        removeAll(): void;
        constructor();
    }
    export class $LevelLoadStatusManager$Status extends $Enum<$LevelLoadStatusManager$Status> {
    }
    /**
     * Values that may be interpreted as {@link $LevelLoadStatusManager$Status}.
     */
    export type $LevelLoadStatusManager$Status_ = "waiting_for_server" | "waiting_for_player_chunk" | "level_ready";
    export class $ClientChunkCache extends $ChunkSource implements $DebugChunkProviderAttachments {
        updateViewRadius(viewDistance: number): void;
        updateViewCenter(x: number, z: number): void;
        handler$eco000$railways$securitycraft$onDrop(arg0: $ChunkPos, arg1: $CallbackInfo): void;
        handler$eco000$railways$securitycraft$onUpdateViewRadius(arg0: number, arg1: $CallbackInfo): void;
        sable$loadedChunks(): $Collection<any>;
        handler$eco000$railways$securitycraft$onInit(arg0: $ClientLevel, arg1: number, arg2: $CallbackInfo): void;
        replaceWithPacketData(x: number, z: number, buffer: $FriendlyByteBuf, tag: $CompoundTag_, consumer: $Consumer_<$ClientboundLevelChunkPacketData$BlockEntityTagOutput>): $LevelChunk;
        replaceBiomes(x: number, z: number, buffer: $FriendlyByteBuf): void;
        drop(chunkPos: $ChunkPos): void;
        getChunk(x: number, z: number, chunkStatus: $ChunkStatus_, requireChunk: boolean): $LevelChunk;
        level: $ClientLevel;
        static LOGGER: $Logger;
        storage: $ClientChunkCache$Storage;
        constructor(level: $ClientLevel, viewDistance: number);
    }
    export class $KnownPacksManager {
        redirect$fnm000$fabric_resource_loader_v0$createClientManager(): $PackRepository;
        modifyReturnValue$fnm000$fabric_resource_loader_v0$getCommonKnownPacksReturn(packs: $List_<any>): $List<any>;
        createResourceManager(): $CloseableResourceManager;
        trySelectingPacks(packs: $List_<$KnownPack_>): $List<$KnownPack>;
        constructor();
    }
    export class $ClientCommonPacketListenerImpl$DeferredPacket extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClientCommonPacketListenerImpl$DeferredPacket}.
     */
    export type $ClientCommonPacketListenerImpl$DeferredPacket_ = { packet?: $Packet<$ServerboundPacketListener>, sendCondition?: $BooleanSupplier_, expirationTime?: number,  } | [packet?: $Packet<$ServerboundPacketListener>, sendCondition?: $BooleanSupplier_, expirationTime?: number, ];
    export class $CommonListenerCookie extends $Record {
        postDisconnectScreen(): $Screen;
        serverCookies(): $Map<$ResourceLocation, number[]>;
        /**
         * @deprecated
         */
        strictErrorHandling(): boolean;
        customReportDetails(): $Map<string, string>;
        connectionType(): $ConnectionType;
        serverBrand(): string;
        serverData(): $ServerData;
        serverLinks(): $ServerLinks;
        localGameProfile(): $GameProfile;
        telemetryManager(): $WorldSessionTelemetryManager;
        enabledFeatures(): $FeatureFlagSet;
        receivedRegistries(): $RegistryAccess$Frozen;
        chatState(): $ChatComponent$State;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: $WorldSessionTelemetryManager, arg2: $RegistryAccess$Frozen, arg3: $FeatureFlagSet, arg4: string | null, arg5: $ServerData | null, arg6: $Screen | null, arg7: $Map_<$ResourceLocation_, number[]>, arg8: $ChatComponent$State | null, arg9: boolean, arg10: $Map_<string, string>, arg11: $ServerLinks_);
        constructor(localGameProfile: $GameProfile, telemetryManager: $WorldSessionTelemetryManager, receivedRegistries: $RegistryAccess$Frozen, enabledFeatures: $FeatureFlagSet, serverBrand: string | null, serverData: $ServerData | null, postDisconnectScreen: $Screen | null, serverCookies: $Map_<$ResourceLocation_, number[]>, chatState: $ChatComponent$State | null, strictErrorHandling: boolean, customReportDetails: $Map_<string, string>, serverLinks: $ServerLinks_, connectionType: $ConnectionType_);
    }
    /**
     * Values that may be interpreted as {@link $CommonListenerCookie}.
     */
    export type $CommonListenerCookie_ = { connectionType?: $ConnectionType_, postDisconnectScreen?: $Screen, enabledFeatures?: $FeatureFlagSet, chatState?: $ChatComponent$State, serverCookies?: $Map_<$ResourceLocation_, number[]>, serverLinks?: $ServerLinks_, receivedRegistries?: $RegistryAccess$Frozen, telemetryManager?: $WorldSessionTelemetryManager, localGameProfile?: $GameProfile, serverData?: $ServerData, strictErrorHandling?: boolean, customReportDetails?: $Map_<string, string>, serverBrand?: string,  } | [connectionType?: $ConnectionType_, postDisconnectScreen?: $Screen, enabledFeatures?: $FeatureFlagSet, chatState?: $ChatComponent$State, serverCookies?: $Map_<$ResourceLocation_, number[]>, serverLinks?: $ServerLinks_, receivedRegistries?: $RegistryAccess$Frozen, telemetryManager?: $WorldSessionTelemetryManager, localGameProfile?: $GameProfile, serverData?: $ServerData, strictErrorHandling?: boolean, customReportDetails?: $Map_<string, string>, serverBrand?: string, ];
    export class $ClientCommonPacketListenerImpl implements $ClientCommonPacketListener, $AccessClientCommonPacketListenerImpl, $ClientCommonNetworkHandlerAccessor {
        sendDeferredPackets(): void;
        wrapOperation$fdp001$fabric_networking_api_v1$onCustomPayloadRegisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        wrapOperation$fdp001$fabric_networking_api_v1$onCustomPayloadUnregisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        static preparePackPrompt(line1: $Component_, line2: $Component_ | null): $Component;
        handlePing(packet: $ClientboundPingPacket): void;
        handleResourcePackPush(packet: $ClientboundResourcePackPushPacket_): void;
        handleResourcePackPop(packet: $ClientboundResourcePackPopPacket_): void;
        handleStoreCookie(packet: $ClientboundStoreCookiePacket_): void;
        handleTransfer(packet: $ClientboundTransferPacket_): void;
        handleCustomReportDetails(packet: $ClientboundCustomReportDetailsPacket_): void;
        handleServerLinks(packet: $ClientboundServerLinksPacket_): void;
        createDisconnectScreen(details: $DisconnectionDetails_): $Screen;
        badpackets_handlePing(arg0: number): boolean;
        serverBrand(): string;
        onDisconnect(details: $DisconnectionDetails_): void;
        send(packet: $Packet<never>): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        handleDisconnect(packet: $ClientboundDisconnectPacket_): void;
        handleRequestCookie(packet: $ClientboundCookieRequestPacket_): void;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        handleCustomPayload(packet: $ClientboundCustomPayloadPacket_): void;
        handleCustomPayload(payload: $CustomPacketPayload_): void;
        handleKeepAlive(packet: $ClientboundKeepAlivePacket): void;
        flow(): $PacketFlow;
        /**
         * {@inheritDoc}
         */
        disconnect(reason: $Component_): void;
        send(payload: $CustomPacketPayload_): void;
        /**
         * {@inheritDoc}
         */
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        fillCrashReport(crashReport: $CrashReport): void;
        hasChannel(payload: $CustomPacketPayload_): boolean;
        hasChannel(type: $CustomPacketPayload$Type_<never>): boolean;
        /**
         * Checks if the connection has negotiated and opened a channel for the payload.
         */
        hasChannel(payloadId: $ResourceLocation_): boolean;
        /**
         * @return the connection this listener is attached to
         */
        badpackets_connection(): $Connection;
        /**
         * @return the connection this listener is attached to
         */
        getConnection(): $Connection;
        minecraft: $Minecraft;
        /**
         * @deprecated
         */
        strictErrorHandling: boolean;
        connection: $Connection;
        isTransferring: boolean;
        customReportDetails: $Map<string, string>;
        postDisconnectScreen: $Screen;
        connectionType: $ConnectionType;
        serverData: $ServerData;
        telemetryManager: $WorldSessionTelemetryManager;
        serverLinks: $ServerLinks;
        serverCookies: $Map<$ResourceLocation, number[]>;
        constructor(minecraft: $Minecraft, connection: $Connection, commonListenerCookie: $CommonListenerCookie_);
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $ClientSuggestionProvider implements $SharedSuggestionProvider, $FabricClientCommandSource, $VeilClientSuggestionProvider {
        sendError(arg0: $Component_): void;
        sendFeedback(arg0: $Component_): void;
        veil$getPostPipelineNames(): $Stream<any>;
        completeCustomSuggestions(transaction: number, result: $Suggestions): void;
        modifyCustomCompletions(action: $ClientboundCustomChatCompletionsPacket$Action_, entries: $List_<string>): void;
        getClient(): $Minecraft;
        getPlayer(): $LocalPlayer;
        getWorld(): $ClientLevel;
        hasPermission(level: number): boolean;
        getOnlinePlayerNames(): $Collection<string>;
        getSelectedEntities(): $Collection<string>;
        getAbsoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        getRelevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        customSuggestion(context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAllTeams(): $Collection<string>;
        suggestRegistryElements(resourceKey: $ResourceKey_<$Registry<never>>, registryKey: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder, context: $CommandContext<never>): $CompletableFuture<$Suggestions>;
        getAvailableSounds(): $Stream<$ResourceLocation>;
        getRecipeNames(): $Stream<$ResourceLocation>;
        getCustomTabSugggestions(): $Collection<string>;
        levels(): $Set<$ResourceKey<$Level>>;
        enabledFeatures(): $FeatureFlagSet;
        registryAccess(): $RegistryAccess;
        suggestRegistryElements(registry: $Registry<never>, type: $SharedSuggestionProvider$ElementSuggestionType_, builder: $SuggestionsBuilder): void;
        getMeta(arg0: string): $Object;
        getEntity(): $Entity;
        getPosition(): $Vec3;
        getRotation(): $Vec2;
        constructor(connection: $ClientPacketListener, minecraft: $Minecraft);
        get client(): $Minecraft;
        get player(): $LocalPlayer;
        get world(): $ClientLevel;
        get onlinePlayerNames(): $Collection<string>;
        get selectedEntities(): $Collection<string>;
        get absoluteCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get relevantCoordinates(): $Collection<$SharedSuggestionProvider$TextCoordinates>;
        get allTeams(): $Collection<string>;
        get availableSounds(): $Stream<$ResourceLocation>;
        get recipeNames(): $Stream<$ResourceLocation>;
        get customTabSugggestions(): $Collection<string>;
        get entity(): $Entity;
        get position(): $Vec3;
        get rotation(): $Vec2;
    }
    export class $ChunkBatchSizeCalculator {
        onBatchStart(): void;
        onBatchFinished(batchSize: number): void;
        getDesiredChunksPerTick(): number;
        constructor();
        get desiredChunksPerTick(): number;
    }
}
