import { $ClientConfigurationPacketListenerImpl } from "@package/net/minecraft/client/multiplayer";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PacketSender } from "@package/lol/bai/badpackets/api";
import { $ServerConfigurationPacketListenerImpl } from "@package/net/minecraft/server/network";
import { $Minecraft } from "@package/net/minecraft/client";

declare module "@package/lol/bai/badpackets/api/config" {
    export class $ConfigTaskExecutor {
    }
    export interface $ConfigTaskExecutor {
        runTask(arg0: $ServerConfigContext): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ConfigTaskExecutor}.
     */
    export type $ConfigTaskExecutor_ = ((arg0: $ServerConfigContext) => boolean);
    export class $ServerConfigContext {
    }
    export interface $ServerConfigContext extends $PacketSender {
        finishTask(arg0: $ResourceLocation_): void;
        handler(): $ServerConfigurationPacketListenerImpl;
        server(): $MinecraftServer;
    }
    export class $ClientConfigContext {
    }
    export interface $ClientConfigContext extends $PacketSender {
        handler(): $ClientConfigurationPacketListenerImpl;
        client(): $Minecraft;
        disconnect(arg0: $Component_): void;
    }
}
