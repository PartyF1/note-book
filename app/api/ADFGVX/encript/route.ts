import { ALPHABETS } from "@/dictionaries/alphabets"
import { NextResponse } from "next/server";
import { ISquare, IParams } from "../interfaces/interface";
import { generateTable } from "../utils/utils";

export async function POST(req: Request) {
    const getElement = (char: string, table: ISquare) => {
        for (let row in table) {
            for (let column in table[row]) {
                if (char === table[row][column]) {
                    return row + column;
                }
            }
        }
    }

    const shift = (text: string, table: ISquare) => {
        const newText = Array.from(text.replace(/[^a-zA-Zа-яА-Я0-9]/g, "").toUpperCase());
        return newText.map((element) => {
            return getElement(element, table)!;
        })
    }

    const replace = (text: string[], keyWord: string) => {
        if (keyWord) {
            const columns = keyWord.length;
            const table = [Array.from(keyWord.toUpperCase())];
            text.forEach((elem, id) => {
                (id + columns) % columns === 0 ?
                    table.push([elem]) :
                    table[Math.floor((id + columns) / columns)].push(elem);
            })
            while (table[table.length - 1].length - 1 < columns - 1) {
                table[table.length - 1].push('0');
            }
            for (let i = 0; i < columns - 1; i++) {
                for (let j = 0; j < columns - 1; j++) {
                    if (table[0][j] > table[0][j + 1]) {
                        for (let row = 0; row < table.length; row++) {
                            [table[row][j], table[row][j + 1]] = [table[row][j + 1], table[row][j]];
                        }
                    }
                }
            }
            table.shift()
            console.log(table)
            return table.map((elem) => elem.join('')).toString().replaceAll(',', '').replaceAll('0', '');
        } else {
            return text.join();
        }
    }

    const encript = (text: string, polybiusKey: string, keyWord: string) => {
        return replace(shift(text, generateTable(polybiusKey)), keyWord);
    }

    try {
        const { text, polybiusKey, keyWord }: IParams = await req.json();
        return NextResponse.json({ data: encript(text, polybiusKey, keyWord) })
    } catch (e) {
        console.error(e);
    }
}