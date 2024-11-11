import { ALPHABETS } from "@/dictionaries/alphabets";
import { NextResponse } from "next/server";
import { hack } from "../methods";

export async function POST(req: Request) {
    try {
        const {text} = await req.json();
        return NextResponse.json({data: hack(text)})
    } catch (e) {
        console.error(e);
    }
}