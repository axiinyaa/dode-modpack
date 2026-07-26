import { $ETFLruCache$UUIDInteger } from "@package/traben/entity_texture_features/utils";
import { $ModelPartInjector } from "@package/dev/tr7zw/skinlayers/accessor";
import { $ModelPart, $PartPose, $ModelPart$Cube } from "@package/net/minecraft/client/model/geom";
import { $ETFApi$ETFVariantSuffixProvider } from "@package/traben/entity_texture_features";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $EMFDirectoryHandler } from "@package/traben/entity_model_features/utils";
import { $HashMap, $List, $Map_, $Map, $UUID_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $EMFModel_ID } from "@package/traben/entity_model_features/models";
import { $EMFJemData } from "@package/traben/entity_model_features/models/jem_objects";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EMFAnimationHandler } from "@package/traben/entity_model_features/models/animation";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Record } from "@package/java/lang";

declare module "@package/traben/entity_model_features/models/parts" {
    export class $EMFModelPartWithState extends $EMFModelPart {
        setVariantStateTo(newVariant: number): void;
        copyVariantTo(from: number, to: number): void;
        visible: boolean;
        static DEFAULT_SCALE: number;
        textureOverride: $ResourceLocation;
        zRot: number;
        yRot: number;
        xRot: number;
        yScale: number;
        isSetByAnimation: boolean;
        allKnownStateVariants: $Map<number, $EMFModelPartWithState$EMFModelState>;
        children: $Map<string, $ModelPart>;
        currentModelVariant: number;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        emf$modelInfo: $EMFModel_ID;
        zScale: number;
        constructor(cuboids: $List_<$ModelPart$Cube>, children: $Map_<string, $ModelPart>, root: $EMFModelPartRoot);
        set variantStateTo(value: number);
    }
    export class $EMFModelPart extends $ModelPart implements $ModelPartInjector {
        getAllChildPartsAsAnimationMap(prefixableParents: string, variantNum: number, optifinePartNameMap: $Map_<string, string>): $HashMap<string, $EMFModelPart>;
        processArmItemOverrides(matrices: $PoseStack): void;
        getVanillaModelPartsOfCurrentState(): $ModelPart;
        handler$hhd001$skinlayers3d$render(poseStack: $PoseStack, vertexConsumer: $VertexConsumer, light: number, overlay: number, color: number, ci: $CallbackInfo): void;
        renderBoxes(matrices: $PoseStack, vertices: $VertexConsumer): void;
        renderBoxesNoChildren(matrices: $PoseStack, vertices: $VertexConsumer, alpha: number): void;
        simplePrintChildren(depth: number): string;
        getRoot(): $EMFModelPartRoot;
        toStringShort(): string;
        visible: boolean;
        static DEFAULT_SCALE: number;
        textureOverride: $ResourceLocation;
        zRot: number;
        yRot: number;
        xRot: number;
        yScale: number;
        isSetByAnimation: boolean;
        children: $Map<string, $ModelPart>;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        emf$modelInfo: $EMFModel_ID;
        zScale: number;
        constructor(cuboids: $List_<$ModelPart$Cube>, children: $Map_<string, $ModelPart>, root: $EMFModelPartRoot);
        get vanillaModelPartsOfCurrentState(): $ModelPart;
        get root(): $EMFModelPartRoot;
    }
    export class $EMFModelPartRoot extends $EMFModelPartVanilla {
        checkArmOverrides(pose: $PoseStack): void;
        getTopLevelJemTexture(): $ResourceLocation;
        addVariantOfJem(jemData: $EMFJemData, variant: number): void;
        discoverAndInitVariants(fallbackPropertiesName: string): void;
        setVariant1ToVanilla0(): void;
        receiveAnimationHandler(variant: number, animationHandler: $EMFAnimationHandler): void;
        getAllVanillaPartsEMF(): $Collection<$EMFModelPartVanilla>;
        oneTimeRunnable(): void;
        doVariantCheck(): void;
        checkIfShouldExpireEntity(id: $UUID_): void;
        hasAnimation(): boolean;
        triggerManualAnimation(pose: $PoseStack): void;
        getVanillaFormatRoot(): $ModelPart;
        animate(): void;
        resetVanillaPartsToDefaults(): void;
        tryRenderVanillaRootNormally(matrixStack: $PoseStack, vertexConsumer: $VertexConsumer, light: number, overlay: number): void;
        static DEFAULT_SCALE: number;
        textureOverride: $ResourceLocation;
        zRot: number;
        xRot: number;
        containsCustomAnims: boolean;
        allKnownStateVariants: $Map<number, $EMFModelPartWithState$EMFModelState>;
        children: $Map<string, $ModelPart>;
        vanillaRoot: $ModelPart;
        zScale: number;
        isMainModel: boolean;
        visible: boolean;
        yRot: number;
        yScale: number;
        variantTester: $ETFApi$ETFVariantSuffixProvider;
        directoryContext: $EMFDirectoryHandler;
        modelName: $EMFModel_ID;
        isSetByAnimation: boolean;
        currentModelVariant: number;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        emf$modelInfo: $EMFModel_ID;
        entitySuffixMap: $ETFLruCache$UUIDInteger;
        containsCustomModel: boolean;
        constructor(mobNameForFileAndMap: $EMFModel_ID, directoryContext: $EMFDirectoryHandler, vanillaRoot: $ModelPart, optifinePartNames: $Collection_<string>, mapForCreatedParts: $Map_<string, $EMFModelPartVanilla>);
        get topLevelJemTexture(): $ResourceLocation;
        get allVanillaPartsEMF(): $Collection<$EMFModelPartVanilla>;
        get vanillaFormatRoot(): $ModelPart;
    }
    export class $EMFModelPartWithState$EMFModelState extends $Record {
        zScale(): number;
        cuboids(): $List<$ModelPart$Cube>;
        defaultTransform(): $PartPose;
        variantChildren(): $Map<string, $ModelPart>;
        texture(): $ResourceLocation;
        visible(): boolean;
        copy(): $EMFModelPartWithState$EMFModelState;
        copy(visibleOverride: boolean): $EMFModelPartWithState$EMFModelState;
        hidden(): boolean;
        xScale(): number;
        yScale(): number;
        constructor(defaultTransform: $PartPose, cuboids: $List_<$ModelPart$Cube>, variantChildren: $Map_<string, $ModelPart>, xScale: number, yScale: number, zScale: number, visible: boolean, hidden: boolean, texture: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $EMFModelPartWithState$EMFModelState}.
     */
    export type $EMFModelPartWithState$EMFModelState_ = { variantChildren?: $Map_<string, $ModelPart>, zScale?: number, defaultTransform?: $PartPose, texture?: $ResourceLocation_, cuboids?: $List_<$ModelPart$Cube>, yScale?: number, hidden?: boolean, visible?: boolean, xScale?: number,  } | [variantChildren?: $Map_<string, $ModelPart>, zScale?: number, defaultTransform?: $PartPose, texture?: $ResourceLocation_, cuboids?: $List_<$ModelPart$Cube>, yScale?: number, hidden?: boolean, visible?: boolean, xScale?: number, ];
    export class $EMFModelPartVanilla extends $EMFModelPartWithState {
        setHideInTheseStates(variant: number): void;
        getAllEMFCustomChildren(): $ModelPart[];
        visible: boolean;
        static DEFAULT_SCALE: number;
        textureOverride: $ResourceLocation;
        zRot: number;
        yRot: number;
        xRot: number;
        yScale: number;
        isSetByAnimation: boolean;
        allKnownStateVariants: $Map<number, $EMFModelPartWithState$EMFModelState>;
        children: $Map<string, $ModelPart>;
        currentModelVariant: number;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        emf$modelInfo: $EMFModel_ID;
        zScale: number;
        constructor(name: string, vanillaPart: $ModelPart, optifinePartNames: $Collection_<string>, allVanillaParts: $Map_<string, $EMFModelPartVanilla>, root: $EMFModelPartRoot);
        set hideInTheseStates(value: number);
        get allEMFCustomChildren(): $ModelPart[];
    }
}
