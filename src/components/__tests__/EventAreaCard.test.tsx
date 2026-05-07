import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import EventAreaCard from "@/components/EventAreaCard";

describe("EventAreaCard", () => {
  const area = {
    name: "Mittelalter-Area",
    description: "Markt mit Handwerkern und Tavernen-Flair",
    icon: "🏰",
  };

  it("renders area name", () => {
    render(<EventAreaCard area={area} />);
    expect(screen.getByText("Mittelalter-Area")).toBeDefined();
  });

  it("renders area description", () => {
    render(<EventAreaCard area={area} />);
    expect(screen.getByText("Markt mit Handwerkern und Tavernen-Flair")).toBeDefined();
  });

  it("renders icon when provided", () => {
    render(<EventAreaCard area={area} />);
    expect(screen.getByText("🏰")).toBeDefined();
  });

  it("renders without icon when not provided", () => {
    render(<EventAreaCard area={{ name: "Test", description: "Desc" }} />);
    expect(screen.queryByText("🏰")).toBeNull();
  });
});
