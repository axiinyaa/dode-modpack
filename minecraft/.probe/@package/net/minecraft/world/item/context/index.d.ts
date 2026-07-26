import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $UseOnContextAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/item/context" {
    export class $BlockPlaceContext extends $UseOnContext {
        getNearestLookingDirections(): $Direction[];
        getNearestLookingDirection(): $Direction;
        canPlace(): boolean;
        replacingClickedOnBlock(): boolean;
        getNearestLookingVerticalDirection(): $Direction;
        handler$hid000$moonlight$fixNotAccountingForNullPlayer1(arg0: $CallbackInfoReturnable<any>): void;
        handler$hid000$moonlight$fixNotAccountingForNullPlayer2(arg0: $CallbackInfoReturnable<any>): void;
        handler$hid000$moonlight$fixNotAccountingForNullPlayer3(arg0: $CallbackInfoReturnable<any>): void;
        static at(context: $BlockPlaceContext, pos: $BlockPos_, direction: $Direction_): $BlockPlaceContext;
        replaceClicked: boolean;
        constructor(player: $Player, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        constructor(context: $UseOnContext);
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get nearestLookingDirections(): $Direction[];
        get nearestLookingDirection(): $Direction;
        get nearestLookingVerticalDirection(): $Direction;
    }
    export class $DirectionalPlaceContext extends $BlockPlaceContext {
        replaceClicked: boolean;
        constructor(level: $Level_, pos: $BlockPos_, direction: $Direction_, itemStack: $ItemStack_, face: $Direction_);
    }
    export class $UseOnContext implements $UseOnContextAccessor {
        getPlayer(): $Player;
        getClickedPos(): $BlockPos;
        getClickedFace(): $Direction;
        isInside(): boolean;
        getHorizontalDirection(): $Direction;
        getClickLocation(): $Vec3;
        getHand(): $InteractionHand;
        getHitResult(): $BlockHitResult;
        getLevel(): $Level;
        getItemInHand(): $ItemStack;
        getRotation(): number;
        isSecondaryUseActive(): boolean;
        create$getHitResult(): $BlockHitResult;
        constructor(player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult);
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get player(): $Player;
        get clickedPos(): $BlockPos;
        get clickedFace(): $Direction;
        get inside(): boolean;
        get horizontalDirection(): $Direction;
        get clickLocation(): $Vec3;
        get hand(): $InteractionHand;
        get hitResult(): $BlockHitResult;
        get level(): $Level;
        get itemInHand(): $ItemStack;
        get rotation(): number;
        get secondaryUseActive(): boolean;
    }
}
