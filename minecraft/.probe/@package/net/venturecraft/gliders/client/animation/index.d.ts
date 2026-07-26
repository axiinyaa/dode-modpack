import { $IAnimation, $ModifierLayer } from "@package/dev/kosmx/playerAnim/api/layered";

declare module "@package/net/venturecraft/gliders/client/animation" {
    export class $AnimatedPlayer {
    }
    export interface $AnimatedPlayer {
        gliders_getModifierLayer(): $ModifierLayer<$IAnimation>;
    }
    /**
     * Values that may be interpreted as {@link $AnimatedPlayer}.
     */
    export type $AnimatedPlayer_ = (() => $ModifierLayer<$IAnimation>);
}
