import { Route, Routes, useNavigate } from "react-router-dom";
import FeedPage from "./homePages/FeedPage";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import UserProfilePage from "./homePages/UserProfilePage";
import SearchPage from "./homePages/SearchPage";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.removeItem("token");
      navigate("/");
    }
  }, []);

  return (
    <HomeContainer>
      <Routes>
        <Route path="/" element={<FeedPage />}></Route>
        <Route path="/account/*" element={<UserProfilePage />} />
        <Route path="/search/*" element={<SearchPage />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
      <Footer />
    </HomeContainer>
  );
}

const HomeContainer = styled.div``;
