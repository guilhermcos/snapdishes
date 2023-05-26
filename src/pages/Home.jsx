import { Route, Routes } from "react-router-dom";
import FeedPage from "./homePages/FeedPage";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <HomeContainer>
      <Routes>
        <Route path="/" element={<FeedPage />}></Route>
      </Routes>
      <Footer />
    </HomeContainer>
  );
}

const HomeContainer = styled.div``;
