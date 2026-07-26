import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/yyz/yyzsbackpack/base" {
    export class $BackpackMenu {
    }
    export interface $BackpackMenu {
        isBackpackVisible(): boolean;
        setBackpackVisible(arg0: boolean): void;
        isPreviewVisible(): boolean;
        setPreviewVisible(arg0: boolean): void;
        getBackpackGuiX(): number;
        getBackpackGuiY(): number;
        setBackpackGuiPos(arg0: number, arg1: number): void;
        getBackpackEquipSlotX(): number;
        getBackpackEquipSlotY(): number;
        setBackpackEquipSlotPos(arg0: number, arg1: number): void;
        get backpackGuiX(): number;
        get backpackGuiY(): number;
        get backpackEquipSlotX(): number;
        get backpackEquipSlotY(): number;
    }
    export class $BackpackScreen {
    }
    export interface $BackpackScreen {
        getBackpackExclusionZones(): $List<$Rect2i>;
        get backpackExclusionZones(): $List<$Rect2i>;
    }
    /**
     * Values that may be interpreted as {@link $BackpackScreen}.
     */
    export type $BackpackScreen_ = (() => $List_<$Rect2i>);
}
