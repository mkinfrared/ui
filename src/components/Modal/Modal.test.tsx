import { fireEvent, render } from "@testing-library/react";

import Modal from "./Modal";

describe("<Modal />", () => {
  const onClose = jest.fn();
  const Component = <Modal onClose={onClose} />;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should be defined", () => {
    expect(Modal).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Modal");

    expect(element).toBeDefined();
  });

  it("should call 'onClose' from props on 'Escape' key press", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Modal");

    fireEvent.keyDown(element!, { key: "Escape" });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not invoke 'onClose' when any other button is pressed except for 'Escape' key", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Modal");

    fireEvent.keyDown(element!, { key: "A" });

    expect(onClose).toHaveBeenCalledTimes(0);
  });

  it("should call 'onClose' from props on close icon click", () => {
    const { getByTestId } = render(Component);
    const closeButton = getByTestId("IconButton");

    fireEvent.click(closeButton!, { key: "Escape" });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should call 'onClose' from props on outside click", () => {
    const { getByTestId } = render(Component);
    const closeButton = getByTestId("IconButton");

    fireEvent.click(closeButton!, { key: "Escape" });

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
