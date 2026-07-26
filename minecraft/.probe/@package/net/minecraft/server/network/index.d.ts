import { $NioEventLoopGroup } from "@package/io/netty/channel/nio";
import { $Codec } from "@package/com/mojang/serialization";
import { $ServerInfo, $MinecraftServer } from "@package/net/minecraft/server";
import { $ServerStatus_, $ServerStatusPacketListener, $ServerboundStatusRequestPacket } from "@package/net/minecraft/network/protocol/status";
import { $ServerLoginNetworkAddon } from "@package/net/fabricmc/fabric/impl/networking/server";
import { $ExecutorService, $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $NetworkHandlerExtensions, $PacketCallbackListener } from "@package/net/fabricmc/fabric/impl/networking";
import { $RelativeMovement_ } from "@package/net/minecraft/world/entity";
import { $ServerCommonNetworkHandlerAccessor, $ServerLoginNetworkHandlerAccessor } from "@package/net/fabricmc/fabric/mixin/networking/accessor";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ConnectionType_, $ConnectionType } from "@package/net/neoforged/neoforge/network/connection";
import { $CustomPacketPayload_, $CustomPacketPayload$Type_, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Set_, $List, $List_ } from "@package/java/util";
import { $ServerboundCookieResponsePacket_ } from "@package/net/minecraft/network/protocol/cookie";
import { $ServerboundKeepAlivePacket, $ServerboundCustomPayloadPacket_, $ServerboundPongPacket, $ServerboundResourcePackPacket_, $ServerboundClientInformationPacket_, $ServerCommonPacketListener } from "@package/net/minecraft/network/protocol/common";
import { $ServerCommonNetworkHandlerAccessor as $ServerCommonNetworkHandlerAccessor$1 } from "@package/io/wispforest/owo/mixin";
import { $Consumer_, $Function_, $Supplier } from "@package/java/util/function";
import { $ClientInformation, $ServerLevel, $ServerPlayer, $ClientInformation_ } from "@package/net/minecraft/server/level";
import { $CrashReport, $CrashReportCategory } from "@package/net/minecraft";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $EpollEventLoopGroup } from "@package/io/netty/channel/epoll";
import { $InetAddress, $SocketAddress, $URL } from "@package/java/net";
import { $PacketSendListener, $Connection, $DisconnectionDetails_, $TickablePacketListener, $DisconnectionDetails, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $Enum, $RuntimeException, $Exception, $Throwable, $Iterable_, $Record, $AutoCloseable } from "@package/java/lang";
import { $PacketHandlerHolder, $ServerConfigPacketHandler$TaskFinisher, $ServerPlayPacketHandler, $ServerConfigPacketHandler } from "@package/lol/bai/badpackets/impl/handler";
import { $FabricServerConfigurationNetworkHandler } from "@package/net/fabricmc/fabric/api/networking/v1";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $Component_, $ChatType$Bound_, $PlayerChatMessage_, $FilterMask, $Component } from "@package/net/minecraft/network/chat";
import { $ServerboundLoginAcknowledgedPacket, $ServerLoginPacketListener, $ServerboundKeyPacket, $ServerboundHelloPacket_, $ServerboundCustomQueryAnswerPacket_ } from "@package/net/minecraft/network/protocol/login";
import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $ServerHandshakePacketListener, $ClientIntentionPacket_ } from "@package/net/minecraft/network/protocol/handshake";
import { $ServerboundSetCommandMinecartPacket, $ServerboundJigsawGeneratePacket, $ServerboundDebugSampleSubscriptionPacket_, $ServerboundChangeDifficultyPacket, $ServerboundPlaceRecipePacket, $ServerboundUseItemPacket, $ServerboundBlockEntityTagQueryPacket, $ServerboundPickItemPacket, $ServerboundChatPacket_, $ServerboundPlayerActionPacket, $ServerGamePacketListener, $ServerboundPaddleBoatPacket, $ServerboundMoveVehiclePacket, $ServerboundLockDifficultyPacket, $ServerboundSetBeaconPacket_, $ServerboundSetStructureBlockPacket, $ServerboundPlayerInputPacket, $ServerboundEditBookPacket_, $ServerboundConfigurationAcknowledgedPacket, $ServerboundClientCommandPacket, $ServerboundSelectTradePacket, $ServerboundPlayerCommandPacket, $ServerboundSeenAdvancementsPacket, $ServerboundSwingPacket, $ServerboundSetJigsawBlockPacket, $ServerboundMovePlayerPacket, $ServerboundContainerClickPacket, $ServerboundPlayerAbilitiesPacket, $ServerboundCommandSuggestionPacket, $ServerboundEntityTagQueryPacket, $ServerboundRecipeBookChangeSettingsPacket, $ServerboundInteractPacket, $ServerboundChunkBatchReceivedPacket_, $ServerboundSetCarriedItemPacket, $ServerboundChatSessionUpdatePacket_, $ServerboundSetCommandBlockPacket, $ServerboundSignUpdatePacket, $ServerboundAcceptTeleportationPacket, $ServerboundChatAckPacket_, $ServerboundContainerSlotStateChangedPacket_, $ServerboundUseItemOnPacket, $ServerboundContainerClosePacket, $ServerboundTeleportToEntityPacket, $ServerboundChatCommandSignedPacket_, $ServerboundChatCommandPacket_, $ServerboundRenameItemPacket, $ServerboundContainerButtonClickPacket_, $ServerboundRecipeBookSeenRecipePacket, $ServerboundSetCreativeModeSlotPacket_ } from "@package/net/minecraft/network/protocol/game";
import { $ServerConfigurationPacketListener, $ServerboundFinishConfigurationPacket, $ServerboundSelectKnownPacks_ } from "@package/net/minecraft/network/protocol/configuration";
import { $ServerboundPingRequestPacket } from "@package/net/minecraft/network/protocol/ping";
import { $NeoListenableNetworkHandler } from "@package/org/sinytra/fabric/networking_api";
import { $Channel, $ChannelInboundHandlerAdapter } from "@package/io/netty/channel";
import { $SableUDPServer } from "@package/dev/ryanhcode/sable/network/udp";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ServerConnectionListenerExtension } from "@package/dev/ryanhcode/sable/mixinterface/udp";
import { $StreamCodec_, $StreamCodec } from "@package/net/minecraft/network/codec";
export * as config from "@package/net/minecraft/server/network/config";

