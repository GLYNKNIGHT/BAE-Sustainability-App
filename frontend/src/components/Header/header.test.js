import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./header";

describe("Header tests", () => {
  test("renders correctly", () => {
    render(<Header />);
  });

  test("displays correct img", () => {
    render(<Header />);

    const appImage = screen.getByRole("img");
    expect(appImage).toBeInTheDocument();
  });

  test("displays app name", () => {
    render(<Header />);

    const appName = screen.getByText("Carbon Crushers");
    expect(appName).toBeInTheDocument();
  });

  test("displays my footprint count", () => {
    render(<Header />);

    const footPrintCount = screen.getByText("My Footprint:", { exact: false });
    expect(footPrintCount).toBeInTheDocument();
  });

  test("displays team footprint count", () => {
    render(<Header />);

    const footPrintCount = screen.getByText("Team Footprint:", {
      exact: false,
    });
    expect(footPrintCount).toBeInTheDocument();
  });
});
