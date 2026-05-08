import { render } from "@testing-library/react";
import CreditsPage from "../credits/page";

describe("CreditsPage", () => {
  it("renders Credits heading", () => {
    const { getByRole } = render(<CreditsPage />);
    const heading = getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Credits");
  });

  it("includes Game Icons attribution", () => {
    const { getByText } = render(<CreditsPage />);
    expect(getByText(/game-icons/i)).toBeInTheDocument();
  });

  it("includes CC BY 3.0 license text", () => {
    const { getByText } = render(<CreditsPage />);
    expect(getByText(/CC BY 3.0/)).toBeInTheDocument();
  });

  it("includes Cinzel font attribution", () => {
    const { getByText } = render(<CreditsPage />);
    expect(getByText(/Cinzel/)).toBeInTheDocument();
  });

  it("renders links to original sources", () => {
    const { getAllByRole } = render(<CreditsPage />);
    const links = getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  it("matches snapshot", () => {
    const { container } = render(<CreditsPage />);
    expect(container).toMatchSnapshot();
  });
});
