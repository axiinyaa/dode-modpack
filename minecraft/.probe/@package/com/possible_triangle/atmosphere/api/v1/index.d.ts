import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Biome$Precipitation_ } from "@package/net/minecraft/world/level/biome";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/possible_triangle/atmosphere/api/v1" {
    export class $WeatherCondition extends $Record {
        static from(arg0: $Biome$Precipitation_): $ResourceKey<$WeatherCondition>;
        precipitation(): boolean;
        static RAIN: $ResourceKey<$WeatherCondition>;
        static CODEC: $Codec<$WeatherCondition>;
        static SNOW: $ResourceKey<$WeatherCondition>;
        static THUNDER_STORM: $ResourceKey<$WeatherCondition>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $WeatherCondition>;
        static SUNNY: $ResourceKey<$WeatherCondition>;
        constructor(precipitation: boolean);
    }
    /**
     * Values that may be interpreted as {@link $WeatherCondition}.
     */
    export type $WeatherCondition_ = RegistryTypes.AtmosphereWeatherCondition | { precipitation?: boolean,  } | [precipitation?: boolean, ];
    export interface $WeatherCondition extends RegistryMarked<RegistryTypes.AtmosphereWeatherConditionTag, RegistryTypes.AtmosphereWeatherCondition> {}
}
