import { $AnimationProcessor } from "@package/com/zigythebird/playeranimcore/animation";
import { $PlayerAnimManager } from "@package/com/zigythebird/playeranim/animation";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $IAnimation } from "@package/com/zigythebird/playeranimcore/animation/layered";

declare module "@package/com/zigythebird/playeranim/accessors" {
    export class $IMutableModel {
    }
    export interface $IMutableModel {
        playerAnimLib$getAnimation(): $PlayerAnimManager;
        playerAnimLib$setAnimation(arg0: $PlayerAnimManager): void;
    }
    export class $ICapeLayer {
    }
    export interface $ICapeLayer {
        resetBend(cape: $ModelPart): void;
        applyBend(cape: $ModelPart, torso: $ModelPart, bend: number): void;
    }
    export class $IAnimatedPlayer {
    }
    export interface $IAnimatedPlayer {
        playerAnimLib$getAnimManager(): $PlayerAnimManager;
        playerAnimLib$getAnimation(arg0: $ResourceLocation_): $IAnimation;
        playerAnimLib$getAnimProcessor(): $AnimationProcessor;
    }
}
