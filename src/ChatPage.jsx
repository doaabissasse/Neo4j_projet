import React from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

const ChatPage = () => {
  const handleNewUserMessage = async (message) => {
    try {
      const res = await fetch("http://localhost:7860/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      addResponseMessage(data.answer);
    } catch (e) {
      addResponseMessage("Erreur serveur");
    }
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="LangFlow Chat"
      subtitle="Pose ta question"
    />
  );
};

export default ChatPage;
