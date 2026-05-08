import { render } from "@testing-library/react";
import DividerLeaf from "./DividerLeaf";

describe("DividerLeaf", () => {
  it("renders SVG element for horizontal divider", () => {
    const { container } = render(
      <DividerLeaf direction="horizontal" color="secondary-light" opacity="100" />
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("renders SVG element for vertical divider", () => {
    const { container } = render(
      <DividerLeaf direction="vertical" color="primary" opacity="50" />
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("applies opacity correctly", () => {
    const { container } = render(
      <DividerLeaf direction="horizontal" color="primary" opacity="30" />
    );
    const svg = container.querySelector("svg");
    expect(svg?.style.opacity).toBe("0.3");
  });

  it("applies aria-hidden for decoration", () => {
    const { container } = render(
      <DividerLeaf direction="horizontal" color="gold" opacity="75" />
    );
    const svg = container.querySelector("svg");
    expect(svg?.getAttribute("aria-hidden")).toBe("true");
  });

  it("matches snapshot", () => {
    const { container } = render(
      <DividerLeaf direction="horizontal" color="secondary-light" opacity="100" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
