export const viginerDecrypt = (input: string, key: string, alphabet: string) => {
  key = key.replace(/\s+/gi, '').toLowerCase()
  input = input.toLowerCase()

  let square = new Array<String>()
  for (let i = 0; i < alphabet.length; i++) {
    square[i] = alphabet.slice(i).concat(alphabet.slice(0, i));
  }

  let result = ''
  let j = 0
  for (let i = 0; i < input.length; i++) {
    if (alphabet.indexOf(input[i]) === -1) {
      result += input[i]
      continue
    }
    let row = alphabet.indexOf(key[j % key.length])
    let col = square[row].indexOf(input[i]);
    result += alphabet[col];
    j++
  }

  return result
}