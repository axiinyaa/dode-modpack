import { $Level_, $ClipContext$Fluid_ } from "@package/net/minecraft/world/level";
import { $BlockPlaceContext } from "@package/net/minecraft/world/item/context";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/mod/crend/dynamiccrosshair/mixin" {
    export class $BlockItemAccessor {
    }
    export interface $BlockItemAccessor {
        invokeCanPlace(arg0: $BlockPlaceContext, arg1: $BlockState_): boolean;
        invokeGetPlacementState(arg0: $BlockPlaceContext): $BlockState;
    }
    export class $ItemAccessor {
        static invokeRaycast(world: $Level_, player: $Player, fluidHandling: $ClipContext$Fluid_): $BlockHitResult;
    }
    export interface $ItemAccessor {
    }
}
