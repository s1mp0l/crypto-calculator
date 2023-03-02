export const prisonAlphabetDecrypt = (input: string, alphabet: string) => {
  let result = ''
  const inputArray = input.split(/\s+/)
  for (let i = 0; i < inputArray.length; i+=2) {
    result += alphabet[ (inputArray[i].length-1) * 5 + inputArray[i+1].length - 1 ]
  }
  return result
}