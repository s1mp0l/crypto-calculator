export const alphabetOffsetDecrypt = (input: string, offset: number, alphabet: string) : string => {
    return input.toLowerCase().split('')
        .map( (char, index) => (alphabet.indexOf(char) === -1) ?
            char :
            alphabet[ (alphabet.indexOf(char) - offset + alphabet.length) % alphabet.length ]
        )
        .join('')
}