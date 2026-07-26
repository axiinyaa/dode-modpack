import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ChanceResult, $ChanceResult_ } from "@package/vectorwing/farmersdelight/common/crafting/ingredient";
import { $Object } from "@package/java/lang";

declare module "@package/qinomed/kubejsdelight/recipe/wrapper" {
    export class $ChanceResultWrapper {
        static wrap(arg1: $Object): $ChanceResult;
        static of(arg0: $ItemStack_, arg1: number): $ChanceResult;
        static of(arg0: $ChanceResult_): $ChanceResult;
    }
    export interface $ChanceResultWrapper {
    }
}
