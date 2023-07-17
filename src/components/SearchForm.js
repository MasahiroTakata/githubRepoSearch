import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";

export const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState(''); // 更新関数

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
      onSearch(response.data.items);
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchText type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <RepoSearchBtn type="submit">検索</RepoSearchBtn>
    </form>
  );
};
// styled-componentsを使用
const RepoSearchBtn = styled.button`
  margin-left: 16px;
`;

const SearchText = styled.input`
  width: 200px;
  height: 20px;
`;