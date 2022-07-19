import { render, screen } from '@testing-library/react';
import WaterJugComponent from './WaterJugComponent'

test('title is rendering', () => {
  render(<WaterJugComponent/>);
  const linkElement = screen.getByText(/Water Jug Challenge/i);
  expect(linkElement).toBeInTheDocument();
});
