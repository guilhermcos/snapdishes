import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ProfilePreview(props) {
  const { userInfo } = props;
  const navigate = useNavigate();

  function userClick() {
    navigate(`users/${userInfo.id}`);
  }

  return (
    <UserPreview onClick={userClick}>
      <UserImage
        src={
          userInfo.avatarImg
            ? userInfo.avatarImg
            : "data:image/jpeg;base64,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"
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
