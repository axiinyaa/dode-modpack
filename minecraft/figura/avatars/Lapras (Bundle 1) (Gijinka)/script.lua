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
vanilla_model.HELMET:setVisible(true)
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

    function pings.toggleshiny(state)
      if state then
          models.model.Root.Head.VanillaHead:setPrimaryTexture("Custom", textures["model.shiny"])
          models.model.Root.Head.Pupils:setPrimaryTexture("Custom", textures["model.shiny_eyes"])
          models.model.Root.Body.VanillaBody:setPrimaryTexture("Custom", textures["model.shiny"])
          models.model.Root.Body.physBoobas:setPrimaryTexture("Custom", textures["model.shiny_chest"])
          models.model.Root.LeftLeg:setPrimaryTexture("Custom", textures["model.shiny"])
          models.model.Root.RightLeg:setPrimaryTexture("Custom", textures["model.shiny"])
          models.model.Root.LeftArm:setPrimaryTexture("Custom", textures["model.shiny"])
          models.model.Root.RightArm:setPrimaryTexture("Custom", textures["model.shiny"])
          models.model.Root.Head.leftear:setPrimaryTexture("Custom", textures["model.lapras_shinycobblemon"])
          models.model.Root.Head.rightear:setPrimaryTexture("Custom", textures["model.lapras_shinycobblemon"])
          models.model.Root.Head.middleear:setPrimaryTexture("Custom", textures["model.lapras_shinycobblemon"])
      else
     models.model.Root.Head.VanillaHead:setPrimaryTexture("Custom", textures["model.lapras"])
     models.model.Root.Head.Pupils:setPrimaryTexture("Custom", textures["model.lapras_eyes"])
          models.model.Root.Body.VanillaBody:setPrimaryTexture("Custom", textures["model.lapras"])
          models.model.Root.Body.physBoobas:setPrimaryTexture("Custom", textures["model.lapras_chest"])
          models.model.Root.LeftLeg:setPrimaryTexture("Custom", textures["model.lapras"])
          models.model.Root.RightLeg:setPrimaryTexture("Custom", textures["model.lapras"])
          models.model.Root.LeftArm:setPrimaryTexture("Custom", textures["model.lapras"])
          models.model.Root.RightArm:setPrimaryTexture("Custom", textures["model.lapras"])
          models.model.Root.Head.rightear:setPrimaryTexture("Custom", textures["model.laprascobblemon"])
          models.model.Root.Head.leftear:setPrimaryTexture("Custom", textures["model.laprascobblemon"])
          models.model.Root.Head.middleear:setPrimaryTexture("Custom", textures["model.laprascobblemon"])
      end
    end
  
  local toggleaction = mainPage:newAction() -- If you're getting an error here it's probably because you didn't make the page
      :title("Shiny Toggle")
      :toggleTitle("Shiny!")
      :item("pink_wool")
      :toggleItem("pink_wool")
      :setOnToggle(pings.toggleshiny)

models:setPrimaryRenderType("Translucent_Cull")

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