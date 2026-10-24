const cleanText = require("./cleaner");
const analyzeText = require("./analyzer");
const reverseWords = require("./transformer");
const extractKeywords = require("./keywordExtractor");


const input =
"   coding   makes   developers   smarter   coding   ";


const cleaned = cleanText(input);

const analysis = analyzeText(cleaned);

const reversed = reverseWords(cleaned);

const keywords = extractKeywords(
    analysis.frequency
);


console.log("🚀 SmartTextFlow Engine\n");

console.log("Original:");
console.log(input);

console.log("\nClean Text:");
console.log(cleaned);

console.log("\nReverse:");
console.log(reversed);

console.log("\nAnalytics:");
console.log(analysis);

console.log("\nKeywords:");
console.log(keywords);
