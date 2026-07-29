BlockEvents.placed(event => {
    if (event.block.getId() != "farmersdelight:stove") return;

    event.block.set("farmersdelight:stove", {
        lit: false,
        facing: event.block.getProperties().get("facing"),
    });
})
