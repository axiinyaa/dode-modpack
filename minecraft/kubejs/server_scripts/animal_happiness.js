ItemEvents.entityInteracted('minecraft:brush', event => {
    const animal_states = {
        "shade": Text.red("This animal needs shelter!"),
        "sunlight": Text.red("This animal needs sunlight!"),
        "water": Text.red("This animal needs water!"),
        "space": Text.red("This animal is overcrowded!"),
        "friend": Text.red("This animal needs a friend!"),
        "nap": Text.red("This animal needs somewhere to sleep!"),
        "stars": Text.red("This animal wants to look at the night sky!"),
        "light": Text.red("This animal needs light!"),
        "cover": Text.red("This animal needs shelter from the rain!")
    }

    const entity = event.getTarget()

    if (!entity.getNbt().contains("SaltsAnimalFarm")) return;

    const data = entity.getNbt().getCompound("SaltsAnimalFarm")
    const weight = data.getInt("Weight")
    const comfort_task_result = data.getString("LastComfortTaskResult")

    const happiness_percentage = ((weight / 10) * 100).toString() + "%"

    let current_state = Text.green("This animal is satisfied.")

    if (data.getInt("TotalFailedTasks") > data.getInt("TotalSuccessfulTasks")) {
        current_state = Text.gray("This animal needs better taken care of!")
    }

    if (comfort_task_result == "Null") {
        current_state = Text.white("This animal is okay.")
    }

    if (comfort_task_result == "Failed") {
        current_state = animal_states[data.getString("LastComfortTask")]
    }

    event.entity.tell(Text.white(`Happiness: ${happiness_percentage}`))
    event.entity.tell(current_state)
})