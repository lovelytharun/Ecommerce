import React from "react";
import './App.css';
function Signin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submit Successfully");
  };

  const handleReset = () => {
    document.getElementById("signupForm").reset();
  };

  return (
    <body>
      <div>
        <nav>
          <h1 className='up'><marquee>E-Commerce</marquee></h1>
        </nav>

        <box>
          <form id="signupForm" onSubmit={handleSubmit}>
            <center><h2><u><i>Sign Up</i></u></h2></center>
            <br></br>
            <label>FirstName :
              <input type="text" required></input>
            </label>
            <br></br>
            <br></br>
            <label>LastName :
              <input type="text" required></input>
            </label>
            <br></br>
            <br></br>
            <label>Email Id:
              <input type="email" required></input>
            </label>
            <br></br>
            <br></br>
            <label>Phone Number :
              <input type="number" required></input>
            </label>
            <br></br>
            <br></br>
            <label>Password :
              <input type="password" required></input>
            </label>
            <br></br>
            <br></br>
            <label>Confirm Password :
              <input type="password" required></input>
            </label>
            <br></br>
            <br></br>
            <label>Gender :</label>
            <br></br>
            <br></br>
            <div>
              <label>
                <input type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" />
                Female
              </label>
              <label>
                <input type="radio" name="gender" value="others" />
                Others
              </label>
            </div>
            <br></br>
            <label>Address:
              <input type="text" required></input>
            </label>
            <br></br>
            <br></br>
            <center><button><h3>SUBMIT</h3></button></center>
            <center><button type="button" onClick={handleReset}><h3>RESET</h3></button></center>
          </form>
        </box>
      </div>
    </body>
  );
}

export default Signin;
