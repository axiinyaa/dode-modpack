// priority: 100

console.log("Loading Cooking Ingredients Server Script...")

let $MobEffectInstance = Java.loadClass("net.minecraft.world.effect.MobEffectInstance");

const poisonousFoods = Ingredient.of('#c:foods/food_poisoning').itemIds
const nauseaDuration = 140
const poisonDuration = 100

const ingredientsTag = '#dode:cooking_ingredient'
const ingredientsCold = '#dode:cooking_ingredient/cold'
const ingredientsFruit = '#dode:cooking_ingredient/fruit'
const ingredientsVegetable = '#dode:cooking_ingredient/vegetable'
const ingredientsMeat = '#dode:cooking_ingredient/meat'
const ingredientsGolden = '#dode:cooking_ingredient/golden'
const ingredientsFish = '#dode:cooking_ingredient/fish'

const ingredientsMeatOrVeg = '#dode:cooking_ingredient/vegetable_or_meat'



ServerEvents.tags('item', event => {
    const fruit = [
        'minecraft:sweet_berries',
        'minecraft:melon_slice',
        'minecraft:apple',
        'minecraft:glow_berries',
        'minecraft:chorus_fruit',
        'minecraft:golden_apple',
        'minecraft:enchanted_golden_apple'
    ]

    const vegetable = [
        'minecraft:carrot',
        'minecraft:beeroot',
        'minecraft:golden_carrot',
        'minecraft:potato',
        'farmersdelight:onion',
        'farmersdelight:tomato',
        'farmersdelight:cabbage',
        'farmersdelight:cabbage_leaf'
    ]

    const carrot = [
        'minecraft:carrot',
        'minecraft:golden_carrot'
    ]

    const rabbit = [
        'minecraft:cooked_rabbit'
    ]

    const cold = [
        'minecraft:melon_slice',
        'minecraft:ice'
    ]

    const gold = [
        'minecraft:golden_carrot',
        'minecraft:golden_apple',
        'minecraft:enchanted_golden_apple'
    ]

    const meat = Ingredient.of('#minecraft:meat').itemIds
    const fish = Ingredient.of('#minecraft:fishes').itemIds

    event.add('dode:cooking_ingredient/fruit', fruit)
    event.add('dode:cooking_ingredient/cold', cold)
    event.add('dode:cooking_ingredient/vegetable', vegetable)
    event.add('dode:cooking_ingredient/golden', gold)
    event.add('dode:cooking_ingredient/fish', fish)
    event.add('dode:cooking_ingredient/meat', meat)
    event.add('dode:cooking_ingredient/vegetable_or_meat', vegetable)
    event.add('dode:cooking_ingredient/vegetable_or_meat', meat)
})

ServerEvents.modifyRecipeResult('dode:food_recipe', event => {

    const data = {
        'is_recipe': NBT.intTag(1),
        'ingredients_fruit': NBT.intTag(event.grid.findAll(ingredientsFruit).size()),
        'ingredients_cold': NBT.intTag(event.grid.findAll(ingredientsCold).size()),
        'ingredients_vegetable': NBT.intTag(event.grid.findAll(ingredientsVegetable).size()),
        'ingredients_meat': NBT.intTag(event.grid.findAll(ingredientsMeat).size()),
        'ingredients_gold': NBT.intTag(event.grid.findAll(ingredientsGolden).size()),
        'ingredients_fish': NBT.intTag(event.grid.findAll(ingredientsFish).size()),
        'ingredients_rabbit': NBT.intTag(event.grid.findAll('minecraft:cooked_rabbit').size()),
    }

    event.grid.findAll('farmersdelight:fried_egg').forEach(item => {
        data.ingredients_meat += 1
    })

    event.grid.findAll('farmersdelight:cooked_chicken_cuts').forEach(item => {
        data.ingredients_meat += 1
    })

    event.grid.findAll('minecraft:cooked_chicken').forEach(item => {
        data.ingredients_meat += 2
    })

    event.grid.findAll('minecraft:ice').forEach(item => {
        data.ingredients_cold += 2
    })

    event.grid.findAll('minecraft:enchanted_golden_apple').forEach(item => {
        data.ingredients_gold += 4
    })

    var item = event.item
    item.setCustomData(data)
    event.success(item)
})

ItemEvents.modifyTooltips(event => {

    Ingredient.of('#dode:consumables').itemIds.forEach(item => {
        event.modify(item, text => { text.dynamic("food_effects") })
    })

    Ingredient.of('#dode:cooking_ingredient').itemIds.forEach(item => {
        event.add(item, Text.darkGray("Ingredient Type(s) (SHIFT to view effects):"))
    })

    Ingredient.of(ingredientsGolden).itemIds.forEach(id => {
        event.add(id, Text.gold(`Gold`))
        event.add(id, { shift: true }, Text.darkGray(` Provides Absorption when used as an ingredient.`))
    })

    Ingredient.of(ingredientsCold).itemIds.forEach(id => {
        event.add(id, Text.aqua(`Cold`))
        event.add(id, { shift: true }, Text.darkGray(` Provides Fire Resistance when used as an ingredient.`))
    })

    Ingredient.of(ingredientsFruit).itemIds.forEach(id => {
        event.add(id, Text.green(`Fruit`))
        event.add(id, { shift: true }, Text.darkGray(` Provides Resistance when used as an ingredient.`))
    })

    Ingredient.of(ingredientsVegetable).itemIds.forEach(id => {
        event.add(id, Text.yellow(`Vegetable`))
        event.add(id, { shift: true }, Text.darkGray(` Provides Nourished when used as an ingredient.`))
    })

    Ingredient.of(ingredientsMeat).itemIds.forEach(id => {
        event.add(id, Text.red(`Meat`))
        event.add(id, { shift: true }, Text.darkGray(` Provides Strength when used as an ingredient.`))
    })

    Ingredient.of('farmersdelight:fried_egg').itemIds.forEach(id => {
        event.add(id, Text.darkRed(`Egg`))
        event.add(id, { shift: true }, Text.darkGray(` Provides Strength when used as an ingredient.`))
    })

    Ingredient.of(ingredientsFish).itemIds.forEach(id => {
        event.add(id, Text.blue(`Fish`))
        event.add(id, { shift: true }, Text.darkGray(` Provides Water Breathing when used as an ingredient.`))
    })

    Ingredient.of('minecraft:cooked_rabbit').itemIds.forEach(id => {
        event.add(id, Text.lightPurple(`Rabbit`))
        event.add(id, { shift: true }, Text.darkGray(` Provides Jump Boost when used as an ingredient.`))
    })
})

function applyEffect(item, player) {
    const data = item.getCustomData()

    if (!data.contains('is_recipe')) return;

    const effects = global.food_effects

    const cold = data.get('ingredients_cold').accept
    const fruit = data.get('ingredients_fruit')
    const vegetable = data.get('ingredients_vegetable')
    const protein = data.get('ingredients_meat')
    const gold = data.get('ingredients_gold')
    const fish = data.get('ingredients_fish')
    const rabbit = data.get('ingredients_rabbit')


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

    if (fish > 0) player.addEffect(
        new $MobEffectInstance(
            /* Effect:         */ effects.fish.effect,
            /* Duration:       */ gold * effects.fish.duration_mult,
            /* Level:          */ 0,
            /* Is ambient:     */ false,
            /* Hide particles: */ true
        ),
    )

    if (rabbit > 0) player.addEffect(
        new $MobEffectInstance(
            /* Effect:         */ effects.rabbit.effect,
            /* Duration:       */ gold * effects.rabbit.duration_mult,
            /* Level:          */ 0,
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