function formatTimeTicks(ticks) {
    const totalSeconds = Math.floor(ticks / 20)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

ClientEvents.lang('en_us', event => {
    event.add('tag.item.dode.food_ingredient.cold', 'Cold Ingredients')
    event.add('tag.item.dode.food_ingredient.vegetable', 'Vegetables')
    event.add('tag.item.dode.food_ingredient.vegetable_or_meat', 'Vegetables or Meat')
    event.add('tag.item.dode.food_ingredient.fruit', 'Fruit')
    event.add('tag.item.dode.food_ingredient.meat', 'Cooked Meats')
    event.add('tag.item.dode.food_ingredient.gold', 'Gold Ingredients')
})

ItemEvents.dynamicTooltips("food_effects", event => {
    const {item} = event;
    const effects = global.food_effects;
    const customData = item.getCustomData();
    const ingredients_gold = String(customData.get("ingredients_gold"))
    const ingredients_fruit = String(customData.get("ingredients_fruit"))
    const ingredients_cold = String(customData.get("ingredients_cold"))
    const ingredients_vegetable = String(customData.get("ingredients_vegetable"))
    const ingredients_protein = String(customData.get("ingredients_protein"))

    if (ingredients_fruit > 0) event.add(Text.blue(`Resistance (${formatTimeTicks(ingredients_fruit * effects.fruit.duration_mult)})`));
    if (ingredients_vegetable > 0) event.add(Text.blue(`Nourished (${formatTimeTicks(ingredients_vegetable * effects.vegetable.duration_mult)})`));
    if (ingredients_protein > 0) event.add(Text.blue(`Strength (${formatTimeTicks(ingredients_protein * effects.protein.duration_mult)})`));
    if (ingredients_cold > 0) event.add(Text.blue(`Fire Resistance (${formatTimeTicks(ingredients_cold * effects.cold.duration_mult)})`));
    if (ingredients_gold > 0) event.add(Text.blue(`Absorption (${formatTimeTicks(ingredients_gold * effects.gold.duration_mult)})`));

})