import { $InteractionType_, $InteractionType } from "@package/mod/crend/dynamiccrosshairapi/interaction";
import { $CrosshairContext } from "@package/mod/crend/dynamiccrosshairapi/crosshair";

declare module "@package/mod/crend/dynamiccrosshairapi/type" {
    export class $DynamicCrosshairBlock {
    }
    export interface $DynamicCrosshairBlock {
        dynamiccrosshair$compute(arg0: $CrosshairContext): $InteractionType;
    }
    /**
     * Values that may be interpreted as {@link $DynamicCrosshairBlock}.
     */
    export type $DynamicCrosshairBlock_ = ((arg0: $CrosshairContext) => $InteractionType_);
    export class $DynamicCrosshairEntity {
    }
    export interface $DynamicCrosshairEntity {
        dynamiccrosshair$compute(arg0: $CrosshairContext): $InteractionType;
    }
    /**
     * Values that may be interpreted as {@link $DynamicCrosshairEntity}.
     */
    export type $DynamicCrosshairEntity_ = ((arg0: $CrosshairContext) => $InteractionType_);
    export class $DynamicCrosshairItem {
    }
    export interface $DynamicCrosshairItem {
        dynamiccrosshair$compute(arg0: $CrosshairContext): $InteractionType;
    }
    /**
     * Values that may be interpreted as {@link $DynamicCrosshairItem}.
     */
    export type $DynamicCrosshairItem_ = ((arg0: $CrosshairContext) => $InteractionType_);
    export class $DynamicCrosshairRangedItem {
    }
    export interface $DynamicCrosshairRangedItem {
        dynamiccrosshair$isCharging(arg0: $CrosshairContext): boolean;
        dynamiccrosshair$isCharged(arg0: $CrosshairContext): boolean;
    }
}
