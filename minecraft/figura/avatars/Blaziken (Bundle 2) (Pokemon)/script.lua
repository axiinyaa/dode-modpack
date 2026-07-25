--Blaziken Cobblemon Avatar Script.Lua

----Config----

vanilla_model.PLAYER:setVisible(false)
vanilla_model.CAPE:setVisible(false)
vanilla_model.HELMET:setVisible(true)
vanilla_model.ARMOR:setVisible(false)
vanilla_model.PLAYER:setVisible(false)

----Action Wheel----

local mainPage = action_wheel:newPage()
action_wheel:setPage(mainPage)

----Armour Toggle----

function pings.togglearmour(state)
vanilla_model.ARMOR:setVisible(state)
end

local toggleaction = mainPage:newAction() -- If you're getting an error here it's probably because you didn't make the page
    :title("Armour Toggle")
    :toggleTitle("enabled")
    :item("red_wool")
    :toggleItem("green_wool")
    :setOnToggle(pings.togglearmour)

models:setPrimaryRenderType("Translucent_Cull")

----Texture Toggle----

function pings.toggle(texture)
    models.model.Root.Head.VanillaHead:setPrimaryTexture("Custom", textures[texture])
    models.model.Root.Body.VanillaBody:setPrimaryTexture("Custom", textures[texture])
    models.model.Root.LeftArm:setPrimaryTexture("Custom", textures[texture])
    models.model.Root.RightArm:setPrimaryTexture("Custom", textures[texture])
    models.model.Root.LeftLeg:setPrimaryTexture("Custom", textures[texture])
    models.model.Root.RightLeg:setPrimaryTexture("Custom", textures[texture])
    models.model.Root.Head.Pupils:setPrimaryTexture("Custom", textures[texture.."_eyes"])
    models.model.Root.Head.CobblemonParts1:setPrimaryTexture("Custom", textures[texture.."_cobblemon"])
    models.model.Root.Body.CobblemonParts2:setPrimaryTexture("Custom", textures[texture.."_cobblemon"])
    models.model.Root.RightArm.CobblemonParts4:setPrimaryTexture("Custom", textures[texture.."_cobblemon"])
    models.model.Root.LeftArm.CobblemonParts3:setPrimaryTexture("Custom", textures[texture.."_cobblemon"])
    -- animation toggle example (commented out to avoid erroring):
    -- animations.bbmodelname.animationname:setPlaying(texture)
end

      local toggleaction = mainPage:newAction() -- If you're getting an error here it's probably because you didn't make the page
    :title("Blaziken")
    :toggleTitle("")
    :item("red_wool")
    :toggleItem("red_wool")
    :onLeftClick(function() pings.toggle("model.blaziken") end)

local toggleaction = mainPage:newAction() -- If you're getting an error here it's probably because you didn't make the page
    :title("Shiny")
    :toggleTitle("")
    :item("pink_wool")
    :toggleItem("pink_wool")
    :onLeftClick(function() pings.toggle("model.shiny") end)

    local toggleaction = mainPage:newAction() -- If you're getting an error here it's probably because you didn't make the page
    :title("Ghost")
    :toggleTitle("")
    :item("black_wool")
    :toggleItem("black_wool")
    :onLeftClick(function() pings.toggle("model.ghost") end)

    ----Tail Physics----

    local tailPhysics = require('tail')

    local tail = tailPhysics.new(models.model.Root.Body.CobblemonParts2.tail)
    
    keybinds:newKeybind("tail - wag", "key.keyboard.v")
       :onPress(function() pings.tailWag(true) end)
       :onRelease(function() pings.tailWag(false) end)
    
    function pings.tailWag(x)
       tail.config.enableWag.keybind = x
    end