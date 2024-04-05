"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returner = void 0;
var formatters_1 = require("./formatters");
var returner = function (className, property, numberType, flag) {
    if (className.includes("facebook-old") ||
        className.includes("facebook") ||
        className.includes("twitter") ||
        className.includes("youtube") ||
        className.includes("linkedin") ||
        className.includes("instagram") ||
        className.includes("google") ||
        className.includes("pinterest") ||
        className.includes("vimeo") ||
        className.includes("tumblr") ||
        className.includes("snapchat") ||
        className.includes("whatsapp") ||
        className.includes("tiktok") ||
        className.includes("mastadon") ||
        className.includes("amazon") ||
        className.includes("microsoft") ||
        className.includes("medium") ||
        className.includes("yahoo") ||
        className.includes("twitch") ||
        className.includes("soundcloud") ||
        className.includes("spotify") ||
        className.includes("reddit") ||
        className.includes("quora") ||
        className.includes("discord") ||
        className.includes("telegram") ||
        className.includes("github") ||
        className.includes("gitlab") ||
        className.includes("hackernews"))
        return ".".concat((0, formatters_1.formatClassName)(className), "{").concat(property, ": var(--").concat((0, formatters_1.formatPropertyValue)(className), ")").concat(flag, "}");
    if (className.startsWith("sans-serif") ||
        className.startsWith("serif") ||
        className.startsWith("monospace") ||
        className.startsWith("courier") ||
        className.startsWith("helvetica") ||
        className.startsWith("avenir") ||
        className.startsWith("athelas") ||
        className.startsWith("georgia") ||
        className.startsWith("times") ||
        className.startsWith("bodoni") ||
        className.startsWith("calisto") ||
        className.startsWith("garamold") ||
        className.startsWith("baskerville") ||
        className.startsWith("roboto") ||
        className.startsWith("open-sans") ||
        className.startsWith("noto-sans-japanese") ||
        className.startsWith("montserrat") ||
        className.startsWith("lato") ||
        className.startsWith("poppins") ||
        className.startsWith("inter") ||
        className.startsWith("oswald") ||
        className.startsWith("raleway") ||
        className.startsWith("noto-sans") ||
        className.startsWith("ubuntu"))
        return ".".concat((0, formatters_1.formatClassName)(className), "{font-family:var(--").concat((0, formatters_1.formatPropertyValue)(className), ")").concat(flag, "}");
    if (className.includes("grid-cols-") ||
        className.includes("grid-rows-")) {
        if (numberType && Number((0, formatters_1.formatPropertyValue)(className)))
            return ".".concat((0, formatters_1.formatClassName)(className), "{").concat(property, ": repeat(").concat((0, formatters_1.formatPropertyValue)(className), ", minmax(0, 1fr)) ").concat(flag, "}");
        else
            return ".".concat((0, formatters_1.formatClassName)(className), "{").concat(property, ":").concat((0, formatters_1.formatPropertyValue)(className)).concat(flag, "}");
    }
    if (property === "box-shadow") {
        if (numberType && Number((0, formatters_1.formatPropertyValue)(className)))
            return ".".concat((0, formatters_1.formatClassName)(className), "{box-shadow:var(--shadow-").concat((0, formatters_1.formatPropertyValue)(className), ")").concat(flag, "}");
        else
            return ".".concat((0, formatters_1.formatClassName)(className), "{").concat(property, ":").concat((0, formatters_1.formatPropertyValue)(className)).concat(flag, "}");
    }
    if (property.includes(",")) {
        var property1 = property.substring(0, property.indexOf(","));
        var property2 = property.substring(property.indexOf(",") + 1);
        if (numberType && Number((0, formatters_1.formatPropertyValue)(className)))
            return ".".concat((0, formatters_1.formatClassName)(className), "{").concat(property1, ": calc(var(--base, 0.45rem) * ").concat((0, formatters_1.formatPropertyValue)(className), ")").concat(flag, "; ").concat(property2, ": calc(var(--base, 0.45rem) * ").concat((0, formatters_1.formatPropertyValue)(className), ")").concat(flag, ";}");
        else
            return ".".concat((0, formatters_1.formatClassName)(className), "{").concat(property1, ":").concat((0, formatters_1.formatPropertyValue)(className)).concat(flag, "; ").concat(property2, ":").concat((0, formatters_1.formatPropertyValue)(className)).concat(flag, "}");
    }
    if (numberType && Number((0, formatters_1.formatPropertyValue)(className)))
        return ".".concat((0, formatters_1.formatClassName)(className), "{").concat(property, ": calc(var(--base, 0.45rem) * ").concat((0, formatters_1.formatPropertyValue)(className), ")").concat(flag, "}");
    else
        return ".".concat((0, formatters_1.formatClassName)(className), "{").concat(property, ":").concat((0, formatters_1.formatPropertyValue)(className)).concat(flag, "}");
};
exports.returner = returner;
