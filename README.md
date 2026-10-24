# 🔄 SentenceFlow Reverser

A lightweight JavaScript utility that reorganizes sentences by reversing the order of words while automatically normalizing whitespace.

Designed as a reusable text-processing component, the project demonstrates efficient string manipulation, parsing, normalization, and array-based transformations.

---

## 📖 Project Overview

SentenceFlow Reverser provides a simple way to transform text into a standardized format by reversing the sequence of words while eliminating unnecessary spaces.

Instead of focusing on raw string operations, the project presents the algorithm as a reusable text utility suitable for document processing, search indexing, formatting pipelines, and natural language preprocessing.

---

# 🌍 Real-World Concept

Imagine a document-processing pipeline that receives text from different sources.

Some text contains:

- Leading spaces
- Trailing spaces
- Multiple spaces between words

Before storing or analyzing the text, the system needs to:

- Normalize whitespace
- Preserve every word
- Reverse the word sequence
- Produce clean standardized output

SentenceFlow Reverser performs exactly that transformation.

---

# 💡 Core Concept

The utility follows three major stages:

1. Normalize whitespace
2. Split text into words
3. Reverse word order
4. Join words with a single space

This keeps the implementation simple, readable, and efficient.

---

# ⚙️ How the System Works

```
Raw Text
     │
     ▼
Trim Extra Spaces
     │
     ▼
Split Into Words
     │
     ▼
Reverse Word Order
     │
     ▼
Join Using Single Spaces
     │
     ▼
Formatted Output
```

---

# 🧠 Algorithm Used

- String Normalization
- Regular Expression Parsing
- Array Manipulation
- Reverse Traversal

---

# 🚀 Step-by-Step Logic

1. Receive an input string.
2. Remove leading and trailing whitespace.
3. Split words using one or more spaces.
4. Reverse the array.
5. Join words using exactly one space.
6. Return the transformed sentence.

---

# ✨ Key Features

- Removes unnecessary whitespace
- Reverses sentence structure
- Clean and reusable implementation
- Easy to integrate
- Beginner-friendly
- Efficient O(n) solution
- Modern JavaScript

---

# 📌 Example

### Input

```text
"   welcome   to    javascript   "
```

### Output

```text
javascript to welcome
```

---

# ⌛ Complexity Analysis

| Operation | Complexity |
|------------|------------|
| Time | **O(n)** |
| Space | **O(n)** |

---

# 🛠 Technologies Used

- JavaScript (ES6)
- Regular Expressions
- Array Methods
- String Manipulation

---

# 📂 Project Structure

```
SentenceFlow-Reverser
│
├── README.md
├── reverseWords.js
└── LICENSE
```

---

# ▶️ How to Run

Clone the repository:

```bash
git clone https://github.com/mirhamzarahman/SentenceFlow-Reverser.git
```

Go inside the project:

```bash
cd SentenceFlow-Reverser
```

Run using Node.js:

```bash
node reverseWords.js
```

Or import the function into your own project.

---

# 🎯 Learning Outcomes

This project demonstrates:

- String normalization
- Regular expressions
- Array transformations
- Functional programming concepts
- Clean JavaScript coding style
- Building reusable utilities

---

# 🚀 Future Improvements

- Support punctuation-aware reversal
- Unicode optimization
- Browser package
- npm package
- CLI interface
- Batch file processing
- TypeScript version
- Performance benchmarking

---

# 📄 License

This project is licensed under the MIT License.
