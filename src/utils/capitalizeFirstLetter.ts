interface ICapitalizeFirstLetter {
  string: string
}

export const capitalizeFirstLetter = ({ string }: ICapitalizeFirstLetter) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
