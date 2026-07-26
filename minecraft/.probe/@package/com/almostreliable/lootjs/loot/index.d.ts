import { $JsonObject_ } from "@package/com/google/gson";
import { $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $GroupedLootAction$Builder, $LootAction_, $LootModifier$Builder, $LootAction } from "@package/com/almostreliable/lootjs/loot/modifier";
import { $EntityType_, $EquipmentSlot_, $EntityType, $Entity, $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryType_, $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $AttributeModifier, $AttributeModifier$Operation_, $Attribute, $Attribute_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ModifyLootAction$Callback_ } from "@package/com/almostreliable/lootjs/loot/modifier/handler";
import { $Set_, $Set, $ListIterator, $List, $Map_, $List_ } from "@package/java/util";
import { $Consumer_, $BiFunction, $Predicate_, $Predicate, $Function_, $UnaryOperator_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderSet_, $BlockPos_, $HolderLookup$Provider, $Holder_, $WritableRegistry } from "@package/net/minecraft/core";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $LootType_ } from "@package/com/almostreliable/lootjs/core";
import { $ItemFilter_, $IdFilter_, $LootTableFilter } from "@package/com/almostreliable/lootjs/core/filters";
import { $DataComponentType_ } from "@package/net/minecraft/core/component";
import { $Record } from "@package/java/lang";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $ValidationContext, $LootContext, $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Explosion$BlockInteraction_ } from "@package/net/minecraft/world/level";
import { $Item_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $LootItemFunctionType, $LootItemFunctionType_, $LootItemFunction$Builder, $SetEnchantmentsFunction$Builder, $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $StatePropertiesPredicate_, $EntityPredicate_, $MinMaxBounds$Ints_, $LocationPredicate_, $DistancePredicate_, $EnchantmentPredicate_, $NbtPredicate, $DamageSourcePredicate_, $ItemPredicate_, $ItemEnchantmentsPredicate, $EnchantmentPredicate, $MinMaxBounds$Doubles_ } from "@package/net/minecraft/advancements/critereon";
import { $Potion_ } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IGlobalLootModifier } from "@package/net/neoforged/neoforge/common/loot";
import { $LootItemConditionType_, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $ListHolder, $BlockFilter, $DebugInfo } from "@package/com/almostreliable/lootjs/util";
import { $ItemLootEntry, $LootEntry, $SimpleLootEntry } from "@package/com/almostreliable/lootjs/core/entry";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootTableList, $MutableLootTable, $LootEntryAppender, $MutableLootPool, $LootEntriesTransformer } from "@package/com/almostreliable/lootjs/loot/table";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as modifier from "@package/com/almostreliable/lootjs/loot/modifier";
export * as table from "@package/com/almostreliable/lootjs/loot/table";
export * as extension from "@package/com/almostreliable/lootjs/loot/extension";

