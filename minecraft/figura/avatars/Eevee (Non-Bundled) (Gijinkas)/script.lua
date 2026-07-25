--       ___           ___                         ___           ___                    ___           ___           ___                                              
--      /  /\         /  /\          __           /  /\         /  /\                  /  /\         /  /\         /  /\           ___         ___           ___     
--     /  /::\       /  /:/         |  |\        /  /::\       /  /::\                /  /::\       /  /::\       /  /::\         /__/\       /  /\         /__/\    
--    /__/:/\:\     /  /:/          |  |:|      /  /:/\:\     /__/:/\:\              /__/:/\:\     /  /:/\:\     /  /:/\:\        \__\:\     /  /::\        \  \:\   
--   _\_ \:\ \:\   /  /::\____      |  |:|     /  /::\ \:\   _\_ \:\ \:\            _\_ \:\ \:\   /  /:/  \:\   /  /::\ \:\       /  /::\   /  /:/\:\        \__\:\  
--  /__/\ \:\ \:\ /__/:/\:::::\     |__|:|__  /__/:/\:\ \:\ /__/\ \:\ \:\          /__/\ \:\ \:\ /__/:/ \  \:\ /__/:/\:\_\:\   __/  /:/\/  /  /::\ \:\       /  /::\ 
--  \  \:\ \:\_\/ \__\/~|:|~~~~     /  /::::\ \  \:\ \:\_\/ \  \:\ \:\_\/          \  \:\ \:\_\/ \  \:\  \__\/ \__\/~|::\/:/  /__/\/:/~~  /__/:/\:\_\:\     /  /:/\:\
--   \  \:\_\:\      |  |:|        /  /:/~~~~  \  \:\ \:\    \  \:\_\:\             \  \:\_\:\    \  \:\          |  |:|::/   \  \::/     \__\/  \:\/:/    /  /:/__\/
--    \  \:\/:/      |  |:|       /__/:/        \  \:\_\/     \  \:\/:/              \  \:\/:/     \  \:\         |  |:|\/     \  \:\          \  \::/    /__/:/     
--     \  \::/       |__|:|       \__\/          \  \:\        \  \::/                \  \::/       \  \:\        |__|:|~       \__\/           \__\/     \__\/      
--      \__\/         \__\|                       \__\/         \__\/                  \__\/         \__\/         \__\|                                             

vanilla_model.PLAYER:setVisible(false)
vanilla_model.CAPE:setVisible(false)
vanilla_model.HELMET:setVisible(false)
vanilla_model.ARMOR:setVisible(false)
vanilla_model.PLAYER:setVisible(false)

-- PhysBoneAPI by ChloeSpacedOut
 function events.entity_init()
	require("physBoneAPI")
	physBone.physBoobas:setGravity(1)
	physBone.physBoobas:setAirResistance(0)
	physBone.physBoobas:setSpringForce(100)
  end

local mainPage = action_wheel:newPage()
action_wheel:setPage(mainPage)

function pings.toggleArmour(state)
vanilla_model.ARMOR:setVisible(state)
end

local toggleaction = mainPage:newAction() -- If you're getting an error here it's probably because you didn't make the page
    :title("Armour Toggle")
    :toggleTitle("Enabled")
    :item("red_wool")
    :toggleItem("green_wool")
    :setOnToggle(pings.toggleArmour)

models:setPrimaryRenderType("Translucent_Cull")

    function pings.toggling(texture)
      models.model.Root.Head.VanillaHead:setPrimaryTexture("Custom", textures[texture])
      models.model.Root.Body.VanillaBody:setPrimaryTexture("Custom", textures[texture])
      models.model.Root.Body.physBoobas:setPrimaryTexture("Custom", textures[texture])
      models.model.Root.LeftArm:setPrimaryTexture("Custom", textures[texture])
      models.model.Root.RightArm:setPrimaryTexture("Custom", textures[texture])
      models.model.Root.LeftLeg:setPrimaryTexture("Custom", textures[texture])
      models.model.Root.RightLeg:setPrimaryTexture("Custom", textures[texture])
      models.model.Root.Head.Face.LeftEye:setPrimaryTexture("Custom", textures[texture.."_eyes"])
      models.model.Root.Head.Face.RightEye:setPrimaryTexture("Custom", textures[texture.."_eyes"])
      -- animation toggle example (commented out to avoid erroring):
      -- animations.bbmodelname.animationname:setPlaying(texture)
  end
  
        local toggleaction = mainPage:newAction() -- If you're getting an error here it's probably because you didn't make the page
      :title("Eeve")
      :toggleTitle("(The Base Skin)")
      :item("brown_wool")
      :toggleItem("brown_wool")
      :onLeftClick(function() pings.toggling("model.EeveSkin") end)
  
  local toggleaction = mainPage:newAction() -- If you're getting an error here it's probably because you didn't make the page
      :title("Smol Eevee")
      :toggleTitle("You are smol now!")
      :item("brown_wool")
      :toggleItem("brown_wool")
      :onLeftClick(function() pings.toggling("model.SmolEeveeSkin") end)

      local toggleaction = mainPage:newAction() -- If you're getting an error here it's probably because you didn't make the page
      :title("Eevia Human")
      :toggleTitle("A human? That's weird.")
      :item("brown_wool")
      :toggleItem("brown_wool")
      :onLeftClick(function() pings.toggling("model.EeviaHumanSkin") end)

      local toggleaction = mainPage:newAction() -- If you're getting an error here it's probably because you didn't make the page
      :title("Eevia")
      :toggleTitle("A human? That's not what this is!")
      :item("brown_wool")
      :toggleItem("brown_wool")
      :onLeftClick(function() pings.toggling("model.EeviaSkin") end)

      local toggleaction = mainPage:newAction() -- If you're getting an error here it's probably because you didn't make the page
      :title("April Eevia")
      :toggleTitle("For people who like.. April..")
      :item("brown_wool")
      :toggleItem("brown_wool")
      :onLeftClick(function() pings.toggling("model.AprilEeviaSkin") end)

      local toggleaction = mainPage:newAction() -- If you're getting an error here it's probably because you didn't make the page
      :title("Yayoi Eevee")
      :toggleTitle("i dunno, this is the weird one")
      :item("brown_wool")
      :toggleItem("brown_wool")
      :onLeftClick(function() pings.toggling("model.YayoiEeveeSkin") end)


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

local squapi = require("SquAPI")

squapi.eye:new(
    models.model.Root.Head.Face.LeftEye,  --the eye element 
    0.20,  --(0.25) left distance
    1,  --(1.25) right distance
    0,  --(0.0) up distance
    0   --(0.0) down distance
)

squapi.eye:new(
    models.model.Root.Head.Face.RightEye,  --the eye element 
    1,  --(0.25) left distance
    0.20,  --(1.25) right distance
    0,  --(0.0) up distance
    0   --(0.0) down distance
)