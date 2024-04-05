(function () {
    'use strict';

    var build = {};

    var getBrowserClasses$1 = {};

    Object.defineProperty(getBrowserClasses$1, "__esModule", { value: true });
    getBrowserClasses$1.getBrowserClasses = void 0;
    var getBrowserClasses = function () {
        var elements = document.getElementsByTagName("*");
        var classNames = new Set();
        for (var i = 0; i < elements.length; i++) {
            var classes = elements[i].className.split(" ");
            for (var j = 0; j < classes.length; j++) {
                classNames.add(classes[j]);
            }
        }
        var uniqueClassNames = Array.from(classNames);
        return uniqueClassNames;
    };
    getBrowserClasses$1.getBrowserClasses = getBrowserClasses;

    var handleClasses$1 = {};

    var checkClassTypeHandler$1 = {};

    var data = {};

    Object.defineProperty(data, "__esModule", { value: true });
    data.brandColors = data.fonts = data.colors = void 0;
    data.colors = [
        { name: "aliceblue", hex: "f0f8ff" },
        { name: "aqua", hex: "00ffff" },
        { name: "aquamarine", hex: "7fffd4" },
        { name: "azure", hex: "f0ffff" },
        { name: "beige", hex: "f5f5dc" },
        { name: "bisque", hex: "ffe4c4" },
        { name: "black", hex: "000000" },
        { name: "blanchedalmond", hex: "ffebcd" },
        { name: "blue", hex: "0000ff" },
        { name: "blueviolet", hex: "8a2be2" },
        { name: "brown", hex: "a52a2a" },
        { name: "cadetblue", hex: "5f9ea0" },
        { name: "chartreuse", hex: "7fff00" },
        { name: "chocolate", hex: "d2691e" },
        { name: "coral", hex: "ff7f50" },
        { name: "cornflowerblue", hex: "6495ed" },
        { name: "cornsilk", hex: "fff8dc" },
        { name: "crimson", hex: "dc143c" },
        { name: "cyan", hex: "00ffff" },
        { name: "darkblue", hex: "00008b" },
        { name: "darkcyan", hex: "008b8b" },
        { name: "darkgoldenrod", hex: "b8860b" },
        { name: "darkgrey", hex: "a9a9a9" },
        { name: "darkkhaki", hex: "bdb76b" },
        { name: "darkmagenta", hex: "8b008b" },
        { name: "darkolivegreen", hex: "556b2f" },
        { name: "darkorange", hex: "ff8c00" },
        { name: "darkorchid", hex: "9932cc" },
        { name: "darksalmon", hex: "e9967a" },
        { name: "darkseagreen", hex: "8fbc8f" },
        { name: "darkslateblue", hex: "483d8b" },
        { name: "darkslategrey", hex: "2f4f4f" },
        { name: "darkturquoise", hex: "00ced1" },
        { name: "darkviolet", hex: "9400d3" },
        { name: "deeppink", hex: "ff1493" },
        { name: "dimgrey", hex: "696969" },
        { name: "dodgerblue", hex: "1e90ff" },
        { name: "firebrick", hex: "b22222" },
        { name: "floralwhite", hex: "fffaf0" },
        { name: "forestgreen", hex: "228b22" },
        { name: "fuchsia", hex: "ff00ff" },
        { name: "gainsboro", hex: "dcdcdc" },
        { name: "ghostwhite", hex: "f8f8ff" },
        { name: "gold", hex: "ffd700" },
        { name: "goldenrod", hex: "daa520" },
        { name: "grey", hex: "808080" },
        { name: "green", hex: "008000" },
        { name: "greenyellow", hex: "adff2f" },
        { name: "grey", hex: "808080" },
        { name: "honeydew", hex: "f0fff0" },
        { name: "hotpink", hex: "ff69b4" },
        { name: "indianred", hex: "cd5c5c" },
        { name: "indigo", hex: "4b0082" },
        { name: "ivory", hex: "fffff0" },
        { name: "khaki", hex: "f0e68c" },
        { name: "lavender", hex: "e6e6fa" },
        { name: "lavenderblush", hex: "fff0f5" },
        { name: "lawngreen", hex: "7cfc00" },
        { name: "lemonchiffon", hex: "fffacd" },
        { name: "lightblue", hex: "add8e6" },
        { name: "lightcoral", hex: "f08080" },
        { name: "lightcyan", hex: "e0ffff" },
        { name: "lightgoldenrodyellow", hex: "fafad2" },
        { name: "lightgrey", hex: "d3d3d3" },
        { name: "lightgreen", hex: "90ee90" },
        { name: "lightpink", hex: "ffb6c1" },
        { name: "lightsalmon", hex: "ffa07a" },
        { name: "lightseagreen", hex: "20b2aa" },
        { name: "lightskblue", hex: "87cefa" },
        { name: "lightslategrey", hex: "778899" },
        { name: "lightsteelblue", hex: "b0c4de" },
        { name: "lightyellow", hex: "ffffe0" },
        { name: "lime", hex: "00ff00" },
        { name: "limegreen", hex: "32cd32" },
        { name: "linen", hex: "faf0e6" },
        { name: "magenta", hex: "ff00ff" },
        { name: "maroon", hex: "800000" },
        { name: "mediumaquamarine", hex: "66cdaa" },
        { name: "mediumblue", hex: "0000cd" },
        { name: "mediumorchid", hex: "ba55d3" },
        { name: "mediumpurple", hex: "9370db" },
        { name: "mediumseagreen", hex: "3cb371" },
        { name: "mediumslateblue", hex: "7b68ee" },
        { name: "mediumspringgreen", hex: "00fa9a" },
        { name: "mediumturquoise", hex: "48d1cc" },
        { name: "mediumvioletred", hex: "c71585" },
        { name: "midnightblue", hex: "191970" },
        { name: "mintcream", hex: "f5fffa" },
        { name: "mistyrose", hex: "ffe4e1" },
        { name: "moccasin", hex: "ffe4b5" },
        { name: "navajowhite", hex: "ffdead" },
        { name: "navy", hex: "000080" },
        { name: "oldlace", hex: "fdf5e6" },
        { name: "olive", hex: "808000" },
        { name: "olivedrab", hex: "6b8e23" },
        { name: "orange", hex: "ffa500" },
        { name: "orangered", hex: "ff4500" },
        { name: "orchid", hex: "da70d6" },
        { name: "palegoldenrod", hex: "eee8aa" },
        { name: "palegreen", hex: "98fb98" },
        { name: "paleturqoiuse", hex: "afeeee" },
        { name: "palevioletred", hex: "db7093" },
        { name: "papayawhip", hex: "ffefd5" },
        { name: "peachpuff", hex: "ffdab9" },
        { name: "peru", hex: "cd853f" },
        { name: "pink", hex: "ffc0cb" },
        { name: "plum", hex: "dda0dd" },
        { name: "powderblur", hex: "b0e0e6" },
        { name: "purple", hex: "800080" },
        { name: "red", hex: "ff0000" },
        { name: "rosybrown", hex: "bc8f8f" },
        { name: "royalblue", hex: "4169e1" },
        { name: "saddlebrown", hex: "8b4513" },
        { name: "salmon", hex: "fa8072" },
        { name: "sandybrown", hex: "f4a460" },
        { name: "seagreen", hex: "2e8b57" },
        { name: "seashell", hex: "fff5ee" },
        { name: "sienna", hex: "a0522d" },
        { name: "silver", hex: "c0c0c0" },
        { name: "skyblue", hex: "87ceeb" },
        { name: "slateblue", hex: "6a5acd" },
        { name: "slategrey", hex: "708090" },
        { name: "snow", hex: "fffafa" },
        { name: "springgreen", hex: "00ff7f" },
        { name: "steelblue", hex: "4682b4" },
        { name: "tan", hex: "d2b48c" },
        { name: "teal", hex: "008080" },
        { name: "thistle", hex: "d8bfd8" },
        { name: "tomato", hex: "ff6347" },
        { name: "turquoise", hex: "40e0d0" },
        { name: "violet", hex: "ee82ee" },
        { name: "wheat", hex: "f5deb3" },
        { name: "white", hex: "ffffff" },
        { name: "whitesmoke", hex: "f5f5f5" },
        { name: "yellow", hex: "ffff00" },
        { name: "yellowgreen", hex: "9acd32" },
    ];
    data.fonts = [
        "monospace",
    ];
    data.brandColors = [
        "facebook-old",
        "facebook",
        "twitter",
        "youtube",
        "linkedin",
        "instagram",
        "google",
        "pinterest",
        "vimeo",
        "tumblr",
        "snapchat",
        "whatsapp",
        "tiktok",
        "mastadon",
        "amazon",
        "microsoft",
        "medium",
        "yahoo",
        "twitch",
        "soundcloud",
        "spotify",
        "reddit",
        "quora",
        "discord",
        "telegram",
        "github",
        "gitlab",
        "hackernews"
    ];

    var formatters = {};

    var generateComplement$1 = {};

    var convertRgbToHex$1 = {};

    Object.defineProperty(convertRgbToHex$1, "__esModule", { value: true });
    convertRgbToHex$1.convertRgbToHex = void 0;
    var convertRgbToHex = function (r, g, b) {
        var _r = r;
        var _g = g;
        var _b = b;
        _r = Math.min(255, Math.max(0, r));
        _g = Math.min(255, Math.max(0, g));
        _b = Math.min(255, Math.max(0, b));
        var hexR = _r.toString(16).padStart(2, "0");
        var hexG = _g.toString(16).padStart(2, "0");
        var hexB = _b.toString(16).padStart(2, "0");
        return "#".concat(hexR).concat(hexG).concat(hexB);
    };
    convertRgbToHex$1.convertRgbToHex = convertRgbToHex;

    var convertHslToHex$1 = {};

    Object.defineProperty(convertHslToHex$1, "__esModule", { value: true });
    convertHslToHex$1.convertHslToHex = void 0;
    var convertRgbToHex_1$3 = convertRgbToHex$1;
    var convertHslToHex = function (h, s, l) {
        h /= 360;
        s /= 100;
        l /= 100;
        var r, g, b;
        if (s === 0) {
            r = g = b = l; // achromatic
        }
        else {
            var hue2rgb = function (p, q, t) {
                if (t < 0)
                    t += 1;
                if (t > 1)
                    t -= 1;
                if (t < 1 / 6)
                    return p + (q - p) * 6 * t;
                if (t < 1 / 2)
                    return q;
                if (t < 2 / 3)
                    return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        /* @ts-ignore */
        return convertRgbToHex_1$3.convertRgbToHex.apply(void 0, [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]);
    };
    convertHslToHex$1.convertHslToHex = convertHslToHex;

    Object.defineProperty(generateComplement$1, "__esModule", { value: true });
    generateComplement$1.generateComplement = void 0;
    var convertRgbToHex_1$2 = convertRgbToHex$1;
    var convertHslToHex_1$2 = convertHslToHex$1;
    function handleComplement(color) {
        // Remove the "#" character
        color = color.slice(1);
        // Parse the hexadecimal color into RGB channels
        var r = parseInt(color.slice(0, 2), 16);
        var g = parseInt(color.slice(2, 4), 16);
        var b = parseInt(color.slice(4, 6), 16);
        // Calculate the complement color by subtracting each channel from 255
        var complementR = 255 - r;
        var complementG = 255 - g;
        var complementB = 255 - b;
        // Convert the complement color back to a valid color representation
        var complementColor = "#".concat(complementR.toString(16).padStart(2, '0')).concat(complementG.toString(16).padStart(2, '0')).concat(complementB.toString(16).padStart(2, '0'));
        return complementColor;
    }
    var generateComplement = function (color) {
        var x = color
            .replace("complement(", "")
            .replace("compl(", "")
            .slice(0, -1);
        if (x.startsWith("rgb")) {
            x = x
                .replace("rgb(", "")
                .replace(")", "");
            x = x.split(",");
            /* @ts-ignore */
            return handleComplement(convertRgbToHex_1$2.convertRgbToHex.apply(void 0, x));
        }
        if (x.startsWith("hsl")) {
            x = x
                .replace("hsl(", "")
                .replace(")", "");
            x = x.split(",");
            /* @ts-ignore */
            return handleComplement(convertHslToHex_1$2.convertHslToHex.apply(void 0, x));
        }
        if (x.startsWith("#"))
            return handleComplement(x);
    };
    generateComplement$1.generateComplement = generateComplement;

    var lighten$1 = {};

    var convertRgbToHsl$1 = {};

    // Function to convert RGB to HSL
    Object.defineProperty(convertRgbToHsl$1, "__esModule", { value: true });
    convertRgbToHsl$1.convertRgbToHsl = void 0;
    var convertRgbToHsl = function (r, g, b) {
        (r /= 255), (g /= 255), (b /= 255);
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
        if (max === min) {
            h = s = 0; // achromatic
        }
        else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return [h * 360, s * 100, l * 100];
    };
    convertRgbToHsl$1.convertRgbToHsl = convertRgbToHsl;

    var convertHslToRgb$1 = {};

    Object.defineProperty(convertHslToRgb$1, "__esModule", { value: true });
    convertHslToRgb$1.convertHslToRgb = void 0;
    var convertHslToRgb = function (h, s, l) {
        h /= 360;
        s /= 100;
        l /= 100;
        var r, g, b;
        if (s === 0) {
            r = g = b = l; // achromatic
        }
        else {
            var hue2rgb = function (p, q, t) {
                if (t < 0)
                    t += 1;
                if (t > 1)
                    t -= 1;
                if (t < 1 / 6)
                    return p + (q - p) * 6 * t;
                if (t < 1 / 2)
                    return q;
                if (t < 2 / 3)
                    return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        return [r * 255, g * 255, b * 255];
    };
    convertHslToRgb$1.convertHslToRgb = convertHslToRgb;

    var convertColorToHex$1 = {};

    Object.defineProperty(convertColorToHex$1, "__esModule", { value: true });
    convertColorToHex$1.convertColorToHex = void 0;
    var data_1$1 = data;
    var convertColorToHex = function (color) {
        if (color === void 0) { color = ""; }
        for (var index = 0; index < data_1$1.colors.length; index++) {
            if (data_1$1.colors[index].name.includes(color)) {
                return data_1$1.colors[index].hex;
            }
        }
        console.error("color was not found ".concat(color));
    };
    convertColorToHex$1.convertColorToHex = convertColorToHex;

    Object.defineProperty(lighten$1, "__esModule", { value: true });
    lighten$1.lighten = void 0;
    var convertRgbToHsl_1$1 = convertRgbToHsl$1;
    var convertHslToRgb_1$1 = convertHslToRgb$1;
    var convertHslToHex_1$1 = convertHslToHex$1;
    var convertRgbToHex_1$1 = convertRgbToHex$1;
    var convertColorToHex_1$1 = convertColorToHex$1;
    var componentToHex$1 = function (c) {
        var hex = Math.round(c).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    var lighten = function (color, percent) {
        if (color === void 0) { color = ""; }
        if (percent === void 0) { percent = "23)"; }
        if (color.includes("hsl") || color.includes("rgb")) {
            color = color
                .replace("lighten(", "")
                .slice(0, -1)
                + ")";
        }
        else {
            color = color
                .replace("lighten(", "")
                .replace(")", "");
        }
        percent = String(percent).slice(0, -1);
        if (color.includes("hsl")) {
            color = color
                .replace("hsl(", "")
                .replace(")", "");
            /* @ts-ignore */
            color = convertHslToHex_1$1.convertHslToHex.apply(void 0, color.split(","));
        }
        if (color.includes("rgb")) {
            color = color
                .replace("rgb(", "")
                .replace(")", "");
            /* @ts-ignore */
            color = convertRgbToHex_1$1.convertRgbToHex.apply(void 0, color.split(","));
        }
        if (!color.includes("hsl")) {
            if (!color.includes("rgb")) {
                if (!color.includes("#")) {
                    color = (0, convertColorToHex_1$1.convertColorToHex)(color);
                }
            }
        }
        if (color) {
            var hex = color.replace(/^#/, "");
            var r = parseInt(hex.substr(0, 2), 16);
            var g = parseInt(hex.substr(2, 2), 16);
            var b = parseInt(hex.substr(4, 2), 16);
            // Convert RGB to HSL
            var hsl = (0, convertRgbToHsl_1$1.convertRgbToHsl)(r, g, b);
            // Adjust the lightness
            hsl[2] = Math.min(100, hsl[2] + Number(percent));
            // Convert HSL back to RGB
            var rgb = (0, convertHslToRgb_1$1.convertHslToRgb)(hsl[0], hsl[1], hsl[2]);
            // Format the RGB values into a hex color string
            return "#".concat(componentToHex$1(rgb[0])).concat(componentToHex$1(rgb[1])).concat(componentToHex$1(rgb[2]));
        }
    };
    lighten$1.lighten = lighten;

    var darken$1 = {};

    Object.defineProperty(darken$1, "__esModule", { value: true });
    darken$1.darken = void 0;
    var convertRgbToHsl_1 = convertRgbToHsl$1;
    var convertHslToRgb_1 = convertHslToRgb$1;
    var convertHslToHex_1 = convertHslToHex$1;
    var convertRgbToHex_1 = convertRgbToHex$1;
    var convertColorToHex_1 = convertColorToHex$1;
    var componentToHex = function (c) {
        var hex = Math.round(c).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    var darken = function (color, percent) {
        // Parse the color string to get RGB values
        if (color === void 0) { color = ""; }
        if (percent === void 0) { percent = "23)"; }
        if (color.includes("hsl") || color.includes("rgb")) {
            color = color
                .replace("darken(", "")
                .slice(0, -1)
                + ")";
        }
        else {
            color = color
                .replace("darken(", "")
                .replace(")", "");
        }
        percent = String(percent).slice(0, -1);
        if (color.includes("hsl")) {
            color = color
                .replace("hsl(", "")
                .replace(")", "");
            /* @ts-ignore */
            color = convertHslToHex_1.convertHslToHex.apply(void 0, color.split(","));
        }
        if (color.includes("rgb")) {
            color = color
                .replace("rgb(", "")
                .replace(")", "");
            /* @ts-ignore */
            color = convertRgbToHex_1.convertRgbToHex.apply(void 0, color.split(","));
        }
        if (!color.includes("hsl")) {
            if (!color.includes("rgb")) {
                if (!color.includes("#")) {
                    color = (0, convertColorToHex_1.convertColorToHex)(color);
                }
            }
        }
        if (color) {
            var hex = color.replace(/^#/, "");
            var r = parseInt(hex.substr(0, 2), 16);
            var g = parseInt(hex.substr(2, 2), 16);
            var b = parseInt(hex.substr(4, 2), 16);
            // Convert RGB to HSL
            var hsl = (0, convertRgbToHsl_1.convertRgbToHsl)(r, g, b);
            // Adjust the lightness
            hsl[2] = Math.max(0, hsl[2] - Number(percent));
            // Convert HSL back to RGB
            var rgb = (0, convertHslToRgb_1.convertHslToRgb)(hsl[0], hsl[1], hsl[2]);
            // Format the RGB values into a hex color string
            return "#".concat(componentToHex(rgb[0])).concat(componentToHex(rgb[1])).concat(componentToHex(rgb[2]));
        }
    };
    darken$1.darken = darken;

    Object.defineProperty(formatters, "__esModule", { value: true });
    formatters.formatPropertyValue = formatters.formatClassName = void 0;
    var generateComplement_1 = generateComplement$1;
    var lighten_1 = lighten$1;
    var darken_1 = darken$1;
    var formatClassName = function (className) {
        var x = className;
        x = x.replaceAll("#", "\\#");
        x = x.replaceAll("%", "\\%");
        x = x.replaceAll("!", "\\!");
        x = x.replaceAll(":hover", "\\:hover:hover");
        x = x.replaceAll(":hvr", "\\:hvr:hover");
        x = x.replaceAll(":focus", "\\:focus:focus");
        x = x.replaceAll(":fcs", "\\:fcs:focus");
        x = x.replaceAll(":odd", "\\:odd::nth-of-type(odd)");
        x = x.replaceAll(":even", "\\:even::nth-of-type(even)");
        x = x.replaceAll(":active", "\\:active:active");
        x = x.replaceAll(":disabled", "\\:disabled:disabled");
        x = x.replaceAll(":visited", "\\:visited:visited");
        x = x.replaceAll(":first-child", "\\:first-child:first-child");
        x = x.replaceAll(":last-child", "\\:last-child:last-child");
        x = x.replaceAll("[", "\\[");
        x = x.replaceAll("]", "\\]");
        x = x.replaceAll("(", "\\(");
        x = x.replaceAll(")", "\\)");
        x = x.replaceAll(",", "\\,");
        x = x.replaceAll(".", "\\.");
        x = x.replaceAll("/", "\\/");
        return x;
    };
    formatters.formatClassName = formatClassName;
    var formatPropertyValue = function (value) {
        var x = value;
        x = x.replace(":hvr", "");
        x = x.replace(":fcs", "");
        x = x.replace(":odd", "");
        x = x.replace(":even", "");
        x = x.replace(":active", "");
        x = x.replace(":visited", "");
        x = x.replace(":first-child", "");
        x = x.replace(":last-child", "");
        x = x.replace("!", "");
        x = x.replace("flex-col", "column");
        // create variables
        if (x.startsWith("z-"))
            x = x.replace("z-", "");
        if (x.startsWith("writing-mode-"))
            x = x.replace("writing-mode-", "");
        if (x.startsWith("word-wrap-"))
            x = x.replace("word-wrap-", "");
        if (x.startsWith("word-spacing-"))
            x = x.replace("word-spacing-", "");
        if (x.startsWith("word-break-"))
            x = x.replace("word-break-", "");
        if (x.startsWith("will-change-"))
            x = x.replace("will-change-", "");
        if (x.startsWith("widows-"))
            x = x.replace("widows-", "");
        if (x.startsWith("white-sp-"))
            x = x.replace("white-sp-", "");
        if (x.startsWith("w-"))
            x = x.replace("w-", "");
        if (x.startsWith("visibility-"))
            x = x.replace("visibility-", "");
        if (x.startsWith("v-align-"))
            x = x.replace("v-align-", "");
        if (x.startsWith("user-select-"))
            x = x.replace("user-select-", "");
        if (x.startsWith("unset-"))
            x = x.replace("unset-", "");
        if (x.startsWith("text-underline-position-"))
            x = x.replace("text-underline-position-", "");
        if (x.startsWith("text-underline-offset-"))
            x = x.replace("text-underline-offset-", "");
        if (x.startsWith("text-transform-"))
            x = x.replace("text-transform-", "");
        if (x.startsWith("text-size-adjust-"))
            x = x.replace("text-size-adjust-", "");
        if (x.startsWith("text-sh-"))
            x = x.replace("text-sh-", "");
        if (x.startsWith("text-rendering-"))
            x = x.replace("text-rendering-", "");
        if (x.startsWith("text-overflow-"))
            x = x.replace("text-overflow-", "");
        if (x.startsWith("text-orientation-"))
            x = x.replace("text-orientation-", "");
        if (x.startsWith("text-justify-"))
            x = x.replace("text-justify-", "");
        if (x.startsWith("text-indent-"))
            x = x.replace("text-indent-", "");
        if (x.startsWith("text-emphasis-style-"))
            x = x.replace("text-emphasis-style-", "");
        if (x.startsWith("text-emphasis-position-"))
            x = x.replace("text-emphasis-position-", "");
        if (x.startsWith("text-emphasis-color-"))
            x = x.replace("text-emphasis-color-", "");
        if (x.startsWith("text-emphasis-"))
            x = x.replace("text-emphasis-", "");
        if (x.startsWith("text-decoration-thickness-"))
            x = x.replace("text-decoration-thickness-", "");
        if (x.startsWith("text-decoration-style-"))
            x = x.replace("text-decoration-style-", "");
        if (x.startsWith("text-decoration-skip-ink-"))
            x = x.replace("text-decoration-skip-ink-", "");
        if (x.startsWith("text-decoration-skip-"))
            x = x.replace("text-decoration-skip-", "");
        if (x.startsWith("text-decoration-line-"))
            x = x.replace("text-decoration-line-", "");
        if (x.startsWith("text-decoration-color-"))
            x = x.replace("text-decoration-color-", "");
        if (x.startsWith("text-decoration-"))
            x = x.replace("text-decoration-", "");
        if (x.startsWith("text-combine-upright-"))
            x = x.replace("text-combine-upright-", "");
        if (x.startsWith("text-align-last-"))
            x = x.replace("text-align-last-", "");
        if (x.startsWith("text-align-"))
            x = x.replace("text-align-", "");
        if (x.startsWith("text-"))
            x = x.replace("text-", "");
        if (x.startsWith("transz-"))
            x = x.replace("transz-", "");
        if (x.startsWith("transy-"))
            x = x.replace("transy-", "");
        if (x.startsWith("transx-"))
            x = x.replace("transx-", "");
        if (x.startsWith("translate-"))
            x = x.replace("translate-", "");
        if (x.startsWith("transition-timing-function-"))
            x = x.replace("transition-timing-function-", "");
        if (x.startsWith("transition-property-"))
            x = x.replace("transition-property-", "");
        if (x.startsWith("transition-duration-"))
            x = x.replace("transition-duration-", "");
        if (x.startsWith("transition-delay-"))
            x = x.replace("transition-delay-", "");
        if (x.startsWith("transition-"))
            x = x.replace("transition-", "");
        if (x.startsWith("transform-style-"))
            x = x.replace("transform-style-", "");
        if (x.startsWith("transform-origin-"))
            x = x.replace("transform-origin-", "");
        if (x.startsWith("transform-box-"))
            x = x.replace("transform-box-", "");
        if (x.startsWith("transform-"))
            x = x.replace("transform-", "");
        if (x.startsWith("trans3d-"))
            x = x.replace("trans3d-", "");
        if (x.startsWith("touch-action-"))
            x = x.replace("touch-action-", "");
        if (x.startsWith("table-layout-"))
            x = x.replace("table-layout-", "");
        if (x.startsWith("tab-size-"))
            x = x.replace("tab-size-", "");
        if (x.startsWith("t-"))
            x = x.replace("t-", "");
        if (x.startsWith("skewy-"))
            x = x.replace("skewy-", "");
        if (x.startsWith("skewx-"))
            x = x.replace("skewx-", "");
        if (x.startsWith("skew-"))
            x = x.replace("skew-", "");
        if (x.startsWith("shape-outside-"))
            x = x.replace("shape-outside-", "");
        if (x.startsWith("shape-margin-"))
            x = x.replace("shape-margin-", "");
        if (x.startsWith("shape-image-threshold-"))
            x = x.replace("shape-image-threshold-", "");
        if (x.startsWith("sh-"))
            x = x.replace("sh-", "");
        if (x.startsWith("sepia-"))
            x = x.replace("sepia-", "");
        if (x.startsWith("self-"))
            x = x.replace("self-", "");
        if (x.startsWith("scrollbar-w-"))
            x = x.replace("scrollbar-w-", "");
        if (x.startsWith("scrollbar-gutter-"))
            x = x.replace("scrollbar-gutter-", "");
        if (x.startsWith("scrollbar-color-"))
            x = x.replace("scrollbar-color-", "");
        if (x.startsWith("scroll-snap-type-"))
            x = x.replace("scroll-snap-type-", "");
        if (x.startsWith("scroll-snap-stop-"))
            x = x.replace("scroll-snap-stop-", "");
        if (x.startsWith("scroll-snap-align-"))
            x = x.replace("scroll-snap-align-", "");
        if (x.startsWith("scroll-p-t-"))
            x = x.replace("scroll-p-t-", "");
        if (x.startsWith("scroll-p-r-"))
            x = x.replace("scroll-p-r-", "");
        if (x.startsWith("scroll-p-l-"))
            x = x.replace("scroll-p-l-", "");
        if (x.startsWith("scroll-p-inline-start-"))
            x = x.replace("scroll-p-inline-start-", "");
        if (x.startsWith("scroll-p-inline-end-"))
            x = x.replace("scroll-p-inline-end-", "");
        if (x.startsWith("scroll-p-inline-"))
            x = x.replace("scroll-p-inline-", "");
        if (x.startsWith("scroll-p-block-start-"))
            x = x.replace("scroll-p-block-start-", "");
        if (x.startsWith("scroll-p-block-end-"))
            x = x.replace("scroll-p-block-end-", "");
        if (x.startsWith("scroll-p-block-"))
            x = x.replace("scroll-p-block-", "");
        if (x.startsWith("scroll-p-b-"))
            x = x.replace("scroll-p-b-", "");
        if (x.startsWith("scroll-p-"))
            x = x.replace("scroll-p-", "");
        if (x.startsWith("scroll-m-t-"))
            x = x.replace("scroll-m-t-", "");
        if (x.startsWith("scroll-m-r-"))
            x = x.replace("scroll-m-r-", "");
        if (x.startsWith("scroll-m-l-"))
            x = x.replace("scroll-m-l-", "");
        if (x.startsWith("scroll-m-inline-start-"))
            x = x.replace("scroll-m-inline-start-", "");
        if (x.startsWith("scroll-m-inline-end-"))
            x = x.replace("scroll-m-inline-end-", "");
        if (x.startsWith("scroll-m-inline-"))
            x = x.replace("scroll-m-inline-", "");
        if (x.startsWith("scroll-m-bottom-"))
            x = x.replace("scroll-m-bottom-", "");
        if (x.startsWith("scroll-m-block-start-"))
            x = x.replace("scroll-m-block-start-", "");
        if (x.startsWith("scroll-m-block-end-"))
            x = x.replace("scroll-m-block-end-", "");
        if (x.startsWith("scroll-m-block-"))
            x = x.replace("scroll-m-block-", "");
        if (x.startsWith("scroll-m-"))
            x = x.replace("scroll-m-", "");
        if (x.startsWith("scroll-behavior-"))
            x = x.replace("scroll-behavior-", "");
        if (x.startsWith("scalez-"))
            x = x.replace("scalez-", "");
        if (x.startsWith("scaley-"))
            x = x.replace("scaley-", "");
        if (x.startsWith("scalex-"))
            x = x.replace("scalex-", "");
        if (x.startsWith("scale3d-"))
            x = x.replace("scale3d-", "");
        if (x.startsWith("scale-"))
            x = x.replace("scale-", "");
        if (x.startsWith("scale-"))
            x = x.replace("scale-", "");
        if (x.startsWith("saturate-"))
            x = x.replace("saturate-", "");
        if (x.startsWith("ruby-position-"))
            x = x.replace("ruby-position-", "");
        if (x.startsWith("ruby-merge-"))
            x = x.replace("ruby-merge-", "");
        if (x.startsWith("ruby-align-"))
            x = x.replace("ruby-align-", "");
        if (x.startsWith("row-gap-"))
            x = x.replace("row-gap-", "");
        if (x.startsWith("rotz-"))
            x = x.replace("rotz-", "");
        if (x.startsWith("roty-"))
            x = x.replace("roty-", "");
        if (x.startsWith("rotx-"))
            x = x.replace("rotx-", "");
        if (x.startsWith("rotate-"))
            x = x.replace("rotate-", "");
        if (x.startsWith("rot3d-"))
            x = x.replace("rot3d-", "");
        if (x.startsWith("revert-"))
            x = x.replace("revert-", "");
        if (x.startsWith("resize-"))
            x = x.replace("resize-", "");
        if (x.startsWith("r-"))
            x = x.replace("r-", "");
        if (x.startsWith("quotes-"))
            x = x.replace("quotes-", "");
        if (x.startsWith("py-"))
            x = x.replace("py-", "");
        if (x.startsWith("px-"))
            x = x.replace("px-", "");
        if (x.startsWith("pt-"))
            x = x.replace("pt-", "");
        if (x.startsWith("print-color-adjust-"))
            x = x.replace("print-color-adjust-", "");
        if (x.startsWith("pr-"))
            x = x.replace("pr-", "");
        if (x.startsWith("position-"))
            x = x.replace("position-", "");
        if (x.startsWith("plc-self-"))
            x = x.replace("plc-self-", "");
        if (x.startsWith("plc-items-"))
            x = x.replace("plc-items-", "");
        if (x.startsWith("plc-content-"))
            x = x.replace("plc-content-", "");
        if (x.startsWith("pl-"))
            x = x.replace("pl-", "");
        if (x.startsWith("perspective-origin-"))
            x = x.replace("perspective-origin-", "");
        if (x.startsWith("perspective-"))
            x = x.replace("perspective-", "");
        if (x.startsWith("perspective-"))
            x = x.replace("perspective-", "");
        if (x.startsWith("pe-"))
            x = x.replace("pe-", "");
        if (x.startsWith("pb-"))
            x = x.replace("pb-", "");
        if (x.startsWith("paint-order-"))
            x = x.replace("paint-order-", "");
        if (x.startsWith("p-inline-start-"))
            x = x.replace("p-inline-start-", "");
        if (x.startsWith("p-inline-end-"))
            x = x.replace("p-inline-end-", "");
        if (x.startsWith("p-inline-"))
            x = x.replace("p-inline-", "");
        if (x.startsWith("p-block-start-"))
            x = x.replace("p-block-start-", "");
        if (x.startsWith("p-block-end-"))
            x = x.replace("p-block-end-", "");
        if (x.startsWith("p-block-"))
            x = x.replace("p-block-", "");
        if (x.startsWith("p-"))
            x = x.replace("p-", "");
        if (x.startsWith("ov-y-"))
            x = x.replace("ov-y-", "");
        if (x.startsWith("ov-x-"))
            x = x.replace("ov-x-", "");
        if (x.startsWith("ov-wrap-"))
            x = x.replace("ov-wrap-", "");
        if (x.startsWith("ov-inline-"))
            x = x.replace("ov-inline-", "");
        if (x.startsWith("ov-clip-margin-"))
            x = x.replace("ov-clip-margin-", "");
        if (x.startsWith("ov-block-"))
            x = x.replace("ov-block-", "");
        if (x.startsWith("ov-anchor-"))
            x = x.replace("ov-anchor-", "");
        if (x.startsWith("ov-"))
            x = x.replace("ov-", "");
        if (x.startsWith("ot-w-"))
            x = x.replace("ot-w-", "");
        if (x.startsWith("ot-style-"))
            x = x.replace("ot-style-", "");
        if (x.startsWith("ot-offset-"))
            x = x.replace("ot-offset-", "");
        if (x.startsWith("ot-color-"))
            x = x.replace("ot-color-", "");
        if (x.startsWith("ot-"))
            x = x.replace("ot-", "");
        if (x.startsWith("os-behavior-y-"))
            x = x.replace("os-behavior-y-", "");
        if (x.startsWith("os-behavior-x-"))
            x = x.replace("os-behavior-x-", "");
        if (x.startsWith("os-behavior-inline-"))
            x = x.replace("os-behavior-inline-", "");
        if (x.startsWith("os-behavior-block-"))
            x = x.replace("os-behavior-block-", "");
        if (x.startsWith("os-behavior-"))
            x = x.replace("os-behavior-", "");
        if (x.startsWith("orphans-"))
            x = x.replace("orphans-", "");
        if (x.startsWith("op-"))
            x = x.replace("op-", "");
        if (x.startsWith("offset-rotate-"))
            x = x.replace("offset-rotate-", "");
        if (x.startsWith("offset-position-"))
            x = x.replace("offset-position-", "");
        if (x.startsWith("offset-path-"))
            x = x.replace("offset-path-", "");
        if (x.startsWith("offset-distance-"))
            x = x.replace("offset-distance-", "");
        if (x.startsWith("offset-anchor-"))
            x = x.replace("offset-anchor-", "");
        if (x.startsWith("offset-"))
            x = x.replace("offset-", "");
        if (x.startsWith("od-"))
            x = x.replace("od-", "");
        if (x.startsWith("object-position-"))
            x = x.replace("object-position-", "");
        if (x.startsWith("object-fit-"))
            x = x.replace("object-fit-", "");
        if (x.startsWith("my-"))
            x = x.replace("my-", "");
        if (x.startsWith("mx-"))
            x = x.replace("mx-", "");
        if (x.startsWith("mt-"))
            x = x.replace("mt-", "");
        if (x.startsWith("mr-"))
            x = x.replace("mr-", "");
        if (x.startsWith("ml-"))
            x = x.replace("ml-", "");
        if (x.startsWith("mix-blend-mode-"))
            x = x.replace("mix-blend-mode-", "");
        if (x.startsWith("min-w-"))
            x = x.replace("min-w-", "");
        if (x.startsWith("min-inline-size-"))
            x = x.replace("min-inline-size-", "");
        if (x.startsWith("min-h-"))
            x = x.replace("min-h-", "");
        if (x.startsWith("min-block-size-"))
            x = x.replace("min-block-size-", "");
        if (x.startsWith("mb-"))
            x = x.replace("mb-", "");
        if (x.startsWith("max-w-"))
            x = x.replace("max-w-", "");
        if (x.startsWith("max-inline-size-"))
            x = x.replace("max-inline-size-", "");
        if (x.startsWith("max-h-"))
            x = x.replace("max-h-", "");
        if (x.startsWith("max-block-size-"))
            x = x.replace("max-block-size-", "");
        if (x.startsWith("matrix3d-"))
            x = x.replace("matrix3d-", "");
        if (x.startsWith("matrix-"))
            x = x.replace("matrix-", "");
        if (x.startsWith("math-style-"))
            x = x.replace("math-style-", "");
        if (x.startsWith("masonry-auto-flow-"))
            x = x.replace("masonry-auto-flow-", "");
        if (x.startsWith("mask-type-"))
            x = x.replace("mask-type-", "");
        if (x.startsWith("mask-size-"))
            x = x.replace("mask-size-", "");
        if (x.startsWith("mask-repeat-"))
            x = x.replace("mask-repeat-", "");
        if (x.startsWith("mask-position-"))
            x = x.replace("mask-position-", "");
        if (x.startsWith("mask-origin-"))
            x = x.replace("mask-origin-", "");
        if (x.startsWith("mask-mode-"))
            x = x.replace("mask-mode-", "");
        if (x.startsWith("mask-image-"))
            x = x.replace("mask-image-", "");
        if (x.startsWith("mask-composite-"))
            x = x.replace("mask-composite-", "");
        if (x.startsWith("mask-clip-"))
            x = x.replace("mask-clip-", "");
        if (x.startsWith("mask-bd-width-"))
            x = x.replace("mask-bd-width-", "");
        if (x.startsWith("mask-bd-source-"))
            x = x.replace("mask-bd-source-", "");
        if (x.startsWith("mask-bd-slice-"))
            x = x.replace("mask-bd-slice-", "");
        if (x.startsWith("mask-bd-repeat-"))
            x = x.replace("mask-bd-repeat-", "");
        if (x.startsWith("mask-bd-outset-"))
            x = x.replace("mask-bd-outset-", "");
        if (x.startsWith("mask-bd-mode-"))
            x = x.replace("mask-bd-mode-", "");
        if (x.startsWith("mask-bd-"))
            x = x.replace("mask-bd-", "");
        if (x.startsWith("mask-"))
            x = x.replace("mask-", "");
        if (x.startsWith("m-trim-"))
            x = x.replace("m-trim-", "");
        if (x.startsWith("m-inline-start-"))
            x = x.replace("m-inline-start-", "");
        if (x.startsWith("m-inline-end-"))
            x = x.replace("m-inline-end-", "");
        if (x.startsWith("m-inline-"))
            x = x.replace("m-inline-", "");
        if (x.startsWith("m-block-start-"))
            x = x.replace("m-block-start-", "");
        if (x.startsWith("m-block-end-"))
            x = x.replace("m-block-end-", "");
        if (x.startsWith("m-block-"))
            x = x.replace("m-block-", "");
        if (x.startsWith("m-"))
            x = x.replace("m-", "");
        if (x.startsWith("ls-type-"))
            x = x.replace("ls-type-", "");
        if (x.startsWith("ls-position-"))
            x = x.replace("ls-position-", "");
        if (x.startsWith("ls-image-"))
            x = x.replace("ls-image-", "");
        if (x.startsWith("ls-"))
            x = x.replace("ls-", "");
        if (x.startsWith("lh-step-"))
            x = x.replace("lh-step-", "");
        if (x.startsWith("lh-"))
            x = x.replace("lh-", "");
        if (x.startsWith("letter-sp-"))
            x = x.replace("letter-sp-", "");
        if (x.startsWith("lb-"))
            x = x.replace("lb-", "");
        if (x.startsWith("l-"))
            x = x.replace("l-", "");
        if (x.startsWith("jt-"))
            x = x.replace("jt-", "");
        if (x.startsWith("js-"))
            x = x.replace("js-", "");
        if (x.startsWith("ji-"))
            x = x.replace("ji-", "");
        if (x.startsWith("jc-"))
            x = x.replace("jc-", "");
        if (x.startsWith("items-"))
            x = x.replace("items-", "");
        if (x.startsWith("isolation-"))
            x = x.replace("isolation-", "");
        if (x.startsWith("inset-inline-start-"))
            x = x.replace("inset-inline-start-", "");
        if (x.startsWith("inset-inline-end-"))
            x = x.replace("inset-inline-end-", "");
        if (x.startsWith("inset-inline-"))
            x = x.replace("inset-inline-", "");
        if (x.startsWith("inset-block-start-"))
            x = x.replace("inset-block-start-", "");
        if (x.startsWith("inset-block-end-"))
            x = x.replace("inset-block-end-", "");
        if (x.startsWith("inset-block-"))
            x = x.replace("inset-block-", "");
        if (x.startsWith("inset-"))
            x = x.replace("inset-", "");
        if (x.startsWith("inline-size-"))
            x = x.replace("inline-size-", "");
        if (x.startsWith("initial-letter-align-"))
            x = x.replace("initial-letter-align-", "");
        if (x.startsWith("initial-letter-"))
            x = x.replace("initial-letter-", "");
        if (x.startsWith("initial-"))
            x = x.replace("initial-", "");
        if (x.startsWith("inherit-"))
            x = x.replace("inherit-", "");
        if (x.startsWith("img-resolution-"))
            x = x.replace("img-resolution-", "");
        if (x.startsWith("img-rendering-"))
            x = x.replace("img-rendering-", "");
        if (x.startsWith("img-orientation-"))
            x = x.replace("img-orientation-", "");
        if (x.startsWith("hyphens-"))
            x = x.replace("hyphens-", "");
        if (x.startsWith("hyphenate-character-"))
            x = x.replace("hyphenate-character-", "");
        if (x.startsWith("hanging-punctuation-"))
            x = x.replace("hanging-punctuation-", "");
        if (x.startsWith("h-"))
            x = x.replace("h-", "");
        if (x.startsWith("grid-template-rows-"))
            x = x.replace("grid-template-rows-", "");
        if (x.startsWith("grid-template-columns-"))
            x = x.replace("grid-template-columns-", "");
        if (x.startsWith("grid-template-areas-"))
            x = x.replace("grid-template-areas-", "");
        if (x.startsWith("grid-template-"))
            x = x.replace("grid-template-", "");
        if (x.startsWith("grid-row-start-"))
            x = x.replace("grid-row-start-", "");
        if (x.startsWith("grid-row-end-"))
            x = x.replace("grid-row-end-", "");
        if (x.startsWith("grid-row-"))
            x = x.replace("grid-row-", "");
        if (x.startsWith("grid-column-start-"))
            x = x.replace("grid-column-start-", "");
        if (x.startsWith("grid-column-end-"))
            x = x.replace("grid-column-end-", "");
        if (x.startsWith("grid-column-"))
            x = x.replace("grid-column-", "");
        if (x.startsWith("grid-auto-rows-"))
            x = x.replace("grid-auto-rows-", "");
        if (x.startsWith("grid-auto-flow-"))
            x = x.replace("grid-auto-flow-", "");
        if (x.startsWith("grid-auto-columns-"))
            x = x.replace("grid-auto-columns-", "");
        if (x.startsWith("grid-area-"))
            x = x.replace("grid-area-", "");
        if (x.startsWith("grid-"))
            x = x.replace("grid-", "");
        if (x.startsWith("grayscale-"))
            x = x.replace("grayscale-", "");
        if (x.startsWith("gap-x-"))
            x = x.replace("gap-x-", "");
        if (x.startsWith("gap-y-"))
            x = x.replace("gap-y-", "");
        if (x.startsWith("gap-"))
            x = x.replace("gap-", "");
        if (x.startsWith("forced-color-adjust-"))
            x = x.replace("forced-color-adjust-", "");
        if (x.startsWith("font-weight-"))
            x = x.replace("font-weight-", "");
        if (x.startsWith("font-weit-"))
            x = x.replace("font-weit-", "");
        if (x.startsWith("font-variation-settings-"))
            x = x.replace("font-variation-settings-", "");
        if (x.startsWith("font-variant-position-"))
            x = x.replace("font-variant-position-", "");
        if (x.startsWith("font-variant-numeric-"))
            x = x.replace("font-variant-numeric-", "");
        if (x.startsWith("font-variant-ligatures-"))
            x = x.replace("font-variant-ligatures-", "");
        if (x.startsWith("font-variant-east-asian-"))
            x = x.replace("font-variant-east-asian-", "");
        if (x.startsWith("font-variant-caps-"))
            x = x.replace("font-variant-caps-", "");
        if (x.startsWith("font-variant-alternates-"))
            x = x.replace("font-variant-alternates-", "");
        if (x.startsWith("font-variant-"))
            x = x.replace("font-variant-", "");
        if (x.startsWith("font-synthesis-"))
            x = x.replace("font-synthesis-", "");
        if (x.startsWith("font-style-"))
            x = x.replace("font-style-", "");
        if (x.startsWith("font-stretch-"))
            x = x.replace("font-stretch-", "");
        if (x.startsWith("font-size-adjust-"))
            x = x.replace("font-size-adjust-", "");
        if (x.startsWith("font-size-"))
            x = x.replace("font-size-", "");
        if (x.startsWith("font-optical-sizing-"))
            x = x.replace("font-optical-sizing-", "");
        if (x.startsWith("font-language-override-"))
            x = x.replace("font-language-override-", "");
        if (x.startsWith("font-kerning-"))
            x = x.replace("font-kerning-", "");
        if (x.startsWith("font-family-"))
            x = x.replace("font-family-", "");
        if (x.startsWith("font-"))
            x = x.replace("font-", "");
        if (x.startsWith("flex-wrap-"))
            x = x.replace("flex-wrap-", "");
        if (x.startsWith("flex-shrink-"))
            x = x.replace("flex-shrink-", "");
        if (x.startsWith("flex-grow-"))
            x = x.replace("flex-grow-", "");
        if (x.startsWith("flex-flow-"))
            x = x.replace("flex-flow-", "");
        if (x.startsWith("flex-direction-"))
            x = x.replace("flex-direction-", "");
        if (x.startsWith("flex-basis-"))
            x = x.replace("flex-basis-", "");
        if (x.startsWith("flex-"))
            x = x.replace("flex-", "");
        if (x.startsWith("fl-"))
            x = x.replace("fl-", "");
        if (x.startsWith("filter-"))
            x = x.replace("filter-", "");
        if (x.startsWith("empty-cells-"))
            x = x.replace("empty-cells-", "");
        if (x.startsWith("drop-shadow-"))
            x = x.replace("drop-shadow-", "");
        if (x.startsWith("direction-"))
            x = x.replace("direction-", "");
        if (x.startsWith("d-"))
            x = x.replace("d-", "");
        if (x.startsWith("cu-"))
            x = x.replace("cu-", "");
        if (x.startsWith("counter-set-"))
            x = x.replace("counter-set-", "");
        if (x.startsWith("counter-reset-"))
            x = x.replace("counter-reset-", "");
        if (x.startsWith("counter-increment-"))
            x = x.replace("counter-increment-", "");
        if (x.startsWith("contrast-"))
            x = x.replace("contrast-", "");
        if (x.startsWith("content-visibility-"))
            x = x.replace("content-visibility-", "");
        if (x.startsWith("content-"))
            x = x.replace("content-", "");
        if (x.startsWith("content-"))
            x = x.replace("content-", "");
        if (x.startsWith("contain-"))
            x = x.replace("contain-", "");
        if (x.startsWith("cols-"))
            x = x.replace("cols-", "");
        if (x.startsWith("color-scheme-"))
            x = x.replace("color-scheme-", "");
        if (x.startsWith("color-"))
            x = x.replace("color-", "");
        if (x.startsWith("col-w-"))
            x = x.replace("col-w-", "");
        if (x.startsWith("col-span-"))
            x = x.replace("col-span-", "");
        if (x.startsWith("col-rule-width-"))
            x = x.replace("col-rule-width-", "");
        if (x.startsWith("col-rule-style-"))
            x = x.replace("col-rule-style-", "");
        if (x.startsWith("col-rule-color-"))
            x = x.replace("col-rule-color-", "");
        if (x.startsWith("col-rule-"))
            x = x.replace("col-rule-", "");
        if (x.startsWith("col-gap-"))
            x = x.replace("col-gap-", "");
        if (x.startsWith("col-fill-"))
            x = x.replace("col-fill-", "");
        if (x.startsWith("col-count-"))
            x = x.replace("col-count-", "");
        if (x.startsWith("clip-path-"))
            x = x.replace("clip-path-", "");
        if (x.startsWith("clip-"))
            x = x.replace("clip-", "");
        if (x.startsWith("clear-"))
            x = x.replace("clear-", "");
        if (x.startsWith("caret-color-"))
            x = x.replace("caret-color-", "");
        if (x.startsWith("caption-side-"))
            x = x.replace("caption-side-", "");
        if (x.startsWith("brightness-"))
            x = x.replace("brightness-", "");
        if (x.startsWith("box-sizing-"))
            x = x.replace("box-sizing-", "");
        if (x.startsWith("box-decoration-break-"))
            x = x.replace("box-decoration-break-", "");
        if (x.startsWith("blur-"))
            x = x.replace("blur-", "");
        if (x.startsWith("block-size-"))
            x = x.replace("block-size-", "");
        if (x.startsWith("bi-"))
            x = x.replace("bi-", "");
        if (x.startsWith("bg-size-"))
            x = x.replace("bg-size-", "");
        if (x.startsWith("bg-repeat-"))
            x = x.replace("bg-repeat-", "");
        if (x.startsWith("bg-position-y-"))
            x = x.replace("bg-position-y-", "");
        if (x.startsWith("bg-position-x-"))
            x = x.replace("bg-position-x-", "");
        if (x.startsWith("bg-position-"))
            x = x.replace("bg-position-", "");
        if (x.startsWith("bg-origin-"))
            x = x.replace("bg-origin-", "");
        if (x.startsWith("bg-image-"))
            x = x.replace("bg-image-", "");
        if (x.startsWith("bg-color-"))
            x = x.replace("bg-color-", "");
        if (x.startsWith("bg-clip-"))
            x = x.replace("bg-clip-", "");
        if (x.startsWith("bg-blend-mode-"))
            x = x.replace("bg-blend-mode-", "");
        if (x.startsWith("bg-attachment-"))
            x = x.replace("bg-attachment-", "");
        if (x.startsWith("bg-"))
            x = x.replace("bg-", "");
        if (x.startsWith("bd-w-"))
            x = x.replace("bd-w-", "");
        if (x.startsWith("bd-t-w-"))
            x = x.replace("bd-t-w-", "");
        if (x.startsWith("bd-t-style-"))
            x = x.replace("bd-t-style-", "");
        if (x.startsWith("radius-t-r-"))
            x = x.replace("radius-t-r-", "");
        if (x.startsWith("radius-t-l-"))
            x = x.replace("radius-t-l-", "");
        if (x.startsWith("bd-t-color-"))
            x = x.replace("bd-t-color-", "");
        if (x.startsWith("bd-t-"))
            x = x.replace("bd-t-", "");
        if (x.startsWith("bd-style-"))
            x = x.replace("bd-style-", "");
        if (x.startsWith("radius-start-start-"))
            x = x.replace("radius-start-start-", "");
        if (x.startsWith("radius-start-end-"))
            x = x.replace("radius-start-end-", "");
        if (x.startsWith("bd-spacing-"))
            x = x.replace("bd-spacing-", "");
        if (x.startsWith("radius-"))
            x = x.replace("radius-", "");
        if (x.startsWith("bd-r-w-"))
            x = x.replace("bd-r-w-", "");
        if (x.startsWith("bd-r-style-"))
            x = x.replace("bd-r-style-", "");
        if (x.startsWith("bd-r-color-"))
            x = x.replace("bd-r-color-", "");
        if (x.startsWith("bd-r-"))
            x = x.replace("bd-r-", "");
        if (x.startsWith("bd-l-w-"))
            x = x.replace("bd-l-w-", "");
        if (x.startsWith("bd-l-style-"))
            x = x.replace("bd-l-style-", "");
        if (x.startsWith("bd-l-color-"))
            x = x.replace("bd-l-color-", "");
        if (x.startsWith("bd-l-"))
            x = x.replace("bd-l-", "");
        if (x.startsWith("bd-inline-w-"))
            x = x.replace("bd-inline-w-", "");
        if (x.startsWith("bd-inline-style-"))
            x = x.replace("bd-inline-style-", "");
        if (x.startsWith("bd-inline-start-w-"))
            x = x.replace("bd-inline-start-w-", "");
        if (x.startsWith("bd-inline-start-style-"))
            x = x.replace("bd-inline-start-style-", "");
        if (x.startsWith("bd-inline-start-color-"))
            x = x.replace("bd-inline-start-color-", "");
        if (x.startsWith("bd-inline-start-"))
            x = x.replace("bd-inline-start-", "");
        if (x.startsWith("bd-inline-end-w-"))
            x = x.replace("bd-inline-end-w-", "");
        if (x.startsWith("bd-inline-end-style-"))
            x = x.replace("bd-inline-end-style-", "");
        if (x.startsWith("bd-inline-end-color-"))
            x = x.replace("bd-inline-end-color-", "");
        if (x.startsWith("bd-inline-end-"))
            x = x.replace("bd-inline-end-", "");
        if (x.startsWith("bd-inline-color-"))
            x = x.replace("bd-inline-color-", "");
        if (x.startsWith("bd-inline-"))
            x = x.replace("bd-inline-", "");
        if (x.startsWith("bd-img-w-"))
            x = x.replace("bd-img-w-", "");
        if (x.startsWith("bd-img-source-"))
            x = x.replace("bd-img-source-", "");
        if (x.startsWith("bd-img-slice-"))
            x = x.replace("bd-img-slice-", "");
        if (x.startsWith("bd-img-repeat-"))
            x = x.replace("bd-img-repeat-", "");
        if (x.startsWith("bd-img-outset-"))
            x = x.replace("bd-img-outset-", "");
        if (x.startsWith("bd-img-"))
            x = x.replace("bd-img-", "");
        if (x.startsWith("radius-end-start-"))
            x = x.replace("radius-end-start-", "");
        if (x.startsWith("radius-end-end-"))
            x = x.replace("radius-end-end-", "");
        if (x.startsWith("bd-color-"))
            x = x.replace("bd-color-", "");
        if (x.startsWith("bd-collapse-"))
            x = x.replace("bd-collapse-", "");
        if (x.startsWith("bd-block-w-"))
            x = x.replace("bd-block-w-", "");
        if (x.startsWith("bd-block-style-"))
            x = x.replace("bd-block-style-", "");
        if (x.startsWith("bd-block-start-w-"))
            x = x.replace("bd-block-start-w-", "");
        if (x.startsWith("bd-block-start-style-"))
            x = x.replace("bd-block-start-style-", "");
        if (x.startsWith("bd-block-start-color-"))
            x = x.replace("bd-block-start-color-", "");
        if (x.startsWith("bd-block-start-"))
            x = x.replace("bd-block-start-", "");
        if (x.startsWith("bd-block-end-width-"))
            x = x.replace("bd-block-end-width-", "");
        if (x.startsWith("bd-block-end-style-"))
            x = x.replace("bd-block-end-style-", "");
        if (x.startsWith("bd-block-end-color-"))
            x = x.replace("bd-block-end-color-", "");
        if (x.startsWith("bd-block-end-"))
            x = x.replace("bd-block-end-", "");
        if (x.startsWith("bd-block-color-"))
            x = x.replace("bd-block-color-", "");
        if (x.startsWith("bd-block-"))
            x = x.replace("bd-block-", "");
        if (x.startsWith("bd-b-w-"))
            x = x.replace("bd-b-w-", "");
        if (x.startsWith("bd-b-style-"))
            x = x.replace("bd-b-style-", "");
        if (x.startsWith("radius-b-r-"))
            x = x.replace("radius-b-r-", "");
        if (x.startsWith("radius-b-l-"))
            x = x.replace("radius-b-l-", "");
        if (x.startsWith("bd-b-color-"))
            x = x.replace("bd-b-color-", "");
        if (x.startsWith("bd-b-"))
            x = x.replace("bd-b-", "");
        if (x.startsWith("bd-"))
            x = x.replace("bd-", "");
        if (x.startsWith("bb-"))
            x = x.replace("bb-", "");
        if (x.startsWith("backface-visibility-"))
            x = x.replace("backface-visibility-", "");
        if (x.startsWith("backdrop-filter-"))
            x = x.replace("backdrop-filter-", "");
        if (x.startsWith("ba-"))
            x = x.replace("ba-", "");
        if (x.startsWith("b-"))
            x = x.replace("b-", "");
        if (x.startsWith("ar-"))
            x = x.replace("ar-", "");
        if (x.startsWith("ap-"))
            x = x.replace("ap-", "");
        if (x.startsWith("anime-timing-function-"))
            x = x.replace("anime-timing-function-", "");
        if (x.startsWith("anime-timeline-"))
            x = x.replace("anime-timeline-", "");
        if (x.startsWith("anime-play-state-"))
            x = x.replace("anime-play-state-", "");
        if (x.startsWith("anime-name-"))
            x = x.replace("anime-name-", "");
        if (x.startsWith("anime-iteration-count-"))
            x = x.replace("anime-iteration-count-", "");
        if (x.startsWith("anime-fill-mode-"))
            x = x.replace("anime-fill-mode-", "");
        if (x.startsWith("anime-duration-"))
            x = x.replace("anime-duration-", "");
        if (x.startsWith("anime-direction-"))
            x = x.replace("anime-direction-", "");
        if (x.startsWith("anime-delay-"))
            x = x.replace("anime-delay-", "");
        if (x.startsWith("anime-"))
            x = x.replace("anime-", "");
        if (x.startsWith("all-"))
            x = x.replace("all-", "");
        if (x.startsWith("align-tracks-"))
            x = x.replace("align-tracks-", "");
        if (x.startsWith("align-self-"))
            x = x.replace("align-self-", "");
        if (x.startsWith("align-items-"))
            x = x.replace("align-items-", "");
        if (x.startsWith("align-content-"))
            x = x.replace("align-content-", "");
        if (x.startsWith("accent-color-"))
            x = x.replace("accent-color-", "");
        // Handling array inputs
        if (x.startsWith("[")) {
            x = x.replaceAll(",", " ");
            x = x.replace("[", "");
            x = x.replace("]", "");
        }
        if (x.includes("complement") || x.includes("compl"))
            return (0, generateComplement_1.generateComplement)(x);
        if (x.includes("lighten")) {
            x = x.split("/");
            /* @ts-ignore */
            return lighten_1.lighten.apply(void 0, x);
        }
        if (x.includes("darken")) {
            x = x.split("/");
            /* @ts-ignore */
            return darken_1.darken.apply(void 0, x);
        }
        return x;
    };
    formatters.formatPropertyValue = formatPropertyValue;

    Object.defineProperty(checkClassTypeHandler$1, "__esModule", { value: true });
    checkClassTypeHandler$1.checkClassTypeHandler = void 0;
    var data_1 = data;
    var formatters_1$1 = formatters;
    var checkClassTypeHandler = function (className) {
        // check for colors
        if (className.startsWith("bg-")) {
            var x = (0, formatters_1$1.formatPropertyValue)(className);
            if (data_1.colors.includes(x) || data_1.brandColors.includes(x))
                return "background-color";
        }
        if (className.startsWith("bd-")) {
            var x = (0, formatters_1$1.formatPropertyValue)(className);
            if (data_1.colors.includes(x) || data_1.brandColors.includes(x))
                return "border-color";
        }
        if (className.startsWith("caret-")) {
            var x = (0, formatters_1$1.formatPropertyValue)(className);
            if (data_1.colors.includes(x) || data_1.brandColors.includes(x))
                return "caret-color";
        }
        if (className.startsWith("ot-")) {
            var x = (0, formatters_1$1.formatPropertyValue)(className);
            if (data_1.colors.includes(x) || data_1.brandColors.includes(x))
                return "outline-color";
        }
        if (className.startsWith("bd-complement") ||
            className.startsWith("bd-lighten") ||
            className.startsWith("bd-darken"))
            return "border-color";
        if (className.startsWith("ot-complement") ||
            className.startsWith("ot-lighten") ||
            className.startsWith("ot-darken"))
            return "outline-color";
        if (className.startsWith("caret-complement") ||
            className.startsWith("caret-lighten") ||
            className.startsWith("caret-darken"))
            return "caret-color";
        if (className.startsWith("bg-complement") ||
            className.startsWith("bg-lighten") ||
            className.startsWith("bg-darken"))
            return "background-color";
        // Colors
        if (className.startsWith("rgb") ||
            className.startsWith("hsl") ||
            className.startsWith("#") ||
            className.startsWith("complement") ||
            className.startsWith("lighten") ||
            className.startsWith("darken"))
            return "color";
        // text-transform
        if (className.startsWith("lowercase") ||
            className.startsWith("uppercase") ||
            className.startsWith("capitalize") ||
            className.startsWith("normal-case"))
            return "text-transform";
        if (className.startsWith("text-center") ||
            className.startsWith("text-justify") ||
            className.startsWith("text-start") ||
            className.startsWith("text-end") ||
            className.startsWith("text-left") ||
            className.startsWith("text-right"))
            return "text-align";
        // text-decoration-line
        if (className.startsWith("underline") ||
            className.startsWith("overline") ||
            className.startsWith("line-through") ||
            className.startsWith("no-underline"))
            return "text-decoration-line";
        // font-weight
        if (className.startsWith("lighter") ||
            className.startsWith("light") ||
            className.startsWith("normal") ||
            className.startsWith("bold") ||
            className.startsWith("bolder"))
            return "font-weight";
        // font-style
        if (className.startsWith("italic"))
            return "font-style";
        // media-breakpoints
        if (className.startsWith("watch"))
            return "watch";
        if (className.startsWith("mobile"))
            return "mobile";
        if (className.startsWith("tablet"))
            return "tablet";
        if (className.startsWith("laptop"))
            return "laptop";
        if (className.startsWith("desktop"))
            return "desktop";
        if (className.startsWith("extralarge-tv"))
            return "extralarge-tv";
        // font-family
        // should handle google fonts
        var fnt = (0, formatters_1$1.formatPropertyValue)(className);
        if (data_1.fonts.includes(fnt))
            return "font-family";
        // box-sizing
        if (className.startsWith("border-box") || className.startsWith("content-box"))
            return "box-sizing";
        // visibility
        if (className.startsWith("visible") ||
            className.startsWith("hidden") ||
            className.startsWith("collapse"))
            return "visibility";
        if (className.startsWith("flex-row") ||
            className.startsWith("flex-col") ||
            className.startsWith("row-reverse") ||
            className.startsWith("col-reverse"))
            return "flex-direction";
        // Positions
        if (className.startsWith("static") ||
            className.startsWith("relative") ||
            className.startsWith("absolute") ||
            className.startsWith("fixed") ||
            className.startsWith("sticky"))
            return "position";
        // general
        if (className.startsWith("z-"))
            return "z-index";
        if (className.startsWith("writing-mode-"))
            return "writing-mode";
        if (className.startsWith("word-wrap-"))
            return "word-wrap";
        if (className.startsWith("word-spacing-"))
            return "word-spacing";
        if (className.startsWith("word-break-"))
            return "word-break";
        if (className.startsWith("will-change-"))
            return "will-change";
        if (className.startsWith("widows-"))
            return "widows";
        if (className.startsWith("white-sp-"))
            return "white-space";
        if (className.startsWith("w-"))
            return "width";
        if (className.startsWith("visibility-"))
            return "visibility";
        if (className.startsWith("v-align-"))
            return "vertical-align";
        if (className.startsWith("user-select-"))
            return "user-select";
        if (className.startsWith("unset-"))
            return "unset";
        if (className.startsWith("text-underline-position-"))
            return "text-underline-position";
        if (className.startsWith("text-underline-offset-"))
            return "text-underline-offset";
        if (className.startsWith("text-transform-"))
            return "text-transform";
        if (className.startsWith("text-size-adjust-"))
            return "text-size-adjust";
        if (className.startsWith("text-sh-"))
            return "text-shadow";
        if (className.startsWith("text-rendering-"))
            return "text-rendering";
        if (className.startsWith("text-overflow-"))
            return "text-overflow";
        if (className.startsWith("text-orientation-"))
            return "text-orientation";
        if (className.startsWith("text-justify-"))
            return "text-justify";
        if (className.startsWith("text-indent-"))
            return "text-indent";
        if (className.startsWith("text-emphasis-style-"))
            return "text-emphasis-style";
        if (className.startsWith("text-emphasis-position-"))
            return "text-emphasis-position";
        if (className.startsWith("text-emphasis-color-"))
            return "text-emphasis-color";
        if (className.startsWith("text-emphasis-"))
            return "text-emphasis";
        if (className.startsWith("text-decoration-thickness-"))
            return "text-decoration-thickness";
        if (className.startsWith("text-decoration-style-"))
            return "text-decoration-style";
        if (className.startsWith("text-decoration-skip-ink-"))
            return "text-decoration-skip-ink";
        if (className.startsWith("text-decoration-skip-"))
            return "text-decoration-skip";
        if (className.startsWith("text-decoration-line-"))
            return "text-decoration-line";
        if (className.startsWith("text-decoration-color-"))
            return "text-decoration-color";
        if (className.startsWith("text-decoration-"))
            return "text-decoration";
        if (className.startsWith("text-combine-upright-"))
            return "text-combine-upright";
        if (className.startsWith("text-align-last-"))
            return "text-align-last";
        if (className.startsWith("text-align-"))
            return "text-align";
        if (className.startsWith("transz-"))
            return "translateZ";
        if (className.startsWith("transy-"))
            return "translateY";
        if (className.startsWith("transx-"))
            return "translateX";
        if (className.startsWith("translate-"))
            return "translate";
        if (className.startsWith("transition-timing-function-"))
            return "transition-timing-function";
        if (className.startsWith("transition-property-"))
            return "transition-property";
        if (className.startsWith("transition-duration-"))
            return "transition-duration";
        if (className.startsWith("transition-delay-"))
            return "transition-delay";
        if (className.startsWith("transition-"))
            return "transition";
        if (className.startsWith("transform-style-"))
            return "transform-style";
        if (className.startsWith("transform-origin-"))
            return "transform-origin";
        if (className.startsWith("transform-box-"))
            return "transform-box";
        if (className.startsWith("transform-"))
            return "transform";
        if (className.startsWith("trans3d-"))
            return "translate3d";
        if (className.startsWith("touch-action-"))
            return "touch-action";
        if (className.startsWith("table-layout-"))
            return "table-layout";
        if (className.startsWith("tab-size-"))
            return "tab-size";
        if (className.startsWith("t-"))
            return "top";
        if (className.startsWith("skewy-"))
            return "skewY";
        if (className.startsWith("skewx-"))
            return "skewX";
        if (className.startsWith("skew-"))
            return "skew";
        if (className.startsWith("shape-outside-"))
            return "shape-outside";
        if (className.startsWith("shape-margin-"))
            return "shape-margin";
        if (className.startsWith("shape-image-threshold-"))
            return "shape-image-threshold";
        if (className.startsWith("sepia-"))
            return "sepia";
        if (className.startsWith("self-"))
            return "justify-self";
        if (className.startsWith("scrollbar-w-"))
            return "scrollbar-width";
        if (className.startsWith("scrollbar-gutter-"))
            return "scrollbar-gutter";
        if (className.startsWith("scrollbar-color-"))
            return "scrollbar-color";
        if (className.startsWith("scroll-snap-type-"))
            return "scroll-snap-type";
        if (className.startsWith("scroll-snap-stop-"))
            return "scroll-snap-stop";
        if (className.startsWith("scroll-snap-align-"))
            return "scroll-snap-align";
        if (className.startsWith("scroll-p-t-"))
            return "scroll-padding-top";
        if (className.startsWith("scroll-p-r-"))
            return "scroll-padding-right";
        if (className.startsWith("scroll-p-l-"))
            return "scroll-padding-left";
        if (className.startsWith("scroll-p-inline-start-"))
            return "scroll-padding-inline-start";
        if (className.startsWith("scroll-p-inline-end-"))
            return "scroll-padding-inline-end";
        if (className.startsWith("scroll-p-inline-"))
            return "scroll-padding-inline";
        if (className.startsWith("scroll-p-block-start-"))
            return "scroll-padding-block-start";
        if (className.startsWith("scroll-p-block-end-"))
            return "scroll-padding-block-end";
        if (className.startsWith("scroll-p-block-"))
            return "scroll-padding-block";
        if (className.startsWith("scroll-p-b-"))
            return "scroll-padding-bottom";
        if (className.startsWith("scroll-p-"))
            return "scroll-padding";
        if (className.startsWith("scroll-m-t-"))
            return "scroll-margin-top";
        if (className.startsWith("scroll-m-r-"))
            return "scroll-margin-right";
        if (className.startsWith("scroll-m-l-"))
            return "scroll-margin-left";
        if (className.startsWith("scroll-m-inline-start-"))
            return "scroll-margin-inline-start";
        if (className.startsWith("scroll-m-inline-end-"))
            return "scroll-margin-inline-end";
        if (className.startsWith("scroll-m-inline-"))
            return "scroll-margin-inline";
        if (className.startsWith("scroll-m-bottom-"))
            return "scroll-margin-bottom";
        if (className.startsWith("scroll-m-block-start-"))
            return "scroll-margin-block-start";
        if (className.startsWith("scroll-m-block-end-"))
            return "scroll-margin-block-end";
        if (className.startsWith("scroll-m-block-"))
            return "scroll-margin-block";
        if (className.startsWith("scroll-m-"))
            return "scroll-margin";
        if (className.startsWith("scroll-behavior-"))
            return "scroll-behavior";
        if (className.startsWith("scalez-"))
            return "scaleZ";
        if (className.startsWith("scaley-"))
            return "scaleY";
        if (className.startsWith("scalex-"))
            return "scaleX";
        if (className.startsWith("scale3d-"))
            return "scale3d";
        if (className.startsWith("scale-"))
            return "scale";
        if (className.startsWith("scale-"))
            return "scale";
        if (className.startsWith("saturate-"))
            return "saturate";
        if (className.startsWith("ruby-position-"))
            return "ruby-position";
        if (className.startsWith("ruby-merge-"))
            return "ruby-merge";
        if (className.startsWith("ruby-align-"))
            return "ruby-align";
        if (className.startsWith("row-gap-"))
            return "row-gap";
        if (className.startsWith("rotz-"))
            return "rotateZ";
        if (className.startsWith("roty-"))
            return "rotateY";
        if (className.startsWith("rotx-"))
            return "rotateX";
        if (className.startsWith("rotate-"))
            return "rotate";
        if (className.startsWith("rot3d-"))
            return "rotate3d";
        if (className.startsWith("revert-"))
            return "revert";
        if (className.startsWith("resize-"))
            return "resize";
        if (className.startsWith("r-"))
            return "right";
        if (className.startsWith("quotes-"))
            return "quotes";
        if (className.startsWith("py-"))
            return "padding-y";
        if (className.startsWith("px-"))
            return "padding-x";
        if (className.startsWith("pt-"))
            return "padding-top";
        if (className.startsWith("print-color-adjust-"))
            return "print-color-adjust";
        if (className.startsWith("pr-"))
            return "padding-right";
        if (className.startsWith("position-"))
            return "position";
        if (className.startsWith("plc-self-"))
            return "place-self";
        if (className.startsWith("plc-items-"))
            return "place-items";
        if (className.startsWith("plc-content-"))
            return "place-content";
        if (className.startsWith("pl-"))
            return "padding-left";
        if (className.startsWith("perspective-origin-"))
            return "perspective-origin";
        if (className.startsWith("perspective-"))
            return "perspective";
        if (className.startsWith("perspective-"))
            return "perspective";
        if (className.startsWith("pe-"))
            return "pointer-events";
        if (className.startsWith("pb-"))
            return "padding-bottom";
        if (className.startsWith("paint-order-"))
            return "paint-order";
        if (className.startsWith("p-inline-start-"))
            return "padding-inline-start";
        if (className.startsWith("p-inline-end-"))
            return "padding-inline-end";
        if (className.startsWith("p-inline-"))
            return "padding-inline";
        if (className.startsWith("p-block-start-"))
            return "padding-block-start";
        if (className.startsWith("p-block-end-"))
            return "padding-block-end";
        if (className.startsWith("p-block-"))
            return "padding-block";
        if (className.startsWith("p-"))
            return "padding";
        if (className.startsWith("ov-y-"))
            return "overflow-y";
        if (className.startsWith("ov-x-"))
            return "overflow-x";
        if (className.startsWith("ov-wrap-"))
            return "overflow-wrap";
        if (className.startsWith("ov-inline-"))
            return "overflow-inline";
        if (className.startsWith("ov-clip-margin-"))
            return "overflow-clip-margin";
        if (className.startsWith("ov-block-"))
            return "overflow-block";
        if (className.startsWith("ov-anchor-"))
            return "overflow-anchor";
        if (className.startsWith("ov-"))
            return "overflow";
        if (className.startsWith("ot-w-"))
            return "outline-width";
        if (className.startsWith("ot-style-"))
            return "outline-style";
        if (className.startsWith("ot-offset-"))
            return "outline-offset";
        if (className.startsWith("ot-color-"))
            return "outline-color";
        if (className.startsWith("ot-"))
            return "outline";
        if (className.startsWith("os-behavior-y-"))
            return "overscroll-behavior-y";
        if (className.startsWith("os-behavior-x-"))
            return "overscroll-behavior-x";
        if (className.startsWith("os-behavior-inline-"))
            return "overscroll-behavior-inline";
        if (className.startsWith("os-behavior-block-"))
            return "overscroll-behavior-block";
        if (className.startsWith("os-behavior-"))
            return "overscroll-behavior";
        if (className.startsWith("orphans-"))
            return "orphans";
        if (className.startsWith("op-"))
            return "opacity";
        if (className.startsWith("offset-rotate-"))
            return "offset-rotate";
        if (className.startsWith("offset-position-"))
            return "offset-position";
        if (className.startsWith("offset-path-"))
            return "offset-path";
        if (className.startsWith("offset-distance-"))
            return "offset-distance";
        if (className.startsWith("offset-anchor-"))
            return "offset-anchor";
        if (className.startsWith("offset-"))
            return "offset";
        if (className.startsWith("od-"))
            return "order";
        if (className.startsWith("object-position-"))
            return "object-position";
        if (className.startsWith("object-fit-"))
            return "object-fit";
        if (className.startsWith("my-"))
            return "margin-y";
        if (className.startsWith("mx-"))
            return "margin-x";
        if (className.startsWith("mt-"))
            return "margin-top";
        if (className.startsWith("mr-"))
            return "margin-right";
        if (className.startsWith("ml-"))
            return "margin-left";
        if (className.startsWith("mix-blend-mode-"))
            return "mix-blend-mode";
        if (className.startsWith("min-w-"))
            return "min-width";
        if (className.startsWith("min-inline-size-"))
            return "min-inline-size";
        if (className.startsWith("min-h-"))
            return "min-height";
        if (className.startsWith("min-block-size-"))
            return "min-block-size";
        if (className.startsWith("mb-"))
            return "margin-bottom";
        if (className.startsWith("max-w-"))
            return "max-width";
        if (className.startsWith("max-inline-size-"))
            return "max-inline-size";
        if (className.startsWith("max-h-"))
            return "max-height";
        if (className.startsWith("max-block-size-"))
            return "max-block-size";
        if (className.startsWith("matrix3d-"))
            return "matrix3d";
        if (className.startsWith("matrix-"))
            return "matrix";
        if (className.startsWith("math-style-"))
            return "math-style";
        if (className.startsWith("masonry-auto-flow-"))
            return "masonry-auto-flow";
        if (className.startsWith("mask-type-"))
            return "mask-type";
        if (className.startsWith("mask-size-"))
            return "mask-size";
        if (className.startsWith("mask-repeat-"))
            return "mask-repeat";
        if (className.startsWith("mask-position-"))
            return "mask-position";
        if (className.startsWith("mask-origin-"))
            return "mask-origin";
        if (className.startsWith("mask-mode-"))
            return "mask-mode";
        if (className.startsWith("mask-image-"))
            return "mask-image";
        if (className.startsWith("mask-composite-"))
            return "mask-composite";
        if (className.startsWith("mask-clip-"))
            return "mask-clip";
        if (className.startsWith("mask-bd-width-"))
            return "mask-border-width";
        if (className.startsWith("mask-bd-source-"))
            return "mask-border-source";
        if (className.startsWith("mask-bd-slice-"))
            return "mask-border-slice";
        if (className.startsWith("mask-bd-repeat-"))
            return "mask-border-repeat";
        if (className.startsWith("mask-bd-outset-"))
            return "mask-border-outset";
        if (className.startsWith("mask-bd-mode-"))
            return "mask-border-mode";
        if (className.startsWith("mask-bd-"))
            return "mask-border";
        if (className.startsWith("mask-"))
            return "mask";
        if (className.startsWith("m-trim-"))
            return "margin-trim";
        if (className.startsWith("m-inline-start-"))
            return "margin-inline-start";
        if (className.startsWith("m-inline-end-"))
            return "margin-inline-end";
        if (className.startsWith("m-inline-"))
            return "margin-inline";
        if (className.startsWith("m-block-start-"))
            return "margin-block-start";
        if (className.startsWith("m-block-end-"))
            return "margin-block-end";
        if (className.startsWith("m-block-"))
            return "margin-block";
        if (className.startsWith("m-"))
            return "margin";
        if (className.startsWith("ls-type-"))
            return "list-style-type";
        if (className.startsWith("ls-position-"))
            return "list-style-position";
        if (className.startsWith("ls-image-"))
            return "list-style-image";
        if (className.startsWith("ls-"))
            return "list-style";
        if (className.startsWith("lh-step-"))
            return "line-height-step";
        if (className.startsWith("lh-"))
            return "line-height";
        if (className.startsWith("letter-sp-"))
            return "letter-spacing";
        if (className.startsWith("lb-"))
            return "line-break";
        if (className.startsWith("l-"))
            return "left";
        if (className.startsWith("jt-"))
            return "justify-tracks";
        if (className.startsWith("js-"))
            return "justify-self";
        if (className.startsWith("ji-"))
            return "justify-items";
        if (className.startsWith("jc-"))
            return "justify-content";
        if (className.startsWith("items-"))
            return "align-items";
        if (className.startsWith("isolation-"))
            return "isolation";
        if (className.startsWith("inset-inline-start-"))
            return "inset-inline-start";
        if (className.startsWith("inset-inline-end-"))
            return "inset-inline-end";
        if (className.startsWith("inset-inline-"))
            return "inset-inline";
        if (className.startsWith("inset-block-start-"))
            return "inset-block-start";
        if (className.startsWith("inset-block-end-"))
            return "inset-block-end";
        if (className.startsWith("inset-block-"))
            return "inset-block";
        if (className.startsWith("inset-"))
            return "inset";
        if (className.startsWith("inline-size-"))
            return "inline-size";
        if (className.startsWith("initial-letter-align-"))
            return "initial-letter-align";
        if (className.startsWith("initial-letter-"))
            return "initial-letter";
        if (className.startsWith("initial-"))
            return "initial";
        if (className.startsWith("inherit-"))
            return "inherit";
        if (className.startsWith("img-resolution-"))
            return "image-resolution";
        if (className.startsWith("img-rendering-"))
            return "image-rendering";
        if (className.startsWith("img-orientation-"))
            return "image-orientation";
        if (className.startsWith("hyphens-"))
            return "hyphens";
        if (className.startsWith("hyphenate-character-"))
            return "hyphenate-character";
        if (className.startsWith("hanging-punctuation-"))
            return "hanging-punctuation";
        if (className.startsWith("h-"))
            return "height";
        if (className.startsWith("grid-rows-"))
            return "grid-template-rows";
        if (className.startsWith("grid-cols-"))
            return "grid-template-columns";
        if (className.startsWith("grid-template-areas-"))
            return "grid-template-areas";
        if (className.startsWith("grid-template-"))
            return "grid-template";
        if (className.startsWith("grid-row-start-"))
            return "grid-row-start";
        if (className.startsWith("grid-row-end-"))
            return "grid-row-end";
        if (className.startsWith("grid-row-"))
            return "grid-row";
        if (className.startsWith("grid-col-start-"))
            return "grid-column-start";
        if (className.startsWith("grid-col-end-"))
            return "grid-column-end";
        if (className.startsWith("grid-col-"))
            return "grid-column";
        if (className.startsWith("grid-auto-rows-"))
            return "grid-auto-rows";
        if (className.startsWith("grid-auto-flow-"))
            return "grid-auto-flow";
        if (className.startsWith("grid-auto-columns-"))
            return "grid-auto-columns";
        if (className.startsWith("grid-area-"))
            return "grid-area";
        if (className.startsWith("grid-"))
            return "grid";
        if (className.startsWith("grayscale-"))
            return "grayscale";
        if (className.startsWith("gap-x-"))
            return "column-gap";
        if (className.startsWith("gap-y-"))
            return "row-gap";
        if (className.startsWith("gap-"))
            return "gap";
        if (className.startsWith("forced-color-adjust-"))
            return "forced-color-adjust";
        if (className.startsWith("font-weit-") || className.startsWith("font-weight-"))
            return "font-weight";
        if (className.startsWith("font-variation-settings-"))
            return "font-variation-settings";
        if (className.startsWith("font-variant-position-"))
            return "font-variant-position";
        if (className.startsWith("font-variant-numeric-"))
            return "font-variant-numeric";
        if (className.startsWith("font-variant-ligatures-"))
            return "font-variant-ligatures";
        if (className.startsWith("font-variant-east-asian-"))
            return "font-variant-east-asian";
        if (className.startsWith("font-variant-caps-"))
            return "font-variant-caps";
        if (className.startsWith("font-variant-alternates-"))
            return "font-variant-alternates";
        if (className.startsWith("font-variant-"))
            return "font-variant";
        if (className.startsWith("font-synthesis-"))
            return "font-synthesis";
        if (className.startsWith("font-style-"))
            return "font-style";
        if (className.startsWith("font-stretch-"))
            return "font-stretch";
        if (className.startsWith("font-size-adjust-"))
            return "font-size-adjust";
        if (className.startsWith("font-size-"))
            return "font-size";
        if (className.startsWith("font-optical-sizing-"))
            return "font-optical-sizing";
        if (className.startsWith("font-language-override-"))
            return "font-language-override";
        if (className.startsWith("font-kerning-"))
            return "font-kerning";
        if (className.startsWith("font-family-"))
            return "font-family";
        if (className.startsWith("font-"))
            return "font";
        if (className.startsWith("flex-wrap-"))
            return "flex-wrap";
        if (className.startsWith("flex-shrink-"))
            return "flex-shrink";
        if (className.startsWith("flex-grow-"))
            return "flex-grow";
        if (className.startsWith("flex-flow-"))
            return "flex-flow";
        if (className.startsWith("flex-direction-"))
            return "flex-direction";
        if (className.startsWith("flex-basis-"))
            return "flex-basis";
        if (className.startsWith("flex-"))
            return "flex";
        if (className.startsWith("fl-"))
            return "float";
        if (className.startsWith("filter-"))
            return "filter";
        if (className.startsWith("empty-cells-"))
            return "empty-cells";
        if (className.startsWith("drop-shadow-"))
            return "drop-shadow";
        if (className.startsWith("direction-"))
            return "direction";
        if (className.startsWith("d-"))
            return "display";
        if (className.startsWith("cu-"))
            return "cursor";
        if (className.startsWith("counter-set-"))
            return "counter-set";
        if (className.startsWith("counter-reset-"))
            return "counter-reset";
        if (className.startsWith("counter-increment-"))
            return "counter-increment";
        if (className.startsWith("contrast-"))
            return "contrast";
        if (className.startsWith("content-visibility-"))
            return "content-visibility";
        if (className.startsWith("content-"))
            return "justify-content";
        if (className.startsWith("cont-"))
            return "content";
        if (className.startsWith("contain-"))
            return "contain";
        if (className.startsWith("cols-"))
            return "columns";
        if (className.startsWith("color-scheme-"))
            return "color-scheme";
        if (className.startsWith("color-"))
            return "color";
        if (className.startsWith("col-w-"))
            return "column-width";
        if (className.startsWith("col-span-"))
            return "column-span";
        if (className.startsWith("col-rule-width-"))
            return "column-rule-width";
        if (className.startsWith("col-rule-style-"))
            return "column-rule-style";
        if (className.startsWith("col-rule-color-"))
            return "column-rule-color";
        if (className.startsWith("col-rule-"))
            return "column-rule";
        if (className.startsWith("col-gap-"))
            return "column-gap";
        if (className.startsWith("col-fill-"))
            return "column-fill";
        if (className.startsWith("col-count-"))
            return "column-count";
        if (className.startsWith("clip-path-"))
            return "clip-path";
        if (className.startsWith("clip-"))
            return "clip";
        if (className.startsWith("clear-"))
            return "clear";
        if (className.startsWith("caret-color-"))
            return "caret-color";
        if (className.startsWith("caption-side-"))
            return "caption-side";
        if (className.startsWith("brightness-"))
            return "brightness";
        if (className.startsWith("box-sizing-"))
            return "box-sizing";
        if (className.startsWith("sh-"))
            return "box-shadow";
        if (className.startsWith("box-decoration-break-"))
            return "box-decoration-break";
        if (className.startsWith("blur-"))
            return "blur";
        if (className.startsWith("block-size-"))
            return "block-size";
        if (className.startsWith("bi-"))
            return "break-inside";
        if (className.startsWith("bg-size-"))
            return "background-size";
        if (className.startsWith("bg-repeat-"))
            return "background-repeat";
        if (className.startsWith("bg-position-y-"))
            return "background-position-y";
        if (className.startsWith("bg-position-x-"))
            return "background-position-x";
        if (className.startsWith("bg-position-"))
            return "background-position";
        if (className.startsWith("bg-origin-"))
            return "background-origin";
        if (className.startsWith("bg-image-"))
            return "background-image";
        if (className.startsWith("bg-color-"))
            return "background-color";
        if (className.startsWith("bg-clip-"))
            return "background-clip";
        if (className.startsWith("bg-blend-mode-"))
            return "background-blend-mode";
        if (className.startsWith("bg-attachment-"))
            return "background-attachment";
        if (className.startsWith("bg-"))
            return "background";
        if (className.startsWith("bd-w-"))
            return "border-width";
        if (className.startsWith("bd-t-w-"))
            return "border-top-width";
        if (className.startsWith("bd-t-style-"))
            return "border-top-style";
        if (className.startsWith("radius-t-r-"))
            return "border-top-right-radius";
        if (className.startsWith("radius-t-l-"))
            return "border-top-left-radius";
        if (className.startsWith("bd-t-color"))
            return "border-top-color";
        if (className.startsWith("bd-t-"))
            return "border-top";
        if (className.startsWith("bd-style-"))
            return "border-style";
        if (className.startsWith("radius-start-start-"))
            return "border-start-start-radius";
        if (className.startsWith("radius-start-end-"))
            return "border-start-end-radius";
        if (className.startsWith("bd-spacing-"))
            return "border-spacing";
        if (className.startsWith("radius-"))
            return "border-radius";
        if (className.startsWith("bd-r-w-"))
            return "border-right-width";
        if (className.startsWith("bd-r-style-"))
            return "border-right-style";
        if (className.startsWith("bd-r-color-"))
            return "border-right-color";
        if (className.startsWith("bd-r-"))
            return "border-right";
        if (className.startsWith("bd-l-w-"))
            return "border-left-width";
        if (className.startsWith("bd-l-style-"))
            return "border-left-style";
        if (className.startsWith("bd-l-color-"))
            return "border-left-color";
        if (className.startsWith("bd-l-"))
            return "border-left";
        if (className.startsWith("bd-inline-w-"))
            return "border-inline-width";
        if (className.startsWith("bd-inline-style-"))
            return "border-inline-style";
        if (className.startsWith("bd-inline-start-w-"))
            return "border-inline-start-width";
        if (className.startsWith("bd-inline-start-style-"))
            return "border-inline-start-style";
        if (className.startsWith("bd-inline-start-color-"))
            return "border-inline-start-color";
        if (className.startsWith("bd-inline-start-"))
            return "border-inline-start";
        if (className.startsWith("bd-inline-end-w-"))
            return "border-inline-end-width";
        if (className.startsWith("bd-inline-end-style-"))
            return "border-inline-end-style";
        if (className.startsWith("bd-inline-end-color-"))
            return "border-inline-end-color";
        if (className.startsWith("bd-inline-end-"))
            return "border-inline-end";
        if (className.startsWith("bd-inline-color-"))
            return "border-inline-color";
        if (className.startsWith("bd-inline-"))
            return "border-inline";
        if (className.startsWith("bd-img-w-"))
            return "border-image-width";
        if (className.startsWith("bd-img-source-"))
            return "border-image-source";
        if (className.startsWith("bd-img-slice-"))
            return "border-image-slice";
        if (className.startsWith("bd-img-repeat-"))
            return "border-image-repeat";
        if (className.startsWith("bd-img-outset-"))
            return "border-image-outset";
        if (className.startsWith("bd-img-"))
            return "border-image";
        if (className.startsWith("radius-end-start-"))
            return "border-end-start-radius";
        if (className.startsWith("radius-end-end-"))
            return "border-end-end-radius";
        if (className.startsWith("bd-color-"))
            return "border-color";
        if (className.startsWith("bd-collapse-"))
            return "border-collapse";
        if (className.startsWith("bd-block-w-"))
            return "border-block-width";
        if (className.startsWith("bd-block-style-"))
            return "border-block-style";
        if (className.startsWith("bd-block-start-w-"))
            return "border-block-start-width";
        if (className.startsWith("bd-block-start-style-"))
            return "border-block-start-style";
        if (className.startsWith("bd-block-start-color-"))
            return "border-block-start-color";
        if (className.startsWith("bd-block-start-"))
            return "border-block-start";
        if (className.startsWith("bd-block-end-width-"))
            return "border-block-end-width";
        if (className.startsWith("bd-block-end-style-"))
            return "border-block-end-style";
        if (className.startsWith("bd-block-end-color-"))
            return "border-block-end-color";
        if (className.startsWith("bd-block-end-"))
            return "border-block-end";
        if (className.startsWith("bd-block-color-"))
            return "border-block-color";
        if (className.startsWith("bd-block-"))
            return "border-block";
        if (className.startsWith("bd-b-w-"))
            return "border-bottom-width";
        if (className.startsWith("bd-b-style-"))
            return "border-bottom-style";
        if (className.startsWith("radius-b-r-"))
            return "border-bottom-right-radius";
        if (className.startsWith("radius-b-l-"))
            return "border-bottom-left-radius";
        if (className.startsWith("bd-b-color-"))
            return "border-bottom-color";
        if (className.startsWith("bd-b-"))
            return "border-bottom";
        if (className.startsWith("bd-"))
            return "border";
        if (className.startsWith("bb-"))
            return "break-before";
        if (className.startsWith("backface-visibility-"))
            return "backface-visibility";
        if (className.startsWith("backdrop-filter-"))
            return "backdrop-filter";
        if (className.startsWith("ba-"))
            return "break-after";
        if (className.startsWith("b-"))
            return "bottom";
        if (className.startsWith("ar-"))
            return "aspect-ratio";
        if (className.startsWith("ap-"))
            return "appearance";
        if (className.startsWith("anime-timing-function-"))
            return "animation-timing-function";
        if (className.startsWith("anime-timeline-"))
            return "animation-timeline";
        if (className.startsWith("anime-play-state-"))
            return "animation-play-state";
        if (className.startsWith("anime-name-"))
            return "animation-name";
        if (className.startsWith("anime-iteration-count-"))
            return "animation-iteration-count";
        if (className.startsWith("anime-fill-mode-"))
            return "animation-fill-mode";
        if (className.startsWith("anime-duration-"))
            return "animation-duration";
        if (className.startsWith("anime-direction-"))
            return "animation-direction";
        if (className.startsWith("anime-delay-"))
            return "animation-delay";
        if (className.startsWith("anime-"))
            return "animation";
        if (className.startsWith("all-"))
            return "all";
        if (className.startsWith("align-tracks-"))
            return "align-tracks";
        if (className.startsWith("align-self-"))
            return "align-self";
        if (className.startsWith("align-items-"))
            return "align-items";
        if (className.startsWith("align-content-"))
            return "align-content";
        if (className.startsWith("accent-color-"))
            return "accent-color";
        for (var index = 0; index < data_1.colors.length; index++) {
            if (data_1.colors[index].name.includes((0, formatters_1$1.formatPropertyValue)(className)))
                return "color";
        }
        if (data_1.brandColors.includes((0, formatters_1$1.formatPropertyValue)(className)))
            return "color";
        return "";
    };
    checkClassTypeHandler$1.checkClassTypeHandler = checkClassTypeHandler;

    var returner$1 = {};

    Object.defineProperty(returner$1, "__esModule", { value: true });
    returner$1.returner = void 0;
    var formatters_1 = formatters;
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
    returner$1.returner = returner;

    Object.defineProperty(handleClasses$1, "__esModule", { value: true });
    handleClasses$1.handleClasses = void 0;
    var checkClassTypeHandler_1 = checkClassTypeHandler$1;
    var returner_1 = returner$1;
    var handleClasses = function (className) {
        var type = (0, checkClassTypeHandler_1.checkClassTypeHandler)(className);
        var flag;
        if (className.includes("!"))
            flag = "!important";
        else
            flag = "";
        switch (type) {
            case "accent-color":
                return (0, returner_1.returner)(className, "accent-color", false, flag);
            case "align-content":
                return (0, returner_1.returner)(className, "align-content", false, flag);
            case "align-items":
                return (0, returner_1.returner)(className, "align-items", false, flag);
            case "align-self":
                return (0, returner_1.returner)(className, "align-self", false, flag);
            case "align-tracks":
                return (0, returner_1.returner)(className, "align-tracks", false, flag);
            case "all":
                return (0, returner_1.returner)(className, "all", false, flag);
            case "animation":
                return (0, returner_1.returner)(className, "animation", false, flag);
            case "animation-delay":
                return (0, returner_1.returner)(className, "animation-delay", false, flag);
            case "animation-direction":
                return (0, returner_1.returner)(className, "animation-direction", false, flag);
            case "animation-duration":
                return (0, returner_1.returner)(className, "animation-duration", false, flag);
            case "animation-fill-mode":
                return (0, returner_1.returner)(className, "animation-fill-mode", false, flag);
            case "animation-iteration-count":
                return (0, returner_1.returner)(className, "animation-iteration-count", false, flag);
            case "animation-name":
                return (0, returner_1.returner)(className, "animation-name", false, flag);
            case "animation-play-state":
                return (0, returner_1.returner)(className, "animation-play-state", false, flag);
            case "animation-timeline":
                return (0, returner_1.returner)(className, "animation-timeline", false, flag);
            case "animation-timing-function":
                return (0, returner_1.returner)(className, "animation-timing-function", false, flag);
            case "appearance":
                return (0, returner_1.returner)(className, "appearance", false, flag);
            case "aspect-ratio":
                return (0, returner_1.returner)(className, "aspect-ratio", false, flag);
            case "backdrop-filter":
                return (0, returner_1.returner)(className, "backdrop-filter", false, flag);
            case "backface-visibility":
                return (0, returner_1.returner)(className, "backface-visibility", false, flag);
            case "background":
                return (0, returner_1.returner)(className, "background", false, flag);
            case "background-attachment":
                return (0, returner_1.returner)(className, "background-attachment", false, flag);
            case "background-blend-mode":
                return (0, returner_1.returner)(className, "background-blend-mode", false, flag);
            case "background-clip":
                return (0, returner_1.returner)(className, "background-clip", false, flag);
            case "background-color":
                return (0, returner_1.returner)(className, "background-color", false, flag);
            case "background-image":
                return (0, returner_1.returner)(className, "background-image", false, flag);
            case "background-origin":
                return (0, returner_1.returner)(className, "background-origin", false, flag);
            case "background-position":
                return (0, returner_1.returner)(className, "background-position", false, flag);
            case "background-position-x":
                return (0, returner_1.returner)(className, "background-position-x", false, flag);
            case "background-position-y":
                return (0, returner_1.returner)(className, "background-position-y", false, flag);
            case "background-repeat":
                return (0, returner_1.returner)(className, "background-repeat", false, flag);
            case "background-size":
                return (0, returner_1.returner)(className, "background-size", true, flag);
            case "block-size":
                return (0, returner_1.returner)(className, "block-size", true, flag);
            case "blur":
                return (0, returner_1.returner)(className, "blur", false, flag);
            case "border":
                return (0, returner_1.returner)(className, "border", true, flag);
            case "border-block":
                return (0, returner_1.returner)(className, "border-block", true, flag);
            case "border-block-color":
                return (0, returner_1.returner)(className, "border-block-color", false, flag);
            case "border-block-end":
                return (0, returner_1.returner)(className, "border-block-end", true, flag);
            case "border-block-end-color":
                return (0, returner_1.returner)(className, "border-block-end-color", false, flag);
            case "border-block-end-style":
                return (0, returner_1.returner)(className, "border-block-end-style", false, flag);
            case "border-block-end-width":
                return (0, returner_1.returner)(className, "border-block-end-width", true, flag);
            case "border-block-start":
                return (0, returner_1.returner)(className, "border-block-start", false, flag);
            case "border-block-start-color":
                return (0, returner_1.returner)(className, "border-block-start-color", false, flag);
            case "border-block-start-style":
                return (0, returner_1.returner)(className, "border-block-start-style", false, flag);
            case "border-block-start-width":
                return (0, returner_1.returner)(className, "border-block-start-width", true, flag);
            case "border-block-style":
                return (0, returner_1.returner)(className, "border-block-style", false, flag);
            case "border-block-width":
                return (0, returner_1.returner)(className, "border-block-width", true, flag);
            case "border-bottom":
                return (0, returner_1.returner)(className, "border-bottom", true, flag);
            case "border-bottom-color":
                return (0, returner_1.returner)(className, "border-bottom-color", false, flag);
            case "border-bottom-left-radius":
                return (0, returner_1.returner)(className, "border-bottom-left-radius", true, flag);
            case "border-bottom-right-radius":
                return (0, returner_1.returner)(className, "border-bottom-right-radius", true, flag);
            case "border-bottom-style":
                return (0, returner_1.returner)(className, "border-bottom-style", false, flag);
            case "border-bottom-width":
                return (0, returner_1.returner)(className, "border-bottom-width", true, flag);
            case "border-collapse":
                return (0, returner_1.returner)(className, "border-collapse", false, flag);
            case "border-color":
                return (0, returner_1.returner)(className, "border-color", false, flag);
            case "border-end-end-radius":
                return (0, returner_1.returner)(className, "border-end-end-radius", true, flag);
            case "border-end-start-radius":
                return (0, returner_1.returner)(className, "border-end-start-radius", false, flag);
            case "border-image":
                return (0, returner_1.returner)(className, "border-image", false, flag);
            case "border-image-outset":
                return (0, returner_1.returner)(className, "border-image-outset", false, flag);
            case "border-image-repeat":
                return (0, returner_1.returner)(className, "border-image-repeat", false, flag);
            case "border-image-slice":
                return (0, returner_1.returner)(className, "border-image-slice", false, flag);
            case "border-image-source":
                return (0, returner_1.returner)(className, "border-image-source", false, flag);
            case "border-image-width":
                return (0, returner_1.returner)(className, "border-image-width", true, flag);
            case "border-inline":
                return (0, returner_1.returner)(className, "border-inline", false, flag);
            case "border-inline-color":
                return (0, returner_1.returner)(className, "border-inline-color", false, flag);
            case "border-inline-end":
                return (0, returner_1.returner)(className, "border-inline-end", true, flag);
            case "border-inline-end-color":
                return (0, returner_1.returner)(className, "border-inline-end-color", false, flag);
            case "border-inline-end-style":
                return (0, returner_1.returner)(className, "border-inline-end-style", false, flag);
            case "border-inline-end-width":
                return (0, returner_1.returner)(className, "border-inline-end-width", true, flag);
            case "border-inline-start":
                return (0, returner_1.returner)(className, "border-inline-start", false, flag);
            case "border-inline-start-color":
                return (0, returner_1.returner)(className, "border-inline-start-color", false, flag);
            case "border-inline-start-style":
                return (0, returner_1.returner)(className, "border-inline-start-style", false, flag);
            case "border-inline-start-width":
                return (0, returner_1.returner)(className, "border-inline-start-width", true, flag);
            case "border-inline-style":
                return (0, returner_1.returner)(className, "border-inline-style", false, flag);
            case "border-inline-width":
                return (0, returner_1.returner)(className, "border-inline-width", true, flag);
            case "border-left":
                return (0, returner_1.returner)(className, "border-left", true, flag);
            case "border-left-color":
                return (0, returner_1.returner)(className, "border-left-color", false, flag);
            case "border-left-style":
                return (0, returner_1.returner)(className, "border-left-style", false, flag);
            case "border-left-width":
                return (0, returner_1.returner)(className, "border-left-width", true, flag);
            case "border-radius":
                return (0, returner_1.returner)(className, "border-radius", true, flag);
            case "border-right":
                return (0, returner_1.returner)(className, "border-right", true, flag);
            case "border-right-color":
                return (0, returner_1.returner)(className, "border-right-color", false, flag);
            case "border-right-style":
                return (0, returner_1.returner)(className, "border-right-style", false, flag);
            case "border-right-width":
                return (0, returner_1.returner)(className, "border-right-width", true, flag);
            case "border-spacing":
                return (0, returner_1.returner)(className, "border-spacing", true, flag);
            case "border-start-end-radius":
                return (0, returner_1.returner)(className, "border-start-end-radius", true, flag);
            case "border-start-start-radius":
                return (0, returner_1.returner)(className, "border-start-start-radius", true, flag);
            case "border-style":
                return (0, returner_1.returner)(className, "border-style", false, flag);
            case "border-top":
                return (0, returner_1.returner)(className, "border-top", true, flag);
            case "border-top-color":
                return (0, returner_1.returner)(className, "border-top-color", false, flag);
            case "border-top-left-radius":
                return (0, returner_1.returner)(className, "border-top-left-radius", true, flag);
            case "border-top-right-radius":
                return (0, returner_1.returner)(className, "border-top-right-radius", true, flag);
            case "border-top-style":
                return (0, returner_1.returner)(className, "border-top-style", false, flag);
            case "border-top-width":
                return (0, returner_1.returner)(className, "border-top-width", true, flag);
            case "border-width":
                return (0, returner_1.returner)(className, "border-width", true, flag);
            case "bottom":
                return (0, returner_1.returner)(className, "bottom", true, flag);
            case "box-decoration-break":
                return (0, returner_1.returner)(className, "box-decoration-break", false, flag);
            case "box-shadow":
                return (0, returner_1.returner)(className, "box-shadow", true, flag);
            case "box-sizing":
                return (0, returner_1.returner)(className, "box-sizing", false, flag);
            case "break-after":
                return (0, returner_1.returner)(className, "break-after", false, flag);
            case "break-before":
                return (0, returner_1.returner)(className, "break-before", false, flag);
            case "break-inside":
                return (0, returner_1.returner)(className, "break-inside", false, flag);
            case "brightness":
                return (0, returner_1.returner)(className, "brightness", false, flag);
            case "caption-side":
                return (0, returner_1.returner)(className, "caption-side", false, flag);
            case "caret-color":
                return (0, returner_1.returner)(className, "caret-color", false, flag);
            case "clear":
                return (0, returner_1.returner)(className, "clear", false, flag);
            case "clip":
                return (0, returner_1.returner)(className, "clip", false, flag);
            case "clip-path":
                return (0, returner_1.returner)(className, "clip-path", false, flag);
            case "color":
                return (0, returner_1.returner)(className, "color", false, flag);
            case "color-scheme":
                return (0, returner_1.returner)(className, "color-scheme", false, flag);
            case "column-count":
                return (0, returner_1.returner)(className, "column-count", false, flag);
            case "column-fill":
                return (0, returner_1.returner)(className, "column-fill", false, flag);
            case "column-gap":
                return (0, returner_1.returner)(className, "column-gap", true, flag);
            case "column-rule":
                return (0, returner_1.returner)(className, "column-rule", false, flag);
            case "column-rule-color":
                return (0, returner_1.returner)(className, "column-rule-color", false, flag);
            case "column-rule-style":
                return (0, returner_1.returner)(className, "column-rule-style", false, flag);
            case "column-rule-width":
                return (0, returner_1.returner)(className, "column-rule-width", false, flag);
            case "column-span":
                return (0, returner_1.returner)(className, "column-span", false, flag);
            case "column-width":
                return (0, returner_1.returner)(className, "column-width", true, flag);
            case "columns":
                return (0, returner_1.returner)(className, "columns", false, flag);
            case "contain":
                return (0, returner_1.returner)(className, "contain", false, flag);
            case "content":
                return (0, returner_1.returner)(className, "content", false, flag);
            case "content-visibility":
                return (0, returner_1.returner)(className, "content-visibility", false, flag);
            case "contrast":
                return (0, returner_1.returner)(className, "contrast", false, flag);
            case "counter-increment":
                return (0, returner_1.returner)(className, "counter-increment", false, flag);
            case "counter-reset":
                return (0, returner_1.returner)(className, "counter-reset", false, flag);
            case "counter-set":
                return (0, returner_1.returner)(className, "counter-set", false, flag);
            case "cursor":
                return (0, returner_1.returner)(className, "cursor", false, flag);
            case "direction":
                return (0, returner_1.returner)(className, "direction", false, flag);
            case "display":
                return (0, returner_1.returner)(className, "display", false, flag);
            case "drop-shadow":
                return (0, returner_1.returner)(className, "drop-shadow", false, flag);
            case "empty-cells":
                return (0, returner_1.returner)(className, "empty-cells", false, flag);
            case "filter":
                return (0, returner_1.returner)(className, "filter", false, flag);
            case "flex":
                return (0, returner_1.returner)(className, "flex", false, flag);
            case "flex-basis":
                return (0, returner_1.returner)(className, "flex-basis", false, flag);
            case "flex-direction":
                return (0, returner_1.returner)(className, "flex-direction", false, flag);
            case "flex-flow":
                return (0, returner_1.returner)(className, "flex-flow", false, flag);
            case "flex-grow":
                return (0, returner_1.returner)(className, "flex-grow", false, flag);
            case "flex-shrink":
                return (0, returner_1.returner)(className, "flex-shrink", false, flag);
            case "flex-wrap":
                return (0, returner_1.returner)(className, "flex-wrap", false, flag);
            case "float":
                return (0, returner_1.returner)(className, "float", false, flag);
            case "font":
                return (0, returner_1.returner)(className, "font", true, flag);
            case "font-family":
                return (0, returner_1.returner)(className, "font-family", false, flag);
            case "font-kerning":
                return (0, returner_1.returner)(className, "font-kerning", false, flag);
            case "font-language-override":
                return (0, returner_1.returner)(className, "font-language-override", false, flag);
            case "font-optical-sizing":
                return (0, returner_1.returner)(className, "font-optical-sizing", false, flag);
            case "font-size":
                return (0, returner_1.returner)(className, "font-size", true, flag);
            case "font-size-adjust":
                return (0, returner_1.returner)(className, "font-size-adjust", false, flag);
            case "font-stretch":
                return (0, returner_1.returner)(className, "font-stretch", false, flag);
            case "font-style":
                return (0, returner_1.returner)(className, "font-style", false, flag);
            case "font-synthesis":
                return (0, returner_1.returner)(className, "font-synthesis", false, flag);
            case "font-variant":
                return (0, returner_1.returner)(className, "font-variant", false, flag);
            case "font-variant-alternates":
                return (0, returner_1.returner)(className, "font-variant-alternates", false, flag);
            case "font-variant-caps":
                return (0, returner_1.returner)(className, "font-variant-caps", false, flag);
            case "font-variant-east-asian":
                return (0, returner_1.returner)(className, "font-variant-east-asian", false, flag);
            case "font-variant-ligatures":
                return (0, returner_1.returner)(className, "font-variant-ligatures", false, flag);
            case "font-variant-numeric":
                return (0, returner_1.returner)(className, "font-variant-numeric", false, flag);
            case "font-variant-position":
                return (0, returner_1.returner)(className, "font-variant-position", false, flag);
            case "font-variation-settings":
                return (0, returner_1.returner)(className, "font-variation-settings", false, flag);
            case "font-weight":
                return (0, returner_1.returner)(className, "font-weight", false, flag);
            case "forced-color-adjust":
                return (0, returner_1.returner)(className, "forced-color-adjust", false, flag);
            case "gap":
                return (0, returner_1.returner)(className, "gap", true, flag);
            case "grayscale":
                return (0, returner_1.returner)(className, "grayscale", false, flag);
            case "grid":
                return (0, returner_1.returner)(className, "grid", true, flag);
            case "grid-area":
                return (0, returner_1.returner)(className, "grid-area", false, flag);
            case "grid-auto-columns":
                return (0, returner_1.returner)(className, "grid-auto-columns", false, flag);
            case "grid-auto-flow":
                return (0, returner_1.returner)(className, "grid-auto-flow", false, flag);
            case "grid-auto-rows":
                return (0, returner_1.returner)(className, "grid-auto-rows", false, flag);
            case "grid-column":
                return (0, returner_1.returner)(className, "grid-column", false, flag);
            case "grid-column-end":
                return (0, returner_1.returner)(className, "grid-column-end", false, flag);
            case "grid-column-start":
                return (0, returner_1.returner)(className, "grid-column-start", false, flag);
            case "grid-row":
                return (0, returner_1.returner)(className, "grid-row", false, flag);
            case "grid-row-end":
                return (0, returner_1.returner)(className, "grid-row-end", false, flag);
            case "grid-row-start":
                return (0, returner_1.returner)(className, "grid-row-start", false, flag);
            case "grid-template":
                return (0, returner_1.returner)(className, "grid-template", false, flag);
            case "grid-template-areas":
                return (0, returner_1.returner)(className, "grid-template-areas", false, flag);
            case "grid-template-columns":
                return (0, returner_1.returner)(className, "grid-template-columns", true, flag);
            case "grid-template-rows":
                return (0, returner_1.returner)(className, "grid-template-rows", true, flag);
            case "hanging-punctuation":
                return (0, returner_1.returner)(className, "hanging-punctuation", false, flag);
            case "height":
                return (0, returner_1.returner)(className, "height", true, flag);
            case "hyphenate-character":
                return (0, returner_1.returner)(className, "hyphenate-character", false, flag);
            case "hyphens":
                return (0, returner_1.returner)(className, "hyphens", false, flag);
            case "image-orientation":
                return (0, returner_1.returner)(className, "image-orientation", false, flag);
            case "image-rendering":
                return (0, returner_1.returner)(className, "image-rendering", false, flag);
            case "image-resolution":
                return (0, returner_1.returner)(className, "image-resolution", false, flag);
            case "inherit":
                return (0, returner_1.returner)(className, "inherit", false, flag);
            case "initial":
                return (0, returner_1.returner)(className, "initial", false, flag);
            case "initial-letter":
                return (0, returner_1.returner)(className, "initial-letter", false, flag);
            case "initial-letter-align":
                return (0, returner_1.returner)(className, "initial-letter-align", false, flag);
            case "inline-size":
                return (0, returner_1.returner)(className, "inline-size", true, flag);
            case "inset":
                return (0, returner_1.returner)(className, "inset", true, flag);
            case "inset-block":
                return (0, returner_1.returner)(className, "inset-block", true, flag);
            case "inset-block-end":
                return (0, returner_1.returner)(className, "inset-block-end", true, flag);
            case "inset-block-start":
                return (0, returner_1.returner)(className, "inset-block-start", true, flag);
            case "inset-inline":
                return (0, returner_1.returner)(className, "inset-inline", true, flag);
            case "inset-inline-end":
                return (0, returner_1.returner)(className, "inset-inline-end", true, flag);
            case "inset-inline-start":
                return (0, returner_1.returner)(className, "inset-inline-start", true, flag);
            case "isolation":
                return (0, returner_1.returner)(className, "isolation", false, flag);
            case "justify-content":
                return (0, returner_1.returner)(className, "justify-content", false, flag);
            case "justify-items":
                return (0, returner_1.returner)(className, "justify-items", false, flag);
            case "justify-self":
                return (0, returner_1.returner)(className, "justify-self", false, flag);
            case "justify-tracks":
                return (0, returner_1.returner)(className, "justify-tracks", false, flag);
            case "left":
                return (0, returner_1.returner)(className, "left", true, flag);
            case "letter-spacing":
                return (0, returner_1.returner)(className, "letter-spacing", true, flag);
            case "line-break":
                return (0, returner_1.returner)(className, "line-break", false, flag);
            case "line-height":
                return (0, returner_1.returner)(className, "line-height", true, flag);
            case "line-height-step":
                return (0, returner_1.returner)(className, "line-height-step", false, flag);
            case "list-style":
                return (0, returner_1.returner)(className, "line-style", false, flag);
            case "list-style-image":
                return (0, returner_1.returner)(className, "list-style-image", false, flag);
            case "list-style-position":
                return (0, returner_1.returner)(className, "list-style-position", false, flag);
            case "list-style-type":
                return (0, returner_1.returner)(className, "list-style-type", false, flag);
            case "margin":
                return (0, returner_1.returner)(className, "margin", true, flag);
            case "margin-block":
                return (0, returner_1.returner)(className, "margin-block", true, flag);
            case "margin-block-end":
                return (0, returner_1.returner)(className, "margin-block-end", true, flag);
            case "margin-block-start":
                return (0, returner_1.returner)(className, "margin-block-start", true, flag);
            case "margin-bottom":
                return (0, returner_1.returner)(className, "margin-bottom", true, flag);
            case "margin-inline":
                return (0, returner_1.returner)(className, "margin-inline", true, flag);
            case "margin-inline-end":
                return (0, returner_1.returner)(className, "margin-inline-end", true, flag);
            case "margin-inline-start":
                return (0, returner_1.returner)(className, "margin-inline-start", true, flag);
            case "margin-left":
                return (0, returner_1.returner)(className, "margin-left", true, flag);
            case "margin-right":
                return (0, returner_1.returner)(className, "margin-right", true, flag);
            case "margin-top":
                return (0, returner_1.returner)(className, "margin-top", true, flag);
            case "margin-y":
                return (0, returner_1.returner)(className, "margin-top,margin-bottom", true, flag);
            case "margin-x":
                return (0, returner_1.returner)(className, "margin-right,margin-left", true, flag);
            case "margin-trim":
                return (0, returner_1.returner)(className, "margin-trim", false, flag);
            case "mask":
                return (0, returner_1.returner)(className, "mask", true, flag);
            case "mask-border":
                return (0, returner_1.returner)(className, "mask-border", false, flag);
            case "mask-border-mode":
                return (0, returner_1.returner)(className, "mask-border-mode", false, flag);
            case "mask-border-outset":
                return (0, returner_1.returner)(className, "mask-border-outset", false, flag);
            case "mask-border-repeat":
                return (0, returner_1.returner)(className, "mask-border-repeat", false, flag);
            case "mask-border-slice":
                return (0, returner_1.returner)(className, "mask-border-slice", false, flag);
            case "mask-border-source":
                return (0, returner_1.returner)(className, "mask-border-source", false, flag);
            case "mask-border-width":
                return (0, returner_1.returner)(className, "mask-border-width", true, flag);
            case "mask-clip":
                return (0, returner_1.returner)(className, "mask-clip", false, flag);
            case "mask-composite":
                return (0, returner_1.returner)(className, "mask-composite", false, flag);
            case "mask-image":
                return (0, returner_1.returner)(className, "mask-image", false, flag);
            case "mask-mode":
                return (0, returner_1.returner)(className, "mask-mode", false, flag);
            case "mask-origin":
                return (0, returner_1.returner)(className, "mask-origin", false, flag);
            case "mask-position":
                return (0, returner_1.returner)(className, "mask-position", false, flag);
            case "mask-repeat":
                return (0, returner_1.returner)(className, "mask-repeat", false, flag);
            case "mask-size":
                return (0, returner_1.returner)(className, "mask-size", true, flag);
            case "mask-type":
                return (0, returner_1.returner)(className, "mask-type", false, flag);
            case "masonry-auto-flow":
                return (0, returner_1.returner)(className, "masonry-auto-flow", false, flag);
            case "math-style":
                return (0, returner_1.returner)(className, "math-style", false, flag);
            case "matrix":
                return (0, returner_1.returner)(className, "matrix", false, flag);
            case "matrix3d":
                return (0, returner_1.returner)(className, "matrix3d", false, flag);
            case "max-block-size":
                return (0, returner_1.returner)(className, "max-block-size", true, flag);
            case "max-height":
                return (0, returner_1.returner)(className, "max-height", true, flag);
            case "max-inline-size":
                return (0, returner_1.returner)(className, "max-inline-size", true, flag);
            case "max-width":
                return (0, returner_1.returner)(className, "max-width", true, flag);
            case "min-block-size":
                return (0, returner_1.returner)(className, "min-block-size", true, flag);
            case "min-height":
                return (0, returner_1.returner)(className, "min-height", true, flag);
            case "min-inline-size":
                return (0, returner_1.returner)(className, "min-inline-size", true, flag);
            case "min-width":
                return (0, returner_1.returner)(className, "min-width", true, flag);
            case "mix-blend-mode":
                return (0, returner_1.returner)(className, "mix-blend-mode", false, flag);
            case "object-fit":
                return (0, returner_1.returner)(className, "object-fit", false, flag);
            case "object-position":
                return (0, returner_1.returner)(className, "object-position", false, flag);
            case "offset":
                return (0, returner_1.returner)(className, "offset", true, flag);
            case "offset-anchor":
                return (0, returner_1.returner)(className, "offset-anchor", false, flag);
            case "offset-distance":
                return (0, returner_1.returner)(className, "offset-distance", false, flag);
            case "offset-path":
                return (0, returner_1.returner)(className, "offset-path", false, flag);
            case "offset-position":
                return (0, returner_1.returner)(className, "offset-position", false, flag);
            case "offset-rotate":
                return (0, returner_1.returner)(className, "offset-rotate", false, flag);
            case "opacity":
                return (0, returner_1.returner)(className, "opacity", false, flag);
            case "order":
                return (0, returner_1.returner)(className, "order", false, flag);
            case "orphans":
                return (0, returner_1.returner)(className, "orphans", false, flag);
            case "outline":
                return (0, returner_1.returner)(className, "outline", true, flag);
            case "outline-color":
                return (0, returner_1.returner)(className, "outline-color", false, flag);
            case "outline-offset":
                return (0, returner_1.returner)(className, "outline-offset", false, flag);
            case "outline-style":
                return (0, returner_1.returner)(className, "outline-style", false, flag);
            case "outline-width":
                return (0, returner_1.returner)(className, "outline-width", true, flag);
            case "overflow":
                return (0, returner_1.returner)(className, "overflow", false, flag);
            case "overflow-anchor":
                return (0, returner_1.returner)(className, "overflow-anchor", false, flag);
            case "overflow-block":
                return (0, returner_1.returner)(className, "overflow-block", false, flag);
            case "overflow-clip-margin":
                return (0, returner_1.returner)(className, "overflow-clip-margin", false, flag);
            case "overflow-inline":
                return (0, returner_1.returner)(className, "overflow-inline", false, flag);
            case "overflow-wrap":
                return (0, returner_1.returner)(className, "overflow-wrap", false, flag);
            case "overflow-x":
                return (0, returner_1.returner)(className, "overflow-x", false, flag);
            case "overflow-y":
                return (0, returner_1.returner)(className, "overflow-y", false, flag);
            case "overscroll-behavior":
                return (0, returner_1.returner)(className, "overscroll-behavior", false, flag);
            case "overscroll-behavior-block":
                return (0, returner_1.returner)(className, "overscroll-behavior-block", false, flag);
            case "overscroll-behavior-inline":
                return (0, returner_1.returner)(className, "overscroll-behavior-inline", false, flag);
            case "overscroll-behavior-x":
                return (0, returner_1.returner)(className, "overscroll-behavior-x", false, flag);
            case "overscroll-behavior-y":
                return (0, returner_1.returner)(className, "overscroll-behavior-y", false, flag);
            case "padding":
                return (0, returner_1.returner)(className, "padding", true, flag);
            case "padding-block":
                return (0, returner_1.returner)(className, "padding-block", true, flag);
            case "padding-block-end":
                return (0, returner_1.returner)(className, "padding-block-end", true, flag);
            case "padding-block-start":
                return (0, returner_1.returner)(className, "padding-block-start", true, flag);
            case "padding-bottom":
                return (0, returner_1.returner)(className, "padding-bottom", true, flag);
            case "padding-inline":
                return (0, returner_1.returner)(className, "padding-inline", true, flag);
            case "padding-inline-end":
                return (0, returner_1.returner)(className, "padding-inline-end", true, flag);
            case "padding-inline-start":
                return (0, returner_1.returner)(className, "padding-inline-start", true, flag);
            case "padding-left":
                return (0, returner_1.returner)(className, "padding-left", true, flag);
            case "padding-right":
                return (0, returner_1.returner)(className, "padding-right", true, flag);
            case "padding-top":
                return (0, returner_1.returner)(className, "padding-top", true, flag);
            case "padding-y":
                return (0, returner_1.returner)(className, "padding-top,padding-bottom", true, flag);
            case "padding-x":
                return (0, returner_1.returner)(className, "padding-right,padding-left", true, flag);
            case "paint-order":
                return (0, returner_1.returner)(className, "paint-order", false, flag);
            case "perspective":
                return (0, returner_1.returner)(className, "perspective", false, flag);
            case "perspective-origin":
                return (0, returner_1.returner)(className, "perspective-origin", false, flag);
            case "place-content":
                return (0, returner_1.returner)(className, "place-content", false, flag);
            case "place-items":
                return (0, returner_1.returner)(className, "place-items", false, flag);
            case "place-self":
                return (0, returner_1.returner)(className, "place-self", false, flag);
            case "pointer-events":
                return (0, returner_1.returner)(className, "pointer-events", false, flag);
            case "position":
                return (0, returner_1.returner)(className, "position", false, flag);
            case "print-color-adjust":
                return (0, returner_1.returner)(className, "print-color-adjust", false, flag);
            case "quotes":
                return (0, returner_1.returner)(className, "quotes", false, flag);
            case "resize":
                return (0, returner_1.returner)(className, "resize", false, flag);
            case "revert":
                return (0, returner_1.returner)(className, "revert", false, flag);
            case "right":
                return (0, returner_1.returner)(className, "right", true, flag);
            case "rotate":
                return (0, returner_1.returner)(className, "rotate", false, flag);
            case "rotate3d":
                return (0, returner_1.returner)(className, "rotate3d", false, flag);
            case "rotateX":
                return (0, returner_1.returner)(className, "rotateX", false, flag);
            case "rotateY":
                return (0, returner_1.returner)(className, "rotateY", false, flag);
            case "rotateZ":
                return (0, returner_1.returner)(className, "rotateZ", false, flag);
            case "row-gap":
                return (0, returner_1.returner)(className, "row-gap", true, flag);
            case "ruby-align":
                return (0, returner_1.returner)(className, "ruby-align", false, flag);
            case "ruby-merge":
                return (0, returner_1.returner)(className, "ruby-merge", false, flag);
            case "ruby-position":
                return (0, returner_1.returner)(className, "ruby-position", false, flag);
            case "saturate":
                return (0, returner_1.returner)(className, "saturate", false, flag);
            case "scale":
                return (0, returner_1.returner)(className, "scale", false, flag);
            case "scale3d":
                return (0, returner_1.returner)(className, "scale3d", false, flag);
            case "scaleX":
                return (0, returner_1.returner)(className, "scaleX", false, flag);
            case "scaleY":
                return (0, returner_1.returner)(className, "scaleY", false, flag);
            case "scaleZ":
                return (0, returner_1.returner)(className, "scaleZ", false, flag);
            case "scroll-behavior":
                return (0, returner_1.returner)(className, "scroll-behaviour", false, flag);
            case "scroll-margin":
                return (0, returner_1.returner)(className, "scroll-margin", true, flag);
            case "scroll-margin-block":
                return (0, returner_1.returner)(className, "scroll-margin-block", true, flag);
            case "scroll-margin-block-end":
                return (0, returner_1.returner)(className, "scroll-margin-block-end", true, flag);
            case "scroll-margin-block-start":
                return (0, returner_1.returner)(className, "scroll-margin-block-start", true, flag);
            case "scroll-margin-bottom":
                return (0, returner_1.returner)(className, "scroll-margin-bottom", true, flag);
            case "scroll-margin-inline":
                return (0, returner_1.returner)(className, "scroll-margin-inline", true, flag);
            case "scroll-margin-inline-end":
                return (0, returner_1.returner)(className, "scroll-margin-inline", true, flag);
            case "scroll-margin-inline-start":
                return (0, returner_1.returner)(className, "scroll-margin-inline-start", true, flag);
            case "scroll-margin-left":
                return (0, returner_1.returner)(className, "scroll-margin-left", true, flag);
            case "scroll-margin-right":
                return (0, returner_1.returner)(className, "scroll-margin-right", true, flag);
            case "scroll-margin-top":
                return (0, returner_1.returner)(className, "scroll-margin-top", true, flag);
            case "scroll-padding":
                return (0, returner_1.returner)(className, "scroll-padding", true, flag);
            case "scroll-padding-block":
                return (0, returner_1.returner)(className, "scroll-padding-block", true, flag);
            case "scroll-padding-block-end":
                return (0, returner_1.returner)(className, "scroll-padding-block-end", true, flag);
            case "scroll-padding-block-start":
                return (0, returner_1.returner)(className, "scroll-padding-block-start", true, flag);
            case "scroll-padding-bottom":
                return (0, returner_1.returner)(className, "scroll-padding-bottom", true, flag);
            case "scroll-padding-inline":
                return (0, returner_1.returner)(className, "scroll-padding-inline", true, flag);
            case "scroll-padding-inline-end":
                return (0, returner_1.returner)(className, "scroll-padding-inline-end", true, flag);
            case "scroll-padding-inline-start":
                return (0, returner_1.returner)(className, "scroll-padding-inline-start", true, flag);
            case "scroll-padding-left":
                return (0, returner_1.returner)(className, "scroll-padding-left", true, flag);
            case "scroll-padding-right":
                return (0, returner_1.returner)(className, "scroll-padding-right", true, flag);
            case "scroll-padding-top":
                return (0, returner_1.returner)(className, "scroll-padding-top", true, flag);
            case "scroll-snap-align":
                return (0, returner_1.returner)(className, "scroll-snap-align", false, flag);
            case "scroll-snap-stop":
                return (0, returner_1.returner)(className, "scroll-snap-stop", false, flag);
            case "scroll-snap-type":
                return (0, returner_1.returner)(className, "scroll-snap-type", false, flag);
            case "scrollbar-color":
                return (0, returner_1.returner)(className, "scrollbar-color", false, flag);
            case "scrollbar-gutter":
                return (0, returner_1.returner)(className, "scrollbar-gutter", false, flag);
            case "scrollbar-width":
                return (0, returner_1.returner)(className, "scrollbar-width", true, flag);
            case "sepia":
                return (0, returner_1.returner)(className, "sepia", false, flag);
            case "shape-image-threshold":
                return (0, returner_1.returner)(className, "shape-image-threshold", false, flag);
            case "shape-margin":
                return (0, returner_1.returner)(className, "shape-margin", true, flag);
            case "shape-outside":
                return (0, returner_1.returner)(className, "shape-outside", false, flag);
            case "skew":
                return (0, returner_1.returner)(className, "skew", false, flag);
            case "skewX":
                return (0, returner_1.returner)(className, "skewX", false, flag);
            case "skewY":
                return (0, returner_1.returner)(className, "skewY", false, flag);
            case "tab-size":
                return (0, returner_1.returner)(className, "tab-size", false, flag);
            case "table-layout":
                return (0, returner_1.returner)(className, "table-layout", false, flag);
            case "text-align":
                return (0, returner_1.returner)(className, "text-align", false, flag);
            case "text-align-last":
                return (0, returner_1.returner)(className, "text-align-last", false, flag);
            case "text-combine-upright":
                return (0, returner_1.returner)(className, "text-combine-upright", false, flag);
            case "text-decoration":
                return (0, returner_1.returner)(className, "text-decoration", false, flag);
            case "text-decoration-color":
                return (0, returner_1.returner)(className, "text-decoration-color", false, flag);
            case "text-decoration-line":
                return (0, returner_1.returner)(className, "text-decoration-line", false, flag);
            case "text-decoration-skip":
                return (0, returner_1.returner)(className, "text-decoration-skip", false, flag);
            case "text-decoration-skip-ink":
                return (0, returner_1.returner)(className, "text-decoration-skip-ink", false, flag);
            case "text-decoration-style":
                return (0, returner_1.returner)(className, "text-decoration-style", false, flag);
            case "text-decoration-thickness":
                return (0, returner_1.returner)(className, "text-decoration-thickness", true, flag);
            case "text-emphasis":
                return (0, returner_1.returner)(className, "text-emphasis", false, flag);
            case "text-emphasis-color":
                return (0, returner_1.returner)(className, "text-emphasis-color", false, flag);
            case "text-emphasis-position":
                return (0, returner_1.returner)(className, "text-emphasis-position", false, flag);
            case "text-emphasis-style":
                return (0, returner_1.returner)(className, "text-emphasis-style", false, flag);
            case "text-indent":
                return (0, returner_1.returner)(className, "text-indent", true, flag);
            case "text-justify":
                return (0, returner_1.returner)(className, "text-justify", false, flag);
            case "text-orientation":
                return (0, returner_1.returner)(className, "text-orientation", false, flag);
            case "text-overflow":
                return (0, returner_1.returner)(className, "text-overflow", false, flag);
            case "text-rendering":
                return (0, returner_1.returner)(className, "text-rendering", false, flag);
            case "text-shadow":
                return (0, returner_1.returner)(className, "text-shadow", false, flag);
            case "text-size-adjust":
                return (0, returner_1.returner)(className, "text-size-adjust", false, flag);
            case "text-transform":
                return (0, returner_1.returner)(className, "text-transform", false, flag);
            case "text-underline-offset":
                return (0, returner_1.returner)(className, "text-underline-offset", false, flag);
            case "text-underline-position":
                return (0, returner_1.returner)(className, "text-underline-position", false, flag);
            case "top":
                return (0, returner_1.returner)(className, "top", true, flag);
            case "touch-action":
                return (0, returner_1.returner)(className, "touch-action", false, flag);
            case "transform":
                return (0, returner_1.returner)(className, "transform", false, flag);
            case "transform-box":
                return (0, returner_1.returner)(className, "transform-box", false, flag);
            case "transform-origin":
                return (0, returner_1.returner)(className, "transform-origin", false, flag);
            case "transform-style":
                return (0, returner_1.returner)(className, "transform-style", false, flag);
            case "transition":
                return (0, returner_1.returner)(className, "transition", false, flag);
            case "transition-delay":
                return (0, returner_1.returner)(className, "transition-delay", false, flag);
            case "transition-duration":
                return (0, returner_1.returner)(className, "transition-duration", false, flag);
            case "transition-property":
                return (0, returner_1.returner)(className, "transition-property", false, flag);
            case "transition-timing-function":
                return (0, returner_1.returner)(className, "transition-timing-function", false, flag);
            case "translate":
                return (0, returner_1.returner)(className, "translate", true, flag);
            case "translate3d":
                return (0, returner_1.returner)(className, "translate3d", true, flag);
            case "translateX":
                return (0, returner_1.returner)(className, "translateX", true, flag);
            case "translateY":
                return (0, returner_1.returner)(className, "translateY", true, flag);
            case "translateZ":
                return (0, returner_1.returner)(className, "translateZ", true, flag);
            case "unset":
                return (0, returner_1.returner)(className, "unset", false, flag);
            case "user-select":
                return (0, returner_1.returner)(className, "user-select", false, flag);
            case "vertical-align":
                return (0, returner_1.returner)(className, "vertical-align", false, flag);
            case "visibility":
                return (0, returner_1.returner)(className, "visibility", false, flag);
            case "white-space":
                return (0, returner_1.returner)(className, "white-space", false, flag);
            case "widows":
                return (0, returner_1.returner)(className, "widows", false, flag);
            case "width":
                return (0, returner_1.returner)(className, "width", true, flag);
            case "will-change":
                return (0, returner_1.returner)(className, "will-change", false, flag);
            case "word-break":
                return (0, returner_1.returner)(className, "word-break", false, flag);
            case "word-spacing":
                return (0, returner_1.returner)(className, "word-spacing", true, flag);
            case "word-wrap":
                return (0, returner_1.returner)(className, "word-wrap", false, flag);
            case "writing-mode":
                return (0, returner_1.returner)(className, "writing-mode", false, flag);
            case "z-index":
                return (0, returner_1.returner)(className, "z-index", false, flag);
            case "":
                return "";
        }
    };
    handleClasses$1.handleClasses = handleClasses;

    var base = {};

    Object.defineProperty(base, "__esModule", { value: true });
    base.base = void 0;
    base.base = "\n:root {\n  --animation-delay: 0.25s;\n  --animation-duration: 1s;\n  --animation-repeat: 1;\n  --base: 0.45rem;\n  --border-color: black;\n  --border-style: solid;\n  --border-width: 1.15px;\n  --desktop-min-width: 112.505rem;\n  --font-size: 1rem;\n  --laptop-max-width: 112.5rem;\n  --laptop-min-width: 75.005rem;\n  --line-height: 1rem;\n  --margin-bottom: 1rem;\n  --mobile-max-width: 37.5rem;\n  --mobile-min-width: 10rem;\n  --radius: 0.375px;\n  --shadow: 8px 8px 8px 0 rgba(0, 0, 0, 0.2);\n  --shadow-1: 7px 7px 10px 3px rgba(0, 0, 0, 0.2);\n  --shadow-2: 7px 7px 10px 3px rgba(0, 0, 0, 0.3);\n  --shadow-3: 7px 7px 11px 4px rgba(0, 0, 0, 0.4);\n  --shadow-4: 7px 8px 11px 4px rgba(0, 0, 0, 0.4);\n  --shadow-5: 7px 8px 12px 4px rgba(0, 0, 0, 0.4);\n  --shadow-6: 9px 8px 12px 4px rgba(0, 0, 0, 0.4);\n  --shadow-7: 9px 9px 13px 4px rgba(0, 0, 0, 0.3);\n  --shadow-8: 9px 9px 13px 4px rgba(0, 0, 0, 0.5);\n  --shadow-9: 9px 9px 14px 4px rgba(0, 0, 0, 0.7);\n  --shadow-10: 9px 9px 14px 4px rgba(0, 0, 0, 0.7);\n  --shadow-11: 9px 9px 14px 4px rgba(0, 0, 0, 0.7);\n  --shadow-12: 9px 9px 14px 4px rgba(0, 0, 0, 0.7);\n  --tablet-max-width: 75rem;\n  --tablet-min-width: 37.505rem;\n  --times: times, serif;\n  --title-size: 2.5rem;\n  --wrapper-max-width: 60rem;\n  --athelas: athelas, georgia, serif;\n  --avenir: avenir next, avenir, sans-serif;\n  --baskerville: baskerville, serif;\n  --bodoni: Bodoni MT, serif;\n  --calisto: Calisto MT, serif;\n  --courier: Courier Next, courier, monospace;\n  --garamold: garamond, serif;\n  --georgia: georgia, serif;\n  --helvetica: helvetica neue, helvetica, sans-serif;\n  --monospace: monospace;\n  --sans-serif: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;\n  --serif: serif;\n  --amazon: #ff9900;\n  --discord: #5865f2;\n  --facebook-old: #1877f2;\n  --facebook: #3b5998;\n  --github: #171515;\n  --gitlab: #171515;\n  --google: #4285f4;\n  --hackernews: #ff6600;\n  --instagram: #c32aa3;\n  --linkedin: #0a66c2;\n  --mastadon: #2b90d9;\n  --medium: #02b875;\n  --microsoft: #f35022;\n  --pinterest: #bd081c;\n  --quora: #aa2200;\n  --reddit: #ff5700;\n  --snapchat: #fffc00;\n  --soundcloud: #ff5500;\n  --spotify: #1ed760;\n  --telegram: #0088cc;\n  --tiktok: #010101;\n  --tumblr: #2c4762;\n  --twitch: #9146ff;\n  --twitter: #1da1f2;\n  --vimeo: #1ab7ea;\n  --whatsapp: #25d366;\n  --yahoo: #430297;\n  --youtube: #ff0000;\n}\n\n\n* {\n  box-sizing: border-box;\n  background-repeat: no-repeat;\n  border: none;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n\nbody,\nhtml {\n  line-height: 1.15;\n  word-break: normal;\n  scroll-behavior: smooth;\n  min-height: 100vh;\n  font-family: var(--sans-serif, sans-serif);\n  color-scheme: light dark }\n\nmain,\nheader,\nfooter,\narticle,\naside,\nsection,\ndetails {\n  display: block }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 250;\n  line-height: inherit;\n  color: inherit;\n  font-family: var(--serif, sans-serif) }\n\nul {\n  list-style: none }\n\nol {\n  list-style: decimal }\n\ndt {\n  font-weight: bold }\n\nhr {\n  height: 0;\n  width: 100%;\n  overflow: hidden;\n  border: 0;\n  border-top: 1px solid;\n  margin-top: 0.5em;\n  margin-bottom: 1em;\n  color: currentColor }\n\naddress {\n  font-style: inherit }\n\na {\n  background-color: transparent;\n  color: inherit;\n  cursor: pointer;\n  text-decoration: none }\n\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  text-decoration: underline dotted }\n\nb,\nstrong {\n  font-weight: bolder }\n\npre,\ncode,\nsamp,\nkbd {\n  font-family: var(--monospace, monospace);\n  font-size: 90% }\n\nsmall,\nsub,\nsup {\n  font-size: 80% }\n\nsub,\nsup {\n  line-height: 0 }\n\nsup {\n  vertical-align: super }\n\nsub {\n  vertical-align: sub }\n\nblockquote {\n  font-family: var(--sans-serif, sans-serif);\n  font-style: italic;\n  padding-left: 1em }\n\nu {\n  text-decoration: underline }\n\ns {\n  text-decoration: line-through }\n\nsvg {\n  cursor: pointer;\n  fill: currentColor }\n\ncanvas,\niframe,\nsvg,\nimg,\nvideo,\naudio {\n  display: inline-block;\n  vertical-align: middle;\n  border-style: none;\n  height: auto }\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  color: inherit;\n  background-color: transparent;\n  border-radius: 0 }\n\ntextarea {\n  min-height: 2em;\n  overflow: auto;\n  resize: vertical }\n\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  appearance: button }\n\n[type=checkbox] {\n  appearance: checkbox }\n\n[type=radio] {\n  appearance: radio }\n\nselect {\n  text-transform: none }\n\nbutton[disabled],\n[type=button][disabled],\n[type=reset][disabled],\n[type=submit][disabled] {\n  cursor: not-allowed }\n\nfieldset {\n  font-family: inherit;\n  border: none }\n\ninput {\n  overflow: hidden }\n\nlabel {\n  display: inline-block;\n  font-size: inherit;\n  font-weight: inherit }\n\nlegend {\n  display: table;\n  color: inherit;\n  max-width: 100% }\n\nprogress {\n  vertical-align: baseline }\n\nsummary {\n  display: list-item }\n\nnoscript,\n[hidden] {\n  display: none }\n\ninput[readonly],\nselect[readonly],\ntextarea[readonly] {\n  border-color: rgba(0, 0, 0, 0.12);\n  color: rgba(0, 0, 0, 0.54) }\n\ninput:disabled,\ninput[readonly],\ntextarea:disabled,\ntextarea[readonly] {\n  background-color: lightgrey;\n  cursor: not-allowed }\n\n@media (prefers-reduced-motion: reduce) {\n  * {\n    transition: none;\n  }\n  html {\n    scroll-behavior: auto;\n  }\n}\n[data-theme=light] {\n  background-color: white;\n  color: black }\n\n[data-theme=dark] {\n  background-color: #0d0d0d;\n  color: white }\n\n.alert {\n  min-height: 3rem;\n  min-width: 10rem;\n  z-index: 1500;\n  opacity: 0.85 }\n\n.avatar {\n  border-radius: 50%;\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  aspect-ratio: 1 }\n\n.avatar * {\n  font-size: 1.25rem;\n  margin: 0;\n  padding: 0 }\n\n.box {\n  width: 100%;\n  display: inline-block;\n  min-height: 3rem }\n\n.box-group {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  position: relative }\n\n.box-group-item,\n.box-group,\n.box-group .box-group-item {\n  margin: 0 }\n\n.btn {\n  border: var(--border-color, black) var(--border-style, solid) var(--border-width, 1.15px);\n  cursor: pointer;\n  text-align: center;\n  font-family: var(--sans-serif, sans-serif);\n  padding: 0.5rem 0.75rem }\n\n.btn-floating {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  width: 2.5rem;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  padding: 0;\n  cursor: pointer;\n  vertical-align: middle }\n\n.btn-cta {\n  padding: 2.5rem 4rem }\n\n.carousel {\n  position: relative;\n  min-height: 50vh;\n  width: 100% }\n\n.dropdown-relative {\n  position: relative }\n\n.dropdown,\n.dropdown-relative,\n.dropdown-relative .dropdown {\n  position: absolute;\n  z-index: 1500;\n  min-width: 10rem;\n  top: calc(100% + 0.45rem);\n  right: 0 }\n\n.footer > * {\n  margin-bottom: 0 }\n\n.group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  vertical-align: middle;\n  align-items: stretch }\n\n.group [data-role-group-item],\n.group .item {\n  margin-bottom: 0 }\n\n.hero {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 20rem;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover }\n\n.list {\n  position: relative }\n\n.list .item {\n  padding-top: 0.35rem;\n  padding-bottom: 0.35rem }\n\n.message {\n  min-width: 10rem }\n\n.modal {\n  position: absolute;\n  min-width: 10rem;\n  min-height: 6rem;\n  z-index: 1500;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) }\n\n.notepad {\n  border-left: 0.6rem solid black;\n  border-top-left-radius: 0.7rem;\n  border-bottom-left-radius: 0.7rem;\n  min-height: 3em;\n  padding: 0.5rem 0.5rem 0.75rem }\n\n.notification {\n  min-height: 3rem;\n  min-width: 10rem;\n  position: absolute;\n  position: fixed;\n  top: 3rem;\n  right: 1rem;\n  z-index: 1500;\n  opacity: 0.85 }\n\n.notification-group {\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.5rem;\n  position: fixed;\n  top: 3rem;\n  right: 1rem }\n\n.notification-group .notification {\n  min-height: 3rem;\n  min-width: 10rem;\n  z-index: 1500;\n  opacity: 0.85 }\n\n.pagination {\n  list-style: none;\n  display: flex;\n  flex-direction: row }\n\n.pagination .pagination-item {\n  margin: 0 0.08rem }\n\n.panel * {\n  margin-bottom: 0;\n  z-index: 1000 }\n\n.panel.panel-sticky {\n  position: sticky;\n  top: 0;\n  width: 100% }\n\n.panel.panel-fixed {\n  position: fixed;\n  top: 0;\n  width: 100% }\n\n.panel .content,\n.footer .content {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between }\n\n.parallax {\n  height: 500px;\n  overflow: hidden;\n  position: relative }\n\n.parallax .content {\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 10 }\n\n.preloader {\n  position: absolute;\n  display: block;\n  z-index: 1000;\n  background-color: black;\n  height: 150vh;\n  width: 150vw;\n  overflow: hidden }\n\n.progress {\n  background-color: rgb(219, 213, 213);\n  width: 15rem;\n  height: 2rem;\n  border: var(--border-style, solid) var(--border-width, 1.15px) var(--border-color, black) }\n\n .progress .progress-meter {\n  width: 15%;\n  height: 100%;\n  background-color: black }\n\ntable,\n.table {\n  border-top: 1px solid rgba(0, 0, 0, 0.5);\n  border-spacing: 0 }\n\ntable caption,\n.table caption {\n  padding: 0.5rem 0rem }\n\ntable thead th,\n.table thead th {\n  border: 0;\n  border-bottom: 2px solid rgba(0, 0, 0, 0.5);\n  border-spacing: 0;\n  text-align: left }\n\ntable tr,\n.table tr {\n  margin-bottom: 0.5rem;\n  border: none;\n  border-spacing: 0 }\n\ntable tr th:not(last-child),\ntable tr td:not(last-child),\n.table tr th:not(last-child),\n.table tr td:not(last-child) {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n  padding: 16px;\n  vertical-align: inherit }\n\ntable tr tr:last-child th,\n.table tr tr:last-child th {\n  border-bottom: 0 }\n\ntable tr tr:last-child tr,\n.table tr tr:last-child tr {\n  border-bottom: 0 }\n\ntable td,\n.table td {\n  border: none }\n\ntable tfoot tr,\n.table tfoot tr {\n  text-align: left;\n  border-spacing: 0 }\n\ntable tfoot td,\n.table tfoot td {\n  color: rgba(0, 0, 0, 0.6);\n  padding: 1rem 4px }\n\ntable:last-child,\n.table:last-child {\n  border-bottom: 0 }\n\ntable tr:hover,\n.table tr:hover {\n  opacity: 90% }\n\ntable.table-striped tr:nth-of-type(odd),\n.table.table-striped tr:nth-of-type(odd) {\n  background-color: lightgrey }\n\ntable.table-striped tr:nth-of-type(odd),\n.table.table-striped tr:nth-of-type(odd) {\n  width: 100% }\n\ntable tr.highlight,\n.table tr.highlight {\n  background-color: lightgrey }\n\n.toggler {\n  position: absolute;\n  font-weight: 900;\n  font-size: 1.25rem;\n  right: 0.8rem;\n  top: 0.6rem;\n  cursor: pointer;\n  content: \"x\";\n  color: red }\n\n.toggler:hover {\n  opacity: 0.95 }\n\n.tooltip {\n  position: absolute;\n  visibility: hidden;\n  z-index: 400;\n  bottom: 4rem }\n\n.tooltip.active {\n  font-size: 0.85rem }\n\n.tooltip.active {\n  visibility: visible }\n\n.content {\n  padding: 0.5rem 0.65rem }\n\ninput[type=checkbox],\ninput[type=radio] {\n  margin-right: 1rem }\n\n.select,\nselect,\ninput[type=text],\ninput[type=password],\ninput[type=email],\n.input,\ntextarea,\nbutton {\n  padding: 0.5rem;\n  border: var(--border-style, solid) var(--border-width, 1.15px) var(--border-color, black) }\n\nbutton,\n.btn {\n  border: var(--border-color, black) var(--border-style, solid) var(--border-width, 1.15px);\n  cursor: pointer;\n  text-align: center;\n  font-family: var(--sans-serif, sans-serif);\n  padding: 0.5rem 0.75rem }\n\n.btn-floating {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  width: 2.5rem;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  padding: 0;\n  cursor: pointer;\n  vertical-align: middle }\n\n.btn-cta {\n  padding: 2.5rem 4rem }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0 }\n\n.hoverable {\n  transition: box-shadow 0.25s }\n\n.hoverable:hover {\n  box-shadow: var(--shadow) }\n\n.img,\n.video,\n.img-thumb,\n.video-thumb,\n.thumbnail,\n.thumb {\n  height: auto;\n  width: auto }\n\n.responsive {\n  height: auto;\n  width: 100% }\n\n.absolute-fill {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0 }\n\n.absolute-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) }\n\n.absolute-center-x {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) }\n\n.absolute-center-y {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) }\n\n.indent {\n  text-indent: 1rem;\n  margin-top: 0;\n  margin-bottom: 0 }\n\n.hide {\n  display: none;\n  visibility: hidden;\n  opacity: 0 }\n\n.show {\n  display: block;\n  visibility: visible;\n  opacity: 1 }\n\n.flow > :where(:not(:last-child)) {\n  margin-bottom: 1rem }\n\nh1,\n.h1,\n.title {\n  font-size: var(--title-size, 2.5rem) }\n\nh2,\n.h2,\n.subtitle {\n  font-size: calc(var(--title-size, 2.5rem) - 0.25rem) }\n\nh3,\n.h3 {\n  font-size: calc(var(--title-size, 2.5rem) - 0.5rem) }\n\nh4,\n.h4 {\n  font-size: calc(var(--title-size, 2.5rem) - 0.75rem) }\n\nh5,\n.h5 {\n  font-size: calc(var(--title-size, 2.5rem) - 1rem) }\n\nh6,\n.h6 {\n  font-size: calc(var(--title-size, 2.5rem) - 1.25rem) }\n\n@media only screen and (max-width: 45rem) {\n  h1,\n  .h1,\n  .title {\n    font-size: calc(var(--title-size, 2.5rem) - 0.5rem) }\n\n  h2,\n  .h2,\n  .subtitle {\n    font-size: calc(var(--title-size, 2.5rem) - 0.75rem) }\n\n  h3,\n  .h3 {\n    font-size: calc(var(--title-size, 2.5rem) - 1.25rem) }\n\n  h4,\n  .h4 {\n    font-size: calc(var(--title-size, 2.5rem) - 1rem) }\n\n  h5,\n  .h5 {\n    font-size: calc(var(--title-size, 2.5rem) - 1.25rem) }\n\n  h6,\n  .h6 {\n    font-size: calc(var(--title-size, 2.5rem) - 1.25rem) }\n}\n\n.text-link {\n  cursor: pointer }\n\n.text-link:hover {\n  text-decoration: underline;\n  transition: text-decoration 0.5s ease }\n\n.text-truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100% }\n\n.p, .lead {\n  line-height: var(--line-height);\n  font-size: var(--font-size) }\n\n.wrapper {\n  max-width: 60rem;\n  margin-left: auto;\n  margin-right: auto }\n\n.wrapper-responsive {\n  width: 100%;\n  padding-left: 0.125rem;\n  padding-right: 0.125rem }\n\n@media (min-width: 36rem) {\n  .wrapper {\n    max-width: 33.75rem }\n}\n@media (min-width: 48rem) {\n  .wrapper {\n    max-width: 45rem }\n}\n@media (min-width: 62rem) {\n  .wrapper {\n    max-width: 60rem }\n}\n@media (min-width: 75rem) {\n  .wrapper {\n    max-width: 71.25rem }\n}\n@media (min-width: 87.5rem) {\n  .wrapper {\n    max-width: 82.5rem }\n}\n\n.input, .textarea {\n  border-radius: 4px;\n}\n\n.textarea {\n  width: 100%;\n  height: 150px;\n  padding: 12px 20px;\n  resize: none;\n}\n\n.input {\n  max-width: 190px;\n  padding: .15rem .5rem;\n  min-height: 40px;\n  outline: none;\n  line-height: 1.15;\n}\n\n\n\n";

    Object.defineProperty(build, "__esModule", { value: true });
    var body = document.querySelector("body");
    // functions
    var getBrowserClasses_1 = getBrowserClasses$1;
    var handleClasses_1 = handleClasses$1;
    // includes
    var base_1 = base;
    var stylePlaceholder = "";
    var classes = (0, getBrowserClasses_1.getBrowserClasses)();
    classes.forEach(function (element) {
        stylePlaceholder = "".concat(stylePlaceholder).concat((0, handleClasses_1.handleClasses)(element));
    });
    body.innerHTML = "\n    <style>\n      ".concat(base_1.base, "\n      ").concat(stylePlaceholder, "\n      </style>\n      ").concat(body.innerHTML, "\n");
    console.log("".concat(stylePlaceholder));

    return build;

})();
