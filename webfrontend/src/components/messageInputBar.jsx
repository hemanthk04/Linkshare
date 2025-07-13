// src/components/MessageInputBar.jsx
import { useState } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react";

export default function MessageInputBar({ onSend, passcode }) {
  const [content, setContent] = useState("");

  const handleSend = async () => {
    if (!content.trim()) return;
    await onSend(content);
    setContent("");
  };

  return (
    <div className="sticky bottom-0 left-0 bg-white px-4 py-4 shadow-md flex items-center gap-2">
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write here to share to mobile..."
        className="flex-grow p-2 rounded text-sm focus:outline-none"
      />
      <button
        onClick={handleSend}
        className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-2 rounded-md flex items-center gap-1"
      >
        Send <PaperPlaneTilt weight="fill" size={16} />
      </button>
    </div>
  );
}
