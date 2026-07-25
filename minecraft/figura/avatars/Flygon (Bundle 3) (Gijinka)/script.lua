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
vanilla_model.ELYTRA:setVisible(false)

local parts   = require("lib.PartsAPI")
local squapi  = require("lib.SquAPI")

models:setPrimaryRenderType("Translucent_Cull")

local anims = require('lib.JimmyAnims')
anims(animations.model)

-- Tails table
local flygonTail = {
	
	models.model.root.lower.Body.tail.tail4,
	models.model.root.lower.Body.tail.tail4.tail5,
	models.model.root.lower.Body.tail.tail4.tail5.tail6,
	models.model.root.lower.Body.tail.tail4.tail5.tail6.tail_fins
	
}
--Antennae table
local flygonAntennae = {
	
	models.model.root.Head.antenna_left,
	models.model.root.Head.antenna_left.antenna_left2,
	models.model.root.Head.antenna_left.antenna_left2.antenna_left3,
	models.model.root.Head.antenna_right,
	models.model.root.Head.antenna_right.antenna_right2,
	models.model.root.Head.antenna_right.antenna_right2.antenna_right3
	
}

-- Wings table
local flygonWings = {
	
	models.model.root.lower.Body.wings.wing_left,
	models.model.root.lower.Body.wings.wing_right
	
}

-- Limbs table
local Limbs = {
	
	models.model.root.lower.RightArm,
	models.model.root.lower.LeftArm,
	models.model.root.lower.RightLeg,
	models.model.root.lower.LeftLeg
	
}


squapi.tail:new(flygonTail,
    nil,    --(15) idleXMovement
    nil,    --(5) idleYMovement
    nil,    --(1.2) idleXSpeed
    nil,    --(2) idleYSpeed
    1,    --(2) bendStrength
    0,    --(0) velocityPush
    nil,    --(0) initialMovementOffset
    nil,    --(1) offsetBetweenSegments
    0,    --(.005) stiffness
    nil,    --(.9) bounce
    nil,    --(90) flyingOffset
    -30,    --(-90) downLimit
    100     --(45) upLimit
)

squapi.tail:new(flygonAntennae,
    0,    --(15) idleXMovement
    0,    --(5) idleYMovement
    nil,    --(1.2) idleXSpeed
    nil,    --(2) idleYSpeed
    2,    --(2) bendStrength
    0,    --(0) velocityPush
    nil,    --(0) initialMovementOffset
    nil,    --(1) offsetBetweenSegments
    0,    --(.005) stiffness
    nil,    --(.9) bounce
    nil,    --(90) flyingOffset
    -16,    --(-90) downLimit
    15     --(45) upLimit
)

squapi.tail:new(flygonWings,
    0,    --(15) idleXMovement
    0,    --(5) idleYMovement
    nil,    --(1.2) idleXSpeed
    nil,    --(2) idleYSpeed
    1,    --(2) bendStrength
    0,    --(0) velocityPush
    nil,    --(0) initialMovementOffset
    nil,    --(1) offsetBetweenSegments
    0,    --(.005) stiffness
    nil,    --(.9) bounce
    nil,    --(90) flyingOffset
    -16,    --(-90) downLimit
    15     --(45) upLimit
)

------------------------------------------------------

renderer:setOffsetCameraPivot(0,0,0)

renderer:setEyeOffset(0,0,0)

------------------------------------------------------

local squapi = require("SquAPI")

squapi.eye:new(
    models.model.root.Head.Pupils.PupilL,  --the eye element 
    0.20,  --(0.25) left distance
    1,  --(1.25) right distance
    0,  --(0.0) up distance
    0   --(0.0) down distance
)

squapi.eye:new(
    models.model.root.Head.Pupils.PupilR,  --the eye element 
    1,  --(0.25) left distance
    0.20,  --(1.25) right distance
    0,  --(0.0) up distance
    0   --(0.0) down distance
)