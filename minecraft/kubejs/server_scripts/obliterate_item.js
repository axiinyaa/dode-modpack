const itemList = [
    "create:dough",
    "farmersdelight:rope",
    "travelertoolbelt:belt",
    "travelertoolbelt:copper_belt",
    "vc_gliders:paraglider_gold",
    "steeladdon:crude_iron",
    "artifacts:everlasting_beef",
    "artifacts:eternal_steak",
    "farmersdelight:flint_knife",
    "flintrequired:crude_bow",
    "flintrequired:plant_fiber",
    "/vc_gliders:reinforced_paper.*/",
    "/flintrequired:flint_.*_head/",
    "/flintrequired:.*clay_bucket/",
    "/minecraft:wooden_.*/"
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
        event.remove({ input: item })
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