import { Globe, Zap, AlertTriangle } from "react-feather";
import "../styles/ChatHome.css";
const ChatContent = () => {
  const sections = [
    {
      title: "Explore",
      description: "Learn how to use chat.ai platform for your needs",
      className: "explore",
    },
    {
      title: "Capabilities",
      description: "How much capable chat.ai to full-fill your needs",
      className: "capabilities",
    },
    {
      title: "Limitation",
      description: "How much capable chat.ai to full-fill your needs",
      className: "limitation",
    },
  ];

  const cards = [
    {
      id:0,
      label: '"Explain"',
      description: "Quantum computing in simple terms",
      arrow: true,
    },
    { id:1,
      label: '"How to"',
      description: "Make a search engine platform like google",
      arrow: true,
    },
    { id:2,
      label: '"Remember"',
      description: "quantum computing in simple terms",
      arrow: true,
    },
    {  id:3,
      label: '"Allows"',
      description: "User to provide follow-up corrections",
      arrow: true,
    },
    { id:4,
      label: '"May"',
      description: "Occasionally generate incorrect information",
      arrow: true,
    },
    {  id:5,
      label: '"Limited"',
      description: "Knowledge of world and events after 2021",
      arrow: true,
    },
  ];
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

      <div className="info-cards-container">
        <div className="info-cards-grid">
          <div className="info-sections">
            {sections.map((sec, index) => (
              <div style={{ display: "flex" }}>
                <div key={index} className={`info-section ${sec.className}`}>
                  <div className="card-icon">
                   {sec.title==="Explore" && <Globe size={24} />}
                   {sec.title==="Capabilities" &&  <Zap size={24} />}
                   {sec.title==="Limitation" && <AlertTriangle size={24} />}
                  </div>
                  <p style={{ fontWeight: "150px", fontSize: "1.25rem" }}>
                    {sec.title}
                  </p>
                  <p>{sec.description}</p>
                </div>
                <div
                  style={{
                    height: "60px",
                    width: "7px",
                    borderRadius: "5px",
                    backgroundColor: "#c6c6c6",
                    marginLeft: "20px",
                    marginTop: "40px",
                  }}
                ></div>
                <div
                  style={{
                    height: "60px",
                    width: "7px",
                    borderRadius: "5px",
                    backgroundColor: "#c6c6c6",
                    marginLeft: "4px",
                    marginTop: "40px",
                  }}
                ></div>
                <div
                  style={{
                    height: "60px",
                    width: "7px",
                    borderRadius: "5px",
                    backgroundColor: "#c6c6c6",
                    marginLeft: "4px",
                    marginTop: "40px",
                  }}
                ></div>
              </div>
            ))}
          </div>
          <div className="card-grid">
            {cards.map((card, index) => (
              <div key={index} className="info-card">
                <div className="card-content">
                {card.id === 0 && (
  <div className="card-avatar purple">
    <div className="avatar-inner"></div>
  </div>
)}
{card.id === 1 && (
  <div className="card-avatar blue">
    <div className="avatar-inner"></div>
  </div>
)}
{card.id === 2 && (
  <div className="card-avatar orange">
    <div className="avatar-inner"></div>
  </div>
)}
{card.id === 3 && (
  <div className="card-avatar yellow">
    <div className="avatar-inner"></div>
  </div>
)}
{card.id === 4 && (
  <div className="card-avatar red">
    <div className="avatar-inner"></div>
  </div>
)}
{card.id === 5 && (
  <div className="card-avatar teal">
    <div className="avatar-inner"></div>
  </div>
)}


                <h4>{card.label}</h4>
                  <p>{card.description}</p>
                </div>
                {card.arrow && <span className="arrow">→</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {
        // <div className="capabilities-container">
        //   {/* Explore Row */}
        //   <div className="capability-row" itemID="HHr">
        //     <div className="capability-card dark">
        //       <div className="card-icon">
        //         <Globe size={24} />
        //       </div>
        //       <div className="card-title">Explore</div>
        //       <div className="card-description">Learn how to use helpful platform for your needs</div>
        //     </div>
        //     <div className="divider"></div>
        //     <div className="capability-card light">
        //       <div className="card-content">
                // <div className="card-avatar purple">
                //   <div className="avatar-inner"></div>
                // </div>
        //         <div className="card-info">
        //           <div className="card-title">"Explain"</div>
        //           <div className="card-description">Quantum computing in simple terms</div>
        //         </div>
        //       </div>
        //       <div className="card-arrow">→</div>
        //     </div>
        //     <div className="capability-card light">
        //       <div className="card-content">
        //         <div className="card-avatar blue">
        //           <div className="avatar-inner"></div>
        //         </div>
        //         <div className="card-info">
        //           <div className="card-title">"How to"</div>
        //           <div className="card-description">Make a search engine platform like google</div>
        //         </div>
        //       </div>
        //       <div className="card-arrow">→</div>
        //     </div>
        //   </div>
        //   {/* Capabilities Row */}
        //   <div className="capability-row">
        //     <div className="capability-card dark">
        //       <div className="card-icon">
        //         <Zap size={24} />
        //       </div>
        //       <div className="card-title">Capabilities</div>
        //       <div className="card-description">How much capable chatai to fulfill your needs</div>
        //     </div>
        //     <div className="divider"></div>
        //     <div className="capability-card light">
        //       <div className="card-content">
        //         <div className="card-avatar orange">
        //           <div className="avatar-inner"></div>
        //         </div>
        //         <div className="card-info">
        //           <div className="card-title">"Remember"</div>
        //           <div className="card-description">quantum computing in simple terms</div>
        //         </div>
        //       </div>
        //       <div className="card-arrow">→</div>
        //     </div>
        //     <div className="capability-card light">
        //       <div className="card-content">
        //         <div className="card-avatar yellow">
        //           <div className="avatar-inner"></div>
        //         </div>
        //         <div className="card-info">
        //           <div className="card-title">"Allows"</div>
        //           <div className="card-description">User to provide follow up corrections</div>
        //         </div>
        //       </div>
        //       <div className="card-arrow">→</div>
        //     </div>
        //   </div>
        //   {/* Limitation Row */}
        //   <div className="capability-row">
        //     <div className="capability-card dark">
        //       <div className="card-icon">
        //         <AlertTriangle size={24} />
        //       </div>
        //       <div className="card-title">Limitation</div>
        //       <div className="card-description">How much capable chatai to fulfill your needs</div>
        //     </div>
        //     <div className="divider"></div>
        //     <div className="capability-card light">
        //       <div className="card-content">
        //         <div className="card-avatar red">
        //           <div className="avatar-inner"></div>
        //         </div>
        //         <div className="card-info">
        //           <div className="card-title">"May"</div>
        //           <div className="card-description">Occasionally generate incorrect information</div>
        //         </div>
        //       </div>
        //       <div className="card-arrow">→</div>
        //     </div>
        //     <div className="capability-card light">
        //       <div className="card-content">
        //         <div className="card-avatar teal">
        //           <div className="avatar-inner"></div>
        //         </div>
        //         <div className="card-info">
        //           <div className="card-title">" Limited"</div>
        //           <div className="card-description">Knowledge of world and events after 2021</div>
        //         </div>
        //       </div>
        //       <div className="card-arrow">→</div>
        //     </div>
        //   </div>
        // </div>
      }
    </div>
  );
};

export default ChatContent;
