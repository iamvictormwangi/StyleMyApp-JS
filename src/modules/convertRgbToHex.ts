export const convertRgbToHex = (r, g, b) => {

  let _r = r
  let _g = g
  let _b = b

  _r = Math.min(255, Math.max(0, r));
  _g = Math.min(255, Math.max(0, g));
   _b = Math.min(255, Math.max(0, b));

  const hexR = _r.toString(16).padStart(2, "0");
  const hexG = _g.toString(16).padStart(2, "0");
  const hexB = _b.toString(16).padStart(2, "0");

  return `#${hexR}${hexG}${hexB}`;
};
