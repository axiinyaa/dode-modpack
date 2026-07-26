import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $TabButton, $LerpingBossEvent } from "@package/net/minecraft/client/gui/components";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $UUID, $List, $Map_, $Map, $UUID_, $List_, $OptionalInt } from "@package/java/util";
import { $Narrator } from "@package/com/mojang/text2speech";
import { $LockCode, $LockCode_ } from "@package/net/minecraft/world";
import { $Predicate } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $NonNullList, $Holder } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BeehiveBlockEntity$Occupant, $BeehiveBlockEntity$Occupant_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/mcp/mobius/waila/mixin" {
    export class $ChiseledBookShelfBlockAccess {
    }
    export interface $ChiseledBookShelfBlockAccess {
        wthit_getHitSlot(arg0: $BlockHitResult, arg1: $BlockState_): $OptionalInt;
    }
    /**
     * Values that may be interpreted as {@link $ChiseledBookShelfBlockAccess}.
     */
    export type $ChiseledBookShelfBlockAccess_ = ((arg0: $BlockHitResult, arg1: $BlockState) => $OptionalInt);
    export class $AbstractFurnaceBlockEntityAccess {
    }
    export interface $AbstractFurnaceBlockEntityAccess {
        wthit_cookingProgress(): number;
        wthit_cookingTotalTime(): number;
    }
    export class $NoteBlockAccess {
    }
    export interface $NoteBlockAccess {
        wthit_getCustomSoundId(arg0: $Level_, arg1: $BlockPos_): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $NoteBlockAccess}.
     */
    export type $NoteBlockAccess_ = ((arg0: $Level, arg1: $BlockPos) => $ResourceLocation_);
    export class $LecternBlockEntityAccess {
    }
    export interface $LecternBlockEntityAccess {
        wthit_pageCount(): number;
    }
    /**
     * Values that may be interpreted as {@link $LecternBlockEntityAccess}.
     */
    export type $LecternBlockEntityAccess_ = (() => number);
    export class $BossHealthOverlayAccess {
    }
    export interface $BossHealthOverlayAccess {
        wthit_events(): $Map<$UUID, $LerpingBossEvent>;
    }
    /**
     * Values that may be interpreted as {@link $BossHealthOverlayAccess}.
     */
    export type $BossHealthOverlayAccess_ = (() => $Map_<$UUID_, $LerpingBossEvent>);
    export class $TabNavigationBarAccess {
    }
    export interface $TabNavigationBarAccess {
        wthit_currentTabButton(): $TabButton;
    }
    /**
     * Values that may be interpreted as {@link $TabNavigationBarAccess}.
     */
    export type $TabNavigationBarAccess_ = (() => $TabButton);
    export class $BeehiveBlockEntityAccess {
    }
    export interface $BeehiveBlockEntityAccess {
        wthit_stored(): $List<$BeehiveBlockEntity$BeeDataAccess>;
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntityAccess}.
     */
    export type $BeehiveBlockEntityAccess_ = (() => $List_<$BeehiveBlockEntity$BeeDataAccess>);
    export class $ChiseledBookShelfBlockEntityAccess {
    }
    export interface $ChiseledBookShelfBlockEntityAccess {
        wthit_items(): $NonNullList<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $ChiseledBookShelfBlockEntityAccess}.
     */
    export type $ChiseledBookShelfBlockEntityAccess_ = (() => $NonNullList<$ItemStack_>);
    export class $BeehiveBlockEntity$BeeDataAccess {
    }
    export interface $BeehiveBlockEntity$BeeDataAccess {
        wthit_occupant(): $BeehiveBlockEntity$Occupant;
    }
    /**
     * Values that may be interpreted as {@link $BeehiveBlockEntity$BeeDataAccess}.
     */
    export type $BeehiveBlockEntity$BeeDataAccess_ = (() => $BeehiveBlockEntity$Occupant_);
    export class $KeyMappingAccess {
        static wthit_all(): $Map<string, $KeyMapping>;
        static wthit_categorySortOrder(): $Map<string, number>;
    }
    export interface $KeyMappingAccess {
        wthit_key(): $InputConstants$Key;
    }
    /**
     * Values that may be interpreted as {@link $KeyMappingAccess}.
     */
    export type $KeyMappingAccess_ = (() => $InputConstants$Key);
    export class $GameNarratorAccess {
    }
    export interface $GameNarratorAccess {
        wthit_narrator(): $Narrator;
    }
    /**
     * Values that may be interpreted as {@link $GameNarratorAccess}.
     */
    export type $GameNarratorAccess_ = (() => $Narrator);
    export class $EntityAccess {
    }
    export interface $EntityAccess {
        wthit_getTypeName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $EntityAccess}.
     */
    export type $EntityAccess_ = (() => $Component_);
    export class $BeaconBlockEntityAccess {
    }
    export interface $BeaconBlockEntityAccess {
        wthit_primaryPower(): $Holder<$MobEffect>;
        wthit_secondaryPower(): $Holder<$MobEffect>;
        wthit_levels(): number;
    }
    export class $BaseContainerBlockEntityAccess {
    }
    export interface $BaseContainerBlockEntityAccess {
        wthit_lockKey(): $LockCode;
        wthit_lockKey(arg0: $LockCode_): void;
    }
    export class $PlayerTabOverlayAccess {
    }
    export interface $PlayerTabOverlayAccess {
        wthit_isVisible(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PlayerTabOverlayAccess}.
     */
    export type $PlayerTabOverlayAccess_ = (() => boolean);
    export class $EditBoxAccess {
    }
    export interface $EditBoxAccess {
        wthit_value(): string;
        wthit_value(arg0: string): void;
        wthit_highlightPos(): number;
        wthit_maxLength(): number;
        wthit_filter(): $Predicate<string>;
        wthit_onValueChange(arg0: string): void;
        wthit_isEditable(): boolean;
    }
}
