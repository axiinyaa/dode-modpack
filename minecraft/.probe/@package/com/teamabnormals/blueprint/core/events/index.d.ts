import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $JsonElement_, $Gson, $JsonElement } from "@package/com/google/gson";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event, $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $Map_, $Map } from "@package/java/util";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/com/teamabnormals/blueprint/core/events" {
    export class $FallingBlockEvent$BlockFallEvent extends $FallingBlockEvent {
        getLevel(): $Level;
        getState(): $BlockState;
        getPos(): $BlockPos;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FallingBlockEntity);
        get level(): $Level;
        get state(): $BlockState;
        get pos(): $BlockPos;
    }
    export class $SimpleJsonResourceListenerPreparedEvent extends $Event {
        getGson(): $Gson;
        getEntries(): $Map<$ResourceLocation, $JsonElement>;
        getDirectory(): string;
        constructor(arg0: $Gson, arg1: string, arg2: $Map_<$ResourceLocation_, $JsonElement_>);
        get gson(): $Gson;
        get entries(): $Map<$ResourceLocation, $JsonElement>;
        get directory(): string;
    }
    export class $FallingBlockEvent extends $Event {
        static onBlockFall(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FallingBlockEntity): $FallingBlockEntity;
        static onFallingBlockTick(arg0: $FallingBlockEntity): boolean;
        setEntity(arg0: $FallingBlockEntity): void;
        getEntity(): $FallingBlockEntity;
        constructor(arg0: $FallingBlockEntity);
    }
    /**
     * @deprecated
     */
    export class $EntityStepEvent extends $Event implements $ICancellableEvent {
        static onEntityStep(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Entity): boolean;
        getEntity(): $Entity;
        getLevel(): $Level;
        getState(): $BlockState;
        getPos(): $BlockPos;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Entity);
        get entity(): $Entity;
        get level(): $Level;
        get state(): $BlockState;
        get pos(): $BlockPos;
    }
    export class $FallingBlockEvent$FallingBlockTickEvent extends $FallingBlockEvent implements $ICancellableEvent {
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        constructor(arg0: $FallingBlockEntity);
    }
    export class $LoadThisClassEvent extends $Event implements $IModBusEvent {
        constructor();
    }
}
