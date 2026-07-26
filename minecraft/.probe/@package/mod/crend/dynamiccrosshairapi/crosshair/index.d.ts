import { $ClipContext$Fluid_ } from "@package/net/minecraft/world/level";
import { $InteractionType_, $InteractionType } from "@package/mod/crend/dynamiccrosshairapi/interaction";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $List } from "@package/java/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Function_ } from "@package/java/util/function";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $Direction } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ContextedApi } from "@package/mod/crend/dynamiccrosshairapi/internal";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $DynamicCrosshairApi } from "@package/mod/crend/dynamiccrosshairapi";
import { $Record } from "@package/java/lang";
import { $EntityHitResult, $HitResult, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/mod/crend/dynamiccrosshairapi/crosshair" {
    export class $Crosshair extends $Record {
        primaryInteraction(): $InteractionType;
        secondaryInteraction(): $InteractionType;
        hasPrimaryInteraction(): boolean;
        hasSecondaryInteraction(): boolean;
        hasInteraction(): boolean;
        combine(other: $Crosshair_): $Crosshair;
        static combine(one: $Crosshair_, other: $Crosshair_): $Crosshair;
        constructor(primaryInteraction: $InteractionType_, secondaryInteraction: $InteractionType_);
        constructor(interactionType: $InteractionType_);
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $Crosshair}.
     */
    export type $Crosshair_ = { secondaryInteraction?: $InteractionType_, primaryInteraction?: $InteractionType_,  } | [secondaryInteraction?: $InteractionType_, primaryInteraction?: $InteractionType_, ];
    export class $CrosshairContext {
    }
    export interface $CrosshairContext {
        apis(): $List<$DynamicCrosshairApi>;
        getPlayer(): $LocalPlayer;
        withApisUntilNonNull<R>(arg0: $Function_<$DynamicCrosshairApi, R>): R;
        isActiveItem(): boolean;
        isWithBlock(): boolean;
        isWithEntity(): boolean;
        isTargeting(): boolean;
        isMainHand(): boolean;
        getBlockHitResult(): $BlockHitResult;
        getWorld(): $ClientLevel;
        shouldInteract(): boolean;
        isCoolingDown(): boolean;
        getHand(): $InteractionHand;
        canUseWeaponAsTool(): boolean;
        getItemUsageContext(): $UseOnContext;
        getBlockHitSide(): $Direction;
        raycastWithFluid(arg0: $ClipContext$Fluid_): $BlockHitResult;
        raycastWithFluid(): $BlockHitResult;
        getHitResult(): $HitResult;
        invalidateHitResult(arg0: $HitResult): void;
        invalidateItem(arg0: $InteractionHand_): void;
        isEmptyHanded(): boolean;
        raycastForEntity(arg0: number): $EntityHitResult;
        setHand(arg0: $InteractionHand_): void;
        isOffHand(): boolean;
        canPlaceItemAsBlock(): boolean;
        includeUsableItem(): boolean;
        includeThrowable(): boolean;
        includeRangedWeapon(): boolean;
        includeTool(): boolean;
        includeShield(): boolean;
        includeHoldingBlock(): boolean;
        includeMeleeWeapon(): boolean;
        checkToolWithBlock(): $InteractionType;
        getEntity(): $Entity;
        api(): $ContextedApi;
        getItem(): $Item;
        getBlock(): $Block;
        getItemStack(arg0: $InteractionHand_): $ItemStack;
        getItemStack(): $ItemStack;
        getBlockPos(): $BlockPos;
        getBlockState(): $BlockState;
        getBlockEntity(): $BlockEntity;
        getFluidState(): $FluidState;
        isFlying(): boolean;
        get player(): $LocalPlayer;
        get activeItem(): boolean;
        get withBlock(): boolean;
        get withEntity(): boolean;
        get targeting(): boolean;
        get mainHand(): boolean;
        get blockHitResult(): $BlockHitResult;
        get world(): $ClientLevel;
        get coolingDown(): boolean;
        get itemUsageContext(): $UseOnContext;
        get blockHitSide(): $Direction;
        get hitResult(): $HitResult;
        get emptyHanded(): boolean;
        get offHand(): boolean;
        get entity(): $Entity;
        get item(): $Item;
        get block(): $Block;
        get blockPos(): $BlockPos;
        get blockState(): $BlockState;
        get blockEntity(): $BlockEntity;
        get fluidState(): $FluidState;
        get flying(): boolean;
    }
}
