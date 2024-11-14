
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button as MyButton, SimpleButton } from '@org/my-lib';


test('renders button with label', async () => {
  render(<MyButton disabled={true} name={'Lit Element'} data-testid="search-pagination">
    {'Render'}
  </MyButton>);
  const buttonElement:SimpleButton =       screen.getByTestId('search-pagination');
  expect(buttonElement).toBeInTheDocument();
  await buttonElement.updateComplete;
  expect(buttonElement).toHaveProperty('name','Lit Element');
  expect(buttonElement.disabled).toBe(true);
});
