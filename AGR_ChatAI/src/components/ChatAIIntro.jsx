import "../styles/ChatIntro.css"

export default function ChatAIInterface() {
  return (
    <div className="chat-container">
      <div className="header">
        <div className="logo-pill">
          <span>CHAT A.I+</span>
        </div>
      </div>

      <div className="greeting">
        <h1>Good day! How may I assist you today?</h1>
      </div>

      <div className="content">
        <div className="left-panel">
          <div className="feature-card dark">
            <div className="icon globe">
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
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div className="feature-title">Explore</div>
            <div className="feature-description">Learn how to use chat.ai platform for your needs</div>
          </div>

          <div className="feature-card dark">
            <div className="icon lightning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            <div className="feature-title">Capabilities</div>
            <div className="feature-description">How much capable chat.ai to full-fill your needs</div>
          </div>

          <div className="feature-card dark">
            <div className="icon warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <div className="feature-title">Limitation</div>
            <div className="feature-description">How much capable chat.ai to full-fill your needs</div>
          </div>
        </div>

        <div className="right-panel">
          <div className="capability-row">
            <div className="divider"></div>
            <div className="capability-card">
              <div className="capability-icon purple">
                <div className="icon-inner"></div>
              </div>
              <div className="capability-content">
                <div className="capability-title">"Explain"</div>
                <div className="capability-description">Quantum computing in simple terms"</div>
              </div>
              <div className="arrow-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>

          <div className="capability-row">
            <div className="divider"></div>
            <div className="capability-card">
              <div className="capability-icon orange">
                <div className="icon-inner"></div>
              </div>
              <div className="capability-content">
                <div className="capability-title">"Remember"</div>
                <div className="capability-description">quantum computing in simple terms"</div>
              </div>
              <div className="arrow-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>

          <div className="capability-row">
            <div className="divider"></div>
            <div className="capability-card">
              <div className="capability-icon red">
                <div className="icon-inner"></div>
              </div>
              <div className="capability-content">
                <div className="capability-title">"May"</div>
                <div className="capability-description">Occasionally generate incorrect information</div>
              </div>
              <div className="arrow-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>

          <div className="capability-row">
            <div className="capability-card">
              <div className="capability-icon blue">
                <div className="icon-inner"></div>
              </div>
              <div className="capability-content">
                <div className="capability-title">"How to"</div>
                <div className="capability-description">Make a search engine platform like google</div>
              </div>
              <div className="arrow-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>

          <div className="capability-row">
            <div className="capability-card">
              <div className="capability-icon pink">
                <div className="icon-inner"></div>
              </div>
              <div className="capability-content">
                <div className="capability-title">"Allows"</div>
                <div className="capability-description">User to provide follow-up corrections</div>
              </div>
              <div className="arrow-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>

          <div className="capability-row">
            <div className="capability-card">
              <div className="capability-icon teal">
                <div className="icon-inner"></div>
              </div>
              <div className="capability-content">
                <div className="capability-title">" Limited"</div>
                <div className="capability-description">Knowledge of world and events after 2021</div>
              </div>
              <div className="arrow-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
