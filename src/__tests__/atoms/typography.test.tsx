import React from "react";
import { render, screen } from '@testing-library/react';
import Typography from "../../components/atoms/typography";

describe("Renders the Typography component", () => {
  render(<Typography className="text-red-500">Typography</Typography>);
  const linkElement = screen.getByText(/Typography/i);

  it("should render the children", () => {
    expect(linkElement).toBeInTheDocument();
  });
  it("should render the className", () => {
    expect(linkElement).toHaveClass("text-red-500");
  });
});
