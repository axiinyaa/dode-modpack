import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";

declare module "@package/immersive_melodies/mixin" {
    export class $MusicTrackerAccessor {
    }
    export interface $MusicTrackerAccessor {
        getCurrentMusic(): $SoundInstance;
        get currentMusic(): $SoundInstance;
    }
    /**
     * Values that may be interpreted as {@link $MusicTrackerAccessor}.
     */
    export type $MusicTrackerAccessor_ = (() => $SoundInstance);
}
