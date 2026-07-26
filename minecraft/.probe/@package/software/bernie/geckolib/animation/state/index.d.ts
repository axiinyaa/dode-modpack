import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        updateScale(arg0: number, arg1: number, arg2: number): void;
        getOffsetZ(): number;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        getScaleX(): number;
        getScaleY(): number;
        getScaleZ(): number;
        startRotAnim(): void;
        startPosAnim(): void;
        startScaleAnim(): void;
        isRotAnimInProgress(): boolean;
        stopRotAnim(arg0: number): void;
        getLastResetRotationTick(): number;
        isPosAnimInProgress(): boolean;
        stopPosAnim(arg0: number): void;
        getLastResetPositionTick(): number;
        isScaleAnimInProgress(): boolean;
        stopScaleAnim(arg0: number): void;
        getLastResetScaleTick(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getRotY(): number;
        getRotX(): number;
        getRotZ(): number;
        getOffsetX(): number;
        getOffsetY(): number;
        getBone(): $GeoBone;
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        constructor(arg0: $GeoBone);
        get offsetZ(): number;
        get scaleX(): number;
        get scaleY(): number;
        get scaleZ(): number;
        get rotAnimInProgress(): boolean;
        get lastResetRotationTick(): number;
        get posAnimInProgress(): boolean;
        get lastResetPositionTick(): number;
        get scaleAnimInProgress(): boolean;
        get lastResetScaleTick(): number;
        get rotY(): number;
        get rotX(): number;
        get rotZ(): number;
        get offsetX(): number;
        get offsetY(): number;
        get bone(): $GeoBone;
    }
}
