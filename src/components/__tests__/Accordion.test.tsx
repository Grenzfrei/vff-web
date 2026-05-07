import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "@/components/Accordion";

const items = [
  { id: "1", question: "Frage eins?", answer: "Antwort eins." },
  { id: "2", question: "Frage zwei?", answer: "Antwort zwei." },
  { id: "3", question: "Frage drei?", answer: "Antwort drei." },
];

describe("Accordion", () => {
  it("renders all items", () => {
    render(<Accordion items={items} />);
    expect(screen.getByText("Frage eins?")).toBeDefined();
    expect(screen.getByText("Frage zwei?")).toBeDefined();
    expect(screen.getByText("Frage drei?")).toBeDefined();
  });

  it("shows answer when item is clicked", () => {
    render(<Accordion items={items} />);
    const trigger = screen.getByText("Frage eins?");
    fireEvent.click(trigger);
    expect(screen.getByText("Antwort eins.")).toBeDefined();
  });

  it("hides answer when item is clicked again", () => {
    render(<Accordion items={items} />);
    const trigger = screen.getByText("Frage eins?");
    fireEvent.click(trigger);
    fireEvent.click(trigger);
    expect(screen.queryByText("Antwort eins.")).toBeNull();
  });

  it("by default only one item is open at a time", () => {
    render(<Accordion items={items} />);
    fireEvent.click(screen.getByText("Frage eins?"));
    fireEvent.click(screen.getByText("Frage zwei?"));
    expect(screen.queryByText("Antwort eins.")).toBeNull();
    expect(screen.getByText("Antwort zwei.")).toBeDefined();
  });

  it("allows multiple items open when allowMultiple is true", () => {
    render(<Accordion items={items} allowMultiple />);
    fireEvent.click(screen.getByText("Frage eins?"));
    fireEvent.click(screen.getByText("Frage zwei?"));
    expect(screen.getByText("Antwort eins.")).toBeDefined();
    expect(screen.getByText("Antwort zwei.")).toBeDefined();
  });

  it("supports keyboard activation with Enter", () => {
    render(<Accordion items={items} />);
    const trigger = screen.getByText("Frage eins?");
    fireEvent.keyDown(trigger, { key: "Enter" });
    expect(screen.getByText("Antwort eins.")).toBeDefined();
  });

  it("supports keyboard activation with Space", () => {
    render(<Accordion items={items} />);
    const trigger = screen.getByText("Frage eins?");
    fireEvent.keyDown(trigger, { key: " " });
    expect(screen.getByText("Antwort eins.")).toBeDefined();
  });

  it("renders no items without error when items is empty", () => {
    render(<Accordion items={[]} />);
    expect(screen.queryByRole("button")).toBeNull();
  });
});
