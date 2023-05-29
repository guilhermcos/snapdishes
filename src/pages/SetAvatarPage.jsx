import { useEffect, useState } from "react";
import axios from "axios";
import { postAvatarImage } from "../services/api";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function SetAvatarPage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.removeItem("token");
      navigate("/");
    }
  }, []);

  async function uploadImage(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      try {
        const response = await postAvatarImage(formData, config);
        console.log(response.data);
        navigate("/home/account");
      } catch (err) {
        console.log(err.response.data);
      }
    }
  }

  async function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (!selectedFile) {
      setPreview(null);
      return;
    }
    const previewURL = URL.createObjectURL(selectedFile);
    setPreview(previewURL);
  }

  return (
    <SetAvatarContainer>
      <Title>Escolha uma foto para o seu Perfil</Title>
      <StyledForm onSubmit={uploadImage}>
        <input
          onChange={handleFileChange}
          type="file"
          accept="image/jpeg, image/png, image/heic, image/heif"
        />
        {preview && (
          <ImageContainer>
            <img src={preview} alt="" />
          </ImageContainer>
        )}
        <button>submit</button>
      </StyledForm>
      <Link to="/home/account">Depois eu coloco!!</Link>
    </SetAvatarContainer>
  );
}

const ImageContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 80vw;
    height: 80vw;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const StyledForm = styled.form`
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
    background: linear-gradient(90deg, #f72e8e 0%, #1b8618 102.84%);
    border-radius: 24px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 30px;
    border: none;
    font-family: "Roboto Slab";
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 2px;
    text-align: center;

    :hover {
      background-color: #392a29;
    }
  }
`;

const SetAvatarContainer = styled.div`
  width: 100vw;
  padding-top: 10vh;
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

const Title = styled.h1`
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
