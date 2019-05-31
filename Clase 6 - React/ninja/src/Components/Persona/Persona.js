import React from "react";

const Persona = ({cargo, nombre}) => {
    return (
      <div>
        <span>{cargo} : </span>
        <span>{nombre}</span>
      </div>
    )
  }

  export default Persona;