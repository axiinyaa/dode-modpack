import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Map } from "@package/java/util";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $ItemPropertyFunction } from "@package/net/minecraft/client/renderer/item";

declare module "@package/io/github/bonsaistudi0s/crittersandcompanions/common/mixin" {
    export class $WallClimberNavigationAccessor {
    }
    export interface $WallClimberNavigationAccessor {
        setPathToPosition(arg0: $BlockPos_): void;
        set pathToPosition(value: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $WallClimberNavigationAccessor}.
     */
    export type $WallClimberNavigationAccessor_ = ((arg0: $BlockPos) => void);
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        invokeGetLeashOffset(): $Vec3;
    }
    /**
     * Values that may be interpreted as {@link $EntityAccessor}.
     */
    export type $EntityAccessor_ = (() => $Vec3_);
    export class $ItemPropertiesAccessor {
        static getPROPERTIES(): $Map<$Item, $Map<$ResourceLocation, $ItemPropertyFunction>>;
        static get PROPERTIES(): $Map<$Item, $Map<$ResourceLocation, $ItemPropertyFunction>>;
    }
    export interface $ItemPropertiesAccessor {
    }
}
