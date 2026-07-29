let $MobEffectInstance = Java.loadClass("net.minecraft.world.effect.MobEffectInstance");

const poisonousFoods = Ingredient.of('#c:foods/food_poisoning').itemIds
const nauseaDuration = 140
const poisonDuration = 100

const coldFoods = [
    {item: 'minecraft:melon_slice', duration: 60},
    {item:'farmersdelight:melon_popsicle', duration: 1200},
    {item:'farmersdelight:melon_juice', duration: 1000},
    {item:'farmersdelight:fruit_salad', duration: 800}
]

const vegetables = [
    {item: 'minecraft:carrot', duration: 60},
    {item: 'minecraft:golden_carrot', duration: 1200},
    {item: 'minecraft:beetroot', duration: 40},
    {item: 'minecraft:potato', duration: 40},
    {item: 'minecraft:dried_kelp', duration: 20},
    {item: 'farmersdelight:tomato', duration: 80},
    {item: 'farmersdelight:cabbage', duration: 80},
    {item: 'farmersdelight:cabbage_leaf', duration: 40},
    {item: 'farmersdelight:onion', duration: 60},
    {item: 'farmersdelight:barbecue_stick', duration: 600},
    {item: 'farmersdelight:hamburger', duration: 800},
    {item: 'farmersdelight:mutton_wrap', duration: 1000},
    {item: 'farmersdelight:steak_and_potatoes', duration: 2000},
    {item: 'farmersdelight:roast_chicken', duration: 4000},
    {item: 'farmersdelight:shepherds_pie', duration: 1200},
    {item: 'farmersdelight:gleaming_salad', duration: 4000},
    {item: 'farmersdelight:mixed_salad', duration: 2000},
    {item: 'farmersdelight:chicken_sandwich', duration: 800},
    {item: 'farmersdelight:bacon_sandwich', duration: 800},
    {item: 'farmersdelight:grilled_salmon', duration: 400},
    {item: 'farmersdelight:roasted_mutton_chops', duration: 1200},
    {item: 'minecraft:rabbit_stew', duration: 400},
    {item: 'farmersdelight:kelp_roll', duration: 200},
    {item: 'minecraft:beetroot_soup', duration: 200},
]

const comfort = [
    {item: 'minecraft:bread', duration: 80},
    {item: 'farmersdelight:egg_sandwich', duration: 100},
    {item: 'farmersdelight:chicken_sandwich', duration: 100},
    {item: 'farmersdelight:hamburger', duration: 100},
    {item: 'farmersdelight:bacon_sandwich', duration: 100},
    {item: 'farmersdelight:mutton_wrap', duration: 100},
    {item: 'farmersdelight:roast_chicken', duration: 1000},
]

const sweetFoods = [

]

ServerEvents.tags('item', event => {
    event.add('c:foods/food_poisoning', Ingredient.of('#c:foods/raw_meat').itemIds)

    event.add('dode:food_items', Ingredient.of('#c:foods').itemIds)
    event.add('dode:food_items', Ingredient.of('#c:drinks').itemIds)
})

function formatTimeTicks(ticks) {
  const totalSeconds = Math.floor(ticks / 20)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

ItemEvents.modifyTooltips(event => {

    Ingredient.of('#dode:food_items').itemIds.forEach(item => {
        event.add(item, Text.gray('When eaten:'))
    })

    poisonousFoods.forEach(item => {
        event.add(item, Text.red(` Nausea (${formatTimeTicks(nauseaDuration)})`))
        event.add(item, Text.red(` Poison (${formatTimeTicks(poisonDuration)})`))
    })

    coldFoods.forEach(data => {
        event.add(data.item, Text.blue(` Fire Resistance (${formatTimeTicks(data.duration)})`))
    })

    sweetFoods.forEach(data => {
        event.add(data.item, Text.blue(` Swiftness (${formatTimeTicks(data.duration)})`))
    })

    vegetables.forEach(data => {
        event.add(data.item, Text.blue(` Nourishment (${formatTimeTicks(data.duration)})`))
    })

    comfort.forEach(data => {
        event.add(data.item, Text.blue(` Comfort (${formatTimeTicks(data.duration)})`))
    })
})

ItemEvents.foodEaten(event => {
    console.log(event.item.hoverName)

    coldFoods.forEach(food => {
        if (event.item.id == food.item) {
            event.player.addEffect(new $MobEffectInstance('minecraft:fire_resistance', food.duration, 0))
        }
    })

    vegetables.forEach(food => {
        if (event.item.id == food.item) {
            event.player.addEffect(new $MobEffectInstance('farmersdelight:nourishment', food.duration, 0))
        }
    })

    comfort.forEach(food => {
        if (event.item.id == food.item) {
            event.player.addEffect(new $MobEffectInstance('farmersdelight:comfort', food.duration, 0))
        }
    })

    if (poisonousFoods.contains(event.item.id)) {
        event.player.addEffect(new $MobEffectInstance('minecraft:poison', poisonDuration, 0))
        event.player.addEffect(new $MobEffectInstance('minecraft:nausea', nauseaDuration, 1))
        event.player.addEffect(new $MobEffectInstance('minecraft:hunger', 200, 0))
    }
})

ItemEvents.entityInteracted(event => {
    console.log(event.item.hoverName)
})
