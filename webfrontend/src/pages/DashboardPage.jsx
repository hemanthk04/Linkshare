// src/pages/DashboardPage.jsx
import { useEffect, useState } from "react";
import Header from "../components/headerNav";
import MessageBubble from "../components/messageBubble";
import MessageInputBar from "../components/messageInputBar";

export default function DashboardPage({ passcode }) {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await fetch("https://linkshare-vcy0.onrender.com/messages");
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      console.error("Failed to fetch messages", err);
    }
  };

  const handleSend = async (content) => {
    try {
      await fetch("https://linkshare-vcy0.onrender.com/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, passcode, from: "web" }),
      });
      fetchMessages();
    } catch (err) {
      console.error("Send failed", err);
    }
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000); // Poll every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="px-4 py-6 min-w-3xl bg-[#ECECE7] mx-auto">
        <input
          type="text"
          placeholder="Search for any Text here, sent from anywhere..."
          className="w-full mb-4 px-2 py-4 rounded bg-white text-sm focus:outline-none"
        />
        <div className="flex flex-col gap-4 mb-20">
          {messages.map((msg) => (
            <MessageBubble key={msg._id} msg={msg} />
          ))}
        </div>
      </div>
      <MessageInputBar className="sticky bottom-2 left-0 bg-white px-4 py-4 shadow-md flex items-center gap-2"
       onSend={handleSend} passcode={passcode} />
    </div>
  );
}
