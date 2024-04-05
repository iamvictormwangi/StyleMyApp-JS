import { formatClassName, formatPropertyValue } from "./formatters";

export const returner = (
  className: string,
  property: string,
  numberType: boolean,
  flag: string
) => {

  if (
    className.includes("facebook-old") ||
    className.includes("facebook") ||
    className.includes("twitter") ||
    className.includes("youtube") ||
    className.includes("linkedin") ||
    className.includes("instagram") ||
    className.includes("google") ||
    className.includes("pinterest") ||
    className.includes("vimeo") ||
    className.includes("tumblr") ||
    className.includes("snapchat") ||
    className.includes("whatsapp") ||
    className.includes("tiktok") ||
    className.includes("mastadon") ||
    className.includes("amazon") ||
    className.includes("microsoft") ||
    className.includes("medium") ||
    className.includes("yahoo") ||
    className.includes("twitch") ||
    className.includes("soundcloud") ||
    className.includes("spotify") ||
    className.includes("reddit") ||
    className.includes("quora") ||
    className.includes("discord") ||
    className.includes("telegram") ||
    className.includes("github") ||
    className.includes("gitlab") ||
    className.includes("hackernews")
  )
    return `.${formatClassName(className)}{${property}: var(--${formatPropertyValue(className)})${flag}}`;

  if (
    className.startsWith("sans-serif") ||
    className.startsWith("serif") ||
    className.startsWith("monospace") ||
    className.startsWith("courier") ||
    className.startsWith("helvetica") ||
    className.startsWith("avenir") ||
    className.startsWith("athelas") ||
    className.startsWith("georgia") ||
    className.startsWith("times") ||
    className.startsWith("bodoni") ||
    className.startsWith("calisto") ||
    className.startsWith("garamold") ||
    className.startsWith("baskerville") ||
    className.startsWith("roboto") ||
    className.startsWith("open-sans") ||
    className.startsWith("noto-sans-japanese") ||
    className.startsWith("montserrat") ||
    className.startsWith("lato") ||
    className.startsWith("poppins") ||
    className.startsWith("inter") ||
    className.startsWith("oswald") ||
    className.startsWith("raleway") ||
    className.startsWith("noto-sans") ||
    className.startsWith("ubuntu")
  )
    return `.${formatClassName(className)}{font-family:var(--${formatPropertyValue(className)})${flag}}`;

  if (
    className.includes("grid-cols-") ||
    className.includes("grid-rows-")
  ) {
    if (numberType && Number(formatPropertyValue(className)))
      return `.${formatClassName(className)}{${property}: repeat(${formatPropertyValue( className)}, minmax(0, 1fr)) ${flag}}`;
    else
      return `.${formatClassName(className)}{${property}:${formatPropertyValue(className)}${flag}}`;
  }

  if (
    property === "box-shadow"
  ) {
    if (numberType && Number(formatPropertyValue(className)))
      return `.${formatClassName(className)}{box-shadow:var(--shadow-${formatPropertyValue(className)})${flag}}`
    else
      return `.${formatClassName(className)}{${property}:${formatPropertyValue(className)}${flag}}`;
  }

  if (property.includes(",")) {
    const property1 = property.substring(0, property.indexOf(","));
    const property2 = property.substring(property.indexOf(",") + 1);

    if (numberType && Number(formatPropertyValue(className)))
      return `.${formatClassName(className)}{${property1}: calc(var(--base, 0.45rem) * ${formatPropertyValue(className)})${flag}; ${property2}: calc(var(--base, 0.45rem) * ${formatPropertyValue(className)})${flag};}`;
    else
      return `.${formatClassName(className)}{${property1}:${formatPropertyValue(className)}${flag}; ${property2}:${formatPropertyValue(className)}${flag}}`;}

  if (numberType && Number(formatPropertyValue(className)))
    return `.${formatClassName(className)}{${property}: calc(var(--base, 0.45rem) * ${formatPropertyValue(className)})${flag}}`;
  else
    return `.${formatClassName(className)}{${property}:${formatPropertyValue(className)}${flag}}`;
};
