(function () {
  // Check if the chatbot script already exists
  if (document.getElementById("chatbot-script")) {
    return;
  }

  // Create the script element
  var script = document.createElement("script");
  script.id = "chatbot-script"; // Set an ID for later reference
  script.src =
    "https://cdn.jsdelivr.net/gh/RabitaBjit/demo_chatbot/dist/chatbot-bundle.umd.js"; // The URL of your bundled Chatbot component
  script.onload = function () {
    // Wait for the script to load and then render the Chatbot component
    if (window.renderChatbot) {
      window.renderChatbot("chatbot-container");
    } else {
      console.error("Chatbot render function not found.");
    }
  };
  script.onerror = function () {
    console.error("Failed to load the Chatbot script.");
  };

  // Append the script to the body of the document
  document.body.appendChild(script);

  // Create the container element for the Chatbot
  var container = document.createElement("div");
  container.id = "chatbot-container";
  container.style.position = "fixed";
  container.style.bottom = "20px";
  container.style.right = "20px";
  container.style.width = "300px";
  container.style.height = "400px";
  container.style.border = "none";
  container.style.borderRadius = "10px";
  container.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
  container.style.zIndex = "9999";
  container.style.backgroundColor = "white";

  // Append the container to the body of the document
  document.body.appendChild(container);
})();
