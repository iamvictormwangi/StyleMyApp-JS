import { formatPropertyValue } from "./formatPropertyValue"
import { formatClassName }  from "./formatClassName"


export const generateClasses = (property, className) => {
  let flag = "";
  let value = "";
  if (enableImportant || className.includes("!")) flag = "!important";


   switch (property) {
    case "bg":
      value = className.replace("bg-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { background: ${value} ${flag}}`);
      break;
    case "bd":
      value = className.replace("bd-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (value === "default")
        value = `var(--border-color) var(--border-width) var(--border-style)`;
      if (Number(value))
        styles = styles.concat(
          `.${className} { border: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else styles = styles.concat(`.${className} { border: ${value} ${flag}}`);
      break;
    case "bd-t":
      value = className.replace("bd-t-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { border-top: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else
        styles = styles.concat(`.${className} { border-top: ${value} ${flag}}`);
      break;
    case "bd-r":
      value = className.replace("bd-r-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { border-right: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else
        styles = styles.concat(
          `.${className} { border-right: ${value} ${flag}}`
        );
      break;
    case "bd-b":
      value = className.replace("bd-b-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { border-bottom: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else
        styles = styles.concat(
          `.${className} { border-bottom: ${value} ${flag}}`
        );
      break;
    case "bd-l":
      value = className.replace("bd-left-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { border-left: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else
        styles = styles.concat(
          `.${className} { border-left: ${value} ${flag}}`
        );
      break;
    case "caret":
      value = className.replace("caret-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { caret: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else styles = styles.concat(`.${className} { caret: ${value} ${flag}}`);
      break;
    case "ot":
      value = className.replace("outline-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (value === "default")
        value = `var(--outline-color) var(--outline-width) var(--outline-style)`;
      if (Number(value))
        styles = styles.concat(
          `.${className} { outline: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else styles = styles.concat(`.${className} { outline: ${value} ${flag}}`);
      break;
    case "t":
      value = className.replace("t-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { top: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else styles = styles.concat(`.${className} { top: ${value} ${flag}}`);
      break;
    case "r":
      value = className.replace("r-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { right: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else styles = styles.concat(`.${className} { right: ${value} ${flag}}`);
      break;
    case "b":
      value = className.replace("b-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { bottom: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else styles = styles.concat(`.${className} { bottom: ${value} ${flag}}`);
      break;
    case "l":
      value = className.replace("l-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { left: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else styles = styles.concat(`.${className} { left: ${value} ${flag}}`);
      break;
    case "h":
      value = className.replace("h-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { height: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else styles = styles.concat(`.${className} { height: ${value} ${flag}}`);
      break;
    case "min-h":
      value = className.replace("min-h-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { min-height: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else
        styles = styles.concat(`.${className} { min-height: ${value} ${flag}}`);
      break;
    case "max-h":
      value = className.replace("max-h-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { max-height: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else
        styles = styles.concat(`.${className} { max-height: ${value} ${flag}}`);
      break;
    case "w":
      value = className.replace("w-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { width: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else styles = styles.concat(`.${className} { width: ${value} ${flag}}`);
      break;
    case "min-w":
      value = className.replace("min-w-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { min-width: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else
        styles = styles.concat(`.${className} { min-width: ${value} ${flag}}`);
      break;
    case "max-w":
      value = className.replace("max-w-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { max-width: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else
        styles = styles.concat(`.${className} { max-width: ${value} ${flag}}`);
      break;
    case "m":
      value = className.replace("m-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { margin: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else styles = styles.concat(`.${className} { margin: ${value} ${flag}}`);
      break;
    case "mt":
      value = className.replace("mt-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { margin-top: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else
        styles = styles.concat(`.${className} { margin-top: ${value} ${flag}}`);
      break;
    case "mr":
      value = className.replace("mr-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { margin-right: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else
        styles = styles.concat(
          `.${className} { margin-right: ${value} ${flag}}`
        );
      break;
    case "mb":
      value = className.replace("mb-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { margin-bottom: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else
        styles = styles.concat(
          `.${className} { margin-bottom: ${value} ${flag}}`
        );
      break;
    case "ml":
      value = className.replace("ml-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { margin-left: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else
        styles = styles.concat(
          `.${className} { margin-left: ${value} ${flag}}`
        );
      break;
    case "my":
      value = className.replace("my-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { margin-top: calc(var(--base, 0.45) * ${value}) ${flag}; margin-bottom: calc(var(--base, 0.45) * ${value}) ${flag}; }`
        );
      else
        styles = styles.concat(
          `.${className} { margin-top: ${value} ${flag};  margin-bottom: ${value} ${flag}}`
        );
      break;
    case "mx":
      value = className.replace("mx-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { margin-right: calc(var(--base, 0.45) * ${value}) ${flag}; margin-left: calc(var(--base, 0.45) * ${value}) ${flag}; }`
        );
      else
        styles = styles.concat(
          `.${className} { margin-right: ${value} ${flag};  margin-left: ${value} ${flag}}`
        );
      break;
    case "p":
      value = className.replace("p-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { padding: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else styles = styles.concat(`.${className} { padding: ${value} ${flag}}`);
      break;
    case "pt":
      value = className.replace("pt-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { padding-top: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else
        styles = styles.concat(
          `.${className} { padding-top: ${value} ${flag}}`
        );
      break;
    case "pr":
      value = className.replace("pr-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { padding-right: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else
        styles = styles.concat(
          `.${className} { padding-right: ${value} ${flag}}`
        );
      break;
    case "pb":
      value = className.replace("pb-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { padding-bottom: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else
        styles = styles.concat(
          `.${className} { padding-bottom: ${value} ${flag}}`
        );
      break;
    case "pl":
      value = className.replace("pl-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { padding-left: calc(var(--base, 0.45) * ${value}) ${flag}}`
        );
      else
        styles = styles.concat(
          `.${className} { padding-left: ${value} ${flag}}`
        );
      break;
    case "py":
      value = className.replace("py-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { padding-top: calc(var(--base, 0.45) * ${value}) ${flag}; padding-bottom: calc(var(--base, 0.45) * ${value}) ${flag}; }`
        );
      else
        styles = styles.concat(
          `.${className} { padding-top: ${value} ${flag};  padding-bottom: ${value} ${flag}}`
        );
      break;
    case "px":
      value = className.replace("px-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { padding-right: calc(var(--base, 0.45) * ${value}) ${flag}; padding-left: calc(var(--base, 0.45) * ${value}) ${flag}; }`
        );
      else
        styles = styles.concat(
          `.${className} { padding-right: ${value} ${flag};  padding-left: ${value} ${flag}}`
        );
      break;
    case "gap":
      value = className.replace("gap-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { gap: calc(var(--base, 0.45) * ${value}) ${flag} }`
        );
      else styles = styles.concat(`.${className} { gap: ${value} ${flag} }`);
      break;
    case "gap-y":
      value = className.replace("gap-y-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { row-gap: calc(var(--base, 0.45) * ${value}) ${flag} }`
        );
      else
        styles = styles.concat(`.${className} { row-gap: ${value} ${flag} }`);
      break;
    case "gap-x":
      value = className.replace("gap-x-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { column-gap: calc(var(--base, 0.45) * ${value}) ${flag} }`
        );
      else
        styles = styles.concat(
          `.${className} { column-gap: ${value} ${flag} }`
        );
      break;
    case "radius":
      value = className.replace("radius-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (value === "cirlce") value = "50%";
      if (value === "oval") value = "35%";
      if (Number(value))
        styles = styles.concat(
          `.${className} { border-radius: calc(var(--base, 0.45) * ${value}) ${flag} }`
        );
      else
        styles = styles.concat(
          `.${className} { border-radius: ${value} ${flag} }`
        );
      break;
    case "radius-t":
      value = className.replace("radius-t-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (value === "cirlce") value = "50%";
      if (value === "oval") value = "35%";
      if (Number(value))
        styles = styles.concat(
          `.${className} { border-radius-top-right: calc(var(--base, 0.45) * ${value}) ${flag};  border-radius-top-left: calc(var(--base, 0.45) * ${value}) ${flag}  }`
        );
      else
        styles = styles.concat(
          `.${className} { border-radius-top-right: ${value} ${flag};  border-radius-top-left: ${value} ${flag}  }`
        );
      break;
    case "radius-r":
      value = className.replace("radius-r-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (value === "cirlce") value = "50%";
      if (value === "oval") value = "35%";
      if (Number(value))
        styles = styles.concat(
          `.${className} { border-radius-top-right: calc(var(--base, 0.45) * ${value}) ${flag};  border-radius-bottom-right: calc(var(--base, 0.45) * ${value}) ${flag}  }`
        );
      else
        styles = styles.concat(
          `.${className} { border-radius-top-right: ${value} ${flag};  border-radius-bottom-right: ${value} ${flag}  }`
        );
      break;
    case "radius-b":
      value = className.replace("radius-b-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (value === "cirlce") value = "50%";
      if (value === "oval") value = "35%";
      if (Number(value))
        styles = styles.concat(
          `.${className} { border-radius-bottom-right: calc(var(--base, 0.45) * ${value}) ${flag};  border-radius-bottom-left: calc(var(--base, 0.45) * ${value}) ${flag}  }`
        );
      else
        styles = styles.concat(
          `.${className} { border-radius-bottom-right: ${value} ${flag};  border-radius-bottom-left: ${value} ${flag}  }`
        );
      break;
    case "radius-l":
      value = className.replace("radius-l-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (value === "cirlce") value = "50%";
      if (value === "oval") value = "35%";
      if (Number(value))
        styles = styles.concat(
          `.${className} { border-radius-top-left: calc(var(--base, 0.45) * ${value}) ${flag};  border-radius-bottom-left: calc(var(--base, 0.45) * ${value}) ${flag}  }`
        );
      else
        styles = styles.concat(
          `.${className} { border-radius-top-left: ${value} ${flag};  border-radius-bottom-left: ${value} ${flag}  }`
        );
      break;
    case "radius-t-r":
      value = className.replace("radius-t-r-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (value === "cirlce") value = "50%";
      if (value === "oval") value = "35%";
      if (Number(value))
        styles = styles.concat(
          `.${className} { border-radius-top-right: calc(var(--base, 0.45) * ${value}) ${flag} }`
        );
      else
        styles = styles.concat(
          `.${className} { border-radius-top-right: ${value} ${flag} }`
        );
      break;
    case "radius-t-l":
      value = className.replace("radius-t-l-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (value === "cirlce") value = "50%";
      if (value === "oval") value = "35%";
      if (Number(value))
        styles = styles.concat(
          `.${className} { border-radius-top-left: calc(var(--base, 0.45) * ${value}) ${flag} }`
        );
      else
        styles = styles.concat(
          `.${className} { border-radius-top-left: ${value} ${flag} }`
        );
      break;
    case "radius-b-r":
      value = className.replace("radius-b-r-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (value === "cirlce") value = "50%";
      if (value === "oval") value = "35%";
      if (Number(value))
        styles = styles.concat(
          `.${className} { border-radius-bottom-right: calc(var(--base, 0.45) * ${value}) ${flag} }`
        );
      else
        styles = styles.concat(
          `.${className} { border-radius-bottom-right: ${value} ${flag} }`
        );
      break;
    case "radius-b-l":
      value = className.replace("radius-b-l-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (value === "cirlce") value = "50%";
      if (value === "oval") value = "35%";
      if (Number(value))
        styles = styles.concat(
          `.${className} { border-radius-bottom-left: calc(var(--base, 0.45) * ${value}) ${flag} }`
        );
      else
        styles = styles.concat(
          `.${className} { border-radius-bottom-left: ${value} ${flag} }`
        );
      break;
    case "scale":
      value = className.replace("scale-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(
        `.${className} { transform: scale(${value}) ${flag}}`
      );
      break;
    case "scale-y":
      value = className.replace("scale-y-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(
        `.${className} { transform: scaleY(${value}) ${flag}}`
      );
      break;
    case "scale-x":
      value = className.replace("scale-x-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(
        `.${className} { transform: scaleX(${value}) ${flag}}`
      );
      break;
    case "skew-y":
      value = className.replace("skew-y-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(
        `.${className} { transform: skewY(${value}) ${flag}}`
      );
      break;
    case "skew-x":
      value = className.replace("skew-x-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(
        `.${className} { transform: skewX(${value}) ${flag}}`
      );
      break;
    case "rotate":
      value = className.replace("rotate-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(
        `.${className} { transform: rotate(${value}) ${flag}}`
      );
      break;
    case "fnt":
      value = className.replace("fnt-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { font-size: calc(var(--base, 0.45) * ${value}) ${flag} }`
        );
      else styles = styles.concat(`.${className} { font: ${value} ${flag} }`);
      break;
    case "weit":
      value = className.replace("weit-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { font-weight: ${value} ${flag}}`);
      break;
    case "letter-sp":
      value = className.replace("letter-sp-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (Number(value))
        styles = styles.concat(
          `.${className} { letter-spacing: calc(var(--base, 0.45) * ${value}) ${flag} }`
        );
      else
        styles = styles.concat(
          `.${className} { letter-spacing: ${value} ${flag} }`
        );
      break;
    case "line-h":
      value = className.replace("line-h-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { line-height: ${value} ${flag}}`);
      if (Number(value))
        styles = styles.concat(
          `.${className} { line-height: calc(var(--base, 0.45) * ${value}) ${flag} }`
        );
      else
        styles = styles.concat(
          `.${className} { line-height: ${value} ${flag} }`
        );
      break;
    case "limit-lines":
      value = className.replace("limit-lines-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(
        `.${className}-${value} { display: -webkit-box ${flag}; overflow: hidden ${flag}; -webkit-box-orient: vertical ${flag}; -webkit-line-clamp: ${value} ${flag}; line-height: ${value} ${flag} } `
      );
      break;
    case "text":
      value = className.replace("text-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (value === "r") value = "right";
      if (value === "l") value = "left";
      styles = styles.concat(
        `.${className}-${value} { text-align: ${value} ${flag}} `
      );
      break;
    case "wob":
      value = className.replace("wob-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { word-break: ${value} ${flag}}`);
      break;
    case "white-sp":
      value = className.replace("white-sp-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { white-space: ${value} ${flag}}`);
      break;
    case "hy":
      value = className.replace("hy-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { hyphens: ${value} ${flag}}`);
      break;
    case "line-b":
      value = className.replace("line-b-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { line-break: ${value} ${flag}}`);
      break;
    case "list":
      value = className.replace("list-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { list-style: ${value} ${flag}}`);
      break;
    case "op":
      value = className.replace("op-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { opacity: ${value} ${flag}}`);
      break;
    case "cu":
      value = className.replace("cu-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { cursor: ${value} ${flag}}`);
      break;
    case "pe":
      value = className.replace("pe-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(
        `.${className} { pointer-events: ${value} ${flag}}`
      );
      break;
    case "touch-a":
      value = className.replace("touch-a-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(
        `.${className} { touch-actions: ${value} ${flag}}`
      );
      break;
    case "fl":
      value = className.replace("fl-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (value === "r") value = "right";
      if (value === "l") value = "left";
      styles = styles.concat(`.${className} { float: ${value} ${flag}}`);
      break;
    case "cl":
      value = className.replace("cl-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (value === "r") value = "right";
      if (value === "l") value = "left";
      styles = styles.concat(`.${className} { clear: ${value} ${flag}}`);
      break;
    case "ov":
      value = className.replace("ov-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { overflow: ${value} ${flag}}`);
      break;
    case "ov-y":
      value = className.replace("ov-y-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { overflow-y: ${value} ${flag}}`);
      break;
    case "ov-x":
      value = className.replace("ov-x-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { overflow-x: ${value} ${flag}}`);
      break;
    case "flex":
      value = className.replace("flex-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { flex-wrap: ${value} ${flag}}`);
      break;
    case "cs":
      value = className.replace("cs-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(
        `.${className} { caption-sides: ${value} ${flag}}`
      );
      break;
    case "ec":
      value = className.replace("ec-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { empty-cells: ${value} ${flag}}`);
      break;
    case "content":
      value = className.replace("content-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(
        `.${className} { justify-content: ${value} ${flag}}`
      );
      break;
    case "items":
      value = className.replace("items-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { align-items: ${value} ${flag}}`);
      break;
    case "self":
      value = className.replace("self-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { align-self: ${value} ${flag}}`);
      break;
    case "order":
      value = className.replace("order-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { order: ${value} ${flag}}`);
      break;
    case "z":
      value = className.replace("z-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { z-index: ${value} ${flag}}`);
      break;
    case "scroll":
      value = className.replace("scroll-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(
        `.${className} { scroll-behavior: ${value} ${flag}}`
      );
      break;
    case "v-align":
      value = className.replace("v-align-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (value === "t") value = "top";
      if (value === "b") value = "bottom";
      if (value === "text-t") value = "text-top";
      if (value === "text-b") value = "text-bottom";
      styles = styles.concat(
        `.${className} { vertical-align: ${value} ${flag}}`
      );
      break;
    case "ba":
      value = className.replace("ba-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (value === "r") value = "right";
      if (value === "l") value = "left";
      styles = styles.concat(`.${className} { break-after: ${value} ${flag}}`);
      break;
    case "bb":
      value = className.replace("bb-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      if (value === "r") value = "right";
      if (value === "l") value = "left";
      styles = styles.concat(`.${className} { break-before: ${value} ${flag}}`);
      break;
    case "ap":
      value = className.replace("ap-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { appearance: ${value} ${flag}}`);
      break;
    case "blur":
      value = className.replace("blur-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(`.${className} { filter: blur(${value}) ${flag}}`);
      break;
    case "contrast":
      value = className.replace("contrast-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(
        `.${className} { filter: contrast(${value}) ${flag}}`
      );
      break;
    case "brightness":
      value = className.replace("brightness-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(
        `.${className} { filter: brightness(${value}) ${flag}}`
      );
      break;
    case "backdrop-filter":
      value = className.replace("backdrop-filter-", "");
      className = formatClassName(className);
      value = checkVar(value);
      value = formatPropertyValue(value);
      styles = styles.concat(
        `.${className} { backdrop-filter: blur(${value}) ${flag}}`
      );
      break;
    default:
      console.log("default");
      break;
  }
};


