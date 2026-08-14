// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PeakSynapse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PeakSynapse/i);
    expect(titleElement).toBeInTheDocument();
});
