import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $InteractionType_ } from "@package/mod/crend/dynamiccrosshairapi/interaction";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $EntityType_ } from "@package/net/minecraft/world/entity";
import { $CrosshairContext, $Crosshair } from "@package/mod/crend/dynamiccrosshairapi/crosshair";
import { $HitResult } from "@package/net/minecraft/world/phys";
export * as interaction from "@package/mod/crend/dynamiccrosshairapi/interaction";
export * as type from "@package/mod/crend/dynamiccrosshairapi/type";
export * as crosshair from "@package/mod/crend/dynamiccrosshairapi/crosshair";
export * as internal from "@package/mod/crend/dynamiccrosshairapi/internal";

declare module "@package/mod/crend/dynamiccrosshairapi" {
    export class $DynamicCrosshairApiItemStack {
    }
    export interface $DynamicCrosshairApiItemStack {
        isAlwaysUsable(itemStack: $ItemStack_): boolean;
        isAlwaysUsableOnBlock(itemStack: $ItemStack_): boolean;
        isAlwaysUsableOnEntity(itemStack: $ItemStack_): boolean;
        isAlwaysUsableOnMiss(itemStack: $ItemStack_): boolean;
        isTool(itemStack: $ItemStack_): boolean;
        isThrowable(itemStack: $ItemStack_): boolean;
        isShield(itemStack: $ItemStack_): boolean;
        isMeleeWeapon(itemStack: $ItemStack_): boolean;
        isRangedWeapon(itemStack: $ItemStack_): boolean;
        isBlock(itemStack: $ItemStack_): boolean;
        isUsable(itemStack: $ItemStack_): boolean;
    }
    export class $DynamicCrosshairApiBlockState {
    }
    export interface $DynamicCrosshairApiBlockState {
        isAlwaysInteractableInCreativeMode(blockState: $BlockState_): boolean;
        isInteractable(blockState: $BlockState_): boolean;
        isAlwaysInteractable(blockState: $BlockState_): boolean;
    }
    export class $DynamicCrosshairApi {
    }
    export interface $DynamicCrosshairApi extends $DynamicCrosshairApiBlockState, $DynamicCrosshairApiEntityType, $DynamicCrosshairApiItemStack {
        forceCheck(): boolean;
        computeFromBlock(context: $CrosshairContext): $Crosshair;
        computeFromItem(context: $CrosshairContext): $Crosshair;
        overrideFromItem(context: $CrosshairContext, interactionType: $InteractionType_): $Crosshair;
        overrideWorld(): $ClientLevel;
        forceInvalidate(context: $CrosshairContext): boolean;
        overrideHitResult(context: $CrosshairContext, hitResult: $HitResult): $HitResult;
        computeFromEntity(context: $CrosshairContext): $Crosshair;
        getNamespace(): string;
        init(): void;
        getModId(): string;
        get namespace(): string;
        get modId(): string;
    }
    /**
     * Values that may be interpreted as {@link $DynamicCrosshairApi}.
     */
    export type $DynamicCrosshairApi_ = (() => string);
    export class $DynamicCrosshairApiEntityType {
    }
    export interface $DynamicCrosshairApiEntityType {
        isInteractable(entityType: $EntityType_<never>): boolean;
        isAlwaysInteractable(entityType: $EntityType_<never>): boolean;
    }
}
