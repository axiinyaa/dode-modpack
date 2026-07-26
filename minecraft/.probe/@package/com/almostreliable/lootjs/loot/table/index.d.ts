import { $JsonObject_ } from "@package/com/google/gson";
import { $LootFunctionList, $LootConditionList, $LootEntryList } from "@package/com/almostreliable/lootjs/loot";
import { $Consumer_, $UnaryOperator_, $Predicate_ } from "@package/java/util/function";
import { $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootBucket, $LootType } from "@package/com/almostreliable/lootjs/core";
import { $ItemFilter_, $IdFilter_ } from "@package/com/almostreliable/lootjs/core/filters";
import { $Iterable } from "@package/java/lang";
import { $Spliterator, $Iterator, $List, $List_ } from "@package/java/util";
import { $ItemLootEntry, $SimpleLootEntry, $LootEntry } from "@package/com/almostreliable/lootjs/core/entry";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootTable, $LootPool, $LootContext } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/com/almostreliable/lootjs/loot/table" {
    export class $MutableLootTable implements $LootEntriesTransformer {
        modifyPool(arg0: number, arg1: $Consumer_<$MutableLootPool>): $MutableLootTable;
        writeToVanillaTable(): void;
        modifyPoolByName(arg0: string, arg1: $Consumer_<$MutableLootPool>): $MutableLootTable;
        firstPool(): $MutableLootPool;
        firstPool(arg0: $Consumer_<$MutableLootPool>): $MutableLootTable;
        createPool(): $MutableLootPool;
        createPool(arg0: $Consumer_<$MutableLootPool>): $MutableLootTable;
        getPoolByName(arg0: string): $MutableLootPool;
        onDrop(arg0: $PostLootAction_): $MutableLootTable;
        setRandomSequence(arg0: $ResourceLocation_ | null): void;
        getRandomSequence(): $ResourceLocation;
        getLootType(): $LootType;
        getPools(): $List<$MutableLootPool>;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>, arg1: boolean): $MutableLootTable;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>, arg1: boolean): $MutableLootTable;
        clear(): $MutableLootTable;
        apply(arg0: $Consumer_<$LootFunctionList>): $MutableLootTable;
        getLocation(): $ResourceLocation;
        print(): void;
        getPool(arg0: number): $MutableLootPool;
        getFunctions(): $LootFunctionList;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_, arg2: boolean): $LootEntriesTransformer;
        modifyItemEntry(arg0: $UnaryOperator_<$ItemLootEntry>): $LootEntriesTransformer;
        hasItem(arg0: $ItemFilter_): boolean;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_, arg1: boolean): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_, arg1: boolean): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_): $LootEntriesTransformer;
        removeTag(arg0: string): $LootEntriesTransformer;
        removeTag(arg0: string, arg1: boolean): $LootEntriesTransformer;
        constructor(arg0: $LootTable, arg1: $ResourceLocation_);
        constructor(arg0: $LootTable);
        constructor(arg0: $LootContextParamSet, arg1: $ResourceLocation_);
        get lootType(): $LootType;
        get pools(): $List<$MutableLootPool>;
        get location(): $ResourceLocation;
        get functions(): $LootFunctionList;
    }
    export class $PostLootAction {
    }
    export interface $PostLootAction {
        alter(arg0: $LootContext, arg1: $LootBucket): void;
    }
    /**
     * Values that may be interpreted as {@link $PostLootAction}.
     */
    export type $PostLootAction_ = ((arg0: $LootContext, arg1: $LootBucket) => void);
    export class $LootEntriesTransformer {
    }
    export interface $LootEntriesTransformer {
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>, arg1: boolean): $LootEntriesTransformer;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_, arg2: boolean): $LootEntriesTransformer;
        modifyItemEntry(arg0: $UnaryOperator_<$ItemLootEntry>): $LootEntriesTransformer;
        hasItem(arg0: $ItemFilter_): boolean;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>, arg1: boolean): $LootEntriesTransformer;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_, arg1: boolean): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_, arg1: boolean): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_): $LootEntriesTransformer;
        removeTag(arg0: string): $LootEntriesTransformer;
        removeTag(arg0: string, arg1: boolean): $LootEntriesTransformer;
    }
    export class $LootEntryAppender {
    }
    export interface $LootEntryAppender {
        addCustomEntry(arg0: $JsonObject_): $LootEntryAppender;
        addEntry(arg0: $LootEntry): $LootEntryAppender;
    }
    /**
     * Values that may be interpreted as {@link $LootEntryAppender}.
     */
    export type $LootEntryAppender_ = ((arg0: $LootEntry) => $LootEntryAppender);
    export class $MutableLootPool implements $LootEntriesTransformer, $LootEntryAppender {
        getVanillaPool(): $LootPool;
        rolls(arg0: $NumberProvider_): $MutableLootPool;
        bonusRolls(arg0: $NumberProvider_): $MutableLootPool;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>, arg1: boolean): $MutableLootPool;
        getConditions(): $LootConditionList;
        when(arg0: $Consumer_<$LootConditionList>): $MutableLootPool;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>, arg1: boolean): $MutableLootPool;
        getName(): string;
        name(arg0: string): $MutableLootPool;
        apply(arg0: $Consumer_<$LootFunctionList>): $MutableLootPool;
        addEntry(arg0: $LootEntry): $MutableLootPool;
        getEntries(): $LootEntryList;
        getFunctions(): $LootFunctionList;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_, arg2: boolean): $LootEntriesTransformer;
        modifyItemEntry(arg0: $UnaryOperator_<$ItemLootEntry>): $LootEntriesTransformer;
        hasItem(arg0: $ItemFilter_): boolean;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_, arg1: boolean): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_, arg1: boolean): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_): $LootEntriesTransformer;
        removeTag(arg0: string): $LootEntriesTransformer;
        removeTag(arg0: string, arg1: boolean): $LootEntriesTransformer;
        addCustomEntry(arg0: $JsonObject_): $LootEntryAppender;
        constructor(arg0: $LootPool);
        get vanillaPool(): $LootPool;
        get conditions(): $LootConditionList;
        get entries(): $LootEntryList;
        get functions(): $LootFunctionList;
    }
    export class $LootTableList implements $LootEntriesTransformer, $Iterable<$MutableLootTable> {
        firstPool(arg0: $Consumer_<$MutableLootPool>): $LootTableList;
        createPool(arg0: $Consumer_<$MutableLootPool>): $LootTableList;
        onDrop(arg0: $PostLootAction_): $LootTableList;
        getTables(): $List<$MutableLootTable>;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>, arg1: boolean): $LootTableList;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>, arg1: boolean): $LootTableList;
        clear(): $LootTableList;
        iterator(): $Iterator<$MutableLootTable>;
        apply(arg0: $Consumer_<$LootFunctionList>): $LootTableList;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_): $LootEntriesTransformer;
        replaceItem(arg0: $ItemFilter_, arg1: $Item_, arg2: boolean): $LootEntriesTransformer;
        modifyItemEntry(arg0: $UnaryOperator_<$ItemLootEntry>): $LootEntriesTransformer;
        hasItem(arg0: $ItemFilter_): boolean;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_, arg1: boolean): $LootEntriesTransformer;
        removeReference(arg0: $IdFilter_): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_, arg1: boolean): $LootEntriesTransformer;
        removeItem(arg0: $ItemFilter_): $LootEntriesTransformer;
        removeTag(arg0: string): $LootEntriesTransformer;
        removeTag(arg0: string, arg1: boolean): $LootEntriesTransformer;
        spliterator(): $Spliterator<$MutableLootTable>;
        forEach(arg0: $Consumer_<$MutableLootTable>): void;
        constructor(arg0: $List_<$MutableLootTable>);
        [Symbol.iterator](): Iterator<$MutableLootTable>
        get tables(): $List<$MutableLootTable>;
    }
    export class $PostLootActionOwner {
    }
    export interface $PostLootActionOwner {
        lootjs$setPostLootAction(arg0: $PostLootAction_): void;
        lootjs$getPostLootAction(): $PostLootAction;
    }
}
