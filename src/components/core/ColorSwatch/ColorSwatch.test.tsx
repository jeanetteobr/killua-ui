import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ColorSwatch } from './index';

describe('ColorSwatch', () => {
  it('renders the color name', () => {
    render(<ColorSwatch name="primary" hex="#8B5CF6" />);
    expect(screen.getByText('primary')).toBeInTheDocument();
  });

  it('renders the hex value', () => {
    render(<ColorSwatch name="primary" hex="#8B5CF6" />);
    expect(screen.getByText('#8B5CF6')).toBeInTheDocument();
  });

  it('applies the background color', () => {
    render(<ColorSwatch name="test" hex="#FF0000" />);
    const swatch = screen.getByText('test').parentElement;
    expect(swatch).toHaveStyle({ backgroundColor: '#FF0000' });
  });

  it('uses dark text on light backgrounds', () => {
    render(<ColorSwatch name="light" hex="#FFFFFF" />);
    const swatch = screen.getByText('light').parentElement;
    expect(swatch).toHaveStyle({ '--kui-swatch-text-color': '#0F172A' });
  });

  it('uses light text on dark backgrounds', () => {
    render(<ColorSwatch name="dark" hex="#000000" />);
    const swatch = screen.getByText('dark').parentElement;
    expect(swatch).toHaveStyle({ '--kui-swatch-text-color': '#FFFFFF' });
  });

  it('has the correct class name', () => {
    render(<ColorSwatch name="test" hex="#8B5CF6" />);
    const swatch = screen.getByText('test').parentElement;
    expect(swatch).toHaveClass('kui-swatch');
  });
});
