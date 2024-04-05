import { convertRgbToHsl } from "./convertRgbToHsl";
import { convertHslToRgb } from "./convertHslToRgb";
import { convertHslToHex } from "./convertHslToHex";
import { convertRgbToHex } from "./convertRgbToHex";
import { convertColorToHex } from "./convertColorToHex"

const componentToHex = (c) => {
    const hex = Math.round(c).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

export const darken = (color: string = "", percent: string = "23)") => {
  // Parse the color string to get RGB values

  if (color.includes("hsl") || color.includes("rgb")) {
    color = color
      .replace("darken(", "")
      .slice(0, -1)
      + ")"
  } else {
    color = color
      .replace("darken(", "")
      .replace(")", "")
  }

  percent = String(percent).slice(0, -1)

  if (color.includes("hsl")) {
    color = color
      .replace("hsl(", "")
      .replace(")", "")

    /* @ts-ignore */
    color = convertHslToHex(...color.split(","))
  }

  if (color.includes("rgb")) {
    color = color
      .replace("rgb(", "")
      .replace(")", "")

    /* @ts-ignore */
    color = convertRgbToHex(...color.split(","))
  }

  if (!color.includes("hsl")) {
    if (!color.includes("rgb")) {
      if (!color.includes("#")) {
        color = convertColorToHex(color)
      }
    }
  }

  if (color) {

  const hex = color.replace(/^#/, "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Convert RGB to HSL
  let hsl = convertRgbToHsl(r, g, b);

  // Adjust the lightness
  hsl[2] = Math.max(0, hsl[2] - Number(percent));

  // Convert HSL back to RGB
  const rgb = convertHslToRgb(hsl[0], hsl[1], hsl[2]);

  // Format the RGB values into a hex color string
  return `#${componentToHex(rgb[0])}${componentToHex(rgb[1])}${componentToHex(rgb[2])}`;
  }
};
