import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("should have hello world as text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //... nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("should have Not clicked the button", () => {
    render(<Greeting />);
    const defaultElement = screen.getByText("It is good to see you!", {
      exact: true,
    });
    expect(defaultElement).not.toBeFalsy();
    expect(defaultElement).toBeInTheDocument();
  });

  test("should have changed! if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const defaultElement = screen.getByText("Changed", { exact: false });
    expect(defaultElement).toBeInTheDocument();
  });

  test("should have been removed", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const defaultElement = screen.queryByText("It is good to see you!", {
      exact: true,
    });
    expect(defaultElement).toBeFalsy();
    expect(defaultElement).toBeNull();
  });
});
