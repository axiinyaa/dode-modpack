import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $SplashManagerAccessor } from "@package/com/teamabnormals/blueprint/client/screen/splash";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $User } from "@package/net/minecraft/client";
import { $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_, $SimplePreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $List, $UUID_, $Set_, $List_ } from "@package/java/util";
import { $PaintingVariant_ } from "@package/net/minecraft/world/entity/decoration";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Supplier } from "@package/java/util/function";
import { $Holder_ } from "@package/net/minecraft/core";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $VanillaPackResources } from "@package/net/minecraft/server/packs";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $MapDecoration_ } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TextureAtlasSprite, $HttpTexture, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";
import { $Property_ } from "@package/com/mojang/authlib/properties";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $SplashRenderer } from "@package/net/minecraft/client/gui/components";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Splitter } from "@package/com/google/common/base";
import { $TextureAtlasExtension } from "@package/foundry/veil/ext";
import { $BuiltInPackSource, $KnownPack } from "@package/net/minecraft/server/packs/repository";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MinecraftProfileTexture$Type_, $MinecraftProfileTexture, $MinecraftProfileTextures_, $MinecraftSessionService } from "@package/com/mojang/authlib/minecraft";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
export * as model from "@package/net/minecraft/client/resources/model";
export * as metadata from "@package/net/minecraft/client/resources/metadata";
export * as sounds from "@package/net/minecraft/client/resources/sounds";
export * as server from "@package/net/minecraft/client/resources/server";
export * as language from "@package/net/minecraft/client/resources/language";

