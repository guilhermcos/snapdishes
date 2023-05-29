import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFeedPosts } from "../../services/api";
import feedPost from "./FeedPost";
import FeedPost from "./FeedPost";
import { BallTriangle } from "react-loader-spinner";

export default function FeedContent() {
  const [postsData, setPostsData] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.removeItem("token");
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    getFeedPosts(config)
      .then((res) => {
        setPostsData(res.data);
        let likes = [];
        res.data.map((post) => {
          if (post.likerId) {
            likes.push(post.postId);
          }
        });
        setLikedPosts(likes);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  if (!postsData) {
    return (
      <LoadingContainer>
        <BallTriangle color="#2e8af6" />
      </LoadingContainer>
    );
  }

  if (postsData)
    return (
      <FeedContainer>
        <FeedTitle>Feed</FeedTitle>
        <PostsContainer>
          {postsData &&
            postsData.map((post) => {
              return (
                <FeedPost
                  setLikedPosts={setLikedPosts}
                  key={post.postId}
                  isLiked={likedPosts.includes(post.postId)}
                  post={post}
                />
              );
            })}
        </PostsContainer>
      </FeedContainer>
    );
}

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: calc(50dvh - 150px);
`;

const FeedTitle = styled.div`
  width: 100vw;
  height: 8vh;
  display: flex;
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
  margin-bottom: 1vh;
  border-bottom: 2px solid #323436;

  color: #ecebed;
  font-family: "Roboto Slab";
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: center;
`;

const PostsContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10vh;
`;

const FeedContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
