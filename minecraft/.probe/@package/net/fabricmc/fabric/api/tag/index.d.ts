import { $Component } from "@package/net/minecraft/network/chat";
export * as v1 from "@package/net/fabricmc/fabric/api/tag/v1";

declare module "@package/net/fabricmc/fabric/api/tag" {
    export class $FabricTagKey {
    }
    export interface $FabricTagKey {
        getTranslationKey(): string;
        getName(): $Component;
        get translationKey(): string;
        get name(): $Component;
    }
}
