import { useState } from "react";
import { ArrowUp, Loader2 } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading?: boolean;
}

const ChatInput = ({ onSend, isLoading = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message.trim() && !isLoading) {
      onSend(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !isLoading) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="relative w-full">
        <textarea
          rows={1}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem..."
          className="w-full resize-none rounded-full bg-[#2a2a2a] px-4 py-4 pr-12 focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-200 placeholder-gray-400 shadow-lg"
          style={{ maxHeight: "200px" }}
          disabled={isLoading}
        />
        <button 
          onClick={handleSubmit}
          disabled={isLoading || !message.trim()}
          className="absolute right-3 top-[50%] -translate-y-[50%] p-1.5 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md transition-all duration-200"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 text-gray-700 animate-spin" />
          ) : (
            <ArrowUp className="h-4 w-4 text-gray-700" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatInput;