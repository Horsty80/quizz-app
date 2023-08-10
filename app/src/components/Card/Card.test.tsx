import { render } from "@testing-library/react";
import Card from "./Card";
import "@testing-library/jest-dom";

describe("Card", () => {
  it("renders the label prop", () => {
    const { getByText } = render(<Card label="My Card" />);
    expect(getByText("My Card")).toBeInTheDocument();
  });

  it("renders the children prop", () => {
    const { getByText } = render(
      <Card label="My Card">
        <p>My Card Content</p>
      </Card>
    );
    expect(getByText("My Card Content")).toBeInTheDocument();
  });
});