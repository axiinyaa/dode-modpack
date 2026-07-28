ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:furnace'});
    event.remove({ output: 'minecraft:smoker'});
    event.remove({ output: 'minecraft:blast_furnace'});

    event.shaped(
        'minecraft:blast_furnace',
        [
            'CCC',
            'CFC',
            'CCC'
        ],
        {
            'C': 'minecraft:cobbled_deepslate',
            'F': 'minecraft:campfire'
        }
    )

    event.replaceInput(
        { output: 'minecraft:furnace_minecart'},
        'minecraft:furnace',
        'minecraft:blast_furnace'
    )
})

BlockEvents.rightClicked(event => {
    if (event.block.id == "minecraft:furnace") {
        event.cancel();
        return;
    }

    if (event.block.id == "minecraft:smoker") {
        event.cancel();
        return;
    }
})

RecipeViewerEvents.removeCategories(event => {
    event.remove('minecraft:smelting')
    event.remove('minecraft:smoking')
})