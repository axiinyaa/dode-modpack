import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $PacketSender } from "@package/lol/bai/badpackets/api";
import { $ServerGamePacketListenerImpl, $ConfigurationTask$Type, $ConfigurationTask$Type_, $ServerConfigurationPacketListenerImpl, $ConfigurationTask } from "@package/net/minecraft/server/network";
import { $CustomPacketPayload$Type_, $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $ServerPlayContext, $ClientPlayContext } from "@package/lol/bai/badpackets/api/play";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Map } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $ClientPacketListener, $ClientConfigurationPacketListenerImpl } from "@package/net/minecraft/client/multiplayer";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf, $PacketSendListener, $FriendlyByteBuf, $Connection } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $ServerConfigContext, $ClientConfigContext, $ConfigTaskExecutor_ } from "@package/lol/bai/badpackets/api/config";

declare module "@package/lol/bai/badpackets/impl/handler" {
    export class $PacketHandlerHolder<T extends $AbstractPacketHandler<never, never>> {
    }
    export interface $PacketHandlerHolder<T extends $AbstractPacketHandler<never, never>> {
        badpackets_handler(): T;
    }
    /**
     * Values that may be interpreted as {@link $PacketHandlerHolder}.
     */
    export type $PacketHandlerHolder_<T> = (() => T);
    export class $ClientPlayPacketHandler extends $AbstractPacketHandler<$ClientPlayContext, $RegistryFriendlyByteBuf> implements $ClientPlayContext {
        static get(): $ClientPlayPacketHandler;
        handler(): $ClientPacketListener;
        client(): $Minecraft;
        constructor(arg0: $Minecraft, arg1: $ClientPacketListener);
    }
    export class $ServerConfigPacketHandler$TaskFinisher {
    }
    export interface $ServerConfigPacketHandler$TaskFinisher {
        badpackets_finishTask(arg0: $ConfigurationTask$Type_): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerConfigPacketHandler$TaskFinisher}.
     */
    export type $ServerConfigPacketHandler$TaskFinisher_ = ((arg0: $ConfigurationTask$Type) => void);
    export class $ClientConfigPacketHandler extends $AbstractPacketHandler<$ClientConfigContext, $FriendlyByteBuf> implements $ClientConfigContext {
        handler(): $ClientConfigurationPacketListenerImpl;
        client(): $Minecraft;
        disconnect(arg0: $Component_): void;
        constructor(arg0: $Minecraft, arg1: $ClientConfigurationPacketListenerImpl, arg2: $Connection);
    }
    export class $AbstractPacketHandler<C, B extends $FriendlyByteBuf> implements $PacketSender {
        sendInitialChannelSyncPacket(): void;
        remove(): void;
        send(arg0: $CustomPacketPayload_, arg1: $PacketSendListener): void;
        receive(arg0: $CustomPacketPayload_): boolean;
        canSend(arg0: $ResourceLocation_): boolean;
        onRegister(arg0: $ResourceLocation_): void;
        send(arg0: $ResourceLocation_, arg1: $FriendlyByteBuf): void;
        send(arg0: $ResourceLocation_, arg1: $FriendlyByteBuf, arg2: $PacketSendListener): void;
        send(arg0: $CustomPacketPayload_): void;
        canSend(arg0: $CustomPacketPayload$Type_<never>): boolean;
    }
    export class $ServerPlayPacketHandler extends $AbstractPacketHandler<$ServerPlayContext, $RegistryFriendlyByteBuf> implements $ServerPlayContext {
        static get(arg0: $ServerPlayer): $ServerPlayPacketHandler;
        handler(): $ServerGamePacketListenerImpl;
        server(): $MinecraftServer;
        player(): $ServerPlayer;
        constructor(arg0: $MinecraftServer, arg1: $ServerGamePacketListenerImpl, arg2: $Connection);
    }
    export class $ServerConfigPacketHandler extends $AbstractPacketHandler<$ServerConfigContext, $FriendlyByteBuf> implements $ServerConfigContext {
        static registerTask(arg0: $ResourceLocation_, arg1: $ConfigTaskExecutor_): void;
        finishTask(arg0: $ResourceLocation_): void;
        createCallbackTask(): $ServerConfigPacketHandler$CallbackTask;
        handler(): $ServerConfigurationPacketListenerImpl;
        server(): $MinecraftServer;
        static CUSTOM_TASKS: $Map<$ResourceLocation, $ServerConfigPacketHandler$CustomTask>;
        constructor(arg0: $MinecraftServer, arg1: $ServerConfigurationPacketListenerImpl, arg2: $Connection);
    }
    export class $ServerConfigPacketHandler$CustomTask implements $ConfigurationTask {
        type(): $ConfigurationTask$Type;
        start(arg0: $Consumer_<$Packet<never>>): void;
        setHandler(arg0: $ServerConfigPacketHandler): void;
        constructor(arg0: $ResourceLocation_, arg1: $ConfigTaskExecutor_);
        set handler(value: $ServerConfigPacketHandler);
    }
    export class $ServerConfigPacketHandler$CallbackTask implements $ConfigurationTask {
        type(): $ConfigurationTask$Type;
        start(arg0: $Consumer_<$Packet<never>>): void;
        static TYPE: $ConfigurationTask$Type;
        constructor(arg0: $ServerConfigPacketHandler);
    }
}
