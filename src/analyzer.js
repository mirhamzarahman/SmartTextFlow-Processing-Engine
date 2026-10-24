/**
 * Text Analyzer
 * Generates useful statistics from text.
 */

function analyzeText(text) {
    const words = text.split(" ");

    const frequency = {}; 

    for (const word of words) {
        frequency[word] = (frequency[word] || 0) + 1;
    }

    return {
        characters: text.length,
        words: words.length,
        uniqueWords: Object.keys(frequency).length,
        frequency
    };
}

module.exports = analyzeText;
