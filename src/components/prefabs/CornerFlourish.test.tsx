import { render } from "@testing-library/react";
import CornerFlourish from "./CornerFlourish";

describe("CornerFlourish", () => {
  it("renders SVG for top-left corner", () => {
    const { container } = render(
      <CornerFlourish position="top-left" color="primary" size="md" />
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("renders SVG for bottom-right corner", () => {
    const { container } = render(
      <CornerFlourish position="bottom-right" color="gold" size="lg" />
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("applies correct positioning class", () => {
    const { container } = render(
      <CornerFlourish position="top-right" color="accent" size="md" />
    );
    const div = container.firstChild;
    expect(div).toHaveClass("absolute");
  });

  it("applies color correctly", () => {
    const { container } = render(
      <CornerFlourish position="bottom-left" color="secondary-light" size="sm" />
    );
    const svg = container.querySelector("svg");
    expect(svg?.classList.contains("text-secondary-light")).toBe(true);
  });

  it("applies size correctly", () => {
    const { container } = render(
      <CornerFlourish position="top-left" color="primary" size="lg" />
    );
    const svg = container.querySelector("svg");
    expect(svg?.classList.contains("h-16")).toBe(true);
  });

  it("matches snapshot", () => {
    const { container } = render(
      <CornerFlourish position="top-left" color="primary" size="md" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
