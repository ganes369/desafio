import { render, screen } from "@testing-library/react";
import NavBar from "../../../../../src/app/components/NavBar/index";
import React from "react";

describe("NavBar", () => {
  it("renders the component", () => {
    render(<NavBar />);

    // Use screen.getByText and other queries to assert the presence of elements
    expect(screen.getByText("MKS")).toBeInTheDocument();
    expect(screen.getByText("Sistemas")).toBeInTheDocument();
    expect(screen.getByTestId("cart-icon")).toBeInTheDocument();
    expect(screen.getByTestId("cart-quantity").textContent).toBe("2");
  });

  it("toggles the sidebar when clicking the cart icon", () => {
    render(<NavBar />);

    // Initial state
    expect(
      screen.queryByText("Conteúdo do menu lateral aqui")
    ).not.toBeInTheDocument();

    // Click the cart icon
    fireEvent.click(screen.getByTestId("cart-icon"));

    // Sidebar should be visible
    expect(
      screen.getByText("Conteúdo do menu lateral aqui")
    ).toBeInTheDocument();

    // Click again to close the sidebar
    fireEvent.click(screen.getByTestId("cart-icon"));

    // Sidebar should be hidden
    expect(
      screen.queryByText("Conteúdo do menu lateral aqui")
    ).not.toBeInTheDocument();
  });

  // Add more test cases as needed
});
