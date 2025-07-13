// src/pages/PasscodePage.jsx
import { useState } from "react";
import { Lock } from "@phosphor-icons/react";;

export default function PasscodePage({ onUnlock, setPasscode }) {
  const [input, setInput] = useState("");

  const handleInput = (digit) => {
    if (input.length >= 4) return;
    const newInput = input + digit;
    setInput(newInput);

    if (newInput.length === 4) {
      setPasscode(newInput);
      onUnlock(true); // Let App.jsx switch page
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <div className="absolute top-4 left-6 text-orange-600 font-bold text-xl">
        Linkshare
      </div>
      <div className="absolute top-4 right-6 text-orange-600 text-xl">
        <Lock size={24} />
      </div>

      <h2 className="text-xl mb-6 font-medium">
        Enter the Passcode to access it
      </h2>
      <div className="flex gap-4 mb-8">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-12 h-12 bg-gray-100 rounded text-2xl text-center flex items-center justify-center"
          >
            {input[i] || ""}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => (
          <button
            key={n}
            className="w-16 h-16 rounded-full bg-orange-100 text-orange-700 text-xl font-bold"
            onClick={() => handleInput(n.toString())}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}
