import { $AbstractFadeModifier, $AbstractModifier } from "@package/dev/kosmx/playerAnim/api/layered/modifier";
import { $TransformType_ } from "@package/dev/kosmx/playerAnim/api";
import { $FirstPersonConfiguration, $FirstPersonMode } from "@package/dev/kosmx/playerAnim/api/firstPerson";
import { $Vec3f } from "@package/dev/kosmx/playerAnim/core/util";
export * as modifier from "@package/dev/kosmx/playerAnim/api/layered/modifier";

declare module "@package/dev/kosmx/playerAnim/api/layered" {
    export class $AnimationStack implements $IAnimation {
        addAnimLayer(priority: number, layer: $IAnimation): void;
        get3DTransform(modelName: string, type: $TransformType_, tickDelta: number, value0: $Vec3f): $Vec3f;
        setupAnim(tickDelta: number): void;
        getFirstPersonMode(tickDelta: number): $FirstPersonMode;
        getFirstPersonConfiguration(tickDelta: number): $FirstPersonConfiguration;
        removeLayer(layerLevel: number): boolean;
        removeLayer(layer: $IAnimation): boolean;
        tick(): void;
        isActive(): boolean;
        constructor();
        set upAnim(value: number);
        get active(): boolean;
    }
    export class $AnimationContainer<T extends $IAnimation> implements $IAnimation {
        getAnim(): T;
        setAnim(newAnim: T): void;
        get3DTransform(modelName: string, type: $TransformType_, tickDelta: number, value0: $Vec3f): $Vec3f;
        setupAnim(tickDelta: number): void;
        getFirstPersonMode(tickDelta: number): $FirstPersonMode;
        getFirstPersonConfiguration(tickDelta: number): $FirstPersonConfiguration;
        tick(): void;
        isActive(): boolean;
        constructor(anim: T);
        constructor();
        set upAnim(value: number);
        get active(): boolean;
    }
    export class $IAnimation {
    }
    export interface $IAnimation {
        get3DTransform(arg0: string, arg1: $TransformType_, arg2: number, arg3: $Vec3f): $Vec3f;
        setupAnim(arg0: number): void;
        getFirstPersonMode(tickDelta: number): $FirstPersonMode;
        getFirstPersonConfiguration(tickDelta: number): $FirstPersonConfiguration;
        tick(): void;
        isActive(): boolean;
        set upAnim(value: number);
        get active(): boolean;
    }
    export class $ModifierLayer<T extends $IAnimation> implements $IAnimation {
        replaceAnimationWithFade(fadeModifier: $AbstractFadeModifier, newAnimation: T): void;
        replaceAnimationWithFade(fadeModifier: $AbstractFadeModifier, newAnimation: T, fadeFromNothing: boolean): void;
        addModifierLast(modifier: $AbstractModifier): void;
        addModifierBefore(modifier: $AbstractModifier): void;
        addModifier(modifier: $AbstractModifier, idx: number): void;
        get3DTransform(modelName: string, type: $TransformType_, tickDelta: number, value0: $Vec3f): $Vec3f;
        setupAnim(tickDelta: number): void;
        getFirstPersonMode(tickDelta: number): $FirstPersonMode;
        getFirstPersonConfiguration(tickDelta: number): $FirstPersonConfiguration;
        setAnimation(animation: T): void;
        tick(): void;
        size(): number;
        isActive(): boolean;
        removeModifier(idx: number): void;
        getAnimation(): T;
        constructor();
        constructor(animation: T, ...modifiers: $AbstractModifier[]);
        set upAnim(value: number);
        get active(): boolean;
    }
}
