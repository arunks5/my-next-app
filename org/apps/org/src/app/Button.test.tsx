
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';
import { SimpleButton } from '@org/my-lib';


test('renders button with label', () => {
  render(<Button label="Click me" disabled={true} />);
  const buttonElement:SimpleButton = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement.disabled).toBe(true);
});


// test('calls onClick handler when clicked', () => {
//   const handleClick = jest.fn();
//   render(<Button label="Click me" onClick={handleClick} />);
//   const buttonElement = screen.getByText(/click me/i);
//   fireEvent.click(buttonElement);
//   expect(handleClick).toHaveBeenCalledTimes(1);
// });
