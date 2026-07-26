import { $TransformType, $TransformType_ } from "@package/dev/kosmx/playerAnim/api";
import { $Ease_ } from "@package/dev/kosmx/playerAnim/core/util";
import { $IAnimation, $AnimationContainer, $ModifierLayer } from "@package/dev/kosmx/playerAnim/api/layered";

declare module "@package/dev/kosmx/playerAnim/api/layered/modifier" {
    export class $AbstractModifier extends $AnimationContainer<$IAnimation> {
        setHost(host: $ModifierLayer<any>): void;
        canRemove(): boolean;
        constructor();
        set host(value: $ModifierLayer<any>);
    }
    export class $AbstractFadeModifier$EasingFunction {
    }
    export interface $AbstractFadeModifier$EasingFunction {
        ease(arg0: string, arg1: $TransformType_, arg2: number): number;
    }
    /**
     * Values that may be interpreted as {@link $AbstractFadeModifier$EasingFunction}.
     */
    export type $AbstractFadeModifier$EasingFunction_ = ((arg0: string, arg1: $TransformType, arg2: number) => number);
    export class $AbstractFadeModifier extends $AbstractModifier {
        static standardFadeIn(length: number, ease: $Ease_): $AbstractFadeModifier;
        static functionalFadeIn(length: number, arg1: $AbstractFadeModifier$EasingFunction_): $AbstractFadeModifier;
        setBeginAnimation(beginAnimation: $IAnimation): void;
        set beginAnimation(value: $IAnimation);
    }
}
