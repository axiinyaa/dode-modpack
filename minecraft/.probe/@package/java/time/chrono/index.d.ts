import { $ZoneOffset, $LocalDate, $Period, $Instant, $ZoneId, $LocalDateTime, $ZonedDateTime, $Clock, $LocalTime } from "@package/java/time";
import { $Serializable } from "@package/java/io";
import { $DateTimeFormatter, $ResolverStyle_, $TextStyle_ } from "@package/java/time/format";
import { $Enum, $Comparable, $Object } from "@package/java/lang";
import { $Comparator, $List, $Map_, $Locale, $Set } from "@package/java/util";
import { $TemporalField, $TemporalAmount_, $Temporal, $ChronoField_, $TemporalUnit, $ValueRange, $TemporalQuery_, $TemporalAccessor, $TemporalAdjuster, $TemporalAmount, $TemporalAdjuster_ } from "@package/java/time/temporal";

declare module "@package/java/time/chrono" {
    export class $IsoEra extends $Enum<$IsoEra> implements $Era {
        static values(): $IsoEra[];
        static valueOf(arg0: string): $IsoEra;
        getValue(): number;
        static of(arg0: number): $IsoEra;
        getDisplayName(arg0: $TextStyle_, arg1: $Locale): string;
        get(arg0: $TemporalField): number;
        getLong(arg0: $TemporalField): number;
        isSupported(arg0: $TemporalField): boolean;
        query<R>(arg0: $TemporalQuery_<R>): R;
        range(arg0: $TemporalField): $ValueRange;
        adjustInto(arg0: $Temporal): $Temporal;
        static CE: $IsoEra;
        static BCE: $IsoEra;
        get value(): number;
    }
    /**
     * Values that may be interpreted as {@link $IsoEra}.
     */
    export type $IsoEra_ = "bce" | "ce";
    export class $ChronoZonedDateTime<D extends $ChronoLocalDate> {
        static timeLineOrder(): $Comparator<$ChronoZonedDateTime<never>>;
        static from(arg0: $TemporalAccessor): $ChronoZonedDateTime<never>;
    }
    export interface $ChronoZonedDateTime<D extends $ChronoLocalDate> extends $Temporal, $Comparable<$ChronoZonedDateTime<never>> {
        toEpochSecond(): number;
        toInstant(): $Instant;
        plus(arg0: number, arg1: $TemporalUnit): $ChronoZonedDateTime<D>;
        plus(arg0: $TemporalAmount_): $ChronoZonedDateTime<D>;
        getChronology(): $Chronology;
        getZone(): $ZoneId;
        minus(arg0: number, arg1: $TemporalUnit): $ChronoZonedDateTime<D>;
        minus(arg0: $TemporalAmount_): $ChronoZonedDateTime<D>;
        withZoneSameInstant(arg0: $ZoneId): $ChronoZonedDateTime<D>;
        withZoneSameLocal(arg0: $ZoneId): $ChronoZonedDateTime<D>;
        withLaterOffsetAtOverlap(): $ChronoZonedDateTime<D>;
        get(arg0: $TemporalField): number;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $ChronoZonedDateTime<never>): number;
        getLong(arg0: $TemporalField): number;
        format(arg0: $DateTimeFormatter): string;
        isSupported(arg0: $TemporalField): boolean;
        isSupported(arg0: $TemporalUnit): boolean;
        "with"(arg0: $TemporalAdjuster_): $ChronoZonedDateTime<D>;
        "with"(arg0: $TemporalField, arg1: number): $ChronoZonedDateTime<D>;
        query<R>(arg0: $TemporalQuery_<R>): R;
        getOffset(): $ZoneOffset;
        range(arg0: $TemporalField): $ValueRange;
        isEqual(arg0: $ChronoZonedDateTime<never>): boolean;
        toLocalDate(): D;
        toLocalDateTime(): $ChronoLocalDateTime<D>;
        toLocalTime(): $LocalTime;
        isAfter(arg0: $ChronoZonedDateTime<never>): boolean;
        isBefore(arg0: $ChronoZonedDateTime<never>): boolean;
        withEarlierOffsetAtOverlap(): $ChronoZonedDateTime<D>;
        get chronology(): $Chronology;
        get zone(): $ZoneId;
        get offset(): $ZoneOffset;
    }
    export class $AbstractChronology implements $Chronology {
        resolveDate(arg0: $Map_<$TemporalField, number>, arg1: $ResolverStyle_): $ChronoLocalDate;
        compareTo(arg0: $Chronology): number;
        dateYearDay(arg0: $Era_, arg1: number, arg2: number): $ChronoLocalDate;
        dateNow(arg0: $ZoneId): $ChronoLocalDate;
        dateNow(arg0: $Clock): $ChronoLocalDate;
        dateNow(): $ChronoLocalDate;
        zonedDateTime(arg0: $TemporalAccessor): $ChronoZonedDateTime<$ChronoLocalDate>;
        zonedDateTime(arg0: $Instant, arg1: $ZoneId): $ChronoZonedDateTime<$ChronoLocalDate>;
        isIsoBased(): boolean;
        localDateTime(arg0: $TemporalAccessor): $ChronoLocalDateTime<$ChronoLocalDate>;
        getDisplayName(arg0: $TextStyle_, arg1: $Locale): string;
        date(arg0: $Era_, arg1: number, arg2: number, arg3: number): $ChronoLocalDate;
        epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $ZoneOffset): number;
        epochSecond(arg0: $Era_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $ZoneOffset): number;
        period(arg0: number, arg1: number, arg2: number): $ChronoPeriod;
        get isoBased(): boolean;
    }
    export class $ChronoPeriod {
        static between(arg0: $ChronoLocalDate, arg1: $ChronoLocalDate): $ChronoPeriod;
    }
    export interface $ChronoPeriod extends $TemporalAmount {
        plus(arg0: $TemporalAmount_): $ChronoPeriod;
        isZero(): boolean;
        getChronology(): $Chronology;
        getUnits(): $List<$TemporalUnit>;
        negated(): $ChronoPeriod;
        multipliedBy(arg0: number): $ChronoPeriod;
        isNegative(): boolean;
        minus(arg0: $TemporalAmount_): $ChronoPeriod;
        get(arg0: $TemporalUnit): number;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        normalized(): $ChronoPeriod;
        addTo(arg0: $Temporal): $Temporal;
        subtractFrom(arg0: $Temporal): $Temporal;
        get zero(): boolean;
        get chronology(): $Chronology;
        get units(): $List<$TemporalUnit>;
        get negative(): boolean;
    }
    export class $Era {
    }
    export interface $Era extends $TemporalAccessor, $TemporalAdjuster {
        getDisplayName(arg0: $TextStyle_, arg1: $Locale): string;
        get(arg0: $TemporalField): number;
        getLong(arg0: $TemporalField): number;
        getValue(): number;
        isSupported(arg0: $TemporalField): boolean;
        query<R>(arg0: $TemporalQuery_<R>): R;
        range(arg0: $TemporalField): $ValueRange;
        adjustInto(arg0: $Temporal): $Temporal;
        get value(): number;
    }
    /**
     * Values that may be interpreted as {@link $Era}.
     */
    export type $Era_ = (() => number);
    export class $ChronoLocalDateTime<D extends $ChronoLocalDate> {
        static timeLineOrder(): $Comparator<$ChronoLocalDateTime<never>>;
        static from(arg0: $TemporalAccessor): $ChronoLocalDateTime<never>;
    }
    export interface $ChronoLocalDateTime<D extends $ChronoLocalDate> extends $Temporal, $TemporalAdjuster, $Comparable<$ChronoLocalDateTime<never>> {
        toEpochSecond(arg0: $ZoneOffset): number;
        toInstant(arg0: $ZoneOffset): $Instant;
        plus(arg0: number, arg1: $TemporalUnit): $ChronoLocalDateTime<D>;
        plus(arg0: $TemporalAmount_): $ChronoLocalDateTime<D>;
        getChronology(): $Chronology;
        minus(arg0: number, arg1: $TemporalUnit): $ChronoLocalDateTime<D>;
        minus(arg0: $TemporalAmount_): $ChronoLocalDateTime<D>;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $ChronoLocalDateTime<never>): number;
        format(arg0: $DateTimeFormatter): string;
        isSupported(arg0: $TemporalUnit): boolean;
        isSupported(arg0: $TemporalField): boolean;
        "with"(arg0: $TemporalField, arg1: number): $ChronoLocalDateTime<D>;
        "with"(arg0: $TemporalAdjuster_): $ChronoLocalDateTime<D>;
        query<R>(arg0: $TemporalQuery_<R>): R;
        isEqual(arg0: $ChronoLocalDateTime<never>): boolean;
        toLocalDate(): D;
        toLocalTime(): $LocalTime;
        adjustInto(arg0: $Temporal): $Temporal;
        isAfter(arg0: $ChronoLocalDateTime<never>): boolean;
        isBefore(arg0: $ChronoLocalDateTime<never>): boolean;
        atZone(arg0: $ZoneId): $ChronoZonedDateTime<D>;
        get chronology(): $Chronology;
    }
    export class $Chronology {
        static ofLocale(arg0: $Locale): $Chronology;
        static getAvailableChronologies(): $Set<$Chronology>;
        static of(arg0: string): $Chronology;
        static from(arg0: $TemporalAccessor): $Chronology;
        static get availableChronologies(): $Set<$Chronology>;
    }
    export interface $Chronology extends $Comparable<$Chronology> {
        getCalendarType(): string;
        prolepticYear(arg0: $Era_, arg1: number): number;
        dateYearDay(arg0: number, arg1: number): $ChronoLocalDate;
        dateYearDay(arg0: $Era_, arg1: number, arg2: number): $ChronoLocalDate;
        dateNow(arg0: $ZoneId): $ChronoLocalDate;
        dateNow(arg0: $Clock): $ChronoLocalDate;
        dateNow(): $ChronoLocalDate;
        resolveDate(arg0: $Map_<$TemporalField, number>, arg1: $ResolverStyle_): $ChronoLocalDate;
        zonedDateTime(arg0: $TemporalAccessor): $ChronoZonedDateTime<$ChronoLocalDate>;
        zonedDateTime(arg0: $Instant, arg1: $ZoneId): $ChronoZonedDateTime<$ChronoLocalDate>;
        dateEpochDay(arg0: number): $ChronoLocalDate;
        isIsoBased(): boolean;
        localDateTime(arg0: $TemporalAccessor): $ChronoLocalDateTime<$ChronoLocalDate>;
        eraOf(arg0: number): $Era;
        isLeapYear(arg0: number): boolean;
        eras(): $List<$Era>;
        getDisplayName(arg0: $TextStyle_, arg1: $Locale): string;
        date(arg0: number, arg1: number, arg2: number): $ChronoLocalDate;
        date(arg0: $TemporalAccessor): $ChronoLocalDate;
        date(arg0: $Era_, arg1: number, arg2: number, arg3: number): $ChronoLocalDate;
        epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $ZoneOffset): number;
        epochSecond(arg0: $Era_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $ZoneOffset): number;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $Chronology): number;
        getId(): string;
        range(arg0: $ChronoField_): $ValueRange;
        period(arg0: number, arg1: number, arg2: number): $ChronoPeriod;
        get calendarType(): string;
        get isoBased(): boolean;
        get id(): string;
    }
    export class $ChronoLocalDate {
        static timeLineOrder(): $Comparator<$ChronoLocalDate>;
        static from(arg0: $TemporalAccessor): $ChronoLocalDate;
    }
    export interface $ChronoLocalDate extends $Temporal, $TemporalAdjuster, $Comparable<$ChronoLocalDate> {
        plus(arg0: number, arg1: $TemporalUnit): $ChronoLocalDate;
        plus(arg0: $TemporalAmount_): $ChronoLocalDate;
        getChronology(): $Chronology;
        lengthOfYear(): number;
        atTime(arg0: $LocalTime): $ChronoLocalDateTime<never>;
        getEra(): $Era;
        isLeapYear(): boolean;
        lengthOfMonth(): number;
        toEpochDay(): number;
        minus(arg0: number, arg1: $TemporalUnit): $ChronoLocalDate;
        minus(arg0: $TemporalAmount_): $ChronoLocalDate;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $ChronoLocalDate): number;
        format(arg0: $DateTimeFormatter): string;
        isSupported(arg0: $TemporalUnit): boolean;
        isSupported(arg0: $TemporalField): boolean;
        "with"(arg0: $TemporalAdjuster_): $ChronoLocalDate;
        "with"(arg0: $TemporalField, arg1: number): $ChronoLocalDate;
        query<R>(arg0: $TemporalQuery_<R>): R;
        isEqual(arg0: $ChronoLocalDate): boolean;
        until(arg0: $Temporal, arg1: $TemporalUnit): number;
        until(arg0: $ChronoLocalDate): $ChronoPeriod;
        adjustInto(arg0: $Temporal): $Temporal;
        isAfter(arg0: $ChronoLocalDate): boolean;
        isBefore(arg0: $ChronoLocalDate): boolean;
        get chronology(): $Chronology;
        get era(): $Era;
        get leapYear(): boolean;
    }
    export class $IsoChronology extends $AbstractChronology implements $Serializable {
        dateYearDay(arg0: number, arg1: number): $LocalDate;
        dateYearDay(arg0: $Era_, arg1: number, arg2: number): $LocalDate;
        dateNow(): $LocalDate;
        dateNow(arg0: $Clock): $LocalDate;
        dateNow(arg0: $ZoneId): $LocalDate;
        resolveDate(arg0: $Map_<$TemporalField, number>, arg1: $ResolverStyle_): $LocalDate;
        zonedDateTime(arg0: $Instant, arg1: $ZoneId): $ZonedDateTime;
        zonedDateTime(arg0: $TemporalAccessor): $ZonedDateTime;
        dateEpochDay(arg0: number): $LocalDate;
        localDateTime(arg0: $TemporalAccessor): $LocalDateTime;
        eraOf(arg0: number): $IsoEra;
        date(arg0: number, arg1: number, arg2: number): $LocalDate;
        date(arg0: $TemporalAccessor): $LocalDate;
        date(arg0: $Era_, arg1: number, arg2: number, arg3: number): $LocalDate;
        period(arg0: number, arg1: number, arg2: number): $Period;
        static INSTANCE: $IsoChronology;
    }
}
