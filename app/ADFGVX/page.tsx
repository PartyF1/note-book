'use client'
import { FormEvent } from "react";

export default function Encript() {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await fetch('/api/ADFGVX/encript', {
            method: 'POST'
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"></input>
            <button type="submit">Жмяк</button>
        </form>
    )
}