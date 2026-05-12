import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import EventAreaCard from "@/components/EventAreaCard";

describe("EventAreaCard", () => {
  const area = {
    name: "Burghof",
    description: "Castle Stage mit Show- und Theatervorführungen, Spiele und Aktives Outdoor.",
    icon: "castle",
  };

  it("renders area name", () => {
    render(<EventAreaCard area={area} />);
    expect(screen.getByText("Burghof")).toBeDefined();
  });

  it("renders area description", () => {
    render(<EventAreaCard area={area} />);
    expect(screen.getByText("Castle Stage mit Show- und Theatervorführungen, Spiele und Aktives Outdoor.")).toBeDefined();
  });

  it("renders Game Icon when provided", () => {
    const { container } = render(<EventAreaCard area={area} />);
    const img = container.querySelector('img[src*="castle"]');
    expect(img).toBeDefined();
    expect(img?.getAttribute("alt")).toBe("Burghof");
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
    const card = container.firstChild as Element | null;
    expect(card?.className).toContain("rounded-3xl");
    expect(card?.className).toContain("shadow-card");
    expect(card?.className).toContain("hover:shadow-card-hover");
  });

  it("matches snapshot", () => {
    const { container } = render(<EventAreaCard area={area} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
