import { $Supplier_, $IntSupplier_, $LongSupplier_ } from "@package/java/util/function";
import { $Object2LongMap, $Object2LongOpenHashMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $MetricCategory_, $MetricCategory } from "@package/net/minecraft/util/profiling/metrics";
import { $Path_ } from "@package/java/nio/file";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $Map_, $Set } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
export * as jfr from "@package/net/minecraft/util/profiling/jfr";
export * as metrics from "@package/net/minecraft/util/profiling/metrics";

declare module "@package/net/minecraft/util/profiling" {
    export class $EmptyProfileResults implements $ProfileResults {
        getTimes(sectionPath: string): $List<$ResultField>;
        getEndTimeTicks(): number;
        getProfilerResults(): string;
        saveResults(path: $Path_): boolean;
        getStartTimeNano(): number;
        getStartTimeTicks(): number;
        getEndTimeNano(): number;
        getTickDuration(): number;
        getNanoDuration(): number;
        static EMPTY: $EmptyProfileResults;
        get endTimeTicks(): number;
        get profilerResults(): string;
        get startTimeNano(): number;
        get startTimeTicks(): number;
        get endTimeNano(): number;
        get tickDuration(): number;
        get nanoDuration(): number;
    }
    export class $ActiveProfiler implements $ProfileCollector {
        handler$zii000$veil$push(arg0: string, arg1: $CallbackInfo): void;
        handler$zii000$veil$pop(arg0: $CallbackInfo): void;
        getEntry(entryId: string): $ActiveProfiler$PathEntry;
        push(nameSupplier: $Supplier_<string>): void;
        push(name: string): void;
        /**
         * End section
         */
        pop(): void;
        markForCharting(category: $MetricCategory_): void;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        /**
         * End section
         */
        startTick(): void;
        /**
         * End section
         */
        endTick(): void;
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        incrementCounter(counterName: string, increment: number): void;
        popPush(nameSupplier: $Supplier_<string>): void;
        popPush(name: string): void;
        getResults(): $ProfileResults;
        incrementCounter(name: string): void;
        incrementCounter(nameSupplier: $Supplier_<string>): void;
        constructor(startTimeNano: $LongSupplier_, startTimeTicks: $IntSupplier_, warn: boolean);
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        get results(): $ProfileResults;
    }
    export class $InactiveProfiler implements $ProfileCollector {
        getEntry(entryId: string): $ActiveProfiler$PathEntry;
        push(name: string): void;
        push(nameSupplier: $Supplier_<string>): void;
        /**
         * End section
         */
        pop(): void;
        markForCharting(category: $MetricCategory_): void;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        /**
         * End section
         */
        startTick(): void;
        /**
         * End section
         */
        endTick(): void;
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        incrementCounter(counterName: string, increment: number): void;
        popPush(name: string): void;
        popPush(nameSupplier: $Supplier_<string>): void;
        getResults(): $ProfileResults;
        incrementCounter(name: string): void;
        incrementCounter(nameSupplier: $Supplier_<string>): void;
        static INSTANCE: $InactiveProfiler;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        get results(): $ProfileResults;
    }
    export class $ActiveProfiler$PathEntry implements $ProfilerPathEntry {
        getCounters(): $Object2LongMap<string>;
        getMaxDuration(): number;
        getDuration(): number;
        getCount(): number;
        minDuration: number;
        counters: $Object2LongOpenHashMap<string>;
        count: number;
        maxDuration: number;
        accumulatedDuration: number;
        constructor();
        get duration(): number;
    }
    export class $ProfilerFiller {
        static tee(first: $ProfilerFiller, second: $ProfilerFiller): $ProfilerFiller;
        static ROOT: string;
    }
    export interface $ProfilerFiller {
        push(entryIdSupplier: $Supplier_<string>): void;
        push(entryId: string): void;
        /**
         * End section
         */
        pop(): void;
        markForCharting(category: $MetricCategory_): void;
        /**
         * End section
         */
        startTick(): void;
        /**
         * End section
         */
        endTick(): void;
        incrementCounter(counterName: string, increment: number): void;
        incrementCounter(entryId: string): void;
        incrementCounter(entryIdSupplier: $Supplier_<string>): void;
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        popPush(entryIdSupplier: $Supplier_<string>): void;
        popPush(entryId: string): void;
    }
    export class $ContinuousProfiler {
        isEnabled(): boolean;
        enable(): void;
        disable(): void;
        getFiller(): $ProfilerFiller;
        getResults(): $ProfileResults;
        constructor(realTime: $LongSupplier_, tickCount: $IntSupplier_);
        get enabled(): boolean;
        get filler(): $ProfilerFiller;
        get results(): $ProfileResults;
    }
    export class $ProfilerPathEntry {
    }
    export interface $ProfilerPathEntry {
        getCounters(): $Object2LongMap<string>;
        getMaxDuration(): number;
        getDuration(): number;
        getCount(): number;
        get counters(): $Object2LongMap<string>;
        get maxDuration(): number;
        get duration(): number;
        get count(): number;
    }
    export class $SingleTickProfiler {
        static createTickProfiler(name: string): $SingleTickProfiler;
        startTick(): $ProfilerFiller;
        endTick(): void;
        static decorateFiller(profiler: $ProfilerFiller, singleTickProfiler: $SingleTickProfiler | null): $ProfilerFiller;
        constructor(realTime: $LongSupplier_, location: string, saveThreshold: number);
    }
    export class $ResultField implements $Comparable<$ResultField> {
        compareTo(arg0: $ResultField): number;
        getColor(): number;
        globalPercentage: number;
        percentage: number;
        count: number;
        name: string;
        constructor(name: string, percentage: number, arg2: number, globalPercentage: number);
        get color(): number;
    }
    export class $FilledProfileResults implements $ProfileResults {
        getTimes(sectionPath: string): $List<$ResultField>;
        getEndTimeTicks(): number;
        getProfilerResults(): string;
        getProfilerResults(timeSpan: number, arg1: number): string;
        saveResults(path: $Path_): boolean;
        getStartTimeNano(): number;
        getStartTimeTicks(): number;
        getEndTimeNano(): number;
        getTickDuration(): number;
        getNanoDuration(): number;
        constructor(entries: $Map_<string, $ProfilerPathEntry>, startTimeNano: number, arg2: number, startTimeTicks: number, endTimeNano: number);
        get endTimeTicks(): number;
        get startTimeNano(): number;
        get startTimeTicks(): number;
        get endTimeNano(): number;
        get tickDuration(): number;
        get nanoDuration(): number;
    }
    export class $ProfileResults {
        static demanglePath(path: string): string;
        static PATH_SEPARATOR: string;
    }
    export interface $ProfileResults {
        getTimes(sectionPath: string): $List<$ResultField>;
        getEndTimeTicks(): number;
        getProfilerResults(): string;
        saveResults(path: $Path_): boolean;
        getStartTimeNano(): number;
        getStartTimeTicks(): number;
        getEndTimeNano(): number;
        getTickDuration(): number;
        getNanoDuration(): number;
        get endTimeTicks(): number;
        get profilerResults(): string;
        get startTimeNano(): number;
        get startTimeTicks(): number;
        get endTimeNano(): number;
        get tickDuration(): number;
        get nanoDuration(): number;
    }
    export class $ProfileCollector {
    }
    export interface $ProfileCollector extends $ProfilerFiller {
        getEntry(entryId: string): $ActiveProfiler$PathEntry;
        getChartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        getResults(): $ProfileResults;
        get chartedPaths(): $Set<$Pair<string, $MetricCategory>>;
        get results(): $ProfileResults;
    }
    export class $FilledProfileResults$CounterCollector {
    }
}
