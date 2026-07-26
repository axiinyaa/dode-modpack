import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $PacketSender } from "@package/lol/bai/badpackets/api";
import { $ServerGamePacketListenerImpl } from "@package/net/minecraft/server/network";
import { $Minecraft } from "@package/net/minecraft/client";

declare module "@package/lol/bai/badpackets/api/play" {
    export class $ClientPlayContext {
    }
    export interface $ClientPlayContext extends $PacketSender {
        handler(): $ClientPacketListener;
        client(): $Minecraft;
    }
    export class $ServerPlayContext {
    }
    export interface $ServerPlayContext extends $PacketSender {
        handler(): $ServerGamePacketListenerImpl;
        server(): $MinecraftServer;
        player(): $ServerPlayer;
    }
}
