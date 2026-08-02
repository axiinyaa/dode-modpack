let $MobEffectInstance = Java.loadClass("net.minecraft.world.effect.MobEffectInstance");

const poisonousFoods = Ingredient.of('#c:foods/food_poisoning').itemIds
const nauseaDuration = 140
const poisonDuration = 100

const ingredientsTag = '#dode:food_ingredient'
const ingredientsCold = '#dode:food_ingredient/cold'
const ingredientsFruit = '#dode:food_ingredient/fruit'
const ingredientsVegetable = '#dode:food_ingredient/vegetable'
const ingredientsProtein = '#dode:food_ingredient/meat'
const ingredientsGolden = '#dode:food_ingredient/golden'
const any = '#dode:food_ingredient/any'


ServerEvents.tags('item', event => {
    event.add('dode:consumables', Ingredient.of('#c:foods').itemIds)
    event.add('dode:consumables', Ingredient.of('#c:drinks').itemIds)

    event.add('dode:food_ingredient/fruit', [
        'minecraft:sweet_berries',
        'minecraft:melon_slice',
        'minecraft:apple',
        'minecraft:glow_berries',
        'minecraft:chorus_fruit',
        'minecraft:golden_apple',
        'minecraft:enchanted_golden_apple'
    ])

    event.add('dode:food_ingredient/cold', [
        'minecraft:melon_slice',
        'minecraft:ice'
    ])

    event.add('dode:food_ingredient/vegetable', [
        'minecraft:carrot',
        'minecraft:beeroot',
        'minecraft:golden_carrot',
        'minecraft:potato',
        'farmersdelight:onion',
        'farmersdelight:tomato',
        'farmersdelight:cabbage',
        'farmersdelight:cabbage_leaf'
    ])

    event.add('dode:food_ingredient/meat', [
        'minecraft:cooked_beef',
        'minecraft:cooked_porkchop',
        'minecraft:cooked_mutton',
        'minecraft:cooked_chicken',
        'minecraft:cooked_cod',
        'minecraft:cooked_salmon',
        'farmersdelight:cooked_chicken_cuts',
        'farmersdelight:cooked_bacon',
        'farmersdelight:cooked_cod_slice',
        'farmersdelight:cooked_salmon_slice',
        'farmersdelight:cooked_mutton_chops',
        'farmersdelight:fried_egg'
    ])

    event.add('dode:food_ingredient/golden', [
        'minecraft:golden_carrot',
        'minecraft:golden_apple',
        'minecraft:enchanted_golden_apple'
    ])
    
    event.add('dode:food_ingredient/vegetable_or_meat', Ingredient.of(ingredientsProtein).itemIds)
    event.add('dode:food_ingredient/vegetable_or_meat', Ingredient.of(ingredientsVegetable).itemIds)
})

// RECIPES

ServerEvents.recipes(event => {
    event.remove({ output: 'farmersdelight:fruit_salad'})
    event.remove({ output: 'farmersdelight:mixed_salad'})
    event.remove({ output: 'farmersdelight:melon_popsicle'})

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

    const mixed_salad = ['minecraft:bowl', '#c:crops/cabbage', ingredientsVegetable]
    for (var i = 0; i < 6; i++) {
        mixed_salad.push('#dode:food_ingredient/vegetable_or_meat')

        event.shapeless(
            'farmersdelight:mixed_salad',
            mixed_salad
        )
        .modifyResult('dode:food_recipe')
        .id(`dode:mixed_salad_${i}_manual_only`)
    }
})

ServerEvents.modifyRecipeResult('dode:food_recipe', event => {
    let fruit_amount = 0
    let vegetable_amount = 0
    let protein_amount = 0
    let gold_amount = 0
    let cold_amount = 0
    
    event.grid.findAll(ingredientsFruit).forEach(item => {
        fruit_amount += 1
    })

    event.grid.findAll(ingredientsCold).forEach(item => {
        cold_amount += 1
    })

    event.grid.findAll(ingredientsVegetable).forEach(item => {
        vegetable_amount += 1
    })

    event.grid.findAll(ingredientsProtein).forEach(item => {
        protein_amount += 1
    })

    event.grid.findAll(ingredientsGolden).forEach(item => {
        gold_amount += 1
    })

    event.grid.findAll('minecraft:cooked_chicken').forEach(item => {
        protein_amount += 2
    })

    event.grid.findAll('farmersdelight:cooked_chicken_cuts').forEach(item => {
        protein_amount += 1
    })

    event.grid.findAll('minecraft:ice').forEach(item => {
        cold_amount += 2
    })
    
    event.grid.findAll('minecraft:enchanted_golden_apple').forEach(item => {
        gold_amount += 2
    })

    var item = event.item
    item.setCustomData({
        'is_recipe': NBT.intTag(1),
        'ingredients_fruit': NBT.intTag(fruit_amount),
        'ingredients_cold': NBT.intTag(cold_amount),
        'ingredients_vegetable': NBT.intTag(vegetable_amount),
        'ingredients_protein': NBT.intTag(protein_amount),
        'ingredients_gold': NBT.intTag(gold_amount),
    })
    event.success(item)
})

