const itemList = [
    "create:dough",
    "farmersdelight:rope",
    "travelertoolbelt:belt",
    "travelertoolbelt:copper_belt",
    "steeladdon:crude_iron",
    "artifacts:everlasting_beef",
    "artifacts:eternal_steak",
    "farmersdelight:flint_knife",
    "flintrequired:crude_bow",
    "flintrequired:plant_fiber",
    "/flintrequired:flint_.*_head/",
    "/flintrequired:.*clay_bucket/",
    "/minecraft:wooden_.*/",
    "flintrequired:crude_brush",
    "flintrequired:flint_shard",
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
