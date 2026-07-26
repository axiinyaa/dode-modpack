import { $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Spliterator, $Iterator, $List, $Map, $List_, $Collection } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $HolderSet, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Enum, $Iterable } from "@package/java/lang";
import { $Triplet } from "@package/net/mehvahdjukaar/moonlight/api/misc";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/moonlight/api/fluids" {
    export class $FluidContainerList implements $Iterable<$FluidContainerList$Category> {
        getCategories(): $List<$FluidContainerList$Category>;
        getCategoryFromFilled(arg0: $Item_): ($FluidContainerList$Category) | undefined;
        getCategoryFromEmpty(arg0: $Item_): ($FluidContainerList$Category) | undefined;
        getPossibleFilled(): $Collection<$Item>;
        getFilled(arg0: $Item_): ($Item) | undefined;
        getPossibleEmpty(): $Collection<$Item>;
        iterator(): $Iterator<$FluidContainerList$Category>;
        getEmpty(arg0: $Item_): ($Item) | undefined;
        spliterator(): $Spliterator<$FluidContainerList$Category>;
        forEach(arg0: $Consumer_<$FluidContainerList$Category>): void;
        static CODEC: $Codec<$FluidContainerList>;
        constructor(arg0: $List_<$FluidContainerList$Category>);
        constructor();
        [Symbol.iterator](): Iterator<$FluidContainerList$Category>
        get categories(): $List<$FluidContainerList$Category>;
        get possibleFilled(): $Collection<$Item>;
        get possibleEmpty(): $Collection<$Item>;
    }
    export class $SoftFluid {
        isColored(): boolean;
        isFood(): boolean;
        getContainerList(): $FluidContainerList;
        getEmptyContainer(arg0: $Item_): ($Item) | undefined;
        getTintColor(): number;
        getStillTexture(): $ResourceLocation;
        getFlowingTexture(): $ResourceLocation;
        getTranslatedName(): $Component;
        getLuminosity(): number;
        getFoodProvider(): $FoodProvider;
        getPreservedComponents(): $HolderSet<$DataComponentType<never>>;
        getVanillaFluid(): $Holder<$Fluid>;
        getTintMethod(): $SoftFluid$TintMethod;
        getAverageTextureTintColor(): number;
        static getRenderingData(arg0: $ResourceLocation_): $Triplet<$ResourceLocation, $ResourceLocation, number>;
        static getFluidSpecificAttributes(arg0: $Fluid_): $Pair<number, $Component>;
        getEquivalentFluids(): $HolderSet<$Fluid>;
        getTextureOverride(): $ResourceLocation;
        /**
         * @deprecated
         */
        isEmptyFluid(): boolean;
        getFilledContainer(arg0: $Item_): ($Item) | undefined;
        getEmissivity(): number;
        isEnabled(): boolean;
        isEquivalent(arg0: $Holder_<$Fluid>): boolean;
        afterInit(): void;
        static BOTTLE_COUNT: number;
        isGenerated: boolean;
        static CODEC: $Codec<$SoftFluid>;
        static BUCKET_COUNT: number;
        static HOLDER_CODEC: $Codec<$Holder<$SoftFluid>>;
        static TRANSLATABLE_COMPONENT: $Codec<$Component>;
        static BOWL_COUNT: number;
        static WATER_BUCKET_COUNT: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$SoftFluid>>;
        constructor(arg0: $Holder_<$Fluid>);
        get colored(): boolean;
        get food(): boolean;
        get containerList(): $FluidContainerList;
        get tintColor(): number;
        get stillTexture(): $ResourceLocation;
        get flowingTexture(): $ResourceLocation;
        get translatedName(): $Component;
        get luminosity(): number;
        get foodProvider(): $FoodProvider;
        get preservedComponents(): $HolderSet<$DataComponentType<never>>;
        get vanillaFluid(): $Holder<$Fluid>;
        get tintMethod(): $SoftFluid$TintMethod;
        get averageTextureTintColor(): number;
        get equivalentFluids(): $HolderSet<$Fluid>;
        get textureOverride(): $ResourceLocation;
        get emptyFluid(): boolean;
        get emissivity(): number;
        get enabled(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SoftFluid}.
     */
    export type $SoftFluid_ = RegistryTypes.MoonlightSoftFluid;
    export class $FluidContainerList$Category {
        getFillSound(): $SoundEvent;
        getEmptySound(): $SoundEvent;
        getEmptyContainer(): $Item;
        getFilledItems(): $List<$Item>;
        getFirstFilled(): ($Item) | undefined;
        getCapacity(): number;
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        getAmount(): number;
        static CODEC: $Codec<$FluidContainerList$Category>;
        get fillSound(): $SoundEvent;
        get emptySound(): $SoundEvent;
        get emptyContainer(): $Item;
        get filledItems(): $List<$Item>;
        get firstFilled(): ($Item) | undefined;
        get capacity(): number;
        get empty(): boolean;
        get amount(): number;
    }
    export interface $SoftFluid extends RegistryMarked<RegistryTypes.MoonlightSoftFluidTag, RegistryTypes.MoonlightSoftFluid> {}
    export class $SoftFluid$TintMethod extends $Enum<$SoftFluid$TintMethod> implements $StringRepresentable {
        appliesToFlowing(): boolean;
        appliesToStill(): boolean;
        static values(): $SoftFluid$TintMethod[];
        static valueOf(arg0: string): $SoftFluid$TintMethod;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static FLOWING: $SoftFluid$TintMethod;
        static CODEC: $Codec<$SoftFluid$TintMethod>;
        static STILL_AND_FLOWING: $SoftFluid$TintMethod;
        static NO_TINT: $SoftFluid$TintMethod;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SoftFluid$TintMethod}.
     */
    export type $SoftFluid$TintMethod_ = "no_tint" | "flowing" | "still_and_flowing";
    export class $FoodProvider {
        getFoodItem(): $Item;
        getDivider(): number;
        consume(arg0: $Player, arg1: $Level_, arg2: $Consumer_<$ItemStack>): boolean;
        isEmpty(): boolean;
        static create(arg0: $Item_, arg1: number): $FoodProvider;
        static CODEC: $Codec<$FoodProvider>;
        static CUSTOM_PROVIDERS: $Map<$Item, $FoodProvider>;
        static EMPTY: $FoodProvider;
        get foodItem(): $Item;
        get divider(): number;
        get empty(): boolean;
    }
}
