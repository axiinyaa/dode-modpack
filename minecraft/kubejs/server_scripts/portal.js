ServerEvents.tags("block", event => {
    event.remove('quad:nether_portal/built', ['minecraft:obsidian', 'minecraft:crying_obsidian'])
    event.remove('quad:nether_portal/formed', ['minecraft:obsidian', 'minecraft:crying_obsidian'])
    event.add('quad:nether_portal/formed', ['minecraft:reinforced_deepslate'])
})

ServerEvents.recipes(event => {
    event.remove({output: 'explorerscompass:explorerscompass'})

    event.shaped(
        'explorerscompass:explorerscompass',
        [
            'SCS',
            'CcC',
            'SCS'
        ],
        {
            'c': 'minecraft:compass',
            'C': 'minecraft:cobblestone',
            'S': 'minecraft:string'
        }
    )
})