import { $BlockAndTintGetter, $Level_, $BlockGetter, $LevelReader } from "@package/net/minecraft/world/level";
import { $IntegerProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IKiwiBlock } from "@package/snownee/kiwi/block";
import { $SoundType } from "@package/net/minecraft/world/level/block";
import { $HitResult } from "@package/net/minecraft/world/phys";

declare module "@package/snownee/snow/block" {
    export class $SnowVariant {
        static OPTIONAL_LAYERS: $IntegerProperty;
    }
    export interface $SnowVariant extends $IKiwiBlock {
        srm$layers(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): number;
        srm$getSnowState(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $BlockState;
        srm$decreaseLayer(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: boolean): $BlockState;
        srm$maxLayers(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        srm$canRenderDecoration(arg0: $BlockState_): boolean;
        srm$renderDecorationOffset(arg0: $BlockState_): number;
        srm$canRenderOverlay(arg0: $BlockState_): boolean;
        srm$renderLayerOffset(arg0: $BlockState_): number;
        getCloneItemStack(arg0: $BlockState_, arg1: $HitResult, arg2: $LevelReader, arg3: $BlockPos_, arg4: $Player): $ItemStack;
        getSoundType(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity): $SoundType;
        onDestroyedByPlayer(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: boolean, arg5: $FluidState): boolean;
        getAppearance(arg0: $BlockState_, arg1: $BlockAndTintGetter, arg2: $BlockPos_, arg3: $Direction_, arg4: $BlockState_, arg5: $BlockPos_): $BlockState;
        srm$getRaw(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $BlockState;
    }
}
