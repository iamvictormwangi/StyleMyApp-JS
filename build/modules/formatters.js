"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPropertyValue = exports.formatClassName = void 0;
var generateComplement_1 = require("./generateComplement");
var lighten_1 = require("./lighten");
var darken_1 = require("./darken");
var formatClassName = function (className) {
    var x = className;
    x = x.replaceAll("#", "\\#");
    x = x.replaceAll("%", "\\%");
    x = x.replaceAll("!", "\\!");
    x = x.replaceAll(":hover", "\\:hover:hover");
    x = x.replaceAll(":hvr", "\\:hvr:hover");
    x = x.replaceAll(":focus", "\\:focus:focus");
    x = x.replaceAll(":fcs", "\\:fcs:focus");
    x = x.replaceAll(":odd", "\\:odd::nth-of-type(odd)");
    x = x.replaceAll(":even", "\\:even::nth-of-type(even)");
    x = x.replaceAll(":active", "\\:active:active");
    x = x.replaceAll(":disabled", "\\:disabled:disabled");
    x = x.replaceAll(":visited", "\\:visited:visited");
    x = x.replaceAll(":first-child", "\\:first-child:first-child");
    x = x.replaceAll(":last-child", "\\:last-child:last-child");
    x = x.replaceAll("[", "\\[");
    x = x.replaceAll("]", "\\]");
    x = x.replaceAll("(", "\\(");
    x = x.replaceAll(")", "\\)");
    x = x.replaceAll(",", "\\,");
    x = x.replaceAll(".", "\\.");
    x = x.replaceAll("/", "\\/");
    return x;
};
exports.formatClassName = formatClassName;
var formatPropertyValue = function (value) {
    var x = value;
    x = x.replace(":hvr", "");
    x = x.replace(":fcs", "");
    x = x.replace(":odd", "");
    x = x.replace(":even", "");
    x = x.replace(":active", "");
    x = x.replace(":visited", "");
    x = x.replace(":first-child", "");
    x = x.replace(":last-child", "");
    x = x.replace("!", "");
    x = x.replace("flex-col", "column");
    // create variables
    if (x.startsWith("z-"))
        x = x.replace("z-", "");
    if (x.startsWith("writing-mode-"))
        x = x.replace("writing-mode-", "");
    if (x.startsWith("word-wrap-"))
        x = x.replace("word-wrap-", "");
    if (x.startsWith("word-spacing-"))
        x = x.replace("word-spacing-", "");
    if (x.startsWith("word-break-"))
        x = x.replace("word-break-", "");
    if (x.startsWith("will-change-"))
        x = x.replace("will-change-", "");
    if (x.startsWith("widows-"))
        x = x.replace("widows-", "");
    if (x.startsWith("white-sp-"))
        x = x.replace("white-sp-", "");
    if (x.startsWith("w-"))
        x = x.replace("w-", "");
    if (x.startsWith("visibility-"))
        x = x.replace("visibility-", "");
    if (x.startsWith("v-align-"))
        x = x.replace("v-align-", "");
    if (x.startsWith("user-select-"))
        x = x.replace("user-select-", "");
    if (x.startsWith("unset-"))
        x = x.replace("unset-", "");
    if (x.startsWith("text-underline-position-"))
        x = x.replace("text-underline-position-", "");
    if (x.startsWith("text-underline-offset-"))
        x = x.replace("text-underline-offset-", "");
    if (x.startsWith("text-transform-"))
        x = x.replace("text-transform-", "");
    if (x.startsWith("text-size-adjust-"))
        x = x.replace("text-size-adjust-", "");
    if (x.startsWith("text-sh-"))
        x = x.replace("text-sh-", "");
    if (x.startsWith("text-rendering-"))
        x = x.replace("text-rendering-", "");
    if (x.startsWith("text-overflow-"))
        x = x.replace("text-overflow-", "");
    if (x.startsWith("text-orientation-"))
        x = x.replace("text-orientation-", "");
    if (x.startsWith("text-justify-"))
        x = x.replace("text-justify-", "");
    if (x.startsWith("text-indent-"))
        x = x.replace("text-indent-", "");
    if (x.startsWith("text-emphasis-style-"))
        x = x.replace("text-emphasis-style-", "");
    if (x.startsWith("text-emphasis-position-"))
        x = x.replace("text-emphasis-position-", "");
    if (x.startsWith("text-emphasis-color-"))
        x = x.replace("text-emphasis-color-", "");
    if (x.startsWith("text-emphasis-"))
        x = x.replace("text-emphasis-", "");
    if (x.startsWith("text-decoration-thickness-"))
        x = x.replace("text-decoration-thickness-", "");
    if (x.startsWith("text-decoration-style-"))
        x = x.replace("text-decoration-style-", "");
    if (x.startsWith("text-decoration-skip-ink-"))
        x = x.replace("text-decoration-skip-ink-", "");
    if (x.startsWith("text-decoration-skip-"))
        x = x.replace("text-decoration-skip-", "");
    if (x.startsWith("text-decoration-line-"))
        x = x.replace("text-decoration-line-", "");
    if (x.startsWith("text-decoration-color-"))
        x = x.replace("text-decoration-color-", "");
    if (x.startsWith("text-decoration-"))
        x = x.replace("text-decoration-", "");
    if (x.startsWith("text-combine-upright-"))
        x = x.replace("text-combine-upright-", "");
    if (x.startsWith("text-align-last-"))
        x = x.replace("text-align-last-", "");
    if (x.startsWith("text-align-"))
        x = x.replace("text-align-", "");
    if (x.startsWith("text-"))
        x = x.replace("text-", "");
    if (x.startsWith("transz-"))
        x = x.replace("transz-", "");
    if (x.startsWith("transy-"))
        x = x.replace("transy-", "");
    if (x.startsWith("transx-"))
        x = x.replace("transx-", "");
    if (x.startsWith("translate-"))
        x = x.replace("translate-", "");
    if (x.startsWith("transition-timing-function-"))
        x = x.replace("transition-timing-function-", "");
    if (x.startsWith("transition-property-"))
        x = x.replace("transition-property-", "");
    if (x.startsWith("transition-duration-"))
        x = x.replace("transition-duration-", "");
    if (x.startsWith("transition-delay-"))
        x = x.replace("transition-delay-", "");
    if (x.startsWith("transition-"))
        x = x.replace("transition-", "");
    if (x.startsWith("transform-style-"))
        x = x.replace("transform-style-", "");
    if (x.startsWith("transform-origin-"))
        x = x.replace("transform-origin-", "");
    if (x.startsWith("transform-box-"))
        x = x.replace("transform-box-", "");
    if (x.startsWith("transform-"))
        x = x.replace("transform-", "");
    if (x.startsWith("trans3d-"))
        x = x.replace("trans3d-", "");
    if (x.startsWith("touch-action-"))
        x = x.replace("touch-action-", "");
    if (x.startsWith("table-layout-"))
        x = x.replace("table-layout-", "");
    if (x.startsWith("tab-size-"))
        x = x.replace("tab-size-", "");
    if (x.startsWith("t-"))
        x = x.replace("t-", "");
    if (x.startsWith("skewy-"))
        x = x.replace("skewy-", "");
    if (x.startsWith("skewx-"))
        x = x.replace("skewx-", "");
    if (x.startsWith("skew-"))
        x = x.replace("skew-", "");
    if (x.startsWith("shape-outside-"))
        x = x.replace("shape-outside-", "");
    if (x.startsWith("shape-margin-"))
        x = x.replace("shape-margin-", "");
    if (x.startsWith("shape-image-threshold-"))
        x = x.replace("shape-image-threshold-", "");
    if (x.startsWith("sh-"))
        x = x.replace("sh-", "");
    if (x.startsWith("sepia-"))
        x = x.replace("sepia-", "");
    if (x.startsWith("self-"))
        x = x.replace("self-", "");
    if (x.startsWith("scrollbar-w-"))
        x = x.replace("scrollbar-w-", "");
    if (x.startsWith("scrollbar-gutter-"))
        x = x.replace("scrollbar-gutter-", "");
    if (x.startsWith("scrollbar-color-"))
        x = x.replace("scrollbar-color-", "");
    if (x.startsWith("scroll-snap-type-"))
        x = x.replace("scroll-snap-type-", "");
    if (x.startsWith("scroll-snap-stop-"))
        x = x.replace("scroll-snap-stop-", "");
    if (x.startsWith("scroll-snap-align-"))
        x = x.replace("scroll-snap-align-", "");
    if (x.startsWith("scroll-p-t-"))
        x = x.replace("scroll-p-t-", "");
    if (x.startsWith("scroll-p-r-"))
        x = x.replace("scroll-p-r-", "");
    if (x.startsWith("scroll-p-l-"))
        x = x.replace("scroll-p-l-", "");
    if (x.startsWith("scroll-p-inline-start-"))
        x = x.replace("scroll-p-inline-start-", "");
    if (x.startsWith("scroll-p-inline-end-"))
        x = x.replace("scroll-p-inline-end-", "");
    if (x.startsWith("scroll-p-inline-"))
        x = x.replace("scroll-p-inline-", "");
    if (x.startsWith("scroll-p-block-start-"))
        x = x.replace("scroll-p-block-start-", "");
    if (x.startsWith("scroll-p-block-end-"))
        x = x.replace("scroll-p-block-end-", "");
    if (x.startsWith("scroll-p-block-"))
        x = x.replace("scroll-p-block-", "");
    if (x.startsWith("scroll-p-b-"))
        x = x.replace("scroll-p-b-", "");
    if (x.startsWith("scroll-p-"))
        x = x.replace("scroll-p-", "");
    if (x.startsWith("scroll-m-t-"))
        x = x.replace("scroll-m-t-", "");
    if (x.startsWith("scroll-m-r-"))
        x = x.replace("scroll-m-r-", "");
    if (x.startsWith("scroll-m-l-"))
        x = x.replace("scroll-m-l-", "");
    if (x.startsWith("scroll-m-inline-start-"))
        x = x.replace("scroll-m-inline-start-", "");
    if (x.startsWith("scroll-m-inline-end-"))
        x = x.replace("scroll-m-inline-end-", "");
    if (x.startsWith("scroll-m-inline-"))
        x = x.replace("scroll-m-inline-", "");
    if (x.startsWith("scroll-m-bottom-"))
        x = x.replace("scroll-m-bottom-", "");
    if (x.startsWith("scroll-m-block-start-"))
        x = x.replace("scroll-m-block-start-", "");
    if (x.startsWith("scroll-m-block-end-"))
        x = x.replace("scroll-m-block-end-", "");
    if (x.startsWith("scroll-m-block-"))
        x = x.replace("scroll-m-block-", "");
    if (x.startsWith("scroll-m-"))
        x = x.replace("scroll-m-", "");
    if (x.startsWith("scroll-behavior-"))
        x = x.replace("scroll-behavior-", "");
    if (x.startsWith("scalez-"))
        x = x.replace("scalez-", "");
    if (x.startsWith("scaley-"))
        x = x.replace("scaley-", "");
    if (x.startsWith("scalex-"))
        x = x.replace("scalex-", "");
    if (x.startsWith("scale3d-"))
        x = x.replace("scale3d-", "");
    if (x.startsWith("scale-"))
        x = x.replace("scale-", "");
    if (x.startsWith("scale-"))
        x = x.replace("scale-", "");
    if (x.startsWith("saturate-"))
        x = x.replace("saturate-", "");
    if (x.startsWith("ruby-position-"))
        x = x.replace("ruby-position-", "");
    if (x.startsWith("ruby-merge-"))
        x = x.replace("ruby-merge-", "");
    if (x.startsWith("ruby-align-"))
        x = x.replace("ruby-align-", "");
    if (x.startsWith("row-gap-"))
        x = x.replace("row-gap-", "");
    if (x.startsWith("rotz-"))
        x = x.replace("rotz-", "");
    if (x.startsWith("roty-"))
        x = x.replace("roty-", "");
    if (x.startsWith("rotx-"))
        x = x.replace("rotx-", "");
    if (x.startsWith("rotate-"))
        x = x.replace("rotate-", "");
    if (x.startsWith("rot3d-"))
        x = x.replace("rot3d-", "");
    if (x.startsWith("revert-"))
        x = x.replace("revert-", "");
    if (x.startsWith("resize-"))
        x = x.replace("resize-", "");
    if (x.startsWith("r-"))
        x = x.replace("r-", "");
    if (x.startsWith("quotes-"))
        x = x.replace("quotes-", "");
    if (x.startsWith("py-"))
        x = x.replace("py-", "");
    if (x.startsWith("px-"))
        x = x.replace("px-", "");
    if (x.startsWith("pt-"))
        x = x.replace("pt-", "");
    if (x.startsWith("print-color-adjust-"))
        x = x.replace("print-color-adjust-", "");
    if (x.startsWith("pr-"))
        x = x.replace("pr-", "");
    if (x.startsWith("position-"))
        x = x.replace("position-", "");
    if (x.startsWith("plc-self-"))
        x = x.replace("plc-self-", "");
    if (x.startsWith("plc-items-"))
        x = x.replace("plc-items-", "");
    if (x.startsWith("plc-content-"))
        x = x.replace("plc-content-", "");
    if (x.startsWith("pl-"))
        x = x.replace("pl-", "");
    if (x.startsWith("perspective-origin-"))
        x = x.replace("perspective-origin-", "");
    if (x.startsWith("perspective-"))
        x = x.replace("perspective-", "");
    if (x.startsWith("perspective-"))
        x = x.replace("perspective-", "");
    if (x.startsWith("pe-"))
        x = x.replace("pe-", "");
    if (x.startsWith("pb-"))
        x = x.replace("pb-", "");
    if (x.startsWith("paint-order-"))
        x = x.replace("paint-order-", "");
    if (x.startsWith("p-inline-start-"))
        x = x.replace("p-inline-start-", "");
    if (x.startsWith("p-inline-end-"))
        x = x.replace("p-inline-end-", "");
    if (x.startsWith("p-inline-"))
        x = x.replace("p-inline-", "");
    if (x.startsWith("p-block-start-"))
        x = x.replace("p-block-start-", "");
    if (x.startsWith("p-block-end-"))
        x = x.replace("p-block-end-", "");
    if (x.startsWith("p-block-"))
        x = x.replace("p-block-", "");
    if (x.startsWith("p-"))
        x = x.replace("p-", "");
    if (x.startsWith("ov-y-"))
        x = x.replace("ov-y-", "");
    if (x.startsWith("ov-x-"))
        x = x.replace("ov-x-", "");
    if (x.startsWith("ov-wrap-"))
        x = x.replace("ov-wrap-", "");
    if (x.startsWith("ov-inline-"))
        x = x.replace("ov-inline-", "");
    if (x.startsWith("ov-clip-margin-"))
        x = x.replace("ov-clip-margin-", "");
    if (x.startsWith("ov-block-"))
        x = x.replace("ov-block-", "");
    if (x.startsWith("ov-anchor-"))
        x = x.replace("ov-anchor-", "");
    if (x.startsWith("ov-"))
        x = x.replace("ov-", "");
    if (x.startsWith("ot-w-"))
        x = x.replace("ot-w-", "");
    if (x.startsWith("ot-style-"))
        x = x.replace("ot-style-", "");
    if (x.startsWith("ot-offset-"))
        x = x.replace("ot-offset-", "");
    if (x.startsWith("ot-color-"))
        x = x.replace("ot-color-", "");
    if (x.startsWith("ot-"))
        x = x.replace("ot-", "");
    if (x.startsWith("os-behavior-y-"))
        x = x.replace("os-behavior-y-", "");
    if (x.startsWith("os-behavior-x-"))
        x = x.replace("os-behavior-x-", "");
    if (x.startsWith("os-behavior-inline-"))
        x = x.replace("os-behavior-inline-", "");
    if (x.startsWith("os-behavior-block-"))
        x = x.replace("os-behavior-block-", "");
    if (x.startsWith("os-behavior-"))
        x = x.replace("os-behavior-", "");
    if (x.startsWith("orphans-"))
        x = x.replace("orphans-", "");
    if (x.startsWith("op-"))
        x = x.replace("op-", "");
    if (x.startsWith("offset-rotate-"))
        x = x.replace("offset-rotate-", "");
    if (x.startsWith("offset-position-"))
        x = x.replace("offset-position-", "");
    if (x.startsWith("offset-path-"))
        x = x.replace("offset-path-", "");
    if (x.startsWith("offset-distance-"))
        x = x.replace("offset-distance-", "");
    if (x.startsWith("offset-anchor-"))
        x = x.replace("offset-anchor-", "");
    if (x.startsWith("offset-"))
        x = x.replace("offset-", "");
    if (x.startsWith("od-"))
        x = x.replace("od-", "");
    if (x.startsWith("object-position-"))
        x = x.replace("object-position-", "");
    if (x.startsWith("object-fit-"))
        x = x.replace("object-fit-", "");
    if (x.startsWith("my-"))
        x = x.replace("my-", "");
    if (x.startsWith("mx-"))
        x = x.replace("mx-", "");
    if (x.startsWith("mt-"))
        x = x.replace("mt-", "");
    if (x.startsWith("mr-"))
        x = x.replace("mr-", "");
    if (x.startsWith("ml-"))
        x = x.replace("ml-", "");
    if (x.startsWith("mix-blend-mode-"))
        x = x.replace("mix-blend-mode-", "");
    if (x.startsWith("min-w-"))
        x = x.replace("min-w-", "");
    if (x.startsWith("min-inline-size-"))
        x = x.replace("min-inline-size-", "");
    if (x.startsWith("min-h-"))
        x = x.replace("min-h-", "");
    if (x.startsWith("min-block-size-"))
        x = x.replace("min-block-size-", "");
    if (x.startsWith("mb-"))
        x = x.replace("mb-", "");
    if (x.startsWith("max-w-"))
        x = x.replace("max-w-", "");
    if (x.startsWith("max-inline-size-"))
        x = x.replace("max-inline-size-", "");
    if (x.startsWith("max-h-"))
        x = x.replace("max-h-", "");
    if (x.startsWith("max-block-size-"))
        x = x.replace("max-block-size-", "");
    if (x.startsWith("matrix3d-"))
        x = x.replace("matrix3d-", "");
    if (x.startsWith("matrix-"))
        x = x.replace("matrix-", "");
    if (x.startsWith("math-style-"))
        x = x.replace("math-style-", "");
    if (x.startsWith("masonry-auto-flow-"))
        x = x.replace("masonry-auto-flow-", "");
    if (x.startsWith("mask-type-"))
        x = x.replace("mask-type-", "");
    if (x.startsWith("mask-size-"))
        x = x.replace("mask-size-", "");
    if (x.startsWith("mask-repeat-"))
        x = x.replace("mask-repeat-", "");
    if (x.startsWith("mask-position-"))
        x = x.replace("mask-position-", "");
    if (x.startsWith("mask-origin-"))
        x = x.replace("mask-origin-", "");
    if (x.startsWith("mask-mode-"))
        x = x.replace("mask-mode-", "");
    if (x.startsWith("mask-image-"))
        x = x.replace("mask-image-", "");
    if (x.startsWith("mask-composite-"))
        x = x.replace("mask-composite-", "");
    if (x.startsWith("mask-clip-"))
        x = x.replace("mask-clip-", "");
    if (x.startsWith("mask-bd-width-"))
        x = x.replace("mask-bd-width-", "");
    if (x.startsWith("mask-bd-source-"))
        x = x.replace("mask-bd-source-", "");
    if (x.startsWith("mask-bd-slice-"))
        x = x.replace("mask-bd-slice-", "");
    if (x.startsWith("mask-bd-repeat-"))
        x = x.replace("mask-bd-repeat-", "");
    if (x.startsWith("mask-bd-outset-"))
        x = x.replace("mask-bd-outset-", "");
    if (x.startsWith("mask-bd-mode-"))
        x = x.replace("mask-bd-mode-", "");
    if (x.startsWith("mask-bd-"))
        x = x.replace("mask-bd-", "");
    if (x.startsWith("mask-"))
        x = x.replace("mask-", "");
    if (x.startsWith("m-trim-"))
        x = x.replace("m-trim-", "");
    if (x.startsWith("m-inline-start-"))
        x = x.replace("m-inline-start-", "");
    if (x.startsWith("m-inline-end-"))
        x = x.replace("m-inline-end-", "");
    if (x.startsWith("m-inline-"))
        x = x.replace("m-inline-", "");
    if (x.startsWith("m-block-start-"))
        x = x.replace("m-block-start-", "");
    if (x.startsWith("m-block-end-"))
        x = x.replace("m-block-end-", "");
    if (x.startsWith("m-block-"))
        x = x.replace("m-block-", "");
    if (x.startsWith("m-"))
        x = x.replace("m-", "");
    if (x.startsWith("ls-type-"))
        x = x.replace("ls-type-", "");
    if (x.startsWith("ls-position-"))
        x = x.replace("ls-position-", "");
    if (x.startsWith("ls-image-"))
        x = x.replace("ls-image-", "");
    if (x.startsWith("ls-"))
        x = x.replace("ls-", "");
    if (x.startsWith("lh-step-"))
        x = x.replace("lh-step-", "");
    if (x.startsWith("lh-"))
        x = x.replace("lh-", "");
    if (x.startsWith("letter-sp-"))
        x = x.replace("letter-sp-", "");
    if (x.startsWith("lb-"))
        x = x.replace("lb-", "");
    if (x.startsWith("l-"))
        x = x.replace("l-", "");
    if (x.startsWith("jt-"))
        x = x.replace("jt-", "");
    if (x.startsWith("js-"))
        x = x.replace("js-", "");
    if (x.startsWith("ji-"))
        x = x.replace("ji-", "");
    if (x.startsWith("jc-"))
        x = x.replace("jc-", "");
    if (x.startsWith("items-"))
        x = x.replace("items-", "");
    if (x.startsWith("isolation-"))
        x = x.replace("isolation-", "");
    if (x.startsWith("inset-inline-start-"))
        x = x.replace("inset-inline-start-", "");
    if (x.startsWith("inset-inline-end-"))
        x = x.replace("inset-inline-end-", "");
    if (x.startsWith("inset-inline-"))
        x = x.replace("inset-inline-", "");
    if (x.startsWith("inset-block-start-"))
        x = x.replace("inset-block-start-", "");
    if (x.startsWith("inset-block-end-"))
        x = x.replace("inset-block-end-", "");
    if (x.startsWith("inset-block-"))
        x = x.replace("inset-block-", "");
    if (x.startsWith("inset-"))
        x = x.replace("inset-", "");
    if (x.startsWith("inline-size-"))
        x = x.replace("inline-size-", "");
    if (x.startsWith("initial-letter-align-"))
        x = x.replace("initial-letter-align-", "");
    if (x.startsWith("initial-letter-"))
        x = x.replace("initial-letter-", "");
    if (x.startsWith("initial-"))
        x = x.replace("initial-", "");
    if (x.startsWith("inherit-"))
        x = x.replace("inherit-", "");
    if (x.startsWith("img-resolution-"))
        x = x.replace("img-resolution-", "");
    if (x.startsWith("img-rendering-"))
        x = x.replace("img-rendering-", "");
    if (x.startsWith("img-orientation-"))
        x = x.replace("img-orientation-", "");
    if (x.startsWith("hyphens-"))
        x = x.replace("hyphens-", "");
    if (x.startsWith("hyphenate-character-"))
        x = x.replace("hyphenate-character-", "");
    if (x.startsWith("hanging-punctuation-"))
        x = x.replace("hanging-punctuation-", "");
    if (x.startsWith("h-"))
        x = x.replace("h-", "");
    if (x.startsWith("grid-template-rows-"))
        x = x.replace("grid-template-rows-", "");
    if (x.startsWith("grid-template-columns-"))
        x = x.replace("grid-template-columns-", "");
    if (x.startsWith("grid-template-areas-"))
        x = x.replace("grid-template-areas-", "");
    if (x.startsWith("grid-template-"))
        x = x.replace("grid-template-", "");
    if (x.startsWith("grid-row-start-"))
        x = x.replace("grid-row-start-", "");
    if (x.startsWith("grid-row-end-"))
        x = x.replace("grid-row-end-", "");
    if (x.startsWith("grid-row-"))
        x = x.replace("grid-row-", "");
    if (x.startsWith("grid-column-start-"))
        x = x.replace("grid-column-start-", "");
    if (x.startsWith("grid-column-end-"))
        x = x.replace("grid-column-end-", "");
    if (x.startsWith("grid-column-"))
        x = x.replace("grid-column-", "");
    if (x.startsWith("grid-auto-rows-"))
        x = x.replace("grid-auto-rows-", "");
    if (x.startsWith("grid-auto-flow-"))
        x = x.replace("grid-auto-flow-", "");
    if (x.startsWith("grid-auto-columns-"))
        x = x.replace("grid-auto-columns-", "");
    if (x.startsWith("grid-area-"))
        x = x.replace("grid-area-", "");
    if (x.startsWith("grid-"))
        x = x.replace("grid-", "");
    if (x.startsWith("grayscale-"))
        x = x.replace("grayscale-", "");
    if (x.startsWith("gap-x-"))
        x = x.replace("gap-x-", "");
    if (x.startsWith("gap-y-"))
        x = x.replace("gap-y-", "");
    if (x.startsWith("gap-"))
        x = x.replace("gap-", "");
    if (x.startsWith("forced-color-adjust-"))
        x = x.replace("forced-color-adjust-", "");
    if (x.startsWith("font-weight-"))
        x = x.replace("font-weight-", "");
    if (x.startsWith("font-weit-"))
        x = x.replace("font-weit-", "");
    if (x.startsWith("font-variation-settings-"))
        x = x.replace("font-variation-settings-", "");
    if (x.startsWith("font-variant-position-"))
        x = x.replace("font-variant-position-", "");
    if (x.startsWith("font-variant-numeric-"))
        x = x.replace("font-variant-numeric-", "");
    if (x.startsWith("font-variant-ligatures-"))
        x = x.replace("font-variant-ligatures-", "");
    if (x.startsWith("font-variant-east-asian-"))
        x = x.replace("font-variant-east-asian-", "");
    if (x.startsWith("font-variant-caps-"))
        x = x.replace("font-variant-caps-", "");
    if (x.startsWith("font-variant-alternates-"))
        x = x.replace("font-variant-alternates-", "");
    if (x.startsWith("font-variant-"))
        x = x.replace("font-variant-", "");
    if (x.startsWith("font-synthesis-"))
        x = x.replace("font-synthesis-", "");
    if (x.startsWith("font-style-"))
        x = x.replace("font-style-", "");
    if (x.startsWith("font-stretch-"))
        x = x.replace("font-stretch-", "");
    if (x.startsWith("font-size-adjust-"))
        x = x.replace("font-size-adjust-", "");
    if (x.startsWith("font-size-"))
        x = x.replace("font-size-", "");
    if (x.startsWith("font-optical-sizing-"))
        x = x.replace("font-optical-sizing-", "");
    if (x.startsWith("font-language-override-"))
        x = x.replace("font-language-override-", "");
    if (x.startsWith("font-kerning-"))
        x = x.replace("font-kerning-", "");
    if (x.startsWith("font-family-"))
        x = x.replace("font-family-", "");
    if (x.startsWith("font-"))
        x = x.replace("font-", "");
    if (x.startsWith("flex-wrap-"))
        x = x.replace("flex-wrap-", "");
    if (x.startsWith("flex-shrink-"))
        x = x.replace("flex-shrink-", "");
    if (x.startsWith("flex-grow-"))
        x = x.replace("flex-grow-", "");
    if (x.startsWith("flex-flow-"))
        x = x.replace("flex-flow-", "");
    if (x.startsWith("flex-direction-"))
        x = x.replace("flex-direction-", "");
    if (x.startsWith("flex-basis-"))
        x = x.replace("flex-basis-", "");
    if (x.startsWith("flex-"))
        x = x.replace("flex-", "");
    if (x.startsWith("fl-"))
        x = x.replace("fl-", "");
    if (x.startsWith("filter-"))
        x = x.replace("filter-", "");
    if (x.startsWith("empty-cells-"))
        x = x.replace("empty-cells-", "");
    if (x.startsWith("drop-shadow-"))
        x = x.replace("drop-shadow-", "");
    if (x.startsWith("direction-"))
        x = x.replace("direction-", "");
    if (x.startsWith("d-"))
        x = x.replace("d-", "");
    if (x.startsWith("cu-"))
        x = x.replace("cu-", "");
    if (x.startsWith("counter-set-"))
        x = x.replace("counter-set-", "");
    if (x.startsWith("counter-reset-"))
        x = x.replace("counter-reset-", "");
    if (x.startsWith("counter-increment-"))
        x = x.replace("counter-increment-", "");
    if (x.startsWith("contrast-"))
        x = x.replace("contrast-", "");
    if (x.startsWith("content-visibility-"))
        x = x.replace("content-visibility-", "");
    if (x.startsWith("content-"))
        x = x.replace("content-", "");
    if (x.startsWith("content-"))
        x = x.replace("content-", "");
    if (x.startsWith("contain-"))
        x = x.replace("contain-", "");
    if (x.startsWith("cols-"))
        x = x.replace("cols-", "");
    if (x.startsWith("color-scheme-"))
        x = x.replace("color-scheme-", "");
    if (x.startsWith("color-"))
        x = x.replace("color-", "");
    if (x.startsWith("col-w-"))
        x = x.replace("col-w-", "");
    if (x.startsWith("col-span-"))
        x = x.replace("col-span-", "");
    if (x.startsWith("col-rule-width-"))
        x = x.replace("col-rule-width-", "");
    if (x.startsWith("col-rule-style-"))
        x = x.replace("col-rule-style-", "");
    if (x.startsWith("col-rule-color-"))
        x = x.replace("col-rule-color-", "");
    if (x.startsWith("col-rule-"))
        x = x.replace("col-rule-", "");
    if (x.startsWith("col-gap-"))
        x = x.replace("col-gap-", "");
    if (x.startsWith("col-fill-"))
        x = x.replace("col-fill-", "");
    if (x.startsWith("col-count-"))
        x = x.replace("col-count-", "");
    if (x.startsWith("clip-path-"))
        x = x.replace("clip-path-", "");
    if (x.startsWith("clip-"))
        x = x.replace("clip-", "");
    if (x.startsWith("clear-"))
        x = x.replace("clear-", "");
    if (x.startsWith("caret-color-"))
        x = x.replace("caret-color-", "");
    if (x.startsWith("caption-side-"))
        x = x.replace("caption-side-", "");
    if (x.startsWith("brightness-"))
        x = x.replace("brightness-", "");
    if (x.startsWith("box-sizing-"))
        x = x.replace("box-sizing-", "");
    if (x.startsWith("box-decoration-break-"))
        x = x.replace("box-decoration-break-", "");
    if (x.startsWith("blur-"))
        x = x.replace("blur-", "");
    if (x.startsWith("block-size-"))
        x = x.replace("block-size-", "");
    if (x.startsWith("bi-"))
        x = x.replace("bi-", "");
    if (x.startsWith("bg-size-"))
        x = x.replace("bg-size-", "");
    if (x.startsWith("bg-repeat-"))
        x = x.replace("bg-repeat-", "");
    if (x.startsWith("bg-position-y-"))
        x = x.replace("bg-position-y-", "");
    if (x.startsWith("bg-position-x-"))
        x = x.replace("bg-position-x-", "");
    if (x.startsWith("bg-position-"))
        x = x.replace("bg-position-", "");
    if (x.startsWith("bg-origin-"))
        x = x.replace("bg-origin-", "");
    if (x.startsWith("bg-image-"))
        x = x.replace("bg-image-", "");
    if (x.startsWith("bg-color-"))
        x = x.replace("bg-color-", "");
    if (x.startsWith("bg-clip-"))
        x = x.replace("bg-clip-", "");
    if (x.startsWith("bg-blend-mode-"))
        x = x.replace("bg-blend-mode-", "");
    if (x.startsWith("bg-attachment-"))
        x = x.replace("bg-attachment-", "");
    if (x.startsWith("bg-"))
        x = x.replace("bg-", "");
    if (x.startsWith("bd-w-"))
        x = x.replace("bd-w-", "");
    if (x.startsWith("bd-t-w-"))
        x = x.replace("bd-t-w-", "");
    if (x.startsWith("bd-t-style-"))
        x = x.replace("bd-t-style-", "");
    if (x.startsWith("radius-t-r-"))
        x = x.replace("radius-t-r-", "");
    if (x.startsWith("radius-t-l-"))
        x = x.replace("radius-t-l-", "");
    if (x.startsWith("bd-t-color-"))
        x = x.replace("bd-t-color-", "");
    if (x.startsWith("bd-t-"))
        x = x.replace("bd-t-", "");
    if (x.startsWith("bd-style-"))
        x = x.replace("bd-style-", "");
    if (x.startsWith("radius-start-start-"))
        x = x.replace("radius-start-start-", "");
    if (x.startsWith("radius-start-end-"))
        x = x.replace("radius-start-end-", "");
    if (x.startsWith("bd-spacing-"))
        x = x.replace("bd-spacing-", "");
    if (x.startsWith("radius-"))
        x = x.replace("radius-", "");
    if (x.startsWith("bd-r-w-"))
        x = x.replace("bd-r-w-", "");
    if (x.startsWith("bd-r-style-"))
        x = x.replace("bd-r-style-", "");
    if (x.startsWith("bd-r-color-"))
        x = x.replace("bd-r-color-", "");
    if (x.startsWith("bd-r-"))
        x = x.replace("bd-r-", "");
    if (x.startsWith("bd-l-w-"))
        x = x.replace("bd-l-w-", "");
    if (x.startsWith("bd-l-style-"))
        x = x.replace("bd-l-style-", "");
    if (x.startsWith("bd-l-color-"))
        x = x.replace("bd-l-color-", "");
    if (x.startsWith("bd-l-"))
        x = x.replace("bd-l-", "");
    if (x.startsWith("bd-inline-w-"))
        x = x.replace("bd-inline-w-", "");
    if (x.startsWith("bd-inline-style-"))
        x = x.replace("bd-inline-style-", "");
    if (x.startsWith("bd-inline-start-w-"))
        x = x.replace("bd-inline-start-w-", "");
    if (x.startsWith("bd-inline-start-style-"))
        x = x.replace("bd-inline-start-style-", "");
    if (x.startsWith("bd-inline-start-color-"))
        x = x.replace("bd-inline-start-color-", "");
    if (x.startsWith("bd-inline-start-"))
        x = x.replace("bd-inline-start-", "");
    if (x.startsWith("bd-inline-end-w-"))
        x = x.replace("bd-inline-end-w-", "");
    if (x.startsWith("bd-inline-end-style-"))
        x = x.replace("bd-inline-end-style-", "");
    if (x.startsWith("bd-inline-end-color-"))
        x = x.replace("bd-inline-end-color-", "");
    if (x.startsWith("bd-inline-end-"))
        x = x.replace("bd-inline-end-", "");
    if (x.startsWith("bd-inline-color-"))
        x = x.replace("bd-inline-color-", "");
    if (x.startsWith("bd-inline-"))
        x = x.replace("bd-inline-", "");
    if (x.startsWith("bd-img-w-"))
        x = x.replace("bd-img-w-", "");
    if (x.startsWith("bd-img-source-"))
        x = x.replace("bd-img-source-", "");
    if (x.startsWith("bd-img-slice-"))
        x = x.replace("bd-img-slice-", "");
    if (x.startsWith("bd-img-repeat-"))
        x = x.replace("bd-img-repeat-", "");
    if (x.startsWith("bd-img-outset-"))
        x = x.replace("bd-img-outset-", "");
    if (x.startsWith("bd-img-"))
        x = x.replace("bd-img-", "");
    if (x.startsWith("radius-end-start-"))
        x = x.replace("radius-end-start-", "");
    if (x.startsWith("radius-end-end-"))
        x = x.replace("radius-end-end-", "");
    if (x.startsWith("bd-color-"))
        x = x.replace("bd-color-", "");
    if (x.startsWith("bd-collapse-"))
        x = x.replace("bd-collapse-", "");
    if (x.startsWith("bd-block-w-"))
        x = x.replace("bd-block-w-", "");
    if (x.startsWith("bd-block-style-"))
        x = x.replace("bd-block-style-", "");
    if (x.startsWith("bd-block-start-w-"))
        x = x.replace("bd-block-start-w-", "");
    if (x.startsWith("bd-block-start-style-"))
        x = x.replace("bd-block-start-style-", "");
    if (x.startsWith("bd-block-start-color-"))
        x = x.replace("bd-block-start-color-", "");
    if (x.startsWith("bd-block-start-"))
        x = x.replace("bd-block-start-", "");
    if (x.startsWith("bd-block-end-width-"))
        x = x.replace("bd-block-end-width-", "");
    if (x.startsWith("bd-block-end-style-"))
        x = x.replace("bd-block-end-style-", "");
    if (x.startsWith("bd-block-end-color-"))
        x = x.replace("bd-block-end-color-", "");
    if (x.startsWith("bd-block-end-"))
        x = x.replace("bd-block-end-", "");
    if (x.startsWith("bd-block-color-"))
        x = x.replace("bd-block-color-", "");
    if (x.startsWith("bd-block-"))
        x = x.replace("bd-block-", "");
    if (x.startsWith("bd-b-w-"))
        x = x.replace("bd-b-w-", "");
    if (x.startsWith("bd-b-style-"))
        x = x.replace("bd-b-style-", "");
    if (x.startsWith("radius-b-r-"))
        x = x.replace("radius-b-r-", "");
    if (x.startsWith("radius-b-l-"))
        x = x.replace("radius-b-l-", "");
    if (x.startsWith("bd-b-color-"))
        x = x.replace("bd-b-color-", "");
    if (x.startsWith("bd-b-"))
        x = x.replace("bd-b-", "");
    if (x.startsWith("bd-"))
        x = x.replace("bd-", "");
    if (x.startsWith("bb-"))
        x = x.replace("bb-", "");
    if (x.startsWith("backface-visibility-"))
        x = x.replace("backface-visibility-", "");
    if (x.startsWith("backdrop-filter-"))
        x = x.replace("backdrop-filter-", "");
    if (x.startsWith("ba-"))
        x = x.replace("ba-", "");
    if (x.startsWith("b-"))
        x = x.replace("b-", "");
    if (x.startsWith("ar-"))
        x = x.replace("ar-", "");
    if (x.startsWith("ap-"))
        x = x.replace("ap-", "");
    if (x.startsWith("anime-timing-function-"))
        x = x.replace("anime-timing-function-", "");
    if (x.startsWith("anime-timeline-"))
        x = x.replace("anime-timeline-", "");
    if (x.startsWith("anime-play-state-"))
        x = x.replace("anime-play-state-", "");
    if (x.startsWith("anime-name-"))
        x = x.replace("anime-name-", "");
    if (x.startsWith("anime-iteration-count-"))
        x = x.replace("anime-iteration-count-", "");
    if (x.startsWith("anime-fill-mode-"))
        x = x.replace("anime-fill-mode-", "");
    if (x.startsWith("anime-duration-"))
        x = x.replace("anime-duration-", "");
    if (x.startsWith("anime-direction-"))
        x = x.replace("anime-direction-", "");
    if (x.startsWith("anime-delay-"))
        x = x.replace("anime-delay-", "");
    if (x.startsWith("anime-"))
        x = x.replace("anime-", "");
    if (x.startsWith("all-"))
        x = x.replace("all-", "");
    if (x.startsWith("align-tracks-"))
        x = x.replace("align-tracks-", "");
    if (x.startsWith("align-self-"))
        x = x.replace("align-self-", "");
    if (x.startsWith("align-items-"))
        x = x.replace("align-items-", "");
    if (x.startsWith("align-content-"))
        x = x.replace("align-content-", "");
    if (x.startsWith("accent-color-"))
        x = x.replace("accent-color-", "");
    // Handling array inputs
    if (x.startsWith("[")) {
        x = x.replaceAll(",", " ");
        x = x.replace("[", "");
        x = x.replace("]", "");
    }
    if (x.includes("complement") || x.includes("compl"))
        return (0, generateComplement_1.generateComplement)(x);
    if (x.includes("lighten")) {
        x = x.split("/");
        /* @ts-ignore */
        return lighten_1.lighten.apply(void 0, x);
    }
    if (x.includes("darken")) {
        x = x.split("/");
        /* @ts-ignore */
        return darken_1.darken.apply(void 0, x);
    }
    return x;
};
exports.formatPropertyValue = formatPropertyValue;
