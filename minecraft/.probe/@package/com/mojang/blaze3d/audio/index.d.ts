import { $ChannelAccessor as $ChannelAccessor$1 } from "@package/dev/ryanhcode/sable/mixin/sublevel_sounds";
import { $AudioStream } from "@package/net/minecraft/client/sounds";
import { $IChannelDuck } from "@package/com/yungnickyoung/minecraft/ribbits/mixin/interfaces/client";
import { $AudioFormat } from "@package/javax/sound/sampled";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $ChannelAccessor } from "@package/com/sonicether/soundphysics/mixin";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $OptionalInt } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $SoundBufferAccessor } from "@package/com/yungnickyoung/minecraft/ribbits/mixin/mixins/client/accessor";

declare module "@package/com/mojang/blaze3d/audio" {
    export class $Library$CountingChannelPool implements $Library$ChannelPool {
    }
    export class $ListenerTransform extends $Record {
        up(): $Vec3;
        position(): $Vec3;
        right(): $Vec3;
        forward(): $Vec3;
        static INITIAL: $ListenerTransform;
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $ListenerTransform}.
     */
    export type $ListenerTransform_ = { position?: $Vec3_, forward?: $Vec3_, up?: $Vec3_,  } | [position?: $Vec3_, forward?: $Vec3_, up?: $Vec3_, ];
    export class $Library {
        /**
         * @return A list of strings representing the names of available sound devices, or an empty list if no devices are available.
         */
        getAvailableSoundDevices(): $List<string>;
        /**
         * @return the name of the default audio device, or `null` if it cannot be determined
         */
        static getDefaultDeviceName(): string;
        /**
         * Acquires a sound channel based on the given mode.
         */
        acquireChannel(pool: $Library$Pool_): $Channel;
        /**
         * Releases a channel.
         * @return whether the channel was successfully released
         */
        releaseChannel(channel: $Channel): void;
        /**
         * Checks if the default audio device has changed since the last time this method was called.
         * 
         * If the default device has changed, updates the stored default device name accordingly.
         * @return `true` if the default device has changed since the last time this method was called, `false` otherwise
         */
        isCurrentDeviceDisconnected(): boolean;
        /**
         * Checks if the default audio device has changed since the last time this method was called.
         * 
         * If the default device has changed, updates the stored default device name accordingly.
         * @return `true` if the default device has changed since the last time this method was called, `false` otherwise
         */
        hasDefaultDeviceChanged(): boolean;
        /**
         * @return the name of the default audio device, or `null` if it cannot be determined
         */
        getCurrentDeviceName(): string;
        /**
         * @return the name of the default audio device, or `null` if it cannot be determined
         */
        getDebugString(): string;
        getListener(): $Listener;
        /**
         * Initializes the OpenAL device and context.
         * @throws IllegalStateException if an error occurs during initialization.
         */
        init(deviceSpecifier: string | null, enableHrtf: boolean): void;
        /**
         * Cleans up all resources used by the library.
         */
        cleanup(): void;
        constructor();
        get availableSoundDevices(): $List<string>;
        static get defaultDeviceName(): string;
        get currentDeviceDisconnected(): boolean;
        get currentDeviceName(): string;
        get debugString(): string;
        get listener(): $Listener;
    }
    export class $Library$Pool extends $Enum<$Library$Pool> {
        static values(): $Library$Pool[];
        static valueOf(arg0: string): $Library$Pool;
        static STREAMING: $Library$Pool;
        static STATIC: $Library$Pool;
    }
    /**
     * Values that may be interpreted as {@link $Library$Pool}.
     */
    export type $Library$Pool_ = "static" | "streaming";
    export class $Library$ChannelPool {
    }
    export interface $Library$ChannelPool {
    }
    /**
     * The Listener class represents the listener in a 3D audio environment.
     * 
     * The listener's position and orientation determine how sounds are perceived by the listener.
     */
    export class $Listener {
        /**
         * Sets the listener's gain.
         */
        setGain(gain: number): void;
        /**
         * @return the current gain value of the listener
         */
        getGain(): number;
        getTransform(): $ListenerTransform;
        setTransform(transform: $ListenerTransform_): void;
        /**
         * Resets the listener's position and orientation to default values.
         */
        reset(): void;
        constructor();
    }
    /**
     * The OpenALUtil class provides utility functions for working with OpenAL audio.
     */
    export class $OpenAlUtil {
        constructor();
    }
    /**
     * Represents an OpenAL audio channel.
     */
    export class $Channel implements $ChannelAccessor$1, $IChannelDuck, $ChannelAccessor {
        /**
         * Sets linear attenuation for the audio channel.
         */
        setPitch(linearAttenuation: number): void;
        /**
         * @return `true` if the audio channel is currently playing, `false` otherwise
         */
        playing(): boolean;
        /**
         * Attaches a buffer stream to the audio channel.
         */
        attachBufferStream(stream: $AudioStream): void;
        /**
         * Attaches a static buffer to the audio channel.
         */
        attachStaticBuffer(buffer: $SoundBuffer): void;
        /**
         * Sets linear attenuation for the audio channel.
         */
        linearAttenuation(linearAttenuation: number): void;
        /**
         * Stops the audio channel and releases resources.
         */
        disableAttenuation(): void;
        /**
         * Sets whether the audio channel should loop.
         */
        setLooping(looping: boolean): void;
        /**
         * Sets the position of the audio channel.
         */
        setSelfPosition(source: $Vec3_): void;
        ribbits$attachStaticBufferWithByteOffset(arg0: $SoundInstance, arg1: $SoundBuffer, arg2: number): void;
        ribbits$attachStaticBufferWithTickOffset(arg0: $SoundInstance, arg1: $SoundBuffer, arg2: number): void;
        /**
         * Stops the audio channel and releases resources.
         */
        updateStream(): void;
        /**
         * Stops the audio channel and releases resources.
         */
        play(): void;
        /**
         * Stops the audio channel and releases resources.
         */
        unpause(): void;
        /**
         * Sets whether the audio channel should loop.
         */
        setRelative(looping: boolean): void;
        /**
         * Sets linear attenuation for the audio channel.
         */
        setVolume(linearAttenuation: number): void;
        /**
         * Stops the audio channel and releases resources.
         */
        stop(): void;
        /**
         * Stops the audio channel and releases resources.
         */
        destroy(): void;
        /**
         * @return `true` if the audio channel is currently playing, `false` otherwise
         */
        stopped(): boolean;
        /**
         * Stops the audio channel and releases resources.
         */
        pause(): void;
        /**
         * @return the state of the audio channel
         */
        getSource(): number;
        static BUFFER_DURATION_SECONDS: number;
        set pitch(value: number);
        set looping(value: boolean);
        set selfPosition(value: $Vec3_);
        set relative(value: boolean);
        set volume(value: number);
        get source(): number;
    }
    /**
     * The SoundBuffer class represents an audio buffer containing audio data in a particular format.
     * 
     * The audio data can be used to create an OpenAL buffer, which can be played in a 3D audio environment.
     */
    export class $SoundBuffer implements $SoundBufferAccessor {
        /**
         * Returns an OptionalInt containing the OpenAL buffer handle for this SoundBuffer.
         * If the buffer has not been created yet, creates the buffer and returns the handle.
         * If the buffer cannot be created, returns an empty OptionalInt.
         * @return An OptionalInt containing the OpenAL buffer handle, or an empty OptionalInt if the buffer cannot be created.
         */
        releaseAlBuffer(): $OptionalInt;
        /**
         * Deletes the OpenAL buffer associated with this SoundBuffer, if it exists.
         */
        discardAlBuffer(): void;
        /**
         * Returns an OptionalInt containing the OpenAL buffer handle for this SoundBuffer.
         * If the buffer has not been created yet, creates the buffer and returns the handle.
         * If the buffer cannot be created, returns an empty OptionalInt.
         * @return An OptionalInt containing the OpenAL buffer handle, or an empty OptionalInt if the buffer cannot be created.
         */
        callGetAlBuffer(): $OptionalInt;
        constructor(data: $ByteBuffer, format: $AudioFormat);
    }
}
