import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import { useState } from "react";
import axios from "axios";
import { ProgressBar } from "react-loader-spinner";
import { FormContainer, Message, SignUpContainer, Title } from "./StyledSignUpContent";
import { postSignInData, postSignUpData } from "../../services/api";

export default function SignUpContent() {
  const [inputData, setInputData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showedMessage, setShowedMessage] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    if (e.target.name === "name") {
      setInputData((inputData) => {
        return { ...inputData, name: e.target.value };
      });
    }
    if (e.target.name === "userName") {
      setInputData((inputData) => {
        return { ...inputData, userName: e.target.value };
      });
    }
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
    if (e.target.name === "confirmPassword") {
      setInputData((inputData) => {
        return { ...inputData, confirmPassword: e.target.value };
      });
    }
  }

  async function signUp(e) {
    e.preventDefault();
    const { name, userName, email, password, confirmPassword } = inputData;
    if (password !== confirmPassword) {
      setShowedMessage("Password and password confirmation must match.");
      setTimeout(() => {
        setShowedMessage(false);
      }, 3000);
      return;
    }
    const body = {
      name,
      userName,
      email,
      password,
      confirmPassword,
    };
    setIsloading(true);
    try {
      await postSignUpData(body);
      const { token } = (await postSignInData({ email: body.email, password: body.password })).data;
      localStorage.setItem("token", token);

      setShowedMessage(false);
      setIsloading(false);
      navigate("/home/feed");
    } catch (err) {
      setIsloading(false);
      setShowedMessage(err.response.data);
    }
  }

  return (
    <SignUpContainer>
      <img src={logo} alt="" />
      <Title>Sign up</Title>
      <Message>{showedMessage && showedMessage}</Message>
      <form onSubmit={signUp}>
        <FormContainer>
          <div>
            <label htmlFor="name">Name</label>
            <input onChange={handleChange} name="name" id="name" type="text" required />
          </div>
          <div>
            <label htmlFor="userName">UserName</label>
            <input onChange={handleChange} name="userName" id="userName" type="text" required />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input onChange={handleChange} name="email" id="email" type="email" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              name="password"
              id="password"
              type="password"
              minLength={4}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              onChange={handleChange}
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              minLength={4}
              required
            />
          </div>
          <Link to="/">Already registered? Click here to log in.</Link>
          <button type="submit">
            {isLoading ? <ProgressBar borderColor="#ffffff" /> : "REGISTER"}
          </button>
        </FormContainer>
      </form>
    </SignUpContainer>
  );
}
