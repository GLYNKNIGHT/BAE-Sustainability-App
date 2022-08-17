import { render } from "@testing-library/react";
import Navbar from "./navbar.js";

describe("Navbar tests", () => {
  test("renders correctly", () => {
    render(<Navbar />);
  });
});
