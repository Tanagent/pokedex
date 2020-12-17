import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Home button should say Home', () => {
  render(<App />);
  const linkElement = screen.getByText("Home");
  expect(linkElement).toBeInTheDocument();
});
