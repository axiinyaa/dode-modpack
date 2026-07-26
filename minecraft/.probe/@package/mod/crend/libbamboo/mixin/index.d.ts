import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";

declare module "@package/mod/crend/libbamboo/mixin" {
    export class $MinecraftClientAccessor {
    }
    export interface $MinecraftClientAccessor {
        setFramebuffer(arg0: $RenderTarget): void;
        set framebuffer(value: $RenderTarget);
    }
    /**
     * Values that may be interpreted as {@link $MinecraftClientAccessor}.
     */
    export type $MinecraftClientAccessor_ = ((arg0: $RenderTarget) => void);
}
