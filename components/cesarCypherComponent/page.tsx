//import style from './cesar.module.scss';

export const CesarСypherComponent = () => {
    let inputValue, inputRange, result;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const shift = (index: number, range: number, alphabet: string[]) => {
        if (range > alphabet.length) 
            range %= alphabet.length;
        if (index + range > alphabet.length) {
            return alphabet[index - alphabet.length + range]
        } else if (index + range < 0) {
            return alphabet[alphabet.length - index + range]
        } else {
            return alphabet[index + range]
        }
    }

    const handleShiftMethod = () => {
        // result = encrypt(inputValue as string, inputRange as number, alphabet);
    }

    const encrypt = (text: string, range: number, alphabet: string[]) => {
        let result = '';
        for (const char of text) {
            result += alphabet.includes(char) ? () => {
                const newChar = shift(alphabet.findIndex(elem => elem === char.toLowerCase()), range, alphabet)
                if (char.toUpperCase() === char) {
                    return newChar.toUpperCase()
                } else {
                    newChar;
                }
            } : char;
        }
        return result;
    }

    return (
        <div>
            <div>
                <label>Введите текст</label>
                <input type="text" ref={inputValue} />
            </div>
            <div>
                <label>Введите сдвиг</label>
                <input type="number" ref={inputRange} />
            </div>
            <div>
                <label>Введите сдвиг</label>
                <input ref={result} id="value" disabled/>
            </div>
            {/* <button onClick={() => handleShiftMethod()}/> */}
        </div>
    )
}