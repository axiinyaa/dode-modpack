import { $Level } from "@package/net/minecraft/world/level";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $MinimapWorldContainer, $MinimapWorldRootContainer } from "@package/xaero/hud/minimap/world/container";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $HudMod } from "@package/xaero/common";
import { $HashMap } from "@package/java/util";
import { $WaypointSet } from "@package/xaero/hud/minimap/waypoint/set";
import { $Path_ } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $Waypoint } from "@package/xaero/common/minimap/waypoints";
import { $Iterable } from "@package/java/lang";
import { $RootConfig } from "@package/xaero/hud/minimap/world/container/config";
export * as connection from "@package/xaero/hud/minimap/world/connection";
export * as io from "@package/xaero/hud/minimap/world/io";
export * as container from "@package/xaero/hud/minimap/world/container";
export * as state from "@package/xaero/hud/minimap/world/state";

declare module "@package/xaero/hud/minimap/world" {
    export class $MinimapDimensionHelper {
        getDimensionDirectoryName(arg0: $ResourceKey_<$Level>): string;
        findDimensionKeyForOldName(arg0: $LocalPlayer, arg1: string): $ResourceKey<$Level>;
        getDimensionKeyForDirectoryName(arg0: string): $ResourceKey<$Level>;
        getDimensionDivision(arg0: $MinimapWorld): number;
        getDimCoordinateScale(arg0: $MinimapWorld): number;
        constructor();
    }
    export class $MinimapWorldManager {
        getAutoRootContainer(): $MinimapWorldRootContainer;
        /**
         * @deprecated
         */
        getRootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
        getWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getCustomWaypoints(arg0: $ResourceLocation_): $Int2ObjectMap<$Waypoint>;
        getCustomWaypoints(): $Iterable<$Waypoint>;
        addWorld(arg0: $XaeroPath): $MinimapWorld;
        addWorldContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getWorldContainerNullable(arg0: $XaeroPath): $MinimapWorldContainer;
        containerExists(arg0: $XaeroPath): boolean;
        getCurrentWorld(arg0: $XaeroPath): $MinimapWorld;
        getCurrentWorld(): $MinimapWorld;
        getRootWorldContainer(arg0: string): $MinimapWorldRootContainer;
        getRootWorldContainer(arg0: $XaeroPath): $MinimapWorldRootContainer;
        addRootWorldContainer(arg0: $MinimapWorldRootContainer): void;
        getRootContainers(): $Iterable<$MinimapWorldRootContainer>;
        getCurrentRootContainer(): $MinimapWorldRootContainer;
        hasCustomWaypoints(): boolean;
        getWorld(arg0: $XaeroPath): $MinimapWorld;
        removeContainer(arg0: $XaeroPath): boolean;
        getAutoWorld(): $MinimapWorld;
        constructor(arg0: $HudMod, arg1: $MinimapSession);
        get autoRootContainer(): $MinimapWorldRootContainer;
        get rootContainersDirect(): $HashMap<string, $MinimapWorldRootContainer>;
        get rootContainers(): $Iterable<$MinimapWorldRootContainer>;
        get currentRootContainer(): $MinimapWorldRootContainer;
        get autoWorld(): $MinimapWorld;
    }
    export class $MinimapWorld {
        addWaypointSet(arg0: $WaypointSet): $WaypointSet;
        addWaypointSet(arg0: string): void;
        requestRemovalOnSave(arg0: string): void;
        cleanupOnSave(arg0: $Path_): void;
        getLocalWorldKey(): $XaeroPath;
        removeWaypointSet(arg0: string): $WaypointSet;
        hasSomethingToRemoveOnSave(): boolean;
        setDimId(arg0: $ResourceKey_<$Level>): void;
        getSetCount(): number;
        getIterableWaypointSets(): $Iterable<$WaypointSet>;
        getCurrentWaypointSetId(): string;
        setCurrentWaypointSetId(arg0: string): void;
        getSlimeChunkSeed(): number;
        setSlimeChunkSeed(arg0: number): void;
        getCurrentWaypointSet(): $WaypointSet;
        getRootConfig(): $RootConfig;
        getWaypointSet(arg0: string): $WaypointSet;
        getDimId(): $ResourceKey<$Level>;
        setContainer(arg0: $MinimapWorldContainer): void;
        getContainer(): $MinimapWorldContainer;
        setNode(arg0: string): void;
        getNode(): string;
        getFullPath(): $XaeroPath;
        static DEFAULT_SET: string;
        get localWorldKey(): $XaeroPath;
        get setCount(): number;
        get iterableWaypointSets(): $Iterable<$WaypointSet>;
        get currentWaypointSet(): $WaypointSet;
        get rootConfig(): $RootConfig;
        get fullPath(): $XaeroPath;
    }
}
