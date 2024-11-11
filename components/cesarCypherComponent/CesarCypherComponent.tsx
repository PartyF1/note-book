'use client'
import { FormEvent, useRef, useState } from "react";
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

    const handleSubmitEncription = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch(`/api/cesarCypher/encript`, {
            method: 'POST',
            body: JSON.stringify({
                text: inputValue.current?.value,
                range: Number(inputRange.current?.value),
                alphabet: selectedAlphabet
            }),
        });
        const { data } = await response.json();
        setResult(data);
    }

    const handleSubmitHack = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch(`/api/cesarCypher/hack`, {
            method: 'POST',
            body: JSON.stringify({
                text: inputValue.current?.value,
            }),
        });
        const { data } = await response.json();
        setResult(data);
    }

    return (
        <div className={style.container}>
            {method === METHODS.ENCRYPT &&
                <form onSubmit={handleSubmitEncription}>
                    <div>
                        <label htmlFor="text" className={style.label}>Введите текст</label>
                        <input type="text" id="text" name="text" ref={inputValue} required className={style.inputText} />
                    </div>
                    <div>
                        <label htmlFor="range" className={style.label}>Введите сдвиг</label>
                        <input type="number" id="range" name="range" ref={inputRange} required className={style.inputRange} />
                    </div>
                    <div>
                        <label htmlFor="dropdown" className={style.label}>Выберите алфавит</label>
                        <select
                            id="dropdown"
                            name="alphabet"
                            className={style.dropdown}
                            value={selectedAlphabet}
                            onChange={(e) => setSelectedAlphabet(e.target.value)}
                        >
                            <option value="latin">Латиница</option>
                            <option value="cyrillic">Кириллица</option>
                        </select>
                    </div>

                    <button type="submit" className={style.button}>Нажми</button>
                </form>
            }
            {method === METHODS.HACK &&
                <form onSubmit={handleSubmitHack}>
                    <div>
                        <label htmlFor="text" className={style.label}>Введите текст</label>
                        <input type="text" id="text" name="text" ref={inputValue} required className={style.inputText} />
                    </div>
                    <button type="submit" className={style.button}>Нажми</button>
                </form>
            }
            <div>
                <label className={style.label}>Итоговый результат</label>
                <textarea value={result} disabled className={style.textarea} />
            </div>
        </div>
    )
}
