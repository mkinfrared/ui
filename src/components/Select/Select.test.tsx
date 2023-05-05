import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Select from "./Select";

describe("<Select />", () => {
  let active: number | undefined = 44;

  const options = [42, 43, 44, 45];
  const getActiveOption = (value: number) => value === active;
  const getOptionLabel = (value?: number) => `marklar ${value}`;
  const onChange = jest.fn();

  const Component = (
    <Select
      getActiveOption={getActiveOption}
      getOptionLabel={getOptionLabel}
      onChange={onChange}
      options={options}
    />
  );

  afterEach(() => {
    jest.resetAllMocks();

    active = 44;
  });

  it("should be defined", () => {
    expect(Select).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Select");

    expect(element).toBeDefined();
  });

  it("should open listbox on 'ArrowDown' key press", async () => {
    const { queryByTestId, getByRole } = render(Component);
    const combobox = getByRole("combobox");

    let listbox = queryByTestId("Menu");

    expect(listbox).toBe(null);

    await userEvent.tab();

    fireEvent.keyDown(combobox, { key: "ArrowDown" });

    listbox = queryByTestId("Menu");

    expect(listbox).not.toBe(null);
  });

  it("should focus the first element on the list if none is active on 'ArrowDown' key press", async () => {
    active = undefined;

    const { queryByTestId, getByRole, getByText } = render(Component);
    const combobox = getByRole("combobox");

    let listbox = queryByTestId("Menu");

    expect(listbox).toBe(null);

    await userEvent.tab();

    fireEvent.keyDown(combobox, { key: "ArrowDown" });

    listbox = queryByTestId("Menu");

    expect(listbox).not.toBe(null);

    fireEvent.keyDown(combobox, { key: "ArrowDown" });

    const menuItem = getByText("marklar 42");

    expect(menuItem).toHaveFocus();
  });

  it("should focus the active element on 'ArrowDown' key press", async () => {
    const { queryByTestId, getByRole, getByText } = render(Component);
    const combobox = getByRole("combobox");

    let listbox = queryByTestId("Menu");

    expect(listbox).toBe(null);

    await userEvent.tab();

    fireEvent.keyDown(combobox, { key: "ArrowDown" });

    listbox = queryByTestId("Menu");

    expect(listbox).not.toBe(null);

    fireEvent.keyDown(combobox, { key: "ArrowDown" });

    const menuItem = getByText("marklar 44");

    expect(menuItem).toHaveFocus();
  });

  it("should focus the combobox on 'Enter' press if the listbox is opened", async () => {
    const { queryByTestId, getByRole, getByText } = render(Component);
    const combobox = getByRole("combobox");

    let listbox = queryByTestId("Menu");

    expect(listbox).toBe(null);

    await userEvent.tab();

    fireEvent.keyDown(combobox, { key: "ArrowDown" });

    listbox = queryByTestId("Menu");

    expect(listbox).not.toBe(null);

    fireEvent.keyDown(combobox, { key: "ArrowDown" });

    const menuItem = getByText("marklar 44");

    expect(menuItem).toHaveFocus();

    fireEvent.keyDown(combobox, { key: "Enter" });

    expect(combobox).toHaveFocus();
  });

  it("should focus the input on 'ArrowRight' press", async () => {
    const { queryByTestId, getByRole, getByText } = render(Component);
    const combobox = getByRole("combobox");
    const input = combobox.querySelector("input");

    let listbox = queryByTestId("Menu");

    expect(listbox).toBe(null);

    await userEvent.tab();

    fireEvent.keyDown(combobox, { key: "ArrowDown" });

    listbox = queryByTestId("Menu");

    expect(listbox).not.toBe(null);

    fireEvent.keyDown(combobox, { key: "ArrowDown" });

    const menuItem = getByText("marklar 44");

    expect(menuItem).toHaveFocus();

    fireEvent.keyDown(combobox, { key: "ArrowRight" });

    expect(input).toHaveFocus();
  });

  it("should call 'onChange' from props on MenuItem click and close listbox", async () => {
    const { queryByTestId, getByRole, getByText } = render(Component);
    const combobox = getByRole("combobox");

    let listbox = queryByTestId("Menu");

    expect(listbox).toBe(null);

    await userEvent.tab();

    fireEvent.keyDown(combobox, { key: "ArrowDown" });

    listbox = queryByTestId("Menu");

    expect(listbox).not.toBe(null);

    const menuItem = getByText("marklar 43");

    fireEvent.click(menuItem);

    listbox = queryByTestId("Menu");

    expect(onChange).toHaveBeenCalledTimes(1);

    expect(onChange).toHaveBeenCalledWith(43);

    expect(listbox).toBe(null);
  });

  it("should close listbox on 'Escape' press", async () => {
    const { queryByTestId, getByRole } = render(Component);
    const combobox = getByRole("combobox");

    let listbox = queryByTestId("Menu");

    expect(listbox).toBe(null);

    await userEvent.tab();

    fireEvent.keyDown(combobox, { key: "ArrowDown" });

    listbox = queryByTestId("Menu");

    expect(listbox).not.toBe(null);

    fireEvent.keyDown(combobox, { key: "Escape" });

    listbox = queryByTestId("Menu");

    expect(listbox).toBe(null);
  });
});
