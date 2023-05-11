import { fireEvent, render } from "@testing-library/react";

import TextArea from "./TextArea";

describe("<TextArea />", () => {
  const onChange = jest.fn();
  const Component = <TextArea onChange={onChange} />;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should be defined", () => {
    expect(TextArea).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("TextArea");

    expect(element).toBeDefined();
  });

  it("should render label if it's truthy", () => {
    const { getByTestId } = render(<TextArea label="Marklar" />);
    const element = getByTestId("TextArea");
    const label = element.querySelector(".label");

    expect(label).not.toBeNull();
  });

  it("should change the row attribute on change event", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("TextArea");
    const textArea = element.querySelector(".textArea") as HTMLTextAreaElement;
    const mockGetComputedStyle = jest.spyOn(window, "getComputedStyle");
    const mockScrollHeight = jest.spyOn(textArea, "scrollHeight", "get");

    mockGetComputedStyle.mockImplementation(() => ({ lineHeight: 100 } as any));

    mockScrollHeight.mockImplementation(() => 1000);

    fireEvent.change(textArea, { target: { value: "S" } });

    expect(textArea.rows).toBe(10);
  });

  it("should call 'onChange' from props on change event", () => {
    const { getByTestId } = render(
      <TextArea onChange={onChange} autogrow={false} />,
    );

    const element = getByTestId("TextArea");
    const textArea = element.querySelector(".textArea") as HTMLTextAreaElement;
    const mockGetComputedStyle = jest.spyOn(window, "getComputedStyle");

    mockGetComputedStyle.mockImplementation(() => ({ lineHeight: 100 } as any));

    fireEvent.change(textArea, { target: { value: "S" } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
