import React from "react";
import { useGoogleLogin } from "react-google-login";
// import { BrowserRouter as useHistory } from "react-router-dom";

const clientId =
  "290641540556-ks696c7llt77ibqkmli3l416nbk15ima.apps.googleusercontent.com";

   const onSignIn =(googleUser)  => {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
   }
       

 // This is null if the 'email' scope is not present.
  

function HookLogin() {

    // const history = useHistory();

  // const onSuccess = (res) => {
      
  //   console.log("Login Success: currentUser:", res.profileObj);
  //   alert(
  //     `Logged in successfully welcome ${res.profileObj.name}.`
  //   );
  //   // history.push("/profile");
  // };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login.`);
  };

  const { signIn } = useGoogleLogin({
    // onSuccess,
    onFailure,
    onSignIn,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <div>
      <button onClick={signIn} className="button text-2xl fab fa-google inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"> </button>
    </div>
  );
}

export default HookLogin;
