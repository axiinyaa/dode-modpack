ServerEvents.recipes(event => {
    event.remove({ input: 'steeladdon:crude_iron'})
    event.remove({ output: 'steeladdon:crude_iron'})

    event.recipes.create.mixing(
        [
            "steeladdon:steel_ingot"
        ],
        [
            'minecraft:iron_ingot',
            'minecraft:coal'
        ],
        60,
    ).superheated()

    event.recipes.create.mixing(
        [
            "steeladdon:steel_nugget"
        ],
        [
            'minecraft:iron_ingot',
            'minecraft:coal'
        ],
        60,
    ).heated().id('dode_steel_nugget')
})