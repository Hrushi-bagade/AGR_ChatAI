import { useState } from "react"
import "../styles/ChatInterface.css"
import "../App.css"
export function ChatInterface() {
  const [message, setMessage] = useState("")

  return (
    <div className="chat-interface">
      <div className="chat-messages">
        {/* User query */}
        <div className="user-message">
          <p>Create a chatbot api using python language what will be step for that</p>
        </div>

        {/* AI response with badge */}
        <div className="ai-response-container">
          <div className="ai-badge">
            <span>CHAT A.I+</span>
            <svg
              className="help-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>

          <div className="ai-message">
            <p className="message-text">
              Sure, I can help you get started with creating a chatbot using GPT in Python. Here are the basic steps
              you'll need to follow:
            </p>

            <ol className="steps-list">
              <li>
                Install the required libraries: You'll need to install the transformers library from
                <span className="highlight-text"> Hugging Face</span> to use GPT. You can install it using pip.
              </li>
              <li>
                Load the pre-trained model: GPT comes in several sizes and versions, so you'll need to choose the one
                that fits your needs. You can load a pre-trained GPT model. The...
              </li>
            </ol>

            <p className="message-text">
              These are just the basic steps to get started with a GPT chatbot in Python. Depending on your
              requirements, you may need to add more features or complexity to the chatbot. Good luck!
            </p>
          </div>
        </div>
      </div>

      {/* Reaction buttons */}
      <div className="reaction-buttons">
        <button className="reaction-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>
        </button>
        <button className="reaction-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
        <button className="reaction-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </button>
      </div>

      {/* Message input */}
      <div className="message-input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Reply ..."
          className="message-input"
        />
        <div className="input-actions">
          <button className="input-action-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </button>
          <button className="input-action-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
