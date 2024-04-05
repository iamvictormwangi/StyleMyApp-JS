import {checkClassTypeHandler} from "./checkClassTypeHandler"
import {returner} from "./returner"

export const handleClasses = (className: string) => {
  const type = checkClassTypeHandler(className)
  let flag;
  if (className.includes("!"))
    flag = "!important";
  else
    flag = ""

  switch (type) {
    case "accent-color":
      return returner(className, "accent-color", false, flag);
    case "align-content":
      return returner(className, "align-content", false, flag);
    case "align-items":
      return returner(className, "align-items", false, flag);
    case "align-self":
      return returner(className, "align-self", false, flag);
    case "align-tracks":
      return returner(className, "align-tracks", false, flag);
    case "all":
      return returner(className, "all", false, flag);
    case "animation":
      return returner(className, "animation", false, flag);
    case "animation-delay":
      return returner(className, "animation-delay", false, flag);
    case "animation-direction":
      return returner(className, "animation-direction", false, flag);
    case "animation-duration":
      return returner(className, "animation-duration", false, flag);
    case "animation-fill-mode":
      return returner(className, "animation-fill-mode", false, flag);
    case "animation-iteration-count":
      return returner(className, "animation-iteration-count", false, flag);
    case "animation-name":
      return returner(className, "animation-name", false, flag);
    case "animation-play-state":
      return returner(className, "animation-play-state", false, flag);
    case "animation-timeline":
      return returner(className, "animation-timeline", false, flag);
    case "animation-timing-function":
      return returner(className, "animation-timing-function", false, flag);
    case "appearance":
      return returner(className, "appearance", false, flag);
    case "aspect-ratio":
      return returner(className, "aspect-ratio", false, flag);
    case "backdrop-filter":
      return returner(className, "backdrop-filter", false, flag);
    case "backface-visibility":
      return returner(className, "backface-visibility", false, flag);
    case "background":
      return returner(className, "background", false, flag);
    case "background-attachment":
      return returner(className, "background-attachment", false, flag);
    case "background-blend-mode":
      return returner(className, "background-blend-mode", false, flag);
    case "background-clip":
      return returner(className, "background-clip", false, flag);
    case "background-color":
      return returner(className, "background-color", false, flag);
    case "background-image":
      return returner(className, "background-image", false, flag);
    case "background-origin":
      return returner(className, "background-origin", false, flag);
    case "background-position":
      return returner(className, "background-position", false, flag);
    case "background-position-x":
      return returner(className, "background-position-x", false, flag);
    case "background-position-y":
      return returner(className, "background-position-y", false, flag);
    case "background-repeat":
      return returner(className, "background-repeat", false, flag);
    case "background-size":
      return returner(className, "background-size", true, flag);
    case "block-size":
      return returner(className, "block-size", true, flag);
    case "blur":
      return returner(className, "blur", false, flag);
    case "border":
      return returner(className, "border", true, flag);
    case "border-block":
      return returner(className, "border-block", true, flag);
    case "border-block-color":
      return returner(className, "border-block-color", false, flag);
    case "border-block-end":
      return returner(className, "border-block-end", true, flag);
    case "border-block-end-color":
      return returner(className, "border-block-end-color", false, flag);
    case "border-block-end-style":
      return returner(className, "border-block-end-style", false, flag);
    case "border-block-end-width":
      return returner(className, "border-block-end-width", true, flag);
    case "border-block-start":
      return returner(className, "border-block-start", false, flag);
    case "border-block-start-color":
      return returner(className, "border-block-start-color", false, flag);
    case "border-block-start-style":
      return returner(className, "border-block-start-style", false, flag);
    case "border-block-start-width":
      return returner(className, "border-block-start-width", true, flag);
    case "border-block-style":
      return returner(className, "border-block-style", false, flag);
    case "border-block-width":
      return returner(className, "border-block-width", true, flag);
    case "border-bottom":
      return returner(className, "border-bottom", true, flag);
    case "border-bottom-color":
      return returner(className, "border-bottom-color", false, flag);
    case "border-bottom-left-radius":
      return returner(className, "border-bottom-left-radius", true, flag);
    case "border-bottom-right-radius":
      return returner(className, "border-bottom-right-radius", true, flag);
    case "border-bottom-style":
      return returner(className, "border-bottom-style", false, flag);
    case "border-bottom-width":
      return returner(className, "border-bottom-width", true, flag);
    case "border-collapse":
      return returner(className, "border-collapse", false, flag);
    case "border-color":
      return returner(className, "border-color", false, flag);
    case "border-end-end-radius":
      return returner(className, "border-end-end-radius", true, flag);
    case "border-end-start-radius":
      return returner(className, "border-end-start-radius", false, flag);
    case "border-image":
      return returner(className, "border-image", false, flag);
    case "border-image-outset":
      return returner(className, "border-image-outset", false, flag);
    case "border-image-repeat":
      return returner(className, "border-image-repeat", false, flag);
    case "border-image-slice":
      return returner(className, "border-image-slice", false, flag);
    case "border-image-source":
      return returner(className, "border-image-source", false, flag);
    case "border-image-width":
      return returner(className, "border-image-width", true, flag);
    case "border-inline":
      return returner(className, "border-inline", false, flag);
    case "border-inline-color":
      return returner(className, "border-inline-color", false, flag);
    case "border-inline-end":
      return returner(className, "border-inline-end", true, flag);
    case "border-inline-end-color":
      return returner(className, "border-inline-end-color", false, flag);
    case "border-inline-end-style":
      return returner(className, "border-inline-end-style", false, flag);
    case "border-inline-end-width":
      return returner(className, "border-inline-end-width", true, flag);
    case "border-inline-start":
      return returner(className, "border-inline-start", false, flag);
    case "border-inline-start-color":
      return returner(className, "border-inline-start-color", false, flag);
    case "border-inline-start-style":
      return returner(className, "border-inline-start-style", false, flag);
    case "border-inline-start-width":
      return returner(className, "border-inline-start-width", true, flag);
    case "border-inline-style":
      return returner(className, "border-inline-style", false, flag);
    case "border-inline-width":
      return returner(className, "border-inline-width", true, flag);
    case "border-left":
      return returner(className, "border-left", true, flag);
    case "border-left-color":
      return returner(className, "border-left-color", false, flag);
    case "border-left-style":
      return returner(className, "border-left-style", false, flag);
    case "border-left-width":
      return returner(className, "border-left-width", true, flag);
    case "border-radius":
      return returner(className, "border-radius", true, flag);
    case "border-right":
      return returner(className, "border-right", true, flag);
    case "border-right-color":
      return returner(className, "border-right-color", false, flag);
    case "border-right-style":
      return returner(className, "border-right-style", false, flag);
    case "border-right-width":
      return returner(className, "border-right-width", true, flag);
    case "border-spacing":
      return returner(className, "border-spacing", true, flag);
    case "border-start-end-radius":
      return returner(className, "border-start-end-radius", true, flag);
    case "border-start-start-radius":
      return returner(className, "border-start-start-radius", true, flag);
    case "border-style":
      return returner(className, "border-style", false, flag);
    case "border-top":
      return returner(className, "border-top", true, flag);
    case "border-top-color":
      return returner(className, "border-top-color", false, flag);
    case "border-top-left-radius":
      return returner(className, "border-top-left-radius", true, flag);
    case "border-top-right-radius":
      return returner(className, "border-top-right-radius", true, flag);
    case "border-top-style":
      return returner(className, "border-top-style", false, flag);
    case "border-top-width":
      return returner(className, "border-top-width", true, flag);
    case "border-width":
      return returner(className, "border-width", true, flag);
    case "bottom":
      return returner(className, "bottom", true, flag);
    case "box-decoration-break":
      return returner(className, "box-decoration-break", false, flag);
    case "box-shadow":
      return returner(className, "box-shadow", true, flag);
    case "box-sizing":
      return returner(className, "box-sizing", false, flag);
    case "break-after":
      return returner(className, "break-after", false, flag);
    case "break-before":
      return returner(className, "break-before", false, flag);
    case "break-inside":
      return returner(className, "break-inside", false, flag);
    case "brightness":
      return returner(className, "brightness", false, flag);
    case "caption-side":
      return returner(className, "caption-side", false, flag);
    case "caret-color":
      return returner(className, "caret-color", false, flag);
    case "clear":
      return returner(className, "clear", false, flag);
    case "clip":
      return returner(className, "clip", false, flag);
    case "clip-path":
      return returner(className, "clip-path", false, flag);
    case "color":
      return returner(className, "color", false, flag);
    case "color-scheme":
      return returner(className, "color-scheme", false, flag);
    case "column-count":
      return returner(className, "column-count", false, flag);
    case "column-fill":
      return returner(className, "column-fill", false, flag);
    case "column-gap":
      return returner(className, "column-gap", true, flag);
    case "column-rule":
      return returner(className, "column-rule", false, flag);
    case "column-rule-color":
      return returner(className, "column-rule-color", false, flag);
    case "column-rule-style":
      return returner(className, "column-rule-style", false, flag);
    case "column-rule-width":
      return returner(className, "column-rule-width", false, flag);
    case "column-span":
      return returner(className, "column-span", false, flag);
    case "column-width":
      return returner(className, "column-width", true, flag);
    case "columns":
      return returner(className, "columns", false, flag);
    case "contain":
      return returner(className, "contain", false, flag);
    case "content":
      return returner(className, "content", false, flag);
    case "content-visibility":
      return returner(className, "content-visibility", false, flag);
    case "contrast":
      return returner(className, "contrast", false, flag);
    case "counter-increment":
      return returner(className, "counter-increment", false, flag);
    case "counter-reset":
      return returner(className, "counter-reset", false, flag);
    case "counter-set":
      return returner(className, "counter-set", false, flag);
    case "cursor":
      return returner(className, "cursor", false, flag);
    case "direction":
      return returner(className, "direction", false, flag);
    case "display":
      return returner(className, "display", false, flag);
    case "drop-shadow":
      return returner(className, "drop-shadow", false, flag);
    case "empty-cells":
      return returner(className, "empty-cells", false, flag);
    case "filter":
      return returner(className, "filter", false, flag);
    case "flex":
      return returner(className, "flex", false, flag);
    case "flex-basis":
      return returner(className, "flex-basis", false, flag);
    case "flex-direction":
      return returner(className, "flex-direction", false, flag);
    case "flex-flow":
      return returner(className, "flex-flow", false, flag);
    case "flex-grow":
      return returner(className, "flex-grow", false, flag);
    case "flex-shrink":
      return returner(className, "flex-shrink", false, flag);
    case "flex-wrap":
      return returner(className, "flex-wrap", false, flag);
    case "float":
      return returner(className, "float", false, flag);
    case "font":
      return returner(className, "font", true, flag);
    case "font-family":
      return returner(className, "font-family", false, flag);
    case "font-kerning":
      return returner(className, "font-kerning", false, flag);
    case "font-language-override":
      return returner(className, "font-language-override", false, flag);
    case "font-optical-sizing":
      return returner(className, "font-optical-sizing", false, flag);
    case "font-size":
      return returner(className, "font-size", true, flag);
    case "font-size-adjust":
      return returner(className, "font-size-adjust", false, flag);
    case "font-stretch":
      return returner(className, "font-stretch", false, flag);
    case "font-style":
      return returner(className, "font-style", false, flag);
    case "font-synthesis":
      return returner(className, "font-synthesis", false, flag);
    case "font-variant":
      return returner(className, "font-variant", false, flag);
    case "font-variant-alternates":
      return returner(className, "font-variant-alternates", false, flag);
    case "font-variant-caps":
      return returner(className, "font-variant-caps", false, flag);
    case "font-variant-east-asian":
      return returner(className, "font-variant-east-asian", false, flag);
    case "font-variant-ligatures":
      return returner(className, "font-variant-ligatures", false, flag);
    case "font-variant-numeric":
      return returner(className, "font-variant-numeric", false, flag);
    case "font-variant-position":
      return returner(className, "font-variant-position", false, flag);
    case "font-variation-settings":
      return returner(className, "font-variation-settings", false, flag);
    case "font-weight":
      return returner(className, "font-weight", false, flag);
    case "forced-color-adjust":
      return returner(className, "forced-color-adjust", false, flag);
    case "gap":
      return returner(className, "gap", true, flag);
    case "grayscale":
      return returner(className, "grayscale", false, flag);
    case "grid":
      return returner(className, "grid", true, flag);
    case "grid-area":
      return returner(className, "grid-area", false, flag);
    case "grid-auto-columns":
      return returner(className, "grid-auto-columns", false, flag);
    case "grid-auto-flow":
      return returner(className, "grid-auto-flow", false, flag);
    case "grid-auto-rows":
      return returner(className, "grid-auto-rows", false, flag);
    case "grid-column":
      return returner(className, "grid-column", false, flag);
    case "grid-column-end":
      return returner(className, "grid-column-end", false, flag);
    case "grid-column-start":
      return returner(className, "grid-column-start", false, flag);
    case "grid-row":
      return returner(className, "grid-row", false, flag);
    case "grid-row-end":
      return returner(className, "grid-row-end", false, flag);
    case "grid-row-start":
      return returner(className, "grid-row-start", false, flag);
    case "grid-template":
      return returner(className, "grid-template", false, flag);
    case "grid-template-areas":
      return returner(className, "grid-template-areas", false, flag);
    case "grid-template-columns":
      return returner(className, "grid-template-columns", true, flag);
    case "grid-template-rows":
      return returner(className, "grid-template-rows", true, flag);
    case "hanging-punctuation":
      return returner(className, "hanging-punctuation", false, flag);
    case "height":
      return returner(className, "height", true, flag);
    case "hyphenate-character":
      return returner(className, "hyphenate-character", false, flag);
    case "hyphens":
      return returner(className, "hyphens", false, flag);
    case "image-orientation":
      return returner(className, "image-orientation", false, flag);
    case "image-rendering":
      return returner(className, "image-rendering", false, flag);
    case "image-resolution":
      return returner(className, "image-resolution", false, flag);
    case "inherit":
      return returner(className, "inherit", false, flag);
    case "initial":
      return returner(className, "initial", false, flag);
    case "initial-letter":
      return returner(className, "initial-letter", false, flag);
    case "initial-letter-align":
      return returner(className, "initial-letter-align", false, flag);
    case "inline-size":
      return returner(className, "inline-size", true, flag);
    case "inset":
      return returner(className, "inset", true, flag);
    case "inset-block":
      return returner(className, "inset-block", true, flag);
    case "inset-block-end":
      return returner(className, "inset-block-end", true, flag);
    case "inset-block-start":
      return returner(className, "inset-block-start", true, flag);
    case "inset-inline":
      return returner(className, "inset-inline", true, flag);
    case "inset-inline-end":
      return returner(className, "inset-inline-end", true, flag);
    case "inset-inline-start":
      return returner(className, "inset-inline-start", true, flag);
    case "isolation":
      return returner(className, "isolation", false, flag);
    case "justify-content":
      return returner(className, "justify-content", false, flag);
    case "justify-items":
      return returner(className, "justify-items", false, flag);
    case "justify-self":
      return returner(className, "justify-self", false, flag);
    case "justify-tracks":
      return returner(className, "justify-tracks", false, flag);
    case "left":
      return returner(className, "left", true, flag);
    case "letter-spacing":
      return returner(className, "letter-spacing", true, flag);
    case "line-break":
      return returner(className, "line-break", false, flag);
    case "line-height":
      return returner(className, "line-height", true, flag);
    case "line-height-step":
      return returner(className, "line-height-step", false, flag);
    case "list-style":
      return returner(className, "line-style", false, flag);
    case "list-style-image":
      return returner(className, "list-style-image", false, flag);
    case "list-style-position":
      return returner(className, "list-style-position", false, flag);
    case "list-style-type":
      return returner(className, "list-style-type", false, flag);
    case "margin":
      return returner(className, "margin", true, flag);
    case "margin-block":
      return returner(className, "margin-block", true, flag);
    case "margin-block-end":
      return returner(className, "margin-block-end", true, flag);
    case "margin-block-start":
      return returner(className, "margin-block-start", true, flag);
    case "margin-bottom":
      return returner(className, "margin-bottom", true, flag);
    case "margin-inline":
      return returner(className, "margin-inline", true, flag);
    case "margin-inline-end":
      return returner(className, "margin-inline-end", true, flag);
    case "margin-inline-start":
      return returner(className, "margin-inline-start", true, flag);
    case "margin-left":
      return returner(className, "margin-left", true, flag);
    case "margin-right":
      return returner(className, "margin-right", true, flag);
    case "margin-top":
      return returner(className, "margin-top", true, flag);
    case "margin-y":
      return returner(className, "margin-top,margin-bottom", true, flag);
    case "margin-x":
      return returner(className, "margin-right,margin-left", true, flag);
    case "margin-trim":
      return returner(className, "margin-trim", false, flag);
    case "mask":
      return returner(className, "mask", true, flag);
    case "mask-border":
      return returner(className, "mask-border", false, flag);
    case "mask-border-mode":
      return returner(className, "mask-border-mode", false, flag);
    case "mask-border-outset":
      return returner(className, "mask-border-outset", false, flag);
    case "mask-border-repeat":
      return returner(className, "mask-border-repeat", false, flag);
    case "mask-border-slice":
      return returner(className, "mask-border-slice", false, flag);
    case "mask-border-source":
      return returner(className, "mask-border-source", false, flag);
    case "mask-border-width":
      return returner(className, "mask-border-width", true, flag);
    case "mask-clip":
      return returner(className, "mask-clip", false, flag);
    case "mask-composite":
      return returner(className, "mask-composite", false, flag);
    case "mask-image":
      return returner(className, "mask-image", false, flag);
    case "mask-mode":
      return returner(className, "mask-mode", false, flag);
    case "mask-origin":
      return returner(className, "mask-origin", false, flag);
    case "mask-position":
      return returner(className, "mask-position", false, flag);
    case "mask-repeat":
      return returner(className, "mask-repeat", false, flag);
    case "mask-size":
      return returner(className, "mask-size", true, flag);
    case "mask-type":
      return returner(className, "mask-type", false, flag);
    case "masonry-auto-flow":
      return returner(className, "masonry-auto-flow", false, flag);
    case "math-style":
      return returner(className, "math-style", false, flag);
    case "matrix":
      return returner(className, "matrix", false, flag);
    case "matrix3d":
      return returner(className, "matrix3d", false, flag);
    case "max-block-size":
      return returner(className, "max-block-size", true, flag);
    case "max-height":
      return returner(className, "max-height", true, flag);
    case "max-inline-size":
      return returner(className, "max-inline-size", true, flag);
    case "max-width":
      return returner(className, "max-width", true, flag);
    case "min-block-size":
      return returner(className, "min-block-size", true, flag);
    case "min-height":
      return returner(className, "min-height", true, flag);
    case "min-inline-size":
      return returner(className, "min-inline-size", true, flag);
    case "min-width":
      return returner(className, "min-width", true, flag);
    case "mix-blend-mode":
      return returner(className, "mix-blend-mode", false, flag);
    case "object-fit":
      return returner(className, "object-fit", false, flag);
    case "object-position":
      return returner(className, "object-position", false, flag);
    case "offset":
      return returner(className, "offset", true, flag);
    case "offset-anchor":
      return returner(className, "offset-anchor", false, flag);
    case "offset-distance":
      return returner(className, "offset-distance", false, flag);
    case "offset-path":
      return returner(className, "offset-path", false, flag);
    case "offset-position":
      return returner(className, "offset-position", false, flag);
    case "offset-rotate":
      return returner(className, "offset-rotate", false, flag);
    case "opacity":
      return returner(className, "opacity", false, flag);
    case "order":
      return returner(className, "order", false, flag);
    case "orphans":
      return returner(className, "orphans", false, flag);
    case "outline":
      return returner(className, "outline", true, flag);
    case "outline-color":
      return returner(className, "outline-color", false, flag);
    case "outline-offset":
      return returner(className, "outline-offset", false, flag);
    case "outline-style":
      return returner(className, "outline-style", false, flag);
    case "outline-width":
      return returner(className, "outline-width", true, flag);
    case "overflow":
      return returner(className, "overflow", false, flag);
    case "overflow-anchor":
      return returner(className, "overflow-anchor", false, flag);
    case "overflow-block":
      return returner(className, "overflow-block", false, flag);
    case "overflow-clip-margin":
      return returner(className, "overflow-clip-margin", false, flag);
    case "overflow-inline":
      return returner(className, "overflow-inline", false, flag);
    case "overflow-wrap":
      return returner(className, "overflow-wrap", false, flag);
    case "overflow-x":
      return returner(className, "overflow-x", false, flag);
    case "overflow-y":
      return returner(className, "overflow-y", false, flag);
    case "overscroll-behavior":
      return returner(className, "overscroll-behavior", false, flag);
    case "overscroll-behavior-block":
      return returner(className, "overscroll-behavior-block", false, flag);
    case "overscroll-behavior-inline":
      return returner(className, "overscroll-behavior-inline", false, flag);
    case "overscroll-behavior-x":
      return returner(className, "overscroll-behavior-x", false, flag);
    case "overscroll-behavior-y":
      return returner(className, "overscroll-behavior-y", false, flag);
    case "padding":
      return returner(className, "padding", true, flag);
    case "padding-block":
      return returner(className, "padding-block", true, flag);
    case "padding-block-end":
      return returner(className, "padding-block-end", true, flag);
    case "padding-block-start":
      return returner(className, "padding-block-start", true, flag);
    case "padding-bottom":
      return returner(className, "padding-bottom", true, flag);
    case "padding-inline":
      return returner(className, "padding-inline", true, flag);
    case "padding-inline-end":
      return returner(className, "padding-inline-end", true, flag);
    case "padding-inline-start":
      return returner(className, "padding-inline-start", true, flag);
    case "padding-left":
      return returner(className, "padding-left", true, flag);
    case "padding-right":
      return returner(className, "padding-right", true, flag);
    case "padding-top":
      return returner(className, "padding-top", true, flag);
    case "padding-y":
      return returner(className, "padding-top,padding-bottom", true, flag);
    case "padding-x":
      return returner(className, "padding-right,padding-left", true, flag);
    case "paint-order":
      return returner(className, "paint-order", false, flag);
    case "perspective":
      return returner(className, "perspective", false, flag);
    case "perspective-origin":
      return returner(className, "perspective-origin", false, flag);
    case "place-content":
      return returner(className, "place-content", false, flag);
    case "place-items":
      return returner(className, "place-items", false, flag);
    case "place-self":
      return returner(className, "place-self", false, flag);
    case "pointer-events":
      return returner(className, "pointer-events", false, flag);
    case "position":
      return returner(className, "position", false, flag);
    case "print-color-adjust":
      return returner(className, "print-color-adjust", false, flag);
    case "quotes":
      return returner(className, "quotes", false, flag);
    case "resize":
      return returner(className, "resize", false, flag);
    case "revert":
      return returner(className, "revert", false, flag);
    case "right":
      return returner(className, "right", true, flag);
    case "rotate":
      return returner(className, "rotate", false, flag);
    case "rotate3d":
      return returner(className, "rotate3d", false, flag);
    case "rotateX":
      return returner(className, "rotateX", false, flag);
    case "rotateY":
      return returner(className, "rotateY", false, flag);
    case "rotateZ":
      return returner(className, "rotateZ", false, flag);
    case "row-gap":
      return returner(className, "row-gap", true, flag);
    case "ruby-align":
      return returner(className, "ruby-align", false, flag);
    case "ruby-merge":
      return returner(className, "ruby-merge", false, flag);
    case "ruby-position":
      return returner(className, "ruby-position", false, flag);
    case "saturate":
      return returner(className, "saturate", false, flag);
    case "scale":
      return returner(className, "scale", false, flag);
    case "scale3d":
      return returner(className, "scale3d", false, flag);
    case "scaleX":
      return returner(className, "scaleX", false, flag);
    case "scaleY":
      return returner(className, "scaleY", false, flag);
    case "scaleZ":
      return returner(className, "scaleZ", false, flag);
    case "scroll-behavior":
      return returner(className, "scroll-behaviour", false, flag);
    case "scroll-margin":
      return returner(className, "scroll-margin", true, flag);
    case "scroll-margin-block":
      return returner(className, "scroll-margin-block", true, flag);
    case "scroll-margin-block-end":
      return returner(className, "scroll-margin-block-end", true, flag);
    case "scroll-margin-block-start":
      return returner(className, "scroll-margin-block-start", true, flag);
    case "scroll-margin-bottom":
      return returner(className, "scroll-margin-bottom", true, flag);
    case "scroll-margin-inline":
      return returner(className, "scroll-margin-inline", true, flag);
    case "scroll-margin-inline-end":
      return returner(className, "scroll-margin-inline", true, flag);
    case "scroll-margin-inline-start":
      return returner(className, "scroll-margin-inline-start", true, flag);
    case "scroll-margin-left":
      return returner(className, "scroll-margin-left", true, flag);
    case "scroll-margin-right":
      return returner(className, "scroll-margin-right", true, flag);
    case "scroll-margin-top":
      return returner(className, "scroll-margin-top", true, flag);
    case "scroll-padding":
      return returner(className, "scroll-padding", true, flag);
    case "scroll-padding-block":
      return returner(className, "scroll-padding-block", true, flag);
    case "scroll-padding-block-end":
      return returner(className, "scroll-padding-block-end", true, flag);
    case "scroll-padding-block-start":
      return returner(className, "scroll-padding-block-start", true, flag);
    case "scroll-padding-bottom":
      return returner(className, "scroll-padding-bottom", true, flag);
    case "scroll-padding-inline":
      return returner(className, "scroll-padding-inline", true, flag);
    case "scroll-padding-inline-end":
      return returner(className, "scroll-padding-inline-end", true, flag);
    case "scroll-padding-inline-start":
      return returner(className, "scroll-padding-inline-start", true, flag);
    case "scroll-padding-left":
      return returner(className, "scroll-padding-left", true, flag);
    case "scroll-padding-right":
      return returner(className, "scroll-padding-right", true, flag);
    case "scroll-padding-top":
      return returner(className, "scroll-padding-top", true, flag);
    case "scroll-snap-align":
      return returner(className, "scroll-snap-align", false, flag);
    case "scroll-snap-stop":
      return returner(className, "scroll-snap-stop", false, flag);
    case "scroll-snap-type":
      return returner(className, "scroll-snap-type", false, flag);
    case "scrollbar-color":
      return returner(className, "scrollbar-color", false, flag);
    case "scrollbar-gutter":
      return returner(className, "scrollbar-gutter", false, flag);
    case "scrollbar-width":
      return returner(className, "scrollbar-width", true, flag);
    case "sepia":
      return returner(className, "sepia", false, flag);
    case "shape-image-threshold":
      return returner(className, "shape-image-threshold", false, flag);
    case "shape-margin":
      return returner(className, "shape-margin", true, flag);
    case "shape-outside":
      return returner(className, "shape-outside", false, flag);
    case "skew":
      return returner(className, "skew", false, flag);
    case "skewX":
      return returner(className, "skewX", false, flag);
    case "skewY":
      return returner(className, "skewY", false, flag);
    case "tab-size":
      return returner(className, "tab-size", false, flag);
    case "table-layout":
      return returner(className, "table-layout", false, flag);
    case "text-align":
      return returner(className, "text-align", false, flag);
    case "text-align-last":
      return returner(className, "text-align-last", false, flag);
    case "text-combine-upright":
      return returner(className, "text-combine-upright", false, flag);
    case "text-decoration":
      return returner(className, "text-decoration", false, flag);
    case "text-decoration-color":
      return returner(className, "text-decoration-color", false, flag);
    case "text-decoration-line":
      return returner(className, "text-decoration-line", false, flag);
    case "text-decoration-skip":
      return returner(className, "text-decoration-skip", false, flag);
    case "text-decoration-skip-ink":
      return returner(className, "text-decoration-skip-ink", false, flag);
    case "text-decoration-style":
      return returner(className, "text-decoration-style", false, flag);
    case "text-decoration-thickness":
      return returner(className, "text-decoration-thickness", true, flag);
    case "text-emphasis":
      return returner(className, "text-emphasis", false, flag);
    case "text-emphasis-color":
      return returner(className, "text-emphasis-color", false, flag);
    case "text-emphasis-position":
      return returner(className, "text-emphasis-position", false, flag);
    case "text-emphasis-style":
      return returner(className, "text-emphasis-style", false, flag);
    case "text-indent":
      return returner(className, "text-indent", true, flag);
    case "text-justify":
      return returner(className, "text-justify", false, flag);
    case "text-orientation":
      return returner(className, "text-orientation", false, flag);
    case "text-overflow":
      return returner(className, "text-overflow", false, flag);
    case "text-rendering":
      return returner(className, "text-rendering", false, flag);
    case "text-shadow":
      return returner(className, "text-shadow", false, flag);
    case "text-size-adjust":
      return returner(className, "text-size-adjust", false, flag);
    case "text-transform":
      return returner(className, "text-transform", false, flag);
    case "text-underline-offset":
      return returner(className, "text-underline-offset", false, flag);
    case "text-underline-position":
      return returner(className, "text-underline-position", false, flag);
    case "top":
      return returner(className, "top", true, flag);
    case "touch-action":
      return returner(className, "touch-action", false, flag);
    case "transform":
      return returner(className, "transform", false, flag);
    case "transform-box":
      return returner(className, "transform-box", false, flag);
    case "transform-origin":
      return returner(className, "transform-origin", false, flag);
    case "transform-style":
      return returner(className, "transform-style", false, flag);
    case "transition":
      return returner(className, "transition", false, flag);
    case "transition-delay":
      return returner(className, "transition-delay", false, flag);
    case "transition-duration":
      return returner(className, "transition-duration", false, flag);
    case "transition-property":
      return returner(className, "transition-property", false, flag);
    case "transition-timing-function":
      return returner(className, "transition-timing-function", false, flag);
    case "translate":
      return returner(className, "translate", true, flag);
    case "translate3d":
      return returner(className, "translate3d", true, flag);
    case "translateX":
      return returner(className, "translateX", true, flag);
    case "translateY":
      return returner(className, "translateY", true, flag);
    case "translateZ":
      return returner(className, "translateZ", true, flag);
    case "unset":
      return returner(className, "unset", false, flag);
    case "user-select":
      return returner(className, "user-select", false, flag);
    case "vertical-align":
      return returner(className, "vertical-align", false, flag);
    case "visibility":
      return returner(className, "visibility", false, flag);
    case "white-space":
      return returner(className, "white-space", false, flag);
    case "widows":
      return returner(className, "widows", false, flag);
    case "width":
      return returner(className, "width", true, flag);
    case "will-change":
      return returner(className, "will-change", false, flag);
    case "word-break":
      return returner(className, "word-break", false, flag);
    case "word-spacing":
      return returner(className, "word-spacing", true, flag);
    case "word-wrap":
      return returner(className, "word-wrap", false, flag);
    case "writing-mode":
      return returner(className, "writing-mode", false, flag);
    case "z-index":
      return returner(className, "z-index", false, flag);
    case "":
      return ""
 }
};

