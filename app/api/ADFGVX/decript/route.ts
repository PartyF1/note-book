import { ALPHABETS } from "@/dictionaries/alphabets"
import { NextResponse } from "next/server";
import { ISquare, IParams } from "../interfaces/interface";
import { generateTable } from "../utils/utils";


export async function POST(req: Request) {
    const getElement = (row: string, column: string, table: ISquare) => {
        return table[row][column];
    }

    const shift = (text: string[], table: ISquare) => {
        return text.reduce((result: string, current: string) => {
            return result += getElement(current[0], current[1], table)
        }, '')
    }

    const replace = (text: string, keyWord: string) => {
        if (keyWord && text) {
            const textArr = text.match(/.{1,2}/g);
            const columns = keyWord.length;
            const table = [Array.from(keyWord.toUpperCase()).sort()];
            textArr!.forEach((elem, id) => {
                (id + columns) % columns === 0 ?
                    table.push([elem]) :
                    table[Math.floor((id + columns) / columns)].push(elem);
            })
            console.log(table)
            while (table[table.length - 1].length - 1 < columns - 1) {
                table[table.length - 1].push('0');
            }
            const keyArr = Array.from(keyWord.toUpperCase());
            for (let i = 0; i < columns; i++) {
                const index = keyArr.indexOf(table[0][i]);
                for (let row = 0; row < table.length; row++) {
                    [table[row][i], table[row][index]] = [table[row][index], table[row][i]];
                }
            }
            table.shift()
            console.log(table)
            console.log(table.flat())
            const result = table.flat().filter(element => element !== '0');
            return result;
        }
    }

    const decript = (text: string, polybiusKey: string, keyWord: string) => {
        return shift(replace(text, keyWord)!, generateTable(polybiusKey));
    }

    try {
        const { text, polybiusKey, keyWord }: IParams = await req.json();
        return NextResponse.json({ data: decript(text, polybiusKey, keyWord) })
    } catch (e) {
        console.error(e);
    }
}