import Link from "next/link";
import React from "react";

export default function CesarCypherLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div>
            <h1>Выберите опцию</h1>
            <Link href='/cesarCypher'>Шифратор</Link>
            <Link href='/cesarCypher/decript'>Взломщик</Link>
            {children}
        </div>
    )
}