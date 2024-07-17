import React, { useState } from "react";
import { getGPTResponse } from "../openaiService";

const MessengerBot: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleSendMessage = async () => {
    try {
      const gptResponse = await getGPTResponse(message);
      setResponse(gptResponse);
    } catch (error) {
      console.error("Error getting GPT response:", error);
    }
  };

  return (
    <div>
      <h1>GPT Messenger Bot</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
      />
      <button onClick={handleSendMessage}>Send</button>
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default MessengerBot;
