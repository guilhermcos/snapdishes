import axios from "axios";

const API_URI = process.env.REACT_APP_LINK_API;

export async function postSignUpData(body) {
  return await axios.post(`${API_URI}/signup`, body);
}

export async function postSignInData(body) {
  return await axios.post(`${API_URI}/signin`, body);
}

export async function postAvatarImage(formData, config) {
  return await axios.post(`${API_URI}/upload/avatarimage`, formData, config);
}
