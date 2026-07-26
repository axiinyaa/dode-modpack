import { $WorldStem_ } from "@package/net/minecraft/server";
import { $LevelRenderer, $GameRenderer, $RenderBuffers, $GpuWarnlistManager } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity, $HumanoidArm } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SimplePreparableReloadListener, $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $IntegratedServer } from "@package/net/minecraft/client/server";
import { $KeyBindingAccessor as $KeyBindingAccessor$1 } from "@package/net/fabricmc/fabric/mixin/event/interaction/client";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $ScheduledEvents$Callback_, $ScheduledEvents$ScheduledEvent, $ScheduledEvents, $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $Proxy } from "@package/java/net";
import { $Connection } from "@package/net/minecraft/network";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $CameraZoomExtension } from "@package/dev/ryanhcode/sable/mixinterface/camera/camera_zoom";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $MinecraftClientAccessor as $MinecraftClientAccessor$1 } from "@package/traben/entity_model_features/mixin/mixins/accessor";
import { $TimerAccessor as $TimerAccessor$1 } from "@package/net/createmod/ponder/mixin/accessor";
import { $AccessorKeyMapping } from "@package/com/railwayteam/railways/mixin/conductor_possession";
import { $HeadRenderable } from "@package/dzwdz/chat_heads/mixininterface";
import { $MessageSignature_, $Component_, $MessageSignature, $FormattedText, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $CameraAccessor as $CameraAccessor$1 } from "@package/com/zigythebird/playeranim/mixin";
import { $ChatListener } from "@package/net/minecraft/client/multiplayer/chat";
import { $RecipeBookCategoriesAccessor } from "@package/org/sinytra/connector/mod/mixin/recipebook";
import { $LevelStorageSource, $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $DownloadedPackSource } from "@package/net/minecraft/client/resources/server";
import { $FloatUnaryOperator_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $SkinManager, $MapDecorationTextureManager, $PaintingTextureManager, $SplashManager, $MobEffectTextureManager } from "@package/net/minecraft/client/resources";
import { $ReentrantBlockableEventLoop } from "@package/net/minecraft/util/thread";
import { $RecipeBook } from "@package/net/minecraft/stats";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
import { $KeyModifier, $KeyModifier_, $IKeyConflictContext } from "@package/net/neoforged/neoforge/client/settings";
import { $IWorldMapMinecraftClient } from "@package/xaero/map/core";
import { $GameConfig$QuickPlayData, $SilentInitException, $GameConfig$QuickPlayData_, $GameConfig } from "@package/net/minecraft/client/main";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $KeyBindingAccessor } from "@package/net/fabricmc/fabric/mixin/client/keybinding";
import { $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $TimerAccessor, $MinecraftAccessor, $MouseHandlerAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $RealmsDataFetcher } from "@package/com/mojang/realmsclient/gui";
import { $UUID_, $Map, $TimerTask, $List, $Map_, $List_, $Collection, $Locale, $Set, $UUID } from "@package/java/util";
import { $RealmsClient } from "@package/com/mojang/realmsclient/client";
import { $KeyMappingAccessor as $KeyMappingAccessor$1, $MouseHandlerAccessor as $MouseHandlerAccessor$1 } from "@package/net/blay09/mods/balm/mixin";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $VanillaWidgetComponent } from "@package/io/wispforest/owo/ui/component";
import { $TextureAtlasSprite, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $FontManager } from "@package/net/minecraft/client/gui/font";
import { $Throwable, $Runnable, $Enum, $Comparable, $Thread, $Iterable_, $Record, $AutoCloseable, $Object } from "@package/java/lang";
import { $HeadData_, $HeadData } from "@package/dzwdz/chat_heads";
import { $File_, $File } from "@package/java/io";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $EntityRenderDispatcher, $ItemRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $FogType } from "@package/net/minecraft/world/level/material";
import { $ToastComponent } from "@package/net/minecraft/client/gui/components/toasts";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $CycleButton$ValueListSupplier, $DebugScreenOverlay, $Tooltip, $AbstractWidget, $AbstractOptionSliderButton } from "@package/net/minecraft/client/gui/components";
import { $Hotbar } from "@package/net/minecraft/client/player/inventory";
import { $TemporalAmount_ } from "@package/java/time/temporal";
import { $Narrator } from "@package/com/mojang/text2speech";
import { $IXaeroMinimapMinecraftClient } from "@package/xaero/common/core";
import { $CameraWaterOcclusionExtension } from "@package/dev/ryanhcode/sable/mixinterface/water_occlusion";
import { $Screen, $Overlay, $ReceivingLevelScreen$Reason_ } from "@package/net/minecraft/client/gui/screens";
import { $MinecraftClientAccessor as $MinecraftClientAccessor$2 } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $KeyMappingAccessor } from "@package/net/blay09/mods/kuma/mixin";
import { $MinecraftClientAccessor } from "@package/mod/crend/libbamboo/mixin";
import { $KeyMappingsAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $DirectoryValidator } from "@package/net/minecraft/world/level/validation";
import { $Codec } from "@package/com/mojang/serialization";
import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $RecipeCollection } from "@package/net/minecraft/client/gui/screens/recipebook";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $ByteBuffer } from "@package/java/nio";
import { $OptionInstanceAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $FormattedCharSequence, $OptionEnum, $FormattedCharSequence_, $StringRepresentable, $FormattedCharSink, $ModCheck, $SignatureValidator } from "@package/net/minecraft/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $ClientLevel, $ServerData, $ProfileKeyPairManager, $MultiPlayerGameMode, $ClientPacketListener } from "@package/net/minecraft/client/multiplayer";
import { $WorldOpenFlows } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $CrashReport } from "@package/net/minecraft";
import { $SoundSource_, $Music } from "@package/net/minecraft/sounds";
import { $SoundManager, $MusicManager } from "@package/net/minecraft/client/sounds";
import { $Tutorial, $TutorialSteps } from "@package/net/minecraft/client/tutorial";
import { $IMinecraftExtension, $IKeyMappingExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $PackResources, $VanillaPackResources } from "@package/net/minecraft/server/packs";
import { $RecipeBookType_ } from "@package/net/minecraft/world/inventory";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $ReportEnvironment_, $ReportingContext } from "@package/net/minecraft/client/multiplayer/chat/report";
import { $PlayerModelPart_, $ChatVisiblity } from "@package/net/minecraft/world/entity/player";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $KeyMappingInvoker } from "@package/dev/simulated_team/simulated/mixin/hold_interaction";
import { $LanguageManager } from "@package/net/minecraft/client/resources/language";
import { $MinecraftClientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3, $Vec3_, $HitResult } from "@package/net/minecraft/world/phys";
import { $MinecraftSessionService, $BanDetails } from "@package/com/mojang/authlib/minecraft";
import { $AccessKeyMapping } from "@package/com/blamejared/controlling/mixin";
import { $Gson } from "@package/com/google/gson";
import { $TimestampedMessageLine } from "@package/com/ezzenix/chatanimation/util";
import { $DebugRenderer } from "@package/net/minecraft/client/renderer/debug";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Supplier_, $Function, $BiConsumer_, $DoubleFunction_, $BooleanSupplier_, $Supplier, $Consumer_, $IntSupplier_, $ToDoubleFunction_, $IntSupplier, $Function_, $BooleanSupplier } from "@package/java/util/function";
import { $Object2BooleanFunction_ } from "@package/it/unimi/dsi/fastutil/objects";
import { $ClientInformation } from "@package/net/minecraft/server/level";
import { $Path_, $Path } from "@package/java/nio/file";
import { $BlockColors } from "@package/net/minecraft/client/color/block";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $Logger } from "@package/org/slf4j";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $CameraAccessor } from "@package/dev/kosmx/playerAnim/mixin/firstPerson";
import { $WindowEventHandler, $InputConstants$Type_, $InputConstants$Key, $NativeImage, $Window } from "@package/com/mojang/blaze3d/platform";
import { $MinecraftAccessor as $MinecraftAccessor$1 } from "@package/fuzs/proplacer/mixin/client/accessor";
import { $ClientTelemetryManager } from "@package/net/minecraft/client/telemetry";
import { $QuickPlayLog } from "@package/net/minecraft/client/quickplay";
import { $GuiGraphics, $Gui, $Font, $GuiSpriteManager } from "@package/net/minecraft/client/gui";
import { $PlayerSocialManager } from "@package/net/minecraft/client/gui/screens/social";
export * as resources from "@package/net/minecraft/client/resources";
export * as renderer from "@package/net/minecraft/client/renderer";
export * as gui from "@package/net/minecraft/client/gui";
export * as particle from "@package/net/minecraft/client/particle";
export * as telemetry from "@package/net/minecraft/client/telemetry";
export * as model from "@package/net/minecraft/client/model";
export * as sounds from "@package/net/minecraft/client/sounds";
export * as animation from "@package/net/minecraft/client/animation";
export * as color from "@package/net/minecraft/client/color";
export * as multiplayer from "@package/net/minecraft/client/multiplayer";
export * as tutorial from "@package/net/minecraft/client/tutorial";
export * as searchtree from "@package/net/minecraft/client/searchtree";
export * as quickplay from "@package/net/minecraft/client/quickplay";
export * as main from "@package/net/minecraft/client/main";
export * as player from "@package/net/minecraft/client/player";
export * as server from "@package/net/minecraft/client/server";
export * as profiling from "@package/net/minecraft/client/profiling";

