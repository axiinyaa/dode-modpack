import { $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $IBlockExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockItem, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $HitResult } from "@package/net/minecraft/world/phys";

declare module "@package/snownee/kiwi/block" {
    export class $IKiwiBlock {
    }
    export interface $IKiwiBlock extends $IBlockExtension {
        createItem(arg0: $Item$Properties): $BlockItem;
        getName(arg0: $ItemStack_): $MutableComponent;
        getCloneItemStack(arg0: $BlockState_, arg1: $HitResult, arg2: $LevelReader, arg3: $BlockPos_, arg4: $Player): $ItemStack;
        getCloneItemStack(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Player, arg4: $HitResult): $ItemStack;
    }
}
