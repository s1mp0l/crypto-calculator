import {alphabetOffsetDecrypt} from "./alphabetOffsetDecrypt";

export const augustEncrypt = (input: string, alphabet: string) => alphabetOffsetDecrypt(input, 1, alphabet)

