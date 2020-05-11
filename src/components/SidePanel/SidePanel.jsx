import React, { useState } from "react";
import "./SidePanel.css";

import Board from '../Board/Board'

const toggleteSearchBox = () => {
    
  const searchInput = document.querySelector(".search-bar");
  const searchIcon = document.querySelector(".fa-search");
  const searchOptions = document.querySelector(".search-options")

  if (document.activeElement === searchInput) {
    searchIcon.style.color = "rgb(29, 161, 242)";
    searchOptions.style.display = "block"
    console.log(searchOptions.style.display)
    searchOptions.innerHTML = "<p>Try searching for people, topics, or keywords</p>"
  } else {
    searchIcon.style.color = "#777";
    searchOptions.style.display = "none"
  }
};

const SidePanel = () => {
  // Declare a new state variable, which we'll call "count"
  const [search, setSearch] = useState("");

  const showClearIcon = (e) => {
    setSearch(e.target.value)
    const searchOptions = document.querySelector(".search-options")
    const clearIcon = document.querySelector('.close-btn')
    const searchInput = document.querySelector('.search-bar')
    if(searchInput.value.length > 0){
        clearIcon.style.display = "block"
        searchOptions.innerHTML = "<p>Nothing Found!</p>"
    }
    else {
        searchOptions.innerHTML = "<p>Try searching for people, topics, or keywords</p>"
        clearIcon.style.display = "none"
    }
  };

  const clearSearch = () => {
    setSearch("")
    const clearIcon = document.querySelector('.close-btn')
    clearIcon.style.display = "none"
  }

  return (
    <div className="side-panel" id="side-panel">
      <div id="search-icon">
        <i className="fas fa-search"></i>
      </div>
      <div className="close-btn">
        <i className="fas fa-times" onClick={clearSearch}></i>
      </div>
      <input
        type="text"
        className="search-bar"
        value={search}
        onFocus={toggleteSearchBox}
        onBlur={toggleteSearchBox}
        onChange={(e) => showClearIcon(e)}
        placeholder="Search Twitter"
      />
      <div className="search-options"></div>
      <Board></Board>
    </div>
  );
};
export default SidePanel;