declare module "@package/com/almostreliable/lootjs/loot" {
    export class $LootFunctionsContainer<F> {
    }
    export interface $LootFunctionsContainer<F> {
        enchant(arg0: $Consumer_<$SetEnchantmentsFunction$Builder>): F;
        enchant(arg0: boolean, arg1: $Consumer_<$SetEnchantmentsFunction$Builder>): F;
        enchantWithLevels(arg0: $NumberProvider_): F;
        setCustomData(arg0: $CompoundTag_): F;
        limitCount(arg0: $NumberProvider_ | null, arg1: $NumberProvider_ | null): F;
        addFunction(arg0: $LootItemFunction): F;
        enchantRandomly(): F;
        enchantRandomly(arg0: $HolderSet_<$Enchantment>): F;
        applyEnchantmentBonus(arg0: $NumberProvider_): F;
        applyEnchantmentBonus(arg0: $Holder_<$Enchantment>, arg1: $NumberProvider_): F;
        applyBinomialDistributionBonus(arg0: $Holder_<$Enchantment>, arg1: number, arg2: number): F;
        applyOreBonus(arg0: $Holder_<$Enchantment>): F;
        applyBonus(arg0: $Holder_<$Enchantment>, arg1: number): F;
        simulateExplosionDecay(): F;
        addPotion(arg0: $Potion_): F;
        addLore(...arg0: $Component_[]): F;
        replaceLore(...arg0: $Component_[]): F;
        toggleTooltips(arg0: $Map_<string, boolean>): F;
        jsonFunction(arg0: $JsonObject_): F;
        smelt(): F;
        addAttributes(arg0: $Consumer_<$AddAttributesFunction$Builder>): F;
        setName(arg0: $Component_): F;
        setCount(arg0: $NumberProvider_): F;
        damage(arg0: $NumberProvider_): F;
        set customData(value: $CompoundTag_);
        set name(value: $Component_);
        set count(value: $NumberProvider_);
    }
    /**
     * Values that may be interpreted as {@link $LootFunctionsContainer}.
     */
    export type $LootFunctionsContainer_<F> = ((arg0: $LootItemFunction) => F);
    export class $Predicates {
        static enchantment(arg0: $IdFilter_, arg1: $MinMaxBounds$Ints_): $EnchantmentPredicate;
        static enchantment(arg0: $IdFilter_): $EnchantmentPredicate;
        static storedEnchantments(arg0: $EnchantmentPredicate_[]): $ItemEnchantmentsPredicate;
        static itemEnchantments(arg0: $EnchantmentPredicate_[]): $ItemEnchantmentsPredicate;
        static lookup(): $HolderLookup$Provider;
        static nbt(arg0: $CompoundTag_): $NbtPredicate;
    }
    export interface $Predicates {
    }
    export class $AddAttributesFunction$Modifier {
        createAttributeModifier(arg0: $LootContext): $AttributeModifier;
        constructor(arg0: number, arg1: $Holder_<$Attribute>, arg2: $AttributeModifier$Operation_, arg3: $NumberProvider_, arg4: $ResourceLocation_, arg5: $Set_<$EquipmentSlotGroup_>);
    }
    export class $LootCondition implements $LootConditionsContainer<$LootItemCondition> {
        luck(arg0: $MinMaxBounds$Doubles_): $LootItemCondition;
        randomChance(arg0: $NumberProvider_): $LootItemCondition;
        killedByPlayer(): $LootItemCondition;
        survivesExplosion(): $LootItemCondition;
        matchTime(arg0: number, arg1: number, arg2: number): $LootItemCondition;
        matchTime(arg0: number, arg1: number): $LootItemCondition;
        matchPlayerCustom(arg0: $Predicate_<$ServerPlayer>): $LootItemCondition;
        matchTool(arg0: $ItemPredicate_): $LootItemCondition;
        matchMainHand(arg0: $ItemFilter_): $LootItemCondition;
        matchOffHand(arg0: $ItemFilter_): $LootItemCondition;
        matchHead(arg0: $ItemFilter_): $LootItemCondition;
        matchChest(arg0: $ItemFilter_): $LootItemCondition;
        matchLegs(arg0: $ItemFilter_): $LootItemCondition;
        matchFeet(arg0: $ItemFilter_): $LootItemCondition;
        matchEquip(arg0: $EquipmentSlot_, arg1: $ItemFilter_): $LootItemCondition;
        matchAnyInventorySlot(arg0: $ItemFilter_): $LootItemCondition;
        matchAnyHotbarSlot(arg0: $ItemFilter_): $LootItemCondition;
        matchWeather(arg0: boolean | null, arg1: boolean | null): $LootItemCondition;
        randomChanceWithEnchantment(arg0: $Holder_<$Enchantment>, arg1: number[]): $LootItemCondition;
        randomTableBonus(arg0: $Holder_<$Enchantment>, arg1: number[]): $LootItemCondition;
        matchBiome(arg0: $HolderSet_<$Biome>): $LootItemCondition;
        matchDimension(...arg0: $ResourceLocation_[]): $LootItemCondition;
        matchStructure(arg0: $HolderSet_<$Structure>, arg1: boolean): $LootItemCondition;
        matchStructure(arg0: $HolderSet_<$Structure>): $LootItemCondition;
        isLightLevel(arg0: number, arg1: number): $LootItemCondition;
        matchBlock(arg0: $Block_, arg1: $StatePropertiesPredicate_): $LootItemCondition;
        matchBlock(arg0: $Block_): $LootItemCondition;
        matchEntity(arg0: $EntityPredicate_): $LootItemCondition;
        matchAttacker(arg0: $EntityPredicate_): $LootItemCondition;
        matchDirectAttacker(arg0: $EntityPredicate_): $LootItemCondition;
        matchPlayer(arg0: $EntityPredicate_): $LootItemCondition;
        matchDamageSource(arg0: $DamageSourcePredicate_): $LootItemCondition;
        matchDistance(arg0: $DistancePredicate_): $LootItemCondition;
        matchEntityCustom(arg0: $Predicate_<$Entity>): $LootItemCondition;
        matchAttackerCustom(arg0: $Predicate_<$Entity>): $LootItemCondition;
        matchDirectAttackerCustom(arg0: $Predicate_<$Entity>): $LootItemCondition;
        hasAnyStage(...arg0: string[]): $LootItemCondition;
        matchAnyOf(...arg0: $LootItemCondition[]): $LootItemCondition;
        matchAllOf(...arg0: $LootItemCondition[]): $LootItemCondition;
        matchCustomCondition(arg0: $JsonObject_): $LootItemCondition;
        matchLocation(arg0: $BlockPos_, arg1: $LocationPredicate_): $LootItemCondition;
        matchLocation(arg0: $LocationPredicate_): $LootItemCondition;
        blockEntity(arg0: $Predicate_<$BlockEntity>): $LootItemCondition;
        constructor();
    }
    export class $LootConditionList extends $ListHolder<$LootItemCondition, $LootItemCondition> implements $LootConditionsContainer<$LootConditionList>, $Predicate<$LootContext> {
        collectDebugInfo(arg0: $DebugInfo): void;
        addCondition(arg0: $LootItemCondition): $LootConditionList;
        remove(arg0: $IdFilter_): boolean;
        indexOf(arg0: $LootItemConditionType_): number;
        test(arg0: $LootContext): boolean;
        lastIndexOf(arg0: $LootItemConditionType_): number;
        contains(arg0: $LootItemConditionType_): boolean;
        luck(arg0: $MinMaxBounds$Doubles_): $LootConditionList;
        randomChance(arg0: $NumberProvider_): $LootConditionList;
        killedByPlayer(): $LootConditionList;
        survivesExplosion(): $LootConditionList;
        matchTime(arg0: number, arg1: number, arg2: number): $LootConditionList;
        matchTime(arg0: number, arg1: number): $LootConditionList;
        matchPlayerCustom(arg0: $Predicate_<$ServerPlayer>): $LootConditionList;
        matchTool(arg0: $ItemPredicate_): $LootConditionList;
        matchMainHand(arg0: $ItemFilter_): $LootConditionList;
        matchOffHand(arg0: $ItemFilter_): $LootConditionList;
        matchHead(arg0: $ItemFilter_): $LootConditionList;
        matchChest(arg0: $ItemFilter_): $LootConditionList;
        matchLegs(arg0: $ItemFilter_): $LootConditionList;
        matchFeet(arg0: $ItemFilter_): $LootConditionList;
        matchEquip(arg0: $EquipmentSlot_, arg1: $ItemFilter_): $LootConditionList;
        matchAnyInventorySlot(arg0: $ItemFilter_): $LootConditionList;
        matchAnyHotbarSlot(arg0: $ItemFilter_): $LootConditionList;
        matchWeather(arg0: boolean | null, arg1: boolean | null): $LootConditionList;
        randomChanceWithEnchantment(arg0: $Holder_<$Enchantment>, arg1: number[]): $LootConditionList;
        randomTableBonus(arg0: $Holder_<$Enchantment>, arg1: number[]): $LootConditionList;
        matchBiome(arg0: $HolderSet_<$Biome>): $LootConditionList;
        matchDimension(...arg0: $ResourceLocation_[]): $LootConditionList;
        matchStructure(arg0: $HolderSet_<$Structure>, arg1: boolean): $LootConditionList;
        matchStructure(arg0: $HolderSet_<$Structure>): $LootConditionList;
        isLightLevel(arg0: number, arg1: number): $LootConditionList;
        matchBlock(arg0: $Block_, arg1: $StatePropertiesPredicate_): $LootConditionList;
        matchBlock(arg0: $Block_): $LootConditionList;
        matchEntity(arg0: $EntityPredicate_): $LootConditionList;
        matchAttacker(arg0: $EntityPredicate_): $LootConditionList;
        matchDirectAttacker(arg0: $EntityPredicate_): $LootConditionList;
        matchPlayer(arg0: $EntityPredicate_): $LootConditionList;
        matchDamageSource(arg0: $DamageSourcePredicate_): $LootConditionList;
        matchDistance(arg0: $DistancePredicate_): $LootConditionList;
        matchEntityCustom(arg0: $Predicate_<$Entity>): $LootConditionList;
        matchAttackerCustom(arg0: $Predicate_<$Entity>): $LootConditionList;
        matchDirectAttackerCustom(arg0: $Predicate_<$Entity>): $LootConditionList;
        hasAnyStage(...arg0: string[]): $LootConditionList;
        matchAnyOf(...arg0: $LootItemCondition[]): $LootConditionList;
        matchAllOf(...arg0: $LootItemCondition[]): $LootConditionList;
        matchCustomCondition(arg0: $JsonObject_): $LootConditionList;
        matchLocation(arg0: $BlockPos_, arg1: $LocationPredicate_): $LootConditionList;
        matchLocation(arg0: $LocationPredicate_): $LootConditionList;
        blockEntity(arg0: $Predicate_<$BlockEntity>): $LootConditionList;
        negate(): $Predicate<$LootContext>;
        and(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        or(arg0: $Predicate_<$LootContext>): $Predicate<$LootContext>;
        constructor();
        constructor(arg0: $List_<$LootItemCondition>);
    }
    export class $AddAttributesFunction$Builder implements $LootItemFunction$Builder {
        forSlots(arg0: $Attribute_, arg1: $ResourceLocation_, arg2: $NumberProvider_, arg3: $EquipmentSlotGroup_[]): $AddAttributesFunction$Builder;
        forSlots(arg0: number, arg1: $Attribute_, arg2: $ResourceLocation_, arg3: $NumberProvider_, arg4: $EquipmentSlotGroup_[]): $AddAttributesFunction$Builder;
        preserveDefaults(arg0: boolean): $AddAttributesFunction$Builder;
        add(arg0: $Attribute_, arg1: $ResourceLocation_, arg2: $NumberProvider_, arg3: $Consumer_<$AddAttributesFunction$Modifier$Builder>): $AddAttributesFunction$Builder;
        add(arg0: $AddAttributesFunction$Modifier): $AddAttributesFunction$Builder;
        build(): $AddAttributesFunction;
        simple(arg0: $Attribute_, arg1: $ResourceLocation_, arg2: $NumberProvider_): $AddAttributesFunction$Builder;
        simple(arg0: number, arg1: $Attribute_, arg2: $ResourceLocation_, arg3: $NumberProvider_): $AddAttributesFunction$Builder;
        constructor();
    }
    export class $AddAttributesFunction$Modifier$Builder {
        setSlots(arg0: $EquipmentSlotGroup_[]): void;
        setProbability(arg0: number): void;
        setOperation(arg0: $AttributeModifier$Operation_): void;
        build(): $AddAttributesFunction$Modifier;
        constructor(arg0: $Attribute_, arg1: $ResourceLocation_, arg2: $NumberProvider_);
        set slots(value: $EquipmentSlotGroup_[]);
        set probability(value: number);
        set operation(value: $AttributeModifier$Operation_);
    }
    export class $LootModificationEvent {
        getGlobalModifiers(): $List<string>;
        removeGlobalModifiers(...arg0: $IdFilter_[]): void;
        disableLootModification(...arg0: $IdFilter_[]): void;
        addTableModifier(...arg0: $LootTableFilter[]): $LootModifier$Builder;
        /**
         * @deprecated
         */
        addTypeModifier(...arg0: $LootType_[]): $LootModifier$Builder;
        addBlockModifier(arg0: $BlockFilter): $LootModifier$Builder;
        addEntityModifier(arg0: $HolderSet_<$EntityType<never>>): $LootModifier$Builder;
        disableWitherStarDrop(): void;
        disableCreeperHeadDrop(): void;
        disableSkeletonHeadDrop(): void;
        disableZombieHeadDrop(): void;
        enableLogging(): void;
        constructor(arg0: $Map_<$ResourceLocation_, $IGlobalLootModifier>);
        get globalModifiers(): $List<string>;
    }
    export class $AddAttributesFunction implements $LootItemFunction {
        apply(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        getType(): $LootItemFunctionType<any>;
        lootjs$when(arg0: $Consumer_<any>): $LootItemFunction;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        validate(arg0: $ValidationContext): void;
        andThen<V>(arg0: $Function_<$ItemStack, V>): $BiFunction<$ItemStack, $LootContext, V>;
        constructor(arg0: boolean, arg1: $List_<$AddAttributesFunction$Modifier>);
        get type(): $LootItemFunctionType<any>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    export class $LootConditionsContainer<C> {
    }
    export interface $LootConditionsContainer<C> {
        luck(arg0: $MinMaxBounds$Doubles_): C;
        randomChance(arg0: $NumberProvider_): C;
        killedByPlayer(): C;
        survivesExplosion(): C;
        matchTime(arg0: number, arg1: number, arg2: number): C;
        matchTime(arg0: number, arg1: number): C;
        matchPlayerCustom(arg0: $Predicate_<$ServerPlayer>): C;
        matchTool(arg0: $ItemPredicate_): C;
        matchMainHand(arg0: $ItemFilter_): C;
        matchOffHand(arg0: $ItemFilter_): C;
        matchHead(arg0: $ItemFilter_): C;
        matchChest(arg0: $ItemFilter_): C;
        matchLegs(arg0: $ItemFilter_): C;
        matchFeet(arg0: $ItemFilter_): C;
        matchEquip(arg0: $EquipmentSlot_, arg1: $ItemFilter_): C;
        matchAnyInventorySlot(arg0: $ItemFilter_): C;
        matchAnyHotbarSlot(arg0: $ItemFilter_): C;
        matchWeather(arg0: boolean | null, arg1: boolean | null): C;
        randomChanceWithEnchantment(arg0: $Holder_<$Enchantment>, arg1: number[]): C;
        randomTableBonus(arg0: $Holder_<$Enchantment>, arg1: number[]): C;
        matchBiome(arg0: $HolderSet_<$Biome>): C;
        matchDimension(...arg0: $ResourceLocation_[]): C;
        matchStructure(arg0: $HolderSet_<$Structure>, arg1: boolean): C;
        matchStructure(arg0: $HolderSet_<$Structure>): C;
        isLightLevel(arg0: number, arg1: number): C;
        matchBlock(arg0: $Block_, arg1: $StatePropertiesPredicate_): C;
        matchBlock(arg0: $Block_): C;
        matchEntity(arg0: $EntityPredicate_): C;
        matchAttacker(arg0: $EntityPredicate_): C;
        matchDirectAttacker(arg0: $EntityPredicate_): C;
        matchPlayer(arg0: $EntityPredicate_): C;
        matchDamageSource(arg0: $DamageSourcePredicate_): C;
        matchDistance(arg0: $DistancePredicate_): C;
        matchEntityCustom(arg0: $Predicate_<$Entity>): C;
        matchAttackerCustom(arg0: $Predicate_<$Entity>): C;
        matchDirectAttackerCustom(arg0: $Predicate_<$Entity>): C;
        hasAnyStage(...arg0: string[]): C;
        matchAnyOf(...arg0: $LootItemCondition[]): C;
        matchAllOf(...arg0: $LootItemCondition[]): C;
        matchCustomCondition(arg0: $JsonObject_): C;
        addCondition(arg0: $LootItemCondition): C;
        matchLocation(arg0: $BlockPos_, arg1: $LocationPredicate_): C;
        matchLocation(arg0: $LocationPredicate_): C;
        blockEntity(arg0: $Predicate_<$BlockEntity>): C;
    }
    /**
     * Values that may be interpreted as {@link $LootConditionsContainer}.
     */
    export type $LootConditionsContainer_<C> = ((arg0: $LootItemCondition) => C);
    export class $LootTableEvent {
        getLootTableIds(): $Set<$ResourceLocation>;
        getLootTableIds(arg0: $IdFilter_): $Set<$ResourceLocation>;
        forEachTable(arg0: $IdFilter_, arg1: $Consumer_<$MutableLootTable>): void;
        forEachTable(arg0: $Consumer_<$MutableLootTable>): void;
        hasLootTable(arg0: $ResourceLocation_): boolean;
        getEntityTable(arg0: $EntityType_<never>): $MutableLootTable;
        getBlockTable(arg0: $Block_): $MutableLootTable;
        clearLootTables(arg0: $IdFilter_): void;
        modifyLootTables(...arg0: $LootTableFilter[]): $LootTableList;
        modifyBlockTables(arg0: $IdFilter_): $LootTableList;
        modifyEntityTables(arg0: $IdFilter_): $LootTableList;
        /**
         * @deprecated
         */
        modifyLootTypeTables(...arg0: $LootType_[]): $LootTableList;
        create(arg0: $ResourceLocation_, arg1: $LootType_): $MutableLootTable;
        create(arg0: $ResourceLocation_): $MutableLootTable;
        getLootTable(arg0: $ResourceLocation_): $MutableLootTable;
        constructor(arg0: $WritableRegistry<$LootTable>);
    }
    export class $LootActionContainer<A extends $LootActionContainer<never>> {
    }
    export interface $LootActionContainer<A extends $LootActionContainer<never>> {
        addAction(arg0: $LootAction_): A;
        modifyLoot(arg0: $ItemFilter_, arg1: $ModifyLootAction$Callback_): A;
        replaceLoot(arg0: $ItemFilter_, arg1: $LootEntry, arg2: boolean): A;
        replaceLoot(arg0: $ItemFilter_, arg1: $LootEntry): A;
        replaceLoot(arg0: $ItemFilter_, arg1: $LootEntry, arg2: boolean, arg3: $DataComponentType_<never>[]): A;
        addLoot(...arg0: $LootEntry[]): A;
        addAlternativesLoot(...arg0: $LootEntry[]): A;
        addSequenceLoot(...arg0: $LootEntry[]): A;
        removeLoot(arg0: $ItemFilter_): A;
        triggerExplosion(arg0: number, arg1: $Explosion$BlockInteraction_, arg2: boolean): A;
        triggerExplosion(arg0: number, arg1: boolean, arg2: boolean): A;
        triggerLightningStrike(arg0: boolean): A;
        customAction(arg0: $LootAction_): A;
        playerAction(arg0: $Consumer_<$ServerPlayer>): A;
        group(arg0: $ItemFilter_, arg1: $Consumer_<$GroupedLootAction$Builder>): A;
        group(arg0: $Consumer_<$GroupedLootAction$Builder>): A;
        pool(arg0: $Consumer_<$MutableLootPool>): A;
        dropExperience(arg0: $NumberProvider_): A;
    }
    /**
     * Values that may be interpreted as {@link $LootActionContainer}.
     */
    export type $LootActionContainer_<A> = ((arg0: $LootAction) => A);
    export class $LootFunction extends $Record implements $LootFunctionsContainer<$LootItemFunction> {
        addFunction(arg0: $LootItemFunction): $LootItemFunction;
        enchant(arg0: $Consumer_<$SetEnchantmentsFunction$Builder>): $LootItemFunction;
        enchant(arg0: boolean, arg1: $Consumer_<$SetEnchantmentsFunction$Builder>): $LootItemFunction;
        enchantWithLevels(arg0: $NumberProvider_): $LootItemFunction;
        setCustomData(arg0: $CompoundTag_): $LootItemFunction;
        limitCount(arg0: $NumberProvider_ | null, arg1: $NumberProvider_ | null): $LootItemFunction;
        enchantRandomly(): $LootItemFunction;
        enchantRandomly(arg0: $HolderSet_<$Enchantment>): $LootItemFunction;
        applyEnchantmentBonus(arg0: $NumberProvider_): $LootItemFunction;
        applyEnchantmentBonus(arg0: $Holder_<$Enchantment>, arg1: $NumberProvider_): $LootItemFunction;
        applyBinomialDistributionBonus(arg0: $Holder_<$Enchantment>, arg1: number, arg2: number): $LootItemFunction;
        applyOreBonus(arg0: $Holder_<$Enchantment>): $LootItemFunction;
        applyBonus(arg0: $Holder_<$Enchantment>, arg1: number): $LootItemFunction;
        simulateExplosionDecay(): $LootItemFunction;
        addPotion(arg0: $Potion_): $LootItemFunction;
        addLore(...arg0: $Component_[]): $LootItemFunction;
        replaceLore(...arg0: $Component_[]): $LootItemFunction;
        toggleTooltips(arg0: $Map_<string, boolean>): $LootItemFunction;
        jsonFunction(arg0: $JsonObject_): $LootItemFunction;
        smelt(): $LootItemFunction;
        addAttributes(arg0: $Consumer_<$AddAttributesFunction$Builder>): $LootItemFunction;
        setName(arg0: $Component_): $LootItemFunction;
        setCount(arg0: $NumberProvider_): $LootItemFunction;
        damage(arg0: $NumberProvider_): $LootItemFunction;
        constructor();
        set customData(value: $CompoundTag_);
        set name(value: $Component_);
        set count(value: $NumberProvider_);
    }
    /**
     * Values that may be interpreted as {@link $LootFunction}.
     */
    export type $LootFunction_ = {  } | [];
    export class $LootEntryList extends $ListHolder<$LootEntry, $LootPoolEntryContainer> implements $LootEntriesTransformer, $LootEntryAppender {
        createVanillaArray(): $List<$LootPoolEntryContainer>;
        collectDebugInfo(arg0: $DebugInfo): void;
        modifyEntry(arg0: $UnaryOperator_<$SimpleLootEntry>, arg1: boolean): $LootEntryList;
        removeEntry(arg0: $Predicate_<$SimpleLootEntry>, arg1: boolean): $LootEntryList;
        remove(arg0: $IdFilter_): boolean;
        indexOf(arg0: $LootPoolEntryType_): number;
        lastIndexOf(arg0: $LootPoolEntryType_): number;
        iterator(): $ListIterator<$LootEntry>;
        contains(arg0: $LootPoolEntryType_): boolean;
        addEntry(arg0: $LootEntry): $LootEntryList;
        modify(arg0: $UnaryOperator_<$LootEntry>): void;
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
        constructor();
        constructor(arg0: $List_<$LootPoolEntryContainer>);
        constructor(...arg0: $LootEntry[]);
    }
    export class $LootFunctionList extends $ListHolder<$LootItemFunction, $LootItemFunction> implements $LootFunctionsContainer<$LootFunctionList>, $BiFunction<$ItemStack, $LootContext, $ItemStack> {
        collectDebugInfo(arg0: $DebugInfo): void;
        addFunction(arg0: $LootItemFunction): $LootFunctionList;
        remove(arg0: $IdFilter_): boolean;
        indexOf(arg0: $LootItemFunctionType_<never>): number;
        lastIndexOf(arg0: $LootItemFunctionType_<never>): number;
        replace(arg0: $LootItemFunctionType_<never>, arg1: $LootItemFunction): boolean;
        apply(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        contains(arg0: $LootItemFunctionType_<never>): boolean;
        enchant(arg0: $Consumer_<$SetEnchantmentsFunction$Builder>): $LootFunctionList;
        enchant(arg0: boolean, arg1: $Consumer_<$SetEnchantmentsFunction$Builder>): $LootFunctionList;
        enchantWithLevels(arg0: $NumberProvider_): $LootFunctionList;
        setCustomData(arg0: $CompoundTag_): $LootFunctionList;
        limitCount(arg0: $NumberProvider_ | null, arg1: $NumberProvider_ | null): $LootFunctionList;
        enchantRandomly(): $LootFunctionList;
        enchantRandomly(arg0: $HolderSet_<$Enchantment>): $LootFunctionList;
        applyEnchantmentBonus(arg0: $NumberProvider_): $LootFunctionList;
        applyEnchantmentBonus(arg0: $Holder_<$Enchantment>, arg1: $NumberProvider_): $LootFunctionList;
        applyBinomialDistributionBonus(arg0: $Holder_<$Enchantment>, arg1: number, arg2: number): $LootFunctionList;
        applyOreBonus(arg0: $Holder_<$Enchantment>): $LootFunctionList;
        applyBonus(arg0: $Holder_<$Enchantment>, arg1: number): $LootFunctionList;
        simulateExplosionDecay(): $LootFunctionList;
        addPotion(arg0: $Potion_): $LootFunctionList;
        addLore(...arg0: $Component_[]): $LootFunctionList;
        replaceLore(...arg0: $Component_[]): $LootFunctionList;
        toggleTooltips(arg0: $Map_<string, boolean>): $LootFunctionList;
        jsonFunction(arg0: $JsonObject_): $LootFunctionList;
        smelt(): $LootFunctionList;
        addAttributes(arg0: $Consumer_<$AddAttributesFunction$Builder>): $LootFunctionList;
        setName(arg0: $Component_): $LootFunctionList;
        setCount(arg0: $NumberProvider_): $LootFunctionList;
        damage(arg0: $NumberProvider_): $LootFunctionList;
        andThen<V>(arg0: $Function_<$ItemStack, V>): $BiFunction<$ItemStack, $LootContext, V>;
        constructor();
        constructor(arg0: $List_<$LootItemFunction>);
        set customData(value: $CompoundTag_);
        set name(value: $Component_);
        set count(value: $NumberProvider_);
    }
}
