import { $VanillaWidgetComponent } from "@package/io/wispforest/owo/ui/component";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/xaero/lib/client/gui/widget/dropdown" {
    export class $DropDownWidget extends $AbstractWidget {
        getRenderY(): number;
        onDropDown(arg0: number, arg1: number, arg2: number): boolean;
        onDropDown(arg0: number, arg1: number, arg2: boolean, arg3: number): boolean;
        selectId(arg0: number, arg1: boolean): void;
        getXWithOffset(): number;
        getRenderYWithOffset(): number;
        getSelected(): number;
        setClosed(arg0: boolean): void;
        size(): number;
        isClosed(): boolean;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        setActive(arg0: boolean): void;
        mouseClicked(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mouseReleased(arg0: number, arg1: number, arg2: number, arg3: number): void;
        mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): void;
        visible: boolean;
        static TRIM: number;
        static TRIM_OPEN: number;
        active: boolean;
        owo$wrapper: $VanillaWidgetComponent;
        static LINE_HEIGHT: number;
        packedFGColor: number;
        static SELECTED_DEFAULT_BACKGROUND: number;
        static SELECTED_DEFAULT_HOVERED_BACKGROUND: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        static DEFAULT_BACKGROUND: number;
        static TRIM_INSIDE: number;
        get renderY(): number;
        get XWithOffset(): number;
        get renderYWithOffset(): number;
        get selected(): number;
    }
}
