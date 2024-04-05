"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var body = document.querySelector("body");
// functions
var getBrowserClasses_1 = require("./modules/getBrowserClasses");
var handleClasses_1 = require("./modules/handleClasses");
// includes
var base_1 = require("./base/base");
var stylePlaceholder = "";
var classes = (0, getBrowserClasses_1.getBrowserClasses)();
classes.forEach(function (element) {
    stylePlaceholder = "".concat(stylePlaceholder).concat((0, handleClasses_1.handleClasses)(element));
});
body.innerHTML = "\n    <style>\n      ".concat(base_1.base, "\n      ").concat(stylePlaceholder, "\n      </style>\n      ").concat(body.innerHTML, "\n");
console.log("".concat(stylePlaceholder));
