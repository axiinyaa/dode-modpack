import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle, $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $Enum } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/layouts" {
    export class $GridLayout extends $AbstractLayout {
        rowSpacing(columnSpacing: number): $GridLayout;
        columnSpacing(columnSpacing: number): $GridLayout;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, occupiedRows: number, occupiedColumns: number, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number): T;
        addChild<T extends $LayoutElement>(child: T, row: number, column: number, layoutSettings: $LayoutSettings): T;
        defaultCellSetting(): $LayoutSettings;
        createRowHelper(columns: number): $GridLayout$RowHelper;
        spacing(columnSpacing: number): $GridLayout;
        newCellSettings(): $LayoutSettings;
        width: number;
        height: number;
        constructor();
        constructor(x: number, y: number);
    }
    export class $EqualSpacingLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $GridLayout$RowHelper {
        getGrid(): $GridLayout;
        addChild<T extends $LayoutElement>(child: T, occupiedColumns: number, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, occupiedColumns: number): T;
        addChild<T extends $LayoutElement>(child: T): T;
        defaultCellSetting(): $LayoutSettings;
        newCellSettings(): $LayoutSettings;
        this$0: $GridLayout;
        constructor(columns: $GridLayout, arg1: number);
        get grid(): $GridLayout;
    }
    export class $AbstractLayout$AbstractChildWrapper {
    }
    export class $FrameLayout$ChildContainer extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $Layout {
    }
    export interface $Layout extends $LayoutElement {
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        arrangeElements(): void;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
    }
    export class $FrameLayout extends $AbstractLayout {
        newChildLayoutSettings(): $LayoutSettings;
        setMinWidth(minHeight: number): $FrameLayout;
        static alignInDimension(position: number, rectangleLength: number, childLength: number, setter: $Consumer_<number>, delta: number): void;
        defaultChildLayoutSetting(): $LayoutSettings;
        setMinHeight(minHeight: number): $FrameLayout;
        setMinDimensions(minWidth: number, minHeight: number): $FrameLayout;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        static alignInRectangle(child: $LayoutElement, rectangle: $ScreenRectangle_, deltaX: number, deltaY: number): void;
        static alignInRectangle(child: $LayoutElement, x: number, y: number, width: number, height: number, deltaX: number, deltaY: number): void;
        static centerInRectangle(child: $LayoutElement, x: number, y: number, width: number, height: number): void;
        static centerInRectangle(child: $LayoutElement, rectangle: $ScreenRectangle_): void;
        width: number;
        height: number;
        constructor(width: number, height: number);
        constructor(x: number, y: number, width: number, height: number);
        constructor();
        set minWidth(value: number);
        set minHeight(value: number);
    }
    export class $LinearLayout implements $Layout {
        static vertical(): $LinearLayout;
        addChild<T extends $LayoutElement>(child: T): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettingsFactory: $Consumer_<$LayoutSettings>): T;
        getY(): number;
        getWidth(): number;
        getHeight(): number;
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        defaultCellSetting(): $LayoutSettings;
        getX(): number;
        spacing(spacing: number): $LinearLayout;
        static horizontal(): $LinearLayout;
        newCellSettings(): $LayoutSettings;
        arrangeElements(): void;
        setX(x: number): void;
        setY(x: number): void;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
        setPosition(x: number, y: number): void;
        getRectangle(): $ScreenRectangle;
        constructor(width: number, height: number, orientation: $LinearLayout$Orientation_);
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $AbstractLayout implements $Layout {
        getY(): number;
        getWidth(): number;
        getHeight(): number;
        getX(): number;
        setX(x: number): void;
        setY(x: number): void;
        arrangeElements(): void;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        setPosition(x: number, y: number): void;
        getRectangle(): $ScreenRectangle;
        width: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $LayoutElement {
    }
    export interface $LayoutElement {
        getY(): number;
        getWidth(): number;
        getHeight(): number;
        setPosition(x: number, y: number): void;
        getX(): number;
        getRectangle(): $ScreenRectangle;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        setX(x: number): void;
        setY(x: number): void;
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
    export class $LinearLayout$Orientation extends $Enum<$LinearLayout$Orientation> {
        addChild<T extends $LayoutElement>(layout: $GridLayout, element: T, index: number, layoutSettings: $LayoutSettings): T;
        static values(): $LinearLayout$Orientation[];
        static valueOf(arg0: string): $LinearLayout$Orientation;
        setSpacing(layout: $GridLayout, spacing: number): void;
        static VERTICAL: $LinearLayout$Orientation;
        static HORIZONTAL: $LinearLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $LinearLayout$Orientation}.
     */
    export type $LinearLayout$Orientation_ = "horizontal" | "vertical";
    export class $LayoutSettings {
        static defaults(): $LayoutSettings;
    }
    export interface $LayoutSettings {
        paddingVertical(padding: number): $LayoutSettings;
        paddingLeft(padding: number): $LayoutSettings;
        paddingRight(padding: number): $LayoutSettings;
        paddingHorizontal(padding: number): $LayoutSettings;
        paddingBottom(padding: number): $LayoutSettings;
        alignVertically(xAlignment: number): $LayoutSettings;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        alignHorizontally(xAlignment: number): $LayoutSettings;
        alignVerticallyBottom(): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        padding(padding: number): $LayoutSettings;
        padding(horizontalPadding: number, verticalPadding: number): $LayoutSettings;
        padding(paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): $LayoutSettings;
        copy(): $LayoutSettings;
        align(xAlignment: number, yAlignment: number): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        paddingTop(padding: number): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $SpacerElement implements $LayoutElement {
        getY(): number;
        getWidth(): number;
        getHeight(): number;
        static width(height: number): $SpacerElement;
        static height(height: number): $SpacerElement;
        getX(): number;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        setX(x: number): void;
        setY(x: number): void;
        setPosition(width: number, height: number): void;
        getRectangle(): $ScreenRectangle;
        constructor(width: number, height: number);
        constructor(x: number, y: number, width: number, height: number);
        get rectangle(): $ScreenRectangle;
    }
    export class $CommonLayouts {
        static labeledElement(font: $Font, element: $LayoutElement, label: $Component_, layoutSettings: $Consumer_<$LayoutSettings>): $Layout;
        static labeledElement(font: $Font, element: $LayoutElement, label: $Component_): $Layout;
    }
    export class $EqualSpacingLayout extends $AbstractLayout {
        newChildLayoutSettings(): $LayoutSettings;
        defaultChildLayoutSetting(): $LayoutSettings;
        addChild<T extends $LayoutElement>(child: T, layoutSettings: $LayoutSettings): T;
        addChild<T extends $LayoutElement>(child: T, layoutSettingsCreator: $Consumer_<$LayoutSettings>): T;
        addChild<T extends $LayoutElement>(child: T): T;
        width: number;
        height: number;
        constructor(width: number, height: number, orientation: $EqualSpacingLayout$Orientation_);
        constructor(x: number, y: number, width: number, height: number, orientation: $EqualSpacingLayout$Orientation_);
    }
    export class $LayoutSettings$LayoutSettingsImpl implements $LayoutSettings {
        paddingVertical(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingLeft(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingRight(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingHorizontal(padding: number): $LayoutSettings$LayoutSettingsImpl;
        paddingBottom(padding: number): $LayoutSettings$LayoutSettingsImpl;
        alignVertically(xAlignment: number): $LayoutSettings$LayoutSettingsImpl;
        getExposed(): $LayoutSettings$LayoutSettingsImpl;
        alignHorizontally(xAlignment: number): $LayoutSettings$LayoutSettingsImpl;
        padding(padding: number): $LayoutSettings$LayoutSettingsImpl;
        padding(horizontalPadding: number, verticalPadding: number): $LayoutSettings$LayoutSettingsImpl;
        padding(paddingLeft: number, paddingTop: number, paddingRight: number, paddingBottom: number): $LayoutSettings$LayoutSettingsImpl;
        copy(): $LayoutSettings$LayoutSettingsImpl;
        align(xAlignment: number, yAlignment: number): $LayoutSettings$LayoutSettingsImpl;
        paddingTop(padding: number): $LayoutSettings$LayoutSettingsImpl;
        alignVerticallyBottom(): $LayoutSettings;
        alignVerticallyMiddle(): $LayoutSettings;
        alignVerticallyTop(): $LayoutSettings;
        alignHorizontallyCenter(): $LayoutSettings;
        alignHorizontallyLeft(): $LayoutSettings;
        alignHorizontallyRight(): $LayoutSettings;
        yAlignment: number;
        xAlignment: number;
        constructor(other: $LayoutSettings$LayoutSettingsImpl);
        constructor();
        get exposed(): $LayoutSettings$LayoutSettingsImpl;
    }
    export class $EqualSpacingLayout$Orientation extends $Enum<$EqualSpacingLayout$Orientation> {
        getSecondaryLength(container: $EqualSpacingLayout$ChildContainer): number;
        getSecondaryLength(element: $LayoutElement): number;
        getPrimaryLength(element: $LayoutElement): number;
        getPrimaryLength(container: $EqualSpacingLayout$ChildContainer): number;
        getPrimaryPosition(element: $LayoutElement): number;
        setPrimaryPosition(container: $EqualSpacingLayout$ChildContainer, position: number): void;
        getSecondaryPosition(element: $LayoutElement): number;
        setSecondaryPosition(container: $EqualSpacingLayout$ChildContainer, position: number, length: number): void;
        static values(): $EqualSpacingLayout$Orientation[];
        static valueOf(arg0: string): $EqualSpacingLayout$Orientation;
        static VERTICAL: $EqualSpacingLayout$Orientation;
        static HORIZONTAL: $EqualSpacingLayout$Orientation;
    }
    /**
     * Values that may be interpreted as {@link $EqualSpacingLayout$Orientation}.
     */
    export type $EqualSpacingLayout$Orientation_ = "horizontal" | "vertical";
    export class $GridLayout$CellInhabitant extends $AbstractLayout$AbstractChildWrapper {
    }
    export class $HeaderAndFooterLayout implements $Layout {
        getFooterHeight(): number;
        getHeaderHeight(): number;
        getContentHeight(): number;
        setHeaderHeight(footerHeight: number): void;
        addToHeader<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        addToHeader<T extends $LayoutElement>(child: T): T;
        setFooterHeight(footerHeight: number): void;
        getY(): number;
        getWidth(): number;
        getHeight(): number;
        addTitleHeader(message: $Component_, font: $Font): void;
        addToContents<T extends $LayoutElement>(child: T): T;
        addToContents<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        addToFooter<T extends $LayoutElement>(child: T, layoutSettingFactory: $Consumer_<$LayoutSettings>): T;
        addToFooter<T extends $LayoutElement>(child: T): T;
        visitChildren(visitor: $Consumer_<$LayoutElement>): void;
        getX(): number;
        arrangeElements(): void;
        setX(footerHeight: number): void;
        setY(footerHeight: number): void;
        visitWidgets(visitor: $Consumer_<$AbstractWidget>): void;
        setPosition(x: number, y: number): void;
        getRectangle(): $ScreenRectangle;
        static DEFAULT_HEADER_AND_FOOTER_HEIGHT: number;
        constructor(screen: $Screen);
        constructor(screen: $Screen, headerHeight: number, footerHeight: number);
        constructor(screen: $Screen, height: number);
        get contentHeight(): number;
        get width(): number;
        get height(): number;
        get rectangle(): $ScreenRectangle;
    }
}
