import { render } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders footer element", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });

  it("renders copyright text", () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/2026/)).toBeInTheDocument();
  });

  it("includes DividerLeaf component", () => {
    const { container } = render(<Footer />);
    const divider = container.querySelector("svg");
    expect(divider).toBeInTheDocument();
  });

  it("applies soft background styling", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toHaveClass("bg-surface");
  });

  it("matches snapshot", () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
