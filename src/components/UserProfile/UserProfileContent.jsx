import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Post from "./Post";
import { getSelfProfile } from "../../services/api";
import { ArrowBackIos } from "@mui/icons-material";
import AccountMenu from "./SettingsButton";

export default function UserProfileContent() {
  const [userData, setUserData] = useState(null);
  const [postsLiked, setPostsLiked] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.removeItem("token");
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    getSelfProfile(config)
      .then((res) => {
        console.log(res.data.rows[0]);
        setUserData(res.data?.rows[0]);
        setPostsLiked(res.data?.rows[0]?.likedPosts || []);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  if (!userData) {
    return <div>carregando</div>;
  }

  return (
    <UserProfileContainer>
      <AccountMenu />
      <BackgroundImg src="https://cdn.pixabay.com/photo/2023/05/22/10/49/houses-8010401_1280.jpg" />
      <AvatarImg src={userData.avatarImg}></AvatarImg>
      <UserName>{userData.userName}</UserName>
      <Biography>
        Olá, sou o Guilherme. estudante de desenvolvimento web para desktop e mobile
      </Biography>
      <ProfileInfo>
        <div>
          <span>{userData.followersCount}</span>
          <h3>Followers</h3>
        </div>
        <div>
          <span>{userData.followingCount}</span>
          <h3>Following</h3>
        </div>
        <button>Edit Profile</button>
      </ProfileInfo>
      <PostsNav>
        <div>Posts</div>
        <div>Liked</div>
      </PostsNav>
      <PostsContainer>
        {userData.posts &&
          userData.posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
                userData={userData}
                setPostsLiked={setPostsLiked}
                isLiked={postsLiked.includes(post.id)}
              />
            );
          })}
      </PostsContainer>
    </UserProfileContainer>
  );
}

const PostsContainer = styled.div`
  padding-top: 2vh;
  padding-bottom: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostsNav = styled.div`
  margin-top: 20px;
  width: 88vw;
  display: flex;
  div {
    :first-of-type {
      border-bottom: 3px solid #2e8af6;
      font-weight: 500;
    }
    font-family: "Roboto Slab";
    color: #ffffff;
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    height: 25px;
    width: 44vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 0.5px solid white;
  }
`;

const ProfileInfo = styled.div`
  margin-top: 20px;
  display: flex;
  width: 88vw;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
    span {
      font-family: "Roboto Slab";
      font-size: 14px;
      font-weight: 700;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;
      color: #ffffff;
    }
    h3 {
      font-family: "Roboto Slab";
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;
      color: #727477;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 133px;
    height: 36px;
    background-color: #181a1c;
    border: 1px solid #727477;
    border-radius: 30px;
    font-family: "Roboto Slab";
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
`;

const Biography = styled.p`
  font-family: "Roboto Slab";
  color: #ecebed;
  font-size: 14px;
  font-weight: 300;
  max-width: 80vw;
  flex-wrap: wrap;
  line-height: 20px;
  text-align: center;
`;

const UserName = styled.h1`
  font-family: "Roboto Slab";
  font-size: 20px;
  color: #ffffff;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  margin-bottom: 10px;
`;

const UserProfileContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AvatarImg = styled.img`
  position: absolute;
  top: calc(20vh - 20vw);
  left: calc(50vw - 20vw);
  border-radius: 50%;
  border: 1.5px solid #000000;
  width: 40vw;
  height: 40vw;
  object-fit: cover;
`;

const BackgroundImg = styled.img`
  height: 20vh;
  width: 100vw;
  object-fit: cover;
  margin-bottom: 24vw;
`;
