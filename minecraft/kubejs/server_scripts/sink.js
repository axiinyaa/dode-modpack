ServerEvents.recipes(event => {
    event.remove({ output: 'just_sink:sink' })

    event.shaped(
        'just_sink:sink',
        [
            'SSS',
            'PWP',
            'PPP',
        ],
        {
            'S': 'steeladdon:steel_sheet',
            'P': '#minecraft:planks',
            'W': 'minecraft:water_bucket'
        }
    )
})