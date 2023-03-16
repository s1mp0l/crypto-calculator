export const tarabarskayaRuDecrypt = (input: string) => {
    input = input.toLowerCase()

    const consonant1 = 'бвгджзклмн'
    const consonant2 = 'щшчцхфтсрп'
    return input
        .split('')
        .map((char: string) => {
            if (consonant1.indexOf(char) !== -1)
                return consonant2[consonant1.indexOf(char)]
            if (consonant2.indexOf(char) !== -1)
                return consonant1[consonant2.indexOf(char)]
            return char
        })
        .join('')
}

export const tarabarskayaRuEncrypt = (input: string) => {
  input = input.toLowerCase()

  const consonant1 = 'бвгджзклмн'
  const consonant2 = 'щшчцхфтсрп'
  return input
    .split('')
    .map((char: string) => {
      if (consonant1.indexOf(char) !== -1)
        return consonant2[consonant1.indexOf(char)]
      if (consonant2.indexOf(char) !== -1)
        return consonant1[consonant2.indexOf(char)]
      return char
    })
    .join('')
}