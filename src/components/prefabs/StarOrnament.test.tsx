import { render } from "@testing-library/react";
import StarOrnament from "./StarOrnament";

describe("StarOrnament", () => {
  it("renders SVG element", () => {
    const { container } = render(<StarOrnament size="md" color="primary" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("applies color class correctly", () => {
    const { container } = render(<StarOrnament size="md" color="accent" />);
    const svg = container.querySelector("svg");
    expect(svg?.classList.contains("text-accent")).toBe(true);
  });

  it("applies size class correctly", () => {
    const { container } = render(<StarOrnament size="lg" color="primary" />);
    const svg = container.querySelector("svg");
    expect(svg?.classList.contains("h-12")).toBe(true);
  });

  it("renders with aria-hidden for decoration", () => {
    const { container } = render(<StarOrnament size="md" color="gold" />);
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("aria-hidden")).toBe("true");
  });

  it("matches snapshot", () => {
    const { container } = render(<StarOrnament size="md" color="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
