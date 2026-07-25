-- logTable(animations.model)

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

models:setPrimaryRenderType("Translucent_Cull")

-- PhysBoneAPI by ChloeSpacedOut
--  function events.entity_init()
-- 	require("physBoneAPI")
-- 	physBone.physBoobas:setGravity(1)
-- 	physBone.physBoobas:setAirResistance(0)
-- 	physBone.physBoobas:setSpringForce(100)
--   end

function events.render(delta, context)
    local crouch = player:getPose()=="CROUCHING"
    local headRotX, bodyRotX,c = vanilla_model.HEAD:getOriginRot().x, vanilla_model.BODY:getOriginRot().x
    c = math.min(crouch and 10 or -10, crouch and (-headRotX+bodyRotX) or 10)

    models.model.Body.Head.hair2:setRot(math.clamp(-headRotX, -80, c), 0, 0)

    models.model.Body.LeftArm:setVisible(context ~= "FIRST_PERSON")
    models.model.Body.RightArm:setVisible(context ~= "FIRST_PERSON")
    models.model.FirstPersonHands.LeftArmFirst:setVisible(context == "FIRST_PERSON")
    models.model.FirstPersonHands.RightArmFirst:setVisible(context == "FIRST_PERSON")
end

models:setPrimaryRenderType("Translucent_Cull")

local anims = require("JimmyAnims")
anims.excluBlendTime = 12.5
anims.incluBlendTime = 6
anims.autoBlend = true
anims(animations.model)

local squapi = require("SquAPI")

------------------------------------------------------

renderer:setOffsetCameraPivot(0,0,0)

renderer:setEyeOffset(0,0,0)

------------------------------------------------------

squapi.eye(
    models.model.Body.Head.Pupils.PupilL, --element
    0.1,                                               --(.25)leftdistance
    0.8,                                                 --(1.25)rightdistance
    0.6,                                               --(.5)updistance
    0.4,                                               --(.5)downdistance
    nil                                                --(false)switchvalues
)

squapi.eye(
    models.model.Body.Head.Pupils.PupilR, --element
    0.8,                                                  --(.25)leftdistance
    0.1,                                                --(1.25)rightdistance
    0.6,                                                --(.5)updistance
    0.4,                                                --(.5)downdistance
    nil                                                 --(false)switchvalues
)
