import { $SoundSource } from "@package/net/minecraft/sounds";
import { $WeighedSoundEvents, $AudioStream, $SoundBufferLibrary, $SoundManager } from "@package/net/minecraft/client/sounds";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Channel } from "@package/com/mojang/blaze3d/audio";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundInstance$Attenuation, $Sound, $TickableSoundInstance, $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";

declare module "@package/dev/ryanhcode/sable/sound" {
    export class $SoundInstanceDelegated {
    }
    export interface $SoundInstanceDelegated {
        setDelegate(arg0: $MovingSoundInstanceDelegate): void;
        getDelegate(): $MovingSoundInstanceDelegate;
    }
    export class $MovingSoundInstanceDelegate implements $SoundInstance, $TickableSoundInstance {
        isLooping(): boolean;
        getAttenuation(): $SoundInstance$Attenuation;
        canStartSilent(): boolean;
        canPlaySound(): boolean;
        tickWithChannel(arg0: $Channel): void;
        getDelay(): number;
        getY(): number;
        tick(): void;
        getSource(): $SoundSource;
        getStream(arg0: $SoundBufferLibrary, arg1: $Sound, arg2: boolean): $CompletableFuture<any>;
        getLocation(): $ResourceLocation;
        resolve(arg0: $SoundManager): $WeighedSoundEvents;
        isRelative(): boolean;
        unload(arg0: $Channel): void;
        isStopped(): boolean;
        getX(): number;
        getZ(): number;
        getVolume(): number;
        getPitch(): number;
        getSound(): $Sound;
        getAudioStream(arg0: $SoundBufferLibrary, arg1: $ResourceLocation_, arg2: boolean): $CompletableFuture<$AudioStream>;
        instance: $SoundInstance;
        constructor(arg0: $SoundInstance, arg1: $SubLevel);
        get looping(): boolean;
        get attenuation(): $SoundInstance$Attenuation;
        get delay(): number;
        get y(): number;
        get source(): $SoundSource;
        get location(): $ResourceLocation;
        get relative(): boolean;
        get stopped(): boolean;
        get x(): number;
        get z(): number;
        get volume(): number;
        get pitch(): number;
        get sound(): $Sound;
    }
}
