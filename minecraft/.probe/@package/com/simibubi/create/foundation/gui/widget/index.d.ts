import { $Function_, $Consumer_, $Function } from "@package/java/util/function";
import { $Component, $Component_, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $VanillaWidgetComponent } from "@package/io/wispforest/owo/ui/component";
import { $AbstractSimiWidget } from "@package/net/createmod/catnip/gui/widget";
import { $ScrollValueBehaviour$StepContext } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $List_ } from "@package/java/util";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $Couple } from "@package/net/createmod/catnip/data";

declare module "@package/com/simibubi/create/foundation/gui/widget" {
    export class $Label extends $AbstractSimiWidget {
        setTextAndTrim(arg0: $Component_, arg1: boolean, arg2: number): void;
        colored(arg0: number): $Label;
        withShadow(): $Label;
        withSuffix(arg0: string): $Label;
        static COLOR_SUCCESS: $Couple<$Color>;
        visible: boolean;
        static HEADER_RGB: $Color;
        lockedTooltipY: number;
        static COLOR_HOVER: $Couple<$Color>;
        active: boolean;
        owo$wrapper: $VanillaWidgetComponent;
        suffix: string;
        static COLOR_CLICK: $Couple<$Color>;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static HINT_RGB: $Color;
        static COLOR_IDLE: $Couple<$Color>;
        lockedTooltipX: number;
        alpha: number;
        static COLOR_DISABLED: $Couple<$Color>;
        text: $Component;
        static COLOR_FAIL: $Couple<$Color>;
        constructor(arg0: number, arg1: number, arg2: $Component_);
    }
    export class $ScrollInput extends $AbstractSimiWidget {
        removeCallback(): $ScrollInput;
        onChanged(): void;
        calling(arg0: $Consumer_<number>): $ScrollInput;
        withRange(arg0: number, arg1: number): $ScrollInput;
        withShiftStep(arg0: number): $ScrollInput;
        titled(arg0: $MutableComponent_): $ScrollInput;
        writingTo(arg0: $Label): $ScrollInput;
        addHint(arg0: $MutableComponent_): $ScrollInput;
        withStepFunction(arg0: $Function_<$ScrollValueBehaviour$StepContext, number>): $ScrollInput;
        standardStep(): $Function<$ScrollValueBehaviour$StepContext, number>;
        format(arg0: $Function_<number, $Component>): $ScrollInput;
        getState(): number;
        setState(arg0: number): $ScrollInput;
        inverted(): $ScrollInput;
        static COLOR_SUCCESS: $Couple<$Color>;
        visible: boolean;
        static HEADER_RGB: $Color;
        lockedTooltipY: number;
        static COLOR_HOVER: $Couple<$Color>;
        active: boolean;
        owo$wrapper: $VanillaWidgetComponent;
        static COLOR_CLICK: $Couple<$Color>;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static HINT_RGB: $Color;
        static COLOR_IDLE: $Couple<$Color>;
        lockedTooltipX: number;
        alpha: number;
        static COLOR_DISABLED: $Couple<$Color>;
        static COLOR_FAIL: $Couple<$Color>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $TooltipArea extends $AbstractSimiWidget {
        withTooltip(arg0: $List_<$Component_>): $TooltipArea;
        static COLOR_SUCCESS: $Couple<$Color>;
        visible: boolean;
        static HEADER_RGB: $Color;
        lockedTooltipY: number;
        static COLOR_HOVER: $Couple<$Color>;
        active: boolean;
        owo$wrapper: $VanillaWidgetComponent;
        static COLOR_CLICK: $Couple<$Color>;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static HINT_RGB: $Color;
        static COLOR_IDLE: $Couple<$Color>;
        lockedTooltipX: number;
        alpha: number;
        static COLOR_DISABLED: $Couple<$Color>;
        static COLOR_FAIL: $Couple<$Color>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $SelectionScrollInput extends $ScrollInput {
        forOptions(arg0: $List_<$Component_>): $ScrollInput;
        static COLOR_SUCCESS: $Couple<$Color>;
        visible: boolean;
        static HEADER_RGB: $Color;
        lockedTooltipY: number;
        static COLOR_HOVER: $Couple<$Color>;
        active: boolean;
        owo$wrapper: $VanillaWidgetComponent;
        static COLOR_CLICK: $Couple<$Color>;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static HINT_RGB: $Color;
        static COLOR_IDLE: $Couple<$Color>;
        lockedTooltipX: number;
        alpha: number;
        static COLOR_DISABLED: $Couple<$Color>;
        static COLOR_FAIL: $Couple<$Color>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
}
