import { render } from "@testing-library/react";
import HomePage from "../page";

describe("HomePage", () => {
  it("renders main heading", () => {
    const { getByRole } = render(<HomePage />);
    const heading = getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Vegan Fantasy Fair 2026");
  });

  it("renders heading with primary color class", () => {
    const { getByRole } = render(<HomePage />);
    const heading = getByRole("heading", { level: 1 });
    expect(heading).toHaveClass("text-primary");
  });

  it("renders call-to-action buttons", () => {
    const { getAllByRole } = render(<HomePage />);
    const links = getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  it("renders Key Facts section with icons", () => {
    const { getByText } = render(<HomePage />);
    expect(getByText("Key Facts")).toBeInTheDocument();
  });

  it("renders Event Areas grid", () => {
    const { getByText } = render(<HomePage />);
    expect(getByText("Was euch erwartet")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
