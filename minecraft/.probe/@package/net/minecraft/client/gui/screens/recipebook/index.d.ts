import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient, $Ingredient_, $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle, $FocusNavigationEvent_ } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget, $StateSwitchingButton, $WidgetSprites, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $Minecraft, $ClientRecipeBook, $RecipeBookCategories, $RecipeBookCategories_ } from "@package/net/minecraft/client";
import { $Iterator, $List, $Set, $List_ } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $VanillaWidgetComponent } from "@package/io/wispforest/owo/ui/component";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Slot, $RecipeBookMenu } from "@package/net/minecraft/world/inventory";
import { $GuiGraphics, $ComponentPath } from "@package/net/minecraft/client/gui";
import { $PlaceRecipe } from "@package/net/minecraft/recipebook";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
import { $RecipeBook } from "@package/net/minecraft/stats";

declare module "@package/net/minecraft/client/gui/screens/recipebook" {
    export class $OverlayRecipeComponent$OverlayRecipeButton extends $AbstractWidget implements $PlaceRecipe<$Ingredient> {
        placeRecipe(width: number, height: number, outputSlot: number, recipe: $RecipeHolder_<never>, ingredients: $Iterator<$Ingredient_>, maxAmount: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        active: boolean;
        owo$wrapper: $VanillaWidgetComponent;
    }
    export class $RecipeBookComponent implements $PlaceRecipe<$Ingredient>, $Renderable, $GuiEventListener, $NarratableEntry, $RecipeShownListener {
        setupGhostRecipe(recipe: $RecipeHolder_<never>, slots: $List_<$Slot>): void;
        handler$cli000$emi$toggleOpen(info: $CallbackInfo): void;
        initVisuals(): void;
        initFilterButtonTextures(): void;
        getRecipeFilterName(): $Component;
        sendUpdateSettings(): void;
        recipesShown(recipes: $List_<$RecipeHolder_<never>>): void;
        addItemToSlot(item: $Ingredient_, slot: number, maxAmount: number, x: number, y: number): void;
        tick(): void;
        init(width: number, height: number, minecraft: $Minecraft, widthTooNarrow: boolean, menu: $RecipeBookMenu<never, never>): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setVisible(focused: boolean): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        updateScreenPosition(width: number, imageWidth: number): number;
        renderGhostRecipe(guiGraphics: $GuiGraphics, leftPos: number, topPos: number, arg3: boolean, partialTick: number): void;
        hasClickedOutside(mouseX: number, arg1: number, mouseY: number, arg3: number, x: number, y: number, width: number): boolean;
        slotClicked(slot: $Slot | null): void;
        recipesUpdated(): void;
        toggleVisibility(): void;
        renderTooltip(guiGraphics: $GuiGraphics, x: number, y: number, mouseX: number, mouseY: number): void;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Checks if the given mouse coordinates are over the GUI element.
         * 
         * @return `true` if the mouse is over the GUI element, `false` otherwise.
         */
        isMouseOver(mouseX: number, arg1: number): boolean;
        /**
         * Updates the narration output with the current narration information.
         */
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * @return the narration priority
         */
        narrationPriority(): $NarratableEntry$NarrationPriority;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isFocused(): boolean;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isVisible(): boolean;
        placeRecipe(width: number, height: number, outputSlot: number, recipe: $RecipeHolder_<never>, ingredients: $Iterator<$Ingredient_>, maxAmount: number): void;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * Called when the mouse is moved within the GUI element.
         */
        mouseMoved(mouseX: number, arg1: number): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isActive(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        minecraft: $Minecraft;
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        menu: $RecipeBookMenu<never, never>;
        filterButton: $StateSwitchingButton;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        constructor();
        get recipeFilterName(): $Component;
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get active(): boolean;
        get tabOrderGroup(): number;
    }
    export class $SmeltingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        minecraft: $Minecraft;
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        menu: $RecipeBookMenu<never, never>;
        filterButton: $StateSwitchingButton;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        constructor();
    }
    export class $AbstractFurnaceRecipeBookComponent extends $RecipeBookComponent {
        getFuelItems(): $Set<$Item>;
        minecraft: $Minecraft;
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        menu: $RecipeBookMenu<never, never>;
        filterButton: $StateSwitchingButton;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        constructor();
        get fuelItems(): $Set<$Item>;
    }
    export class $SmokingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        minecraft: $Minecraft;
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        menu: $RecipeBookMenu<never, never>;
        filterButton: $StateSwitchingButton;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        constructor();
    }
    export class $RecipeBookTabButton extends $StateSwitchingButton {
        updateVisibility(recipeBook: $ClientRecipeBook): boolean;
        startAnimation(minecraft: $Minecraft): void;
        getCategory(): $RecipeBookCategories;
        visible: boolean;
        active: boolean;
        owo$wrapper: $VanillaWidgetComponent;
        sprites: $WidgetSprites;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        constructor(category: $RecipeBookCategories_);
        get category(): $RecipeBookCategories;
    }
    export class $GhostRecipe {
        getRecipe(): $RecipeHolder<never>;
        setRecipe(recipe: $RecipeHolder_<never>): void;
        addIngredient(ingredient: $Ingredient_, x: number, y: number): void;
        size(): number;
        get(index: number): $GhostRecipe$GhostIngredient;
        clear(): void;
        render(guiGraphics: $GuiGraphics, minecraft: $Minecraft, leftPos: number, topPos: number, offset: boolean, partialTick: number): void;
        time: number;
        constructor();
    }
    export class $OverlayRecipeComponent$OverlayRecipeButton$Pos {
    }
    export class $OverlayRecipeComponent$OverlaySmeltingRecipeButton extends $OverlayRecipeComponent$OverlayRecipeButton {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        active: boolean;
        owo$wrapper: $VanillaWidgetComponent;
    }
    export class $RecipeCollection {
        updateKnownRecipes(book: $RecipeBook): void;
        isCraftable(recipe: $RecipeHolder_<never>): boolean;
        /**
         * Checks if recipebook is not empty
         */
        hasCraftable(): boolean;
        /**
         * Checks if recipebook is not empty
         */
        hasFitting(): boolean;
        /**
         * Checks if recipebook is not empty
         */
        hasKnownRecipes(): boolean;
        getDisplayRecipes(craftable: boolean): $List<$RecipeHolder<never>>;
        /**
         * Checks if recipebook is not empty
         */
        hasSingleResultItem(): boolean;
        getRecipes(): $List<$RecipeHolder<never>>;
        getRecipes(craftable: boolean): $List<$RecipeHolder<never>>;
        canCraft(handler: $StackedContents, width: number, height: number, book: $RecipeBook): void;
        registryAccess(): $RegistryAccess;
        constructor(registryAccess: $RegistryAccess, recipes: $List_<$RecipeHolder_<never>>);
    }
    export class $RecipeUpdateListener {
    }
    export interface $RecipeUpdateListener {
        recipesUpdated(): void;
        getRecipeBookComponent(): $RecipeBookComponent;
        get recipeBookComponent(): $RecipeBookComponent;
    }
    export class $GhostRecipe$GhostIngredient {
        getY(): number;
        getItem(): $ItemStack;
        getX(): number;
        this$0: $GhostRecipe;
        constructor(ingredient: $GhostRecipe, x: $Ingredient_, y: number, arg3: number);
        get y(): number;
        get item(): $ItemStack;
        get x(): number;
    }
    export class $RecipeBookPage {
        getLastClickedRecipeCollection(): $RecipeCollection;
        updateCollections(recipeCollections: $List_<$RecipeCollection>, resetPageNumber: boolean): void;
        getLastClickedRecipe(): $RecipeHolder<never>;
        recipesShown(recipes: $List_<$RecipeHolder_<never>>): void;
        listButtons(consumer: $Consumer_<$AbstractWidget>): void;
        getRecipeBook(): $RecipeBook;
        init(minecraft: $Minecraft, x: number, y: number): void;
        getMinecraft(): $Minecraft;
        addListener(listener: $RecipeBookComponent): void;
        render(guiGraphics: $GuiGraphics, x: number, y: number, mouseX: number, mouseY: number, partialTick: number): void;
        setInvisible(): void;
        renderTooltip(guiGraphics: $GuiGraphics, x: number, y: number): void;
        mouseClicked(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number, arg5: number, arg6: number): boolean;
        static ITEMS_PER_PAGE: number;
        constructor();
        get lastClickedRecipeCollection(): $RecipeCollection;
        get lastClickedRecipe(): $RecipeHolder<never>;
        get recipeBook(): $RecipeBook;
        get minecraft(): $Minecraft;
    }
    export class $BlastingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        minecraft: $Minecraft;
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        menu: $RecipeBookMenu<never, never>;
        filterButton: $StateSwitchingButton;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        constructor();
    }
    export class $OverlayRecipeComponent implements $Renderable, $GuiEventListener {
        getLastRecipeClicked(): $RecipeHolder<never>;
        getRecipeCollection(): $RecipeCollection;
        init(minecraft: $Minecraft, collection: $RecipeCollection, x: number, y: number, arg4: number, arg5: number, arg6: number): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setVisible(focused: boolean): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * Checks if the given mouse coordinates are over the GUI element.
         * 
         * @return `true` if the mouse is over the GUI element, `false` otherwise.
         */
        isMouseOver(mouseX: number, arg1: number): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isFocused(): boolean;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isVisible(): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        /**
         * Called when the mouse is moved within the GUI element.
         */
        mouseMoved(mouseX: number, arg1: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        static CRAFTING_OVERLAY_HIGHLIGHTED_SPRITE: $ResourceLocation;
        isFurnaceMenu: boolean;
        static FURNACE_OVERLAY_DISABLED_HIGHLIGHTED_SPRITE: $ResourceLocation;
        static BUTTON_SIZE: number;
        static CRAFTING_OVERLAY_SPRITE: $ResourceLocation;
        time: number;
        static FURNACE_OVERLAY_SPRITE: $ResourceLocation;
        static FURNACE_OVERLAY_DISABLED_SPRITE: $ResourceLocation;
        static CRAFTING_OVERLAY_DISABLED_HIGHLIGHTED_SPRITE: $ResourceLocation;
        static CRAFTING_OVERLAY_DISABLED_SPRITE: $ResourceLocation;
        static FURNACE_OVERLAY_HIGHLIGHTED_SPRITE: $ResourceLocation;
        constructor();
        get lastRecipeClicked(): $RecipeHolder<never>;
        get recipeCollection(): $RecipeCollection;
        get currentFocusPath(): $ComponentPath;
        get rectangle(): $ScreenRectangle;
        get tabOrderGroup(): number;
    }
    export class $RecipeShownListener {
    }
    export interface $RecipeShownListener {
        recipesShown(recipes: $List_<$RecipeHolder_<never>>): void;
    }
    /**
     * Values that may be interpreted as {@link $RecipeShownListener}.
     */
    export type $RecipeShownListener_ = ((arg0: $List<$RecipeHolder<never>>) => void);
    export class $RecipeButton extends $AbstractWidget {
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isOnlyOption(): boolean;
        getRecipe(): $RecipeHolder<never>;
        getTooltipText(): $List<$Component>;
        getCollection(): $RecipeCollection;
        init(collection: $RecipeCollection, recipeBookPage: $RecipeBookPage): void;
        visible: boolean;
        active: boolean;
        owo$wrapper: $VanillaWidgetComponent;
        static TICKS_TO_SWAP: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        constructor();
        get onlyOption(): boolean;
        get recipe(): $RecipeHolder<never>;
        get tooltipText(): $List<$Component>;
        get collection(): $RecipeCollection;
    }
}
