import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $WoodType_, $WoodType } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockState, $BlockState_, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SoundType } from "@package/net/minecraft/world/level/block";

declare module "@package/snownee/snow/mixin" {
    export class $FenceGateBlockAccess {
    }
    export interface $FenceGateBlockAccess {
        setType(arg0: $WoodType_): void;
        getType(): $WoodType;
    }
    export class $IceBlockAccess {
    }
    export interface $IceBlockAccess {
        callMelt(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $IceBlockAccess}.
     */
    export type $IceBlockAccess_ = ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos) => void);
    export class $BlockAccess {
    }
    export interface $BlockAccess {
        callSpawnDestroyParticles(arg0: $Level_, arg1: $Player, arg2: $BlockPos_, arg3: $BlockState_): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockAccess}.
     */
    export type $BlockAccess_ = ((arg0: $Level, arg1: $Player, arg2: $BlockPos, arg3: $BlockState) => void);
    export class $BlockBehaviourAccess {
    }
    export interface $BlockBehaviourAccess {
        callEntityInside(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Entity): void;
        callGetSoundType(arg0: $BlockState_): $SoundType;
        getProperties(): $BlockBehaviour$Properties;
        get properties(): $BlockBehaviour$Properties;
    }
}
