import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "../../../../../src/app/components/NavBar/index";

describe("NavBar", () => {
  test("renders NavBar component", () => {
    // Renderiza o componente
    const { getByText } = render(<NavBar />);

    // Verifica se o texto "MKS" está presente
    expect(getByText("MKS")).toBeInTheDocument();
  });
});
