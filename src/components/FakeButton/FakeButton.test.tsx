import { fireEvent, render } from "@testing-library/react";

import FakeButton from "./FakeButton";

describe("<FakeButton />", () => {
  const autofocus = true;
  const onClick = jest.fn();
  const Component = <FakeButton autoFocus={autofocus} onClick={onClick} />;

  it("should be defined", () => {
    expect(FakeButton).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should call onClick passed from props on 'Enter' or space key press", () => {
    const { getByTestId } = render(Component);
    const key = "Enter";
    const fakeButton = getByTestId("FakeButton");

    fireEvent.keyDown(fakeButton, {
      key,
      target: fakeButton,
    });

    expect(onClick).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(fakeButton, {
      key: " ",
      target: fakeButton,
    });

    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("should not call onClick passed from props if pressed button is not 'Enter'", () => {
    const { getByTestId } = render(Component);
    const enterCode = 69;
    const fakeButton = getByTestId("FakeButton");

    fireEvent.keyPress(fakeButton, {
      charCode: enterCode,
      target: fakeButton,
    });

    expect(onClick).not.toHaveBeenCalled();
  });

  it("should set a data-testid passed from props", () => {
    const { getByTestId } = render(<FakeButton data-testid="Foobar" />);
    const fakeButton = getByTestId("Foobar");

    expect(fakeButton).not.toBeNull();
  });
});
