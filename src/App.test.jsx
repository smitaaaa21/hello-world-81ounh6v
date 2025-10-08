import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders Hello World text', () => {
    render(<App />);
    const helloWorldElement = screen.getByText('Hello World');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders Hello World as an h1 element', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('Hello World');
  });

  test('component renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  test('App component has correct structure', () => {
    render(<App />);
    const appDiv = screen.getByText('Hello World').closest('.App');
    expect(appDiv).toBeInTheDocument();
    expect(appDiv).toHaveClass('App');
  });

  test('renders exactly one Hello World heading', () => {
    render(<App />);
    const headings = screen.getAllByText('Hello World');
    expect(headings).toHaveLength(1);
  });
});
