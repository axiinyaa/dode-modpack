ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:stone_pickaxe'})
    event.remove({ output: 'minecraft:stone_axe'})
    event.remove({ output: 'minecraft:stone_shovel'})
    event.remove({ output: 'minecraft:stone_hoe'})
    event.remove({ output: 'minecraft:stone_sword'})

    event.shaped(
        'minecraft:stone_pickaxe',
        [
            'CCC',
            ' S ',
            ' S '
        ],
        {
            'C': 'minecraft:copper_ingot',
            'S': 'minecraft:stick'
        }
    )

    event.shaped(
        'minecraft:stone_axe',
        [
            'CC ',
            'CS ',
            ' S '
        ],
        {
            'C': 'minecraft:copper_ingot',
            'S': 'minecraft:stick'
        }
    )

    event.shaped(
        'minecraft:stone_shovel',
        [
            ' C ',
            ' S ',
            ' S '
        ],
        {
            'C': 'minecraft:copper_ingot',
            'S': 'minecraft:stick'
        }
    )

    event.shaped(
        'minecraft:stone_hoe',
        [
            'CC ',
            ' S ',
            ' S '
        ],
        {
            'C': 'minecraft:copper_ingot',
            'S': 'minecraft:stick'
        }
    )

    event.shaped(
        'minecraft:stone_sword',
        [
            ' C ',
            ' C ',
            ' S '
        ],
        {
            'C': 'minecraft:copper_ingot',
            'S': 'minecraft:stick'
        }
    )
})