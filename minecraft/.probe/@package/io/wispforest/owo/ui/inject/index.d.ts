import { $Consumer_ } from "@package/java/util/function";
import { $FocusHandler } from "@package/io/wispforest/owo/ui/util";
import { $EventSource } from "@package/io/wispforest/owo/util";
import { $VanillaWidgetComponent } from "@package/io/wispforest/owo/ui/component";
import { $AnimatableProperty, $Sizing, $CursorStyle_, $Positioning, $Component$DismountReason_, $Component, $Component$FocusSource_, $ParentComponent, $CursorStyle, $OwoUIDrawContext, $Size_, $Insets_, $Insets } from "@package/io/wispforest/owo/ui/core";
import { $MouseScroll, $MouseDown, $MouseUp, $CharTyped, $MouseLeave, $MouseEnter, $FocusLost, $KeyPress, $MouseDrag, $FocusGained } from "@package/io/wispforest/owo/ui/event";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $List, $List_ } from "@package/java/util";

declare module "@package/io/wispforest/owo/ui/inject" {
    export class $ComponentStub {
    }
    export interface $ComponentStub extends $Component {
        dismount(reason: $Component$DismountReason_): void;
        focusHandler(): $FocusHandler;
        positioning(positioning: $Positioning): $Component;
        positioning(): $AnimatableProperty<$Positioning>;
        margins(margins: $Insets_): $Component;
        margins(): $AnimatableProperty<$Insets>;
        horizontalSizing(): $AnimatableProperty<$Sizing>;
        horizontalSizing(horizontalSizing: $Sizing): $Component;
        verticalSizing(verticalSizing: $Sizing): $Component;
        verticalSizing(): $AnimatableProperty<$Sizing>;
        mouseDown(): $EventSource<$MouseDown>;
        cursorStyle(style: $CursorStyle_): $Component;
        cursorStyle(): $CursorStyle;
        onMouseDown(mouseX: number, mouseY: number, button: number): boolean;
        onMouseUp(mouseX: number, mouseY: number, button: number): boolean;
        mouseUp(): $EventSource<$MouseUp>;
        mouseScroll(): $EventSource<$MouseScroll>;
        mouseDrag(): $EventSource<$MouseDrag>;
        keyPress(): $EventSource<$KeyPress>;
        focusGained(): $EventSource<$FocusGained>;
        focusLost(): $EventSource<$FocusLost>;
        mouseEnter(): $EventSource<$MouseEnter>;
        mouseLeave(): $EventSource<$MouseLeave>;
        onMouseScroll(mouseX: number, mouseY: number, amount: number): boolean;
        onMouseDrag(mouseX: number, mouseY: number, deltaX: number, deltaY: number, button: number): boolean;
        onKeyPress(keyCode: number, scanCode: number, modifiers: number): boolean;
        onCharTyped(chr: string, modifiers: number): boolean;
        onFocusGained(source: $Component$FocusSource_): void;
        onFocusLost(): void;
        zIndex(): number;
        zIndex(zIndex: number): $Component;
        widgetWrapper(): $VanillaWidgetComponent;
        widthOffset(): number;
        updateX(x: number): void;
        updateY(y: number): void;
        yOffset(): number;
        xOffset(): number;
        heightOffset(): number;
        configure<C extends $Component>(closure: $Consumer_<C>): C;
        parent(): $ParentComponent;
        inflate(space: $Size_): void;
        x(): number;
        id(id: string): $Component;
        id(): string;
        mount(parent: $ParentComponent, x: number, y: number): void;
        y(): number;
        width(): number;
        height(): number;
        draw(context: $OwoUIDrawContext, mouseX: number, mouseY: number, partialTicks: number, delta: number): void;
        tooltip(): $List<$ClientTooltipComponent>;
        tooltip(tooltip: $List_<$ClientTooltipComponent>): $Component;
        charTyped(): $EventSource<$CharTyped>;
    }
    export class $GreedyInputComponent {
    }
    export interface $GreedyInputComponent extends $Component {
    }
}
