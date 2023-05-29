import styled from "styled-components";

export const CaptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  label {
    font-family: "Roboto Slab";
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    color: #ecebed;
  }
  textarea {
    background-color: #ecebed;
    width: 85vw;
    min-height: 90px;
    border: none;
    border-radius: 8px;
    padding: 4px;
    font-family: "Roboto Slab";
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    :hover {
      border: none;
      outline: none;
    }
    :focus {
      border: none;
      outline: none;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  input {
    border: none;
    color: #ffffff;
  }
  button {
    color: #ffffff;
    background: linear-gradient(90deg, #f72e8e 0%, #c721cd 65.88%, #ac1af0 102.84%);
    border-radius: 24px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 40px;
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

export const CreatePostContainer = styled.div`
  width: 100vw;
  padding-top: 7vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    margin-top: 15px;
    margin-bottom: 5vh;
    display: block;
    text-align: center;
    color: #f4f4f9;
    font-family: "Roboto Slab";
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0em;
  }
`;

export const ImageContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 90vw;
    max-height: 100vw;
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  margin-bottom: 3vh;
  width: 90%;
  color: #ecebed;
  font-family: "Roboto Slab";
  font-size: 34px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: center;
`;
