import React from 'react';
import { Button as MyButton } from '@org/my-lib';

const Button = ({ label, onClick,disabled }:{disabled?:boolean,label?:string,onClick?:()=>void}) => (
    <MyButton disabled={disabled} onClick={onClick}>
      {label}
    </MyButton>
);

export default Button;