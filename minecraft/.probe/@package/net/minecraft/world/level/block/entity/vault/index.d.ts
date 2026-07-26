import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $PlayerDetector$EntitySelector, $PlayerDetector_, $PlayerDetector } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $Set, $UUID_, $Set_, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/block/entity/vault" {
    export class $VaultBlockEntity$Server {
        static cycleDisplayItemFromLootTable(level: $ServerLevel, state: $VaultState_, config: $VaultConfig_, sharedData: $VaultSharedData, pos: $BlockPos_): void;
        static tryInsertKey(level: $ServerLevel, pos: $BlockPos_, state: $BlockState_, config: $VaultConfig_, serverData: $VaultServerData, sharedData: $VaultSharedData, player: $Player, stack: $ItemStack_): void;
        static setVaultState(level: $ServerLevel, pos: $BlockPos_, oldState: $BlockState_, newState: $BlockState_, config: $VaultConfig_, sharedData: $VaultSharedData): void;
        static tick(level: $ServerLevel, pos: $BlockPos_, state: $BlockState_, config: $VaultConfig_, serverData: $VaultServerData, sharedData: $VaultSharedData): void;
        constructor();
    }
    export class $VaultBlockEntity extends $BlockEntity {
        getSharedData(): $VaultSharedData;
        getClientData(): $VaultClientData;
        static access$000(level: $Level_, pos: $BlockPos_, state: $BlockState_): void;
        getConfig(): $VaultConfig;
        getServerData(): $VaultServerData;
        setConfig(config: $VaultConfig_): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get sharedData(): $VaultSharedData;
        get clientData(): $VaultClientData;
        get serverData(): $VaultServerData;
    }
    export class $VaultBlockEntity$Client {
        static shouldDisplayActiveEffects(sharedData: $VaultSharedData): boolean;
        static emitActivationParticles(level: $Level_, pos: $BlockPos_, state: $BlockState_, sharedData: $VaultSharedData, particle: $ParticleOptions_): void;
        static emitDeactivationParticles(level: $Level_, pos: $BlockPos_, particle: $ParticleOptions_): void;
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, clientData: $VaultClientData, sharedData: $VaultSharedData): void;
        constructor();
    }
    export class $VaultClientData {
        previousSpin(): number;
        currentSpin(): number;
        updateDisplayItemSpin(): void;
        static ROTATION_SPEED: number;
        constructor();
    }
    export class $VaultConfig extends $Record {
        lootTable(): $ResourceKey<$LootTable>;
        playerDetector(): $PlayerDetector;
        entitySelector(): $PlayerDetector$EntitySelector;
        activationRange(): number;
        deactivationRange(): number;
        keyItem(): $ItemStack;
        overrideLootTableToDisplay(): ($ResourceKey<$LootTable>) | undefined;
        static CODEC: $Codec<$VaultConfig>;
        static DEFAULT: $VaultConfig;
        static TAG_NAME: string;
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: number, arg2: number, arg3: $ItemStack_, arg4: ($ResourceKey_<$LootTable>) | undefined, arg5: $PlayerDetector_, arg6: $PlayerDetector$EntitySelector);
        constructor(lootTable: $ResourceKey_<$LootTable>, activationRange: number, arg2: number, deactivationRange: $ItemStack_, arg4: ($ResourceKey_<$LootTable>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $VaultConfig}.
     */
    export type $VaultConfig_ = { keyItem?: $ItemStack_, playerDetector?: $PlayerDetector_, lootTable?: $ResourceKey_<$LootTable>, entitySelector?: $PlayerDetector$EntitySelector, deactivationRange?: number, overrideLootTableToDisplay?: ($ResourceKey_<$LootTable>) | undefined, activationRange?: number,  } | [keyItem?: $ItemStack_, playerDetector?: $PlayerDetector_, lootTable?: $ResourceKey_<$LootTable>, entitySelector?: $PlayerDetector$EntitySelector, deactivationRange?: number, overrideLootTableToDisplay?: ($ResourceKey_<$LootTable>) | undefined, activationRange?: number, ];
    export class $VaultState$LightLevel extends $Enum<$VaultState$LightLevel> {
    }
    /**
     * Values that may be interpreted as {@link $VaultState$LightLevel}.
     */
    export type $VaultState$LightLevel_ = "half_lit" | "lit";
    export class $VaultServerData {
        stateUpdatingResumesAt(): number;
        setLastInsertFailTimestamp(time: number): void;
        getLastInsertFailTimestamp(): number;
        getRewardedPlayers(): $Set<$UUID>;
        hasRewardedPlayer(player: $Player): boolean;
        addToRewardedPlayers(player: $Player): void;
        setItemsToEject(itemsToEject: $List_<$ItemStack_>): void;
        pauseStateUpdatingUntil(time: number): void;
        getItemsToEject(): $List<$ItemStack>;
        markEjectionFinished(): void;
        ejectionProgress(): number;
        popNextItemToEject(): $ItemStack;
        getNextItemToEject(): $ItemStack;
        set(other: $VaultServerData): void;
        static CODEC: $Codec<$VaultServerData>;
        isDirty: boolean;
        static TAG_NAME: string;
        constructor();
        constructor(rewardedPlayers: $Set_<$UUID_>, stateUpdatingResumesAt: number, arg2: $List_<$ItemStack_>, itemsToEject: number);
        get rewardedPlayers(): $Set<$UUID>;
        get nextItemToEject(): $ItemStack;
    }
    export class $VaultSharedData {
        getDisplayItem(): $ItemStack;
        connectedParticlesRange(): number;
        getConnectedPlayers(): $Set<$UUID>;
        setDisplayItem(displayItem: $ItemStack_): void;
        updateConnectedPlayersWithinRange(level: $ServerLevel, pos: $BlockPos_, serverData: $VaultServerData, config: $VaultConfig_, deactivationRange: number): void;
        hasConnectedPlayers(): boolean;
        hasDisplayItem(): boolean;
        set(other: $VaultSharedData): void;
        static CODEC: $Codec<$VaultSharedData>;
        isDirty: boolean;
        static TAG_NAME: string;
        constructor();
        constructor(displayItem: $ItemStack_, connectedPlayers: $Set_<$UUID_>, connectedParticlesRange: number);
        get connectedPlayers(): $Set<$UUID>;
    }
    export class $VaultState extends $Enum<$VaultState> implements $StringRepresentable {
        lightLevel(): number;
        tickAndGetNext(level: $ServerLevel, pos: $BlockPos_, config: $VaultConfig_, serverData: $VaultServerData, sharedData: $VaultSharedData): $VaultState;
        onEnter(level: $ServerLevel, pos: $BlockPos_, config: $VaultConfig_, sharedData: $VaultSharedData, isOminous: boolean): void;
        static values(): $VaultState[];
        static valueOf(arg0: string): $VaultState;
        onExit(level: $ServerLevel, pos: $BlockPos_, config: $VaultConfig_, sharedData: $VaultSharedData): void;
        getSerializedName(): string;
        onTransition(level: $ServerLevel, pos: $BlockPos_, state: $VaultState_, config: $VaultConfig_, sharedData: $VaultSharedData, isOminous: boolean): void;
        getRemappedEnumConstantName(): string;
        static ACTIVE: $VaultState;
        static INACTIVE: $VaultState;
        static EJECTING: $VaultState;
        static UNLOCKING: $VaultState;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $VaultState}.
     */
    export type $VaultState_ = "inactive" | "active" | "unlocking" | "ejecting";
}
