import { render } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("renders header element", () => {
    const { container } = render(<Header />);
    const header = container.querySelector("header");
    expect(header).toBeInTheDocument();
  });

  it("renders navigation", () => {
    const { getByRole } = render(<Header />);
    const nav = getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it("includes decorative divider line", () => {
    const { container } = render(<Header />);
    const divider = container.querySelector(".border-secondary-light");
    expect(divider).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
