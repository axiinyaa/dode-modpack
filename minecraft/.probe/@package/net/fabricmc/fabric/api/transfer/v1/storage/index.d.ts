import { $DataComponentPatch_, $DataComponentMap, $DataComponentPatch } from "@package/net/minecraft/core/component";

declare module "@package/net/fabricmc/fabric/api/transfer/v1/storage" {
    export class $TransferVariant<O> {
    }
    export interface $TransferVariant<O> {
        getComponentMap(): $DataComponentMap;
        hasComponents(): boolean;
        componentsMatch(arg0: $DataComponentPatch_): boolean;
        withComponentChanges(arg0: $DataComponentPatch_): $TransferVariant<O>;
        isOf(arg0: O): boolean;
        isBlank(): boolean;
        getObject(): O;
        getComponents(): $DataComponentPatch;
        get componentMap(): $DataComponentMap;
        get blank(): boolean;
        get object(): O;
        get components(): $DataComponentPatch;
    }
}
