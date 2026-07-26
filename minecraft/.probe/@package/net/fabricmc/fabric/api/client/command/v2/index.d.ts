import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Object } from "@package/java/lang";
import { $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";

declare module "@package/net/fabricmc/fabric/api/client/command/v2" {
    export class $FabricClientCommandSource {
    }
    export interface $FabricClientCommandSource extends $SharedSuggestionProvider {
        sendError(arg0: $Component_): void;
        getMeta(arg0: string): $Object;
        sendFeedback(arg0: $Component_): void;
        getClient(): $Minecraft;
        getPlayer(): $LocalPlayer;
        getWorld(): $ClientLevel;
        getEntity(): $Entity;
        getPosition(): $Vec3;
        getRotation(): $Vec2;
        get client(): $Minecraft;
        get player(): $LocalPlayer;
        get world(): $ClientLevel;
        get entity(): $Entity;
        get position(): $Vec3;
        get rotation(): $Vec2;
    }
}
