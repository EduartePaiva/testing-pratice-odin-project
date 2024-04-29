/**
 *takes a string and returns it with the first character capitalized.
 * @param {string} word word to capitalize
 * @returns {string} capitalized word
 */
export function capitalize(word) {
    if (word.length == 0) return "";
    return word[0].toLocaleUpperCase() + word.slice(1, word.length);
}
