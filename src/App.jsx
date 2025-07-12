import { useState } from 'react';
import './App.css';
import Tesseract from 'tesseract.js';

function App() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(file);
      setPreview(imageUrl);
    }
  };

  const handleSubmit = () => {
    if (!preview) return;
    setText('Extracting text...');
    Tesseract.recognize(preview, 'eng', {
      logger: (m) => console.log(m),
    }).then(({ data: { text } }) => {
      setText(text);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-2xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Image Text Extractor</h1>

        <input
          className="w-full p-2 border text-[black] border-gray-300 rounded mb-4"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        {preview && (
          <div className="flex justify-center mb-4">
            <img
              src={preview}
              alt="Selected"
              className="rounded-lg max-h-60 object-contain border"
            />
          </div>
        )}

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mb-4 transition duration-200"
        >
          Submit
        </button>

        <div className="bg-gray-100 border border-gray-300 rounded p-4 min-h-[100px] text-gray-800 whitespace-pre-wrap">
          {text || 'Text will appear here...'}
        </div>
      </div>
    </div>
  );
}

export default App;
