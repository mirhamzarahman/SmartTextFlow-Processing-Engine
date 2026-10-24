/**
 * Text Transformation Module
 */

function reverseWords(text) {
    return text
        .split(" ")
        .reverse()
        .join(" ");
}


module.exports = reverseWords;
