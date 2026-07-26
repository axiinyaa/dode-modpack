import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $PlayerAnimBone } from "@package/com/zigythebird/playeranimcore/bones";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $AnimationStack } from "@package/com/zigythebird/playeranimcore/animation/layered";

declare module "@package/com/zigythebird/playeranim/animation" {
    export class $PlayerAnimManager extends $AnimationStack {
        getTickDelta(): number;
        isFirstPersonTransitioningToPAL(): boolean;
        getPlayer(): $AbstractClientPlayer;
        getLastUpdateTime(): number;
        updatePart(part: $ModelPart, secondLayer: $ModelPart, bone: $PlayerAnimBone): void;
        isFirstTick(): boolean;
        updatedAt(updateTime: number): void;
        setTickDelta(tickDelta: number): void;
        getFirstPersonTransitionProgress(): number;
        constructor(player: $AbstractClientPlayer);
        get firstPersonTransitioningToPAL(): boolean;
        get player(): $AbstractClientPlayer;
        get lastUpdateTime(): number;
        get firstTick(): boolean;
        get firstPersonTransitionProgress(): number;
    }
}
