vanilla_model.PLAYER:setVisible(false)
vanilla_model.CAPE:setVisible(true)
vanilla_model.HELMET:setVisible(true)
vanilla_model.ARMOR:setVisible(true)
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

local squapi = require("SquAPI")

------------------------------------------------------

renderer:setOffsetCameraPivot(0,0,0)

renderer:setEyeOffset(0,0,0)

------------------------------------------------------

local squapi = require("SquAPI")

squapi.eye:new(
    models.model.Root.Head.Pupils.PupilL,  --the eye element 
    0.20,  --(0.25) left distance
    1,  --(1.25) right distance
    0,  --(0.0) up distance
    0   --(0.0) down distance
)

squapi.eye:new(
    models.model.Root.Head.Pupils.PupilR,  --the eye element 
    1,  --(0.25) left distance
    0.20,  --(1.25) right distance
    0,  --(0.0) up distance
    0   --(0.0) down distance
)

local tailPhysics = require('tail')

local tail = tailPhysics.new(models.model.Root.Body.tail)

keybinds:newKeybind("tail - wag", "key.keyboard.v")
   :onPress(function() pings.tailWag(true) end)
   :onRelease(function() pings.tailWag(false) end)

function pings.tailWag(x)
   tail.config.enableWag.keybind = x
end

-- PhysBoneAPI by ChloeSpacedOut
 function events.entity_init()
	require("physBoneAPI")
	physBone.physBoobas:setGravity(1)
	physBone.physBoobas:setAirResistance(0)
	physBone.physBoobas:setSpringForce(100)
  end

  local earsPhysics = require('ears')

  local ears = earsPhysics.new(models.model.Root.Head.leftear, models.model.Root.Head.rightear)
  ears:setConfig {
    -- you can check ears.lua to see default config
  }