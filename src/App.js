import React, { useState } from 'react';
import {SearchForm} from './components/SearchForm'; // 2,3行とも独自に作成したので{}が必要
import {RepositoryList} from './components/RepositoryList';

export const App = () => {
  const [repositories, setRepositories] = useState([]); //更新関数

  const handleSearch = (data) => {
    console.log(data); // 検索結果が格納されている
    setRepositories(data);
  };

  return (
    <div>
      <h1>GitHub Repository Search</h1>
      {/* onSearchという変数にhandleSearch（中身はdata=>{setRepositories(data);}）を渡している */}
      <SearchForm onSearch={handleSearch} />
      {/* SearchFormコンポーネントから、repositoriesのデータをもらう */}
      <RepositoryList repositories={repositories} />
    </div>
  );
};