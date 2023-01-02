import React from "react";
import ImageCard from "../components/LoginPageComponents/ImageCard";
import LoginForm from "../components/LoginPageComponents/LoginForm";
import LoginNavBar from "../components/LoginPageComponents/LoginNavBar";
import "../Styles/login.css";
function Login() {
  return (
    <div>
      <LoginNavBar />
      <div className="login_page">
        <ImageCard />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
