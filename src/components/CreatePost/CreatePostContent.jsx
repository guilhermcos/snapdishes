import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import {
  CaptionContainer,
  CreatePostContainer,
  ImageContainer,
  StyledForm,
  Title,
} from "./StyledCreatePost";
import { postPostData } from "../../services/api";

export default function CreatepostContent() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  async function uploadImage(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      if (caption) formData.append("caption", caption);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      try {
        await postPostData(formData, config);
        navigate("/home/account");
      } catch (err) {
        console.log(err);
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

  async function handleChange(e) {
    if (e.target.value) {
      setCaption(e.target.value);
    } else {
      setCaption(null);
    }
  }

  return (
    <CreatePostContainer>
      <Title>Choose the image you wish to share...</Title>
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
        <CaptionContainer>
          <label htmlFor="caption">Write a caption for your photo:</label>
          <textarea onChange={handleChange} id="caption" maxLength={140}></textarea>
        </CaptionContainer>
        <button>submit</button>
      </StyledForm>
      <Link to="/home/feed">Abort the creation of a new post.</Link>
    </CreatePostContainer>
  );
}
