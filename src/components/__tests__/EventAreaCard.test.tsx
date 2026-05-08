import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import EventAreaCard from "@/components/EventAreaCard";

describe("EventAreaCard", () => {
  const area = {
    name: "Mittelalter-Area",
    description: "Markt mit Handwerkern und Tavernen-Flair",
    icon: "castle",
  };

  it("renders area name", () => {
    render(<EventAreaCard area={area} />);
    expect(screen.getByText("Mittelalter-Area")).toBeDefined();
  });

  it("renders area description", () => {
    render(<EventAreaCard area={area} />);
    expect(screen.getByText("Markt mit Handwerkern und Tavernen-Flair")).toBeDefined();
  });

  it("renders Game Icon when provided", () => {
    const { container } = render(<EventAreaCard area={area} />);
    const img = container.querySelector('img[src*="castle"]');
    expect(img).toBeDefined();
    expect(img?.getAttribute("alt")).toBe("Mittelalter-Area");
  });

  it("renders without icon when not provided", () => {
    const { container } = render(
      <EventAreaCard area={{ name: "Test", description: "Desc" }} />
    );
    const img = container.querySelector("img");
    expect(img).toBeNull();
  });

  it("applies correct styling classes", () => {
    const { container } = render(<EventAreaCard area={area} />);
    const card = container.firstChild;
    expect(card?.className).toContain("rounded-3xl");
    expect(card?.className).toContain("shadow-card");
    expect(card?.className).toContain("hover:shadow-card-hover");
  });

  it("matches snapshot", () => {
    const { container } = render(<EventAreaCard area={area} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
