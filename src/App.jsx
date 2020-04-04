import React from "react";
import "./App.css";
import TeamsTable from "./teamsTable.jsx";
import MyNavBar from "./myNavBar.jsx";
import SearchBar from "./searchBar"

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <section className="jumbotron text-center content">
        <div>
          <div className="foo">
            <h1>NHL Stats</h1>
            <div>
            <SearchBar/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
