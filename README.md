# 🧠 SmartTextFlow Processing Engine

An advanced text-processing engine built with JavaScript that cleans, analyzes, and transforms raw text into structured information.

The system combines string algorithms, parsing techniques, data processing, and analytical features to create a reusable document-processing workflow.

---

# 📖 Project Overview

Real-world applications receive text from multiple sources:

- User-generated content
- Documents
- Chat messages
- Reports
- Search queries

These inputs often contain:

- Extra spaces
- Inconsistent formatting
- Repeated words
- Unstructured content

SmartTextFlow Processing Engine processes raw text and converts it into clean, meaningful, and structured output.

---

# 🌍 Real-World Scenario

Imagine a company building a document management platform.

Before storing documents, the system needs to:

✅ Clean unwanted spaces  
✅ Format sentences  
✅ Analyze word usage  
✅ Generate statistics  
✅ Reverse or reorder content  
✅ Prepare text for searching  

SmartTextFlow acts as the preprocessing layer before further analysis.

---

# 🚀 Core Features

## 🧹 Smart Text Cleaning

Automatically:

- Removes unnecessary spaces
- Fixes inconsistent formatting
- Normalizes sentences


## 🔄 Sentence Transformation

Supports:

- Reverse word ordering
- Custom sentence formatting
- Text restructuring


## 📊 Text Analytics

Generates:

- Total words
- Character count
- Unique word count
- Most frequently used words


## 🔎 Keyword Extraction

Finds important words based on:

- Frequency
- Word length
- Usage patterns


## 📝 Processing Pipeline

Multiple operations can be chained:

```
Raw Text
   |
   ↓
Cleaning
   |
   ↓
Analysis
   |
   ↓
Transformation
   |
   ↓
Final Report
```

---

# 🧠 Algorithms & Data Structures

The project uses:

| Concept | Usage |
|---|---|
| Strings | Text processing |
| Arrays | Word storage |
| Hash Maps | Frequency counting |
| Regular Expressions | Pattern matching |
| Sorting Algorithms | Ranking keywords |
| Stack Concept | Reversal operations |

---

# ⚙️ How The System Works

## Step 1: Receive Raw Text

Example:

```
"   JavaScript    is   powerful   and useful   "
```

---

## Step 2: Normalize Content

The system removes unnecessary spaces.

Result:

```
"JavaScript is powerful and useful"
```

---

## Step 3: Tokenize Words

Convert sentence into:

```javascript
[
 "JavaScript",
 "is",
 "powerful",
 "and",
 "useful"
]
```

---

## Step 4: Analyze Data

Generate:

```json
{
 "words": 5,
 "characters": 42,
 "uniqueWords": 5
}
```

---

## Step 5: Transform Sentence

Reverse mode:

```
useful and powerful is JavaScript
```

---

# 📌 Example Usage

## Input

```text
"   coding   makes   developers   smarter   "
```

---

## Processing Result

```json
{
  "cleanText": "coding makes developers smarter",
  "reversedText": "smarter developers makes coding",
  "wordCount": 4,
  "uniqueWords": 4,
  "keywords": [
    "developers",
    "coding"
  ]
}
```

---

# 📂 Project Structure

```
SmartTextFlow-Processing-Engine
│
├── src
│   │
│   ├── cleaner.js
│   ├── analyzer.js
│   ├── transformer.js
│   ├── keywordExtractor.js
│   └── app.js
│
├── examples
│   └── sample.txt
│
├── README.md
├── package.json
└── LICENSE
```

---

# 🛠 Technologies Used

- JavaScript (ES6+)
- Node.js
- Regular Expressions
- Arrays
- Objects / Hash Maps
- File System Module

---

# ▶️ Installation & Running

Clone repository:

```bash
git clone https://github.com/mirhamzarahman/SmartTextFlow-Processing-Engine.git
```

Move into directory:

```bash
cd SmartTextFlow-Processing-Engine
```

Install dependencies:

```bash
npm install
```

Run project:

```bash
node src/app.js
```

---

# 📊 Complexity Analysis

Let **n** be the number of characters.

| Operation | Complexity |
|-|-|
| Cleaning | O(n) |
| Word Processing | O(n) |
| Frequency Analysis | O(n) |
| Sorting Keywords | O(k log k) |

Space Complexity:

```
O(n)
```

because processed words and analytics data are stored.

---

# 💻 Sample Console Output

```
SmartTextFlow Engine Started

Original:
"  learn javascript with projects "

Clean Text:
"learn javascript with projects"

Reverse:
"projects with javascript learn"

Words:
4

Top Keywords:
javascript
projects
```

---

# 🎯 Learning Outcomes

By building this project, you learn:

- Advanced string manipulation
- Text preprocessing techniques
- Hash map based counting
- Data transformation pipelines
- Modular JavaScript architecture
- Writing scalable utilities
- Designing real-world software systems

---

# 🔮 Future Improvements

Possible upgrades:

- AI-based sentiment analysis
- Language detection
- Grammar correction
- PDF/document support
- REST API version
- Database storage
- Web dashboard
- Machine learning keyword ranking
- Browser extension

---

# 📄 License

MIT License

Created for learning, experimentation, and open-source development.
