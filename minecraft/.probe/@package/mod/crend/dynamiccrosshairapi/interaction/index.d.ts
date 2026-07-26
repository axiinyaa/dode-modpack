import { $Enum } from "@package/java/lang";

declare module "@package/mod/crend/dynamiccrosshairapi/interaction" {
    export class $InteractionMode extends $Enum<$InteractionMode> {
        static values(): $InteractionMode[];
        static valueOf(name: string): $InteractionMode;
        static SECONDARY: $InteractionMode;
        static PRIMARY: $InteractionMode;
        static NONE: $InteractionMode;
        static BOTH: $InteractionMode;
    }
    /**
     * Values that may be interpreted as {@link $InteractionMode}.
     */
    export type $InteractionMode_ = "primary" | "secondary" | "both" | "none";
    export class $InteractionType extends $Enum<$InteractionType> {
        getPrimaryInteractionType(): $InteractionType;
        getSecondaryInteractionType(): $InteractionType;
        static values(): $InteractionType[];
        static valueOf(name: string): $InteractionType;
        static FILL_ITEM_FROM_BLOCK: $InteractionType;
        static CORRECT_TOOL: $InteractionType;
        static INTERACT_WITH_ENTITY: $InteractionType;
        static TARGET_BLOCK: $InteractionType;
        static CHARGE_ITEM: $InteractionType;
        static PLACE_ITEM_ON_ENTITY: $InteractionType;
        static FILL_BLOCK_FROM_ITEM: $InteractionType;
        static PICK_UP_ENTITY: $InteractionType;
        static FILL_ITEM_FROM_ENTITY: $InteractionType;
        static INCORRECT_TOOL: $InteractionType;
        static USE_ITEM_ON_BLOCK: $InteractionType;
        static FILL_ENTITY_FROM_ITEM: $InteractionType;
        static PLACE_BLOCK: $InteractionType;
        static PICK_UP_BLOCK: $InteractionType;
        static MOUNT_BLOCK: $InteractionType;
        static SHIELD: $InteractionType;
        static TAKE_ITEM_FROM_BLOCK: $InteractionType;
        static CONSUME_ITEM: $InteractionType;
        static USABLE_TOOL: $InteractionType;
        static EQUIP_ITEM: $InteractionType;
        static EMPTY: $InteractionType;
        static SPYGLASS: $InteractionType;
        interactionMode: $InteractionMode;
        static RANGED_WEAPON: $InteractionType;
        static MOUNT_ENTITY: $InteractionType;
        static USE_ITEM_ON_ENTITY: $InteractionType;
        static TAKE_ITEM_FROM_ENTITY: $InteractionType;
        static USE_ITEM: $InteractionType;
        static FORCE_REGULAR_CROSSHAIR: $InteractionType;
        static PLACE_ENTITY: $InteractionType;
        static MELEE_WEAPON: $InteractionType;
        static PICK_UP_ITEM: $InteractionType;
        static THROW_ITEM: $InteractionType;
        static PLACE_ITEM_ON_BLOCK: $InteractionType;
        static RANGED_WEAPON_CHARGING: $InteractionType;
        static RANGED_WEAPON_CHARGED: $InteractionType;
        static INTERACT_WITH_BLOCK: $InteractionType;
        static NO_ACTION: $InteractionType;
        static USE_BLOCK: $InteractionType;
        static TARGET_ENTITY: $InteractionType;
        static TOOL: $InteractionType;
        get primaryInteractionType(): $InteractionType;
        get secondaryInteractionType(): $InteractionType;
    }
    /**
     * Values that may be interpreted as {@link $InteractionType}.
     */
    export type $InteractionType_ = "use_item" | "equip_item" | "consume_item" | "throw_item" | "charge_item" | "spyglass" | "pick_up_item" | "target_block" | "place_block" | "interact_with_block" | "pick_up_block" | "use_item_on_block" | "place_item_on_block" | "take_item_from_block" | "fill_item_from_block" | "fill_block_from_item" | "use_block" | "mount_block" | "target_entity" | "place_entity" | "interact_with_entity" | "pick_up_entity" | "use_item_on_entity" | "place_item_on_entity" | "take_item_from_entity" | "fill_item_from_entity" | "fill_entity_from_item" | "mount_entity" | "melee_weapon" | "ranged_weapon" | "ranged_weapon_charging" | "ranged_weapon_charged" | "usable_tool" | "tool" | "correct_tool" | "incorrect_tool" | "shield" | "force_regular_crosshair" | "empty" | "no_action";
}
