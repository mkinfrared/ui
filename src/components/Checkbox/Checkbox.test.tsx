import { render } from "@testing-library/react";

import Checkbox from "./Checkbox";

describe("<Checkbox />", () => {
  const Component = <Checkbox />;

  it("should be defined", () => {
    expect(Checkbox).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Checkbox");

    expect(element).toBeDefined();
  });

  it("should render a Text component when 'label' is truthy", () => {
    const label = "marklar";
    const { getByTestId } = render(<Checkbox label={label} />);
    const labelText = getByTestId("Text");

    expect(labelText).toBeDefined();
  });

  it("should add a readOnly class when 'readOnly' is true", () => {
    const readOnly = true;
    const { getByTestId } = render(<Checkbox readOnly={readOnly} />);
    const element = getByTestId("Checkbox");

    expect(element.classList).toContain("readOnly");
  });
});
