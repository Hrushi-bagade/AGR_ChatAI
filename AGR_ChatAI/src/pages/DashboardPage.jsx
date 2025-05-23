import React from 'react'
import ChatArea from '../components/ChatArea'
import '../styles/ChatArea.css'
import {  Send } from "react-feather"

const DashboardPage = () => {
  return (
    <div>
      <ChatArea/>
      <div style={{width:"65%",margin:"auto"}}>
      <div className="chat-input-container">
        <input type="text" className="chat-input" placeholder="What's in your mind..." />
        <button className="send-button">
          <Send size={16} />
        </button>
      </div>
      </div>
    </div>
  )
}

export default DashboardPage
