import { render, screen } from "@testing-library/react";
import UcList from "./Components/List/List";

test("renders learn react link", () => {
  render(<UcList data={[]} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
