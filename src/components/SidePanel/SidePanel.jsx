import React, { useState } from "react";
import "./SidePanel.css";

import Board from '../Board/Board'

const SidePanel = () => {
  // Declare a new state variable, which we'll call "count"
  const [search, setSearch] = useState("");
  const [searchOptions, setSearchOptions] = useState(false)


  return (
    <div className="side-panel" id="side-panel">
      <div id="search-icon">
        <i className="fas fa-search"></i>
      </div>
      { search.length > 0 ?
        <div className="close-btn" onClick={e => setSearch("")}>
          <i className="fas fa-times"></i>
        </div>
        : ""
      }
      <input
        type="text"
        className="search-bar"
        value={search}
        onFocus={e => setSearchOptions(true)}
        onBlur={e => setSearchOptions(false)}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Twitter"
      />
      { searchOptions ?
        <div className="search-options">
          <p>{search.length > 0 ? 'Nothing Found!' : 'Try searching for people, topics, or keyword'}</p>
        </div>
        : ""
      }
      <Board></Board>
    </div>
  );
};
export default SidePanel;
