import { $LevelStorageSource$LevelDirectory_, $LevelStorageSource$LevelDirectory, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
export * as client from "@package/me/ichun/mods/ichunutil/mixin/client";

declare module "@package/me/ichun/mods/ichunutil/mixin" {
    export class $MinecraftServerAccessorMixin {
    }
    export interface $MinecraftServerAccessorMixin {
        getStorageSource(): $LevelStorageSource$LevelStorageAccess;
        get storageSource(): $LevelStorageSource$LevelStorageAccess;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftServerAccessorMixin}.
     */
    export type $MinecraftServerAccessorMixin_ = (() => $LevelStorageSource$LevelStorageAccess);
    export class $LevelStorageAccessAccessorMixin {
    }
    export interface $LevelStorageAccessAccessorMixin {
        getLevelDirectory(): $LevelStorageSource$LevelDirectory;
        get levelDirectory(): $LevelStorageSource$LevelDirectory;
    }
    /**
     * Values that may be interpreted as {@link $LevelStorageAccessAccessorMixin}.
     */
    export type $LevelStorageAccessAccessorMixin_ = (() => $LevelStorageSource$LevelDirectory_);
}
