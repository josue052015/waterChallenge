import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the child component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Water Jug Challenge/i);
  expect(linkElement).toBeInTheDocument();
});
