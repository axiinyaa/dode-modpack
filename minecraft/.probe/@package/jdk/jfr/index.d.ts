import { $Instant, $Duration, $Duration_ } from "@package/java/time";
import { $Reader, $InputStream, $Closeable } from "@package/java/io";
import { $Annotation } from "@package/java/lang/annotation";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Event as $Event$1 } from "@package/jdk/internal/event";
import { $Enum, $Object, $Class } from "@package/java/lang";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
export * as consumer from "@package/jdk/jfr/consumer";

declare module "@package/jdk/jfr" {
    export class $Event extends $Event$1 {
    }
    export class $RecordingState extends $Enum<$RecordingState> {
        static values(): $RecordingState[];
        static valueOf(arg0: string): $RecordingState;
        static NEW: $RecordingState;
        static DELAYED: $RecordingState;
        static CLOSED: $RecordingState;
        static RUNNING: $RecordingState;
        static STOPPED: $RecordingState;
    }
    /**
     * Values that may be interpreted as {@link $RecordingState}.
     */
    export type $RecordingState_ = "new" | "delayed" | "running" | "stopped" | "closed";
    export class $Configuration {
        getSettings(): $Map<string, string>;
        static getConfigurations(): $List<$Configuration>;
        getLabel(): string;
        getContents(): string;
        getProvider(): string;
        getName(): string;
        static create(arg0: $Reader): $Configuration;
        static create(arg0: $Path_): $Configuration;
        getDescription(): string;
        static getConfiguration(arg0: string): $Configuration;
        get settings(): $Map<string, string>;
        static get configurations(): $List<$Configuration>;
        get label(): string;
        get contents(): string;
        get provider(): string;
        get name(): string;
        get description(): string;
    }
    export class $AnnotationElement {
        getValues(): $List<$Object>;
        getTypeId(): number;
        getAnnotationElements(): $List<$AnnotationElement>;
        getValueDescriptors(): $List<$ValueDescriptor>;
        hasValue(arg0: string): boolean;
        getValue(arg0: string): $Object;
        getTypeName(): string;
        getAnnotation<A>(arg0: $Class<$Annotation>): A;
        constructor(arg0: $Class<$Annotation>, arg1: $Map_<string, $Object>);
        constructor(arg0: $Class<$Annotation>);
        constructor(arg0: $Class<$Annotation>, arg1: $Object);
        get values(): $List<$Object>;
        get typeId(): number;
        get annotationElements(): $List<$AnnotationElement>;
        get valueDescriptors(): $List<$ValueDescriptor>;
        get typeName(): string;
    }
    export class $ValueDescriptor {
        getTypeId(): number;
        getLabel(): string;
        getAnnotationElements(): $List<$AnnotationElement>;
        getContentType(): string;
        getName(): string;
        isArray(): boolean;
        getTypeName(): string;
        getFields(): $List<$ValueDescriptor>;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getDescription(): string;
        constructor(arg0: $Class<never>, arg1: string);
        constructor(arg0: $Class<never>, arg1: string, arg2: $List_<$AnnotationElement>);
        get typeId(): number;
        get label(): string;
        get annotationElements(): $List<$AnnotationElement>;
        get contentType(): string;
        get name(): string;
        get array(): boolean;
        get typeName(): string;
        get fields(): $List<$ValueDescriptor>;
        get description(): string;
    }
    export class $EventType {
        static getEventType(arg0: $Class<$Event>): $EventType;
        getCategoryNames(): $List<string>;
        getSettingDescriptors(): $List<$SettingDescriptor>;
        getLabel(): string;
        getAnnotationElements(): $List<$AnnotationElement>;
        getName(): string;
        isEnabled(): boolean;
        getFields(): $List<$ValueDescriptor>;
        getField(arg0: string): $ValueDescriptor;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getId(): number;
        getDescription(): string;
        get categoryNames(): $List<string>;
        get settingDescriptors(): $List<$SettingDescriptor>;
        get label(): string;
        get annotationElements(): $List<$AnnotationElement>;
        get name(): string;
        get enabled(): boolean;
        get fields(): $List<$ValueDescriptor>;
        get id(): number;
        get description(): string;
    }
    export class $Recording implements $Closeable {
        getStopTime(): $Instant;
        getDumpOnExit(): boolean;
        setToDisk(arg0: boolean): void;
        setSettings(arg0: $Map_<string, string>): void;
        setMaxAge(arg0: $Duration_): void;
        setMaxSize(arg0: number): void;
        setDuration(arg0: $Duration_): void;
        setDumpOnExit(arg0: boolean): void;
        scheduleStart(arg0: $Duration_): void;
        isToDisk(): boolean;
        getSettings(): $Map<string, string>;
        getDestination(): $Path;
        getMaxSize(): number;
        getMaxAge(): $Duration;
        getDuration(): $Duration;
        getStream(arg0: $Instant, arg1: $Instant): $InputStream;
        getName(): string;
        start(): void;
        stop(): boolean;
        setName(arg0: string): void;
        getId(): number;
        getState(): $RecordingState;
        close(): void;
        copy(arg0: boolean): $Recording;
        dump(arg0: $Path_): void;
        getSize(): number;
        enable(arg0: $Class<$Event>): $EventSettings;
        enable(arg0: string): $EventSettings;
        disable(arg0: $Class<$Event>): $EventSettings;
        disable(arg0: string): $EventSettings;
        getStartTime(): $Instant;
        setDestination(arg0: $Path_): void;
        constructor(arg0: $Map_<string, string>);
        constructor();
        constructor(arg0: $Configuration);
        get stopTime(): $Instant;
        get id(): number;
        get state(): $RecordingState;
        get size(): number;
        get startTime(): $Instant;
    }
    export class $SettingDescriptor {
        getTypeId(): number;
        getLabel(): string;
        getAnnotationElements(): $List<$AnnotationElement>;
        getContentType(): string;
        getName(): string;
        getTypeName(): string;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getDefaultValue(): string;
        getDescription(): string;
        get typeId(): number;
        get label(): string;
        get annotationElements(): $List<$AnnotationElement>;
        get contentType(): string;
        get name(): string;
        get typeName(): string;
        get defaultValue(): string;
        get description(): string;
    }
    export class $EventSettings {
        withStackTrace(): $EventSettings;
        withoutStackTrace(): $EventSettings;
        withoutThreshold(): $EventSettings;
        withPeriod(arg0: $Duration_): $EventSettings;
        withThreshold(arg0: $Duration_): $EventSettings;
        "with"(arg0: string, arg1: string): $EventSettings;
    }
}
