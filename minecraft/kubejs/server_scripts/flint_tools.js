ServerEvents.tags('item', event => {
    event.remove("c:tools/knife", ["farmersdelight:flint_knife"])
    event.add("c:tools/knife", ["flintrequired:flint_knife"])
    event.add("farmersdelight:tools/knives", ["flintrequired:flint_knife"])
})

ServerEvents.recipes(event => {
    event.remove({output: "flintrequired:flint_knife"})
    event.remove({output: "flintrequired:flint_axe"})
    event.remove({output: "flintrequired:flint_shovel"})
    event.remove({output: "flintrequired:flint_hoe"})
    event.remove({output: "flintrequired:flint_pickaxe"})

    event.shapeless(
        'minecraft:flint',
        [
            'minecraft:gravel',
            'minecraft:gravel',
            'minecraft:gravel',
            'minecraft:gravel'
        ]
    )
    
    event.shaped(
        "flintrequired:flint_knife",
        [
            'F  ',
            'S  ',
            '   '
        ],
        {
            'F': "minecraft:flint",
            'S': "minecraft:stick"
        }
    )

    event.shaped(
        "flintrequired:flint_axe",
        [
            'F  ',
            ' S ',
            '   '
        ],
        {
            'F': "minecraft:flint",
            'S': "minecraft:stick"
        }
    )

    event.shaped(
        "flintrequired:flint_pickaxe",
        [
            'FEF',
            ' S ',
            ' S '
        ],
        {
            'F': "minecraft:flint",
            'S': "minecraft:stick",
            'E': 'farmersdelight:straw'
        }
    )

    event.shaped(
        "flintrequired:flint_shovel",
        [
            ' F ',
            ' E ',
            ' S '
        ],
        {
            'F': "minecraft:flint",
            'S': "minecraft:stick",
            'E': 'farmersdelight:straw'
        }
    )

    event.shaped(
        "flintrequired:flint_hoe",
        [
            'FE ',
            ' S ',
            ' S '
        ],
        {
            'F': "minecraft:flint",
            'S': "minecraft:stick",
            'E': 'farmersdelight:straw'
        }
    )
})

RecipeViewerEvents.removeCategories(event => {
    event.remove('flintrequired:brushing')
})
