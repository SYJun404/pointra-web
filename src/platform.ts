export type Platform = "windows" | "macos" | "other";

function detectPlatform(): Platform {
    if (typeof navigator === "undefined") return "other";

    const { userAgent, maxTouchPoints } = navigator;
    if (/Windows NT/i.test(userAgent)) return "windows";

    // iPadOS can report Macintosh when requesting a desktop site.
    if (/Macintosh/i.test(userAgent) && maxTouchPoints <= 1) return "macos";

    return "other";
}

export const platform = detectPlatform();
