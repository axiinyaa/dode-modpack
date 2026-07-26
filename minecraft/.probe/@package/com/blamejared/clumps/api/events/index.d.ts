import { $Event } from "@package/net/neoforged/bus/api";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/com/blamejared/clumps/api/events" {
    export class $ValueEvent extends $Event implements $IValueEvent {
        getPlayer(): $Player;
        getValue(): number;
        setValue(arg0: number): void;
        constructor(arg0: $Player, arg1: number);
        get player(): $Player;
    }
    export class $IRepairEvent {
    }
    export interface $IRepairEvent {
        getPlayer(): $Player;
        getValue(): number;
        setValue(arg0: number): void;
        get player(): $Player;
    }
    export class $IValueEvent {
    }
    export interface $IValueEvent {
        getPlayer(): $Player;
        getValue(): number;
        setValue(arg0: number): void;
        get player(): $Player;
    }
    export class $RepairEvent extends $Event implements $IRepairEvent {
        getPlayer(): $Player;
        getValue(): number;
        setValue(arg0: number): void;
        constructor(arg0: $Player, arg1: number);
        get player(): $Player;
    }
}
