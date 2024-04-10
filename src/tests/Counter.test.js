import React from 'react';
import { render } from '@testing-library/react';
import {fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';


beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = "Counter0 +  - "; //default counter display
  expect(document.body.textContent).toContain(counterMessage);
});

test('should render initial count with value of 0', () => {
  const startCount = document.querySelector('p').textContent;
  expect(startCount).toBe('0');
});

test('clicking + increments the count', () => {
  const addButton = screen.getByText('+');
  fireEvent.click(addButton);
  const updatedCount = screen.getByText('1');
  expect(updatedCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const subButton = screen.getByText('-');
  fireEvent.click(subButton);
  const updatedCount = screen.getByText('-1');
  expect(updatedCount).toBeInTheDocument();
});