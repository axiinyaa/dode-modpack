import { $Codec } from "@package/com/mojang/serialization";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Component, $FormattedText } from "@package/net/minecraft/network/chat";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Language } from "@package/net/minecraft/locale";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $SortedMap, $Map_, $Locale, $Map, $List_, $Collection } from "@package/java/util";
import { $FormattedCharSequence } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TranslationStorage } from "@package/com/natamus/collective_common_neoforge/translations";
import { $Record, $Object } from "@package/java/lang";

declare module "@package/net/minecraft/client/resources/language" {
    export class $I18n {
        static setLanguage(language: $Language): void;
        /**
         * Translates the given string and then formats it. Equivalent to `String.format(translate(key), parameters)`.
         */
        static get(translateKey: string, ...parameters: $Object[]): string;
        static exists(key: string): boolean;
        static set language(value: $Language);
    }
    export class $LanguageManager implements $ResourceManagerReloadListener, $IdentifiableResourceReloadListener {
        getFabricId(): $ResourceLocation;
        getFabricDependencies(): $Collection<any>;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        getLanguages(): $SortedMap<string, $LanguageInfo>;
        getSelected(): string;
        getLanguage(code: string): $LanguageInfo;
        setSelected(selected: string): void;
        getJavaLocale(): $Locale;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        constructor(currentCode: string, reloadFallback: $Consumer_<$ClientLanguage>);
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get languages(): $SortedMap<string, $LanguageInfo>;
        get javaLocale(): $Locale;
        get name(): string;
    }
    export class $ClientLanguage extends $Language implements $TranslationStorage {
        static loadFrom(resourceManager: $ResourceManager, filenames: $List_<string>, defaultRightToLeft: boolean): $ClientLanguage;
        collective$mergeTranslations(arg0: $Map_<any, any>): void;
        storage: $Map<string, string>;
        static DEFAULT: string;
    }
    export class $FormattedBidiReorder {
        static reorder(text: $FormattedText, defaultRightToLeft: boolean): $FormattedCharSequence;
        constructor();
    }
    export class $LanguageInfo extends $Record {
        toComponent(): $Component;
        bidirectional(): boolean;
        region(): string;
        name(): string;
        static CODEC: $Codec<$LanguageInfo>;
        constructor(arg0: string, arg1: string, arg2: boolean);
    }
    /**
     * Values that may be interpreted as {@link $LanguageInfo}.
     */
    export type $LanguageInfo_ = { region?: string, name?: string, bidirectional?: boolean,  } | [region?: string, name?: string, bidirectional?: boolean, ];
}
