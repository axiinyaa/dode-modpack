ServerEvents.tags('block', event => {
    event.get('minecraft:needs_stone_tool')
        .remove(['minecraft:copper_ore', 'minecraft:deepslate_copper_ore'])
})

ServerEvents.recipes(event => {
    event.replaceOutput(
        { output: 'leafscopperbackport:copper_nugget' },
        'leafscopperbackport:copper_nugget',
        'create:copper_nugget'
    )
})

LootJS.lootTables(event => {
    event.getLootTable('minecraft:blocks/copper_ore').firstPool().removeItem('minecraft:raw_copper')
    event.getLootTable('minecraft:blocks/copper_ore').firstPool().addEntry('minecraft:raw_copper')

    event.getLootTable('minecraft:blocks/deepslate_copper_ore').firstPool().removeItem('minecraft:raw_copper')
    event.getLootTable('minecraft:blocks/deepslate_copper_ore').firstPool().addEntry('minecraft:raw_copper')
})