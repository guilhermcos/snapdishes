import { useEffect, useState } from "react";
import ProfilePreview from "../SearchPage/ProfilePreview";
import styled from "styled-components";
import { getFollowers } from "../../services/api";
import { BallTriangle } from "react-loader-spinner";
import { ArrowBackIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function FollowersContent() {
  const [followers, setFollowers] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.removeItem("token");
      return;
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    getFollowers(config)
      .then((res) => {
        setFollowers(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function backButtonClick() {
    navigate(-1);
  }

  if (!followers) {
    return (
      <LoadingContainer>
        <BallTriangle color="#2e8af6" />
      </LoadingContainer>
    );
  }

  return (
    <FollowersContainer>
      <BackButton onClick={backButtonClick}>
        <ArrowBackIos style={{ color: "#ffffff" }} />
      </BackButton>
      <Header>Followers</Header>
      {followers &&
        followers.map((userInfo) => {
          return <ProfilePreview key={userInfo.id} userInfo={userInfo} />;
        })}
    </FollowersContainer>
  );
}

const BackButton = styled.div`
  background-color: black;
  padding-left: 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: fixed;
  left: 5px;
  top: 5px;
  width: 13vw;
  height: 13vw;
`;

const Header = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #ecebed;
  font-family: "Roboto Slab";
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: center;
`;

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: calc(50dvh - 150px);
`;

const FollowersContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10vh;
`;
