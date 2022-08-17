import App from './App.js';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("App integration tests", () => {
  test("renders correctly", () => {
    render(<App />);
  });

  test("displays challenge list header text", () => {
    render(<App />);
    const cardText = screen.getByText("Add a challenge to the list!");
    expect(cardText).toBeInTheDocument();
  });
});