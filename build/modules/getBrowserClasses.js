"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrowserClasses = void 0;
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
exports.getBrowserClasses = getBrowserClasses;
