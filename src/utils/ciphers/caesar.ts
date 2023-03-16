import {alphabetOffsetDecrypt} from "./alphabetOffsetDecrypt";

export const caesarDecrypt = (input: string, alphabet: string) => alphabetOffsetDecrypt(input, 3, alphabet)

export const improvedCaesarDecrypt = (input: string, key: string, alphabet: string) => {
    let j = 0;
    input = input.toLowerCase()
    key = key.toLowerCase()
    return input
        .split('')
        .map( (char, index) => (alphabet.indexOf(char) !== -1) ?
            alphabet[ (alphabet.indexOf(char) - alphabet.indexOf(key[j++%key.length]) + alphabet.length) % alphabet.length ]
            : char
        )
        .join('')
}

export const improvedCaesarEncrypt = (input: string, key: string, alphabet: string) => {
    let j = 0;
    input = input.toLowerCase()
    key = key.toLowerCase()
    return input
      .split('')
      .map( (char, index) => (alphabet.indexOf(char) !== -1) ?
        alphabet[ (alphabet.indexOf(char) + alphabet.indexOf(key[j++%key.length])) % alphabet.length ]
        : char
      )
      .join('')
}