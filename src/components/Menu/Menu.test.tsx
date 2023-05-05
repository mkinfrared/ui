import { render } from "@testing-library/react";

import Menu from "./Menu";

describe("<Menu />", () => {
  const comboboxRef = { current: null };
  const id = "marklar";
  const onClose = jest.fn();

  const Component = (
    <Menu comboboxRef={comboboxRef} id={id} onClose={onClose}>
      <li>Item-1</li>
      <li>Item-2</li>
      <li>Item-3</li>
      <li>Item-4</li>
      <li>Item-5</li>
    </Menu>
  );

  it("should be defined", () => {
    expect(Menu).toBeDefined();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Menu");

    expect(element).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Menu");

    expect(element).toMatchSnapshot();
  });
});
