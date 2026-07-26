import { $Annotation } from "@package/java/lang/annotation";
import { $BlockPos } from "@package/net/minecraft/core";
import { $ValueConverter } from "@package/joptsimple";
import { $Method } from "@package/java/lang/reflect";
import { $Class } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/gametest" {
    export class $GameTestHooks {
        static registerGametests(): void;
        static isGametestServer(): boolean;
        static getTemplateNamespace(method: $Method): string;
        static prefixGameTestTemplate(method: $Method): boolean;
        static isGametestEnabled(): boolean;
        constructor();
        static get gametestServer(): boolean;
        static get gametestEnabled(): boolean;
    }
    export class $GameTestHolder implements $Annotation {
        value(): string;
    }
    export class $BlockPosValueConverter implements $ValueConverter<$BlockPos> {
        convert(value: string): $BlockPos;
        valueType(): $Class<$BlockPos>;
        valuePattern(): string;
        constructor();
    }
    export class $PrefixGameTestTemplate implements $Annotation {
        value(): boolean;
    }
}
