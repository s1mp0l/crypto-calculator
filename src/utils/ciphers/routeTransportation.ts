export const routeTransportationDecrypt = (input: string, key: string, alphabet: string) => {
  const numKey = +key
  const wordsInput = input.toLowerCase().split(' ')

  console.log(key)

  let square = [...new Array<string[]>(wordsInput[0].length)]
  square = square.map(el => new Array<string>(numKey))
  for (let i = 0; i < wordsInput[0].length; i++) {
    for (let j = 0; j < numKey; j++) {
      square[i][j] = wordsInput[j][i];
    }
  }

  let result = square.map( (el, index) => index % 2 == 0 ? el.join('') : el.reverse().join('')).join()

  return result
}