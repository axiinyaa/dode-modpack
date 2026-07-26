import { $TagKey } from "@package/net/minecraft/tags";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $SimpleJsonResourceReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $List, $Map_, $Map, $Set, $Set_, $List_ } from "@package/java/util";

declare module "@package/dev/propulsionteam/propulsionsimulated/content/thruster" {
    export class $FluidThrusterProperties extends $Record {
        thrustMultiplier(): number;
        consumptionMultiplier(): number;
        overrideTextures(): $List<$ResourceLocation>;
        overrideColor(): number;
        useFluidColor(): boolean;
        particleType(): $ThrusterParticleType;
        static decode(arg0: $FriendlyByteBuf): $FluidThrusterProperties;
        encode(arg0: $FriendlyByteBuf): void;
        static DEFAULT: $FluidThrusterProperties;
        constructor(thrustMultiplier: number, consumptionMultiplier: number, particleType: $ThrusterParticleType_, overrideTextures: $List_<$ResourceLocation_>, overrideColor: number, useFluidColor: boolean);
    }
    /**
     * Values that may be interpreted as {@link $FluidThrusterProperties}.
     */
    export type $FluidThrusterProperties_ = { thrustMultiplier?: number, useFluidColor?: boolean, overrideColor?: number, overrideTextures?: $List_<$ResourceLocation_>, particleType?: $ThrusterParticleType_, consumptionMultiplier?: number,  } | [thrustMultiplier?: number, useFluidColor?: boolean, overrideColor?: number, overrideTextures?: $List_<$ResourceLocation_>, particleType?: $ThrusterParticleType_, consumptionMultiplier?: number, ];
    export class $ThrusterParticleType extends $Enum<$ThrusterParticleType> {
        createParticleOptions(): $ParticleOptions;
        createParticleOptions(arg0: $ItemThrusterProperties_): $ParticleOptions;
        createParticleOptions(arg0: $FluidThrusterProperties_): $ParticleOptions;
        static values(): $ThrusterParticleType[];
        static valueOf(arg0: string): $ThrusterParticleType;
        static fromString(arg0: string): $ThrusterParticleType;
        serializedName(): string;
        static PLASMA: $ThrusterParticleType;
        static CODEC: $Codec<$ThrusterParticleType>;
        static PLUME: $ThrusterParticleType;
        static NONE: $ThrusterParticleType;
    }
    /**
     * Values that may be interpreted as {@link $ThrusterParticleType}.
     */
    export type $ThrusterParticleType_ = "none" | "plume" | "plasma";
    export class $ItemThrusterProperties extends $Record {
        thrustMultiplier(): number;
        consumptionMultiplier(): number;
        overrideTextures(): $List<$ResourceLocation>;
        overrideColor(): number;
        useItemColor(): boolean;
        particleType(): $ThrusterParticleType;
        static decode(arg0: $FriendlyByteBuf): $ItemThrusterProperties;
        encode(arg0: $FriendlyByteBuf): void;
        static DEFAULT: $ItemThrusterProperties;
        constructor(thrustMultiplier: number, consumptionMultiplier: number, particleType: $ThrusterParticleType_, overrideTextures: $List_<$ResourceLocation_>, overrideColor: number, useItemColor: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ItemThrusterProperties}.
     */
    export type $ItemThrusterProperties_ = { thrustMultiplier?: number, overrideTextures?: $List_<$ResourceLocation_>, overrideColor?: number, particleType?: $ThrusterParticleType_, useItemColor?: boolean, consumptionMultiplier?: number,  } | [thrustMultiplier?: number, overrideTextures?: $List_<$ResourceLocation_>, overrideColor?: number, particleType?: $ThrusterParticleType_, useItemColor?: boolean, consumptionMultiplier?: number, ];
    export class $ThrusterFuelManager extends $SimpleJsonResourceReloadListener {
        static getFuelPropertiesMap(): $Map<$Fluid, $FluidThrusterProperties>;
        static getRemovedFuelIds(): $Set<$ResourceLocation>;
        static registerScriptedFuel(arg0: string, arg1: $Map_<string, $Object>): boolean;
        static updateClient(arg0: $Map_<$ResourceLocation_, $FluidThrusterProperties_>, arg1: $Set_<$ResourceLocation_>): void;
        static clearScriptedFuels(): void;
        static overrideFuel(arg0: string, arg1: $Map_<string, $Object>): boolean;
        static removeFuel(arg0: string): boolean;
        static rebuildThrusterFuelsAfterCommonConfigReload(): void;
        static getProperties(arg0: $Fluid_): $FluidThrusterProperties;
        static getEfficiency(arg0: $Fluid_): number;
        static DIRECTORY: string;
        constructor();
        static get fuelPropertiesMap(): $Map<$Fluid, $FluidThrusterProperties>;
        static get removedFuelIds(): $Set<$ResourceLocation>;
    }
    export class $SolidThrusterFuelDefinition extends $Record {
        itemId(): ($ResourceLocation) | undefined;
        getItemTag(): $TagKey<$Item>;
        thrustMultiplier(): number;
        consumptionMultiplier(): number;
        overrideTextures(): $List<$ResourceLocation>;
        overrideColor(): (number) | undefined;
        useItemColor(): boolean;
        isItemEntry(): boolean;
        isTagEntry(): boolean;
        resolveBurnTicks(arg0: $ItemStack_): number;
        itemTagId(): ($ResourceLocation) | undefined;
        requiredMod(): (string) | undefined;
        burnTicks(): (number) | undefined;
        getItem(): $Item;
        particle(): $ThrusterParticleType;
        static CODEC: $Codec<$SolidThrusterFuelDefinition>;
        constructor(itemId: ($ResourceLocation_) | undefined, itemTagId: ($ResourceLocation_) | undefined, thrustMultiplier: number, consumptionMultiplier: number, burnTicks: (number) | undefined, particle: $ThrusterParticleType_, overrideTextures: $List_<$ResourceLocation_>, overrideColor: (number) | undefined, useItemColor: boolean, requiredMod: (string) | undefined);
        get itemTag(): $TagKey<$Item>;
        get itemEntry(): boolean;
        get tagEntry(): boolean;
        get item(): $Item;
    }
    /**
     * Values that may be interpreted as {@link $SolidThrusterFuelDefinition}.
     */
    export type $SolidThrusterFuelDefinition_ = { useItemColor?: boolean, burnTicks?: (number) | undefined, itemTagId?: ($ResourceLocation_) | undefined, itemId?: ($ResourceLocation_) | undefined, particle?: $ThrusterParticleType_, overrideTextures?: $List_<$ResourceLocation_>, thrustMultiplier?: number, overrideColor?: (number) | undefined, consumptionMultiplier?: number, requiredMod?: (string) | undefined,  } | [useItemColor?: boolean, burnTicks?: (number) | undefined, itemTagId?: ($ResourceLocation_) | undefined, itemId?: ($ResourceLocation_) | undefined, particle?: $ThrusterParticleType_, overrideTextures?: $List_<$ResourceLocation_>, thrustMultiplier?: number, overrideColor?: (number) | undefined, consumptionMultiplier?: number, requiredMod?: (string) | undefined, ];
    export class $SolidThrusterFuelManager extends $SimpleJsonResourceReloadListener {
        static getFuelPropertiesMap(): $Map<$Item, $ItemThrusterProperties>;
        static getRemovedFuelIds(): $Set<$ResourceLocation>;
        static registerScriptedFuel(arg0: string, arg1: $Map_<string, $Object>): boolean;
        static findDefinitionForStack(arg0: $ItemStack_): $SolidThrusterFuelDefinition;
        static resolveBurnTicks(arg0: $ItemStack_): number;
        static rebuildAfterCommonConfigReload(): void;
        static updateClient(arg0: $Map_<$ResourceLocation_, $ItemThrusterProperties_>, arg1: $Set_<$ResourceLocation_>): void;
        static clearScriptedFuels(): void;
        static overrideFuel(arg0: string, arg1: $Map_<string, $Object>): boolean;
        static removeFuel(arg0: string): boolean;
        static getProperties(arg0: $ItemStack_): $ItemThrusterProperties;
        static getProperties(arg0: $Item_): $ItemThrusterProperties;
        static getEfficiency(arg0: $Item_): number;
        static DIRECTORY: string;
        constructor();
        static get fuelPropertiesMap(): $Map<$Item, $ItemThrusterProperties>;
        static get removedFuelIds(): $Set<$ResourceLocation>;
    }
}
