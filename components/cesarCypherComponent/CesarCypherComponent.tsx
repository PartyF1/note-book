'use client'
import { useRef, useState } from "react";
import style from './style.module.scss';
import { ALPHABETS } from "@/dictionaries/alphabets";
import { METHODS } from "@/enums/methods";

type Method = {
    method: METHODS
}

export const CesarСypherComponent = ({ method }: Method) => {
    const inputValue = useRef<HTMLInputElement>(null);
    const inputRange = useRef<HTMLInputElement>(null);
    const [result, setResult] = useState('');
    const [selectedAlphabet, setSelectedAlphabet] = useState('latin');

    const shift = (index: number, range: number, alphabet: string[]) => {
        if (range > alphabet.length)
            range %= alphabet.length;
        if (index + range >= alphabet.length) {
            return alphabet[index - alphabet.length + range]
        } else if (index + range < 0) {
            return alphabet[alphabet.length - index + range]
        } else {
            return alphabet[index + range]
        }
    }

    const alphabet = selectedAlphabet === 'latin' ? ALPHABETS.EN : ALPHABETS.RU;

    const handleSubmit = () => {
        setResult(encrypt(inputValue.current!.value, Number(inputRange.current?.value), alphabet));
    }

    const encrypt = (text: string, range: number, alphabet: string[]) => {
        let result = '';
        for (const char of text) {
            if (alphabet.includes(char.toLowerCase())) {
                const newChar = shift(alphabet.findIndex(elem => elem === char.toLowerCase()), range, alphabet)
                if (char.toUpperCase() === char) {
                    result += newChar.toUpperCase()
                } else {
                    result += newChar;
                }
            } else {
                result += char;
            }
        }
        return result;
    }

    return (
        <div className={style.container}>
            {method === METHODS.ENCRYPT &&
                <div>
                    <div>
                        <label htmlFor="text" className={style.label}>Введите текст</label>
                        <input type="text" id="text" ref={inputValue} required className={style.inputText} />
                    </div>
                    <div>
                        <label htmlFor="range" className={style.label}>Введите сдвиг</label>
                        <input type="number" id="range" ref={inputRange} required className={style.inputRange} />
                    </div>
                    <div>
                        <label htmlFor="dropdown" className={style.label}>Выберите алфавит</label>
                        <select
                            id="dropdown"
                            className={style.dropdown}
                            value={selectedAlphabet}
                            onChange={(e) => setSelectedAlphabet(e.target.value)}
                        >
                            <option value="latin">Латиница</option>
                            <option value="cyrillic">Кириллица</option>
                        </select>
                    </div>
                    <div>
                        <label className={style.label}>Итоговый результат</label>
                        <textarea value={result} disabled className={style.textarea} />
                    </div>
                    <button onClick={handleSubmit} className={style.button}>Нажми</button>
                </div>
            }
            {method === METHODS.HACK &&
                <div>
                    
                </div>
            }
        </div>
    )
}
