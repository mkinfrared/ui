import { fireEvent, render } from "@testing-library/react";

import Chip from "./Chip";

describe("<Chip />", () => {
  const label = "marklar";
  const onClick = jest.fn();
  const onDelete = jest.fn();

  const Component = (
    <Chip label={label} onClick={onClick} onDelete={onDelete} />
  );

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should be defined", () => {
    expect(Chip).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Chip");

    expect(element).toBeDefined();
  });

  it("should render a delete button when 'onDelete' prop is passed", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Chip");
    const cancelButton = element.querySelector(".cancel");

    expect(cancelButton).not.toBeNull();
  });

  it("should call 'onDelete' from props on cancel button click", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Chip");
    const cancelButton = element.querySelector(".cancel");

    fireEvent.click(cancelButton!);

    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
