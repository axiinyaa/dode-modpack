import { $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $List_, $List } from "@package/java/util";

declare module "@package/io/ejekta/kambrik/internal/mixins" {
    export class $StructurePoolAccessor {
    }
    export interface $StructurePoolAccessor {
        getElementCounts(): $List<$Pair<$StructurePoolElement, number>>;
        setElementCounts(arg0: $List_<$Pair<$StructurePoolElement, number>>): void;
        getElements(): $ObjectArrayList<$StructurePoolElement>;
        get elements(): $ObjectArrayList<$StructurePoolElement>;
    }
}
