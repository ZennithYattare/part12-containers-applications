import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import '@testing-library/jest-dom';
import Todo from './Todo.jsx';

test('renders todo text', () => {
  const todo = { text: 'Test Todo', done: false };
  const { getByText } = render(<Todo todo={todo} />);
  expect(getByText('Test Todo')).toBeInTheDocument();
  expect(getByText('Not Done')).toBeInTheDocument();
});