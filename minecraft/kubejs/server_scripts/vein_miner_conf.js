ServerEvents.tags('block', event => {
    event.add('liteminer:excluded_blocks', Ingredient.of('#minecraft:logs').itemIds)
})