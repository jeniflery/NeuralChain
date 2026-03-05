// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NeuralChain title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NeuralChain/i);
    expect(titleElement).toBeInTheDocument();
});
