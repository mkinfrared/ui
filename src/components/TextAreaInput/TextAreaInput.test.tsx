import { render } from "@testing-library/react";

import TextAreaInput from "./TextAreaInput";

describe("<TextAreaInput />", () => {
  const Component = <TextAreaInput />;

  it("should be defined", () => {
    expect(TextAreaInput).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("TextAreaInput");

    expect(element).toBeDefined();
  });

  it("should set value on input if it's not undefined", () => {
    const { getByTestId } = render(<TextAreaInput value="marklar" />);
    const element = getByTestId("TextAreaInput");

    expect(element).toHaveValue("marklar");
  });
});
