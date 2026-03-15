// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ElementsSwagger title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ElementsSwagger/i);
    expect(titleElement).toBeInTheDocument();
});
