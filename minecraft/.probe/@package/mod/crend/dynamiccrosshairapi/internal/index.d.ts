import { $Function, $Function_ } from "@package/java/util/function";
import { $DynamicCrosshairApi, $DynamicCrosshairApiBlockState, $DynamicCrosshairApiItemStack, $DynamicCrosshairApiEntityType } from "@package/mod/crend/dynamiccrosshairapi";

declare module "@package/mod/crend/dynamiccrosshairapi/internal" {
    export class $ContextedApi {
    }
    export interface $ContextedApi extends $DynamicCrosshairApiBlockState, $DynamicCrosshairApiEntityType, $DynamicCrosshairApiItemStack {
        test(arg0: $Function_<$DynamicCrosshairApi, boolean>): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ContextedApi}.
     */
    export type $ContextedApi_ = ((arg0: $Function<$DynamicCrosshairApi, boolean>) => boolean);
}
