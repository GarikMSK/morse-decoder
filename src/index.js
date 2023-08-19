const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};





function decode(expr) {
    // write your solution here

    
const newMORSE_TABLE = {}
for (const [key, value] of Object.entries(MORSE_TABLE)) {
    newKey = key.replaceAll("-","11").replaceAll(".","10").padStart(10, '0');
    newMORSE_TABLE[newKey] = value;
}
const wordsSplitted = expr.split('**********');
let splittedWord = new Array();
for (let index = 0; index < wordsSplitted.length; index++) {
    splittedWord[index] = wordsSplitted[index].match( /\d{1,10}/g ).map(item => newMORSE_TABLE[item]).join('')
}
expr = splittedWord.join(' ')
    return expr;
}

module.exports = {
    decode
}
