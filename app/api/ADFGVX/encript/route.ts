import { ALPHABETS } from "@/dictionaries/alphabets"
import { NextResponse } from "next/server";

interface IParams {
    text: string,
    keyWord: string
}

export async function POST(req: Request) {
    const generateTable = (polybiusKey:string) => {
        interface ISquare {
            [key: string] : {[key : string] : string}
        }

        const alphabet = ALPHABETS.EN.toString().toUpperCase()+'0123456789';

        const uniqAlphabet: string[] = [];
        for (let char of polybiusKey+alphabet) {
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

    const shift = (text: string, table: string[]) => {

    }

    const replace = (text: string, keyWord: string) => {

    }

    const encript = (text: string, keyWord: string) => {
        return replace(shift(text, generateTable()), keyWord);
    } 

    try {
        const { text, keyWord}: IParams = await req.json();
        return NextResponse.json({ data: encript(text, keyWord) })
    } catch (e) {
        console.error(e);
    }
}