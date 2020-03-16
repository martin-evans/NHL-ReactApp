import React from 'react';
import './App.css';
import TeamsTable from './teamsTable.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          NHL Stats
        </p>
      </header>
      <TeamsTable/>
    </div>
  );
}

export default App;
