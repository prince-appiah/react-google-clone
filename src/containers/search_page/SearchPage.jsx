import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./SearchPage.css";
import { useStateValue } from "../../provider/stateProvider";
import useGoogleSearch from "../../hooks/useGoogleSearch";
import SearchBar from "../../components/search_bar/SearchBar";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term); // live API call

  //   const data = Response; // mock API call

  console.log(data);

  return (
    <div className="search-page">
      <div className="search-page-header">
        <Link to="/">
          <img
            className="search-page-logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="search-page-header-body">
          <SearchBar hideButtons />
          <div className="search-page-filters">
            <div className="filters-left">
              <div className="filter-option">
                <SearchIcon />
                <Link to="/">All</Link>
              </div>
              <div className="filter-option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="filter-option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="filter-option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="filter-option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="filter-option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="filters-right">
              <div className="filter-option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="filter-option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="search-results">
          <p className="search-results-count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => {
            return (
              <div className="search-page-result">
                <a href={item.link}>
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        src={item.pagemap?.cse_image[0]?.src}
                        alt=""
                        className="search-result-image"
                      />
                    )}
                  {item.displayLink}
                </a>
                <a href={item.link} className="search-page-result-title">
                  <h2>{item.title}</h2>
                </a>
                <p className="search-page-result-snippet">{item.snippet}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
