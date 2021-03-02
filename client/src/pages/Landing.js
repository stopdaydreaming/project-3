import React from "react";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

import Land from "../assets/Img/naruto.jpg";
import Logo from "../assets/Img/ap.png";
// import GoogleLogin from "react-google-login";
import GoogleLogin, {useGoogleLogin} from "react-google-login"
import Login from "../components/Login/Login";
import HookLogin from "../components/Login/HookLogin";



const Landing = () => {

  
 
  //  const responseGoogle = (response) => {
  //    console.log(response);
  //    console.log(response.profileObj);
  //  };

  

  const history = useHistory();
  function viewProfile(event) {
    event.preventDefault();
    history.push("/profile");
  }

  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              className="h-100 w-100 align-center"
              src={Logo}
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-600 max-w">
              New to AniPlay?
              <a
                href="/create"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                &nbsp;Create an account
              </a>
            </p>
            <br />
            <h2>
              <strong>or</strong>
            </h2>
            <br />
             <h2>Sign in with Google</h2> 
            <br />
            <HookLogin />
            {/* <Login /> */}
            {/* <GoogleLogin
              clientID="290641540556-ks696c7llt77ibqkmli3l416nbk15ima.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
            /> */}
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form className="space-y-6" onSubmit={viewProfile}>
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Enter your username
                  </label>
                  <div className="mt-1">
                    <input
                      id="username"
                      name="username"
                      type="username"
                      autoComplete="username"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember_me"
                      className="ml-2 block text-sm text-gray-900"
                    ></label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    ></a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    SIGN IN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={Land}
          alt=""
        />
      </div>
    </div>
  );
};

export default Landing;
