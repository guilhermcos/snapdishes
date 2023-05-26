import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo/logo.svg";
import axios from "axios";
import { ProgressBar } from "react-loader-spinner";
import { FormContainer, LoginContainer, Message, Title } from "./StyledLoginContent";
import { postSignInData } from "../../services/api";

export default function LoginContent() {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const [showedMessage, setShowedMessage] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    if (e.target.name === "email") {
      setInputData((inputData) => {
        return { ...inputData, email: e.target.value };
      });
    }
    if (e.target.name === "password") {
      setInputData((inputData) => {
        return { ...inputData, password: e.target.value };
      });
    }
  }

  async function signIn(e) {
    e.preventDefault();
    setIsLoading(true);
    const { email, password } = inputData;
    const body = {
      email,
      password,
    };

    try {
      const response = await postSignInData(body);
      setShowedMessage(false);
      setIsLoading(false);
      const { token } = response.data;
      localStorage.setItem("token", token);
      console.log("login com sucesso")
      navigate("/home");
    } catch (err) {
      setIsLoading(false);
      setShowedMessage(err.response.data);
    }
  }

  return (
    <LoginContainer>
      <img src={logo} alt="" />
      <Title>Sign in</Title>
      <Message>{showedMessage && showedMessage}</Message>
      <form onSubmit={signIn}>
        <FormContainer>
          <div>
            <label htmlFor="email">E-mail</label>
            <input onChange={handleChange} name="email" id="email" type="email" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} name="password" id="password" type="password" required />
          </div>
          <Link to="/auth/sign-up">doesn't have an account? click here to register</Link>
          <button type="submit">
            {isLoading ? <ProgressBar borderColor="#ffffff" /> : "LOGIN"}
          </button>
        </FormContainer>
      </form>
    </LoginContainer>
  );
}
