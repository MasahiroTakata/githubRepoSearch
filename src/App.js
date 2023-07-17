import React, { useState } from 'react';
import {SearchForm} from './components/SearchForm';
import {RepositoryList} from './components/RepositoryList';

export const App = () => {
  const [repositories, setRepositories] = useState([]);

  const handleSearch = (data) => {
    setRepositories(data);
  };

  return (
    <div>
      <h1>GitHub Repository Search</h1>
      <SearchForm onSearch={handleSearch} />
      <RepositoryList repositories={repositories} />
    </div>
  );
};
