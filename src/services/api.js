import axios from "axios";

const API_URI = process.env.REACT_APP_LINK_API || "http://192.168.0.22:5000";

export async function postSignUpData(body) {
  return await axios.post(`${API_URI}/signup`, body);
}

export async function postSignInData(body) {
  return await axios.post(`${API_URI}/signin`, body);
}

export async function postAvatarImage(formData, config) {
  return await axios.post(`${API_URI}/upload/avatarimage`, formData, config);
}

export async function postPostData(formData, config) {
  return await axios.post(`${API_URI}/posts/create`, formData, config);
}

export async function getSelfProfile(config) {
  return await axios.get(`${API_URI}/users/me`, config);
}

export async function postFollowUser(id, config) {
  return await axios.post(`${API_URI}/users/follow/${id}`, {}, config);
}

export async function postUnfollowUser(id, config) {
  return await axios.post(`${API_URI}/users/unfollow/${id}`, {}, config);
}

export async function getProfileInfo(id, config) {
  return await axios.get(`${API_URI}/users/profile/${id}`, config);
}

export async function getSearchResult(searchString, config) {
  return await axios.get(`${API_URI}/users/search/${searchString}`, config);
}

export async function postlikePost(id, config) {
  return await axios.post(`${API_URI}/likes/like/${id}`, {}, config);
}

export async function postUnlikePost(id, config) {
  return await axios.post(`${API_URI}/likes/unlike/${id}`, {}, config);
}
