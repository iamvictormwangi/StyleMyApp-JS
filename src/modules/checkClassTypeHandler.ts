import { colors, fonts, brandColors } from "./../data/data";
import { formatPropertyValue } from "./formatters";

export const checkClassTypeHandler = (className: string) => {

  // check for colors

  if (className.startsWith("bg-")) {
    const x = formatPropertyValue(className);
    if (colors.includes(x) || brandColors.includes(x)) return "background-color";
  }

  if (className.startsWith("bd-")) {
    const x = formatPropertyValue(className);
    if (colors.includes(x) || brandColors.includes(x)) return "border-color";
  }

  if (className.startsWith("caret-")) {
    const x = formatPropertyValue(className);
    if (colors.includes(x) || brandColors.includes(x)) return "caret-color";
  }

  if (className.startsWith("ot-")) {
    const x = formatPropertyValue(className);
    if (colors.includes(x) || brandColors.includes(x)) return "outline-color";
  }

  if (
    className.startsWith("bd-complement") ||
    className.startsWith("bd-lighten") ||
    className.startsWith("bd-darken")
  )
    return "border-color";

  if (
    className.startsWith("ot-complement") ||
    className.startsWith("ot-lighten") ||
    className.startsWith("ot-darken")
  )
    return "outline-color";

  if (
    className.startsWith("caret-complement") ||
    className.startsWith("caret-lighten") ||
    className.startsWith("caret-darken")
  )
    return "caret-color";

  if (
    className.startsWith("bg-complement") ||
    className.startsWith("bg-lighten") ||
    className.startsWith("bg-darken")
  )
    return "background-color";

  // Colors

  if (
    className.startsWith("rgb") ||
    className.startsWith("hsl") ||
    className.startsWith("#") ||
    className.startsWith("complement") ||
    className.startsWith("lighten") ||
    className.startsWith("darken")
  )
    return "color";

  // text-transform

  if (
    className.startsWith("lowercase") ||
    className.startsWith("uppercase") ||
    className.startsWith("capitalize") ||
    className.startsWith("normal-case")
  )
    return "text-transform";

  if (
    className.startsWith("text-center") ||
    className.startsWith("text-justify") ||
    className.startsWith("text-start") ||
    className.startsWith("text-end") ||
    className.startsWith("text-left") ||
    className.startsWith("text-right")
  )
    return "text-align";

  // text-decoration-line

  if (
    className.startsWith("underline") ||
    className.startsWith("overline") ||
    className.startsWith("line-through") ||
    className.startsWith("no-underline")
  )
    return "text-decoration-line";

  // font-weight
  if (
    className.startsWith("lighter") ||
    className.startsWith("light") ||
    className.startsWith("normal") ||
    className.startsWith("bold") ||
    className.startsWith("bolder")
  )
    return "font-weight";

  // font-style

  if (className.startsWith("italic")) return "font-style";

  // media-breakpoints

  if (className.startsWith("watch")) return "watch";
  if (className.startsWith("mobile")) return "mobile";
  if (className.startsWith("tablet")) return "tablet";
  if (className.startsWith("laptop")) return "laptop";
  if (className.startsWith("desktop")) return "desktop";
  if (className.startsWith("extralarge-tv")) return "extralarge-tv";

  // font-family
  // should handle google fonts

  const fnt = formatPropertyValue(className);
  if (fonts.includes(fnt)) return "font-family";

  // box-sizing

  if (className.startsWith("border-box") || className.startsWith("content-box"))
    return "box-sizing";

  // visibility

  if (
    className.startsWith("visible") ||
    className.startsWith("hidden") ||
    className.startsWith("collapse")
  )
    return "visibility";

  if (
    className.startsWith("flex-row") ||
    className.startsWith("flex-col") ||
    className.startsWith("row-reverse") ||
    className.startsWith("col-reverse")
  )
    return "flex-direction";

  // Positions

  if (
    className.startsWith("static") ||
    className.startsWith("relative") ||
    className.startsWith("absolute") ||
    className.startsWith("fixed") ||
    className.startsWith("sticky")
  )
    return "position";

  // general

  if (className.startsWith("z-")) return "z-index";
  if (className.startsWith("writing-mode-")) return "writing-mode";
  if (className.startsWith("word-wrap-")) return "word-wrap";
  if (className.startsWith("word-spacing-")) return "word-spacing";
  if (className.startsWith("word-break-")) return "word-break";
  if (className.startsWith("will-change-")) return "will-change";
  if (className.startsWith("widows-")) return "widows";
  if (className.startsWith("white-sp-")) return "white-space";
  if (className.startsWith("w-")) return "width";
  if (className.startsWith("visibility-")) return "visibility";
  if (className.startsWith("v-align-")) return "vertical-align";
  if (className.startsWith("user-select-")) return "user-select";
  if (className.startsWith("unset-")) return "unset";
  if (className.startsWith("text-underline-position-")) return "text-underline-position";
  if (className.startsWith("text-underline-offset-")) return "text-underline-offset";
  if (className.startsWith("text-transform-")) return "text-transform";
  if (className.startsWith("text-size-adjust-")) return "text-size-adjust";
  if (className.startsWith("text-sh-")) return "text-shadow";
  if (className.startsWith("text-rendering-")) return "text-rendering";
  if (className.startsWith("text-overflow-")) return "text-overflow";
  if (className.startsWith("text-orientation-")) return "text-orientation";
  if (className.startsWith("text-justify-")) return "text-justify";
  if (className.startsWith("text-indent-")) return "text-indent";
  if (className.startsWith("text-emphasis-style-")) return "text-emphasis-style";
  if (className.startsWith("text-emphasis-position-")) return "text-emphasis-position";
  if (className.startsWith("text-emphasis-color-")) return "text-emphasis-color";
  if (className.startsWith("text-emphasis-")) return "text-emphasis";
  if (className.startsWith("text-decoration-thickness-")) return "text-decoration-thickness";
  if (className.startsWith("text-decoration-style-")) return "text-decoration-style";
  if (className.startsWith("text-decoration-skip-ink-")) return "text-decoration-skip-ink";
  if (className.startsWith("text-decoration-skip-")) return "text-decoration-skip";
  if (className.startsWith("text-decoration-line-")) return "text-decoration-line";
  if (className.startsWith("text-decoration-color-")) return "text-decoration-color";
  if (className.startsWith("text-decoration-")) return "text-decoration";
  if (className.startsWith("text-combine-upright-")) return "text-combine-upright";
  if (className.startsWith("text-align-last-")) return "text-align-last";
  if (className.startsWith("text-align-")) return "text-align";
  if (className.startsWith("transz-")) return "translateZ";
  if (className.startsWith("transy-")) return "translateY";
  if (className.startsWith("transx-")) return "translateX";
  if (className.startsWith("translate-")) return "translate";
  if (className.startsWith("transition-timing-function-")) return "transition-timing-function";
  if (className.startsWith("transition-property-")) return "transition-property";
  if (className.startsWith("transition-duration-")) return "transition-duration";
  if (className.startsWith("transition-delay-")) return "transition-delay";
  if (className.startsWith("transition-")) return "transition";
  if (className.startsWith("transform-style-")) return "transform-style";
  if (className.startsWith("transform-origin-")) return "transform-origin";
  if (className.startsWith("transform-box-")) return "transform-box";
  if (className.startsWith("transform-")) return "transform";
  if (className.startsWith("trans3d-")) return "translate3d";
  if (className.startsWith("touch-action-")) return "touch-action";
  if (className.startsWith("table-layout-")) return "table-layout";
  if (className.startsWith("tab-size-")) return "tab-size";
  if (className.startsWith("t-")) return "top";
  if (className.startsWith("skewy-")) return "skewY";
  if (className.startsWith("skewx-")) return "skewX";
  if (className.startsWith("skew-")) return "skew";
  if (className.startsWith("shape-outside-")) return "shape-outside";
  if (className.startsWith("shape-margin-")) return "shape-margin";
  if (className.startsWith("shape-image-threshold-")) return "shape-image-threshold";
  if (className.startsWith("sepia-")) return "sepia";
  if (className.startsWith("self-")) return "justify-self";
  if (className.startsWith("scrollbar-w-")) return "scrollbar-width";
  if (className.startsWith("scrollbar-gutter-")) return "scrollbar-gutter";
  if (className.startsWith("scrollbar-color-")) return "scrollbar-color";
  if (className.startsWith("scroll-snap-type-")) return "scroll-snap-type";
  if (className.startsWith("scroll-snap-stop-")) return "scroll-snap-stop";
  if (className.startsWith("scroll-snap-align-")) return "scroll-snap-align";
  if (className.startsWith("scroll-p-t-")) return "scroll-padding-top";
  if (className.startsWith("scroll-p-r-")) return "scroll-padding-right";
  if (className.startsWith("scroll-p-l-")) return "scroll-padding-left";
  if (className.startsWith("scroll-p-inline-start-")) return "scroll-padding-inline-start";
  if (className.startsWith("scroll-p-inline-end-")) return "scroll-padding-inline-end";
  if (className.startsWith("scroll-p-inline-")) return "scroll-padding-inline";
  if (className.startsWith("scroll-p-block-start-")) return "scroll-padding-block-start";
  if (className.startsWith("scroll-p-block-end-")) return "scroll-padding-block-end";
  if (className.startsWith("scroll-p-block-")) return "scroll-padding-block";
  if (className.startsWith("scroll-p-b-")) return "scroll-padding-bottom";
  if (className.startsWith("scroll-p-")) return "scroll-padding";
  if (className.startsWith("scroll-m-t-")) return "scroll-margin-top";
  if (className.startsWith("scroll-m-r-")) return "scroll-margin-right";
  if (className.startsWith("scroll-m-l-")) return "scroll-margin-left";
  if (className.startsWith("scroll-m-inline-start-")) return "scroll-margin-inline-start";
  if (className.startsWith("scroll-m-inline-end-")) return "scroll-margin-inline-end";
  if (className.startsWith("scroll-m-inline-")) return "scroll-margin-inline";
  if (className.startsWith("scroll-m-bottom-")) return "scroll-margin-bottom";
  if (className.startsWith("scroll-m-block-start-")) return "scroll-margin-block-start";
  if (className.startsWith("scroll-m-block-end-")) return "scroll-margin-block-end";
  if (className.startsWith("scroll-m-block-")) return "scroll-margin-block";
  if (className.startsWith("scroll-m-")) return "scroll-margin";
  if (className.startsWith("scroll-behavior-")) return "scroll-behavior";
  if (className.startsWith("scalez-")) return "scaleZ";
  if (className.startsWith("scaley-")) return "scaleY";
  if (className.startsWith("scalex-")) return "scaleX";
  if (className.startsWith("scale3d-")) return "scale3d";
  if (className.startsWith("scale-")) return "scale";
  if (className.startsWith("scale-")) return "scale";
  if (className.startsWith("saturate-")) return "saturate";
  if (className.startsWith("ruby-position-")) return "ruby-position";
  if (className.startsWith("ruby-merge-")) return "ruby-merge";
  if (className.startsWith("ruby-align-")) return "ruby-align";
  if (className.startsWith("row-gap-")) return "row-gap";
  if (className.startsWith("rotz-")) return "rotateZ";
  if (className.startsWith("roty-")) return "rotateY";
  if (className.startsWith("rotx-")) return "rotateX";
  if (className.startsWith("rotate-")) return "rotate";
  if (className.startsWith("rot3d-")) return "rotate3d";
  if (className.startsWith("revert-")) return "revert";
  if (className.startsWith("resize-")) return "resize";
  if (className.startsWith("r-")) return "right";
  if (className.startsWith("quotes-")) return "quotes";
  if (className.startsWith("py-")) return "padding-y";
  if (className.startsWith("px-")) return "padding-x";
  if (className.startsWith("pt-")) return "padding-top";
  if (className.startsWith("print-color-adjust-")) return "print-color-adjust";
  if (className.startsWith("pr-")) return "padding-right";
  if (className.startsWith("position-")) return "position";
  if (className.startsWith("plc-self-")) return "place-self";
  if (className.startsWith("plc-items-")) return "place-items";
  if (className.startsWith("plc-content-")) return "place-content";
  if (className.startsWith("pl-")) return "padding-left";
  if (className.startsWith("perspective-origin-")) return "perspective-origin";
  if (className.startsWith("perspective-")) return "perspective";
  if (className.startsWith("perspective-")) return "perspective";
  if (className.startsWith("pe-")) return "pointer-events";
  if (className.startsWith("pb-")) return "padding-bottom";
  if (className.startsWith("paint-order-")) return "paint-order";
  if (className.startsWith("p-inline-start-")) return "padding-inline-start";
  if (className.startsWith("p-inline-end-")) return "padding-inline-end";
  if (className.startsWith("p-inline-")) return "padding-inline";
  if (className.startsWith("p-block-start-")) return "padding-block-start";
  if (className.startsWith("p-block-end-")) return "padding-block-end";
  if (className.startsWith("p-block-")) return "padding-block";
  if (className.startsWith("p-")) return "padding";
  if (className.startsWith("ov-y-")) return "overflow-y";
  if (className.startsWith("ov-x-")) return "overflow-x";
  if (className.startsWith("ov-wrap-")) return "overflow-wrap";
  if (className.startsWith("ov-inline-")) return "overflow-inline";
  if (className.startsWith("ov-clip-margin-")) return "overflow-clip-margin";
  if (className.startsWith("ov-block-")) return "overflow-block";
  if (className.startsWith("ov-anchor-")) return "overflow-anchor";
  if (className.startsWith("ov-")) return "overflow";
  if (className.startsWith("ot-w-")) return "outline-width";
  if (className.startsWith("ot-style-")) return "outline-style";
  if (className.startsWith("ot-offset-")) return "outline-offset";
  if (className.startsWith("ot-color-")) return "outline-color";
  if (className.startsWith("ot-")) return "outline";
  if (className.startsWith("os-behavior-y-")) return "overscroll-behavior-y";
  if (className.startsWith("os-behavior-x-")) return "overscroll-behavior-x";
  if (className.startsWith("os-behavior-inline-")) return "overscroll-behavior-inline";
  if (className.startsWith("os-behavior-block-")) return "overscroll-behavior-block";
  if (className.startsWith("os-behavior-")) return "overscroll-behavior";
  if (className.startsWith("orphans-")) return "orphans";
  if (className.startsWith("op-")) return "opacity";
  if (className.startsWith("offset-rotate-")) return "offset-rotate";
  if (className.startsWith("offset-position-")) return "offset-position";
  if (className.startsWith("offset-path-")) return "offset-path";
  if (className.startsWith("offset-distance-")) return "offset-distance";
  if (className.startsWith("offset-anchor-")) return "offset-anchor";
  if (className.startsWith("offset-")) return "offset";
  if (className.startsWith("od-")) return "order";
  if (className.startsWith("object-position-")) return "object-position";
  if (className.startsWith("object-fit-")) return "object-fit";
  if (className.startsWith("my-")) return "margin-y";
  if (className.startsWith("mx-")) return "margin-x";
  if (className.startsWith("mt-")) return "margin-top";
  if (className.startsWith("mr-")) return "margin-right";
  if (className.startsWith("ml-")) return "margin-left";
  if (className.startsWith("mix-blend-mode-")) return "mix-blend-mode";
  if (className.startsWith("min-w-")) return "min-width";
  if (className.startsWith("min-inline-size-")) return "min-inline-size";
  if (className.startsWith("min-h-")) return "min-height";
  if (className.startsWith("min-block-size-")) return "min-block-size";
  if (className.startsWith("mb-")) return "margin-bottom";
  if (className.startsWith("max-w-")) return "max-width";
  if (className.startsWith("max-inline-size-")) return "max-inline-size";
  if (className.startsWith("max-h-")) return "max-height";
  if (className.startsWith("max-block-size-")) return "max-block-size";
  if (className.startsWith("matrix3d-")) return "matrix3d";
  if (className.startsWith("matrix-")) return "matrix";
  if (className.startsWith("math-style-")) return "math-style";
  if (className.startsWith("masonry-auto-flow-")) return "masonry-auto-flow";
  if (className.startsWith("mask-type-")) return "mask-type";
  if (className.startsWith("mask-size-")) return "mask-size";
  if (className.startsWith("mask-repeat-")) return "mask-repeat";
  if (className.startsWith("mask-position-")) return "mask-position";
  if (className.startsWith("mask-origin-")) return "mask-origin";
  if (className.startsWith("mask-mode-")) return "mask-mode";
  if (className.startsWith("mask-image-")) return "mask-image";
  if (className.startsWith("mask-composite-")) return "mask-composite";
  if (className.startsWith("mask-clip-")) return "mask-clip";
  if (className.startsWith("mask-bd-width-")) return "mask-border-width";
  if (className.startsWith("mask-bd-source-")) return "mask-border-source";
  if (className.startsWith("mask-bd-slice-")) return "mask-border-slice";
  if (className.startsWith("mask-bd-repeat-")) return "mask-border-repeat";
  if (className.startsWith("mask-bd-outset-")) return "mask-border-outset";
  if (className.startsWith("mask-bd-mode-")) return "mask-border-mode";
  if (className.startsWith("mask-bd-")) return "mask-border";
  if (className.startsWith("mask-")) return "mask";
  if (className.startsWith("m-trim-")) return "margin-trim";
  if (className.startsWith("m-inline-start-")) return "margin-inline-start";
  if (className.startsWith("m-inline-end-")) return "margin-inline-end";
  if (className.startsWith("m-inline-")) return "margin-inline";
  if (className.startsWith("m-block-start-")) return "margin-block-start";
  if (className.startsWith("m-block-end-")) return "margin-block-end";
  if (className.startsWith("m-block-")) return "margin-block";
  if (className.startsWith("m-")) return "margin";
  if (className.startsWith("ls-type-")) return "list-style-type";
  if (className.startsWith("ls-position-")) return "list-style-position";
  if (className.startsWith("ls-image-")) return "list-style-image";
  if (className.startsWith("ls-")) return "list-style";
  if (className.startsWith("lh-step-")) return "line-height-step";
  if (className.startsWith("lh-")) return "line-height";
  if (className.startsWith("letter-sp-")) return "letter-spacing";
  if (className.startsWith("lb-")) return "line-break";
  if (className.startsWith("l-")) return "left";
  if (className.startsWith("jt-")) return "justify-tracks";
  if (className.startsWith("js-")) return "justify-self";
  if (className.startsWith("ji-")) return "justify-items";
  if (className.startsWith("jc-")) return "justify-content";
  if (className.startsWith("items-")) return "align-items";
  if (className.startsWith("isolation-")) return "isolation";
  if (className.startsWith("inset-inline-start-")) return "inset-inline-start";
  if (className.startsWith("inset-inline-end-")) return "inset-inline-end";
  if (className.startsWith("inset-inline-")) return "inset-inline";
  if (className.startsWith("inset-block-start-")) return "inset-block-start";
  if (className.startsWith("inset-block-end-")) return "inset-block-end";
  if (className.startsWith("inset-block-")) return "inset-block";
  if (className.startsWith("inset-")) return "inset";
  if (className.startsWith("inline-size-")) return "inline-size";
  if (className.startsWith("initial-letter-align-")) return "initial-letter-align";
  if (className.startsWith("initial-letter-")) return "initial-letter";
  if (className.startsWith("initial-")) return "initial";
  if (className.startsWith("inherit-")) return "inherit";
  if (className.startsWith("img-resolution-")) return "image-resolution";
  if (className.startsWith("img-rendering-")) return "image-rendering";
  if (className.startsWith("img-orientation-")) return "image-orientation";
  if (className.startsWith("hyphens-")) return "hyphens";
  if (className.startsWith("hyphenate-character-")) return "hyphenate-character";
  if (className.startsWith("hanging-punctuation-")) return "hanging-punctuation";
  if (className.startsWith("h-")) return "height";
  if (className.startsWith("grid-rows-")) return "grid-template-rows";
  if (className.startsWith("grid-cols-")) return "grid-template-columns";
  if (className.startsWith("grid-template-areas-")) return "grid-template-areas";
  if (className.startsWith("grid-template-")) return "grid-template";
  if (className.startsWith("grid-row-start-")) return "grid-row-start";
  if (className.startsWith("grid-row-end-")) return "grid-row-end";
  if (className.startsWith("grid-row-")) return "grid-row";
  if (className.startsWith("grid-col-start-")) return "grid-column-start";
  if (className.startsWith("grid-col-end-")) return "grid-column-end";
  if (className.startsWith("grid-col-")) return "grid-column";
  if (className.startsWith("grid-auto-rows-")) return "grid-auto-rows";
  if (className.startsWith("grid-auto-flow-")) return "grid-auto-flow";
  if (className.startsWith("grid-auto-columns-")) return "grid-auto-columns";
  if (className.startsWith("grid-area-")) return "grid-area";
  if (className.startsWith("grid-")) return "grid";
  if (className.startsWith("grayscale-")) return "grayscale";
  if (className.startsWith("gap-x-")) return "column-gap";
  if (className.startsWith("gap-y-")) return "row-gap";
  if (className.startsWith("gap-")) return "gap";
  if (className.startsWith("forced-color-adjust-")) return "forced-color-adjust";
  if (className.startsWith("font-weit-") || className.startsWith("font-weight-"))
    return "font-weight";
  if (className.startsWith("font-variation-settings-")) return "font-variation-settings";
  if (className.startsWith("font-variant-position-")) return "font-variant-position";
  if (className.startsWith("font-variant-numeric-")) return "font-variant-numeric";
  if (className.startsWith("font-variant-ligatures-")) return "font-variant-ligatures";
  if (className.startsWith("font-variant-east-asian-")) return "font-variant-east-asian";
  if (className.startsWith("font-variant-caps-")) return "font-variant-caps";
  if (className.startsWith("font-variant-alternates-")) return "font-variant-alternates";
  if (className.startsWith("font-variant-")) return "font-variant";
  if (className.startsWith("font-synthesis-")) return "font-synthesis";
  if (className.startsWith("font-style-")) return "font-style";
  if (className.startsWith("font-stretch-")) return "font-stretch";
  if (className.startsWith("font-size-adjust-")) return "font-size-adjust";
  if (className.startsWith("font-size-")) return "font-size";
  if (className.startsWith("font-optical-sizing-")) return "font-optical-sizing";
  if (className.startsWith("font-language-override-")) return "font-language-override";
  if (className.startsWith("font-kerning-")) return "font-kerning";
  if (className.startsWith("font-family-")) return "font-family";
  if (className.startsWith("font-")) return "font";
  if (className.startsWith("flex-wrap-")) return "flex-wrap";
  if (className.startsWith("flex-shrink-")) return "flex-shrink";
  if (className.startsWith("flex-grow-")) return "flex-grow";
  if (className.startsWith("flex-flow-")) return "flex-flow";
  if (className.startsWith("flex-direction-")) return "flex-direction";
  if (className.startsWith("flex-basis-")) return "flex-basis";
  if (className.startsWith("flex-")) return "flex";
  if (className.startsWith("fl-")) return "float";
  if (className.startsWith("filter-")) return "filter";
  if (className.startsWith("empty-cells-")) return "empty-cells";
  if (className.startsWith("drop-shadow-")) return "drop-shadow";
  if (className.startsWith("direction-")) return "direction";
  if (className.startsWith("d-")) return "display";
  if (className.startsWith("cu-")) return "cursor";
  if (className.startsWith("counter-set-")) return "counter-set";
  if (className.startsWith("counter-reset-")) return "counter-reset";
  if (className.startsWith("counter-increment-")) return "counter-increment";
  if (className.startsWith("contrast-")) return "contrast";
  if (className.startsWith("content-visibility-")) return "content-visibility";
  if (className.startsWith("content-")) return "justify-content";
  if (className.startsWith("cont-")) return "content";
  if (className.startsWith("contain-")) return "contain";
  if (className.startsWith("cols-")) return "columns";
  if (className.startsWith("color-scheme-")) return "color-scheme";
  if (className.startsWith("color-")) return "color";
  if (className.startsWith("col-w-")) return "column-width";
  if (className.startsWith("col-span-")) return "column-span";
  if (className.startsWith("col-rule-width-")) return "column-rule-width";
  if (className.startsWith("col-rule-style-")) return "column-rule-style";
  if (className.startsWith("col-rule-color-")) return "column-rule-color";
  if (className.startsWith("col-rule-")) return "column-rule";
  if (className.startsWith("col-gap-")) return "column-gap";
  if (className.startsWith("col-fill-")) return "column-fill";
  if (className.startsWith("col-count-")) return "column-count";
  if (className.startsWith("clip-path-")) return "clip-path";
  if (className.startsWith("clip-")) return "clip";
  if (className.startsWith("clear-")) return "clear";
  if (className.startsWith("caret-color-")) return "caret-color";
  if (className.startsWith("caption-side-")) return "caption-side";
  if (className.startsWith("brightness-")) return "brightness";
  if (className.startsWith("box-sizing-")) return "box-sizing";
  if (className.startsWith("sh-")) return "box-shadow";
  if (className.startsWith("box-decoration-break-")) return "box-decoration-break";
  if (className.startsWith("blur-")) return "blur";
  if (className.startsWith("block-size-")) return "block-size";
  if (className.startsWith("bi-")) return "break-inside";
  if (className.startsWith("bg-size-")) return "background-size";
  if (className.startsWith("bg-repeat-")) return "background-repeat";
  if (className.startsWith("bg-position-y-")) return "background-position-y";
  if (className.startsWith("bg-position-x-")) return "background-position-x";
  if (className.startsWith("bg-position-")) return "background-position";
  if (className.startsWith("bg-origin-")) return "background-origin";
  if (className.startsWith("bg-image-")) return "background-image";
  if (className.startsWith("bg-color-")) return "background-color";
  if (className.startsWith("bg-clip-")) return "background-clip";
  if (className.startsWith("bg-blend-mode-")) return "background-blend-mode";
  if (className.startsWith("bg-attachment-")) return "background-attachment";
  if (className.startsWith("bg-")) return "background";
  if (className.startsWith("bd-w-")) return "border-width";
  if (className.startsWith("bd-t-w-")) return "border-top-width";
  if (className.startsWith("bd-t-style-")) return "border-top-style";
  if (className.startsWith("radius-t-r-")) return "border-top-right-radius";
  if (className.startsWith("radius-t-l-")) return "border-top-left-radius";
  if (className.startsWith("bd-t-color")) return "border-top-color";
  if (className.startsWith("bd-t-")) return "border-top";
  if (className.startsWith("bd-style-")) return "border-style";
  if (className.startsWith("radius-start-start-")) return "border-start-start-radius";
  if (className.startsWith("radius-start-end-")) return "border-start-end-radius";
  if (className.startsWith("bd-spacing-")) return "border-spacing";
  if (className.startsWith("radius-")) return "border-radius";
  if (className.startsWith("bd-r-w-")) return "border-right-width";
  if (className.startsWith("bd-r-style-")) return "border-right-style";
  if (className.startsWith("bd-r-color-")) return "border-right-color";
  if (className.startsWith("bd-r-")) return "border-right";
  if (className.startsWith("bd-l-w-")) return "border-left-width";
  if (className.startsWith("bd-l-style-")) return "border-left-style";
  if (className.startsWith("bd-l-color-")) return "border-left-color";
  if (className.startsWith("bd-l-")) return "border-left";
  if (className.startsWith("bd-inline-w-")) return "border-inline-width";
  if (className.startsWith("bd-inline-style-")) return "border-inline-style";
  if (className.startsWith("bd-inline-start-w-")) return "border-inline-start-width";
  if (className.startsWith("bd-inline-start-style-")) return "border-inline-start-style";
  if (className.startsWith("bd-inline-start-color-")) return "border-inline-start-color";
  if (className.startsWith("bd-inline-start-")) return "border-inline-start";
  if (className.startsWith("bd-inline-end-w-")) return "border-inline-end-width";
  if (className.startsWith("bd-inline-end-style-")) return "border-inline-end-style";
  if (className.startsWith("bd-inline-end-color-")) return "border-inline-end-color";
  if (className.startsWith("bd-inline-end-")) return "border-inline-end";
  if (className.startsWith("bd-inline-color-")) return "border-inline-color";
  if (className.startsWith("bd-inline-")) return "border-inline";
  if (className.startsWith("bd-img-w-")) return "border-image-width";
  if (className.startsWith("bd-img-source-")) return "border-image-source";
  if (className.startsWith("bd-img-slice-")) return "border-image-slice";
  if (className.startsWith("bd-img-repeat-")) return "border-image-repeat";
  if (className.startsWith("bd-img-outset-")) return "border-image-outset";
  if (className.startsWith("bd-img-")) return "border-image";
  if (className.startsWith("radius-end-start-")) return "border-end-start-radius";
  if (className.startsWith("radius-end-end-")) return "border-end-end-radius";
  if (className.startsWith("bd-color-")) return "border-color";
  if (className.startsWith("bd-collapse-")) return "border-collapse";
  if (className.startsWith("bd-block-w-")) return "border-block-width";
  if (className.startsWith("bd-block-style-")) return "border-block-style";
  if (className.startsWith("bd-block-start-w-")) return "border-block-start-width";
  if (className.startsWith("bd-block-start-style-")) return "border-block-start-style";
  if (className.startsWith("bd-block-start-color-")) return "border-block-start-color";
  if (className.startsWith("bd-block-start-")) return "border-block-start";
  if (className.startsWith("bd-block-end-width-")) return "border-block-end-width";
  if (className.startsWith("bd-block-end-style-")) return "border-block-end-style";
  if (className.startsWith("bd-block-end-color-")) return "border-block-end-color";
  if (className.startsWith("bd-block-end-")) return "border-block-end";
  if (className.startsWith("bd-block-color-")) return "border-block-color";
  if (className.startsWith("bd-block-")) return "border-block";
  if (className.startsWith("bd-b-w-")) return "border-bottom-width";
  if (className.startsWith("bd-b-style-")) return "border-bottom-style";
  if (className.startsWith("radius-b-r-")) return "border-bottom-right-radius";
  if (className.startsWith("radius-b-l-")) return "border-bottom-left-radius";
  if (className.startsWith("bd-b-color-")) return "border-bottom-color";
  if (className.startsWith("bd-b-")) return "border-bottom";
  if (className.startsWith("bd-")) return "border";
  if (className.startsWith("bb-")) return "break-before";
  if (className.startsWith("backface-visibility-")) return "backface-visibility";
  if (className.startsWith("backdrop-filter-")) return "backdrop-filter";
  if (className.startsWith("ba-")) return "break-after";
  if (className.startsWith("b-")) return "bottom";
  if (className.startsWith("ar-")) return "aspect-ratio";
  if (className.startsWith("ap-")) return "appearance";
  if (className.startsWith("anime-timing-function-")) return "animation-timing-function";
  if (className.startsWith("anime-timeline-")) return "animation-timeline";
  if (className.startsWith("anime-play-state-")) return "animation-play-state";
  if (className.startsWith("anime-name-")) return "animation-name";
  if (className.startsWith("anime-iteration-count-")) return "animation-iteration-count";
  if (className.startsWith("anime-fill-mode-")) return "animation-fill-mode";
  if (className.startsWith("anime-duration-")) return "animation-duration";
  if (className.startsWith("anime-direction-")) return "animation-direction";
  if (className.startsWith("anime-delay-")) return "animation-delay";
  if (className.startsWith("anime-")) return "animation";
  if (className.startsWith("all-")) return "all";
  if (className.startsWith("align-tracks-")) return "align-tracks";
  if (className.startsWith("align-self-")) return "align-self";
  if (className.startsWith("align-items-")) return "align-items";
  if (className.startsWith("align-content-")) return "align-content";
  if (className.startsWith("accent-color-")) return "accent-color";

  for (let index = 0; index < colors.length; index++) {
    if (colors[index].name.includes(formatPropertyValue(className))) return "color";
  }

  if (brandColors.includes(formatPropertyValue(className))) return "color";

  return "";
};
