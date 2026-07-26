import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $MobCategory_, $EntityType, $Entity, $LivingEntity, $MobSpawnType_, $MobSpawnType } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $Attribute, $Attribute_, $Attribute$Sentiment_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $WrappedSpawner, $LevelBlock, $KubeLevelEvent } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Collection, $Map } from "@package/java/util";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Holder_, $Holder, $RegistryAccess, $Registry, $Direction } from "@package/net/minecraft/core";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EntityJoinLevelEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $LivingDamageEvent$Pre, $LivingDropsEvent, $LivingDeathEvent, $FinalizeSpawnEvent, $LivingDamageEvent$Post } from "@package/net/neoforged/neoforge/event/entity/living";
import { $Record, $Object } from "@package/java/lang";
import { $HitResult, $Vec3, $HitResult$Type } from "@package/net/minecraft/world/phys";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/dev/latvian/mods/kubejs/entity" {
    export class $EntityPotionEffectsJS {
        isApplicable(effect: $MobEffectInstance): boolean;
        getActive(mobEffect: $Holder_<$MobEffect>): $MobEffectInstance;
        getActive(): $Collection<$MobEffectInstance>;
        getDuration(mobEffect: $Holder_<$MobEffect>): number;
        clear(): void;
        add(mobEffect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, showParticles: boolean): void;
        add(mobEffect: $Holder_<$MobEffect>, duration: number, amplifier: number): void;
        add(mobEffect: $Holder_<$MobEffect>, duration: number): void;
        add(mobEffect: $Holder_<$MobEffect>): void;
        isActive(mobEffect: $Holder_<$MobEffect>): boolean;
        getMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        constructor(e: $LivingEntity);
        get map(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
    }
    export class $CheckLivingEntitySpawnKubeEvent implements $KubeLivingEntityEvent {
        /**
         * The spawner that spawned the entity.
         */
        getSpawner(): $WrappedSpawner;
        /**
         * The entity being spawned.
         */
        getEntity(): $LivingEntity;
        /**
         * The level the entity is being spawned into.
         */
        getLevel(): $Level;
        /**
         * The block the entity is being spawned on.
         */
        getBlock(): $LevelBlock;
        /**
         * The type of spawn.
         */
        getType(): $MobSpawnType;
        getPlayer(): $Player;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        x: number;
        y: number;
        z: number;
        constructor(entity: $LivingEntity, level: $Level_, x: number, y: number, z: number, type: $MobSpawnType_, spawnerEither: $Either<$BlockEntity, $Entity>);
        get spawner(): $WrappedSpawner;
        get entity(): $LivingEntity;
        get level(): $Level;
        get block(): $LevelBlock;
        get type(): $MobSpawnType;
        get player(): $Player;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $KubeEntityEvent {
    }
    export interface $KubeEntityEvent extends $KubeLevelEvent {
        getPlayer(): $Player;
        getEntity(): $Entity;
        getLevel(): $Level;
        get player(): $Player;
        get entity(): $Entity;
        get level(): $Level;
    }
    /**
     * Values that may be interpreted as {@link $KubeEntityEvent}.
     */
    export type $KubeEntityEvent_ = (() => $Entity);
    export class $AttributeBuilder extends $BuilderBase<$Attribute> {
        syncable(watch: boolean): this;
        sentiment(sentiment: $Attribute$Sentiment_): this;
        transformObject(attribute: $Attribute_): $Attribute;
        negativeSentiment(): this;
        neutralSentiment(): this;
        attachToPlayers(): this;
        attachToMonsters(): this;
        attachToCategory(category: $MobCategory_): this;
        attachTo(entityType: $Predicate_<$EntityType<never>>): this;
        range(defaultValue: number, min: number, max: number): this;
        bool(defaultValue: boolean): this;
        registryKey: $ResourceKey<$Registry<$Attribute>>;
        sourceLine: $SourceLine;
        predicateList: $List<$Predicate<$EntityType<never>>>;
        defaultValue: $Either<$AttributeBuilder$Range, boolean>;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $LivingEntityDeathKubeEvent implements $KubeLivingEntityEvent {
        /**
         * The entity that dies.
         */
        getEntity(): $LivingEntity;
        /**
         * The damage source that triggers the death.
         */
        getSource(): $DamageSource;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(entity: $LivingEntity, source: $DamageSource_);
        get entity(): $LivingEntity;
        get source(): $DamageSource;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $EntitySpawnedKubeEvent implements $KubeEntityEvent {
        /**
         * The entity being added to the world.
         */
        getEntity(): $Entity;
        /**
         * The level the entity is being added to.
         */
        getLevel(): $Level;
        getPlayer(): $Player;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(entity: $Entity, level: $Level_);
        get entity(): $Entity;
        get level(): $Level;
        get player(): $Player;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $BeforeLivingEntityHurtKubeEvent implements $KubeLivingEntityEvent {
        setDamage(damage: number): void;
        /**
         * The entity that was hurt.
         */
        getEntity(): $LivingEntity;
        /**
         * The damage source.
         */
        getSource(): $DamageSource;
        /**
         * The amount of damage.
         */
        getDamage(): number;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(event: $LivingDamageEvent$Pre);
        get entity(): $LivingEntity;
        get source(): $DamageSource;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $LivingEntityDropsKubeEvent implements $KubeLivingEntityEvent {
        isRecentlyHit(): boolean;
        addDrop(stack: $ItemStack_, chance: number): $ItemEntity;
        addDrop(stack: $ItemStack_): $ItemEntity;
        getEntity(): $LivingEntity;
        getSource(): $DamageSource;
        getDrops(): $List<$ItemEntity>;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        eventDrops: $List<$ItemEntity>;
        constructor(e: $LivingDropsEvent);
        get recentlyHit(): boolean;
        get entity(): $LivingEntity;
        get source(): $DamageSource;
        get drops(): $List<$ItemEntity>;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $AttributeBuilder$Range extends $Record {
        min(): number;
        max(): number;
        defaultValue(): number;
        constructor(defaultValue: number, min: number, max: number);
    }
    /**
     * Values that may be interpreted as {@link $AttributeBuilder$Range}.
     */
    export type $AttributeBuilder$Range_ = { min?: number, defaultValue?: number, max?: number,  } | [min?: number, defaultValue?: number, max?: number, ];
    export class $AfterLivingEntityHurtKubeEvent implements $KubeLivingEntityEvent {
        /**
         * The entity that was hurt.
         */
        getEntity(): $LivingEntity;
        /**
         * The damage source.
         */
        getSource(): $DamageSource;
        /**
         * The amount of damage.
         */
        getDamage(): number;
        getPlayer(): $Player;
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        constructor(event: $LivingDamageEvent$Post);
        get entity(): $LivingEntity;
        get source(): $DamageSource;
        get damage(): number;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $KubeRayTraceResult {
        getHitX(): number;
        getHitY(): number;
        getHitZ(): number;
        hit: $Vec3;
        fromEntity: $Entity;
        distance: number;
        facing: $Direction;
        block: $LevelBlock;
        type: $HitResult$Type;
        entity: $Entity;
        constructor(from: $Entity, result: $HitResult);
        constructor(from: $Entity, result: $HitResult, d: number);
        get hitX(): number;
        get hitY(): number;
        get hitZ(): number;
    }
    export class $KubeJSEntityEventHandler {
        static livingDrops(event: $LivingDropsEvent): void;
        static checkSpawn(event: $FinalizeSpawnEvent): void;
        static livingDeath(event: $LivingDeathEvent): void;
        static beforeLivingHurt(event: $LivingDamageEvent$Pre): void;
        static afterLivingHurt(event: $LivingDamageEvent$Post): void;
        static entitySpawned(event: $EntityJoinLevelEvent): void;
        constructor();
    }
    export class $KubeLivingEntityEvent {
    }
    export interface $KubeLivingEntityEvent extends $KubeEntityEvent {
        getEntity(): $LivingEntity;
        get entity(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $KubeLivingEntityEvent}.
     */
    export type $KubeLivingEntityEvent_ = (() => $LivingEntity);
}
