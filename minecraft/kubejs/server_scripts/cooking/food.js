ServerEvents.recipes(event => {
    fruitSalad(event)
    mixedSalad(event)
    melonPopsicle(event)
})

function fruitSalad(event) {
    event.remove({ output: 'farmersdelight:fruit_salad' })

    const fruit_in_salad = ['minecraft:bowl']
    for (var i = 0; i < 8; i++) {
        fruit_in_salad.push(ingredientsFruit)

        event.shapeless(
            'farmersdelight:fruit_salad',
            fruit_in_salad
        )
            .modifyResult('dode:food_recipe')
            .id(`dode:fruit_salad_${i}_manual_only`)
    }
}

function mixedSalad(event) {
    event.remove({ output: 'farmersdelight:mixed_salad' })

    const mixed_salad = ['minecraft:bowl', '#c:crops/cabbage', ingredientsVegetable]
    for (let i = 0; i < 6; i++) {
        mixed_salad.push('#dode:cooking_ingredient/vegetable_or_meat')

        event.shapeless(
            'farmersdelight:mixed_salad',
            mixed_salad
        )
            .modifyResult('dode:food_recipe')
            .id(`dode:mixed_salad_${i}_manual_only`);
    }
}

function melonPopsicle(event) {
    event.remove({ output: 'farmersdelight:melon_popsicle' })

    const popsicle = ['minecraft:stick', 'minecraft:ice', 'minecraft:melon_slice']
    for (var i = 0; i < 6; i++) {
        popsicle.push(ingredientsCold)

        event.shapeless(
            'farmersdelight:melon_popsicle',
            popsicle
        )
            .modifyResult('dode:food_recipe')
            .id(`dode:melon_popsicle_${i}_manual_only`)
    }
}

