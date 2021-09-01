import React, { useContext } from "react";
import { Context } from '../Context/Context.js'
import './Search.css';

const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';

export const Search = () => {
    const [ search, setSearch ] = useContext(Context);
    return (
        <div id="search-container">
          <img id="search-icon" alt="" src={searchIconUrl} />
          <input
            id="search"
            type="text"
            value={search}
            onChange={({target}) => setSearch(target.value)}
            placeholder="Search item"
          />
        </div>
    );
}