import { $EntityModel } from "@package/net/minecraft/client/model";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $List } from "@package/java/util";

declare module "@package/me/ichun/mods/ichunutil/mixin/client" {
    export class $LivingEntityRendererAccessorMixin<T extends $LivingEntity, M extends $EntityModel<T>> {
    }
    export interface $LivingEntityRendererAccessorMixin<T extends $LivingEntity, M extends $EntityModel<T>> {
        setModel(arg0: M): void;
        invokeAddLayer(arg0: $RenderLayer<T, M>): boolean;
        getLayers(): $List<$RenderLayer<T, M>>;
        set model(value: M);
        get layers(): $List<$RenderLayer<T, M>>;
    }
}
