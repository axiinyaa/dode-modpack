import { $File_ } from "@package/java/io";
import { $Logger } from "@package/org/slf4j";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $WorldGenerationInfo_ } from "@package/com/mojang/realmsclient/util";
import { $RealmsDownloadLatestWorldScreen$DownloadStatus, $UploadResult } from "@package/com/mojang/realmsclient/gui/screens";
import { $Minecraft, $User } from "@package/net/minecraft/client";
import { $List, $UUID_, $List_ } from "@package/java/util";
import { $LevelStorageSource } from "@package/net/minecraft/world/level/storage";
import { $RealmsHttpException } from "@package/com/mojang/realmsclient/exception";
import { $InputStreamEntity } from "@package/org/apache/http/entity";
import { $UploadInfo, $RealmsServer, $RealmsServerPlayerLists, $PendingInvitesList, $Subscription, $RealmsWorldOptions, $RealmsNews, $ServerActivityList, $RealmsServerAddress, $Ops, $RealmsServerList, $BackupList, $WorldTemplatePaginatedList, $RegionPingResult, $PingResult, $WorldDownload, $RealmsServer$WorldType_, $RealmsNotification } from "@package/com/mojang/realmsclient/dto";
import { $CountingOutputStream } from "@package/org/apache/commons/io/output";
import { $Consumer_ } from "@package/java/util/function";
import { $Proxy, $HttpURLConnection } from "@package/java/net";
import { $ActionListener } from "@package/java/awt/event";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/com/mojang/realmsclient/client" {
    export class $RealmsError$AuthenticationError extends $Record implements $RealmsError {
        errorCode(): number;
        message(): string;
        logMessage(): string;
        errorMessage(): $Component;
        static ERROR_CODE: number;
        constructor(arg0: string);
    }
    /**
     * Values that may be interpreted as {@link $RealmsError$AuthenticationError}.
     */
    export type $RealmsError$AuthenticationError_ = { message?: string,  } | [message?: string, ];
    export class $FileDownload {
        isFinished(): boolean;
        isExtracting(): boolean;
        /**
         * Modifies a folder name to make sure it is valid to store on disk.
         * @return the modified folder name
         */
        static findAvailableFolderName(folderName: string): string;
        contentLength(uri: string): number;
        cancel(): void;
        isError(): boolean;
        download(download: $WorldDownload, worldName: string, status: $RealmsDownloadLatestWorldScreen$DownloadStatus, source: $LevelStorageSource): void;
        constructor();
        get finished(): boolean;
        get extracting(): boolean;
        get error(): boolean;
    }
    export class $RealmsError$ErrorWithJsonPayload extends $Record implements $RealmsError {
        errorCode(): number;
        httpCode(): number;
        code(): number;
        message(): string;
        reason(): string;
        logMessage(): string;
        errorMessage(): $Component;
        constructor(arg0: number, arg1: number, arg2: string | null, arg3: string | null);
    }
    /**
     * Values that may be interpreted as {@link $RealmsError$ErrorWithJsonPayload}.
     */
    export type $RealmsError$ErrorWithJsonPayload_ = { message?: string, httpCode?: number, code?: number, reason?: string,  } | [message?: string, httpCode?: number, code?: number, reason?: string, ];
    export class $RealmsClient {
        createSnapshotRealm(parentId: number): $RealmsServer;
        getOwnRealm(id: number): $RealmsServer;
        initializeRealm(worldId: number, arg1: string, name: string): void;
        hasParentalConsent(): boolean;
        clientCompatible(): $RealmsClient$CompatibleVersionResponse;
        uninvite(worldId: number, arg1: $UUID_): void;
        uninviteMyselfFrom(worldId: number): void;
        backupsFor(worldId: number): $BackupList;
        updateSlot(worldId: number, arg1: number, slotId: $RealmsWorldOptions): void;
        switchSlot(worldId: number, arg1: number): boolean;
        restoreWorld(worldId: number, arg1: string): void;
        fetchWorldTemplates(page: number, pageSize: number, worldType: $RealmsServer$WorldType_): $WorldTemplatePaginatedList;
        putIntoMinigameMode(worldId: number, arg1: string): boolean;
        deop(worldId: number, arg1: $UUID_): $Ops;
        resetWorldWithSeed(worldId: number, arg1: $WorldGenerationInfo_): boolean;
        resetWorldWithTemplate(worldId: number, arg1: string): boolean;
        subscriptionFor(worldId: number): $Subscription;
        pendingInvites(): $PendingInvitesList;
        acceptInvitation(inviteId: string): void;
        requestDownloadInfo(worldId: number, arg1: number): $WorldDownload;
        requestUploadInfo(worldId: number, arg1: string | null): $UploadInfo;
        rejectInvitation(inviteId: string): void;
        agreeToTos(): void;
        deleteRealm(worldId: number): void;
        notificationsDismiss(uuidList: $List_<$UUID_>): void;
        sendPingResults(pingResult: $PingResult): void;
        notificationsSeen(uuidList: $List_<$UUID_>): void;
        pendingInvitesCount(): number;
        trialAvailable(): boolean;
        getNews(): $RealmsNews;
        getLiveStats(): $RealmsServerPlayerLists;
        listRealms(): $RealmsServerList;
        listSnapshotEligibleRealms(): $List<$RealmsServer>;
        invite(worldId: number, arg1: string): $RealmsServer;
        update(worldId: number, arg1: string, name: string): void;
        join(serverId: number): $RealmsServerAddress;
        op(worldId: number, arg1: $UUID_): $Ops;
        close(worldId: number): boolean;
        open(worldId: number): boolean;
        static create(minecraft: $Minecraft): $RealmsClient;
        static create(): $RealmsClient;
        getNotifications(): $List<$RealmsNotification>;
        getActivity(worldId: number): $ServerActivityList;
        static ENVIRONMENT: $RealmsClient$Environment;
        constructor(sessionId: string, username: string, minecraft: $Minecraft);
        get news(): $RealmsNews;
        get liveStats(): $RealmsServerPlayerLists;
        get notifications(): $List<$RealmsNotification>;
    }
    export class $RealmsError$CustomError extends $Record implements $RealmsError {
        static noPayload(httpCode: number): $RealmsError$CustomError;
        static unknownCompatibilityResponse(payload: string): $RealmsError$CustomError;
        static connectivityError(payload: $RealmsHttpException): $RealmsError$CustomError;
        errorCode(): number;
        httpCode(): number;
        static retry(httpCode: number): $RealmsError$CustomError;
        payload(): $Component;
        logMessage(): string;
        errorMessage(): $Component;
        static SERVICE_BUSY: $RealmsError$CustomError;
        static RETRY_MESSAGE: $Component;
        constructor(arg0: number, arg1: $Component_ | null);
    }
    /**
     * Values that may be interpreted as {@link $RealmsError$CustomError}.
     */
    export type $RealmsError$CustomError_ = { payload?: $Component_, httpCode?: number,  } | [payload?: $Component_, httpCode?: number, ];
    export class $Request$Post extends $Request<$Request$Post> {
        doConnect(): $Request$Post;
        constructor(url: string, content: string, connectTimeout: number, readTimeout: number);
    }
    export class $UploadStatus {
        bytesWritten: number;
        totalBytes: number;
        constructor();
    }
    export class $Request$Put extends $Request<$Request$Put> {
        doConnect(): $Request$Put;
        constructor(url: string, content: string, connectTimeout: number, readTimeout: number);
    }
    export class $RealmsError {
        static parse(httpCode: number, payload: string): $RealmsError;
        static LOGGER: $Logger;
        static NO_MESSAGE: $Component;
    }
    export interface $RealmsError {
        errorCode(): number;
        logMessage(): string;
        errorMessage(): $Component;
    }
    export class $Ping$Region extends $Enum<$Ping$Region> {
    }
    /**
     * Values that may be interpreted as {@link $Ping$Region}.
     */
    export type $Ping$Region_ = "us_east_1" | "us_west_2" | "us_west_1" | "eu_west_1" | "ap_southeast_1" | "ap_southeast_2" | "ap_northeast_1" | "sa_east_1";
    export class $RealmsClient$Environment extends $Enum<$RealmsClient$Environment> {
        static values(): $RealmsClient$Environment[];
        static valueOf(arg0: string): $RealmsClient$Environment;
        static byName(name: string): ($RealmsClient$Environment) | undefined;
        baseUrl: string;
        protocol: string;
        static STAGE: $RealmsClient$Environment;
        static LOCAL: $RealmsClient$Environment;
        static PRODUCTION: $RealmsClient$Environment;
    }
    /**
     * Values that may be interpreted as {@link $RealmsClient$Environment}.
     */
    export type $RealmsClient$Environment_ = "production" | "stage" | "local";
    export class $FileDownload$ProgressListener implements $ActionListener {
    }
    export class $RealmsClient$CompatibleVersionResponse extends $Enum<$RealmsClient$CompatibleVersionResponse> {
        static values(): $RealmsClient$CompatibleVersionResponse[];
        static valueOf(arg0: string): $RealmsClient$CompatibleVersionResponse;
        static OTHER: $RealmsClient$CompatibleVersionResponse;
        static COMPATIBLE: $RealmsClient$CompatibleVersionResponse;
        static OUTDATED: $RealmsClient$CompatibleVersionResponse;
    }
    /**
     * Values that may be interpreted as {@link $RealmsClient$CompatibleVersionResponse}.
     */
    export type $RealmsClient$CompatibleVersionResponse_ = "compatible" | "outdated" | "other";
    export class $RealmsError$ErrorWithRawPayload extends $Record implements $RealmsError {
        errorCode(): number;
        httpCode(): number;
        payload(): string;
        logMessage(): string;
        errorMessage(): $Component;
        constructor(arg0: number, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $RealmsError$ErrorWithRawPayload}.
     */
    export type $RealmsError$ErrorWithRawPayload_ = { payload?: string, httpCode?: number,  } | [payload?: string, httpCode?: number, ];
    export class $Request$Delete extends $Request<$Request$Delete> {
        doConnect(): $Request$Delete;
        constructor(arg0: string, arg1: number, arg2: number);
    }
    export class $RealmsClientConfig {
        static setProxy(proxy: $Proxy): void;
        static getProxy(): $Proxy;
        constructor();
    }
    export class $Request$Get extends $Request<$Request$Get> {
        doConnect(): $Request$Get;
        constructor(arg0: string, arg1: number, arg2: number);
    }
    export class $FileDownload$DownloadCountingOutputStream extends $CountingOutputStream {
    }
    export class $FileUpload$CustomInputStreamEntity extends $InputStreamEntity {
    }
    export class $Ping {
        static pingAllRegions(): $List<$RegionPingResult>;
        static ping(...regions: $Ping$Region_[]): $List<$RegionPingResult>;
        constructor();
    }
    export class $Request<T extends $Request<T>> {
        addSnapshotHeader(isSnapshot: boolean): void;
        getRetryAfterHeader(): number;
        static getRetryAfterHeader(connection: $HttpURLConnection): number;
        responseCode(): number;
        text(): string;
        getHeader(name: string): string;
        static getHeader(connection: $HttpURLConnection, name: string): string;
        static post(url: string, content: string): $Request<never>;
        static post(url: string, content: string, connectTimeout: number, readTimeout: number): $Request<never>;
        cookie(key: string, value: string): void;
        static cookie(connection: $HttpURLConnection, key: string, value: string): void;
        static get(url: string, connectTimeout: number, readTimeout: number): $Request<never>;
        static get(url: string): $Request<never>;
        static put(url: string, content: string, connectTimeout: number, readTimeout: number): $Request<never>;
        static put(url: string, content: string): $Request<never>;
        static "delete"(url: string): $Request<never>;
        constructor(url: string, connectTimeout: number, readTimeout: number);
    }
    export class $FileUpload {
        isFinished(): boolean;
        cancel(): void;
        upload(resultConsumer: $Consumer_<$UploadResult>): void;
        constructor(file: $File_, realmId: number, arg2: number, slotId: $UploadInfo, uploadInfo: $User, user: string, clientVersiob: string, worldVersion: $UploadStatus);
        get finished(): boolean;
    }
    export class $FileDownload$ResourcePackProgressListener implements $ActionListener {
    }
}
