import React from 'react'
import ChatArea from '../components/ChatArea'
import '../styles/ChatArea.css'
import {  Send } from "react-feather"
import ChatAIInterface from '../components/ChatAIIntro'
import ChatHome from '../components/ChatHome'

const StartChat = () => {
  return (
    <div>
      {/* <ChatAIInterface/> */}
      <ChatHome/>

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

export default StartChat
