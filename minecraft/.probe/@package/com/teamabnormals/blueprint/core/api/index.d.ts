import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Item } from "@package/net/minecraft/world/item";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/teamabnormals/blueprint/core/api" {
    export class $EggLayer {
    }
    export interface $EggLayer {
        getEggTimer(): number;
        setEggTimer(arg0: number): void;
        isBirdJockey(): boolean;
        setBirdJockey(arg0: boolean): void;
        getEggItem(): $Item;
        getNextEggTime(arg0: $RandomSource): number;
        getEggLayingSound(): $SoundEvent;
        get eggItem(): $Item;
        get eggLayingSound(): $SoundEvent;
    }
}
