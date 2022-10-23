import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Wrapper from "../assets/wrappers/Login";
import LoginImg from "../images/login-img.svg";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <div className="container">
        <img src={LoginImg} alt="Github user image" />
        <h1>Github user</h1>
        <button className="btn" onClick={loginWithRedirect}>
          login / sign up
        </button>
      </div>
    </Wrapper>
  );
};

export default Login;
