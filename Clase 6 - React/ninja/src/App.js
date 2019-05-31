import React from 'react';
import logo from './logo.svg';
import './App.css';

import Persona from './Components/Persona/Persona';

// const LogoNuevo = () => {
//   const sarasa = "sarasa";
//   return (
//     <img src={logo} className="App-logo" alt="logo" />
//   )
// }

const LogoNuevo = () => (
  <div>
    <img src={logo} className="App-logo" alt="logo" />
    <p>Soy una constante</p>
  </div>
)

const LogoNuevoParam = ({value}) => {
  const constant = `Soy una constante + ${value}`
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>{constant}</p>
    </div>
  )
}


const newArray = [
  {
    cargo: "Profesor",
    nombre: "Federico Croce"
  },
  {
    cargo: "Alumno",
    nombre: "Martin"
  },
  {
    cargo: "Alumno",
    nombre: "GG"
  },
  {
    cargo: "Alumno",
    nombre: "GG"
  },
  {
    cargo: "Alumno",
    nombre: "GG"
  },
  {
    cargo: "Alumno",
    nombre: "GG"
  },
  {
    cargo: "Alumno",
    nombre: "GG"
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoNuevo />
        <LogoNuevoParam value="el parametro del componente"/>
        {newArray.map(({ cargo, nombre }) => <Persona cargo={cargo} nombre={nombre} />)}
      </header>
    </div>
  );
}

export default App;
