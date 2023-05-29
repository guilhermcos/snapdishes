import { Search } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import styled from "styled-components";
import ProfilePreview from "./ProfilePreview";
import { getSearchResult } from "../../services/api";

export default function SearchContent() {
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

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
        setSearchResult(res.data);
        console.log(res.data);
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
        {searchResult &&
          searchResult.map((userInfo) => {
            return <ProfilePreview key={userInfo.id} userInfo={userInfo} />;
          })}
      </SearchResultContainer>
    </SearchContainar>
  );
}

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
