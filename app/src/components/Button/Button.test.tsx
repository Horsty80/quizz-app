import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { vi } from "vitest";
import "@testing-library/jest-dom";

describe("Button", () => {
  const handleClick = vi.fn();
  it("renders the text prop", () => {
    const { getByText } = render(<Button onClick={handleClick} text="Click me" />);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("renders the children prop", () => {
    const { getByText } = render(<Button text={null} onClick={handleClick} >Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("calls the onClick prop when clicked", () => {
    const { getByRole } = render(<Button text="Click me" onClick={handleClick} />);
    fireEvent.click(getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });
});