import React, { useState } from "react";
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    setUsername('');
    setPassword('');
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('Forgot Password - Email:', resetEmail);
    setResetEmail('');
  };

  return (
    <body>
      <div>
        <nav>
          <h1 className='up'><marquee>Welcome to E-Commerce</marquee></h1>
        </nav>
    
        <box>
          {showForgotPassword ? (
            <form onSubmit={handleForgotPassword}>
              <center><p><h2><u>FORGOT PASSWORD</u></h2></p></center>
              <br></br>
              <center><label>Email
                <br></br>
                <input type="email" value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} required />
              </label></center>
              <br></br>
              
              <div class="login">
                <center><button type="submit" className="button1"><h3>Reset Password</h3></button></center>
              </div>
              <br></br>
              <label class="pass" onClick={() => setShowForgotPassword(false)}>Go back to login</label>
            </form>
          ) : (
            <form onSubmit={handleLogin}>
              <center><p><h2><u>LOGIN</u></h2></p></center>
              <br></br>
              <label>Email
              <br></br>
                <input type="email" className="textfield1" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </label>
              <br></br>
              <br></br>
              <label>Password
              <br></br>
                <input type="password" className="textfield2" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </label>
              <br></br>
              <br></br>
              <label>
                <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} required/>
                Remember me?
              </label>
              <div class="login">
                <button type="submit" className="button1"><h3>LOGIN</h3></button>
              </div>
              <br></br>
              <label class="pass" onClick={() => setShowForgotPassword(true)}>Forgot Password?</label>
            </form>
          )}
        </box> 
      </div>
    </body>
  );
}

export default Login;
