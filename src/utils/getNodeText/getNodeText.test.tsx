import { getNodeText } from "./getNodeText";

describe("getNodeText", () => {
  it("should be defined", () => {
    expect(getNodeText).toBeDefined();
  });

  it("should return node if it's string or number", () => {
    const result1 = getNodeText("Marklar");
    const result2 = getNodeText(42);

    expect(result1).toBe("Marklar");

    expect(result2).toBe(42);
  });

  it("should return a concatenated string if the node is an array", () => {
    const result = getNodeText(["Marklar", "foo", "bar", 42]);

    expect(result).toBe("Marklarfoobar42");
  });

  it("should return node values of children", () => {
    const result = getNodeText(
      <div>
        <div>
          <p>Foo</p>
          <div>
            <p>Bar</p>
          </div>
        </div>
      </div>,
    );

    expect(result).toBe("FooBar");
  });
});
