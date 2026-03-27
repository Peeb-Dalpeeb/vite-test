// src/components/Greeting/Greeting.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Greeting } from "./Greeting";

describe("Greeting Component", () => {
  // Test 1: The Default Scenario
  it("renders the user name and default role securely", () => {
    render(<Greeting />);

    const heading = screen.getByRole("heading", { name: /welcome, john!/i });
    const roleText = screen.getByText(/your access level is: employee/i);

    expect(heading).toBeInTheDocument();
    expect(roleText).toBeInTheDocument();
  });

  // Test 2: The HR Scenario (This is the "second one" I mentioned!)
  it("renders the HR role when explicitly passed", () => {
    // We explicitly pass the HR role here
    render(<Greeting name="John" role="HR" />);

    // We verify the screen correctly updates to show the HR level
    const roleText = screen.getByText(/your access level is: hr/i);
    expect(roleText).toBeInTheDocument();
  });
});
