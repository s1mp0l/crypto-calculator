export const columnTransportationDecrypt = (input: string, key: string, alphabet: string) => {
  key = Array.from(new Set(key.split(''))).join('')
  const keyAlphabetIndexes = key.toLowerCase()
    .split('')
    .sort((a,b) => alphabet.indexOf(a)-alphabet.indexOf(b))
  const numArrKey = key.toLowerCase().split('')
    .map( l => keyAlphabetIndexes.indexOf(l))

  const wordsInput = input.toLowerCase().split(' ')


  let square = [...new Array<string[]>(wordsInput[0].length)]
  square = square.map(el => new Array<string>(wordsInput.length))

  for (let i = 0; i < wordsInput[0].length; i++) {
    for (let j = 0; j < wordsInput.length; j++) {
      square[i][j] = wordsInput[j][i];
    }
  }

  let newSquare = [...new Array<string[]>(wordsInput[0].length)]
  newSquare = square.map(el => new Array<string>(wordsInput.length))
  for (let i = 0; i < wordsInput[0].length; i++) {
    for (let j = 0; j < wordsInput.length; j++) {
      newSquare[i][j] = square[i][numArrKey[j]]
    }
  }

  let result = newSquare.map( (el, index) => el.join('')).join('')
  console.log(result)
  return result
}