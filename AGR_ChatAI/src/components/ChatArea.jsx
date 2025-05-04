import { Edit2, Info, ThumbsUp, Copy, Share2, MoreVertical, RefreshCw, Send, HelpCircle } from "react-feather"
import '../styles/ChatArea.css'
const ChatArea = () => {
  // Dummy chat data
  const chatData = [
    {
      id: 1,
      user: true,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "Create a chatbot gpt using python language what will be step for that",
    },
    {
      id: 2,
      user: false,
      content: `Sure, I can help you get started with creating a chatbot using GPT in Python. Here are the basic steps you'll need to follow:

1. Install the required libraries: You'll need to install the transformers library from Hugging Face to use GPT. You can install it using pip.

2. Load the pre-trained model: GPT comes in several sizes and versions, so you'll need to choose the one that fits your needs. You can load a pre-trained GPT model. This loads the 1.3B parameter version of GPT-Neo, which is a powerful and relatively recent model.

3. Create a chatbot loop: You'll need to create a loop that takes user input, generates a response using the GPT model, and outputs it to the user. Here's an example loop that uses the input() function to get user input and the apt() function to generate a response. This loop will keep running until the user exits the program or the loop is interrupted.

4. Add some personality to the chatbot: While GPT can generate text, it doesn't have any inherent personality or style. You can make your chatbot more interesting by adding custom prompts or responses that reflect your desired personality. You can then modify the chatbot loop to use these prompts and responses when appropriate. This will make the chatbot seem more human-like and engaging.

These are just the basic steps to get started with a GPT chatbot in Python. Depending on your requirements, you may need to add more features or complexity to the chatbot. Good luck!`,
    },
    {
      id: 3,
      user: true,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "What is use of that chatbot?",
    },
    {
      id: 4,
      user: false,
      content:
        "Chatbots can be used for a wide range of purposes, including:\n\nCustomer service chatbots can handle frequently asked questions, provide basic support, and help customers contact human agents when needed.",
    },
  ]

  return (
    <div className="content">
      {/* <div className="chat-header"> 
         <div className="chat-title">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User avatar" />
          <h2>Create a chatbot gpt using python language what will be step for that</h2>
        </div>
        <div className="chat-actions">
          <Edit2 size={18} />
        </div>
      </div> */}

      <div className="chat-messages">
        {chatData.map((message) => (
          <div key={message.id} className="message">
            {message.user ? (
              // User message
              <div className="message-header">
                <img className="avatar" src={message.avatar || "/placeholder.svg"} alt="User avatar" />
                <div className="message-content">{message.content}</div>
                <div className="chat-actions">
          <Edit2 size={18} />
        </div>
              </div>
            ) : (
              // AI message
              <>
                <div className="message-header">
                  {/* <img className="avatar" src="/ai-avatar.png" alt="AI avatar" /> */}
                  <div className="chat-label" style={{fontStyle:"italic"}}>
                    CHAT A.I+
                    <Info size={12} />
                  </div>
                </div>
                <div className="message-content">
                  {message.content.split("\n\n").map((paragraph, idx) => {
                    // Check if this is a numbered list
                    {
                      /* inside the message.content.split(...) map, in the “numbered list” branch */
                      if (paragraph.match(/^\d\./)) {
                        const listItems = paragraph
                          .split('\n')             // split into lines
                          .filter((item) => item.trim());
                    
                        return (
                          <ol key={idx} start={Number.parseInt(listItems[0], 10)}>
                            {listItems.map((item, itemIdx) => {
                              // remove leading “N.” and trim
                              const text = item.replace(/^\d\.\s*/, '').trim();
                              // split label from rest at the first colon
                              const [label, ...rest] = text.split(':');
                              const remainder = rest.join(':'); // join back anything after the colon
                    
                              return (
                                <li key={itemIdx}>
                                  <strong>{label}:</strong>
                                  {remainder && ' '}{remainder}
                                </li>
                              );
                            })}
                          </ol>
                        );
                      }
                    }
                    
                    return <p style={{fontWeight:"bold"}} key={idx}>{paragraph}</p>
                  })}
                </div>
                <div className="message-actions">
                  <button className="action-button">
                    <ThumbsUp size={16} />
                  </button>
                  <button className="action-button">
                    <Copy size={16} />
                  </button>
                  <button className="action-button">
                    <Share2 size={16} />
                  </button>
                  <button className="action-button">
                    <MoreVertical size={16} />
                  </button>
                  <button className="regenerate-button">
                    <RefreshCw size={14} />
                    Regenerate
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="chat-input-container">
        <input type="text" className="chat-input" placeholder="What's in your mind..." />
        <button className="send-button">
          <Send size={16} />
        </button>
      </div>
{/* 
      <div className="help-button">
        <div className="help-text">Upgrade to Pro</div>
        <HelpCircle className="help-icon" size={16} />
      </div> */}
    </div>
  )
}

export default ChatArea
