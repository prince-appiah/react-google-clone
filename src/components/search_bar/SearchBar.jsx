import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import "./SearchBar.css";
import { useStateValue } from "../../provider/stateProvider";
import { actionTypes } from "../../provider/actionTypes";

const SearchBar = ({ hideButtons = false }) => {
  const [input, setInput] = useState("");
  const history = useHistory();
  const [, dispatch] = useStateValue();

  const handleSearch = (e) => {
    e.preventDefault();

    dispatch({ type: actionTypes.SET_SEARCH_TERM, term: input });
    // fix input
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon className="search-input-icon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search-buttons">
          <Button type="submit" onClick={handleSearch} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling lucky</Button>
        </div>
      ) : (
        <div className="search-buttons">
          <Button
            type="submit"
            onClick={handleSearch}
            variant="outlined"
            className="hidden-search-button">
            Google Search
          </Button>
          <Button variant="outlined" className="hidden-search-button">
            I'm feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
