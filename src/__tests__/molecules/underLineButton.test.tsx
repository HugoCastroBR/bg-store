import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UnderLineButton from '../../components/molecules/underLineButton';
import './../../i18n';

describe("Renders the UnderLineButton component", () => {
  const handleClick = jest.fn();

  it("should render the children text", () => {
    const { container } = render(<UnderLineButton>Button Text</UnderLineButton>);
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(/Button Text/i);
  });

  it("should apply the selected class when selected prop is true", () => {
    const { container } = render(<UnderLineButton selected={true}>Button Text</UnderLineButton>);
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toHaveClass('border-b-[5px]');
  });

  it("should not apply the selected class when selected prop is false", () => {
    const { container } = render(<UnderLineButton selected={false}>Button Text</UnderLineButton>);
    const buttonElement = container.querySelector('button');
    expect(buttonElement).not.toHaveClass('border-b-[5px]');
  });

  it("should call the onClick function when clicked", () => {
    const { container } = render(<UnderLineButton onClick={handleClick}>Button Text</UnderLineButton>);
    const buttonElement = container.querySelector('button');
    fireEvent.click(buttonElement as Element);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should apply custom className passed as prop", () => {
    const { container } = render(<UnderLineButton classname="custom-class">Button Text</UnderLineButton>);
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toHaveClass('custom-class');
  });
});
