let $FoodBuilder = Java.loadClass('dev.latvian.mods.kubejs.item.FoodBuilder')

global.food_effects = {
    cold: { duration_mult: 200, effect: 'minecraft:fire_resistance' },
    fruit: { duration_mult: 80, effect: 'minecraft:resistance' },
    protein: { duration_mult: 120, effect: 'minecraft:strength' },
    vegetable: { duration_mult: 40, effect: 'hungerbane:nourished' },
    gold: { duration_mult: 80, effect: 'minecraft:absorption' },
    fish: { duration_mult: 80, effect: 'minecraft:water_breathing' },
    rabbit: { duration_mult: 80, effect: 'minecraft:jump_boost' },
}


ItemEvents.modification(event => {
    event.modify('minecraft:enchanted_golden_apple', (item) => {
        let builder = setupFood(item)
        Array.from(['minecraft:regeneration', 'minecraft:absorption', 'minecraft:fire_resistance', 'minecraft:resistance']).forEach(id => builder.removeEffect(id))
        item.setFood(builder.build())
    })

    event.modify('minecraft:golden_apple', (item) => {
        let builder = setupFood(item)
        Array.from(['minecraft:regeneration', 'minecraft:absorption']).forEach(id => builder.removeEffect(id))
        item.setFood(builder.build())
    })

    event.modify('farmersdelight:mixed_salad', (item) => {
        let builder = setupFood(item)
        Array.from(['minecraft:regeneration']).forEach(id => builder.removeEffect(id))
        item.setFood(builder.build())
    })
})

let setupFood = (i) => {
    //FoodBuilder(properties) is broken as it does NOT apply default Optional.empty for usingConvertsTo, causing crashes when eating modified food
    //So lets do what it's *supposed* to do, manually
    let p = i.get('food')
    let builder = new $FoodBuilder()
    builder.nutrition(p.nutrition())
        .saturation(saturationFixer(p.saturation(), p.nutrition()))
        .alwaysEdible(p.canAlwaysEat())
        .eatSeconds(p.eatSeconds())

    p.effects().forEach(pf => {
        let ef = pf.effectSupplier().get()
        builder.effect(ef.getEffect().unwrapKey().get().location(), ef.getDuration(), ef.getAmplifier(), pf.probability())
    })

    return builder
}

//FoodBuilder.build() calls FoodConstants#saturationByModifier which sets saturation = nutrition * input * 2. We do the reverse to keep original saturation
let saturationFixer = (saturation, nutrition) => {
    return (saturation / nutrition) / 2
}