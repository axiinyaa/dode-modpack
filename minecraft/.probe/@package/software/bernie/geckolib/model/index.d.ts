import { $BiConsumer_ } from "@package/java/util/function";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $DataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $GeoBone, $BakedGeoModel } from "@package/software/bernie/geckolib/cache/object";
import { $GeoRenderer } from "@package/software/bernie/geckolib/renderer";
import { $GeoAnimatable } from "@package/software/bernie/geckolib/animatable";
import { $Animation, $AnimationProcessor, $AnimationState } from "@package/software/bernie/geckolib/animation";

declare module "@package/software/bernie/geckolib/model" {
    export class $GeoModel<T extends $GeoAnimatable> {
        handleAnimations(arg0: T, arg1: number, arg2: $AnimationState<T>, arg3: number): void;
        /**
         * @deprecated
         */
        getModelResource(arg0: T): $ResourceLocation;
        getModelResource(arg0: T, arg1: $GeoRenderer<T>): $ResourceLocation;
        getTextureResource(arg0: T, arg1: $GeoRenderer<T>): $ResourceLocation;
        /**
         * @deprecated
         */
        getTextureResource(arg0: T): $ResourceLocation;
        getAnimationProcessor(): $AnimationProcessor<T>;
        getAnimationResource(arg0: T): $ResourceLocation;
        crashIfBoneMissing(): boolean;
        setCustomAnimations(arg0: T, arg1: number, arg2: $AnimationState<T>): void;
        addAdditionalStateData(arg0: T, arg1: number, arg2: $BiConsumer_<$DataTicket<T>, T>): void;
        applyMolangQueries(arg0: $AnimationState<T>, arg1: number): void;
        getAnimationResourceFallbacks(arg0: T): $ResourceLocation[];
        getBakedModel(arg0: $ResourceLocation_): $BakedGeoModel;
        getBone(arg0: string): ($GeoBone) | undefined;
        getRenderType(arg0: T, arg1: $ResourceLocation_): $RenderType;
        getAnimation(arg0: T, arg1: string): $Animation;
        constructor();
        get animationProcessor(): $AnimationProcessor<T>;
    }
}
