const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = [];
    let k;
    let finalArray = [];
    for (let i = 0; i < expr.length / 10; i++) {
        k = expr.slice(i * 10, (i + 1) * 10);
        arr.push(k);

        for (j = 0; j < 10; j++) {
            if ((arr[i])[j] != '0') {
                finalArray.push(((arr[i])).slice(j, 10).replaceAll('11', '-').replaceAll('10', '.').replaceAll('**********', ' '));
                break;
            }
        }
    }

    for (let key in MORSE_TABLE) {
        for (let m = 0; m < finalArray.length; m++) {
            if (key === finalArray[m]) {
                finalArray[m] = MORSE_TABLE[key];
            }
        }
    }
    return finalArray.join('');
}

module.exports = {
    decode
}