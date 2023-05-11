import { fireEvent, render } from "@testing-library/react";
import { useRef } from "react";

import { useOutsideClick } from "./useOutsideClick";

const Example = ({ onClick }: any) => {
  const ref = useRef<HTMLSpanElement>(null);

  useOutsideClick([ref], onClick);

  return (
    <div data-testid="Example">
      <p>
        Lorem ipsum dolor sit <span ref={ref}>amet</span>.
      </p>
    </div>
  );
};

describe("useOutsideClick", () => {
  const onClick = jest.fn();
  const hook = useOutsideClick;

  it("should be defined", () => {
    expect(hook).toBeDefined();
  });

  it("should call 'onClick' from props on outside click", () => {
    const { getByTestId } = render(<Example onClick={onClick} />);
    const example = getByTestId("Example");
    const paragraph = example.querySelector("p");

    fireEvent.click(paragraph!);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
