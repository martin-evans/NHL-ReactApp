import React from "react";

export default function searchBar(props){


    return (
        <form className="form-inline my-2 my-lg-0 search-form">
            <input
              className="form-control mr-sm-6 rounded-left-border"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-success my-2 my-sm-0 rounded-right-border"
              type="submit">
              Search
            </button>
          </form>
    );
}