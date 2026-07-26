import { $TransformType_ } from "@package/dev/kosmx/playerAnim/api";
import { $FirstPersonConfiguration, $FirstPersonMode } from "@package/dev/kosmx/playerAnim/api/firstPerson";
import { $Vec3f, $Pair } from "@package/dev/kosmx/playerAnim/core/util";
import { $IAnimation } from "@package/dev/kosmx/playerAnim/api/layered";

declare module "@package/dev/kosmx/playerAnim/core/impl" {
    export class $AnimationProcessor {
        get3DTransform(modelName: string, type: $TransformType_, value0: $Vec3f): $Vec3f;
        getFirstPersonMode(): $FirstPersonMode;
        getFirstPersonConfiguration(): $FirstPersonConfiguration;
        isFirstPersonAnimationDisabled(): boolean;
        getBend(modelName: string): $Pair<number, number>;
        setTickDelta(tickDelta: number): void;
        tick(): void;
        isActive(): boolean;
        constructor(animation: $IAnimation);
        get firstPersonMode(): $FirstPersonMode;
        get firstPersonConfiguration(): $FirstPersonConfiguration;
        get firstPersonAnimationDisabled(): boolean;
        set tickDelta(value: number);
        get active(): boolean;
    }
}
