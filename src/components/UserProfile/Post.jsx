import { Message, MessageOutlined, ThumbUp, ThumbUpOutlined } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { postUnlikePost, postlikePost } from "../../services/api";

export default function Post(props) {
  const { post, setPostsLiked, userData, isLiked } = props;

  async function likePost() {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.removeItem("token");
      return;
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    setPostsLiked((postsLiked) => [...postsLiked, post.id]);
    post.likesCount += 1;

    try {
      await postlikePost(post.id, config);
      console.log("sucesso");
    } catch (err) {
      setPostsLiked((postsLiked) => postsLiked.filter((postId) => postId !== post.id));
      console.log(err.response.data);
    }
  }

  async function unlikePost() {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.removeItem("token");
      return;
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    setPostsLiked((postsLiked) => postsLiked.filter((postId) => postId !== post.id));
    post.likesCount -= 1;
    
    try {
      await postUnlikePost(post.id, config);
      console.log("sucesso");
    } catch (err) {
      setPostsLiked((postsLiked) => [...postsLiked, post.id]);
      console.log(err.response.data);
    }
  }

  return (
    <StyledPost>
      <PostHeader>
        <img src={userData.avatarImg} alt="" />
        <h2>{userData.userName}</h2>
      </PostHeader>
      {post.caption && <PostCaption>{<p>{post.caption}</p>}</PostCaption>}
      <PostImage onDoubleClick={!isLiked ? likePost : null} src={post.imageUrl}></PostImage>
      <PostFooter>
        {isLiked ? (
          <ThumbUp style={{ color: "#ffffff" }} onClick={unlikePost} />
        ) : (
          <ThumbUpOutlined style={{ color: "#ffffff" }} onClick={likePost} />
        )}
        <div>{post.likesCount}</div>
        <MessageOutlined style={{ color: "#ffffff" }} />
        <div>0</div>
      </PostFooter>
    </StyledPost>
  );
}

const PostFooter = styled.div`
  width: 100vw;
  height: 13vw;
  padding-left: 5vw;
  padding-right: 5vw;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #323436;
  margin-bottom: 8px;
  div {
    height: 100%;
    padding-top: 2px;
    display: flex;
    align-items: center;
    padding-left: 1vw;
    width: 14vw;
    color: #ecebed;
  }
`;

const PostImage = styled.img`
  margin-top: 6px;
  width: 100vw;
  height: 100vw;
  object-fit: cover;
`;

const PostCaption = styled.div`
  width: 100vw;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 3px;
  p {
    font-family: "Roboto Slab";
    font-size: 16px;
    font-weight: 300;
    line-height: 21px;
    text-align: left;
    color: #ecebed;
  }
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;
  height: 10vw;
  padding-left: 5vw;
  padding-right: 5vw;
  img {
    width: 8.5vw;
    height: 8.5vw;
    border-radius: 50%;
    object-fit: cover;
  }
  h2 {
    font-family: "Roboto Slab";
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
`;

const StyledPost = styled.div`
  width: 100vw;
`;
