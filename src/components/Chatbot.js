import React, { useState, useEffect } from "react";
import { Button, Form, Card, Spinner } from "react-bootstrap";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { TbMessageChatbot } from "react-icons/tb";

const genAI = new GoogleGenerativeAI("API_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const resumeContent = `
Resume Content

`;


function Chatbot() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true); // New state for welcome message
  const [isLoading, setIsLoading] = useState(false);

  const handleChat = async () => {
    if (!query.trim()) {
      alert("Please enter a query!");
      return;
    }

    // Transition from welcome screen to full chatbox
    if (showWelcome) setShowWelcome(false);

    // Clear input field instantly
    const userMessage = { text: query, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setQuery("");

    // Show loading animation
    setIsLoading(true);

    const prompt = `
      Resume Details:
      ${resumeContent}

      User Query:
      ${query}

      Provide a concise and professional answer based on the above resume.
    `;

    try {
      const result = await model.generateContent(prompt);
      const response = result.response.text();

      // Add AI response to chat history
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error generating response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Sorry, I couldn't fetch a response. Please try again later.",
          sender: "bot",
        },
      ]);
    } finally {
      // Remove loading animationgenAI
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Automatically close the welcome popup after 3-5 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Adjust time as needed (3 seconds)
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Chatbox Button */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <Button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowWelcome(false); // Close welcome screen when opening chatbox
          }}
          variant="primary"
          style={{
            borderRadius: "50%",
            width: "70px",
            height: "70px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <TbMessageChatbot style={{ height: "40px", width: "40px" }} />
        </Button>
      </div>

      {/* Welcome Message and Input Field */}
      {showWelcome && (
        <Card
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "400px",
            zIndex: 1000,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            padding: "20px",
          }}
        >
          <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            <Button
              onClick={() => setShowWelcome(false)}
              variant="link"
              style={{
                fontSize: "20px",
                color: "#000",
                padding: "0",
                border: "none",
                background: "transparent",
              }}
            >
              X
            </Button>
          </div>
          <h5>Welcome to My Resume Chatbot!</h5>
          <p>Ask me about my skills, projects, or achievements.</p>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Type your query here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form.Group>
          <Button
            onClick={handleChat}
            variant="primary"
            className="mt-2 w-100"
            disabled={isLoading}
          >
            Start Chat
          </Button>
        </Card>
      )}

      {/* Chatbox Interface */}
      {isOpen && !showWelcome && (
        <Card
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "400px",
            height: "600px",
            zIndex: 1000,
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Card.Header
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <span>Chat with My Resume</span>
            <Button
              onClick={() => setIsOpen(false)}
              variant="light"
              size="sm"
              style={{ borderRadius: "50%" }}
            >
              ✖
            </Button>
          </Card.Header>

          {/* Chat Messages */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              backgroundColor: "#f8f9fa",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent:
                    message.sender === "user" ? "flex-end" : "flex-start",
                  marginBottom: "10px",
                }}
              >
                <Card
                  style={{
                    maxWidth: "70%",
                    padding: "10px",
                    backgroundColor:
                      message.sender === "user" ? "#007bff" : "#e9ecef",
                    color: message.sender === "user" ? "#fff" : "#000",
                    borderRadius: "15px",
                  }}
                >
                  <p style={{ margin: 0 }}>{message.text}</p>
                </Card>
              </div>
            ))}
            {isLoading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <Spinner animation="border" variant="primary" />
              </div>
            )}
          </div>

          {/* Input Area */}
          <div style={{ padding: "10px", backgroundColor: "#fff" }}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Ask me about my skills, projects, or experience"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Form.Group>
            <Button
              onClick={handleChat}
              variant="primary"
              className="mt-2 w-100"
              disabled={isLoading}
            >
              Ask
            </Button>
          </div>
        </Card>
      )}
    </>
  );
}

export default Chatbot;
