"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lighten = void 0;
var convertRgbToHsl_1 = require("./convertRgbToHsl");
var convertHslToRgb_1 = require("./convertHslToRgb");
var convertHslToHex_1 = require("./convertHslToHex");
var convertRgbToHex_1 = require("./convertRgbToHex");
var convertColorToHex_1 = require("./convertColorToHex");
var componentToHex = function (c) {
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
        hsl[2] = Math.min(100, hsl[2] + Number(percent));
        // Convert HSL back to RGB
        var rgb = (0, convertHslToRgb_1.convertHslToRgb)(hsl[0], hsl[1], hsl[2]);
        // Format the RGB values into a hex color string
        return "#".concat(componentToHex(rgb[0])).concat(componentToHex(rgb[1])).concat(componentToHex(rgb[2]));
    }
};
exports.lighten = lighten;
