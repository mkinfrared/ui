import { render } from "@testing-library/react";

import Input from "./Input";

describe("<Input />", () => {
  const Component = <Input />;

  it("should be defined", () => {
    expect(Input).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Input");

    expect(element).toBeDefined();
  });

  it("should set value on input if it's not undefined", () => {
    const { getByTestId } = render(<Input value="marklar" />);
    const element = getByTestId("Input");

    expect(element).toHaveValue("marklar");
  });
});
