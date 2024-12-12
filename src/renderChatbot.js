import React from "react";
import { createRoot } from "react-dom/client";
import Chatbot from "./Chatbot";
import "./Chatbot.css";

function renderChatbot(elementId) {
  const rootElement = document.getElementById(elementId);
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<Chatbot />);
  } else {
    console.error(`Element with id ${elementId} not found.`);
  }
}

window.renderChatbot = renderChatbot;
