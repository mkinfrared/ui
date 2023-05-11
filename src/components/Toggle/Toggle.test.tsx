import { render } from "@testing-library/react";

import Toggle from "./Toggle";

describe("<Toggle />", () => {
  const Component = <Toggle />;

  it("should be defined", () => {
    expect(Toggle).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should render a Text component when label is truthy", () => {
    const label = "marklar";
    const { getByTestId } = render(<Toggle label={label} />);
    const labelText = getByTestId("Text");

    expect(labelText).toBeDefined();
  });

  it("should add a readOnly class to label when 'readOnly' is true", () => {
    const { getByTestId } = render(<Toggle readOnly />);
    const label = getByTestId("Toggle");

    expect(label.classList).toContain("readOnly");
  });
});
