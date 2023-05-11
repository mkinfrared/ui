import { fireEvent, render } from "@testing-library/react";

import TreeViewContext from "components/TreeView/TreeViewContext";

import TreeNode from "./TreeNode";

describe("<TreeNode />", () => {
  const label = "Marklar";
  const nodeId = "foobar";
  const onNodeClick = jest.fn();

  const Component = (
    <TreeViewContext.Provider value={{ onNodeClick }}>
      <TreeNode label={label} nodeId={nodeId}>
        <TreeNode label="Child 1" nodeId="2">
          <TreeNode label="Grand Child 1" nodeId="3" />
          <TreeNode label="Grand Child 2" nodeId="4" />
        </TreeNode>
      </TreeNode>
    </TreeViewContext.Provider>
  );

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

  it('should apply "aria-selected" attribute when the node is active', () => {
    const { getByRole } = render(
      <TreeViewContext.Provider value={{ isActive: () => true }}>
        <TreeNode nodeId={nodeId} label={label} />
      </TreeViewContext.Provider>,
    );

    expect(getByRole("treeitem")).toHaveAttribute("aria-selected", "true");
  });

  it('should apply "aria-expanded" attribute when the node has children and is expanded', () => {
    const { container } = render(
      <TreeViewContext.Provider value={{ isExpanded: () => true }}>
        <TreeNode nodeId={nodeId} label={label}>
          <TreeNode label="Child" nodeId="childNode" />
        </TreeNode>
      </TreeViewContext.Provider>,
    );

    const element = container.children[0];

    expect(element).toHaveAttribute("aria-expanded", "true");
  });

  it("should call 'onNodeClick' from context on click or 'Space' press", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("TreeNode");

    fireEvent.keyDown(element, { key: " " });

    expect(onNodeClick).toHaveBeenCalledTimes(1);

    expect(onNodeClick).toHaveBeenCalledWith(nodeId);
  });

  it("should not call 'onNodeClick' from context on any key press except for 'Space'", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("TreeNode");

    fireEvent.keyDown(element, { key: "S" });

    expect(onNodeClick).toHaveBeenCalledTimes(0);
  });
});
