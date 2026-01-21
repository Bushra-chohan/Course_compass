const ChatMessage = ({ message, sender }) => {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`px-4 py-2 rounded-lg max-w-xs ${
          isUser ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-900"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
