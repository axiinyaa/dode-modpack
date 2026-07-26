import { $AnimationData } from "@package/com/zigythebird/playeranimcore/animation";
import { $PlayerAnimBone } from "@package/com/zigythebird/playeranimcore/bones";
import { $FirstPersonConfiguration, $FirstPersonMode } from "@package/com/zigythebird/playeranimcore/api/firstPerson";
import { $List } from "@package/java/util";
import { $Pair } from "@package/it/unimi/dsi/fastutil";
export * as modifier from "@package/com/zigythebird/playeranimcore/animation/layered/modifier";

declare module "@package/com/zigythebird/playeranimcore/animation/layered" {
    export class $IAnimation {
        static DEFAULT_FIRST_PERSON_CONFIG: $FirstPersonConfiguration;
    }
    export interface $IAnimation {
        isFirstPersonFollowsCamera(): boolean;
        getFirstPersonTransitionLength(): number;
        get3DTransform(bone: $PlayerAnimBone): $PlayerAnimBone;
        setupAnim(state: $AnimationData): void;
        getFirstPersonMode(): $FirstPersonMode;
        getFirstPersonConfiguration(): $FirstPersonConfiguration;
        tick(state: $AnimationData): void;
        isActive(): boolean;
        canRemove(): boolean;
        get firstPersonFollowsCamera(): boolean;
        get firstPersonTransitionLength(): number;
        set upAnim(value: $AnimationData);
        get firstPersonMode(): $FirstPersonMode;
        get firstPersonConfiguration(): $FirstPersonConfiguration;
        get active(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IAnimation}.
     */
    export type $IAnimation_ = (() => boolean);
    export class $AnimationStack implements $IAnimation {
        isFirstPersonFollowsCamera(): boolean;
        getFirstPersonTransitionLength(): number;
        addAnimLayer(priority: number, layer: $IAnimation_): void;
        get3DTransform(bone: $PlayerAnimBone): $PlayerAnimBone;
        setupAnim(state: $AnimationData): void;
        getFirstPersonMode(): $FirstPersonMode;
        getFirstPersonConfiguration(): $FirstPersonConfiguration;
        removeLayer(layerLevel: number): boolean;
        removeLayer(layer: $IAnimation_): boolean;
        tick(state: $AnimationData): void;
        getPriority(): number;
        isActive(): boolean;
        getLayers(): $List<$Pair<number, $IAnimation>>;
        canRemove(): boolean;
        constructor();
        get firstPersonFollowsCamera(): boolean;
        get firstPersonTransitionLength(): number;
        set upAnim(value: $AnimationData);
        get firstPersonMode(): $FirstPersonMode;
        get firstPersonConfiguration(): $FirstPersonConfiguration;
        get priority(): number;
        get active(): boolean;
        get layers(): $List<$Pair<number, $IAnimation>>;
    }
    export class $AnimationContainer<T extends $IAnimation> implements $IAnimation {
        getAnim(): T;
        setAnim(newAnim: T): void;
        isFirstPersonFollowsCamera(): boolean;
        getFirstPersonTransitionLength(): number;
        get3DTransform(bone: $PlayerAnimBone): $PlayerAnimBone;
        setupAnim(state: $AnimationData): void;
        getFirstPersonMode(): $FirstPersonMode;
        getFirstPersonConfiguration(): $FirstPersonConfiguration;
        tick(state: $AnimationData): void;
        isActive(): boolean;
        canRemove(): boolean;
        constructor();
        constructor(anim: T);
        get firstPersonFollowsCamera(): boolean;
        get firstPersonTransitionLength(): number;
        set upAnim(value: $AnimationData);
        get firstPersonMode(): $FirstPersonMode;
        get firstPersonConfiguration(): $FirstPersonConfiguration;
        get active(): boolean;
    }
}
