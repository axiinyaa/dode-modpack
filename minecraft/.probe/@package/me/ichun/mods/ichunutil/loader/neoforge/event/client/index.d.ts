import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Overlay } from "@package/net/minecraft/client/gui/screens";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";

declare module "@package/me/ichun/mods/ichunutil/loader/neoforge/event/client" {
    export class $ClientSystemChatEvent extends $Event implements $ICancellableEvent {
        isOverlay(): boolean;
        getComponent(): $Component;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Component_, arg1: boolean);
        get overlay(): boolean;
        get component(): $Component;
    }
    export class $OverlayChangeEvent extends $Event {
        getCurrentOverlay(): $Overlay;
        getNewOverlay(): $Overlay;
        constructor(arg0: $Overlay, arg1: $Overlay);
        get currentOverlay(): $Overlay;
        get newOverlay(): $Overlay;
    }
}
