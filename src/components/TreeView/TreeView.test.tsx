import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TreeNode from "components/TreeNode";

import TreeView from "./TreeView";

const expandAllNodes = (rootNode: HTMLElement) => {
  while (true) {
    const nodes = rootNode.querySelectorAll("[aria-expanded=false]");

    if (!nodes.length) {
      return;
    }

    for (const node of nodes) {
      const button = node.querySelector("[role=button]") as HTMLButtonElement;

      fireEvent.click(button);
    }
  }
};

const TreeNodesTemplate = () => (
  <>
    <TreeNode label="Root 1" nodeId="1">
      <TreeNode label="Child 1" nodeId="2">
        <TreeNode label="Grand Child 1" nodeId="3" />
        <TreeNode label="Grand Child 2" nodeId="4" />
      </TreeNode>
    </TreeNode>
    <TreeNode label="Root 2" nodeId="5">
      <TreeNode label="Child 1" nodeId="6">
        <TreeNode label="Grand Child 1" nodeId="7" />
        <TreeNode label="Grand Child 2" nodeId="8" />
      </TreeNode>
      <TreeNode label="Child 2" nodeId="9">
        <TreeNode label="Grand Child 1" nodeId="10" />
        <TreeNode label="Grand Child 2" nodeId="11" />
      </TreeNode>
      <TreeNode label="Child 3" nodeId="12">
        <TreeNode label="Grand Child 1" nodeId="13" />
        <TreeNode label="Grand Child 2" nodeId="14" />
        <TreeNode label="Grand Child 2" nodeId="15" />
        <TreeNode label="Grand Child 2" nodeId="16" />
        <TreeNode label="Grand Child 2" nodeId="17" />
      </TreeNode>
      <TreeNode label="Child 4" nodeId="18">
        <TreeNode label="Grand Child 1" nodeId="19" />
        <TreeNode label="Grand Child 2" nodeId="20" />
        <TreeNode label="Grand Child 2" nodeId="21" />
        <TreeNode label="Grand Child 2" nodeId="22" />
        <TreeNode label="Grand Child 2" nodeId="23" />
      </TreeNode>
      <TreeNode label="Child 3" nodeId="24">
        <TreeNode label="Grand Child 1" nodeId="25" />
        <TreeNode label="Grand Child 2" nodeId="26" />
        <TreeNode label="Grand Child 2" nodeId="27" />
        <TreeNode label="Grand Child 2" nodeId="28" />
        <TreeNode label="Grand Child 2" nodeId="29" />
      </TreeNode>
      <TreeNode label="Child 3" nodeId="30">
        <TreeNode label="Grand Child 1" nodeId="31" />
        <TreeNode label="Grand Child 2" nodeId="32" />
        <TreeNode label="Grand Child 2" nodeId="33" />
        <TreeNode label="Grand Child 2" nodeId="34" />
        <TreeNode label="Grand Child 2" nodeId="35">
          <TreeNode label="Grand Grand Child 2" nodeId="36" />
          <TreeNode label="Grand Grand Child 2" nodeId="37" />
          <TreeNode label="Grand Grand Child 2" nodeId="38" />
          <TreeNode label="Grand Grand Child 2" nodeId="39" />
        </TreeNode>
      </TreeNode>
      <TreeNode label="Child 3" nodeId="40">
        <TreeNode label="Grand Child 1" nodeId="41" />
        <TreeNode label="Grand Child 2" nodeId="42" />
        <TreeNode label="Grand Child 2" nodeId="43" />
        <TreeNode label="Grand Child 2" nodeId="44" />
        <TreeNode label="Grand Child 2" nodeId="45" />
      </TreeNode>
      <TreeNode label="Child 3" nodeId="46">
        <TreeNode label="Grand Child 1" nodeId="47" />
        <TreeNode label="Grand Child 2" nodeId="48" />
        <TreeNode label="Grand Child 2" nodeId="49" />
        <TreeNode label="Grand Child 2" nodeId="50" />
        <TreeNode label="Grand Child 2" nodeId="51" />
      </TreeNode>
    </TreeNode>
  </>
);

