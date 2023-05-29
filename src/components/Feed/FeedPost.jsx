import { MessageOutlined, ThumbUp, ThumbUpOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { postUnlikePost, postlikePost } from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function FeedPost(props) {
  const { post, setLikedPosts, isLiked } = props;
  const navigate = useNavigate();

  async function likePost() {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.removeItem("token");
      return;
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    setLikedPosts((likedPosts) => [...likedPosts, post.postId]);
    post.likesCount += 1;

    try {
      await postlikePost(post.postId, config);
      console.log("sucesso");
    } catch (err) {
      setLikedPosts((likedPosts) => likedPosts.filter((postId) => postId !== post.postId));
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

    setLikedPosts((likedPosts) => likedPosts.filter((postId) => postId !== post.postId));
    post.likesCount -= 1;

    try {
      await postUnlikePost(post.postId, config);
      console.log("sucesso");
    } catch (err) {
      setLikedPosts((likedPosts) => [...likedPosts, post.postId]);
      console.log(err.response.data);
    }
  }

  function toUser() {
    navigate(`/home/search/users/${post.userId}`);
  }

  return (
    <StyledPost>
      <PostHeader>
        <img onClick={toUser} src={post.avatarImg} alt="" />
        <h2 onClick={toUser}>{post.userName}</h2>
      </PostHeader>
      {post.caption && <PostCaption>{<p>{post.postCaption}</p>}</PostCaption>}
      <PostImage onDoubleClick={!isLiked ? likePost : null} src={post.postImgUrl}></PostImage>
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
