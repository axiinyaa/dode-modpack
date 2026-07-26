import { $GuiMessage$Line_ } from "@package/net/minecraft/client";

declare module "@package/com/ezzenix/chatanimation/util" {
    export class $TimestampedMessageLine {
        static of(line: $GuiMessage$Line_): $TimestampedMessageLine;
        static age(line: $GuiMessage$Line_): number;
    }
    export interface $TimestampedMessageLine {
        chatAnimation$getAddedTime(): number;
        chatAnimation$setAddedTime(arg0: number): void;
    }
}
