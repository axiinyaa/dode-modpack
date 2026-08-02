const itemList = [
    "create:dough",
    "farmersdelight:rope",
    "travelertoolbelt:belt",
    "travelertoolbelt:copper_belt",
    "steeladdon:crude_iron",
    "artifacts:everlasting_beef",
    "artifacts:eternal_steak",
    "minecraft:stone_sword",
    "minecraft:stone_axe",
    "minecraft:stone_pickaxe",
    "minecraft:stone_shovel",
    "minecraft:stone_hoe",
    "farmersdelight:diamond_knife",
    "farmersdelight:golden_knife",
    "farmersdelight:netherite_knife",
    "leafscopperbackport:copper_nugget",
    'farmersdelight:skillet'
]

const items = []

ServerEvents.recipes(event => {
    itemList.forEach(item => {
        Ingredient.of(item).itemIds.forEach(id => {
            items.push(id)
        })
    })

    console.log(items)

    items.forEach(item => {
        event.remove({ output: item })
    })
})

RecipeViewerEvents.removeEntriesCompletely('item', event => {
    items.forEach(item => { event.remove(item) })
})

EntityEvents.spawned('minecraft:item', event => {
    if (items.includes(event.entity.item.id)) {
        event.cancel()
    }
})


LootJS.modifiers(event => {
    itemList.forEach(item => {
        Ingredient.of(item).itemIds.forEach(id => {
            event.addTableModifier(LootType.CHEST).removeLoot(item)
        })
    })
})