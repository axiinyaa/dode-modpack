ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:campfire' })
    event.remove({ output: 'minecraft:torch' })

    event.shaped(
        'minecraft:campfire',
        [
            ' S ',
            'SCS',
            'WWW'
        ],
        {
            'C': 'farmersdelight:straw',
            'S': 'minecraft:stick',
            'W': '#minecraft:logs'
        }
    )

    event.shaped(
        Item.of('minecraft:torch', 4),
        [
            ' C ',
            ' S ',
            '   '
        ],
        {
            'C': 'farmersdelight:straw',
            'S': 'minecraft:stick'
        }
    )

    event.shaped(
        Item.of('minecraft:torch', 8),
        [
            ' C ',
            ' S ',
            '   '
        ],
        {
            'C': '#minecraft:coals',
            'S': 'minecraft:stick'
        }
    )

    event.campfireCooking(
        'minecraft:leather',
        'minecraft:rotten_flesh',
        0.60,
        1200
    )
})
