import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";

export const SearchForm = ({ onSearch }) => {
  console.log("データの中身は、" + onSearch); // handleSearch（中身はdata=>{setRepositories(data);})を受け取っている、さらに文字を入力する度に呼ばれている
  const [query, setQuery] = useState(''); // 更新関数

  const handleSubmit = async (e) => {
    e.preventDefault(); // 画面リロードを制御する処理
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