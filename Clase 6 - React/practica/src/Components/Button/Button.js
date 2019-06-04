import React from 'react';
import './Button.scss';

const Button = ({onClick, label, disabled, className, children}) => <button className={className} disabled={disabled} onClick={()=>onClick()}>{label} {children}</button>

export default Button;
