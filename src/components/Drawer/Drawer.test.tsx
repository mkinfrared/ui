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

  it("should invoke 'onClose' when 'Escape' key is pressed", () => {
    render(Component);

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onClose).toHaveBeenCalled();

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should not invoke 'onClose' when any other button is pressed except for 'Escape' key", () => {
    render(Component);

    fireEvent.keyDown(document, { key: "A" });

    expect(onClose).not.toHaveBeenCalled();

    expect(onClose).toHaveBeenCalledTimes(0);
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

  it("should change z-index on transition events", () => {
    const { getByTestId } = render(<Drawer onClose={onClose} open={false} />);
    const drawer = getByTestId(testId);

    fireEvent.transitionStart(drawer);

    expect(drawer.style.zIndex).toBe("1");

    fireEvent.transitionEnd(drawer);

    expect(drawer.style.zIndex).toBe("-1");
  });

  it("should not change z-index on transition events if 'open' is true", () => {
    const { getByTestId } = render(<Drawer onClose={onClose} open />);
    const drawer = getByTestId(testId);

    fireEvent.transitionStart(drawer);

    expect(drawer.style.zIndex).toBe("1");

    fireEvent.transitionEnd(drawer);

    expect(drawer.style.zIndex).toBe("1");
  });
});
