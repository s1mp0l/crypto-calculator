export const pairDecrypt = (input: string, key: string, alphabet: string) => {
  const keyLetters = key.replace(/\s+/gi, '').split('')
  const keyLettersSet = Array.from(new Set(keyLetters))
  const alphabetSet = alphabet.split('')
  const lettersNotInKey = alphabetSet.filter(l => !keyLettersSet.includes(l))

  const keyMap = new Map()
  for (let i = 0; i < keyLettersSet.length; i++) {
    keyMap.set(keyLettersSet[i], lettersNotInKey[i])
  }
  for (let i = 0; i < lettersNotInKey.length; i++) {
    keyMap.set(lettersNotInKey[i], keyLettersSet[i])
  }

  const words = input.toLowerCase().split(' ')
  const result = words.map(word => word.split('').map(l => keyMap.get(l)).join('')).join(' ')
  return result
}