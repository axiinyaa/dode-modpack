ServerEvents.tags('item', event => {
    event.remove('c:foods/dough', ['create:dough'])
})

ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:cake' })
    event.remove({ output: 'minecraft:bread'})
    event.remove({ input: 'create:wheat_flour'})
    event.remove({ output: 'farmersdelight:wheat_dough'})
    event.remove({ id: "farmersdelight:wheat_dough_from_water"})
    event.remove({ type: "create:milling", output: "create:wheat_flour"})

    event.recipes.farmersdelight.cutting(
        'minecraft:wheat',
        '#c:tools/knife', // tool
        [ // results
            ChanceResult.of("create:wheat_flour", 0.90),
            ChanceResult.of("minecraft:wheat_seeds", 0.25)
        ],
        // '' // sound
    )

    event.recipes.create.milling(
        [
            "create:wheat_flour",
            CreateItem.of("create:wheat_flour", 0.8),
            CreateItem.of("minecraft:wheat_seeds", 0.25)
        ],
        [
            'minecraft:wheat'
        ],
        30
    )

    event.recipes.create.crushing(
        [
            Item.of("create:wheat_flour", 2)
        ],
        [
            'minecraft:wheat'
        ],
        20
    )

    event.shapeless(
        'farmersdelight:wheat_dough',
        [
            "create:wheat_flour",
            "#c:buckets/water"
        ]
    )
    .keepIngredient("#c:buckets/water")
    .id('dode_dough_manual_only')

    event.shapeless(
        Item.of('farmersdelight:wheat_dough', 3),
        [
            "create:wheat_flour", "create:wheat_flour", "create:wheat_flour",
            "minecraft:egg"
        ]
    )

    event.recipes.create.mixing(
        [
            "farmersdelight:wheat_dough"
        ],
        [
            Fluid.of("minecraft:water", 1),
            "create:wheat_flour"
        ],
        30
    )

    event.smoking(
        'minecraft:bread',
        'farmersdelight:wheat_dough',
        0.35,
        300
    )

    event.campfireCooking(
        'minecraft:bread',
        'farmersdelight:wheat_dough',
        0.35,
        600
    )
})

RecipeViewerEvents.removeRecipes(event => {
	// event.remove("farmersdelight:/crafting/wheat_dough_from_water")
})