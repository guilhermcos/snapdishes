import { Search } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import styled from "styled-components";
import ProfilePreview from "./ProfilePreview";
import { getSearchResult } from "../../services/api";

export default function SearchContent() {
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [suggest, setSuggest] = useState([
    {
      avatarImg: "https://drive.google.com/uc?id=1dVwwV2TPQwvGtJQOR2UFWZt5iQ0swxxl",
      id: 1,
      name: "Guilherme Gouveia da Costa",
      score: 35.7692314684391,
      userName: "guilhermcos",
    },
  ]);

  async function searchChange(e) {
    setIsSearchLoading(true);
    const searchString = e.target.value ? e.target.value : "guilhermcos";
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.removeItem("token");
      return;
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await getSearchResult(searchString, config)
      .then((res) => {
        setIsSearchLoading(false);
        console.log(res.data);
        setSearchResult(res.data);
      })
      .catch((err) => {
        setIsSearchLoading(false);
        console.log(err.message);
      });
  }

  return (
    <SearchContainar>
      <SearchBar>
        <input onChange={searchChange} type="text" placeholder="search for username or email" />
        {isSearchLoading ? (
          <MagnifyingGlass width={"9vw"} color="#ffffff" glassColor="#323436" />
        ) : (
          <Search style={{ color: "#ffffff" }} />
        )}
      </SearchBar>
      <SearchResultContainer>
        {searchResult ? (
          searchResult.map((userInfo) => {
            return <ProfilePreview key={userInfo.id} userInfo={userInfo} />;
          })
        ) : (
          <Suggestions>
            <TitleSuggestions>sugestões:</TitleSuggestions>
            {suggest.map((userInfo) => {
              return <ProfilePreview key={userInfo.id} userInfo={userInfo} />;
            })}
          </Suggestions>
        )}
      </SearchResultContainer>
    </SearchContainar>
  );
}

const TitleSuggestions = styled.div`
  width: 100vw;
  padding-left: 5vw;
  padding-right: 5vw;
  margin-bottom: 20px;

  color: #ecebed;
  font-family: "Roboto Slab";
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: center;
`;

const Suggestions = styled.div`
  padding-top: 10px;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SearchResultContainer = styled.div`
  padding-top: 20px;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SearchBar = styled.div`
  padding-left: 3vw;
  padding-right: 3vw;
  width: 90%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #323436;
  border-radius: 30px;
  input {
    background-color: #323436;
    width: 90%;
    height: 3vh;
    border: none;
    outline: none;
    font-family: "Roboto Slab";
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 1px;
    text-align: left;
    color: #ffffff;
    ::placeholder {
      font-weight: 300;
    }
  }
`;

const SearchContainar = styled.div`
  padding-top: 2vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
