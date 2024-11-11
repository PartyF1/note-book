import { ALPHABETS } from "@/dictionaries/alphabets";

const shift = (index: number, range: number, alphabet: string[]) => {
    if (Math.abs(range) > alphabet.length)
        range %= alphabet.length;  
    if (index + range >= alphabet.length) {
        return alphabet[index - alphabet.length + range]
    } else if (index + range < 0) {
        return alphabet[alphabet.length + index + range]
    } else {
        return alphabet[index + range]
    }
}

export const encrypt = (text: string, range: number, alphabet: string[]) => {
    let result = '';
    for (const char of text) {
        if (alphabet.includes(char.toLowerCase())) {
            const newChar = shift(alphabet.findIndex(elem => elem === char.toLowerCase()), range, alphabet)
            if (char.toUpperCase() === char) {
                result += newChar.toUpperCase()
            } else {
                result += newChar;
            }
        } else {
            result += char;
        }
    }
    return result;
}

const findFrequency = (text: string, alphabet: string[]) => {
    const withoutSpecialChars = text.replace(/[^a-zA-Zа-яА-Я]/g, "");
    const charSet: number[] = alphabet.map(() => {
        return 0;
    });
    for (let char of withoutSpecialChars) {
        charSet[alphabet.indexOf(char)]++;
    }
    return charSet.indexOf(Math.max(...charSet));
}

export const hack = (text: string) => {
    const alphabet = ALPHABETS.EN.some(element => text.includes(element.toLowerCase()))? ALPHABETS.EN : ALPHABETS.RU;
    const commonLetter = findFrequency(text, alphabet);
    const alphabetCommonLetter = ALPHABETS.EN === alphabet? 4: 15;
    const range = commonLetter > alphabetCommonLetter? alphabetCommonLetter - commonLetter: commonLetter - alphabetCommonLetter;
    return encrypt(text, range, alphabet);
}