import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Heading } from './index';

describe('Heading', () => {
  it('renders children correctly', () => {
    render(<Heading>Test Heading</Heading>);
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  it('renders as h2 by default', () => {
    render(<Heading>Default Level</Heading>);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it.each([1, 2, 3, 4, 5, 6] as const)('renders as h%i when level=%i', (level) => {
    render(<Heading level={level}>Heading Level {level}</Heading>);
    const heading = screen.getByRole('heading', { level });
    expect(heading).toBeInTheDocument();
  });

  it('applies default size based on level', () => {
    render(<Heading level={1}>Large Heading</Heading>);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('kui-heading--2xl');
  });

  it('allows overriding size independently of level', () => {
    render(<Heading level={1} size="sm">Small H1</Heading>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('kui-heading--sm');
  });

  it.each(['left', 'center', 'right'] as const)('applies %s alignment', (align) => {
    render(<Heading align={align}>Aligned Heading</Heading>);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass(`kui-heading--${align}`);
  });

  it('applies truncate class when truncate is true', () => {
    render(<Heading truncate>Truncated Heading</Heading>);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('kui-heading--truncate');
  });

  it('does not apply truncate class by default', () => {
    render(<Heading>Normal Heading</Heading>);
    const heading = screen.getByRole('heading');
    expect(heading).not.toHaveClass('kui-heading--truncate');
  });

  it('applies custom className', () => {
    render(<Heading className="custom-class">Custom Heading</Heading>);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('kui-heading');
    expect(heading).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(<Heading data-testid="custom-heading" id="my-heading">Props Heading</Heading>);
    const heading = screen.getByTestId('custom-heading');
    expect(heading).toHaveAttribute('id', 'my-heading');
  });

  it('defaults to left alignment', () => {
    render(<Heading>Left Aligned</Heading>);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('kui-heading--left');
  });
});
