/**
 * SentenceFlow Reverser
 * ---------------------
 * A reusable utility that normalizes whitespace and reverses
 * the order of words in a sentence.
 */

/**
 * Reverse the order of words while removing unnecessary spaces.
 *
 * @param {string} sentence - Raw input sentence.
 * @returns {string} Formatted sentence with reversed word order.
 */
function reverseSentence(sentence) {
    // Remove leading/trailing spaces,
    // split by one or more spaces,
    // reverse the words,
    // and rebuild the sentence.
    return sentence
        .trim()
        .split(/\s+/)
        .reverse()
        .join(" ");
}

// Example usage
const sampleSentence = "   welcome   to    javascript   ";

const formattedSentence = reverseSentence(sampleSentence);

console.log("Original :", sampleSentence);
console.log("Formatted:", formattedSentence);

// Export for reuse in other projects
module.exports = reverseSentence;
