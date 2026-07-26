import { $Connection } from "@package/net/minecraft/network";

declare module "@package/lol/bai/badpackets/impl/mixin/client" {
    export class $AccessClientCommonPacketListenerImpl {
    }
    export interface $AccessClientCommonPacketListenerImpl {
        badpackets_connection(): $Connection;
    }
    /**
     * Values that may be interpreted as {@link $AccessClientCommonPacketListenerImpl}.
     */
    export type $AccessClientCommonPacketListenerImpl_ = (() => $Connection);
}
