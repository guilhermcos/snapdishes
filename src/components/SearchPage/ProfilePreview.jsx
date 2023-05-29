import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ProfilePreview(props) {
  const { userInfo } = props;
  const navigate = useNavigate();

  function userClick() {
    navigate(`/home/search/users/${userInfo.id}`);
  }

  return (
    <UserPreview onClick={userClick}>
      <UserImage
        src={
          userInfo.avatarImg
            ? userInfo.avatarImg
            : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
        }
      />
      <NamesContainer>
        <UserName>{userInfo.userName}</UserName>
        <Name>{userInfo.name}</Name>
      </NamesContainer>
    </UserPreview>
  );
}

const NamesContainer = styled.div`
  padding-left: 2vw;
`;

const Name = styled.h3`
  font-family: "Roboto Slab";
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: left;
  color: #727477;
`;

const UserName = styled.h2`
  font-family: "Roboto Slab";
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: left;
  color: #ecebed;
`;

const UserImage = styled.img`
  width: 10vw;
  height: 10vw;
  object-fit: cover;
  border-radius: 50%;
`;

const UserPreview = styled.div`
  width: 90vw;
  height: 14vw;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #323436;
`;
