import styled from "styled-components";

export const Message = styled.div`
  padding-bottom: 30px;
  width: 90vw;
  height: 20px;
  color: #f01f0e;
  text-align: center;
  font-family: Montserrat;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0em;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  div {
    padding-top: 7px;
    padding-left: 5px;
    padding-right: 5px;
    background-color: #ffffff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 1px;
    width: 90vw;
    height: 60px;
    label {
      font-family: "Roboto Slab";
      font-size: 13px;
      font-weight: 400;
      margin-left: 10px;
      color: #757575;
      line-height: 11px;
      letter-spacing: 0em;
      text-align: left;
    }
    input {
      padding-left: 15px;
      border: none;
      border-radius: 20px;
      background-color: #ffffff;
      height: 100%;
      font-family: "Roboto Slab";
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;

      :focus {
        background-color: #ffffff;
        border: none;
        outline: none;
      }
    }
  }
  a {
    margin-top: 3px;
    display: block;
    text-align: center;
    width: 90vw;
    color: #f4f4f9;
    font-family: "Roboto Slab";
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0em;
  }
  button {
    margin-top: 4px;
    color: #ffffff;
    background: linear-gradient(90deg, #f72e8e 0%, #1b8618 102.84%);
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 48px;
    border: none;
    font-family: "Roboto Slab";
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 2px;
    text-align: center;

    :hover {
      background-color: #392a29;
    }
  }
`;

export const Title = styled.div`
  margin-bottom: 5vh;
  color: #ECEBED;
  font-family: "Roboto Slab";
  font-size: 34px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;
`;

export const LoginContainer = styled.div`
  padding-top: 10vh;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #181a1c;
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 5;
  top: 0;
  left: 0;
  img {
    width: 130px;
  }
`;