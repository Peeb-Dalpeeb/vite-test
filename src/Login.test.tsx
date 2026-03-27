import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Login Component", () => {
  it("renders the login heading", () => {
    render(<Login />);
    const heading = screen.getByRole("heading", { name: /Login/i });
    expect(heading).toBeInTheDocument();
  });

  it("shows 'Please enter email and password' when fields are empty", async () => {
    const user = userEvent.setup();
    render(<Login />);

    const loginButton = screen.getByRole("button", { name: /Login/i });
    await user.click(loginButton);

    expect(
      screen.getByText("Please enter email and password"),
    ).toBeInTheDocument();
  });

  it("shows 'Login successful' with correct credentials", async () => {
    const user = userEvent.setup();
    render(<Login />);

    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const loginButton = screen.getByRole("button", { name: /Login/i });

    await user.type(emailInput, "scott@email.com");
    await user.type(passwordInput, "password");
    await user.click(loginButton);

    expect(screen.getByText("Login successful")).toBeInTheDocument();
  });

  it("shows 'Login failed' with incorrect credentials", async () => {
    const user = userEvent.setup();
    render(<Login />);

    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const loginButton = screen.getByRole("button", { name: /Login/i });

    await user.type(emailInput, "wrong@example.com");
    await user.type(passwordInput, "wrongpassword");
    await user.click(loginButton);

    expect(screen.getByText("Login failed")).toBeInTheDocument();
  });
});
