import React from 'react';

const TM_FILENAME_BASE = (props) => {
    console.log("Renderiza buton")
    return (
        <div>
           <button onClick={()=>props.onClick()}>{props.label}</button>
        </div>
    );
}

export default TM_FILENAME_BASE;
