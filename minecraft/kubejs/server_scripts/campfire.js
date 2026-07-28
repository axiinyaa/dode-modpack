ServerEvents.recipes(event => {
    event.remove({ output: 'better_campfires:firewood'})
    event.remove({ output: 'minecraft:campfire'})
    event.remove({ output: 'minecraft:torch'})

    event.shapeless(
        Item.of('better_campfires:firewood', 2),
        [
            '#minecraft:logs',
            '#minecraft:axes'
        ]
    )
    .damageIngredient('#minecraft:axes', 5)
    .keepIngredient('#minecraft:axes')
    .id('dode_firewood_manual_only')

    event.recipes.farmersdelight.cutting(
        '#minecraft:logs',
        '#minecraft:axes', // tool
        [ // results
            Item.of('better_campfires:firewood', 4)
        ],
        // '' // sound
    )

    event.campfireCooking(
        'minecraft:torch',
        'minecraft:stick',
        0.1,
        10
    )

    event.campfireCooking(
        'minecraft:leather',
        'minecraft:rotten_flesh',
        0.60,
        1200
    )
})

LootJS.lootTables(event => {
    event.getLootTable("minecraft:blocks/campfire").firstPool().removeItem('better_campfires:firewood')
    event.getLootTable("minecraft:blocks/campfire").firstPool().addEntry('minecraft:campfire')
})