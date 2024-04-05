const body = document.querySelector("body");

// functions

import { getBrowserClasses } from "./modules/getBrowserClasses";
import { handleClasses } from "./modules/handleClasses"

// includes

import { base } from "./base/base"

let stylePlaceholder = ""

const classes = getBrowserClasses();

classes.forEach((element: string) => {
  stylePlaceholder = `${stylePlaceholder}${handleClasses(element)}`
});

body.innerHTML = `
    <style>
      ${base}
      ${stylePlaceholder}
      </style>
      ${body.innerHTML}
`;

console.log(`${stylePlaceholder}`)