declare module "@package/net/minecraft/client" {
    export class $MouseHandler implements $MouseHandlerAccessor$1, $MouseHandlerAccessor {
        wrapWithCondition$bdp000$supplementaries$supp$onMoveMouse(arg0: $LocalPlayer, arg1: number, arg2: number): boolean;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isLeftPressed(): boolean;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isMiddlePressed(): boolean;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isRightPressed(): boolean;
        handler$bdp000$supplementaries$supp$onMoveMouse(arg0: $CallbackInfo): void;
        getXVelocity(): number;
        getYVelocity(): number;
        setup(windowPointer: number): void;
        xpos(): number;
        ypos(): number;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        releaseMouse(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        grabMouse(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        handleAccumulatedMovement(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        setIgnoreFirstMove(): void;
        /**
         * Will set the focus to ingame if the Minecraft window is the active with focus. Also clears any GUI screen currently displayed
         */
        cursorEntered(): void;
        /**
         * Returns `true` if the mouse is grabbed.
         */
        isMouseGrabbed(): boolean;
        onPress(windowPointer: number, arg1: number, button: number, action: number): void;
        getMouseX(): number;
        getMouseY(): number;
        create$setXPos(movementTime: number): void;
        create$setYPos(movementTime: number): void;
        constructor(minecraft: $Minecraft);
        get leftPressed(): boolean;
        get middlePressed(): boolean;
        get rightPressed(): boolean;
        get XVelocity(): number;
        get YVelocity(): number;
        set up(value: number);
        get mouseGrabbed(): boolean;
        get mouseX(): number;
        get mouseY(): number;
    }
    export class $User {
        getName(): string;
        getType(): $User$Type;
        getSessionId(): string;
        getClientId(): (string) | undefined;
        getXuid(): (string) | undefined;
        getAccessToken(): string;
        getProfileId(): $UUID;
        constructor(name: string, uuid: $UUID_, accessToken: string, xuid: (string) | undefined, clientId: (string) | undefined, type: $User$Type_);
        get name(): string;
        get type(): $User$Type;
        get sessionId(): string;
        get clientId(): (string) | undefined;
        get xuid(): (string) | undefined;
        get accessToken(): string;
        get profileId(): $UUID;
    }
    export class $ClientRecipeBook extends $RecipeBook {
        setupCollections(recipes: $Iterable_<$RecipeHolder<never>>, registryAccess: $RegistryAccess): void;
        getCollections(): $List<$RecipeCollection>;
        getCollection(categories: $RecipeBookCategories_): $List<$RecipeCollection>;
        highlight: $Set<$ResourceLocation>;
        known: $Set<$ResourceLocation>;
        constructor();
        get collections(): $List<$RecipeCollection>;
    }
    export class $CloudStatus extends $Enum<$CloudStatus> implements $OptionEnum, $StringRepresentable {
        static values(): $CloudStatus[];
        static valueOf(arg0: string): $CloudStatus;
        getKey(): string;
        getId(): number;
        getSerializedName(): string;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static FANCY: $CloudStatus;
        static CODEC: $Codec<$CloudStatus>;
        static FAST: $CloudStatus;
        static OFF: $CloudStatus;
        get key(): string;
        get id(): number;
        get serializedName(): string;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CloudStatus}.
     */
    export type $CloudStatus_ = "false" | "fast" | "true";
    export class $OptionInstance$OptionInstanceSliderButton<N> extends $AbstractOptionSliderButton {
        applyUnsavedValue(): void;
        visible: boolean;
        active: boolean;
        owo$wrapper: $VanillaWidgetComponent;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        options: $Options;
        value: number;
        constructor(options: $Options, x: number, y: number, width: number, height: number, instance: $OptionInstance<N>, values: $OptionInstance$SliderableValueSet<N>, tooltipSupplier: $OptionInstance$TooltipSupplier_<N>, onValueChanged: $Consumer_<N>, applyValueImmediately: boolean);
    }
    export class $HotbarManager {
        get(index: number): $Hotbar;
        save(): void;
        static NUM_HOTBAR_GROUPS: number;
        constructor(gameDirectory: $Path_, fixerUpper: $DataFixer);
    }
    export class $GraphicsStatus extends $Enum<$GraphicsStatus> implements $OptionEnum {
        static values(): $GraphicsStatus[];
        static valueOf(arg0: string): $GraphicsStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $GraphicsStatus;
        getCaption(): $Component;
        static FANCY: $GraphicsStatus;
        static FABULOUS: $GraphicsStatus;
        static FAST: $GraphicsStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $GraphicsStatus}.
     */
    export type $GraphicsStatus_ = "fast" | "fancy" | "fabulous";
    export class $InputType extends $Enum<$InputType> {
        static values(): $InputType[];
        static valueOf(arg0: string): $InputType;
        isKeyboard(): boolean;
        isMouse(): boolean;
        static MOUSE: $InputType;
        static KEYBOARD_TAB: $InputType;
        static NONE: $InputType;
        static KEYBOARD_ARROW: $InputType;
        get keyboard(): boolean;
        get mouse(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $InputType}.
     */
    export type $InputType_ = "none" | "mouse" | "keyboard_arrow" | "keyboard_tab";
    export class $AttackIndicatorStatus extends $Enum<$AttackIndicatorStatus> implements $OptionEnum {
        static values(): $AttackIndicatorStatus[];
        static valueOf(arg0: string): $AttackIndicatorStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $AttackIndicatorStatus;
        getCaption(): $Component;
        static CROSSHAIR: $AttackIndicatorStatus;
        static HOTBAR: $AttackIndicatorStatus;
        static OFF: $AttackIndicatorStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $AttackIndicatorStatus}.
     */
    export type $AttackIndicatorStatus_ = "off" | "crosshair" | "hotbar";
    export class $OptionInstance$LazyEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        validateValue(): $Function<T, (T) | undefined>;
        validateValue(arg0: T): (T) | undefined;
        values(): $Supplier<$List<T>>;
        codec(): $Codec<T>;
        constructor(arg0: $Supplier_<$List<T>>, arg1: $Function_<T, (T) | undefined>, arg2: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$LazyEnum}.
     */
    export type $OptionInstance$LazyEnum_<T> = { codec?: $Codec<any>, values?: $Supplier_<$List<any>>, validateValue?: $Function_<any, (T) | undefined>,  } | [codec?: $Codec<any>, values?: $Supplier_<$List<any>>, validateValue?: $Function_<any, (T) | undefined>, ];
    export class $PeriodicNotificationManager$Notification extends $Record {
        message(): string;
        delay(): number;
        period(): number;
        title(): string;
        constructor(delay: number, arg1: number, period: string, arg3: string);
    }
    /**
     * Values that may be interpreted as {@link $PeriodicNotificationManager$Notification}.
     */
    export type $PeriodicNotificationManager$Notification_ = { title?: string, message?: string, delay?: number, period?: number,  } | [title?: string, message?: string, delay?: number, period?: number, ];
    export class $StringSplitter$WidthLimitedCharSink implements $FormattedCharSink {
    }
    export class $GameNarrator$NarratorInitException extends $SilentInitException {
        constructor(arg0: string);
    }
    export class $DeltaTracker {
        static ZERO: $DeltaTracker;
        static ONE: $DeltaTracker;
    }
    export interface $DeltaTracker {
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $Screenshot {
        static takeScreenshot(framebuffer: $RenderTarget): $NativeImage;
        close(): $File;
        static grab(gameDirectory: $File_, screenshotName: string | null, buffer: $RenderTarget, messageConsumer: $Consumer_<$Component>): void;
        /**
         * Saves a screenshot in the game directory with a time-stamped filename.
         */
        static grab(gameDirectory: $File_, buffer: $RenderTarget, messageConsumer: $Consumer_<$Component>): void;
        addRegion(buffer: $ByteBuffer, width: number, height: number, rowWidth: number, rowHeight: number): void;
        saveRow(): void;
        static SCREENSHOT_DIR: string;
        constructor(gameDirectory: $File_, width: number, height: number, rowHeight: number);
    }
    export class $OptionInstance$IntRangeBase {
    }
    export interface $OptionInstance$IntRangeBase extends $OptionInstance$SliderableValueSet<number> {
    }
    export class $Options {
        getSoundSourceOptionInstance(soundSource: $SoundSource_): $OptionInstance<number>;
        glintSpeed(): $OptionInstance<number>;
        sensitivity(): $OptionInstance<number>;
        entityDistanceScaling(): $OptionInstance<number>;
        prioritizeChunkUpdates(): $OptionInstance<$PrioritizeChunkUpdates>;
        chatLineSpacing(): $OptionInstance<number>;
        panoramaSpeed(): $OptionInstance<number>;
        highContrast(): $OptionInstance<boolean>;
        narratorHotkey(): $OptionInstance<boolean>;
        chatScale(): $OptionInstance<number>;
        chatWidth(): $OptionInstance<number>;
        chatHeightUnfocused(): $OptionInstance<number>;
        chatHeightFocused(): $OptionInstance<number>;
        /**
         * Returns `true` if the client connect to a server using the native transport system.
         */
        useNativeTransport(): boolean;
        attackIndicator(): $OptionInstance<$AttackIndicatorStatus>;
        mouseWheelSensitivity(): $OptionInstance<number>;
        autoSuggestions(): $OptionInstance<boolean>;
        entityShadows(): $OptionInstance<boolean>;
        japaneseGlyphVariants(): $OptionInstance<boolean>;
        invertYMouse(): $OptionInstance<boolean>;
        discreteMouseScroll(): $OptionInstance<boolean>;
        realmsNotifications(): $OptionInstance<boolean>;
        allowServerListing(): $OptionInstance<boolean>;
        showSubtitles(): $OptionInstance<boolean>;
        directionalAudio(): $OptionInstance<boolean>;
        backgroundForChatOnly(): $OptionInstance<boolean>;
        bobView(): $OptionInstance<boolean>;
        toggleCrouch(): $OptionInstance<boolean>;
        toggleSprint(): $OptionInstance<boolean>;
        hideMatchedNames(): $OptionInstance<boolean>;
        showAutosaveIndicator(): $OptionInstance<boolean>;
        onlyShowSecureChat(): $OptionInstance<boolean>;
        fov(): $OptionInstance<number>;
        screenEffectScale(): $OptionInstance<number>;
        fovEffectScale(): $OptionInstance<number>;
        darknessEffectScale(): $OptionInstance<number>;
        damageTiltStrength(): $OptionInstance<number>;
        soundDevice(): $OptionInstance<string>;
        updateResourcePacks(resourcePackList: $PackRepository): void;
        getSoundSourceVolume(category: $SoundSource_): number;
        static genericValueOrOffLabel(text: $Component_, value: number): $Component;
        /**
         * Send a client info packet with settings information to the server
         */
        broadcastOptions(): void;
        buildPlayerInformation(): $ClientInformation;
        isModelPartEnabled(playerModelPart: $PlayerModelPart_): boolean;
        toggleModelPart(modelPart: $PlayerModelPart_, enable: boolean): void;
        getCloudsType(): $CloudStatus;
        static genericValueLabel(text: $Component_, value: $Component_): $Component;
        static genericValueLabel(text: $Component_, value: number): $Component;
        getBackgroundOpacity(opacity: number): number;
        chatColors(): $OptionInstance<boolean>;
        mainHand(): $OptionInstance<$HumanoidArm>;
        simulationDistance(): $OptionInstance<number>;
        autoJump(): $OptionInstance<boolean>;
        hideLightningFlash(): $OptionInstance<boolean>;
        static isFalse(value: string): boolean;
        /**
         * Send a client info packet with settings information to the server
         */
        load(): void;
        load(arg0: boolean): void;
        /**
         * Send a client info packet with settings information to the server
         */
        save(): void;
        getFile(): $File;
        hideSplashTexts(): $OptionInstance<boolean>;
        static isTrue(value: string): boolean;
        setKey(keyBinding: $KeyMapping, input: $InputConstants$Key): void;
        darkMojangStudiosBackground(): $OptionInstance<boolean>;
        gamma(): $OptionInstance<number>;
        /**
         * Send a client info packet with settings information to the server
         */
        onboardingAccessibilityFinished(): void;
        operatorItemsTab(): $OptionInstance<boolean>;
        notificationDisplayTime(): $OptionInstance<number>;
        touchscreen(): $OptionInstance<boolean>;
        getBackgroundColor(chatColor: number): number;
        getBackgroundColor(opacity: number): number;
        narrator(): $OptionInstance<$NarratorStatus>;
        glintStrength(): $OptionInstance<number>;
        framerateLimit(): $OptionInstance<number>;
        loadSelectedResourcePacks(resourcePackList: $PackRepository): void;
        mipmapLevels(): $OptionInstance<number>;
        fullscreen(): $OptionInstance<boolean>;
        enableVsync(): $OptionInstance<boolean>;
        rawMouseInput(): $OptionInstance<boolean>;
        chatDelay(): $OptionInstance<number>;
        forceUnicodeFont(): $OptionInstance<boolean>;
        graphicsMode(): $OptionInstance<$GraphicsStatus>;
        cloudStatus(): $OptionInstance<$CloudStatus>;
        biomeBlendRadius(): $OptionInstance<number>;
        guiScale(): $OptionInstance<number>;
        dumpOptionsForReport(): string;
        particles(): $OptionInstance<$ParticleStatus>;
        getCameraType(): $CameraType;
        setCameraType(pointOfView: $CameraType_): void;
        telemetryOptInExtra(): $OptionInstance<boolean>;
        chatVisibility(): $OptionInstance<$ChatVisiblity>;
        ambientOcclusion(): $OptionInstance<boolean>;
        getEffectiveRenderDistance(): number;
        renderDistance(): $OptionInstance<number>;
        reducedDebugInfo(): $OptionInstance<boolean>;
        chatLinks(): $OptionInstance<boolean>;
        chatLinksPrompt(): $OptionInstance<boolean>;
        chatOpacity(): $OptionInstance<number>;
        textBackgroundOpacity(): $OptionInstance<number>;
        menuBackgroundBlurriness(): $OptionInstance<number>;
        getMenuBackgroundBlurriness(): number;
        setServerRenderDistance(serverRenderDistance: number): void;
        tutorialStep: $TutorialSteps;
        static RENDER_DISTANCE_REALLY_FAR: number;
        static DEFAULT_SOUND_DEVICE: string;
        keyChat: $KeyMapping;
        resourcePacks: $List<string>;
        keyInventory: $KeyMapping;
        keyCommand: $KeyMapping;
        keySwapOffhand: $KeyMapping;
        keyHotbarSlots: $KeyMapping[];
        keySpectatorOutlines: $KeyMapping;
        static RENDER_DISTANCE_NORMAL: number;
        keySprint: $KeyMapping;
        optionsFile: $File;
        keyAdvancements: $KeyMapping;
        static RENDER_DISTANCE_EXTREME: number;
        keySaveHotbarActivator: $KeyMapping;
        advancedItemTooltips: boolean;
        fullscreenVideoModeString: string;
        keyFullscreen: $KeyMapping;
        incompatibleResourcePacks: $List<string>;
        languageCode: string;
        static RENDER_DISTANCE_SHORT: number;
        keyDrop: $KeyMapping;
        overrideHeight: number;
        static LOGGER: $Logger;
        keyMappings: $KeyMapping[];
        minecraft: $Minecraft;
        keyAttack: $KeyMapping;
        skipMultiplayerWarning: boolean;
        static RENDER_DISTANCE_FAR: number;
        keyUp: $KeyMapping;
        keyJump: $KeyMapping;
        keyLoadHotbarActivator: $KeyMapping;
        onboardAccessibility: boolean;
        keyShift: $KeyMapping;
        smoothCamera: boolean;
        keyScreenshot: $KeyMapping;
        static AUTO_GUI_SCALE: number;
        keyTogglePerspective: $KeyMapping;
        keySocialInteractions: $KeyMapping;
        pauseOnLostFocus: boolean;
        keyRight: $KeyMapping;
        lastMpIp: string;
        syncWrites: boolean;
        keySmoothCamera: $KeyMapping;
        overrideWidth: number;
        keyLeft: $KeyMapping;
        static GSON: $Gson;
        hideServerAddress: boolean;
        glDebugVerbosity: number;
        static RENDER_DISTANCE_TINY: number;
        keyPlayerList: $KeyMapping;
        static UNLIMITED_FRAMERATE_CUTOFF: number;
        joinedFirstServer: boolean;
        hideBundleTutorial: boolean;
        keyUse: $KeyMapping;
        keyPickItem: $KeyMapping;
        keyDown: $KeyMapping;
        hideGui: boolean;
        constructor(minecraft: $Minecraft, gameDirectory: $File_);
        get cloudsType(): $CloudStatus;
        get file(): $File;
        get effectiveRenderDistance(): number;
        set serverRenderDistance(value: number);
    }
    export class $ResourceLoadStateTracker$ReloadState {
    }
    export class $OptionInstance$IntRange extends $Record implements $OptionInstance$IntRangeBase {
        applyValueImmediately(): boolean;
        validateValue(value: number): (number) | undefined;
        minInclusive(): number;
        maxInclusive(): number;
        codec(): $Codec<number>;
        constructor(minInclusive: number, maxInclusive: number);
        constructor(arg0: number, arg1: number, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$IntRange}.
     */
    export type $OptionInstance$IntRange_ = { minInclusive?: number, maxInclusive?: number, applyValueImmediately?: boolean,  } | [minInclusive?: number, maxInclusive?: number, applyValueImmediately?: boolean, ];
    export class $ToggleKeyMapping extends $KeyMapping {
        modifyReturnValue$coa000$xaerominimap$onIsDown(arg0: boolean): boolean;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        reset(): void;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        clickCount: number;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        defaultKey: $InputConstants$Key;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(name: string, keyCode: number, category: string, needsToggle: $BooleanSupplier_);
    }
    export class $PrioritizeChunkUpdates extends $Enum<$PrioritizeChunkUpdates> implements $OptionEnum {
        static values(): $PrioritizeChunkUpdates[];
        static valueOf(arg0: string): $PrioritizeChunkUpdates;
        getKey(): string;
        getId(): number;
        static byId(id: number): $PrioritizeChunkUpdates;
        getCaption(): $Component;
        static NEARBY: $PrioritizeChunkUpdates;
        static NONE: $PrioritizeChunkUpdates;
        static PLAYER_AFFECTED: $PrioritizeChunkUpdates;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $PrioritizeChunkUpdates}.
     */
    export type $PrioritizeChunkUpdates_ = "none" | "player_affected" | "nearby";
    export class $OptionInstance$UnitDouble extends $Enum<$OptionInstance$UnitDouble> implements $OptionInstance$SliderableValueSet<number> {
        toSliderValue(value: number): number;
        fromSliderValue(value: number): number;
        validateValue(value: number): (number) | undefined;
        static values(): $OptionInstance$UnitDouble[];
        static valueOf(arg0: string): $OptionInstance$UnitDouble;
        xmap<R>(encoder: $DoubleFunction_<R>, decoder: $ToDoubleFunction_<R>): $OptionInstance$SliderableValueSet<R>;
        codec(): $Codec<number>;
        static INSTANCE: $OptionInstance$UnitDouble;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$UnitDouble}.
     */
    export type $OptionInstance$UnitDouble_ = "instance";
    export class $DeltaTracker$Timer implements $DeltaTracker, $TimerAccessor$1, $TimerAccessor {
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        advanceTime(time: number, arg1: boolean): number;
        updatePauseState(frozen: boolean): void;
        updateFrozenState(frozen: boolean): void;
        catnip$getDeltaTickResidual(): number;
        getDeltaTickResidual(): number;
        constructor(ticksPerSecond: number, time: number, arg2: $FloatUnaryOperator_);
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
        get deltaTickResidual(): number;
    }
    export class $CameraType extends $Enum<$CameraType> {
        static values(): $CameraType[];
        static valueOf(arg0: string): $CameraType;
        isMirrored(): boolean;
        cycle(): $CameraType;
        isFirstPerson(): boolean;
        static THIRD_PERSON_BACK: $CameraType;
        static THIRD_PERSON_FRONT: $CameraType;
        static FIRST_PERSON: $CameraType;
        get mirrored(): boolean;
        get firstPerson(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CameraType}.
     */
    export type $CameraType_ = "first_person" | "third_person_back" | "third_person_front" | "sub_level_view" | "sub_level_view_unlocked";
    export class $GuiMessage$Line extends $Record implements $HeadRenderable, $TimestampedMessageLine {
        chatheads$getHeadData(): $HeadData;
        addedTime(): number;
        endOfEntry(): boolean;
        handler$zon000$chat_heads$chatheads$setOwnerForFirstLine(callbackInfo: $CallbackInfo): void;
        chatAnimation$getAddedTime(): number;
        chatAnimation$setAddedTime(time: number): void;
        tag(): $GuiMessageTag;
        content(): $FormattedCharSequence;
        chatheads$headData: $HeadData;
        constructor(arg0: number, arg1: $FormattedCharSequence_, arg2: $GuiMessageTag_ | null, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage$Line}.
     */
    export type $GuiMessage$Line_ = { endOfEntry?: boolean, addedTime?: number, tag?: $GuiMessageTag_, content?: $FormattedCharSequence_,  } | [endOfEntry?: boolean, addedTime?: number, tag?: $GuiMessageTag_, content?: $FormattedCharSequence_, ];
    export class $GameNarrator {
        sayChat(message: $Component_): void;
        clear(): void;
        destroy(): void;
        isActive(): boolean;
        say(message: $Component_): void;
        checkStatus(narratorEnabled: boolean): void;
        sayNow(message: $Component_): void;
        sayNow(message: string): void;
        updateNarratorStatus(status: $NarratorStatus_): void;
        narrator: $Narrator;
        static NO_TITLE: $Component;
        constructor(minecraft: $Minecraft);
        get active(): boolean;
    }
    export class $OptionInstance$ClampingLazyMaxIntRange extends $Record implements $OptionInstance$IntRangeBase, $OptionInstance$SliderableOrCyclableValueSet<number> {
        valueListSupplier(): $CycleButton$ValueListSupplier<number>;
        maxSupplier(): $IntSupplier;
        encodableMaxInclusive(): number;
        createCycleButton(): boolean;
        validateValue(value: number): (number) | undefined;
        minInclusive(): number;
        maxInclusive(): number;
        codec(): $Codec<number>;
        constructor(arg0: number, arg1: $IntSupplier_, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$ClampingLazyMaxIntRange}.
     */
    export type $OptionInstance$ClampingLazyMaxIntRange_ = { maxSupplier?: $IntSupplier_, minInclusive?: number, encodableMaxInclusive?: number,  } | [maxSupplier?: $IntSupplier_, minInclusive?: number, encodableMaxInclusive?: number, ];
    export class $OptionInstance$SliderableValueSet<T> {
    }
    export interface $OptionInstance$SliderableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
    export class $GuiMessageTag extends $Record {
        static systemSinglePlayer(): $GuiMessageTag;
        logTag(): string;
        indicatorColor(): number;
        static chatNotSecure(): $GuiMessageTag;
        static chatModified(originalText: string): $GuiMessageTag;
        static chatError(): $GuiMessageTag;
        text(): $Component;
        static system(): $GuiMessageTag;
        icon(): $GuiMessageTag$Icon;
        constructor(arg0: number, arg1: $GuiMessageTag$Icon_ | null, arg2: $Component_ | null, arg3: string | null);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag}.
     */
    export type $GuiMessageTag_ = { logTag?: string, text?: $Component_, indicatorColor?: number, icon?: $GuiMessageTag$Icon_,  } | [logTag?: string, text?: $Component_, indicatorColor?: number, icon?: $GuiMessageTag$Icon_, ];
    export class $Options$OptionAccess {
    }
    export interface $Options$OptionAccess {
    }
    /**
     * Values that may be interpreted as {@link $Options$OptionAccess}.
     */
    export type $Options$OptionAccess_ = (() => void);
    export class $PeriodicNotificationManager extends $SimplePreparableReloadListener<$Map<string, $List<$PeriodicNotificationManager$Notification>>> implements $AutoCloseable {
        apply(object: $Map_<string, $List_<$PeriodicNotificationManager$Notification_>>, resourceManager: $ResourceManager, profiler: $ProfilerFiller): void;
        close(): void;
        /**
         * Performs any reloading that can be done off-thread, such as file IO
         */
        prepare(resourceManager: $ResourceManager, profiler: $ProfilerFiller): $Map<string, $List<$PeriodicNotificationManager$Notification>>;
        constructor(notifications: $ResourceLocation_, selector: $Object2BooleanFunction_<string>);
    }
    export class $GuiMessage extends $Record implements $HeadRenderable {
        chatheads$getHeadData(): $HeadData;
        chatheads$setHeadData(headData: $HeadData_): void;
        addedTime(): number;
        tag(): $GuiMessageTag;
        content(): $Component;
        signature(): $MessageSignature;
        icon(): $GuiMessageTag$Icon;
        chatheads$headData: $HeadData;
        constructor(arg0: number, arg1: $Component_, arg2: $MessageSignature_ | null, arg3: $GuiMessageTag_ | null);
    }
    /**
     * Values that may be interpreted as {@link $GuiMessage}.
     */
    export type $GuiMessage_ = { signature?: $MessageSignature_, addedTime?: number, tag?: $GuiMessageTag_, content?: $Component_,  } | [signature?: $MessageSignature_, addedTime?: number, tag?: $GuiMessageTag_, content?: $Component_, ];
    export class $RecipeBookCategories extends $Enum<$RecipeBookCategories> implements $IExtensibleEnum, $RecipeBookCategoriesAccessor {
        getIconItems(): $List<$ItemStack>;
        static setAGGREGATE_CATEGORIES$connector_$md$8493e9$0(arg0: $Map_<any, any>): void;
        static getCategories(recipeBookType: $RecipeBookType_): $List<$RecipeBookCategories>;
        static values(): $RecipeBookCategories[];
        static valueOf(arg0: string): $RecipeBookCategories;
        static getExtensionInfo(): $ExtensionInfo;
        static CRAFTING_REDSTONE: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_SEARCH: $RecipeBookCategories;
        static CRAFTING_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_MISC: $RecipeBookCategories;
        static SMOKER_FOOD: $RecipeBookCategories;
        static CRAFTING_BUILDING_BLOCKS: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_DRINKS: $RecipeBookCategories;
        static SMOKER_CATEGORIES: $List<$RecipeBookCategories>;
        static SMOKER_SEARCH: $RecipeBookCategories;
        static STONECUTTER: $RecipeBookCategories;
        static AGGREGATE_CATEGORIES: $Map<$RecipeBookCategories, $List<$RecipeBookCategories>>;
        static CRAFTING_EQUIPMENT: $RecipeBookCategories;
        static BLAST_FURNACE_BLOCKS: $RecipeBookCategories;
        static BLAST_FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static FARMERSDELIGHT_COOKING_MEALS: $RecipeBookCategories;
        static CRAFTING_MISC: $RecipeBookCategories;
        static CAMPFIRE: $RecipeBookCategories;
        static FURNACE_CATEGORIES: $List<$RecipeBookCategories>;
        static CRAFTING_CATEGORIES: $List<$RecipeBookCategories>;
        static SMITHING: $RecipeBookCategories;
        static FURNACE_FOOD: $RecipeBookCategories;
        static FURNACE_BLOCKS: $RecipeBookCategories;
        static FARMERSDELIGHT_COOKING_MISC: $RecipeBookCategories;
        static FURNACE_SEARCH: $RecipeBookCategories;
        static BLAST_FURNACE_SEARCH: $RecipeBookCategories;
        static UNKNOWN: $RecipeBookCategories;
        static FURNACE_MISC: $RecipeBookCategories;
        get iconItems(): $List<$ItemStack>;
        static set AGGREGATE_CATEGORIES$connector_$md$8493e9$0(value: $Map_<any, any>);
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $RecipeBookCategories}.
     */
    export type $RecipeBookCategories_ = "crafting_search" | "crafting_building_blocks" | "crafting_redstone" | "crafting_equipment" | "crafting_misc" | "furnace_search" | "furnace_food" | "furnace_blocks" | "furnace_misc" | "blast_furnace_search" | "blast_furnace_blocks" | "blast_furnace_misc" | "smoker_search" | "smoker_food" | "stonecutter" | "smithing" | "campfire" | "unknown" | "farmersdelight_cooking_drinks" | "farmersdelight_cooking_meals" | "farmersdelight_cooking_misc" | "farmersdelight_cooking_search";
    export class $OptionInstance$Enum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        validateValue(arg0: T): (T) | undefined;
        values(): $List<T>;
        codec(): $Codec<T>;
        constructor(arg0: $List_<T>, arg1: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$Enum}.
     */
    export type $OptionInstance$Enum_<T> = { values?: $List_<any>, codec?: $Codec<any>,  } | [values?: $List_<any>, codec?: $Codec<any>, ];
    export class $OptionInstance$TooltipSupplier<T> {
    }
    export interface $OptionInstance$TooltipSupplier<T> {
        apply(value: T): $Tooltip;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$TooltipSupplier}.
     */
    export type $OptionInstance$TooltipSupplier_<T> = ((arg0: T) => $Tooltip);
    export class $CommandHistory {
        addCommand(command: string): void;
        history(): $Collection<string>;
        constructor(path: $Path_);
    }
    export class $Camera implements $CameraAccessor, $CameraZoomExtension, $CameraWaterOcclusionExtension, $CameraAccessor$1 {
        getRoll(): number;
        getLookVector(): $Vector3f;
        getNearPlane(): $Camera$NearPlane;
        sable$getZoomAmount(): number;
        getFluidInCamera(): $FogType;
        getPartialTickTime(): number;
        setRotation(zoom: number, dy: number, dx: number): void;
        /**
         * @deprecated
         */
        setRotation(yRot: number, xRot: number): void;
        handler$bdb000$supplementaries$supp$setupCannonCamera(arg0: $BlockGetter, arg1: $Entity, arg2: boolean, arg3: boolean, arg4: number, arg5: $CallbackInfo): void;
        getMaxZoom(maxZoom: number): number;
        handler$goe000$sable$rotateView(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        handler$ghi000$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        handler$gjd001$sable$getFluidInCamera(arg0: $CallbackInfoReturnable<any>): void;
        getLeftVector(): $Vector3f;
        getBlockAtCamera(): $BlockState;
        sable$setIgnoreOcclusion(arg0: boolean): void;
        sable$isIgnoreOcclusion(): boolean;
        isDetached(): boolean;
        getBlockPosition(): $BlockPos;
        getEntity(): $Entity;
        move(zoom: number, dy: number, dx: number): void;
        getPosition(): $Vec3;
        tick(): void;
        reset(): void;
        setup(level: $BlockGetter, entity: $Entity, detached: boolean, thirdPersonReverse: boolean, partialTick: number): void;
        /**
         * Sets the position and blockpos of the active render
         */
        setPosition(x: number, arg1: number, y: number): void;
        setPosition(pos: $Vec3_): void;
        isInitialized(): boolean;
        getXRot(): number;
        getYRot(): number;
        sable$setZoomAmount(arg0: number): void;
        rotation(): $Quaternionf;
        getUpVector(): $Vector3f;
        sable$isOccluded(): boolean;
        setDetached(arg0: boolean): void;
        eyeHeightOld: number;
        static FOG_DISTANCE_SCALE: number;
        eyeHeight: number;
        static $assertionsDisabled: boolean;
        constructor();
        get roll(): number;
        get lookVector(): $Vector3f;
        get nearPlane(): $Camera$NearPlane;
        get fluidInCamera(): $FogType;
        get partialTickTime(): number;
        get leftVector(): $Vector3f;
        get blockAtCamera(): $BlockState;
        get blockPosition(): $BlockPos;
        get entity(): $Entity;
        get initialized(): boolean;
        get XRot(): number;
        get YRot(): number;
        get upVector(): $Vector3f;
    }
    export class $StringSplitter$LinePosConsumer {
    }
    export interface $StringSplitter$LinePosConsumer {
        accept(style: $Style, currentPos: number, contentWidth: number): void;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$LinePosConsumer}.
     */
    export type $StringSplitter$LinePosConsumer_ = ((arg0: $Style, arg1: number, arg2: number) => void);
    export class $User$Type extends $Enum<$User$Type> {
        getName(): string;
        static values(): $User$Type[];
        static valueOf(typeName: string): $User$Type;
        static byName(typeName: string): $User$Type;
        static MOJANG: $User$Type;
        static LEGACY: $User$Type;
        static MSA: $User$Type;
    }
    /**
     * Values that may be interpreted as {@link $User$Type}.
     */
    export type $User$Type_ = "legacy" | "mojang" | "msa";
    export class $Minecraft$GameLoadCookie extends $Record {
        quickPlayData(): $GameConfig$QuickPlayData;
        realmsClient(): $RealmsClient;
        constructor(realmsClient: $RealmsClient, quickPlayData: $GameConfig$QuickPlayData_);
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$GameLoadCookie}.
     */
    export type $Minecraft$GameLoadCookie_ = { realmsClient?: $RealmsClient, quickPlayData?: $GameConfig$QuickPlayData_,  } | [realmsClient?: $RealmsClient, quickPlayData?: $GameConfig$QuickPlayData_, ];
    export class $OptionInstance<T> implements $OptionInstanceAccessor<any> {
        static noTooltip<T>(): $OptionInstance$TooltipSupplier<T>;
        static cachedConstantTooltip<T>(message: $Component_): $OptionInstance$TooltipSupplier<T>;
        static forOptionEnum<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<T>;
        get(): $Object;
        values(): $OptionInstance$ValueSet<$Object>;
        set(value: $Object): void;
        codec(): $Codec<$Object>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, initialValue: boolean): $OptionInstance<boolean>;
        static createBoolean(key: string, initialValue: boolean): $OptionInstance<boolean>;
        static createBoolean(key: string, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        static createBoolean(caption: string, tooltip: $OptionInstance$TooltipSupplier_<boolean>, valueStringifier: $OptionInstance$CaptionBasedToString_<boolean>, initialValue: boolean, onValueUpdate: $Consumer_<boolean>): $OptionInstance<boolean>;
        createButton(options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<$Object>): $AbstractWidget;
        createButton(options: $Options, x: number, y: number, width: number): $AbstractWidget;
        createButton(options: $Options): $AbstractWidget;
        getInitialValue(): $Object;
        caption: $Component;
        static BOOLEAN_VALUES: $OptionInstance$Enum<boolean>;
        value: $Object;
        static BOOLEAN_TO_STRING: $OptionInstance$CaptionBasedToString<boolean>;
        constructor(caption: string, tooltip: $OptionInstance$TooltipSupplier_<$Object>, valueStringifier: $OptionInstance$CaptionBasedToString_<$Object>, values: $OptionInstance$ValueSet<$Object>, initialValue: $Object, onValueUpdate: $Consumer_<$Object>);
        constructor(caption: string, tooltip: $OptionInstance$TooltipSupplier_<$Object>, valueStringifier: $OptionInstance$CaptionBasedToString_<$Object>, values: $OptionInstance$ValueSet<$Object>, codec: $Codec<$Object>, initialValue: $Object, onValueUpdate: $Consumer_<$Object>);
        get initialValue(): $Object;
    }
    export class $StringSplitter$LineComponent implements $FormattedText {
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        getString(): string;
        get string(): string;
    }
    export class $Minecraft extends $ReentrantBlockableEventLoop<$Runnable> implements $WindowEventHandler, $IMinecraftExtension, $MinecraftAccessor$1, $MinecraftClientAccessor, $IXaeroMinimapMinecraftClient, $IWorldMapMinecraftClient, $MinecraftClientAccessor$1, $MinecraftClientAccessor$2, $MinecraftClientKJS, $MinecraftAccessor {
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        tick(): void;
        setLevel(level: $ClientLevel, reason: $ReceivingLevelScreen$Reason_): void;
        getConnection(): $ClientPacketListener;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        run(): void;
        /**
         * Return the singleton Minecraft instance for the game
         */
        static getInstance(): $Minecraft;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        stop(): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        destroy(): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        disconnect(): void;
        disconnect(nextScreen: $Screen, keepResourcePacks: boolean): void;
        disconnect(nextScreen: $Screen): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isRunning(): boolean;
        static crash(minecraft: $Minecraft | null, gameDirectory: $File_, crashReport: $CrashReport): void;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        static getLauncherBrand(): string;
        getProfiler(): $ProfilerFiller;
        handler$zla001$veil$close(arg0: $CallbackInfo): void;
        getResourceManager(): $ResourceManager;
        getProxy(): $Proxy;
        getWindow(): $Window;
        getTextureManager(): $TextureManager;
        setOverlay(loadingGui: $Overlay | null): void;
        getVanillaPackResources(): $VanillaPackResources;
        getGuiSprites(): $GuiSpriteManager;
        renderBuffers(): $RenderBuffers;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsMultiplayer(): boolean;
        realmsDataFetcher(): $RealmsDataFetcher;
        quickPlayLog(): $QuickPlayLog;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isLocalServer(): boolean;
        commandHistory(): $CommandHistory;
        directoryValidator(): $DirectoryValidator;
        setWindowActive(leftClick: boolean): void;
        getItemRenderer(): $ItemRenderer;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        updateFontOptions(): void;
        getBlockRenderer(): $BlockRenderDispatcher;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        resizeDisplay(): void;
        setScreen(nextScreen: $Screen | null): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isGameLoadFinished(): boolean;
        multiplayerBan(): $BanDetails;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        updateTitle(): void;
        static checkModStatus(): $ModCheck;
        getCurrentServer(): $ServerData;
        clearResourcePacksOnError(throwable: $Throwable, errorMessage: $Component_ | null, gameLoadCookie: $Minecraft$GameLoadCookie_ | null): void;
        reloadResourcePacks(): $CompletableFuture<void>;
        getToasts(): $ToastComponent;
        handler$zmp000$balm$run(arg0: $CallbackInfo): void;
        getDebugOverlay(): $DebugScreenOverlay;
        emergencySaveAndCrash(report: $CrashReport): void;
        getMainRenderTarget(): $RenderTarget;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getLaunchedVersion(): string;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getVersionType(): string;
        delayCrash(report: $CrashReport): void;
        delayCrashRaw(report: $CrashReport): void;
        /**
         * Adds core server Info (GL version, Texture pack, isModded, type), and the worldInfo to the crash report.
         */
        fillReport(theCrash: $CrashReport): $CrashReport;
        static fillReport(minecraft: $Minecraft | null, languageManager: $LanguageManager | null, launchVersion: string, options: $Options | null, report: $CrashReport): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isEnforceUnicode(): boolean;
        getModelManager(): $ModelManager;
        /**
         * Returns the save loader that is currently being used
         */
        getLevelSource(): $LevelStorageSource;
        getChatStatus(): $Minecraft$ChatStatus;
        setLastInputType(lastInputType: $InputType_): void;
        handler$dfk000$xaeroworldmap$onRunTickStart(arg0: $CallbackInfo): void;
        handler$zjo000$veil$beginFrame(arg0: $CallbackInfo): void;
        handler$hmd000$iceberg$runTick(tickWorld: boolean, callbackInfo: $CallbackInfo): void;
        modify$dfk000$xaeroworldmap$onRenderCall(arg0: boolean): boolean;
        handler$zjo000$veil$endFrame(arg0: $CallbackInfo): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        hasSingleplayerServer(): boolean;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        cursorEntered(): void;
        getFps(): number;
        getFrameTimeNs(): number;
        debugClientMetricsStart(logger: $Consumer_<$Component>): boolean;
        /**
         * Returns the currently running integrated server
         */
        getSingleplayerServer(): $IntegratedServer;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        debugFpsMeterKeyPress(keyCount: number): void;
        pauseGame(leftClick: boolean): void;
        redirect$cgf000$glitchcore$startUseItem_getItemInHand(arg0: $LocalPlayer, arg1: $InteractionHand_): $ItemStack;
        handler$cgf000$glitchcore$onStartUseItem(arg0: $CallbackInfo): void;
        /**
         * Return the musicTicker's instance
         */
        getMusicManager(): $MusicManager;
        handler$cgf000$glitchcore$onBeginTick(arg0: $CallbackInfo): void;
        handler$cgf000$glitchcore$onEndTick(arg0: $CallbackInfo): void;
        handler$ggd000$sable$postCycleCameraType(arg0: $CallbackInfo): void;
        getCameraEntity(): $Entity;
        getTelemetryManager(): $ClientTelemetryManager;
        getGpuUtilization(): number;
        getProfileKeyPairManager(): $ProfileKeyPairManager;
        createWorldOpenFlows(): $WorldOpenFlows;
        doWorldLoad(levelStorage: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, newWorld: boolean): void;
        updateReportEnvironment(reportEnvironment: $ReportEnvironment_): void;
        getUser(): $User;
        handler$epj000$collective$Minecraft_setLevel(arg0: $ClientLevel, arg1: $ReceivingLevelScreen$Reason_, arg2: $CallbackInfo): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        clearDownloadedResourcePacks(): void;
        clearClientLevel(nextScreen: $Screen): void;
        handler$zde000$iris$trackLastDimensionOnLeave(arg0: $Screen, arg1: $CallbackInfo): void;
        forceSetScreen(nextScreen: $Screen): void;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        telemetryOptInExtra(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        extraTelemetryAvailable(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsTelemetry(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isNameBanned(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        allowsRealms(): boolean;
        isBlocked(playerUUID: $UUID_): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isDemo(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static renderNames(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useFancyGraphics(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useShaderTransparency(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        static useAmbientOcclusion(): boolean;
        localvar$hph000$fabric_events_interaction_v0$modifyItemPick(arg0: $ItemStack_): $ItemStack;
        handler$hph000$fabric_events_interaction_v0$cancelItemPick(arg0: $CallbackInfo): void;
        handler$bho000$transition$fillReport(theCrash: $CrashReport, ci: $CallbackInfoReturnable<any>): void;
        getGpuWarnlistManager(): $GpuWarnlistManager;
        delayTextureReload(): $CompletableFuture<void>;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isSingleplayer(): boolean;
        isLocalPlayer(playerUUID: $UUID_): boolean;
        getGameProfile(): $GameProfile;
        getResourcePackRepository(): $PackRepository;
        getDownloadedPackSource(): $DownloadedPackSource;
        getResourcePackDirectory(): $Path;
        getLanguageManager(): $LanguageManager;
        getTextureAtlas(location: $ResourceLocation_): $Function<$ResourceLocation, $TextureAtlasSprite>;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isPaused(): boolean;
        getSoundManager(): $SoundManager;
        getSituationalMusic(): $Music;
        getMinecraftSessionService(): $MinecraftSessionService;
        getSkinManager(): $SkinManager;
        setCameraEntity(viewingEntity: $Entity): void;
        shouldEntityAppearGlowing(entity: $Entity): boolean;
        getBlockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        getFixerUpper(): $DataFixer;
        getBlockColors(): $BlockColors;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        showOnlyReducedInfo(): boolean;
        getTutorial(): $Tutorial;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isWindowActive(): boolean;
        getHotbarManager(): $HotbarManager;
        /**
         * Gets the sprite uploader used for paintings.
         */
        getPaintingTextures(): $PaintingTextureManager;
        /**
         * Gets the sprite uploader used for potions.
         */
        getMobEffectTextures(): $MobEffectTextureManager;
        getMapDecorationTextures(): $MapDecorationTextureManager;
        grabPanoramixScreenshot(gameDirectory: $File_, width: number, height: number): $Component;
        getProgressListener(): $StoringChunkProgressListener;
        getSplashManager(): $SplashManager;
        getOverlay(): $Overlay;
        getPlayerSocialManager(): $PlayerSocialManager;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        updateMaxMipLevel(keyCount: number): void;
        getItemColors(): $ItemColors;
        getEntityModels(): $EntityModelSet;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isTextFilteringEnabled(): boolean;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        prepareForMultiplayer(): void;
        getProfileKeySignatureValidator(): $SignatureValidator;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        canValidateProfileKeys(): boolean;
        getLastInputType(): $InputType;
        getNarrator(): $GameNarrator;
        getChatListener(): $ChatListener;
        getReportingContext(): $ReportingContext;
        getXaeroMinimap_fps(): number;
        getXaeroWorldMap_fps(): number;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getTitle(): string;
        getScheduledEvents(): $ScheduledEvents;
        /**
         * Retrieves the `Locale` set by the player.
         * Useful for creating string and number formatters.
         */
        getLocale(): $Locale;
        pushGuiLayer(nextScreen: $Screen): void;
        /**
         * Shuts down the minecraft applet by stopping the resource downloads, and clearing up GL stuff. Called when the application (or web page) is exited.
         */
        popGuiLayer(): void;
        tell(message: $Component_): void;
        /**
         * Return the singleton Minecraft instance for the game
         */
        self(): $Minecraft;
        setStatusMessage(message: $Component_): void;
        /**
         * Runs the specified console command client-side with the player's permission level.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(defaultText: string): void;
        /**
         * Runs the specified console command client-side with the player's permission level. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(defaultText: string): void;
        setActivePostShader(id: $ResourceLocation_): void;
        isKeyDown(keyName: string): boolean;
        isKeyDown(key: number): boolean;
        getName(): $Component;
        getCurrentScreen(): $Screen;
        setCurrentScreen(nextScreen: $Screen): void;
        setTitle(defaultText: string): void;
        /**
         * Gets the version that Minecraft was launched under (the name of a version JSON). Specified via the `--version` flag.
         */
        getCurrentWorldName(): string;
        isKeyBindDown(id: string): boolean;
        getKeyBindPressedTicks(id: string): number;
        isKeyMappingDown(key: $KeyMapping): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isShiftDown(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isCtrlDown(): boolean;
        /**
         * Returns `true` if there is only one player playing, and the current server is the integrated one.
         */
        isAltDown(): boolean;
        getBlockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        getParticleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        schedule(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeating(timer: $TemporalAmount_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        scheduleRepeatingInTicks(ticks: $TickDuration_, callback: $ScheduledEvents$Callback_): $ScheduledEvents$ScheduledEvent;
        getDisplayName(): $Component;
        getTimer(): $DeltaTracker$Timer;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        proplacer$setRightClickDelay(keyCount: number): void;
        setFramebuffer(arg0: $RenderTarget): void;
        /**
         * Update debugProfilerName in response to number keys in debug screen
         */
        create$setMissTime(keyCount: number): void;
        itemColors: $ItemColors;
        static instance: $Minecraft;
        crosshairPickEntity: $Entity;
        screen: $Screen;
        cameraEntity: $Entity;
        running: boolean;
        sectionVisibility: boolean;
        static ON_OSX: boolean;
        mouseHandler: $MouseHandler;
        static UNIFORM_FONT: $ResourceLocation;
        gameRenderer: $GameRenderer;
        wireframe: boolean;
        options: $Options;
        levelRenderer: $LevelRenderer;
        player: $LocalPlayer;
        pendingConnection: $Connection;
        fontFilterFishy: $Font;
        missTime: number;
        level: $ClientLevel;
        gameDirectory: $File;
        gameThread: $Thread;
        sectionPath: boolean;
        debugRenderer: $DebugRenderer;
        toast: $ToastComponent;
        noRender: boolean;
        static DEFAULT_FONT: $ResourceLocation;
        fpsString: string;
        keyboardHandler: $KeyboardHandler;
        fontManager: $FontManager;
        static UPDATE_DRIVERS_ADVICE: string;
        particleEngine: $ParticleEngine;
        clientTickCount: number;
        gui: $Gui;
        gameMode: $MultiPlayerGameMode;
        static ALT_FONT: $ResourceLocation;
        hitResult: $HitResult;
        smartCull: boolean;
        font: $Font;
        constructor(gameConfig: $GameConfig);
        get connection(): $ClientPacketListener;
        static get launcherBrand(): string;
        get profiler(): $ProfilerFiller;
        get resourceManager(): $ResourceManager;
        get proxy(): $Proxy;
        get window(): $Window;
        get textureManager(): $TextureManager;
        get vanillaPackResources(): $VanillaPackResources;
        get guiSprites(): $GuiSpriteManager;
        get localServer(): boolean;
        get itemRenderer(): $ItemRenderer;
        get blockRenderer(): $BlockRenderDispatcher;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        get gameLoadFinished(): boolean;
        get currentServer(): $ServerData;
        get toasts(): $ToastComponent;
        get debugOverlay(): $DebugScreenOverlay;
        get mainRenderTarget(): $RenderTarget;
        get launchedVersion(): string;
        get versionType(): string;
        get enforceUnicode(): boolean;
        get modelManager(): $ModelManager;
        get levelSource(): $LevelStorageSource;
        get chatStatus(): $Minecraft$ChatStatus;
        get fps(): number;
        get frameTimeNs(): number;
        get singleplayerServer(): $IntegratedServer;
        get musicManager(): $MusicManager;
        get telemetryManager(): $ClientTelemetryManager;
        get gpuUtilization(): number;
        get profileKeyPairManager(): $ProfileKeyPairManager;
        get user(): $User;
        get nameBanned(): boolean;
        get demo(): boolean;
        get gpuWarnlistManager(): $GpuWarnlistManager;
        get singleplayer(): boolean;
        get gameProfile(): $GameProfile;
        get resourcePackRepository(): $PackRepository;
        get downloadedPackSource(): $DownloadedPackSource;
        get resourcePackDirectory(): $Path;
        get languageManager(): $LanguageManager;
        get paused(): boolean;
        get soundManager(): $SoundManager;
        get situationalMusic(): $Music;
        get minecraftSessionService(): $MinecraftSessionService;
        get skinManager(): $SkinManager;
        get blockEntityRenderDispatcher(): $BlockEntityRenderDispatcher;
        get fixerUpper(): $DataFixer;
        get blockColors(): $BlockColors;
        get tutorial(): $Tutorial;
        get hotbarManager(): $HotbarManager;
        get paintingTextures(): $PaintingTextureManager;
        get mobEffectTextures(): $MobEffectTextureManager;
        get mapDecorationTextures(): $MapDecorationTextureManager;
        get progressListener(): $StoringChunkProgressListener;
        get splashManager(): $SplashManager;
        get playerSocialManager(): $PlayerSocialManager;
        get entityModels(): $EntityModelSet;
        get textFilteringEnabled(): boolean;
        get profileKeySignatureValidator(): $SignatureValidator;
        get narrator(): $GameNarrator;
        get chatListener(): $ChatListener;
        get reportingContext(): $ReportingContext;
        get xaeroMinimap_fps(): number;
        get xaeroWorldMap_fps(): number;
        get scheduledEvents(): $ScheduledEvents;
        get locale(): $Locale;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get currentWorldName(): string;
        get shiftDown(): boolean;
        get ctrlDown(): boolean;
        get altDown(): boolean;
        get blockTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get particleTextureAtlas(): $Function<$ResourceLocation, $TextureAtlasSprite>;
        get displayName(): $Component;
        get timer(): $DeltaTracker$Timer;
        set framebuffer(value: $RenderTarget);
    }
    export class $Camera$NearPlane {
        getTopLeft(): $Vec3;
        getTopRight(): $Vec3;
        getBottomLeft(): $Vec3;
        getBottomRight(): $Vec3;
        getPointOnPlane(leftScale: number, upScale: number): $Vec3;
        forward: $Vec3;
        constructor(forward: $Vec3_, left: $Vec3_, up: $Vec3_);
        get topLeft(): $Vec3;
        get topRight(): $Vec3;
        get bottomLeft(): $Vec3;
        get bottomRight(): $Vec3;
    }
    export class $GuiMessageTag$Icon extends $Enum<$GuiMessageTag$Icon> {
        static values(): $GuiMessageTag$Icon[];
        static valueOf(arg0: string): $GuiMessageTag$Icon;
        draw(guiGraphics: $GuiGraphics, x: number, y: number): void;
        static CHAT_MODIFIED: $GuiMessageTag$Icon;
        sprite: $ResourceLocation;
        width: number;
        height: number;
    }
    /**
     * Values that may be interpreted as {@link $GuiMessageTag$Icon}.
     */
    export type $GuiMessageTag$Icon_ = "chat_modified";
    export class $KeyboardHandler {
        keyPress(windowPointer: number, arg1: number, key: number, scanCode: number, action: number): void;
        handler$zil000$veil$handleChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        handler$zil000$veil$printChunkDebugKeys(arg0: number, arg1: $CallbackInfoReturnable<any>): void;
        handler$clf000$emi$onKey(window: number, key: number, scancode: number, action: number, modifiers: number, info: $CallbackInfo): void;
        handler$bdi000$supplementaries$supp$onKeyPressCancellable(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        handler$cge000$glitchcore$onKeyInput(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        handler$clf000$emi$onChar(window: number, codePoint: number, modifiers: number, info: $CallbackInfo): void;
        getClipboard(): string;
        tick(): void;
        setup(window: number): void;
        setClipboard(string: string): void;
        static DEBUG_CRASH_TIME: number;
        constructor(minecraft: $Minecraft);
        set up(value: number);
    }
    export class $StringSplitter$WidthProvider {
    }
    export interface $StringSplitter$WidthProvider {
        getWidth(codePoint: number, style: $Style): number;
    }
    /**
     * Values that may be interpreted as {@link $StringSplitter$WidthProvider}.
     */
    export type $StringSplitter$WidthProvider_ = ((arg0: number, arg1: $Style) => number);
    export class $ResourceLoadStateTracker {
        startReload(reloadReason: $ResourceLoadStateTracker$ReloadReason_, packs: $List_<$PackResources>): void;
        startRecovery(error: $Throwable): void;
        fillCrashReport(report: $CrashReport): void;
        finishReload(): void;
        constructor();
    }
    export class $StringSplitter$LineBreakFinder implements $FormattedCharSink {
    }
    export class $ResourceLoadStateTracker$ReloadReason extends $Enum<$ResourceLoadStateTracker$ReloadReason> {
        static values(): $ResourceLoadStateTracker$ReloadReason[];
        static valueOf(arg0: string): $ResourceLoadStateTracker$ReloadReason;
        static INITIAL: $ResourceLoadStateTracker$ReloadReason;
        static MANUAL: $ResourceLoadStateTracker$ReloadReason;
        static UNKNOWN: $ResourceLoadStateTracker$ReloadReason;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLoadStateTracker$ReloadReason}.
     */
    export type $ResourceLoadStateTracker$ReloadReason_ = "initial" | "manual" | "unknown";
    export class $OptionInstance$SliderableOrCyclableValueSet<T> {
    }
    export interface $OptionInstance$SliderableOrCyclableValueSet<T> extends $OptionInstance$CycleableValueSet<T>, $OptionInstance$SliderableValueSet<T> {
    }
    export class $OptionInstance$ValueSet<T> {
    }
    export interface $OptionInstance$ValueSet<T> {
        validateValue(value: T): (T) | undefined;
        codec(): $Codec<T>;
        createButton(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>, options: $Options, x: number, y: number, width: number, onValueChanged: $Consumer_<T>): $Function<$OptionInstance<T>, $AbstractWidget>;
    }
    export class $ComponentCollector {
        getResultOrEmpty(): $FormattedText;
        getResult(): $FormattedText;
        reset(): void;
        append(part: $FormattedText): void;
        constructor();
        get resultOrEmpty(): $FormattedText;
        get result(): $FormattedText;
    }
    export class $ClientBrandRetriever {
        static getClientModName(): string;
        static VANILLA_NAME: string;
        constructor();
        static get clientModName(): string;
    }
    export class $OptionInstance$AltEnum<T> extends $Record implements $OptionInstance$CycleableValueSet<T> {
        valueListSupplier(): $CycleButton$ValueListSupplier<T>;
        valueSetter(): $OptionInstance$CycleableValueSet$ValueSetter<T>;
        altValues(): $List<T>;
        altCondition(): $BooleanSupplier;
        validateValue(arg0: T): (T) | undefined;
        values(): $List<T>;
        codec(): $Codec<T>;
        constructor(arg0: $List_<T>, arg1: $List_<T>, arg2: $BooleanSupplier_, arg3: $OptionInstance$CycleableValueSet$ValueSetter_<T>, arg4: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$AltEnum}.
     */
    export type $OptionInstance$AltEnum_<T> = { codec?: $Codec<any>, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>, altCondition?: $BooleanSupplier_, values?: $List_<any>, altValues?: $List_<any>,  } | [codec?: $Codec<any>, valueSetter?: $OptionInstance$CycleableValueSet$ValueSetter_<any>, altCondition?: $BooleanSupplier_, values?: $List_<any>, altValues?: $List_<any>, ];
    export class $StringSplitter$FlatComponents {
    }
    export class $StringSplitter {
        plainIndexAtWidth(content: string, maxWidth: number, style: $Style): number;
        formattedIndexByWidth(content: string, maxWidth: number, style: $Style): number;
        formattedHeadByWidth(content: string, maxWidth: number, style: $Style): string;
        findLineBreak(content: string, maxWidth: number, style: $Style): number;
        static getWordPosition(content: string, skipCount: number, cursorPoint: number, includeWhitespace: boolean): number;
        plainTailByWidth(content: string, maxWidth: number, style: $Style): string;
        plainHeadByWidth(content: string, maxWidth: number, style: $Style): string;
        headByWidth(content: $FormattedText, maxWidth: number, style: $Style): $FormattedText;
        stringWidth(content: $FormattedText): number;
        stringWidth(content: string | null): number;
        stringWidth(content: $FormattedCharSequence_): number;
        splitLines(content: string, maxWidth: number, style: $Style): $List<$FormattedText>;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style, splitifier: $BiConsumer_<$FormattedText, boolean>): void;
        splitLines(content: string, maxWidth: number, style: $Style, withNewLines: boolean, linePos: $StringSplitter$LinePosConsumer_): void;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style, prefix: $FormattedText): $List<$FormattedText>;
        splitLines(content: $FormattedText, maxWidth: number, style: $Style): $List<$FormattedText>;
        componentStyleAtWidth(content: $FormattedCharSequence_, maxWidth: number): $Style;
        componentStyleAtWidth(content: $FormattedText, maxWidth: number): $Style;
        widthProvider: $StringSplitter$WidthProvider;
        constructor(widthProvider: $StringSplitter$WidthProvider_);
    }
    export class $PeriodicNotificationManager$NotificationTask extends $TimerTask {
    }
    export class $KeyMapping implements $Comparable<$KeyMapping>, $IKeyMappingExtension, $KeyMappingAccessor$1, $KeyMappingAccessor, $AccessKeyMapping, $KeyMappingsAccessor, $KeyMappingInvoker, $AccessorKeyMapping, $KeyBindingAccessor, $KeyBindingAccessor$1 {
        getDefaultKey(): $InputConstants$Key;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static resetToggleKeys(): void;
        static click(key: $InputConstants$Key): void;
        getName(): string;
        compareTo(arg0: $KeyMapping): number;
        matches(keysym: number, scancode: number): boolean;
        static set(key: $InputConstants$Key, held: boolean): void;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isDefault(): boolean;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static setAll(): void;
        setKey(key: $InputConstants$Key): void;
        getCategory(): string;
        /**
         * Returns `true` if the supplied `KeyMapping` conflicts with this
         */
        same(binding: $KeyMapping): boolean;
        setDown(value: boolean): void;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static resetMapping(): void;
        /**
         * @return the display name of this key mapping
         * Defaults to a translatable component of the name.
         */
        getTranslatedKeyMessage(): $Component;
        getKeyConflictContext(): $IKeyConflictContext;
        getKeyModifier(): $KeyModifier;
        getDefaultKeyModifier(): $KeyModifier;
        saveString(): string;
        setKeyConflictContext(keyConflictContext: $IKeyConflictContext): void;
        setKeyModifierAndCode(keyModifier: $KeyModifier_, keyCode: $InputConstants$Key): void;
        static fabric_getCategoryMap$fabric_key_binding_api_v1_$md$8493e9$0(): $Map<any, any>;
        /**
         * Returns `true` if the `KeyMapping` is set to a mouse key and the key matches.
         */
        matchesMouse(key: number): boolean;
        /**
         * Returns a supplier which gets a keybind's current binding (eg, `key.forward` returns W by default), or the keybind's name if no such keybind exists (eg, `key.invalid` returns key.invalid)
         */
        static createNameSupplier(key: string): $Supplier<$Component>;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        static releaseAll(): void;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        consumeClick(): boolean;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isDown(): boolean;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isUnbound(): boolean;
        /**
         * @return the display name of this key mapping
         * Defaults to a translatable component of the name.
         */
        getDisplayName(): $Component;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        setToDefault(): void;
        /**
         * Returns `true` if the supplied `KeyMapping` conflicts with this
         */
        hasKeyModifierConflict(binding: $KeyMapping): boolean;
        /**
         * @return true if the key conflict context and modifier are active and the keyCode matches this binding, false otherwise
         */
        isActiveAndMatches(keyCode: $InputConstants$Key): boolean;
        /**
         * Returns `true` on the initial key press. For continuous querying use `isKeyDown()`. Should be used in key events.
         */
        isConflictContextAndModifierActive(): boolean;
        getKey(): $InputConstants$Key;
        controlling$getKey(): $InputConstants$Key;
        /**
         * Completely recalculates whether any keybinds are held, from scratch.
         */
        invokeRelease(): void;
        fabric_getBoundKey(): $InputConstants$Key;
        fabric_getTimesPressed(): number;
        static CATEGORY_INTERFACE: string;
        static CATEGORY_MULTIPLAYER: string;
        static CATEGORY_CREATIVE: string;
        clickCount: number;
        static CATEGORY_MOVEMENT: string;
        static CATEGORY_GAMEPLAY: string;
        static CATEGORY_MISC: string;
        defaultKey: $InputConstants$Key;
        key: $InputConstants$Key;
        static CATEGORY_INVENTORY: string;
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Key, arg4: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $KeyModifier_, arg3: $InputConstants$Type_, arg4: number, arg5: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Key, arg3: string);
        constructor(arg0: string, arg1: $IKeyConflictContext, arg2: $InputConstants$Type_, arg3: number, arg4: string);
        constructor(name: string, keyCode: number, category: string);
        constructor(name: string, type: $InputConstants$Type_, keyCode: number, category: string);
        get name(): string;
        get default(): boolean;
        get category(): string;
        get translatedKeyMessage(): $Component;
        get keyModifier(): $KeyModifier;
        get defaultKeyModifier(): $KeyModifier;
        get unbound(): boolean;
        get displayName(): $Component;
        get conflictContextAndModifierActive(): boolean;
    }
    export class $DeltaTracker$DefaultValue implements $DeltaTracker {
        getGameTimeDeltaTicks(): number;
        getRealtimeDeltaTicks(): number;
        getGameTimeDeltaPartialTick(runsNormally: boolean): number;
        constructor(value: number);
        get gameTimeDeltaTicks(): number;
        get realtimeDeltaTicks(): number;
    }
    export class $Options$FieldAccess {
    }
    export interface $Options$FieldAccess extends $Options$OptionAccess {
        process<T>(name: string, value: T, stringValuefier: $Function_<string, T>, valueStringifier: $Function_<T, string>): T;
        process(name: string, value: number): number;
        process(name: string, value: string): string;
        process(name: string, value: boolean): boolean;
        process(name: string, value: number): number;
    }
    export class $DebugQueryHandler {
        handleResponse(transactionId: number, tag: $CompoundTag_ | null): boolean;
        queryBlockEntityTag(pos: $BlockPos_, tag: $Consumer_<$CompoundTag>): void;
        queryEntityTag(entId: number, tag: $Consumer_<$CompoundTag>): void;
        constructor(connection: $ClientPacketListener);
    }
    export class $NarratorStatus extends $Enum<$NarratorStatus> {
        shouldNarrateSystem(): boolean;
        shouldNarrateChat(): boolean;
        getName(): $Component;
        static values(): $NarratorStatus[];
        static valueOf(arg0: string): $NarratorStatus;
        getId(): number;
        static byId(id: number): $NarratorStatus;
        static SYSTEM: $NarratorStatus;
        static ALL: $NarratorStatus;
        static CHAT: $NarratorStatus;
        static OFF: $NarratorStatus;
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $NarratorStatus}.
     */
    export type $NarratorStatus_ = "off" | "all" | "chat" | "system";
    export class $ResourceLoadStateTracker$RecoveryInfo {
    }
    export class $Minecraft$ChatStatus extends $Enum<$Minecraft$ChatStatus> {
        static values(): $Minecraft$ChatStatus[];
        static valueOf(arg0: string): $Minecraft$ChatStatus;
        getMessage(): $Component;
        isChatAllowed(isLocalServer: boolean): boolean;
        static DISABLED_BY_OPTIONS: $Minecraft$ChatStatus;
        static INFO_DISABLED_BY_PROFILE: $Component;
        static DISABLED_BY_PROFILE: $Minecraft$ChatStatus;
        static ENABLED: $Minecraft$ChatStatus;
        static DISABLED_BY_LAUNCHER: $Minecraft$ChatStatus;
        get message(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Minecraft$ChatStatus}.
     */
    export type $Minecraft$ChatStatus_ = "enabled" | "disabled_by_options" | "disabled_by_launcher" | "disabled_by_profile";
    export class $OptionInstance$CaptionBasedToString<T> {
    }
    export interface $OptionInstance$CaptionBasedToString<T> {
        toString(caption: $Component_, value: T): $Component;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CaptionBasedToString}.
     */
    export type $OptionInstance$CaptionBasedToString_<T> = ((arg0: $Component, arg1: T) => $Component_);
    export class $ParticleStatus extends $Enum<$ParticleStatus> implements $OptionEnum {
        static values(): $ParticleStatus[];
        static valueOf(arg0: string): $ParticleStatus;
        getKey(): string;
        getId(): number;
        static byId(id: number): $ParticleStatus;
        getCaption(): $Component;
        static ALL: $ParticleStatus;
        static DECREASED: $ParticleStatus;
        static MINIMAL: $ParticleStatus;
        get key(): string;
        get id(): number;
        get caption(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ParticleStatus}.
     */
    export type $ParticleStatus_ = "all" | "decreased" | "minimal";
    export class $OptionInstance$CycleableValueSet$ValueSetter<T> {
    }
    export interface $OptionInstance$CycleableValueSet$ValueSetter<T> {
        set(instance: $OptionInstance<T>, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $OptionInstance$CycleableValueSet$ValueSetter}.
     */
    export type $OptionInstance$CycleableValueSet$ValueSetter_<T> = ((arg0: $OptionInstance<T>, arg1: T) => void);
    export class $OptionInstance$CycleableValueSet<T> {
    }
    export interface $OptionInstance$CycleableValueSet<T> extends $OptionInstance$ValueSet<T> {
    }
}
