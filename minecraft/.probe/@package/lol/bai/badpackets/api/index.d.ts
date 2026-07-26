import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $PacketSendListener, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $CustomPacketPayload$Type_, $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $ServerPlayContext, $ClientPlayContext } from "@package/lol/bai/badpackets/api/play";
export * as config from "@package/lol/bai/badpackets/api/config";
export * as play from "@package/lol/bai/badpackets/api/play";

declare module "@package/lol/bai/badpackets/api" {
    export class $PacketSender {
        static c2s(): $ClientPlayContext;
        static s2c(arg0: $ServerPlayer): $ServerPlayContext;
    }
    export interface $PacketSender {
        send(arg0: $ResourceLocation_, arg1: $FriendlyByteBuf): void;
        send(arg0: $CustomPacketPayload_, arg1: $PacketSendListener): void;
        send(arg0: $ResourceLocation_, arg1: $FriendlyByteBuf, arg2: $PacketSendListener): void;
        send(arg0: $CustomPacketPayload_): void;
        canSend(arg0: $CustomPacketPayload$Type_<never>): boolean;
        canSend(arg0: $ResourceLocation_): boolean;
    }
}
