import { ChatInterface } from "../components/ChatInterface"
import { SignUpForm } from "./LoginPage"

function SignIn() {

  return (
    <>
    <h1>Welcome</h1>
     <main className="app-container">
      <div className="chat-section">
        <header className="chat-header">
          <h2 className="brand-name">CHAT A.I+</h2>
        </header>

        <div className="chat-content">
          <div className="chat-title-container">
            <h1 className="chat-title">
              Learn, Discover &<br />
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
