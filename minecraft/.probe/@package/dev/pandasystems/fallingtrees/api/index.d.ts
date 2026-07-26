import { $Level_ } from "@package/net/minecraft/world/level";
import { $TreeEntity } from "@package/dev/pandasystems/fallingtrees/entity";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Record, $Object } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $Stat_, $Stat } from "@package/net/minecraft/stats";

declare module "@package/dev/pandasystems/fallingtrees/api" {
    export class $TreeData$FoodExhaustionModifier {
    }
    export interface $TreeData$FoodExhaustionModifier {
        getExhaustion(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $TreeData$FoodExhaustionModifier}.
     */
    export type $TreeData$FoodExhaustionModifier_ = ((arg0: number) => number);
    export class $TreeType {
        static access$onTreeTick$jd($this: $TreeType_, entity: $TreeEntity): void;
    }
    export interface $TreeType {
        isTreeStem(arg0: $BlockState_): boolean;
        onTreeTick(entity: $TreeEntity): void;
        gatherTreeData(arg0: $BlockPos_, arg1: $Level_, arg2: $Player): $TreeData;
    }
    /**
     * Values that may be interpreted as {@link $TreeType}.
     */
    export type $TreeType_ = RegistryTypes.FallingtreesTreeRegistry;
    export class $TreeData$AwardedStat extends $Record {
        amount(): number;
        copy(stat: $Stat_<never>, amount: number): $TreeData$AwardedStat;
        stat(): $Stat<never>;
        component1(): $Stat<never>;
        component2(): number;
        static copy$default(arg0: $TreeData$AwardedStat_, arg1: $Stat_<any>, arg2: number, arg3: number, arg4: $Object): $TreeData$AwardedStat;
        constructor(stat: $Stat_<never>, amount: number);
    }
    /**
     * Values that may be interpreted as {@link $TreeData$AwardedStat}.
     */
    export type $TreeData$AwardedStat_ = { amount?: number, stat?: $Stat_<never>,  } | [amount?: number, stat?: $Stat_<never>, ];
    export class $TreeData$MiningSpeedModifier {
    }
    export interface $TreeData$MiningSpeedModifier {
        getMiningSpeed(arg0: number): number;
    }
    /**
     * Values that may be interpreted as {@link $TreeData$MiningSpeedModifier}.
     */
    export type $TreeData$MiningSpeedModifier_ = ((arg0: number) => number);
    export class $TreeData extends $Record {
        component3(): $List<$TreeData$AwardedStat>;
        component4(): number;
        component5(): $TreeData$MiningSpeedModifier;
        miningSpeedModifier(): $TreeData$MiningSpeedModifier;
        foodExhaustionModifier(): $TreeData$FoodExhaustionModifier;
        toolDamage(): number;
        awardedStats(): $List<$TreeData$AwardedStat>;
        component6(): $TreeData$FoodExhaustionModifier;
        blocks(): $List<$BlockPos>;
        copy(blocks: $List_<$BlockPos_>, drops: $List_<$ItemStack_>, awardedStats: $List_<$TreeData$AwardedStat_>, toolDamage: number, miningSpeedModifier: $TreeData$MiningSpeedModifier_, foodExhaustionModifier: $TreeData$FoodExhaustionModifier_): $TreeData;
        component1(): $List<$BlockPos>;
        component2(): $List<$ItemStack>;
        static copy$default(arg0: $TreeData_, arg1: $List_<any>, arg2: $List_<any>, arg3: $List_<any>, arg4: number, arg5: $TreeData$MiningSpeedModifier_, arg6: $TreeData$FoodExhaustionModifier_, arg7: number, arg8: $Object): $TreeData;
        drops(): $List<$ItemStack>;
        constructor(blocks: $List_<$BlockPos_>, drops: $List_<$ItemStack_>, awardedStats: $List_<$TreeData$AwardedStat_>, toolDamage: number, miningSpeedModifier: $TreeData$MiningSpeedModifier_, foodExhaustionModifier: $TreeData$FoodExhaustionModifier_);
    }
    /**
     * Values that may be interpreted as {@link $TreeData}.
     */
    export type $TreeData_ = { drops?: $List_<$ItemStack_>, foodExhaustionModifier?: $TreeData$FoodExhaustionModifier_, blocks?: $List_<$BlockPos_>, miningSpeedModifier?: $TreeData$MiningSpeedModifier_, toolDamage?: number, awardedStats?: $List_<$TreeData$AwardedStat_>,  } | [drops?: $List_<$ItemStack_>, foodExhaustionModifier?: $TreeData$FoodExhaustionModifier_, blocks?: $List_<$BlockPos_>, miningSpeedModifier?: $TreeData$MiningSpeedModifier_, toolDamage?: number, awardedStats?: $List_<$TreeData$AwardedStat_>, ];
    export interface $TreeType extends RegistryMarked<RegistryTypes.FallingtreesTreeRegistryTag, RegistryTypes.FallingtreesTreeRegistry> {}
}
