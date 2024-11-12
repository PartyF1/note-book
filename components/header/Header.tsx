import Link from "next/link"
import style from './style.module.scss'

const Header = () => {
    return (
        <header className={style.header}>
            <Link className={style.link} href='/'>Главная</Link>
            <Link className={style.link} href='/cesarCypher'>Шифр Цезаря</Link>
            <Link className={style.link} href='/ADFGVX'>ADFGVX</Link>
        </header>
    )
}

export {Header}