import { useState } from "react";

const ChatInput = ({ onSend, disabled }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim() || disabled) return;
    onSend(message);
    setMessage("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && !disabled) handleSend();
  };

  return (
    <div className="flex gap-2 mt-2">
      <input
        type="text"
        placeholder="Ask about courses or schedule..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleEnter}
        disabled={disabled}
        className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-600 disabled:bg-gray-100"
      />
      <button
        onClick={handleSend}
        disabled={disabled}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;