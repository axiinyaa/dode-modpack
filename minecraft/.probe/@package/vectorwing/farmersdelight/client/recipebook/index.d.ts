import { $Codec } from "@package/com/mojang/serialization";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/vectorwing/farmersdelight/client/recipebook" {
    export class $CookingPotRecipeBookTab extends $Enum<$CookingPotRecipeBookTab> implements $StringRepresentable {
        static findByName(arg0: string): $CookingPotRecipeBookTab;
        static values(): $CookingPotRecipeBookTab[];
        static valueOf(arg0: string): $CookingPotRecipeBookTab;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$CookingPotRecipeBookTab>;
        static DRINKS: $CookingPotRecipeBookTab;
        static MISC: $CookingPotRecipeBookTab;
        static MEALS: $CookingPotRecipeBookTab;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CookingPotRecipeBookTab}.
     */
    export type $CookingPotRecipeBookTab_ = "meals" | "drinks" | "misc";
}
