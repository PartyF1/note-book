//import style from './cesar.module.scss';

export const CesarСypherComponent = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    const shift = (index: number, range: number, alphabet: string[]) => {
        if (index + range > alphabet.length) {
            return alphabet[index - alphabet.length + range]
        } else if (index + range < 0) {
            return alphabet[alphabet.length - index + range]
        } else {
            return alphabet[index + range]
        }
    }

    const handleShiftMethod = () => {

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

        </div>
    )
}