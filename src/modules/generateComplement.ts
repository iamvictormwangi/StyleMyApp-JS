import { convertRgbToHex } from "./convertRgbToHex";
import { convertHslToHex } from "./convertHslToHex";

function handleComplement(color) {

  // Remove the "#" character
  color = color.slice(1);

  // Parse the hexadecimal color into RGB channels
  const r = parseInt(color.slice(0, 2), 16);
  const g = parseInt(color.slice(2, 4), 16);
  const b = parseInt(color.slice(4, 6), 16);

  // Calculate the complement color by subtracting each channel from 255
  const complementR = 255 - r;
  const complementG = 255 - g;
  const complementB = 255 - b;

  // Convert the complement color back to a valid color representation
  const complementColor = `#${complementR.toString(16).padStart(2, '0')}${complementG.toString(16).padStart(2, '0')}${complementB.toString(16).padStart(2, '0')}`;

  return complementColor;
}

export const generateComplement = (color) => {
  let x = color
    .replace("complement(", "")
    .replace("compl(", "")
    .slice(0, -1)

  if (x.startsWith("rgb")) {
    x = x
      .replace("rgb(", "")
      .replace(")", "");

    x = x.split(",");

    /* @ts-ignore */
    return handleComplement(convertRgbToHex(...x));
  }

  if (x.startsWith("hsl")) {
    x = x
      .replace("hsl(", "")
      .replace(")", "")

    x = x.split(",");

    /* @ts-ignore */
    return handleComplement(convertHslToHex(...x))
  }

  if (x.startsWith("#"))
    return handleComplement(x)

};
