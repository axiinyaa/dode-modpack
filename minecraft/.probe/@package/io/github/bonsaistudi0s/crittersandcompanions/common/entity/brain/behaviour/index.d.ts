import { $ServerLevelAccessor } from "@package/net/minecraft/world/level";
import { $SynchedEntityData$Builder } from "@package/net/minecraft/network/syncher";
import { $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $DifficultyInstance, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SpawnGroupData, $MobSpawnType_ } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Iterable, $Class } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/io/github/bonsaistudi0s/crittersandcompanions/common/entity/brain/behaviour" {
    export class $BehaviourDriven {
    }
    export interface $BehaviourDriven {
        getBehaviours(): $Behaviours;
        behaviour<T extends $Behaviour>(type: $Class<T>): T;
        registerBehaviours(behaviours: $Behaviours): void;
        get behaviours(): $Behaviours;
    }
    export class $Behaviours {
        add(behaviour: $Behaviour): $Behaviours;
        forEach(consumer: $Consumer_<$Behaviour>): void;
        optional<T extends $Behaviour>(type: $Class<T>): (T) | undefined;
        all(): $Iterable<$Behaviour>;
        the<T extends $Behaviour>(type: $Class<T>): T;
        constructor();
    }
    export class $Behaviour {
    }
    export interface $Behaviour {
        serverTick(): void;
        setAge(age: number): void;
        mobInteract(player: $Player, hand: $InteractionHand_): $InteractionResult;
        defineSyncedData(builder: $SynchedEntityData$Builder): void;
        read(nbt: $CompoundTag_): void;
        save(nbt: $CompoundTag_): void;
        finalizeSpawn(level: $ServerLevelAccessor, difficulty: $DifficultyInstance, spawnType: $MobSpawnType_, groupData: $SpawnGroupData): void;
        dropEquipment(): void;
        travel(speed: $Vec3_): void;
        aiStep(): void;
        setRecordPlayingNearby(pos: $BlockPos_, active: boolean): void;
        set age(value: number);
    }
}
