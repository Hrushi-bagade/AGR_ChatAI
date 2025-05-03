import { useState } from "react"
import "../styles/SignUpForm.css"

export function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  return (
    
    <div className="signup-form-container">
      <div className="signup-header">
        <h1 className="signup-title">Sign up with free trial</h1>
        <p className="signup-subtitle">Empower your experience, sign up for a free account today</p>
      </div>

      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address<span className="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ex. email@domain.com"
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password<span className="required">*</span>
          </label>
          <div className="password-input-container">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="form-input"
              required
            />
            <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="terms-text">
          By registering for an account, you are consenting to our{" "}
          <a href="#" className="terms-link">
            Terms of Service
          </a>{" "}
          and confirming that you have reviewed and accepted the{" "}
          <a href="#" className="terms-link">
            Global Privacy Statement
          </a>
          .
        </div>

        <button type="submit" className="signup-button">
          Get started free
        </button>
      </form>

      <div className="login-section">
        <div className="login-text">
          Already have an account?{" "}
          <a href="#" className="login-link">
            Login
          </a>
        </div>
        <div className="or-text">Or better yet...</div>
      </div>

      <div className="social-login-buttons">
        <button className="social-button google-button">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path
              fill="currentColor"
              d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
            />
          </svg>
          Continue with Google
        </button>
        <button className="social-button apple-button">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path
              fill="currentColor"
              d="M16.462,15.443c-0.309,0.644-0.438,0.927-0.825,1.494c-0.537,0.792-1.291,1.779-2.228,1.779c-0.83,0-1.043-0.528-2.198-0.528c-1.154,0-1.401,0.541-2.231,0.541c-0.937,0-1.649-0.899-2.188-1.691c-1.498-2.187-1.661-6.345,1.173-8.146c0.859-0.544,1.649-0.456,2.313-0.456c0.664,0,1.919-0.593,2.817,0.048c0.463,0.33,1.105,0.54,1.876,0.454c0.32-0.04,1.214-0.266,1.792-1.023c-0.047,0.027-1.713,1.045-1.688,3.116c0.023,2.459,2.08,3.298,2.101,3.309C17.164,14.339,16.771,14.798,16.462,15.443z M13.536,4.466c0.389-0.498,0.683-1.19,0.607-1.889C13.453,2.63,12.958,2.737,12.57,3.2c-0.368,0.438-0.685,1.157-0.597,1.835C12.693,5.088,13.147,4.964,13.536,4.466z"
            />
          </svg>
          Continue with Apple
        </button>
      </div>
    </div>
  )
}
