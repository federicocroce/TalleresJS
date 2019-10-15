import React from 'react';

const InputText = ({value, onChange, type, name}) =>{

    return(
        <input type={type} value={value} onChange={(e) => onChange && onChange(e.target.value, name)}></input>
    )

}

export default InputText;