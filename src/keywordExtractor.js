/**
 * Keyword Extraction Module
 */

function extractKeywords(frequency) {

    return Object.entries(frequency)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(item => item[0]);

}


module.exports = extractKeywords;
