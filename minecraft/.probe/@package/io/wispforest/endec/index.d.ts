import { $Endable } from "@package/io/wispforest/endec/util";
import { $Consumer_, $Supplier_, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $Enum, $Exception, $Object, $Class } from "@package/java/lang";
import { $Iterator, $List, $Map, $Map$Entry, $Set } from "@package/java/util";
import { $AttributeEndecBuilder, $KeyedEndec, $StructField } from "@package/io/wispforest/endec/impl";
export * as util from "@package/io/wispforest/endec/util";
export * as impl from "@package/io/wispforest/endec/impl";

declare module "@package/io/wispforest/endec" {
    export class $Deserializer<T> {
    }
    export interface $Deserializer<T> {
        readOptional<V>(arg0: $SerializationContext, arg1: $Endec<V>): (V) | undefined;
        readVarLong(arg0: $SerializationContext): number;
        readVarInt(arg0: $SerializationContext): number;
        setupContext(arg0: $SerializationContext): $SerializationContext;
        readBoolean(arg0: $SerializationContext): boolean;
        readByte(arg0: $SerializationContext): number;
        readShort(arg0: $SerializationContext): number;
        readLong(arg0: $SerializationContext): number;
        readDouble(arg0: $SerializationContext): number;
        readString(arg0: $SerializationContext): string;
        tryRead<V>(arg0: $Function_<$Deserializer<T>, V>): V;
        map<V>(arg0: $SerializationContext, arg1: $Endec<V>): $Deserializer$Map<V>;
        readInt(arg0: $SerializationContext): number;
        readBytes(arg0: $SerializationContext): number[];
        sequence<E>(arg0: $SerializationContext, arg1: $Endec<E>): $Deserializer$Sequence<E>;
        readFloat(arg0: $SerializationContext): number;
        struct(): $Deserializer$Struct;
        set upContext(value: $SerializationContext);
    }
    export class $Endec$Encoder<T> {
    }
    export interface $Endec$Encoder<T> {
        encode(arg0: $SerializationContext, arg1: $Serializer<never>, arg2: T): void;
    }
    /**
     * Values that may be interpreted as {@link $Endec$Encoder}.
     */
    export type $Endec$Encoder_<T> = ((arg0: $SerializationContext, arg1: $Serializer<never>, arg2: T) => void);
    export class $Deserializer$Struct {
    }
    export interface $Deserializer$Struct {
        field<F>(arg0: string, arg1: $SerializationContext, arg2: $Endec<F>): F;
        field<F>(arg0: string, arg1: $SerializationContext, arg2: $Endec<F>, arg3: F): F;
    }
    export class $Deserializer$Map<E> {
    }
    export interface $Deserializer$Map<E> extends $Iterator<$Map$Entry<string, E>> {
        estimatedSize(): number;
        hasNext(): boolean;
        next(): $Map$Entry<string, $Map$Entry<string, E>>;
    }
    export class $Endec<T> {
        static forEnum<E extends $Enum<E>>(arg0: $Class<E>): $Endec<E>;
        static ifAttr<T>(arg0: $SerializationAttribute, arg1: $Endec<T>): $AttributeEndecBuilder<T>;
        static dispatchedStruct<T, K>(arg0: $Function_<K, $StructEndec<T>>, arg1: $Function_<T, K>, arg2: $Endec<K>): $Endec<T>;
        static dispatchedStruct<T, K>(arg0: $Function_<K, $StructEndec<T>>, arg1: $Function_<T, K>, arg2: $Endec<K>, arg3: string): $Endec<T>;
        static dispatched<T, K>(arg0: $Function_<K, $Endec<T>>, arg1: $Function_<T, K>, arg2: $Endec<K>): $Endec<T>;
        static map<K, V>(arg0: $Function_<K, string>, arg1: $Function_<string, K>, arg2: $Endec<V>): $Endec<$Map<K, V>>;
        static map<K, V>(arg0: $Endec<K>, arg1: $Endec<V>): $Endec<$Map<K, V>>;
        static of<T>(arg0: $Endec$Encoder_<T>, arg1: $Endec$Decoder_<T>): $Endec<T>;
        static BYTES: $Endec<number[]>;
        static VAR_LONG: $Endec<number>;
        static FLOAT: $Endec<number>;
        static VAR_INT: $Endec<number>;
        static BYTE: $Endec<number>;
        static STRING: $Endec<string>;
        static DOUBLE: $Endec<number>;
        static VOID: $Endec<void>;
        static BOOLEAN: $Endec<boolean>;
        static INT: $Endec<number>;
        static SHORT: $Endec<number>;
        static LONG: $Endec<number>;
    }
    export interface $Endec<T> {
        xmapWithContext<R>(arg0: $BiFunction_<$SerializationContext, T, R>, arg1: $BiFunction_<$SerializationContext, R, T>): $Endec<R>;
        catchErrors(arg0: $Endec$DecoderWithError_<T>): $Endec<T>;
        nullableOf(): $Endec<T>;
        keyed(arg0: string, arg1: $Supplier_<T>): $KeyedEndec<T>;
        keyed(arg0: string, arg1: T): $KeyedEndec<T>;
        decode(arg0: $SerializationContext, arg1: $Deserializer<never>): T;
        encode(arg0: $SerializationContext, arg1: $Serializer<never>, arg2: T): void;
        validate(arg0: $Consumer_<T>): $Endec<T>;
        optionalOf(): $Endec<(T) | undefined>;
        optionalFieldOf<S>(arg0: string, arg1: $Function_<S, T>, arg2: $Supplier_<T>): $StructField<S, T>;
        optionalFieldOf<S>(arg0: string, arg1: $Function_<S, T>, arg2: T): $StructField<S, T>;
        listOf(): $Endec<$List<T>>;
        xmap<R>(arg0: $Function_<T, R>, arg1: $Function_<R, T>): $Endec<R>;
        fieldOf<S>(arg0: string, arg1: $Function_<S, T>): $StructField<S, T>;
        mapOf(): $Endec<$Map<string, T>>;
        decodeFully<E>(arg0: $Function_<E, $Deserializer<E>>, arg1: E): T;
        decodeFully<E>(arg0: $SerializationContext, arg1: $Function_<E, $Deserializer<E>>, arg2: E): T;
        encodeFully<E>(arg0: $Supplier_<$Serializer<E>>, arg1: T): E;
        encodeFully<E>(arg0: $SerializationContext, arg1: $Supplier_<$Serializer<E>>, arg2: T): E;
        setOf(): $Endec<$Set<T>>;
    }
    export class $StructEndec<T> {
        static unit<T>(arg0: T): $StructEndec<T>;
        static unit<T>(arg0: $Supplier_<T>): $StructEndec<T>;
    }
    export interface $StructEndec<T> extends $Endec<T> {
        xmapWithContext<R>(arg0: $BiFunction_<$SerializationContext, T, R>, arg1: $BiFunction_<$SerializationContext, R, T>): $StructEndec<R>;
        flatFieldOf<S>(arg0: $Function_<S, T>): $StructField<S, T>;
        encodeStruct(arg0: $SerializationContext, arg1: $Serializer<never>, arg2: $Serializer$Struct, arg3: T): void;
        decodeStruct(arg0: $SerializationContext, arg1: $Deserializer<never>, arg2: $Deserializer$Struct): T;
        decode(arg0: $SerializationContext, arg1: $Deserializer<never>): T;
        encode(arg0: $SerializationContext, arg1: $Serializer<never>, arg2: T): void;
        xmap<R>(arg0: $Function_<T, R>, arg1: $Function_<R, T>): $StructEndec<R>;
    }
    export class $Endec$Decoder<T> {
    }
    export interface $Endec$Decoder<T> {
        decode(arg0: $SerializationContext, arg1: $Deserializer<never>): T;
    }
    /**
     * Values that may be interpreted as {@link $Endec$Decoder}.
     */
    export type $Endec$Decoder_<T> = ((arg0: $SerializationContext, arg1: $Deserializer<never>) => T);
    export class $Serializer$Struct {
    }
    export interface $Serializer$Struct extends $Endable {
        field<F>(arg0: string, arg1: $SerializationContext, arg2: $Endec<F>, arg3: F): $Serializer$Struct;
    }
    export class $Serializer<T> {
    }
    export interface $Serializer<T> {
        writeOptional<V>(arg0: $SerializationContext, arg1: $Endec<V>, arg2: (V) | undefined): void;
        writeVarLong(arg0: $SerializationContext, arg1: number): void;
        writeVarInt(arg0: $SerializationContext, arg1: number): void;
        setupContext(arg0: $SerializationContext): $SerializationContext;
        writeShort(arg0: $SerializationContext, arg1: number): void;
        writeBoolean(arg0: $SerializationContext, arg1: boolean): void;
        writeByte(arg0: $SerializationContext, arg1: number): void;
        writeLong(arg0: $SerializationContext, arg1: number): void;
        writeDouble(arg0: $SerializationContext, arg1: number): void;
        writeString(arg0: $SerializationContext, arg1: string): void;
        map<V>(arg0: $SerializationContext, arg1: $Endec<V>, arg2: number): $Serializer$Map<V>;
        result(): T;
        writeInt(arg0: $SerializationContext, arg1: number): void;
        writeBytes(arg0: $SerializationContext, arg1: number[]): void;
        sequence<E>(arg0: $SerializationContext, arg1: $Endec<E>, arg2: number): $Serializer$Sequence<E>;
        writeFloat(arg0: $SerializationContext, arg1: number): void;
        struct(): $Serializer$Struct;
        set upContext(value: $SerializationContext);
    }
    export class $SerializationAttribute {
        static marker(arg0: string): $SerializationAttribute$Marker;
        static withValue<T>(arg0: string): $SerializationAttribute$WithValue<T>;
        name: string;
    }
    export class $Serializer$Map<V> {
    }
    export interface $Serializer$Map<V> extends $Endable {
        entry(arg0: string, arg1: V): void;
    }
    export class $Deserializer$Sequence<E> {
    }
    export interface $Deserializer$Sequence<E> extends $Iterator<E> {
        estimatedSize(): number;
        hasNext(): boolean;
        next(): E;
    }
    export class $SerializationContext {
        withoutAttributes(...arg0: $SerializationAttribute[]): $SerializationContext;
        withSuppressed(...arg0: $SerializationAttribute[]): $SerializationContext;
        withoutSuppressed(...arg0: $SerializationAttribute[]): $SerializationContext;
        requireAttributeValue<A>(arg0: $SerializationAttribute$WithValue<A>): A;
        hasAttribute(arg0: $SerializationAttribute): boolean;
        and(arg0: $SerializationContext): $SerializationContext;
        getAttributeValue<A>(arg0: $SerializationAttribute$WithValue<A>): A;
        static empty(): $SerializationContext;
        static suppressed(...arg0: $SerializationAttribute[]): $SerializationContext;
        static attributes(...arg0: $SerializationAttribute$Instance[]): $SerializationContext;
        withAttributes(...arg0: $SerializationAttribute$Instance[]): $SerializationContext;
    }
    export class $Endec$DecoderWithError<T> {
    }
    export interface $Endec$DecoderWithError<T> {
        decode(arg0: $SerializationContext, arg1: $Deserializer<never>, arg2: $Exception): T;
    }
    /**
     * Values that may be interpreted as {@link $Endec$DecoderWithError}.
     */
    export type $Endec$DecoderWithError_<T> = ((arg0: $SerializationContext, arg1: $Deserializer<never>, arg2: $Exception) => T);
    export class $SerializationAttribute$Instance {
    }
    export interface $SerializationAttribute$Instance {
        attribute(): $SerializationAttribute;
        value(): $Object;
    }
    export class $SerializationAttribute$WithValue<T> extends $SerializationAttribute {
        instance(arg0: T): $SerializationAttribute$Instance;
        name: string;
    }
    export class $SerializationAttribute$Marker extends $SerializationAttribute implements $SerializationAttribute$Instance {
        attribute(): $SerializationAttribute;
        value(): $Object;
        name: string;
    }
    export class $Serializer$Sequence<E> {
    }
    export interface $Serializer$Sequence<E> extends $Endable {
        element(arg0: E): void;
    }
}