describe("<TreeView />", () => {
  const onNodeClick = jest.fn();
  const Component = <TreeView />;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should be defined", () => {
    expect(TreeView).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should render an 'UncontrolledTreeView' when 'expanded' prop is not defined", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("UncontrolledTreeView");

    expect(element).toBeDefined();
  });

  it("should render a 'ControlledTreeView' when 'expanded' prop is defined", () => {
    const activeNodeId = "5";
    const expanded = new Set(["1", "2", "5", "12"]);

    const { getByTestId } = render(
      <TreeView
        expanded={expanded}
        activeNodeId={activeNodeId}
        onNodeClick={onNodeClick}
      />,
    );

    const element = getByTestId("ControlledTreeView");

    expect(element).toBeDefined();
  });

  describe("<ControlledTree />", () => {
    it("should call 'onNodeClick' from props on tree node click", () => {
      const activeNodeId = "5";
      const expanded = new Set(["1", "2", "5", "12"]);

      const { getByTestId } = render(
        <TreeView
          expanded={expanded}
          activeNodeId={activeNodeId}
          onNodeClick={onNodeClick}
        >
          <TreeNodesTemplate />
        </TreeView>,
      );

      const element = getByTestId("ControlledTreeView");
      const nodeLabel = element.children[0].querySelector("h4");

      fireEvent.click(nodeLabel!);

      expect(onNodeClick).toHaveBeenCalledTimes(1);

      expect(onNodeClick).toHaveBeenCalledWith("1");
    });
  });

  describe("<UncontrolledTree />", () => {
    it("should call 'onNodeClick' from props on tree node click and toggle 'aria-expanded' if the node is expandable", () => {
      const { getByTestId } = render(
        <TreeView onNodeClick={onNodeClick}>
          <TreeNodesTemplate />
        </TreeView>,
      );

      const element = getByTestId("UncontrolledTreeView");
      const node = element.children[1];
      const nodeLabel = node.querySelector("h4");

      fireEvent.click(nodeLabel!);

      expect(onNodeClick).toHaveBeenCalledTimes(1);

      expect(onNodeClick).toHaveBeenCalledWith("5");

      expect(node).toHaveAttribute("aria-expanded", "true");

      fireEvent.click(nodeLabel!);

      expect(node).toHaveAttribute("aria-expanded", "false");
    });
  });

  describe("useTreeAccessibility", () => {
    it("should focus next element on 'ArrowDown' press", async () => {
      const key = "ArrowDown";

      const { getByTestId } = render(
        <TreeView>
          <TreeNodesTemplate />
        </TreeView>,
      );

      const element = getByTestId("UncontrolledTreeView");
      const firstRootNode = element.children[0];
      const secondRootNode = element.children[1];

      expect(firstRootNode).toHaveAttribute("tabindex", "0");

      expect(secondRootNode).toHaveAttribute("tabindex", "-1");

      await userEvent.tab();

      fireEvent.keyDown(element!, { key });

      expect(firstRootNode).toHaveAttribute("tabindex", "-1");

      expect(secondRootNode).toHaveAttribute("tabindex", "0");
    });

    it("should expand the node on 'ArrowRight' press when node is expandable and is not expanded", async () => {
      const key = "ArrowRight";

      const { getByTestId } = render(
        <TreeView>
          <TreeNodesTemplate />
        </TreeView>,
      );

      const element = getByTestId("UncontrolledTreeView");
      const firstRootNode = element.children[0];

      let childTree = firstRootNode.querySelector("ul");

      expect(firstRootNode).toHaveAttribute("tabindex", "0");

      expect(firstRootNode).toHaveAttribute("aria-expanded", "false");

      expect(childTree).toBeNull();

      await userEvent.tab();

      fireEvent.keyDown(element!, { key });

      childTree = firstRootNode.querySelector("ul");

      expect(firstRootNode).toHaveAttribute("tabindex", "0");

      expect(firstRootNode).toHaveAttribute("aria-expanded", "true");

      expect(childTree).not.toBeNull();
    });

    it("should move the focus to next child node on 'ArrowRight' press when node is expandable and is expanded", async () => {
      const key = "ArrowRight";

      const { getByTestId } = render(
        <TreeView>
          <TreeNodesTemplate />
        </TreeView>,
      );

      const element = getByTestId("UncontrolledTreeView");
      const firstRootNode = element.children[0];

      expect(firstRootNode).toHaveAttribute("tabindex", "0");

      expect(firstRootNode).toHaveAttribute("aria-expanded", "false");

      await userEvent.tab();

      fireEvent.keyDown(element!, { key });

      expect(firstRootNode).toHaveAttribute("tabindex", "0");

      expect(firstRootNode).toHaveAttribute("aria-expanded", "true");

      const childTree = firstRootNode.querySelector("ul");

      fireEvent.keyDown(element!, { key });

      const firstChildNode = childTree?.querySelector("li");

      expect(firstRootNode).toHaveAttribute("tabindex", "-1");

      expect(firstChildNode).toHaveAttribute("tabindex", "0");
    });

    it("should focus next parent element node on 'ArrowDown' when focus is not the last node in group", async () => {
      const { getByTestId } = render(
        <TreeView>
          <TreeNodesTemplate />
        </TreeView>,
      );

      const element = getByTestId("UncontrolledTreeView");
      const firstRootNode = element.children[0];
      const secondRootNode = element.children[1];

      expect(firstRootNode).toHaveAttribute("tabindex", "0");

      expect(secondRootNode).toHaveAttribute("tabindex", "-1");

      await userEvent.tab();

      fireEvent.keyDown(element!, { key: "ArrowRight" });

      const childNode = firstRootNode.querySelector("li");

      fireEvent.keyDown(element!, { key: "ArrowDown" });

      fireEvent.keyDown(element!, { key: "ArrowRight" });

      expect(firstRootNode).toHaveAttribute("tabindex", "-1");

      expect(childNode).toHaveFocus();

      const lastGrandChild = childNode?.querySelector("li:last-of-type");

      fireEvent.keyDown(element!, { key: "ArrowDown" });

      fireEvent.keyDown(element!, { key: "ArrowDown" });

      expect(lastGrandChild).toHaveAttribute("tabindex", "0");

      expect(lastGrandChild).toHaveFocus();

      fireEvent.keyDown(element!, { key: "ArrowDown" });

      expect(lastGrandChild).toHaveAttribute("tabindex", "-1");

      expect(secondRootNode).toHaveAttribute("tabindex", "0");

      expect(secondRootNode).toHaveFocus();
    });
  });

  it("should move focus to closet parent on 'ArrowUp' key press if current focus is on the first child", async () => {
    const { getByTestId } = render(
      <TreeView>
        <TreeNodesTemplate />
      </TreeView>,
    );

    const element = getByTestId("UncontrolledTreeView");
    const secondRootNode = element.children[1];

    await userEvent.tab();

    expandAllNodes(element);

    const node45 = secondRootNode.querySelector("[data-nodeid='45']");
    const node46 = secondRootNode.querySelector("[data-nodeid='46']");
    const node47 = secondRootNode.querySelector("[data-nodeid='47']");
    const button = node47?.querySelector("[role=button]");

    fireEvent.click(button!);

    expect(node47).toHaveAttribute("tabindex", "0");

    (node47 as HTMLElement)?.focus();

    fireEvent.keyDown(element!, { key: "ArrowUp" });

    expect(node46).toHaveAttribute("tabindex", "0");

    expect(node46).toHaveFocus();

    fireEvent.keyDown(element!, { key: "ArrowUp" });

    expect(node45).toHaveAttribute("tabindex", "0");

    expect(node45).toHaveFocus();
  });

  it("should contract the node on 'ArrowLeft' if current node is expanded", async () => {
    const { getByTestId } = render(
      <TreeView>
        <TreeNodesTemplate />
      </TreeView>,
    );

    const element = getByTestId("UncontrolledTreeView");
    const firstRootNode = element.children[0];

    await userEvent.tab();

    fireEvent.keyDown(element!, { key: "ArrowRight" });

    expect(firstRootNode).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(element!, { key: "ArrowLeft" });

    expect(firstRootNode).toHaveAttribute("aria-expanded", "false");
  });

  it("should move focus to nearest parent on 'ArrowLeft' if current node is not expandable or contracted", async () => {
    const { getByTestId } = render(
      <TreeView>
        <TreeNodesTemplate />
      </TreeView>,
    );

    const element = getByTestId("UncontrolledTreeView");

    await userEvent.tab();

    expandAllNodes(element);

    const node51 = element.querySelector("[data-nodeid='51']");
    const node46 = element.querySelector("[data-nodeid='46']");
    const node5 = element.querySelector("[data-nodeid='5']");
    const button = node51?.querySelector("[role=button]");

    await userEvent.click(button!);

    expect(node51).toHaveAttribute("tabindex", "0");

    (node51 as HTMLElement).focus();

    fireEvent.keyDown(element!, { key: "ArrowLeft" });

    expect(node46).toHaveAttribute("tabindex", "0");

    expect(node46).toHaveAttribute("aria-expanded", "true");

    expect(node46).toHaveFocus();

    fireEvent.keyDown(element!, { key: "ArrowLeft" });

    expect(node46).toHaveAttribute("tabindex", "0");

    expect(node46).toHaveAttribute("aria-expanded", "false");

    expect(node46).toHaveFocus();

    fireEvent.keyDown(element!, { key: "ArrowLeft" });

    expect(node5).toHaveAttribute("tabindex", "0");

    expect(node5).toHaveFocus();

    fireEvent.keyDown(element!, { key: "ArrowLeft" });

    expect(node5).toHaveAttribute("tabindex", "0");

    expect(node5).toHaveFocus();
  });
});
