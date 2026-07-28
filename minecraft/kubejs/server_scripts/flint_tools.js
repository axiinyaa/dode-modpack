ServerEvents.tags('item', event => {
    event.remove("c:tools/knife", ["farmersdelight:flint_knife"])
    event.add("c:tools/knife", ["flintrequired:flint_knife"])
    event.add("farmersdelight:tools/knives", ["flintrequired:flint_knife"])

    event.add('dode:plant_fibers', ['farmersdelight:straw', 'supplementaries:flax'])
})

ServerEvents.recipes(event => {
    event.remove({output: "flintrequired:flint_knife"})
    event.remove({output: "flintrequired:flint_axe"})
    event.remove({output: "flintrequired:flint_shovel"})
    event.remove({output: "flintrequired:flint_hoe"})
    event.remove({output: "flintrequired:flint_pickaxe"})
    
    event.shaped(
        "flintrequired:flint_knife",
        [
            'F  ',
            'S  ',
            '   '
        ],
        {
            'F': "flintrequired:flint_shard",
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
            'F': "flintrequired:flint_shard",
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
            'F': "flintrequired:flint_shard",
            'S': "minecraft:stick",
            'E': '#dode:plant_fibers'
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
            'F': "flintrequired:flint_shard",
            'S': "minecraft:stick",
            'E': '#dode:plant_fibers'
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
            'F': "flintrequired:flint_shard",
            'S': "minecraft:stick",
            'E': '#dode:plant_fibers'
        }
    )

    event.shapeless(
        "flintrequired:crude_brush",
        [
            'minecraft:stick',
            'minecraft:stick',
            'minecraft:stick',
            '#dode:plant_fibers'
        ]
    )
})
