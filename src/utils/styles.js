export const colors = {
  mainWhite: `#fff`,
  mainBlack: `#262626`,
  mainBlue: `#05a0d0`,
  secondaryBlue: `#33a5ff`,
  mainGrey: `#474747`,
}

export const textSlanted = `font-family: 'Caveat', cursive;`

export const transDefault = "transition: all .5s ease-in-out"

export const transFunction = (
  property = "all",
  time = ".5s",
  type = "linear"
) => {
  return `transition: ${property} ${time} ${type}`
}

export const transObject = ({
  property = "all",
  time = ".5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const transition = ({
  property = "all",
  time = ".5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const border = ({
  width = ".15rem",
  type = "solid",
  color = "white",
}) => {
  return `border: ${width}, ${type}, ${color}`
}

export const letterSpacing = ({ spacing = ".1rem" }) => {
  return `letterSpacing: ${spacing}`
}
