"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleClasses = void 0;
var checkClassTypeHandler_1 = require("./checkClassTypeHandler");
var returner_1 = require("./returner");
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
exports.handleClasses = handleClasses;
