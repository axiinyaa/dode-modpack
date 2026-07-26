import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $VoicechatSocket, $Group$Type } from "@package/de/maxhenkel/voicechat/api";
import { $SocketAddress } from "@package/java/net";
import { $Packet, $Secret, $NetworkMessage, $MicPacket, $PingPacket, $SoundPacket, $ClientGroup, $PlayerState } from "@package/de/maxhenkel/voicechat/voice/common";
import { $Thread } from "@package/java/lang";
import { $UUID, $Map, $UUID_, $Collection_, $Collection } from "@package/java/util";
import { $CategoryManager } from "@package/de/maxhenkel/voicechat/plugins";

declare module "@package/de/maxhenkel/voicechat/voice/server" {
    export class $PingManager$PingListener {
    }
    export interface $PingManager$PingListener {
        onFailedAttempt(arg0: number): void;
        onTimeout(arg0: number): void;
        onPong(arg0: number, arg1: number): void;
    }
    export class $Server extends $Thread {
        sendSoundPacket(arg0: $ServerPlayer | null, arg1: $PlayerState | null, arg2: $ServerPlayer, arg3: $PlayerState, arg4: $ClientConnection | null, arg5: $SoundPacket<never>, arg6: string): void;
        getCategoryManager(): $ServerCategoryManager;
        generateNewSecret(arg0: $UUID_): $Secret;
        onPlayerVoicechatConnect(arg0: $ServerPlayer): void;
        onPlayerVoicechatDisconnect(arg0: $UUID_): void;
        getGroupManager(): $ServerGroupManager;
        onMicPacket(arg0: $UUID_, arg1: $MicPacket): void;
        getPingManager(): $PingManager;
        changePort(arg0: number): void;
        onPlayerLoggedIn(arg0: $ServerPlayer): void;
        sendPacket(arg0: $Packet<never>, arg1: $ClientConnection): boolean;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        onPlayerHide(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerShow(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        getSecret(arg0: $UUID_): $Secret;
        getBroadcastRange(arg0: number): number;
        getPlayerStateManager(): $PlayerStateManager;
        disconnectClient(arg0: $UUID_): void;
        hasSecret(arg0: $UUID_): boolean;
        getUnconnectedSender(arg0: $NetworkMessage): $ClientConnection;
        sendPacketRaw(arg0: $Packet<never>, arg1: $ClientConnection): void;
        getConnection(arg0: $UUID_): $ClientConnection;
        getSocket(): $VoicechatSocket;
        close(): void;
        getPort(): number;
        isClosed(): boolean;
        getSender(arg0: $NetworkMessage): $ClientConnection;
        getServer(): $MinecraftServer;
        broadcast(arg0: $Collection_<$ServerPlayer>, arg1: $SoundPacket<never>, arg2: $ServerPlayer | null, arg3: $PlayerState | null, arg4: $UUID_ | null, arg5: string): void;
        getConnections(): $Map<$UUID, $ClientConnection>;
        static MIN_PRIORITY: number;
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(arg0: $MinecraftServer);
        get categoryManager(): $ServerCategoryManager;
        get groupManager(): $ServerGroupManager;
        get pingManager(): $PingManager;
        get playerStateManager(): $PlayerStateManager;
        get socket(): $VoicechatSocket;
        get port(): number;
        get closed(): boolean;
        get server(): $MinecraftServer;
        get connections(): $Map<$UUID, $ClientConnection>;
    }
    export class $PingManager {
        sendPing(arg0: $ClientConnection, arg1: number, arg2: number, arg3: $PingManager$PingListener): void;
        onPongPacket(arg0: $PingPacket): void;
        checkTimeouts(): void;
        constructor(arg0: $Server);
    }
    export class $PlayerStateManager {
        onPlayerVoicechatConnect(arg0: $ServerPlayer): void;
        onPlayerVoicechatDisconnect(arg0: $UUID_): void;
        onPlayerLoggedIn(arg0: $ServerPlayer): void;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        onPlayerHide(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerShow(arg0: $ServerPlayer, arg1: $ServerPlayer): void;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        static defaultDisconnectedState(arg0: $ServerPlayer): $PlayerState;
        broadcastState(arg0: $ServerPlayer | null, arg1: $PlayerState): void;
        broadcastRemoveState(arg0: $ServerPlayer): void;
        getState(arg0: $UUID_): $PlayerState;
        setGroup(arg0: $ServerPlayer, arg1: $UUID_ | null): void;
        getStates(): $Collection<$PlayerState>;
        constructor(arg0: $Server);
        get states(): $Collection<$PlayerState>;
    }
    export class $ClientConnection {
        getPlayerUUID(): $UUID;
        setLastKeepAliveResponse(arg0: number): void;
        getLastKeepAliveResponse(): number;
        getAddress(): $SocketAddress;
        send(arg0: $Server, arg1: $NetworkMessage): void;
        constructor(arg0: $UUID_, arg1: $SocketAddress);
        get playerUUID(): $UUID;
        get address(): $SocketAddress;
    }
    export class $ServerCategoryManager extends $CategoryManager {
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        constructor(arg0: $Server);
    }
    export class $ServerGroupManager {
        joinGroup(arg0: $Group | null, arg1: $ServerPlayer, arg2: string | null): void;
        leaveGroup(arg0: $ServerPlayer): void;
        onPlayerLoggedOut(arg0: $ServerPlayer): void;
        onPlayerCompatibilityCheckSucceeded(arg0: $ServerPlayer): void;
        removeGroup(arg0: $UUID_): boolean;
        addGroup(arg0: $Group, arg1: $ServerPlayer | null): void;
        cleanupGroups(): void;
        getPlayerGroup(arg0: $ServerPlayer): $Group;
        getGroup(arg0: $UUID_): $Group;
        getGroups(): $Map<$UUID, $Group>;
        constructor(arg0: $Server);
        get groups(): $Map<$UUID, $Group>;
    }
    export class $Group {
        toClientGroup(): $ClientGroup;
        isIsolated(): boolean;
        isNormal(): boolean;
        getName(): string;
        isHidden(): boolean;
        isOpen(): boolean;
        getId(): $UUID;
        getType(): $Group$Type;
        getPassword(): string;
        isPersistent(): boolean;
        constructor(arg0: $UUID_, arg1: string, arg2: string | null, arg3: boolean, arg4: boolean, arg5: $Group$Type);
        constructor(arg0: $UUID_, arg1: string, arg2: string | null);
        constructor(arg0: $UUID_, arg1: string);
        constructor();
        constructor(arg0: $UUID_, arg1: string, arg2: string | null, arg3: boolean);
        get isolated(): boolean;
        get normal(): boolean;
        get name(): string;
        get hidden(): boolean;
        get open(): boolean;
        get id(): $UUID;
        get type(): $Group$Type;
        get password(): string;
        get persistent(): boolean;
    }
}
