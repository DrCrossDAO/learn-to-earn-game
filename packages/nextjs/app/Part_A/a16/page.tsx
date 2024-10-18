"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function A16() {
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      localStorage.setItem('a16Input', file.name);

      // Send the file to a backend server for further processing
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        router.push('/completion-part-a');
      } else {
        alert('File upload failed');
      }
    } else {
      localStorage.setItem('a16Input', 'none');
      router.push('/Part_A/completion-part-a');
    }
  };

  const handleNone = () => {
    localStorage.setItem('a16Input', 'none');
    router.push('/completion-part-a');
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-2xl font-semibold text-left">
          Financial Statements
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="file-upload" className="block text-gray-200">
            Upload PDF or Excel File
          </label>
          <input
            type="file"
            id="file-upload"
            accept=".pdf,.xls,.xlsx"
            onChange={handleFileChange}
            className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Submit
        </button>
      </form>
      <button
        onClick={handleNone}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        None
      </button>
    </div>
  );
}
