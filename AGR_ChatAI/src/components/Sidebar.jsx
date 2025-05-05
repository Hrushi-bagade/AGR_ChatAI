// // Sidebar.jsx
// import React, { useState } from 'react';
// import '../styles/Sidebar.css';
// import { FaSearch, FaTrash, FaLink } from 'react-icons/fa';

// const dummyChats = [
//   { id: 1, title: 'Create Html Game Environment...', time: 'recent' },
//   { id: 2, title: 'Apply To Leave For Emergency', time: 'recent' },
//   { id: 3, title: 'What Is UI UX Design?', time: 'recent' },
//   { id: 4, title: 'Create POS System', time: 'recent' },
//   { id: 5, title: 'What Is UX Audit?', time: 'recent' },
//   { id: 6, title: 'Create Chatbot GPT...', time: 'recent', active: true },
//   { id: 7, title: 'How Chat GPT Work?', time: 'recent' },
//   { id: 8, title: 'Crypto Lending App Name', time: 'last7days' },
//   { id: 9, title: 'Operator Grammar Types', time: 'last7days' },
//   { id: 10, title: 'Min States For Binary DFA', time: 'last7days', disabled: true },
// ];

// const Sidebar = () => {
//   const [chats, setChats] = useState(dummyChats);

//   const renderChats = (filter) =>
//     chats
//       .filter((chat) => chat.time === filter)
//       .map((chat) => (
//         <li
//           key={chat.id}
//           className={`chat-item ${chat.active ? 'active' : ''} ${chat.disabled ? 'disabled' : ''}`}
//         >
//           <span>{chat.title}</span>
//           <span className="actions">
//             {chat.active && (
//               <>
//                 <FaTrash className="icon" />
//                 <FaLink className="icon" />
//               </>
//             )}
//           </span>
//         </li>
//       ));

//   return (
//     <div className="sidebar">
//       <div>
//         <div className="logo">CHAT A.I+</div>
//         <button className="new-chat">+ New chat</button>
//         <div className="search-bar">
//           <FaSearch className="search-icon" />
//         </div>

//         <div className="section-header">
//           <span>Your conversations</span>
//           <span className="clear-all">Clear All</span>
//         </div>
//         <ul className="conversation-list">{renderChats('recent')}</ul>

//         <div className="section-subheader">Last 7 Days</div>
//         <ul className="conversation-list">{renderChats('last7days')}</ul>
//       </div>

//       <div className="bottom-section">
//         <button className="settings-btn">Settings</button>
//         <div className="user-profile">
//           <img
//             src="https://via.placeholder.com/30"
//             alt="User"
//             style={{ borderRadius: '50%', width: '30px', height: '30px' }}
//           />
//           Andrew Neilson
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import { useState } from "react"
import '../styles/Sidebar.css';
import { MessageSquare, Plus, Search, Settings, Trash2, Edit2, Circle } from "react-feather"
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeChat, setActiveChat] = useState("Create Chatbot GPT...")

  // Dummy data for conversations
  const recentConversations = [
    "Create Html Game Environment...",
    "Apply To Leave For Emergency",
    "What Is UI UX Design?",
    "Create POS System",
    "What Is UX Audit?",
    "Create Chatbot GPT...",
    "How Chat GPT Work?",
  ]

  const olderConversations = ["Crypto Lending App Name", "Operator Grammar Types", "Min States For Binary DFA"]
  const navigate = useNavigate() // ← here
  const handleNewChat=(e)=>{
      e.preventDefault()
      navigate("/ChatHome") // ← change "/dashboard" to your desired route
 
  }
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>CHAT A.I+</h1>
        <div className="header-actions">
          <button className="new-chat-btn" onClick={handleNewChat}>
            <Plus size={16} />
            <span>New chat</span>
          </button>
          <button className="search-btn">
            <Search size={16} />
          </button>
        </div>
      </div>

      <div className="conversations-header">
        <span >Your conversations</span>
        <button className="clear-all-btn">Clear All</button>
      </div>

      <div className="conversations-list">
        {recentConversations.map((chat, index) => (
          <div
            key={index}
            className={`conversation-item ${activeChat === chat ? "active" : ""}`}
            onClick={() => setActiveChat(chat)}
          >
            <MessageSquare size={16} className="conversation-icon" />
            <span className="conversation-title">{chat}</span>
            {activeChat === chat && (
              <div className="active-actions">
                <Trash2 size={14} className="action-icon" />
                <Edit2 size={14} className="action-icon" />
                <Circle size={14} className="action-icon blue-dot" />
              </div>
            )}
          </div>
        ))}

        <div className="time-divider">Last 7 Days</div>

        {olderConversations.map((chat, index) => (
          <div
            key={index}
            className={`conversation-item ${activeChat === chat ? "active" : ""}`}
            onClick={() => setActiveChat(chat)}
          >
            <MessageSquare size={16} className="conversation-icon" />
            <span className="conversation-title">{chat}</span>
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <button className="settings-btn">
          <Settings size={16} />
          <span>Settings</span>
        </button>

        <div className="user-profile">
          <div className="avatar">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User avatar" />
          </div>
          <span className="user-name">Andrew Neilson</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
