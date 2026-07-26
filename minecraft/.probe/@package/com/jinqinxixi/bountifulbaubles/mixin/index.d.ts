
declare module "@package/com/jinqinxixi/bountifulbaubles/mixin" {
    export class $LivingEntity {
    }
    export interface $LivingEntity {
        isJumping(): boolean;
        get jumping(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntity}.
     */
    export type $LivingEntity_ = (() => boolean);
}
