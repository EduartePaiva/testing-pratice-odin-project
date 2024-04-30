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

/**
 * cesar cipher, the shift factor will be thr absolute module of 26
 * @param {string} string string parameter
 * @param {number} shiftFactor shift factor
 * @returns {string} the cipher string
 */
export function caesarCipher(string, shiftFactor) {
    const lettersToNumbers = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
        k: 10,
        l: 11,
        m: 12,
        n: 13,
        o: 14,
        p: 15,
        q: 16,
        r: 17,
        s: 18,
        t: 19,
        u: 20,
        v: 21,
        w: 22,
        x: 23,
        y: 24,
        z: 25,
    };
    const numbersToLetters = {
        0: "a",
        1: "b",
        2: "c",
        3: "d",
        4: "e",
        5: "f",
        6: "g",
        7: "h",
        8: "i",
        9: "j",
        10: "k",
        11: "l",
        12: "m",
        13: "n",
        14: "o",
        15: "p",
        16: "q",
        17: "r",
        18: "s",
        19: "t",
        20: "u",
        21: "v",
        22: "w",
        23: "x",
        24: "y",
        25: "z",
    };
    const numbersToLettersMap = new Map(Object.entries(numbersToLetters));
    const lettersToNumbersMap = new Map(Object.entries(lettersToNumbers));

    let res = "";
    for (const char of string) {
        const newCharNum =
            (lettersToNumbersMap.get(char.toLocaleLowerCase()) + Math.abs(shiftFactor)) % 26;
        res +=
            char != char.toLocaleLowerCase()
                ? numbersToLettersMap.get(newCharNum.toString()).toLocaleUpperCase()
                : numbersToLettersMap.get(newCharNum.toString());
    }
    return res;
}
/**
 * takes an array of numbers and returns an object with the following properties: average, min, max, and length.
 * @param {number[]} numbers numbers to analyze
 * @returns {{average: number,min: number,max: number,length: number}} array analyzed
 * @throws {Error} if array is empty
 */
export function analyzeArray(numbers) {
    if (numbers.length === 0)
        throw new Error("Can't compute an array with 0 elements, it has to have at least one");

    const min = numbers.reduce((prev, num) => (prev > num ? num : prev), numbers[0]);
    const max = numbers.reduce((prev, num) => (prev < num ? num : prev), numbers[0]);
    const sum = numbers.reduce((prev, val) => prev + val, 0);

    return {
        min,
        max,
        length: numbers.length,
        average: sum / numbers.length,
    };
}
