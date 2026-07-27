ServerEvents.recipes(event => {
    event.remove({ output: 'vc_gliders:paraglider_wood'})
    event.remove({ output: 'vc_gliders:paraglider_iron'})
    event.remove({ output: 'vc_gliders:paraglider_diamond'})
    event.remove({ output: 'vc_gliders:paraglider_netherite'})

    event.shapeless(
        'vc_gliders:reinforced_paper',
        [
            'minecraft:leather',
            'minecraft:paper'
        ]
    )

    event.shaped(
        'vc_gliders:paraglider_wood',
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

    event.shaped(
        'vc_gliders:paraglider_iron',
        [
            'IPI',
            'RSR',
            'S S'
        ],
        {
            'P': 'farmersdelight:canvas',
            'R': 'supplementaries:rope',
            'S': 'minecraft:stick',
            'I': 'minecraft:iron_ingot'
        }
    )

    event.shaped(
        'vc_gliders:paraglider_diamond',
        [
            'IPI',
            'RSR',
            'S S'
        ],
        {
            'P': 'farmersdelight:canvas',
            'R': 'supplementaries:rope',
            'S': 'minecraft:stick',
            'I': 'minecraft:diamond'
        }
    )

    event.shaped(
        'vc_gliders:paraglider_netherite',
        [
            'IPI',
            'RSR',
            'S S'
        ],
        {
            'P': 'farmersdelight:canvas',
            'R': 'supplementaries:rope',
            'S': 'minecraft:stick',
            'I': 'minecraft:netherite_ingot'
        }
    )
})