import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">CHAT A.I+</h2>
      <button className="new-chat">
        <i className="fa fa-plus"></i> New chat
      </button>
      <div className="search-bar">
        <i className="fa fa-search search-icon"></i>
        <input type="text" placeholder="Search..." />
      </div>

      <div className="conversation-section">
        <div className="section-header">
          <span>Your conversations</span>
          <span className="clear-all">Clear All</span>
        </div>

        <ul className="conversation-list">
          <li>
            <i className="fa fa-comments"></i> Create Html Game Environment...
          </li>
          <li>
            <i className="fa fa-comments"></i> Apply To Leave For Emergency
          </li>
          <li>
            <i className="fa fa-comments"></i> What Is UI UX Design?
          </li>
          <li>
            <i className="fa fa-comments"></i> Create POS System
          </li>
          <li>
            <i className="fa fa-comments"></i> What Is UX Audit?
          </li>
          <li className="active">
            <i className="fa fa-comments"></i> Create Chatbot GPT...
            <div className="actions">
              <i className="fa fa-trash"></i>
              <i className="fa fa-link"></i>
            </div>
          </li>
          <li>
            <i className="fa fa-comments"></i> How Chat GPT Work?
          </li>
        </ul>

        <div className="section-subheader">Last 7 Days</div>
        <ul className="conversation-list">
          <li>
            <i className="fa fa-comments"></i> Crypto Lending App Name
          </li>
          <li>
            <i className="fa fa-comments"></i> Operator Grammar Types
          </li>
          <li className="disabled">
            <i className="fa fa-comments"></i> Min States For Binary DFA
          </li>
        </ul>
      </div>

      <div className="bottom-section">
        <button className="settings-btn">
          <i className="fa fa-cog"></i> Settings
        </button>
        <div className="user-profile">
          <img src="https://via.placeholder.com/30" alt="User" />
          <span>Andrew Neilson</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
