import { ALPHABETS } from "@/dictionaries/alphabets"
import { NextResponse } from "next/server";

interface IParams {
    text: string,
    keyWord: string
}

interface ISquare {
    [key: string] : {[key : string] : string}
}

export async function POST(req: Request) {


    const generateTable = (polybiusKey:string) => {


        const alphabet = ALPHABETS.EN.toString().toUpperCase().replaceAll(',', '')+'0123456789';

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

    const getElement = (char: string, table: ISquare) => {
        for (let elem of table) 
    }

    const shift = (text: string, table: ISquare) => {
        const newText = Array.from(text.replace(/[^a-zA-Zа-яА-Я0-9]/g, "").toUpperCase());
        return newText.reduce((result, current, id) => {
            return result += 
        })
    }

    const replace = (text: string, keyWord: string) => {

    }

    // const encript = (text: string, keyWord: string) => {
    //     return replace(shift(text, generateTable()), keyWord);
    // } 

    try {
        //const { text, keyWord}: IParams = await req.json();
        console.log(generateTable('TOOL'))
        //return NextResponse.json({ data: encript(text, keyWord) })
    } catch (e) {
        console.error(e);
    }
}