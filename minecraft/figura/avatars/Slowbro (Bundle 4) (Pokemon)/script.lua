vanilla_model.PLAYER:setVisible(false)
vanilla_model.CAPE:setVisible(true)
vanilla_model.HELMET:setVisible(false)
vanilla_model.ARMOR:setVisible(false)
vanilla_model.PLAYER:setVisible(false)

local mainPage = action_wheel:newPage()
action_wheel:setPage(mainPage)

function pings.toggling(state)
vanilla_model.ARMOR:setVisible(state)
end

local toggleaction = mainPage:newAction() -- If you're getting an error here it's probably because you didn't make the page
    :title("Armour Toggle")
    :toggleTitle("enabled")
    :item("red_wool")
    :toggleItem("green_wool")
    :setOnToggle(pings.toggling)

models:setPrimaryRenderType("Translucent_Cull")

models:setPrimaryRenderType("Translucent_Cull")

local squapi = require("SquAPI")

------------------------------------------------------

renderer:setOffsetCameraPivot(0,0,0)

renderer:setEyeOffset(0,0,0)

------------------------------------------------------

squapi.eye(
    models.model.Root.Head.Pupils.PupilL, --element
    0.1,                                               --(.25)leftdistance
    0.8,                                                 --(1.25)rightdistance
    0.6,                                               --(.5)updistance
    0.4,                                               --(.5)downdistance
    nil                                                --(false)switchvalues
)

squapi.eye(
    models.model.Root.Head.Pupils.PupilR, --element
    0.8,                                                  --(.25)leftdistance
    0.1,                                                --(1.25)rightdistance
    0.6,                                                --(.5)updistance
    0.4,                                                --(.5)downdistance
    nil                                                 --(false)switchvalues
)

local tailPhysics = require('tail')

local tail = tailPhysics.new(models.model.Root.Body.tail)

keybinds:newKeybind("tail - wag", "key.keyboard.v")
   :onPress(function() pings.tailWag(true) end)
   :onRelease(function() pings.tailWag(false) end)

function pings.tailWag(x)
   tail.config.enableWag.keybind = x
end

local earsPhysics = require('ears')

local ears = earsPhysics.new(models.model.Root.Head.leftear, models.model.Root.Head.rightear)
ears:setConfig {
  -- you can check ears.lua to see default config
}