import Card from './card.js';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Card tests", () => {
  test("renders correctly", () => {
    render(<Card />);
  });

  test("displays app name", () => {
    render(<Card />);
    const cardText = screen.getByText("Use cup");
    expect(cardText).toBeInTheDocument();
  });
});