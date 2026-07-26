import { $LevelReader } from "@package/net/minecraft/world/level";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockPatternExtended } from "@package/net/caffeinemc/mods/lithium/common/world/block_pattern_matching";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $LoadingCache, $CacheLoader } from "@package/com/google/common/cache";

declare module "@package/net/minecraft/world/level/block/state/pattern" {
    export class $BlockPattern$BlockCacheLoader extends $CacheLoader<$BlockPos, $BlockInWorld> {
    }
    export class $BlockPatternBuilder {
        /**
         * Adds a single aisle to this pattern, going in the z axis. (so multiple calls to this will increase the z-size by 1)
         */
        aisle(...aisle: string[]): $BlockPatternBuilder;
        where(symbol: string, blockMatcher: $Predicate_<$BlockInWorld>): $BlockPatternBuilder;
        static start(): $BlockPatternBuilder;
        build(): $BlockPattern;
    }
    export class $BlockInWorld {
        static hasState(state: $Predicate_<$BlockState>): $Predicate<$BlockInWorld>;
        /**
         * Gets the BlockEntity as currently held, or (if it has not gotten it from the level) loads it from the level.
         */
        getEntity(): $BlockEntity;
        getLevel(): $LevelReader;
        /**
         * Gets the block state as currently held, or (if it has not gotten it from the level) loads it from the level.
         * This will only look up the state from the world if `#loadChunks` is true or the block position is loaded.
         */
        getState(): $BlockState;
        getPos(): $BlockPos;
        constructor(level: $LevelReader, pos: $BlockPos_, loadChunks: boolean);
        get entity(): $BlockEntity;
        get level(): $LevelReader;
        get state(): $BlockState;
        get pos(): $BlockPos;
    }
    export class $BlockPattern implements $BlockPatternExtended {
        lithium$setRequiredBlock(arg0: $Block_, arg1: number): void;
        /**
         * Offsets the position of pos in the direction of finger and thumb facing by offset amounts, follows the right-hand rule for cross products (finger, thumb, palm)
         * 
         * @return a new BlockPos offset in the facing directions
         */
        static translateAndRotate(pos: $BlockPos_, finger: $Direction_, thumb: $Direction_, palmOffset: number, thumbOffset: number, fingerOffset: number): $BlockPos;
        static createLevelCache(level: $LevelReader, forceLoad: boolean): $LoadingCache<$BlockPos, $BlockInWorld>;
        getWidth(): number;
        getHeight(): number;
        matches(level: $LevelReader, pos: $BlockPos_, finger: $Direction_, thumb: $Direction_): $BlockPattern$BlockPatternMatch;
        /**
         * Calculates whether the given world position matches the pattern. Warning, fairly heavy function.
         * @return a BlockPatternMatch if found, null otherwise.
         */
        find(level: $LevelReader, pos: $BlockPos_): $BlockPattern$BlockPatternMatch;
        getPattern(): $Predicate<$BlockInWorld>[][][];
        getDepth(): number;
        constructor(pattern: $Predicate_<$BlockInWorld>[][][]);
        get width(): number;
        get height(): number;
        get pattern(): $Predicate<$BlockInWorld>[][][];
        get depth(): number;
    }
    export class $BlockPattern$BlockPatternMatch {
        getForwards(): $Direction;
        getFrontTopLeft(): $BlockPos;
        getUp(): $Direction;
        getWidth(): number;
        getHeight(): number;
        getBlock(palmOffset: number, thumbOffset: number, fingerOffset: number): $BlockInWorld;
        getDepth(): number;
        constructor(frontTopLeft: $BlockPos_, forwards: $Direction_, up: $Direction_, cache: $LoadingCache<$BlockPos_, $BlockInWorld>, width: number, height: number, depth: number);
        get forwards(): $Direction;
        get frontTopLeft(): $BlockPos;
        get up(): $Direction;
        get width(): number;
        get height(): number;
        get depth(): number;
    }
}
