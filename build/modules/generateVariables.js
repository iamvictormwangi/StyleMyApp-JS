"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateVariables = void 0;
var generateVariables = function (variable) {
    var x = variable.replace(":", "\\:");
    return x.replace("\\", "");
};
exports.generateVariables = generateVariables;
