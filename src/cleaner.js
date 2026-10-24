/**
 * Text Cleaning Module
 * Responsible for normalizing raw text.
 */

function cleanText(text) {
    return text
        .trim()
        .replace(/\s+/g, " ");
}

module.exports = cleanText;
