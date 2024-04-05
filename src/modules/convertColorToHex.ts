import { colors } from "./../data/data"

export const convertColorToHex = (color: string = "") => {

  for (let index = 0; index < colors.length; index++) {
    if (colors[index].name.includes(color)) {
      return colors[index].hex
    }
  }

  console.error(`color was not found ${color}`)
}

