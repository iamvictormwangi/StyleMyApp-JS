"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertRgbToHex = void 0;
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
exports.convertRgbToHex = convertRgbToHex;
