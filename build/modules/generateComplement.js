"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateComplement = void 0;
var convertRgbToHex_1 = require("./convertRgbToHex");
var convertHslToHex_1 = require("./convertHslToHex");
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
        return handleComplement(convertRgbToHex_1.convertRgbToHex.apply(void 0, x));
    }
    if (x.startsWith("hsl")) {
        x = x
            .replace("hsl(", "")
            .replace(")", "");
        x = x.split(",");
        /* @ts-ignore */
        return handleComplement(convertHslToHex_1.convertHslToHex.apply(void 0, x));
    }
    if (x.startsWith("#"))
        return handleComplement(x);
};
exports.generateComplement = generateComplement;
