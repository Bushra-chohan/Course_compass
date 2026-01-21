import { useState, useEffect } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const ChatAI = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", message: "Hi! Ask me about any course at UAlberta." },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (msg) => {
    // Add user message immediately
    setMessages((prev) => [...prev, { sender: "user", message: msg }]);
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://127.0.0.1:8000/api/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ message: msg })
      });

      const data = await response.json();

      if (response.ok) {
        // Add AI response
        setMessages((prev) => [...prev, { sender: "bot", message: data.response }]);
      } else {
        setMessages((prev) => [...prev, { 
          sender: "bot", 
          message: "Sorry, I couldn't process that. Please try again." 
        }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, { 
        sender: "bot", 
        message: "Connection error. Please check if the backend is running." 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 border rounded-lg shadow-md bg-white">
      <div className="h-96 overflow-y-auto mb-2 flex flex-col space-y-2 p-2">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} {...msg} />
        ))}
        {loading && (
          <div className="flex justify-start mb-2">
            <div className="px-4 py-2 rounded-lg bg-gray-200">
              <span className="animate-pulse">Thinking...</span>
            </div>
          </div>
        )}
      </div>
      <ChatInput onSend={handleSend} disabled={loading} />
    </div>
  );
};

export default ChatAI;