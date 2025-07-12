### Demo : https://ocr-using-tesseract-js.vercel.app/

# 🧠 Image Text Extractor using Tesseract.js

A simple React-based web application that extracts text from images using the power of [Tesseract.js](https://github.com/naptha/tesseract.js), an OCR (Optical Character Recognition) library written in JavaScript.

---

## 📸 Features

- Upload image from local device
- Preview selected image before OCR
- Extract and display text using `tesseract.js`
- Responsive UI built with Tailwind CSS

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:
- Node.js (v16 or higher)
- npm (comes with Node.js)
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rupram88/OCR-using-tesseract.js.git
   cd YOUR_REPO_NAME
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## 🧪 Usage

1. Select an image using the file input.
2. A preview of the image will appear.
3. OCR will start automatically.
4. Extracted text will appear below the image.

---

## 📦 Tech Stack

- **Frontend:** React
- **Styling:** Tailwind CSS
- **OCR Engine:** Tesseract.js
- **Bundler:** Vite

---

## 📚 Tesseract.js Documentation

Tesseract.js is a pure JavaScript OCR library that works in the browser and in Node.js. It supports 100+ languages and can recognize text from images or PDFs.

### ✅ Example Usage

```javascript
import Tesseract from 'tesseract.js';

Tesseract.recognize(
  file,        // file path or File object
  'eng',       // language code
  {
    logger: m => console.log(m) // optional logger to show progress
  }
).then(({ data: { text } }) => {
  console.log(text); // recognized text output
});
```

---

## 🌐 Supported Languages

You can recognize multiple languages like 'eng+hin'.

Download more language data from:
👉 https://github.com/tesseract-ocr/tessdata

---

## 📁 Project Structure

```
.
├── public/
├── src/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🙌 Contributing

Pull requests are welcome!

For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🔗 Useful Links

- [Tesseract.js GitHub Repo](https://github.com/naptha/tesseract.js)
- [Tesseract OCR Official Docs](https://tesseract-ocr.github.io/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

*Let me know if you want badges, screenshots, or deployment instructions added.*
