import { createComponent } from "@lit/react";
import { SimpleGreeting} from './greeting';
import React from "react";


export const GreetingComponent = createComponent({
	elementClass:SimpleGreeting,
	react:React,
	tagName:'simple-greeting'
});

