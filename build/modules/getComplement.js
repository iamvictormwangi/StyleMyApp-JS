var formatRgbString = function (color) {
    color = color.replaceAll("rgb(", "");
    color = color.replaceAll(")", "");
    var r = color.substr(0, color.indexOf(",")).replaceAll(" ", "");
    var gD = color
        .substr(color.indexOf(","), color.lastIndexOf(","))
        .replace(",", "");
    var g = gD.substr(0, gD.indexOf(",")).replaceAll(" ", "");
    var b = gD
        .substr(gD.indexOf(","), gD.length)
        .replace(",", "")
        .replaceAll(" ", "");
    return [r, g, b];
};
var rgbToHex = function (r, g, b) {
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));
    Number(r);
    Number(g);
    Number(b);
    /* @ts-ignore */
    var hexR = r.toString(16).padStart(2, "0");
    /* @ts-ignore */
    var hexG = g.toString(16).padStart(2, "0");
    /* @ts-ignore */
    var hexB = b.toString(16).padStart(2, "0");
    return "#".concat(hexR).concat(hexG).concat(hexB);
};
var convertColorToHex = function (color) {
    var colorMap = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        // Add more color names and values as needed
    };
    color = color.toLowerCase().replace(" ", "");
    if (color in colorMap) {
        return colorMap[color];
    }
    else {
        throw new Error("Color not found");
    }
};
var hexHandler = function (color) {
    if (!color.startsWith("#")) {
        throw new Error("The value provided is not a hex value");
    }
    else {
        return generateComplement(color);
    }
};
var rgbHandler = function (color) {
    if (!color.startsWith("rgb(")) {
        throw new Error("The value provided is not a rgb value");
    }
    else {
        return generateComplement(rgbToHex.apply(void 0, formatRgbString(color)));
    }
};
var colorHandler = function (color) {
    if (color.startsWith("#") || color.startsWith("rgb(")) {
        throw new Error("The value provided is an error");
    }
    else {
        return generateComplement(convertColorToHex(color));
    }
};
var complement = function (color) {
    if (color.startsWith("#")) {
        return hexHandler(color);
    }
    else if (color.startsWith("rgb")) {
        return rgbHandler(color);
    }
    else {
        return colorHandler(color);
    }
};
