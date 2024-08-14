import { createComponent } from "@lit-labs/react";
// import { createComponent } from "lit-labs-latest";
import { SimpleButton} from './button';
import React from "react";


export const Button = createComponent({
	elementClass:SimpleButton,
	react:React,
	tagName:'simple-button'
});

