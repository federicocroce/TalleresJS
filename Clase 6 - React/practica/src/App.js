import React from 'react';
import './App.css';

import FirstContainer from './Sections/FirstContainer/FirstContainer';
import Repaso from './Components/Repaso/Repaso';
import Button from './Components/Repaso/Button';
import Container from './Components/Repaso/Container';
import Examples from './Examples/Examples';
import TestComponent from './Components/TestComponente/TestComponente'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <TestComponent /> */}
        {/* <FirstContainer /> */}
        {/* <Examples /> */}
        {/* <Repaso text="Fede por destruct"/>
        <Button onClick={() => alert("Hice Click a soy un boton")} label="Soy un botón"/>
        <Button onClick={() => alert("Hice Click a soy otro boton")} label="Soy otro botón"/>
        <Button onClick={() => alert("Hice Click a soy otro boton más")} label="Soy otro botón más"/> */}
        <Container/>
      </header>
    </div>
  );
}

export default App;
