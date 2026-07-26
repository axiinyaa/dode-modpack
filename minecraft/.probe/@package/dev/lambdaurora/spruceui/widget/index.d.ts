import { $SprucePositioned, $Position } from "@package/dev/lambdaurora/spruceui";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";

declare module "@package/dev/lambdaurora/spruceui/widget" {
    export class $SpruceWidget {
    }
    export interface $SpruceWidget extends $SprucePositioned, $SpruceElement, $NarratableEntry, $Renderable {
        isMouseHovered(): boolean;
        isFocusedOrHovered(): boolean;
        getEndX(): number;
        getEndY(): number;
        getY(): number;
        getWidth(): number;
        getHeight(): number;
        getPosition(): $Position;
        isActive(): boolean;
        setVisible(arg0: boolean): void;
        setActive(arg0: boolean): void;
        getX(): number;
        isMouseOver(mouseX: number, mouseY: number): boolean;
        isDragging(): boolean;
        setDragging(arg0: boolean): void;
        setFocused(arg0: boolean): void;
        isFocused(): boolean;
        isVisible(): boolean;
        get mouseHovered(): boolean;
        get focusedOrHovered(): boolean;
        get endX(): number;
        get endY(): number;
        get y(): number;
        get width(): number;
        get height(): number;
        get position(): $Position;
        get x(): number;
    }
}
