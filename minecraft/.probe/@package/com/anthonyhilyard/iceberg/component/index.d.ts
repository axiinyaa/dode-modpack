import { $Enum } from "@package/java/lang";

declare module "@package/com/anthonyhilyard/iceberg/component" {
    export class $IExtendedText {
    }
    export interface $IExtendedText {
        setAlignment(arg0: $IExtendedText$TextAlignment_): void;
        getLeftPadding(): number;
        getRightPadding(): number;
        getTopPadding(): number;
        getBottomPadding(): number;
        setPadding(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setPadding(padding: number): void;
        setPadding(left: number, right: number): void;
        getAlignment(): $IExtendedText$TextAlignment;
        get leftPadding(): number;
        get rightPadding(): number;
        get topPadding(): number;
        get bottomPadding(): number;
    }
    export class $IExtendedText$TextAlignment extends $Enum<$IExtendedText$TextAlignment> {
        static values(): $IExtendedText$TextAlignment[];
        static valueOf(name: string): $IExtendedText$TextAlignment;
        static CENTER: $IExtendedText$TextAlignment;
        static LEFT: $IExtendedText$TextAlignment;
        static RIGHT: $IExtendedText$TextAlignment;
    }
    /**
     * Values that may be interpreted as {@link $IExtendedText$TextAlignment}.
     */
    export type $IExtendedText$TextAlignment_ = "left" | "center" | "right";
}
