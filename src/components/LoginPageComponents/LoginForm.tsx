import React, { useRef, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../../Styles/login-form.css";
import App from "../../firebase/Firebase-config";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const email: string = emailRef.current!.value;

    const password = passwordRef.current!.value;

    const auth = getAuth(App);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setIsLoading(false);
      });
  };
  return (
    <div className="form_parent">
      <form onSubmit={submitHandler}>
        <div className="login_text">
          <h1 className="welcome">Welcome!</h1>
          <p className="subtitle">Enter details to login</p>
        </div>

        <input placeholder="Email" ref={emailRef} />

        <input placeholder="Password" type="password" ref={passwordRef} />

        <a href="#">FORGOT PASSWORD?</a>

        <button type="submit">{isLoading ? "Logging in..." : "LOG IN"}</button>
      </form>
    </div>
  );
};

export default LoginForm;
