import { $TagEntry } from "@package/net/minecraft/tags";
import { $List } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/api/tag/v1" {
    export class $FabricTagFile {
    }
    export interface $FabricTagFile {
        remove(): $List<$TagEntry>;
    }
}
