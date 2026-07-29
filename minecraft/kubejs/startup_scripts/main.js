ItemEvents.modification(event => {
    event.modify('flintrequired:flint_pickaxe', item => {
        item.tier = tier => {
            tier.incorrectBlocksForDropsTag = "minecraft:incorrect_for_wooden_tool"
        }
    })
})