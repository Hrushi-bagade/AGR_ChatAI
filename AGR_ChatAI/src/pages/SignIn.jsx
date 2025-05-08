import { ChatInterface } from "../components/ChatInterface"
import { SignUpForm } from "./LoginPage"
import '../App.css'
function SignIn() {

  return (
    <>
     <main className="app-container">
      <div className="chat-section">
        <header className="chat-header">
          <h2 className="brand-name">CHAT A.I+</h2>
        </header>

        <div className="chat-content1">
          <div className="chat-title-container1">
            <h1 className="chat-title1">
              Learn, Discover & </h1>
              <br />
              <h1 className="chat-title2">
              Automate in One Place.
              </h1>
            
          </div>

          <div className="chat-interface-container">
            <ChatInterface />
          </div>
        </div>
      </div>


      <div className="signup-section">
        <SignUpForm />
      </div>
    </main>
    
    </>
  )
}

export default SignIn
