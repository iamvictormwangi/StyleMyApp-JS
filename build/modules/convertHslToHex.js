"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHslToHex = void 0;
var convertRgbToHex_1 = require("./convertRgbToHex");
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
    return convertRgbToHex_1.convertRgbToHex.apply(void 0, [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]);
};
exports.convertHslToHex = convertHslToHex;
