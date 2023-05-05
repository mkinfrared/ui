import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MenuItem from "./MenuItem";

describe("<MenuItem />", () => {
  const onClick = jest.fn();
  const onFocus = jest.fn();

  const Component = (
    <>
      <MenuItem onClick={onClick} onFocus={onFocus} value={42} isSelected>
        Value 42
      </MenuItem>
      <MenuItem onClick={onClick} onFocus={onFocus} value={43}>
        Value 43
      </MenuItem>
    </>
  );

  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = () => null;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should be defined", () => {
    expect(MenuItem).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getAllByTestId } = render(Component);
    const elements = getAllByTestId("MenuItem");

    expect(elements.length).toBe(2);
  });

  it("should call 'onClick' from props on item click event", () => {
    const { getAllByTestId } = render(Component);
    const [element] = getAllByTestId("MenuItem");

    fireEvent.click(element);

    expect(onClick).toHaveBeenCalledTimes(1);

    expect(onClick).toHaveBeenCalledWith(42);
  });

  it("should call 'onClick' from props on item 'Enter' key down", async () => {
    const { getAllByTestId } = render(Component);
    const [element] = getAllByTestId("MenuItem");

    await userEvent.tab();

    fireEvent.keyDown(element, { key: "Enter" });

    expect(onClick).toHaveBeenCalledTimes(1);

    expect(onClick).toHaveBeenCalledWith(42);
  });

  it("should call 'onFocus' from props on item focus event", () => {
    const { getAllByTestId } = render(Component);
    const elements = getAllByTestId("MenuItem");
    const [element] = elements;

    fireEvent.focus(element);

    expect(onFocus).toHaveBeenCalledTimes(1);

    expect(onFocus).toHaveBeenCalledWith(42);
  });

  it("should move focus to next menu item on 'ArrowDown' key press", async () => {
    const { getAllByTestId } = render(Component);
    const elements = getAllByTestId("MenuItem");
    const [first, second] = elements;

    await userEvent.tab();

    expect(first).toHaveAttribute("tabindex", "0");

    expect(second).toHaveAttribute("tabindex", "-1");

    fireEvent.keyDown(first, { key: "ArrowDown" });

    expect(first).toHaveAttribute("tabindex", "-1");

    expect(second).toHaveAttribute("tabindex", "0");
  });

  it("should not move focus from the item on 'ArrowDown' key press if it's the last in list", async () => {
    const { getAllByTestId } = render(Component);
    const elements = getAllByTestId("MenuItem");
    const [first, second] = elements;

    await userEvent.tab();

    expect(first).toHaveAttribute("tabindex", "0");

    expect(second).toHaveAttribute("tabindex", "-1");

    fireEvent.keyDown(first, { key: "ArrowDown" });

    expect(first).toHaveAttribute("tabindex", "-1");

    expect(second).toHaveAttribute("tabindex", "0");

    fireEvent.keyDown(second, { key: "ArrowDown" });

    expect(first).toHaveAttribute("tabindex", "-1");

    expect(second).toHaveAttribute("tabindex", "0");
  });

  it("should move focus to previous menu item on 'ArrowUp' key press", async () => {
    const { getAllByTestId } = render(Component);
    const elements = getAllByTestId("MenuItem");
    const [first, second] = elements;

    await userEvent.tab();

    expect(first).toHaveAttribute("tabindex", "0");

    expect(second).toHaveAttribute("tabindex", "-1");

    fireEvent.keyDown(first, { key: "ArrowDown" });

    expect(first).toHaveAttribute("tabindex", "-1");

    expect(second).toHaveAttribute("tabindex", "0");

    fireEvent.keyDown(second, { key: "ArrowUp" });

    expect(first).toHaveAttribute("tabindex", "0");

    expect(second).toHaveAttribute("tabindex", "-1");
  });

  it("should not move focus from the item on 'ArrowUp' key press if it's the first in list", async () => {
    const { getAllByTestId } = render(Component);
    const elements = getAllByTestId("MenuItem");
    const [first, second] = elements;

    await userEvent.tab();

    expect(first).toHaveAttribute("tabindex", "0");

    expect(second).toHaveAttribute("tabindex", "-1");

    fireEvent.keyDown(first, { key: "ArrowUp" });

    expect(first).toHaveAttribute("tabindex", "0");

    expect(second).toHaveAttribute("tabindex", "-1");
  });
});
