/**
 *takes a string and returns it with the first character capitalized.
 * @param {string} word word to capitalize
 * @returns {string} capitalized word
 */
export function capitalize(word) {
    return word[0].toLocaleUpperCase() + word.slice(1, word.length);
}
