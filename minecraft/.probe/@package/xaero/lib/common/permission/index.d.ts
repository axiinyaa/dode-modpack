import { $Component } from "@package/net/minecraft/network/chat";
import { $Class } from "@package/java/lang";
export * as config from "@package/xaero/lib/common/permission/config";

declare module "@package/xaero/lib/common/permission" {
    export class $PermissionNode<T> {
        getActualPath(): string;
        getDefaultPath(): string;
        getDisplayName(): $Component;
        getType(): $Class<T>;
        getComment(): $Component;
        getModId(): string;
        get actualPath(): string;
        get defaultPath(): string;
        get displayName(): $Component;
        get type(): $Class<T>;
        get comment(): $Component;
        get modId(): string;
    }
}
