import { fireEvent, render } from "@testing-library/react";

import Drawer from "./Drawer";

describe("<Drawer />", () => {
  const testId = "Drawer";
  const onClose = jest.fn();
  const open = true;
  const Component = <Drawer onClose={onClose} open={open} />;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should be defined", () => {
    expect(Drawer).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Drawer");

    expect(element).toBeDefined();
  });

  it("should call 'onClose' when 'Escape' key is pressed", () => {
    render(Component);

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onClose).toHaveBeenCalled();

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not have z-index when 'open' is true", () => {
    const { getByTestId } = render(Component);
    const drawer = getByTestId(testId);
    const { zIndex } = getComputedStyle(drawer);

    expect(zIndex).toBe("");
  });

  it("should have z-index equals to -1 when 'open' is true", () => {
    const { getByTestId } = render(<Drawer onClose={onClose} open={false} />);
    const drawer = getByTestId(testId);
    const { zIndex } = getComputedStyle(drawer);

    expect(zIndex).toBe("-1");
  });
});
