// Type definitions for Google Google Ad Experience Report API v1 1.0
// Project: https://developers.google.com/ad-experience-report/
// Definitions by: Bolisov Alexey <https://github.com/Bolisov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// IMPORTANT
// This file was generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
// Generated from: https://adexperiencereport.googleapis.com/$discovery/rest?version=v1

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Google Ad Experience Report API v1 */
    function load(name: "adexperiencereport", version: "v1"): PromiseLike<void>;
    function load(name: "adexperiencereport", version: "v1", callback: () => any): void;

    const sites: adexperiencereport.SitesResource;

    const violatingSites: adexperiencereport.ViolatingSitesResource;

    namespace adexperiencereport {
        interface PlatformSummary {
            /** The status of the site reviewed for the Better Ads Standards. */
            betterAdsStatus?: string;
            /** The date on which ad filtering begins. */
            enforcementTime?: string;
            /** The ad filtering status of the site. */
            filterStatus?: string;
            /** The last time that the site changed status. */
            lastChangeTime?: string;
            /** The assigned regions for the site and platform. */
            region?: string[];
            /** A link that leads to a full ad experience report. */
            reportUrl?: string;
            /** Whether the site is currently under review. */
            underReview?: boolean;
        }
        interface SiteSummaryResponse {
            /** Summary for the desktop review of the site. */
            desktopSummary?: PlatformSummary;
            /** Summary for the mobile review of the site. */
            mobileSummary?: PlatformSummary;
            /** The name of the site reviewed. */
            reviewedSite?: string;
        }
        interface ViolatingSitesResponse {
            /** A list of summaries of violating sites. */
            violatingSites?: SiteSummaryResponse[];
        }
        interface SitesResource {
            /** Gets a summary of the ad experience rating of a site. */
            get(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * The required site name. It should be the site property whose ad experiences
                 * may have been reviewed, and it should be URL-encoded. For example,
                 * sites/https%3A%2F%2Fwww.google.com. The server will return an error of
                 * BAD_REQUEST if this field is not filled in. Note that if the site property
                 * is not yet verified in Search Console, the reportUrl field returned by the
                 * API will lead to the verification page, prompting the user to go through
                 * that process before they can gain access to the Ad Experience Report.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<SiteSummaryResponse>;
        }
        interface ViolatingSitesResource {
            /** Lists sites with Ad Experience Report statuses of "Failing" or "Warning". */
            list(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<ViolatingSitesResponse>;
        }
    }
}
