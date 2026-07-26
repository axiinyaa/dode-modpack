import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";

declare module "@package/xaero/hud/minimap/waypoint/thirdparty" {
    export class $ThirdPartyWaypointManager {
        clearOrigin(arg0: $ResourceLocation_): void;
        getOriginCount(): number;
        getAll(): $List<$ThirdPartyWaypoints>;
        get(arg0: $ResourceLocation_): $ThirdPartyWaypoints;
        clear(): void;
        getCount(): number;
        getByIndex(arg0: number): $ThirdPartyWaypoints;
        constructor(arg0: $MinimapSession);
        get originCount(): number;
        get all(): $List<$ThirdPartyWaypoints>;
        get count(): number;
    }
}
