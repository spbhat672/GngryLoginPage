import React from 'react';
import logo from './img/GngryLogo.png';
import passwrd from './img/forgotpassword.png'
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="Headerr">
        <img src={logo} className="The-logo" alt="logo"/>          
        </div>        
        <div className="AppBody">        
          <div className="LoginForm"> 
             <table>

               <row>
                 <div className="Title">Welcome Back!</div>
               </row>

                <row>
                  <div className="TextBox">
                     <lable className="Label">User name</lable>
                     <input type="text" className="Input"></input>
                  </div>                 
                </row>

                <row>
                  <div className="TextBox">
                     <lable className="Label">Password</lable>
                     <input type="password" className="Input"></input>
                  </div>   
                </row>

                <row>
                  <div className="ForgotPassword">
                    <img src={passwrd} className="forgotImage" alt="?"/> 
                    <href className="forgotText">Forgot password?</href>                    
                  </div>   
                </row>

                <row>
                  <div className="Button">
                    <input type="submit" className="SignIn" value="Sign In"></input>
                  </div>
                </row>

              </table>
          </div>          
        </div>
    </div>
  );
}

export default App;
