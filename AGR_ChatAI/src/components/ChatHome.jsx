import { Globe, Zap, AlertTriangle } from "react-feather"
import "../styles/ChatHome.css"
const ChatContent = () => {
  return (
    <div className="chat-content">
      {/* <div className="chat-header">
        <div className="chat-title">CHAT A.I+</div>
      </div>

      <div className="greeting-message">
        <h1>Good day! How may I assist you today?</h1>
      </div> */}
            <div className="header">
        <div className="logo-pill">
          <span>CHAT A.I+</span>
        </div>
      </div>

      <div className="greeting">
        <h1>Good day! How may I assist you today?</h1>
      </div>

      <div className="capabilities-container">
        {/* Explore Row */}
        <div className="capability-row" itemID="HHr">
          <div className="capability-card dark">
            <div className="card-icon">
              <Globe size={24} />
            </div>
            <div className="card-title">Explore</div>
            <div className="card-description">Learn how to use helpful platform for your needs</div>
          </div>

          <div className="divider"></div>

          <div className="capability-card light">
            <div className="card-content">
              <div className="card-avatar purple">
                <div className="avatar-inner"></div>
              </div>
              <div className="card-info">
                <div className="card-title">"Explain"</div>
                <div className="card-description">Quantum computing in simple terms</div>
              </div>
            </div>
            <div className="card-arrow">→</div>
          </div>

          <div className="capability-card light">
            <div className="card-content">
              <div className="card-avatar blue">
                <div className="avatar-inner"></div>
              </div>
              <div className="card-info">
                <div className="card-title">"How to"</div>
                <div className="card-description">Make a search engine platform like google</div>
              </div>
            </div>
            <div className="card-arrow">→</div>
          </div>
        </div>

        {/* Capabilities Row */}
        <div className="capability-row">
          <div className="capability-card dark">
            <div className="card-icon">
              <Zap size={24} />
            </div>
            <div className="card-title">Capabilities</div>
            <div className="card-description">How much capable chatai to fulfill your needs</div>
          </div>

          <div className="divider"></div>

          <div className="capability-card light">
            <div className="card-content">
              <div className="card-avatar orange">
                <div className="avatar-inner"></div>
              </div>
              <div className="card-info">
                <div className="card-title">"Remember"</div>
                <div className="card-description">quantum computing in simple terms</div>
              </div>
            </div>
            <div className="card-arrow">→</div>
          </div>

          <div className="capability-card light">
            <div className="card-content">
              <div className="card-avatar yellow">
                <div className="avatar-inner"></div>
              </div>
              <div className="card-info">
                <div className="card-title">"Allows"</div>
                <div className="card-description">User to provide follow up corrections</div>
              </div>
            </div>
            <div className="card-arrow">→</div>
          </div>
        </div>

        {/* Limitation Row */}
        <div className="capability-row">
          <div className="capability-card dark">
            <div className="card-icon">
              <AlertTriangle size={24} />
            </div>
            <div className="card-title">Limitation</div>
            <div className="card-description">How much capable chatai to fulfill your needs</div>
          </div>

          <div className="divider"></div>

          <div className="capability-card light">
            <div className="card-content">
              <div className="card-avatar red">
                <div className="avatar-inner"></div>
              </div>
              <div className="card-info">
                <div className="card-title">"May"</div>
                <div className="card-description">Occasionally generate incorrect information</div>
              </div>
            </div>
            <div className="card-arrow">→</div>
          </div>

          <div className="capability-card light">
            <div className="card-content">
              <div className="card-avatar teal">
                <div className="avatar-inner"></div>
              </div>
              <div className="card-info">
                <div className="card-title">" Limited"</div>
                <div className="card-description">Knowledge of world and events after 2021</div>
              </div>
            </div>
            <div className="card-arrow">→</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatContent
