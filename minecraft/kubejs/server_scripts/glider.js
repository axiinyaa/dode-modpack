ServerEvents.recipes(event => {
    event.remove({ output: 'reliable_gliders:glider' })

    event.shaped(
        'reliable_gliders:glider',
        [
            'PPP',
            'RSR',
            'S S'
        ],
        {
            'P': 'farmersdelight:canvas',
            'R': 'supplementaries:rope',
            'S': 'minecraft:stick'
        }
    )
})

ServerEvents.tags('block', event => {
    event.add('reliable_gliders:updraft_blocks', [
        'burnt:smoldering_grass_start',
        'burnt:smoldering_grass',
        'burnt:smoldering_leaves'
    ])
})
