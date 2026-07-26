import { $Function_, $ToDoubleFunction_ } from "@package/java/util/function";
import { $AnimationController } from "@package/com/zigythebird/playeranimcore/animation";
import { $PlayerAnimManager } from "@package/com/zigythebird/playeranim/animation";
import { $Event } from "@package/net/neoforged/bus/api";
import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $MochaEngine } from "@package/team/unnamed/mocha";
import { $QueryBinding } from "@package/com/zigythebird/playeranimcore/molang";

declare module "@package/com/zigythebird/playeranim/neoforge/event" {
    export class $PlayerAnimationRegisterEvent extends $Event {
        getClientPlayer(): $AbstractClientPlayer;
        getAnimManager(): $PlayerAnimManager;
        constructor(player: $AbstractClientPlayer, manager: $PlayerAnimManager);
        get clientPlayer(): $AbstractClientPlayer;
        get animManager(): $PlayerAnimManager;
    }
    export class $MolangEvent extends $Event {
        getAnimationController(): $AnimationController;
        getRuntimeBuilder(): $MochaEngine<$AnimationController>;
        setDoubleQuery(name: string, value: $ToDoubleFunction_<$AnimationController>): boolean;
        setBoolQuery(name: string, value: $Function_<$AnimationController, boolean>): boolean;
        constructor(controller: $AnimationController, engine: $MochaEngine<$AnimationController>, queryBinding: $QueryBinding<$AnimationController>);
        get animationController(): $AnimationController;
        get runtimeBuilder(): $MochaEngine<$AnimationController>;
    }
}
