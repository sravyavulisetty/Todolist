import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('adds a new todo', () => {
  render(<App />);
  fireEvent.change(screen.getByRole('textbox'), {target: {value: "Sleep"}})
  fireEvent.click(screen.getByText(/Add/i));
  expect(screen.getByText(/Sleep/i)).toBeInTheDocument();
});
test('deletes a todo', () => {
  render(<App/>)
  fireEvent.change(screen.getByRole('textbox'), {target: {value: "Sleep"}})
  fireEvent.click(screen.getByText(/Add/i));
  fireEvent.click(screen.getByText(/Delete/i));
  expect(screen.queryByText(/Sleep/i)).not.toBeInTheDocument();
})
test('edit the todo', () => {
  render(<App/>);
  fireEvent.change(screen.getByRole('textbox'), {target: {value: "Sleep"}})
  fireEvent.click(screen.getByText(/Add/i));
  fireEvent.click(screen.getByText(/Edit/i))
  fireEvent.change(screen.getByDisplayValue(/Sleep/i), {target: {value: 'Read'}})
  fireEvent.click(screen.getByText(/Update/i))
  expect(screen.getByText(/Read/i)).toBeInTheDocument();
})
test('is title present', () => {
  render(<App/>);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
})