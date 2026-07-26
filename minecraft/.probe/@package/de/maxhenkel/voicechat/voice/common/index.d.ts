import { $RawUdpPacket } from "@package/de/maxhenkel/voicechat/api";
import { $SecretKeySpec } from "@package/javax/crypto/spec";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $SocketAddress } from "@package/java/net";
import { $ClientConnection, $Server } from "@package/de/maxhenkel/voicechat/voice/server";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $UUID_, $UUID } from "@package/java/util";

declare module "@package/de/maxhenkel/voicechat/voice/common" {
    export class $PingPacket implements $Packet<$PingPacket> {
        toBytes(arg0: $FriendlyByteBuf): void;
        getId(): $UUID;
        getTimestamp(): number;
        fromBytes(arg0: $FriendlyByteBuf): $PingPacket;
        getTTL(): number;
        constructor(arg0: $UUID_, arg1: number);
        constructor();
        get id(): $UUID;
        get timestamp(): number;
        get TTL(): number;
    }
    export class $MicPacket implements $Packet<$MicPacket> {
        getTTL(): number;
        isWhispering(): boolean;
        setData(arg0: number[]): void;
        toBytes(arg0: $FriendlyByteBuf): void;
        getData(): number[];
        getSequenceNumber(): number;
        fromBytes(arg0: $FriendlyByteBuf): $MicPacket;
        constructor(arg0: number[], arg1: boolean, arg2: number);
        constructor();
        get TTL(): number;
        get whispering(): boolean;
        get sequenceNumber(): number;
    }
    export class $PlayerState {
        setDisconnected(arg0: boolean): void;
        isDisabled(): boolean;
        setUuid(arg0: $UUID_): void;
        setDisabled(arg0: boolean): void;
        isDisconnected(): boolean;
        hasGroup(): boolean;
        getName(): string;
        toBytes(arg0: $FriendlyByteBuf): void;
        setName(arg0: string): void;
        setGroup(arg0: $UUID_ | null): void;
        static fromBytes(arg0: $FriendlyByteBuf): $PlayerState;
        getGroup(): $UUID;
        getUuid(): $UUID;
        constructor(arg0: $UUID_, arg1: string, arg2: boolean, arg3: boolean);
    }
    export class $Packet<T extends $Packet<any>> {
    }
    export interface $Packet<T extends $Packet<any>> {
        getTTL(): number;
        toBytes(arg0: $FriendlyByteBuf): void;
        fromBytes(arg0: $FriendlyByteBuf): T;
        get TTL(): number;
    }
    export class $Secret {
        static generateIV(): number[];
        static generateNewRandomSecret(): $Secret;
        getSecret(): number[];
        getKeySpec(): $SecretKeySpec;
        decrypt(arg0: number[]): number[];
        encrypt(arg0: number[]): number[];
        toBytes(arg0: $ByteBuf): void;
        static fromBytes(arg0: $ByteBuf): $Secret;
        static fromBytes(arg0: number[]): $Secret;
        static IV_SIZE_BYTES: number;
        static CIPHER: string;
        static SECRET_SIZE_BYTES: number;
        static TAG_LEN_BITS: number;
        get secret(): number[];
        get keySpec(): $SecretKeySpec;
    }
    export class $SoundPacket<T extends $SoundPacket<any>> implements $Packet<T> {
        isFromClientAudioChannel(): boolean;
        getChannelId(): $UUID;
        getData(): number[];
        getSequenceNumber(): number;
        getCategory(): string;
        getSender(): $UUID;
        getTTL(): number;
        static WHISPER_MASK: number;
        static HAS_CATEGORY_MASK: number;
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: number[], arg3: number, arg4: string | null);
        constructor();
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: number[], arg3: string | null);
        get fromClientAudioChannel(): boolean;
        get channelId(): $UUID;
        get data(): number[];
        get sequenceNumber(): number;
        get category(): string;
        get sender(): $UUID;
        get TTL(): number;
    }
    export class $NetworkMessage {
        getTTL(): number;
        static readFromBytes(arg0: $SocketAddress, arg1: $Secret, arg2: number[], arg3: number): $NetworkMessage;
        getPacket(): $Packet<$Packet<any>>;
        static readPacketServer(arg0: $RawUdpPacket, arg1: $Server): $NetworkMessage;
        writeServer(arg0: $Server, arg1: $ClientConnection): number[];
        write(arg0: $Secret): number[];
        getAddress(): $SocketAddress;
        getTimestamp(): number;
        static MAGIC_BYTE: number;
        constructor(arg0: number, arg1: $Packet<never>);
        constructor(arg0: $Packet<never>);
        get TTL(): number;
        get packet(): $Packet<$Packet<any>>;
        get address(): $SocketAddress;
        get timestamp(): number;
    }
}
