import { $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $PackRepository, $Pack$ResourcesSupplier, $Pack, $RepositorySource, $Pack$Metadata_ } from "@package/net/minecraft/server/packs/repository";
import { $ContextAwareReloadListenerAccessor } from "@package/net/mehvahdjukaar/moonlight/core/mixins/platform";
import { $IModFileInfo } from "@package/net/neoforged/neoforgespi/language";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $PackResources, $AbstractPackResources, $PackLocationInfo_, $PackSelectionConfig_, $PackType_ } from "@package/net/minecraft/server/packs";
import { $ICondition$IContext_, $ICondition$IContext } from "@package/net/neoforged/neoforge/common/conditions";
import { $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Collection_, $List, $Map_ } from "@package/java/util";
import { $IModFile } from "@package/net/neoforged/neoforgespi/locating";
import { $PackMetadataSection_, $PackMetadataSection } from "@package/net/minecraft/server/packs/metadata/pack";

declare module "@package/net/neoforged/neoforge/resource" {
    export class $EmptyPackResources$EmptyResourcesSupplier implements $Pack$ResourcesSupplier {
        openFull(id: $PackLocationInfo_, info: $Pack$Metadata_): $PackResources;
        openPrimary(id: $PackLocationInfo_): $PackResources;
        constructor(packMeta: $PackMetadataSection_);
    }
    export class $EmptyPackResources extends $AbstractPackResources {
        constructor(packId: $PackLocationInfo_, packMeta: $PackMetadataSection_);
    }
    export class $ResourcePackLoader {
        static populatePackRepository(resourcePacks: $PackRepository, packType: $PackType_, trusted: boolean): void;
        static readWithOptionalMeta(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, type: $PackType_, selectionConfig: $PackSelectionConfig_): $Pack;
        static createPackForMod(mf: $IModFileInfo): $Pack$ResourcesSupplier;
        static buildPackFinder(modResourcePacks: $Map_<$IModFile, $Pack$ResourcesSupplier>, packType: $PackType_): $RepositorySource;
        static getPackNames(packType: $PackType_): $List<string>;
        static getPackFor(modId: string): ($Pack$ResourcesSupplier) | undefined;
        static reorderNewlyDiscoveredPacks(set: $Collection_<string>, old: $Collection_<string>, packRepository: $PackRepository): void;
        static expandAndRemoveRootChildren(packs: $Stream<$Pack>, availablePacks: $Collection_<$Pack>): $List<$Pack>;
        static MOD_RESOURCES_ID: string;
        static MOD_DATA_ID: string;
        static OPTIONAL_FORMAT: $MetadataSectionType<$PackMetadataSection>;
        constructor();
    }
    /**
     * Reload listeners that descend from this class will have the reload context automatically populated when it is available.
     * 
     * The context is guaranteed to be available for the duration of `PreparableReloadListener#reload`.
     * 
     * For children of `SimplePreparableReloadListener`, it will be available during both `SimplePreparableReloadListener#prepare` prepare()} and apply().
     */
    export class $ContextAwareReloadListener implements $PreparableReloadListener, $ContextAwareReloadListenerAccessor {
        injectContext(context: $ICondition$IContext_, registryLookup: $HolderLookup$Provider): void;
        getName(): string;
        invokeGetContext(): $ICondition$IContext;
        constructor();
        get name(): string;
    }
}
