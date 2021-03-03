import React, { Component } from "react";
import {GoogleLogin} from "react-google-login"
// import { GoogleLogout } from "react-google-login";
// import { BrowserRouter as Router, useHistory } from "react-router-dom";


class Login extends Component {
     //history = useHistory();

     responseGoogle = (response) => {
     console.log(response);
     console.log(response.profileObj);
    alert(`Welcome ${response.profileObj.name}`)
    //history.push("/profile");
   };

   successMessage =(response) => {
       alert("Congratulations!")
   }
  render() {
    return (
      <div>
        <GoogleLogin
        // render={renderProps => (
        //     <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Button</button>
        // )}
          clientId="290641540556-ks696c7llt77ibqkmli3l416nbk15ima.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}

export default Login;
