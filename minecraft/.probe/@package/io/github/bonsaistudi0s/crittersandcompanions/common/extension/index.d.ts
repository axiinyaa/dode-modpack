import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Set } from "@package/java/util";
import { $GrapplingHookEntity } from "@package/io/github/bonsaistudi0s/crittersandcompanions/common/entity";

declare module "@package/io/github/bonsaistudi0s/crittersandcompanions/common/extension" {
    export class $IGrapplingState {
    }
    export interface $IGrapplingState {
        getHook(): $GrapplingHookEntity;
        setHook(arg0: $GrapplingHookEntity): void;
    }
    export class $ISilkLeashState {
    }
    export interface $ISilkLeashState {
        getLeashingEntities(): $Set<$LivingEntity>;
        getLeashedByEntities(): $Set<$LivingEntity>;
        sendLeashState(): void;
        get leashingEntities(): $Set<$LivingEntity>;
        get leashedByEntities(): $Set<$LivingEntity>;
    }
    export class $IBubbleState {
    }
    export interface $IBubbleState {
        isBubbleActive(): boolean;
        setBubbleActive(arg0: boolean): void;
    }
}
