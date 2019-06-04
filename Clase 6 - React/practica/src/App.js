import React from 'react';
import './App.css';

import FirstContainer from './Sections/FirstContainer/FirstContainer';
import Examples from './Examples/Examples';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirstContainer />
        {/* <Examples /> */}
      </header>
    </div>
  );
}

export default App;