declare module "@package/net/minecraft/client/resources" {
    export class $PlayerSkin$Model extends $Enum<$PlayerSkin$Model> {
        static values(): $PlayerSkin$Model[];
        static valueOf(name: string): $PlayerSkin$Model;
        id(): string;
        static byName(name: string | null): $PlayerSkin$Model;
        static SLIM: $PlayerSkin$Model;
        static WIDE: $PlayerSkin$Model;
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkin$Model}.
     */
    export type $PlayerSkin$Model_ = "slim" | "wide";
    export class $SplashManager extends $SimplePreparableReloadListener<$List<string>> implements $SplashManagerAccessor {
        getSplashes(): $List<any>;
        apply(object: $List_<string>, resourceManager: $ResourceManager, profiler: $ProfilerFiller): void;
        /**
         * Performs any reloading that can be done off-thread, such as file IO
         */
        prepare(resourceManager: $ResourceManager, profiler: $ProfilerFiller): $List<string>;
        getSplash(): $SplashRenderer;
        static SPLASHES_LOCATION: $ResourceLocation;
        constructor(user: $User);
        get splashes(): $List<any>;
        get splash(): $SplashRenderer;
    }
    export class $GrassColorReloadListener extends $SimplePreparableReloadListener<number[]> {
        apply(object: number[], resourceManager: $ResourceManager, profiler: $ProfilerFiller): void;
        /**
         * Performs any reloading that can be done off-thread, such as file IO
         */
        prepare(resourceManager: $ResourceManager, profiler: $ProfilerFiller): number[];
        constructor();
    }
    export class $TextureAtlasHolder implements $PreparableReloadListener, $AutoCloseable, $TextureAtlasExtension {
        veil$hasTexture(arg0: $ResourceLocation_): boolean;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        close(): void;
        /**
         * Gets a sprite associated with the passed resource location.
         */
        getSprite(location: $ResourceLocation_): $TextureAtlasSprite;
        getName(): string;
        textureAtlas: $TextureAtlas;
        constructor(textureManager: $TextureManager, textureAtlasLocation: $ResourceLocation_, atlasInfoLocation: $ResourceLocation_);
        constructor(textureManager: $TextureManager, textureAtlasLocation: $ResourceLocation_, atlasInfoLocation: $ResourceLocation_, metadataSections: $Set_<$MetadataSectionSerializer<never>>);
        get name(): string;
    }
    export class $IndexedAssetSource {
        static createIndexFs(assetDirectory: $Path_, assetIndex: string): $Path;
        static PATH_SPLITTER: $Splitter;
        constructor();
    }
    export class $SkinManager$TextureCache {
        handler$zop000$chat_heads$chatheads$rememberTextureLocation(cir: $CallbackInfoReturnable<any>, id: $ResourceLocation_, httpTexture: $HttpTexture): void;
        getOrLoad(texture: $MinecraftProfileTexture): $CompletableFuture<$ResourceLocation>;
        textureManager: $TextureManager;
        constructor(textureManager: $TextureManager, root: $Path_, type: $MinecraftProfileTexture$Type_);
    }
    export class $MobEffectTextureManager extends $TextureAtlasHolder {
        get(effect: $Holder_<$MobEffect>): $TextureAtlasSprite;
        textureAtlas: $TextureAtlas;
        constructor(textureManager: $TextureManager);
    }
    export class $PaintingTextureManager extends $TextureAtlasHolder {
        getBackSprite(): $TextureAtlasSprite;
        get(paintingVariant: $PaintingVariant_): $TextureAtlasSprite;
        textureAtlas: $TextureAtlas;
        constructor(textureManager: $TextureManager);
        get backSprite(): $TextureAtlasSprite;
    }
    export class $FoliageColorReloadListener extends $SimplePreparableReloadListener<number[]> {
        apply(object: number[], resourceManager: $ResourceManager, profiler: $ProfilerFiller): void;
        /**
         * Performs any reloading that can be done off-thread, such as file IO
         */
        prepare(resourceManager: $ResourceManager, profiler: $ProfilerFiller): number[];
        constructor();
    }
    export class $LegacyStuffWrapper {
        /**
         * @deprecated
         */
        static getPixels(manager: $ResourceManager, location: $ResourceLocation_): number[];
        constructor();
    }
    export class $MapDecorationTextureManager extends $TextureAtlasHolder {
        get(mapDecoration: $MapDecoration_): $TextureAtlasSprite;
        textureAtlas: $TextureAtlas;
        constructor(textureManager: $TextureManager);
    }
    export class $SkinManager$CacheKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SkinManager$CacheKey}.
     */
    export type $SkinManager$CacheKey_ = { profileId?: $UUID_, packedTextures?: $Property_,  } | [profileId?: $UUID_, packedTextures?: $Property_, ];
    export class $DefaultPlayerSkin {
        static getDefaultTexture(): $ResourceLocation;
        static get(uuid: $UUID_): $PlayerSkin;
        static get(profile: $GameProfile): $PlayerSkin;
        constructor();
        static get defaultTexture(): $ResourceLocation;
    }
    export class $PlayerSkin extends $Record {
        elytraTexture(): $ResourceLocation;
        capeTexture(): $ResourceLocation;
        textureUrl(): string;
        texture(): $ResourceLocation;
        secure(): boolean;
        model(): $PlayerSkin$Model;
        constructor(arg0: $ResourceLocation_, arg1: string | null, arg2: $ResourceLocation_ | null, arg3: $ResourceLocation_ | null, arg4: $PlayerSkin$Model_, arg5: boolean);
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkin}.
     */
    export type $PlayerSkin_ = { model?: $PlayerSkin$Model_, secure?: boolean, textureUrl?: string, texture?: $ResourceLocation_, capeTexture?: $ResourceLocation_, elytraTexture?: $ResourceLocation_,  } | [model?: $PlayerSkin$Model_, secure?: boolean, textureUrl?: string, texture?: $ResourceLocation_, capeTexture?: $ResourceLocation_, elytraTexture?: $ResourceLocation_, ];
    export class $SkinManager {
        lookupInsecure(profile: $GameProfile): $Supplier<$PlayerSkin>;
        getInsecureSkin(profile: $GameProfile): $PlayerSkin;
        registerTextures(uuid: $UUID_, textures: $MinecraftProfileTextures_): $CompletableFuture<$PlayerSkin>;
        getOrLoad(profile: $GameProfile): $CompletableFuture<$PlayerSkin>;
        skinTextures: $SkinManager$TextureCache;
        static LOGGER: $Logger;
        constructor(textureManager: $TextureManager, root: $Path_, sessionService: $MinecraftSessionService, executor: $Executor_);
    }
    export class $ClientPackSource extends $BuiltInPackSource {
        static createVanillaPackSource(assetIndex: $Path_): $VanillaPackResources;
        static HIGH_CONTRAST_PACK: string;
        static VANILLA_ID: string;
        static CORE_PACK_INFO: $KnownPack;
        constructor(assetIndex: $Path_, validator: $DirectoryValidator);
    }
}
