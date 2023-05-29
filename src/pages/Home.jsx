import { Route, Routes } from "react-router-dom";
import FeedPage from "./homePages/FeedPage";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import UserProfilePage from "./homePages/UserProfilePage";
import SearchPage from "./homePages/SearchPage";

export default function Home() {
  return (
    <HomeContainer>
      <Routes>
        <Route path="/" element={<FeedPage />}></Route>
        <Route path="/account" element={<UserProfilePage />} />
        <Route path="/search/*" element={<SearchPage />} />
      </Routes>
      <Footer />
    </HomeContainer>
  );
}

const HomeContainer = styled.div``;
