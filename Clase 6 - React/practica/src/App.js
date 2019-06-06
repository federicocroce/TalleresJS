import React from 'react';
import './App.css';

import FirstContainer from './Sections/FirstContainer/FirstContainer';
import Examples from './Examples/Examples';
import TestComponent from './Components/TestComponente/TestComponente'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent />
        <FirstContainer />
        {/* <Examples /> */}
      </header>
    </div>
  );
}

export default App;
