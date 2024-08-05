import React from 'react';
import { GreetingComponent } from '@org/my-lib';

const Button = ({ label, onClick }:{label?:string,onClick?:()=>void}) => (
  <GreetingComponent onClick={onClick}>
    {label}
    </GreetingComponent>
);

export default Button;