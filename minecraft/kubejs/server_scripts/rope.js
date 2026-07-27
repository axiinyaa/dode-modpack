
ServerEvents.recipes(event => {
    event.remove({ output: 'supplementaries:rope'})
    event.remove({ output: 'comforts:rope_and_nail'})
    event.remove({ output: 'simulated:rope_coupling'})
    event.remove({ output: 'create:rope_pulley'})
    event.remove({ output: 'travelertoolbelt:iron_belt'})

    event.replaceInput(
        {input: 'farmersdelight:rope'},
        'farmersdelight:rope',
        'supplementaries:rope'
    )

    event.shaped(
        Item.of('create:rope_pulley'),
        [
            ' A ',
            ' R ',
            ' S '
        ],
        {
            'A': 'create:andesite_casing',
            'R': 'supplementaries:rope',
            'S': 'create:iron_sheet'
        }
    )

    event.shaped(
        Item.of('travelertoolbelt:iron_belt'),
        [
            '   ',
            'LLL',
            ' S '
        ],
        {
            'L': 'minecraft:leather',
            'S': 'minecraft:iron_nugget'
        }
    )

    event.shaped(
        Item.of('supplementaries:rope', 4),
        [
            ' R ',
            ' R ',
            '   '
        ],
        {
            'R': 'farmersdelight:straw'
        }
    )

    event.shaped(
        Item.of('simulated:rope_coupling'),
        [
            ' R ',
            ' R ',
            ' R '
        ],
        {
            'R': 'supplementaries:rope'
        }
    )

    event.shapeless(
        Item.of('comforts:rope_and_nail'),
        [
            'minecraft:iron_nugget',
            'supplementaries:rope'
        ]
    )
})

LootJS.lootTables(event => {
    event.getLootTable("farmersdelight:chests/fd_shipwreck_supply").firstPool().removeItem('farmersdelight:rope')
    event.getLootTable("farmersdelight:chests/fd_abandoned_mineshaft").firstPool().removeItem('farmersdelight:rope')
    event.getLootTable("farmersdelight:chests/fd_simple_dungeon").firstPool().removeItem('farmersdelight:rope')
})