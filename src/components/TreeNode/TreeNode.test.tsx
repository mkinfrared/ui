import { render } from "@testing-library/react";

import { TreeNode } from "./TreeNode";

describe("<TreeNode />", () => {
  const label = "Marklar";
  const nodeId = "foobar";
  const Component = <TreeNode nodeId={nodeId} label={label} />;

  it("should be defined", () => {
    expect(TreeNode).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("TreeNode");

    expect(element).toBeDefined();
  });
});
