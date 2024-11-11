import { ALPHABETS } from "@/dictionaries/alphabets"
import { NextResponse } from "next/server";
import { encrypt } from "../methods";

interface IParams {
    text: string,
    range: number
    alphabet: string
}

export async function POST(req: Request) {
    try {
        const { text, range, alphabet }: IParams = await req.json();
        return NextResponse.json({ data: encrypt(text, range, alphabet === 'latin' ? ALPHABETS.EN : ALPHABETS.RU) })
    } catch (e) {
        console.error(e);
    }
}