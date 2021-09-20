import React, { useContext } from 'react';
import { Context } from '../Context/Context';
import './Search.css';

const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';

export const Search = () => {
  const [search, setSearch] = useContext(Context);
  return (
    <div className="search-container">
      <img className="search-icon" alt="" src={searchIconUrl} />
      <input
        className="search"
        type="text"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        placeholder="Search item by name"
      />
    </div>
  );
};
