import Link from "next/link"
import style from '../header/style.module.scss'

const Header = () => {
    return (
        <header className={style.header}>
            <Link className={style.link} href='/'>Главная</Link>
            <Link className={style.link} href='/pages/cesarCypher'>Шифр Цезаря</Link>
        </header>
    )
}

export {Header}