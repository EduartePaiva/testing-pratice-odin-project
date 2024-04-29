/**
 *takes a string and returns it with the first character capitalized.
 * @param {string} word word to capitalize
 * @returns {string} capitalized word
 */
export function capitalize(word) {
    if (word.length == 0) return "";
    return word[0].toLocaleUpperCase() + word.slice(1, word.length);
}

/**
 * takes a string and returns it reversed
 * @param {string} string the string to be reversed
 * @returns {string} a new reversed string
 */
export function reverseString(string) {
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

/**
 * @type {{
 * add:(a:number,b:number) => number,
 * subtract: (a:number, b:number) => number,
 * divide: (a:number, b:number) => number,
 * multiply: (a:number, b:number) => number
 * }}
 */
export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
};
