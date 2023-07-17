import React from 'react';

export const RepositoryList = ({ repositories }) => {
  return (
    <ul>
      {repositories.map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  );
};