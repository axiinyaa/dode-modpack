ServerEvents.recipes(event => {
    event.remove({ output: 'vc_gliders:reinforced_paper'})
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
            'P': 'vc_gliders:reinforced_paper',
            'R': 'supplementaries:rope',
            'S': 'minecraft:stick'
        }
    )

    event.shaped(
        'vc_gliders:paraglider_iron',
        [
            'PPP',
            'RSR',
            'SIS'
        ],
        {
            'P': 'vc_gliders:reinforced_paper',
            'R': 'supplementaries:rope',
            'S': 'minecraft:stick',
            'I': 'minecraft:iron_ingot'
        }
    )

    event.shaped(
        'vc_gliders:paraglider_diamond',
        [
            'PPP',
            'RSR',
            'SIS'
        ],
        {
            'P': 'vc_gliders:reinforced_paper',
            'R': 'supplementaries:rope',
            'S': 'minecraft:stick',
            'I': 'minecraft:diamond'
        }
    )

    event.shaped(
        'vc_gliders:paraglider_netherite',
        [
            'PPP',
            'RSR',
            'SIS'
        ],
        {
            'P': 'vc_gliders:reinforced_paper',
            'R': 'supplementaries:rope',
            'S': 'minecraft:stick',
            'I': 'minecraft:netherite_ingot'
        }
    )
})