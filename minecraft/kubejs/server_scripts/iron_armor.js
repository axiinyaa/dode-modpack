ServerEvents.recipes(event => {
    event.remove({output:'minecraft:iron_helmet'})
    event.remove({output:'minecraft:iron_chestplate'})
    event.remove({output:'minecraft:iron_leggings'})
    event.remove({output:'minecraft:iron_boots'})

    event.shaped(
        'minecraft:iron_helmet',
        [
            'ISI',
            'I I',
            '   '
        ],
        {
            'I': 'minecraft:iron_ingot',
            'S': 'create:iron_sheet'
        }
    )

    event.shaped(
        'minecraft:iron_chestplate',
        [
            'I I',
            'ISI',
            'III'
        ],
        {
            'I': 'minecraft:iron_ingot',
            'S': 'create:iron_sheet'
        }
    )

    event.shaped(
        'minecraft:iron_leggings',
        [
            'ISI',
            'I I',
            'I I'
        ],
        {
            'I': 'minecraft:iron_ingot',
            'S': 'create:iron_sheet'
        }
    )

    event.shaped(
        'minecraft:iron_boots',
        [
            '   ',
            'I I',
            'S S'
        ],
        {
            'I': 'minecraft:iron_ingot',
            'S': 'create:iron_sheet'
        }
    )
})