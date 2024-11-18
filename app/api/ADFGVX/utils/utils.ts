import { ALPHABETS } from "@/dictionaries/alphabets";
import { ISquare } from "../interfaces/interface";

export const generateTable = (polybiusKey: string) => {
    const alphabet = ALPHABETS.EN.toString().toUpperCase().replaceAll(',', '') + '0123456789';

    const uniqAlphabet: string[] = [];
    for (let char of polybiusKey.toUpperCase() + alphabet) {
        if (!uniqAlphabet.includes(char)) {
            uniqAlphabet.push(char);
        }
    }

    const square: ISquare = {};
    let index = 0;
    for (let row of "ADFGVX") {
        square[row] = {}
        for (let column of "ADFGVX") {
            square[row][column] = uniqAlphabet[index];
            index++;
        }
    }

    return square;
}