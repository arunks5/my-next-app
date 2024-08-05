import React from 'react';

const Button = ({ label, onClick }:{label?:string,onClick?:()=>void}) => (
  <button onClick={onClick}>
    {label}
  </button>
);

export default Button;