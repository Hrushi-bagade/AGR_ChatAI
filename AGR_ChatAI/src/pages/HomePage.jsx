import React from "react";
import ChatHome from '../components/ChatHome'
import "../styles/ChatHome.css"
const HomePage = () => {
  return (
    <div>
      <div className="app-container">
        <div className="main-content">
          <ChatHome />
          {/* Chat input would go here (already implemented by user) */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
