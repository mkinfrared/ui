import { render } from "@testing-library/react";

import TextField from "./TextField";

describe("<TextField />", () => {
  const Component = <TextField />;

  it("should be defined", () => {
    expect(TextField).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("TextField");

    expect(element).not.toBeNull();
  });

  it("should not have Heading when 'label' is not defined", () => {
    const { queryByTestId } = render(Component);
    const heading = queryByTestId("Heading");

    expect(heading).not.toBeInTheDocument();
  });

  it("should render Heading when 'label' is a truthy string", () => {
    const label = "Marklar";
    const { queryByTestId } = render(<TextField label={label} />);
    const heading = queryByTestId("Heading");

    expect(heading).toBeInTheDocument();

    expect(heading).toHaveTextContent(label);
  });

  it("should render prefix when 'prefix' is a truthy value", () => {
    const prefix = <div>foo</div>;
    const { getByTestId } = render(<TextField prefix={prefix} />);
    const element = getByTestId("TextField");
    const prefixElement = element.querySelector(".prefix");

    expect(prefixElement).not.toBeNull();
  });

  it("should render suffix when 'suffix' is a truthy value", () => {
    const suffix = <div>foo</div>;
    const { getByTestId } = render(<TextField suffix={suffix} />);
    const element = getByTestId("TextField");
    const suffixElement = element.querySelector(".suffix");

    expect(suffixElement).not.toBeNull();
  });
});