ItemEvents.modifyTooltips(event => {
    
    Ingredient.of('#dode:consumables').itemIds.forEach(item => {
        event.modify(item, text => { text.dynamic("food_effects") })
    })

    Ingredient.of('#dode:food_ingredient').itemIds.forEach(item => {
        event.add(item, Text.darkGray("Ingredient Type(s) (SHIFT to view effects):"))
    })

    // poisonousFoods.forEach(item => {
    //     event.add(item, Text.gray(`Dubious`))
    //     event.add(item, {shift: true}, Text.red(` Nausea (${formatTimeTicks(nauseaDuration)})`))
    //     event.add(item, {shift: true}, Text.red(` Poison (${formatTimeTicks(poisonDuration)})`))
    // })

    // strong.forEach(data => {
    //     event.add(data.item, Text.darkPurple(`Protein`))
    //     event.add(data.item, {shift: true}, Text.blue(` Strength (${formatTimeTicks(data.duration)})`))
    // })

    Ingredient.of(ingredientsGolden).itemIds.forEach(id => {
        event.add(id, Text.gold(`- Gold`))
        event.add(id, {shift: true}, Text.darkGray(` Provides Absorption when used as an ingredient.`))
    })

    Ingredient.of(ingredientsCold).itemIds.forEach(id => {
        event.add(id, Text.aqua(`- Cold`))
        event.add(id, {shift: true}, Text.darkGray(` Provides Fire Resistance when used as an ingredient.`))
    })

    Ingredient.of(ingredientsFruit).itemIds.forEach(id => {
        event.add(id, Text.green(`- Fruit`))
        event.add(id, {shift: true}, Text.darkGray(` Provides Resistance when used as an ingredient.`))
    })

    Ingredient.of(ingredientsVegetable).itemIds.forEach(id => {
        event.add(id, Text.yellow(`- Vegetable`))
        event.add(id, {shift: true}, Text.darkGray(` Provides Nourished when used as an ingredient.`))
    })

    Ingredient.of(ingredientsProtein).itemIds.forEach(id => {
        event.add(id, Text.red(`- Protein`))
        event.add(id, {shift: true}, Text.darkGray(` Provides Strength when used as an ingredient.`))
    })
})

function applyEffect(item, player) {
    const data = item.getCustomData()

    if (!data.contains('is_recipe')) return;

    const effects = global.food_effects

    const cold = data.get('ingredients_cold').accept
    const fruit = data.get('ingredients_fruit')
    const vegetable = data.get('ingredients_vegetable')
    const protein = data.get('ingredients_protein')
    const gold = data.get('ingredients_gold')

    console.log(data)
    console.log(vegetable)

    if (cold > 0) player.addEffect(
        new $MobEffectInstance(
            /* Effect:         */ effects.cold.effect,
            /* Duration:       */ cold * effects.cold.duration_mult,
            /* Level:          */ 0,
            /* Is ambient:     */ false,
            /* Hide particles: */ true
        ),
    )

    if (fruit > 0) player.addEffect(
        new $MobEffectInstance(
            /* Effect:         */ effects.fruit.effect,
            /* Duration:       */ fruit * effects.fruit.duration_mult,
            /* Level:          */ 0,
            /* Is ambient:     */ false,
            /* Hide particles: */ true
        ),
    )

    if (vegetable > 0) player.addEffect(
        new $MobEffectInstance(
            /* Effect:         */ effects.vegetable.effect,
            /* Duration:       */ vegetable * effects.vegetable.duration_mult,
            /* Level:          */ 0,
            /* Is ambient:     */ false,
            /* Hide particles: */ true
        ),
    )

    if (protein > 0) player.addEffect(
        new $MobEffectInstance(
            /* Effect:         */ effects.protein.effect,
            /* Duration:       */ protein * effects.protein.duration_mult,
            /* Level:          */ 0,
            /* Is ambient:     */ false,
            /* Hide particles: */ true
        ),
    )

    if (gold > 0) player.addEffect(
        new $MobEffectInstance(
            /* Effect:         */ effects.gold.effect,
            /* Duration:       */ gold * effects.gold.duration_mult,
            /* Level:          */ 2,
            /* Is ambient:     */ false,
            /* Hide particles: */ true
        ),
    )
}

ItemEvents.foodEaten(event => {
    console.log(event.item.hoverName)

    applyEffect(event.item, event.player)
})

BlockEvents.rightClicked(event => {
    // applyEffect(event.block.id, event.player)
})

ItemEvents.entityInteracted(event => {
    console.log(event.item.hoverName)
})