declare module "@package/net/minecraft/server/network" {
    export class $ServerGamePacketListenerImpl extends $ServerCommonPacketListenerImpl implements $ServerGamePacketListener, $ServerPlayerConnection, $TickablePacketListener, $NeoListenableNetworkHandler, $PacketHandlerHolder<any> {
        handleContainerSlotStateChanged(packet: $ServerboundContainerSlotStateChangedPacket_): void;
        teleport(x: number, arg1: number, y: number, arg3: number, z: number): void;
        /**
         * Teleports the player position to the (relative) values specified, and syncs to the client
         */
        teleport(x: number, arg1: number, y: number, arg3: number, z: number, arg5: $Set_<$RelativeMovement_>): void;
        getPlayer(): $ServerPlayer;
        resetPosition(): void;
        tick(): void;
        getRemoteAddress(): $SocketAddress;
        handleDisconnect(): void;
        handlePickItem(packet: $ServerboundPickItemPacket): void;
        ackBlockChangesUpTo(sequence: number): void;
        filterTextPacket(text: string): $CompletableFuture<$FilteredText>;
        filterTextPacket(texts: $List_<string>): $CompletableFuture<$List<$FilteredText>>;
        /**
         * Processes player movement input. Includes walking, strafing, jumping, and sneaking. Excludes riding and toggling flying/sprinting.
         */
        handlePlayerInput(packet: $ServerboundPlayerInputPacket): void;
        handleMoveVehicle(packet: $ServerboundMoveVehiclePacket): void;
        handleAcceptTeleportPacket(packet: $ServerboundAcceptTeleportationPacket): void;
        handleRecipeBookSeenRecipePacket(packet: $ServerboundRecipeBookSeenRecipePacket): void;
        handleRecipeBookChangeSettingsPacket(packet: $ServerboundRecipeBookChangeSettingsPacket): void;
        handleSeenAdvancements(packet: $ServerboundSeenAdvancementsPacket): void;
        /**
         * This method is only called for manual tab-completion (the minecraft:ask_server suggestion provider).
         */
        handleCustomCommandSuggestions(packet: $ServerboundCommandSuggestionPacket): void;
        handleSetCommandBlock(packet: $ServerboundSetCommandBlockPacket): void;
        handleSetCommandMinecart(packet: $ServerboundSetCommandMinecartPacket): void;
        handleRenameItem(packet: $ServerboundRenameItemPacket): void;
        handleSetBeaconPacket(packet: $ServerboundSetBeaconPacket_): void;
        handleSetStructureBlock(packet: $ServerboundSetStructureBlockPacket): void;
        handleSetJigsawBlock(packet: $ServerboundSetJigsawBlockPacket): void;
        handleJigsawGenerate(packet: $ServerboundJigsawGeneratePacket): void;
        handleSelectTrade(packet: $ServerboundSelectTradePacket): void;
        handleEditBook(packet: $ServerboundEditBookPacket_): void;
        handleEntityTagQuery(packet: $ServerboundEntityTagQueryPacket): void;
        handleBlockEntityTagQuery(packet: $ServerboundBlockEntityTagQueryPacket): void;
        /**
         * Processes clients perspective on player positioning and/or orientation
         */
        handleMovePlayer(packet: $ServerboundMovePlayerPacket): void;
        handler$gbd000$sable$handleMovePlayer(arg0: $ServerboundMovePlayerPacket, arg1: $CallbackInfo): void;
        /**
         * Processes the player initiating/stopping digging on a particular spot, as well as a player dropping items
         */
        handlePlayerAction(packet: $ServerboundPlayerActionPacket): void;
        handleUseItemOn(packet: $ServerboundUseItemOnPacket): void;
        /**
         * Called when a client is using an item while not pointing at a block, but simply using an item
         */
        handleUseItem(packet: $ServerboundUseItemPacket): void;
        handleTeleportToEntityPacket(packet: $ServerboundTeleportToEntityPacket): void;
        handlePaddleBoat(packet: $ServerboundPaddleBoatPacket): void;
        /**
         * Updates which quickbar slot is selected
         */
        handleSetCarriedItem(packet: $ServerboundSetCarriedItemPacket): void;
        /**
         * Process chat messages (broadcast back to clients) and commands (executes)
         */
        handleChat(packet: $ServerboundChatPacket_): void;
        handleChatCommand(packet: $ServerboundChatCommandPacket_): void;
        handleSignedChatCommand(packet: $ServerboundChatCommandSignedPacket_): void;
        handleChatAck(packet: $ServerboundChatAckPacket_): void;
        handleAnimate(packet: $ServerboundSwingPacket): void;
        /**
         * Processes a range of action-types: sneaking, sprinting, waking from sleep, opening the inventory or setting jump height of the horse the player is riding
         */
        handlePlayerCommand(packet: $ServerboundPlayerCommandPacket): void;
        addPendingMessage(message: $PlayerChatMessage_): void;
        sendPlayerChatMessage(chatMessage: $PlayerChatMessage_, boundType: $ChatType$Bound_): void;
        sendDisguisedChatMessage(message: $Component_, boundType: $ChatType$Bound_): void;
        switchToConfig(): void;
        handlePingRequest(packet: $ServerboundPingRequestPacket): void;
        /**
         * Processes left and right clicks on entities
         */
        handleInteract(packet: $ServerboundInteractPacket): void;
        /**
         * Processes the client status updates: respawn attempt from player, opening statistics or achievements, or acquiring 'open inventory' achievement
         */
        handleClientCommand(packet: $ServerboundClientCommandPacket): void;
        /**
         * Processes the client closing windows (container)
         */
        handleContainerClose(packet: $ServerboundContainerClosePacket): void;
        /**
         * Executes a container/inventory slot manipulation as indicated by the packet. Sends the serverside result if they didn't match the indicated result and prevents further manipulation by the player until he confirms that it has the same open container/inventory
         */
        handleContainerClick(packet: $ServerboundContainerClickPacket): void;
        handlePlaceRecipe(packet: $ServerboundPlaceRecipePacket): void;
        /**
         * Enchants the item identified by the packet given some convoluted conditions (matching window, which should/shouldn't be in use?)
         */
        handleContainerButtonClick(packet: $ServerboundContainerButtonClickPacket_): void;
        /**
         * Update the server with an ItemStack in a slot.
         */
        handleSetCreativeModeSlot(packet: $ServerboundSetCreativeModeSlotPacket_): void;
        handleSignUpdate(packet: $ServerboundSignUpdatePacket): void;
        /**
         * Processes a player starting/stopping flying
         */
        handlePlayerAbilities(packet: $ServerboundPlayerAbilitiesPacket): void;
        handler$fcd000$ftbquests$handleClientInformation(packet: $ServerboundClientInformationPacket_, ci: $CallbackInfo): void;
        handleChangeDifficulty(packet: $ServerboundChangeDifficultyPacket): void;
        handleLockDifficulty(packet: $ServerboundLockDifficultyPacket): void;
        handleChatSessionUpdate(packet: $ServerboundChatSessionUpdatePacket_): void;
        handleConfigurationAcknowledged(packet: $ServerboundConfigurationAcknowledgedPacket): void;
        handleChunkBatchReceived(packet: $ServerboundChunkBatchReceivedPacket_): void;
        handleDebugSampleSubscription(packet: $ServerboundDebugSampleSubscriptionPacket_): void;
        badpackets_handler(): $ServerPlayPacketHandler;
        sendBundled(...arg0: $CustomPacketPayload_[]): void;
        /**
         * Sends all given payloads as a bundle to the client.
         */
        sendBundled(payloads: $Iterable_<$CustomPacketPayload>): void;
        static LATENCY_CHECK_INTERVAL: number;
        server: $MinecraftServer;
        aboveGroundTickCount: number;
        static DISCONNECT_UNEXPECTED_QUERY: $Component;
        static LOGGER: $Logger;
        connection: $Connection;
        aboveGroundVehicleTickCount: number;
        chunkSender: $PlayerChunkSender;
        connectionType: $ConnectionType;
        player: $ServerPlayer;
        constructor(server: $MinecraftServer, connection: $Connection, player: $ServerPlayer, cookie: $CommonListenerCookie_);
        get remoteAddress(): $SocketAddress;
    }
    export class $ServerHandshakePacketListenerImpl implements $ServerHandshakePacketListener {
        onDisconnect(details: $DisconnectionDetails_): void;
        isAcceptingMessages(): boolean;
        /**
         * There are two recognized intentions for initiating a handshake: logging in and acquiring server status. The NetworkManager's protocol will be reconfigured according to the specified intention, although a login-intention must pass a versioncheck or receive a disconnect otherwise
         */
        handleIntention(packet: $ClientIntentionPacket_): void;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        flow(): $PacketFlow;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        fillCrashReport(crashReport: $CrashReport): void;
        constructor(server: $MinecraftServer, connection: $Connection);
        get acceptingMessages(): boolean;
    }
    export class $ConfigurationTask {
    }
    export interface $ConfigurationTask {
        type(): $ConfigurationTask$Type;
        start(task: $Consumer_<$Packet<never>>): void;
    }
    export class $TextFilterClient$JoinOrLeaveEncoder {
    }
    export interface $TextFilterClient$JoinOrLeaveEncoder {
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$JoinOrLeaveEncoder}.
     */
    export type $TextFilterClient$JoinOrLeaveEncoder_ = (() => void);
    export class $ServerConnectionListener$LatencySimulator$DelayedMessage {
    }
    export class $ServerLoginPacketListenerImpl$State extends $Enum<$ServerLoginPacketListenerImpl$State> {
    }
    /**
     * Values that may be interpreted as {@link $ServerLoginPacketListenerImpl$State}.
     */
    export type $ServerLoginPacketListenerImpl$State_ = "hello" | "key" | "authenticating" | "negotiating" | "verifying" | "waiting_for_dupe_disconnect" | "protocol_switching" | "accepted";
    export class $ServerConnectionListener implements $ServerConnectionListenerExtension {
        sable$setupUDPServer(arg0: $Channel): void;
        sable$getServer(): $SableUDPServer;
        /**
         * Adds a channel that listens on publicly accessible network ports
         */
        startTcpServerListener(address: $InetAddress | null, port: number): void;
        /**
         * Shuts down all open endpoints (with immediate effect?)
         */
        tick(): void;
        /**
         * Shuts down all open endpoints (with immediate effect?)
         */
        stop(): void;
        /**
         * Adds a channel that listens locally
         */
        startMemoryChannel(): $SocketAddress;
        getServer(): $MinecraftServer;
        getConnections(): $List<$Connection>;
        running: boolean;
        server: $MinecraftServer;
        static SERVER_EVENT_GROUP: $Supplier<$NioEventLoopGroup>;
        static SERVER_EPOLL_EVENT_GROUP: $Supplier<$EpollEventLoopGroup>;
        connections: $List<$Connection>;
        constructor(server: $MinecraftServer);
    }
    export class $LegacyQueryHandler extends $ChannelInboundHandlerAdapter {
        constructor(server: $ServerInfo);
    }
    export class $ServerConnectionListener$LatencySimulator extends $ChannelInboundHandlerAdapter {
    }
    export class $ServerConfigurationPacketListenerImpl extends $ServerCommonPacketListenerImpl implements $ServerConfigurationPacketListener, $TickablePacketListener, $NeoListenableNetworkHandler, $FabricServerConfigurationNetworkHandler, $ServerConfigPacketHandler$TaskFinisher, $PacketHandlerHolder<any> {
        finishCurrentTask(taskType: $ConfigurationTask$Type_): void;
        handleSelectKnownPacks(packet: $ServerboundSelectKnownPacks_): void;
        handleConfigurationFinished(packet: $ServerboundFinishConfigurationPacket): void;
        addTask(arg0: $ConfigurationTask): void;
        tick(): void;
        handler$cgc000$glitchcore$onStartConfiguration(arg0: $CallbackInfo): void;
        handler$eof000$pandalib$onServerConfigurationConnectionEvent(ci: $CallbackInfo): void;
        modify$fnc000$fabric_resource_loader_v0$filterKnownPacks(arg0: $List_<any>): $List<any>;
        returnToWorld(): void;
        startConfiguration(): void;
        completeTask(taskType: $ConfigurationTask$Type_): void;
        badpackets_finishTask(taskType: $ConfigurationTask$Type_): void;
        handleDisconnect(): void;
        badpackets_handler(): $ServerConfigPacketHandler;
        static LATENCY_CHECK_INTERVAL: number;
        server: $MinecraftServer;
        static DISCONNECT_UNEXPECTED_QUERY: $Component;
        connection: $Connection;
        connectionType: $ConnectionType;
        constructor(server: $MinecraftServer, connection: $Connection, cookie: $CommonListenerCookie_);
    }
    export class $CommonListenerCookie extends $Record {
        clientInformation(): $ClientInformation;
        connectionType(): $ConnectionType;
        static createInitial(gameProfile: $GameProfile, transferred: boolean): $CommonListenerCookie;
        transferred(): boolean;
        latency(): number;
        gameProfile(): $GameProfile;
        /**
         * @deprecated
         */
        constructor(arg0: $GameProfile, arg1: number, arg2: $ClientInformation_, arg3: boolean);
        constructor(gameProfile: $GameProfile, latency: number, clientInformation: $ClientInformation_, transferred: boolean, connectionType: $ConnectionType_);
    }
    /**
     * Values that may be interpreted as {@link $CommonListenerCookie}.
     */
    export type $CommonListenerCookie_ = { gameProfile?: $GameProfile, connectionType?: $ConnectionType_, clientInformation?: $ClientInformation_, latency?: number, transferred?: boolean,  } | [gameProfile?: $GameProfile, connectionType?: $ConnectionType_, clientInformation?: $ClientInformation_, latency?: number, transferred?: boolean, ];
    export class $ServerGamePacketListenerImpl$EntityInteraction {
    }
    export interface $ServerGamePacketListenerImpl$EntityInteraction {
    }
    /**
     * Values that may be interpreted as {@link $ServerGamePacketListenerImpl$EntityInteraction}.
     */
    export type $ServerGamePacketListenerImpl$EntityInteraction_ = (() => void);
    export class $TextFilterClient$IgnoreStrategy {
        static ignoreOverThreshold(threshold: number): $TextFilterClient$IgnoreStrategy;
        static select(threshold: number): $TextFilterClient$IgnoreStrategy;
        static NEVER_IGNORE: $TextFilterClient$IgnoreStrategy;
        static IGNORE_FULLY_FILTERED: $TextFilterClient$IgnoreStrategy;
    }
    export interface $TextFilterClient$IgnoreStrategy {
        shouldIgnore(text: string, threshold: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$IgnoreStrategy}.
     */
    export type $TextFilterClient$IgnoreStrategy_ = ((arg0: string, arg1: number) => boolean);
    export class $Filterable<T> extends $Record {
        static streamCodec<B extends $ByteBuf, T>(codec: $StreamCodec_<B, T>): $StreamCodec<B, $Filterable<T>>;
        static passThrough<T>(value: T): $Filterable<T>;
        get(filtered: boolean): T;
        map<U>(mappingFunction: $Function_<T, U>): $Filterable<U>;
        static from(filteredText: $FilteredText_): $Filterable<string>;
        resolve<U>(resolver: $Function_<T, (U) | undefined>): ($Filterable<U>) | undefined;
        raw(): T;
        filtered(): (T) | undefined;
        static codec<T>(codec: $Codec<T>): $Codec<$Filterable<T>>;
        constructor(arg0: T, arg1: (T) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $Filterable}.
     */
    export type $Filterable_<T> = { filtered?: (T) | undefined, raw?: any,  } | [filtered?: (T) | undefined, raw?: any, ];
    export class $TextFilter {
        static DUMMY: $TextFilter;
    }
    export interface $TextFilter {
        processStreamMessage(text: string): $CompletableFuture<$FilteredText>;
        join(): void;
        processMessageBundle(texts: $List_<string>): $CompletableFuture<$List<$FilteredText>>;
        leave(): void;
    }
    export class $TextFilterClient$RequestFailedException extends $RuntimeException {
        constructor(message: string);
    }
    export class $TextFilterClient$PlayerContext implements $TextFilter {
    }
    export class $LegacyProtocolUtils {
        static writeLegacyString(buffer: $ByteBuf, string: string): void;
        static readLegacyString(buffer: $ByteBuf): string;
        static GET_INFO_PACKET_VERSION_1: number;
        static GET_INFO_PACKET_ID: number;
        static CUSTOM_PAYLOAD_PACKET_ID: number;
        static FAKE_PROTOCOL_VERSION: number;
        static CUSTOM_PAYLOAD_PACKET_PING_CHANNEL: string;
        static DISCONNECT_PACKET_ID: number;
        constructor();
    }
    export class $ServerStatusPacketListenerImpl implements $ServerStatusPacketListener {
        onDisconnect(details: $DisconnectionDetails_): void;
        isAcceptingMessages(): boolean;
        handleStatusRequest(packet: $ServerboundStatusRequestPacket): void;
        handlePingRequest(packet: $ServerboundPingRequestPacket): void;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        flow(): $PacketFlow;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        fillCrashReport(crashReport: $CrashReport): void;
        constructor(status: $ServerStatus_, connection: $Connection);
        constructor(arg0: $ServerStatus_, arg1: $Connection, arg2: string);
        get acceptingMessages(): boolean;
    }
    export class $ConfigurationTask$Type extends $Record {
        id(): string;
        constructor(arg0: $ResourceLocation_);
        constructor(id: string);
    }
    /**
     * Values that may be interpreted as {@link $ConfigurationTask$Type}.
     */
    export type $ConfigurationTask$Type_ = { id?: string,  } | [id?: string, ];
    export class $PlayerChunkSender {
        static sendChunk(packetListener: $ServerGamePacketListenerImpl, level: $ServerLevel, chunk: $LevelChunk): void;
        isPending(chunkPos: number): boolean;
        markChunkPendingToSend(chunk: $LevelChunk): void;
        dropChunk(player: $ServerPlayer, chunkPos: $ChunkPos): void;
        sendNextChunks(player: $ServerPlayer): void;
        onChunkBatchReceivedByClient(desiredBatchSize: number): void;
        static MIN_CHUNKS_PER_TICK: number;
        static MAX_CHUNKS_PER_TICK: number;
        constructor(memoryConnection: boolean);
    }
    export class $ServerCommonPacketListenerImpl implements $ServerCommonPacketListener, $ServerCommonNetworkHandlerAccessor, $ServerCommonNetworkHandlerAccessor$1 {
        /**
         * @return the connection type of this packet listener
         */
        getConnectionType(): $ConnectionType;
        onDisconnect(disconnectionDetails: $DisconnectionDetails_): void;
        getOwner(): $GameProfile;
        disconnect(reason: $Component_): void;
        disconnect(disconnectionDetails: $DisconnectionDetails_): void;
        send(packet: $Packet<never>): void;
        send(packet: $Packet<never>, listener: $PacketSendListener | null): void;
        latency(): number;
        resumeFlushing(): void;
        isSingleplayerOwner(): boolean;
        suspendFlushing(): void;
        /**
         * @return the main thread event loop
         */
        getMainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
        keepConnectionAlive(): void;
        playerProfile(): $GameProfile;
        createCookie(arg0: $ClientInformation_, arg1: $ConnectionType_): $CommonListenerCookie;
        /**
         * @deprecated
         */
        createCookie(clientInformation: $ClientInformation_): $CommonListenerCookie;
        handleCustomPayload(packet: $ServerboundCustomPayloadPacket_): void;
        wrapOperation$fdl000$fabric_networking_api_v1$onCustomPayloadUnregisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        wrapOperation$fdl000$fabric_networking_api_v1$onCustomPayloadRegisterPacket(arg0: $Connection, arg1: $Set_<any>, arg2: $Operation_<any>): void;
        handleKeepAlive(packet: $ServerboundKeepAlivePacket): void;
        handlePong(packet: $ServerboundPongPacket): void;
        handleResourcePackResponse(packet: $ServerboundResourcePackPacket_): void;
        handleCookieResponse(packet: $ServerboundCookieResponsePacket_): void;
        badpackets_onPong(arg0: number): void;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        /**
         * {@inheritDoc}
         */
        send(payload: $CustomPacketPayload_): void;
        /**
         * Sends a payload to the client of this listener.
         */
        send(payload: $CustomPacketPayload_, listener: $PacketSendListener): void;
        flow(): $PacketFlow;
        hasChannel(payload: $CustomPacketPayload_): boolean;
        hasChannel(type: $CustomPacketPayload$Type_<never>): boolean;
        /**
         * Checks if the connection has negotiated and opened a channel for the payload.
         */
        hasChannel(payloadId: $ResourceLocation_): boolean;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        fillCrashReport(crashReport: $CrashReport): void;
        /**
         * @return the connection this listener is attached to
         */
        getConnection(): $Connection;
        getServer(): $MinecraftServer;
        /**
         * @return the connection this listener is attached to
         */
        owo$getConnection(): $Connection;
        owo$server(): $MinecraftServer;
        static LATENCY_CHECK_INTERVAL: number;
        server: $MinecraftServer;
        static DISCONNECT_UNEXPECTED_QUERY: $Component;
        connection: $Connection;
        connectionType: $ConnectionType;
        constructor(server: $MinecraftServer, connection: $Connection, cookie: $CommonListenerCookie_);
        get owner(): $GameProfile;
        get singleplayerOwner(): boolean;
        get mainThreadEventLoop(): $ReentrantBlockableEventLoop<never>;
    }
    export class $FilteredText extends $Record {
        filteredOrEmpty(): string;
        static passThrough(raw: string): $FilteredText;
        static fullyFiltered(raw: string): $FilteredText;
        mask(): $FilterMask;
        raw(): string;
        isFiltered(): boolean;
        filtered(): string;
        static EMPTY: $FilteredText;
        constructor(arg0: string, arg1: $FilterMask);
    }
    /**
     * Values that may be interpreted as {@link $FilteredText}.
     */
    export type $FilteredText_ = { mask?: $FilterMask, raw?: string,  } | [mask?: $FilterMask, raw?: string, ];
    export class $TextFilterClient implements $AutoCloseable {
        processJoinOrLeave(profile: $GameProfile, url: $URL, encoder: $TextFilterClient$JoinOrLeaveEncoder_, executor: $Executor_): void;
        requestMessageProcessing(profile: $GameProfile, text: string, ignoreStrategy: $TextFilterClient$IgnoreStrategy_, executor: $Executor_): $CompletableFuture<$FilteredText>;
        static createFromConfig(config: string): $TextFilterClient;
        close(): void;
        createContext(profile: $GameProfile): $TextFilter;
        joinEncoder: $TextFilterClient$JoinOrLeaveEncoder;
        leaveEncoder: $TextFilterClient$JoinOrLeaveEncoder;
        leaveEndpoint: $URL;
        workerPool: $ExecutorService;
        chatIgnoreStrategy: $TextFilterClient$IgnoreStrategy;
        joinEndpoint: $URL;
    }
    export class $ServerLoginPacketListenerImpl implements $ServerLoginPacketListener, $TickablePacketListener, $NetworkHandlerExtensions, $PacketCallbackListener, $ServerLoginNetworkHandlerAccessor {
        handleKey(packet: $ServerboundKeyPacket): void;
        handleLoginAcknowledgement(packet: $ServerboundLoginAcknowledgedPacket): void;
        handleCustomQueryPacket(packet: $ServerboundCustomQueryAnswerPacket_): void;
        sent(arg0: $Packet<any>): void;
        onDisconnect(details: $DisconnectionDetails_): void;
        isAcceptingMessages(): boolean;
        getAddon(): $ServerLoginNetworkAddon;
        tick(): void;
        startClientVerification(profile: $GameProfile): void;
        disconnect(reason: $Component_): void;
        getUserName(): string;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        handleHello(packet: $ServerboundHelloPacket_): void;
        handleCookieResponse(packet: $ServerboundCookieResponsePacket_): void;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        fillCrashReport(crashReport: $CrashReport): void;
        getConnection(): $Connection;
        getServer(): $MinecraftServer;
        server: $MinecraftServer;
        requestedUsername: string;
        static LOGGER: $Logger;
        connection: $Connection;
        constructor(server: $MinecraftServer, connection: $Connection, transferred: boolean);
        get acceptingMessages(): boolean;
        get addon(): $ServerLoginNetworkAddon;
        get userName(): string;
    }
    export class $TextFilterClient$MessageEncoder {
    }
    export interface $TextFilterClient$MessageEncoder {
    }
    /**
     * Values that may be interpreted as {@link $TextFilterClient$MessageEncoder}.
     */
    export type $TextFilterClient$MessageEncoder_ = (() => void);
    export class $ServerPlayerConnection {
    }
    export interface $ServerPlayerConnection {
        getPlayer(): $ServerPlayer;
        send(packet: $Packet<never>): void;
        get player(): $ServerPlayer;
    }
    export class $MemoryServerHandshakePacketListenerImpl implements $ServerHandshakePacketListener {
        onDisconnect(details: $DisconnectionDetails_): void;
        isAcceptingMessages(): boolean;
        /**
         * There are two recognized intentions for initiating a handshake: logging in and acquiring server status. The NetworkManager's protocol will be reconfigured according to the specified intention, although a login-intention must pass a versioncheck or receive a disconnect otherwise
         */
        handleIntention(packet: $ClientIntentionPacket_): void;
        protocol(): $ConnectionProtocol;
        onPacketError(packet: $Packet<any>, exception: $Exception): void;
        flow(): $PacketFlow;
        createDisconnectionInfo(reason: $Component_, error: $Throwable): $DisconnectionDetails;
        shouldHandleMessage(packet: $Packet<never>): boolean;
        fillListenerSpecificCrashDetails(crashReport: $CrashReport, category: $CrashReportCategory): void;
        fillCrashReport(crashReport: $CrashReport): void;
        constructor(server: $MinecraftServer, connection: $Connection);
        get acceptingMessages(): boolean;
    }
}
