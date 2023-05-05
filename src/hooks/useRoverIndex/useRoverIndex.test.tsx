/* eslint-disable react/no-array-index-key,react/button-has-type */
import {
  act,
  fireEvent,
  render,
  renderHook,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

import { useRoverIndex } from "./useRoverIndex";

const ComponentMock = () => {
  const [count, setCount] = useState(5);
  const refCallback = useRoverIndex(".listItem");

  const list = new Array(count).fill(undefined).map((_, index) => (
    <li key={index} className="listItem">
      Item {index}
    </li>
  ));

  return (
    <div>
      <ul ref={refCallback} data-testid="list">
        {list}
      </ul>
      <button onClick={() => setCount(10)} data-testid="add">
        Add
      </button>
      <button onClick={() => setCount(5)} data-testid="remove">
        Remove
      </button>
    </div>
  );
};

describe("useRoverIndex", () => {
  const hook = useRoverIndex;

  it("should be defined", () => {
    expect(hook).toBeDefined();
  });

  it("should return a function", () => {
    const { result } = renderHook(() => hook());

    expect(typeof result.current).toBe("function");
  });

  it("should set tabindex to 0 on the first child element", () => {
    const { getByTestId } = render(<ComponentMock />);
    const ul = getByTestId("list");
    const { firstChild } = ul;

    expect(firstChild).toHaveAttribute("tabindex", "0");
  });

  it("should set tabindex to 0 on the next child when 'ArrowRight' key is pressed", async () => {
    const key = "ArrowRight";
    const { getByTestId } = render(<ComponentMock />);
    const ul = getByTestId("list");
    const [first, second, third, fourth] = ul.children;

    expect(first).toHaveAttribute("tabindex", "0");

    expect(second).toHaveAttribute("tabindex", "-1");

    // focus first element before handling the key events
    await userEvent.tab();

    fireEvent.keyDown(ul, {
      key,
    });

    expect(first).toHaveAttribute("tabindex", "-1");

    expect(second).toHaveAttribute("tabindex", "0");

    fireEvent.keyDown(ul, {
      key,
    });

    expect(second).toHaveAttribute("tabindex", "-1");

    expect(third).toHaveAttribute("tabindex", "0");

    fireEvent.keyDown(ul, {
      key,
    });

    expect(third).toHaveAttribute("tabindex", "-1");

    expect(fourth).toHaveAttribute("tabindex", "0");
  });

  it("should set tabindex to 0 on the next child when 'ArrowDown' key is pressed", async () => {
    const key = "ArrowDown";
    const { getByTestId } = render(<ComponentMock />);
    const ul = getByTestId("list");
    const [first, second, third, fourth] = ul.children;

    expect(first).toHaveAttribute("tabindex", "0");

    expect(second).toHaveAttribute("tabindex", "-1");

    // focus first element before handling the key events
    await userEvent.tab();

    fireEvent.keyDown(ul, {
      key,
    });

    expect(first).toHaveAttribute("tabindex", "-1");

    expect(second).toHaveAttribute("tabindex", "0");

    fireEvent.keyDown(ul, {
      key,
    });

    expect(second).toHaveAttribute("tabindex", "-1");

    expect(third).toHaveAttribute("tabindex", "0");

    fireEvent.keyDown(ul, {
      key,
    });

    expect(third).toHaveAttribute("tabindex", "-1");

    expect(fourth).toHaveAttribute("tabindex", "0");
  });

  it("should set tabindex to 0 on the previous child when 'ArrowLeft' key is pressed", async () => {
    const key = "ArrowLeft";
    const { getByTestId } = render(<ComponentMock />);
    const ul = getByTestId("list");
    const [first, second, third, fourth] = ul.children;

    expect(first).toHaveAttribute("tabindex", "0");

    expect(second).toHaveAttribute("tabindex", "-1");

    // focus first element before handling the key events
    await userEvent.tab();

    fireEvent.keyDown(ul, {
      key: "ArrowRight",
    });

    fireEvent.keyDown(ul, {
      key: "ArrowRight",
    });

    fireEvent.keyDown(ul, {
      key: "ArrowRight",
    });

    expect(fourth).toHaveAttribute("tabindex", "0");

    fireEvent.keyDown(ul, {
      key,
    });

    expect(third).toHaveAttribute("tabindex", "0");

    expect(fourth).toHaveAttribute("tabindex", "-1");

    fireEvent.keyDown(ul, {
      key,
    });

    expect(second).toHaveAttribute("tabindex", "0");

    expect(third).toHaveAttribute("tabindex", "-1");
  });

  it("should set tabindex to 0 on the previous child when 'ArrowUp' key is pressed", async () => {
    const key = "ArrowUp";
    const { getByTestId } = render(<ComponentMock />);
    const ul = getByTestId("list");
    const [first, second, third, fourth] = ul.children;

    expect(first).toHaveAttribute("tabindex", "0");

    expect(second).toHaveAttribute("tabindex", "-1");

    // focus first element before handling the key events
    await userEvent.tab();

    fireEvent.keyDown(ul, {
      key: "ArrowRight",
    });

    fireEvent.keyDown(ul, {
      key: "ArrowRight",
    });

    fireEvent.keyDown(ul, {
      key: "ArrowRight",
    });

    expect(fourth).toHaveAttribute("tabindex", "0");

    fireEvent.keyDown(ul, {
      key,
    });

    expect(third).toHaveAttribute("tabindex", "0");

    expect(fourth).toHaveAttribute("tabindex", "-1");

    fireEvent.keyDown(ul, {
      key,
    });

    expect(second).toHaveAttribute("tabindex", "0");

    expect(third).toHaveAttribute("tabindex", "-1");
  });

  it("should add tabindex to new created elements", async () => {
    const { getByTestId } = render(<ComponentMock />);
    const ul = getByTestId("list");
    const button = getByTestId("add");

    for (const child of ul.children) {
      expect(child).toHaveAttribute("tabindex");
    }

    act(() => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      for (const child of ul.children) {
        expect(child).toHaveAttribute("tabindex");
      }
    });
  });

  it("should set tabindex to 0 on the first available previous element of the removed node", async () => {
    const key = "ArrowRight";
    const { getByTestId } = render(<ComponentMock />);
    const ul = getByTestId("list");
    const add = getByTestId("add");
    const remove = getByTestId("remove");

    act(() => {
      fireEvent.click(add);
    });

    await waitFor(async () => {
      for (const child of ul.children) {
        expect(child).toHaveAttribute("tabindex");
      }

      // focus first element before handling the key events
      await userEvent.tab();

      for (let i = 0; i < ul.children.length; i++) {
        fireEvent.keyDown(ul, { key });
      }

      expect(ul.lastChild).toHaveAttribute("tabindex", "0");

      act(() => {
        fireEvent.click(remove);
      });

      expect(ul.children[4]).toHaveAttribute("tabindex", "0");
    });
  });
});
