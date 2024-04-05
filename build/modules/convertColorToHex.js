"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertColorToHex = void 0;
var data_1 = require("./../data/data");
var convertColorToHex = function (color) {
    if (color === void 0) { color = ""; }
    for (var index = 0; index < data_1.colors.length; index++) {
        if (data_1.colors[index].name.includes(color)) {
            return data_1.colors[index].hex;
        }
    }
    console.error("color was not found ".concat(color));
};
exports.convertColorToHex = convertColorToHex;
