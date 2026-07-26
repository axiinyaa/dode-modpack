import { $SpruceWidget } from "@package/dev/lambdaurora/spruceui/widget";
export * as widget from "@package/dev/lambdaurora/spruceui/widget";
export * as util from "@package/dev/lambdaurora/spruceui/util";
export * as option from "@package/dev/lambdaurora/spruceui/option";

declare module "@package/dev/lambdaurora/spruceui" {
    export class $Position implements $SprucePositioned {
        setRelativeY(y: number): void;
        getAnchor(): $SprucePositioned;
        getRelativeY(): number;
        getRelativeX(): number;
        setRelativeX(x: number): void;
        setAnchor(anchor: $SprucePositioned): void;
        getY(): number;
        move(x: number, y: number): $Position;
        static origin(): $Position;
        static of(anchor: $SprucePositioned, x: number, y: number): $Position;
        static of(x: number, y: number): $Position;
        copy(): $Position;
        static center(width: number, y: number): $Position;
        static center(anchor: $SprucePositioned, width: number, y: number): $Position;
        static center(parent: $SpruceWidget, y: number): $Position;
        getX(): number;
        get y(): number;
        get x(): number;
    }
}
