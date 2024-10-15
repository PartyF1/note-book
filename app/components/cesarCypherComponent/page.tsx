//import style from './cesar.module.scss';

export const CesarСypherComponent = () => {
    let inputValue = `I live in a house near the mountains. I have two brothers and one sister, and I was born last. My father teaches mathematics, and my mother is a nurse at a big hospital. My brothers are very smart and work hard in school. My sister is a nervous girl, but she is very kind. My grandmother also lives with us. She came from Italy when I was two years old. She has grown old, but she is still very strong. She cooks the best food!

    My family is very important to me. We do lots of things together. My brothers and I like to go on long walks in the mountains. My sister likes to cook with my grandmother. On the weekends we all play board games together. We laugh and always have a good time. I love my family very much.`, inputRange = 28, result;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

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

    const handleShiftMethod = () => {
        // result = encrypt(inputValue as string, inputRange as number, alphabet);
    }

    const encrypt = (text: string, range: number, alphabet: string[]) => {
        let result = '';
        for (const char of text) {
            if (alphabet.includes(char)) {
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
        <div>
            {/* <div>
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
            </div> */}
            {/* <button onClick={() => handleShiftMethod()}/> */}
            {encrypt(inputValue, inputRange, alphabet)}
        </div>
    )
}