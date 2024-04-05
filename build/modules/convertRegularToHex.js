"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertRegularToHex = void 0;
var formatters_1 = require("./formatters");
var convertRegularToHex = function (color) {
    if (color === void 0) { color = ""; }
    console.log("called the convert regular to hex");
    if (color === "") {
        console.log("Red was not passed");
        console.log("Hother");
    }
    color = (0, formatters_1.formatPropertyValue)(color);
    console.log("WTF");
    console.log("WTF");
    console.log("WTF");
    console.log("WTF");
    console.log("WTF");
    console.log("WTF");
    console.log("WTF");
    console.log("after formatting color in my formatter ", color);
    /*
    for (let index = 0; index < colors.length; index++) {
      if (colors[index].name.includes("red")) {
        return colors[index].hex
      } else {
        return color
      }
    }
    */
};
exports.convertRegularToHex = convertRegularToHex;
