import { $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $Supplier_, $Function_, $Function, $BiConsumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $BooleanConfigOption } from "@package/xaero/lib/common/config/option";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $PushboxHandler$State } from "@package/xaero/hud/pushbox";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $HudMod } from "@package/xaero/common";
import { $ClientConfigManager } from "@package/xaero/lib/client/config";
import { $Iterable } from "@package/java/lang";
import { $IModuleRenderer } from "@package/xaero/hud/render/module";
import { $TriFunction_ } from "@package/org/apache/commons/lang3/function";

declare module "@package/xaero/hud/module" {
    export class $ModuleSession<MS extends $ModuleSession<MS>> {
        onPostGameOverlay(): void;
        shouldFlipVertically(arg0: number, arg1: number): boolean;
        shouldFlipHorizontally(arg0: number, arg1: number): boolean;
        prePotentialRender(): void;
        isFlippedHor(): boolean;
        getEffectiveX(arg0: number, arg1: number): number;
        isCentered(): boolean;
        isFlippedVer(): boolean;
        getEffectiveY(arg0: number, arg1: number): number;
        getModMain(): $HudMod;
        getWidth(arg0: number): number;
        getHeight(arg0: number): number;
        getModule(): $HudModule<MS>;
        close(): void;
        isActive(): boolean;
        constructor(arg0: $HudMod, arg1: $HudModule<MS>);
        get flippedHor(): boolean;
        get centered(): boolean;
        get flippedVer(): boolean;
        get modMain(): $HudMod;
        get module(): $HudModule<MS>;
        get active(): boolean;
    }
    export class $ModuleManager {
        getModules(): $Iterable<$HudModule<never>>;
        get(arg0: $ResourceLocation_): $HudModule<never>;
        register(arg0: $HudModule<never>): void;
        constructor();
        get modules(): $Iterable<$HudModule<never>>;
    }
    export class $ModuleSessionHandler {
        resetSessions(arg0: $HudMod, arg1: $ClientPacketListener, arg2: $BiConsumer_<$HudModule<never>, $ModuleSession<never>>): void;
        closeSessions(arg0: $HudMod): void;
        constructor(arg0: $ModuleManager);
    }
    export class $ModuleTransform {
        copy(): $ModuleTransform;
        fromRight: boolean;
        fromOldSystem: boolean;
        centered: boolean;
        flippedVer: boolean;
        x: number;
        y: number;
        flippedHor: boolean;
        fromBottom: boolean;
        constructor();
    }
    export class $HudModule<MS extends $ModuleSession<MS>> {
        getUsedTransform(): $ModuleTransform;
        getPushState(): $PushboxHandler$State;
        getConfirmedTransform(): $ModuleTransform;
        getCurrentSession(): MS;
        getUnconfirmedTransform(): $ModuleTransform;
        cancelTransform(): void;
        confirmTransform(): void;
        getConfigScreenFactory(): $Function<$Screen, $Screen>;
        getRenderer(): $IModuleRenderer<MS>;
        setTransform(arg0: $ModuleTransform): void;
        getDisplayName(): $Component;
        getId(): $ResourceLocation;
        isActive(arg0: $ClientConfigManager): boolean;
        setActive(arg0: $ClientConfigManager, arg1: boolean): void;
        constructor(arg0: $ResourceLocation_, arg1: $Component_, arg2: $TriFunction_<$HudMod, $HudModule<MS>, $ClientPacketListener, MS>, arg3: $Supplier_<$IModuleRenderer<MS>>, arg4: $Function_<$Screen, $Screen>, arg5: $BooleanConfigOption);
        get usedTransform(): $ModuleTransform;
        get pushState(): $PushboxHandler$State;
        get confirmedTransform(): $ModuleTransform;
        get currentSession(): MS;
        get unconfirmedTransform(): $ModuleTransform;
        get configScreenFactory(): $Function<$Screen, $Screen>;
        get renderer(): $IModuleRenderer<MS>;
        set transform(value: $ModuleTransform);
        get displayName(): $Component;
        get id(): $ResourceLocation;
    }
}
