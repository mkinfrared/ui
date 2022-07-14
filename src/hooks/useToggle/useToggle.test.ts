import { renderHook } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";

import { useToggle } from "./useToggle";

describe("useToggle", () => {
  const hook = useToggle;

  it("should be defined", () => {
    expect(hook).toBeDefined();
  });

  it("should return an array of boolean and a function", () => {
    const { result } = renderHook(() => hook());
    const { current } = result;

    expect(current).toHaveLength(2);

    const [value, toggle] = current;

    expect(value).toBe(false);

    expect(typeof toggle).toBe("function");
  });

  it("should toggle the value on callback invocation", () => {
    const { result } = renderHook(() => hook());

    expect(result.current[0]).toBe(false);

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(true);
  });
});
