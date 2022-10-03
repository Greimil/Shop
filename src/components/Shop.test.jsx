import { screen, render, cleanup } from "@testing-library/react";
import { describe, it, afterEach, beforeEach, expect } from "vitest";
import { Shop } from "./Shop";

import { BrowserRouter } from "react-router-dom";

describe("Shop component", () => {
  afterEach(cleanup);
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>  
    );
  });

  it("Should have a heading 2 that explain category ", () => {
    screen.getAllByRole("heading");
  });

  it("should have a paragraph that explain what can clients found in that category", () => {
    screen.getByText(
      /En esta sección podrás encontrar todo lo relacionado al apasionante mundo de las gráficas, desde las mas económicas hasta las mas top/i
    );
  });

  it("should have 5 buttons", () => {
    expect(screen.getAllByRole("button").length).toBe(5);
  });
});
