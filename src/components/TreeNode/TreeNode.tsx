import { useContext } from "react";
import { CSSTransition } from "react-transition-group";

import FakeButton from "components/FakeButton";
import Heading from "components/Heading";
import TreeViewContext from "components/TreeView/TreeViewContext";
import { ReactComponent as Chevron } from "icons/chevron.svg";
import { classNames } from "utils";

import transition from "./transition.module.scss";
import css from "./TreeNode.module.scss";
import { DoneCallback, TreeNodeProps } from "./TreeNode.type";

const TreeNode = ({ children, className, label, nodeId }: TreeNodeProps) => {
  const { isActive, isExpanded, onNodeClick } = useContext(TreeViewContext);

  const handleClick = () => {
    onNodeClick?.(nodeId);
  };

  const handleAnimation = (node: HTMLElement, done: DoneCallback) => {
    node.addEventListener("transitionend", done, false);
  };

  const refCallback = (node: HTMLElement | null) => {
    if (!node) {
      return;
    }

    const { scrollHeight } = node;
    const { left } = node.getBoundingClientRect();

    node.style.setProperty("--group-height", `${scrollHeight}px`);

    node.style.setProperty("--group-left", `${left}px`);
  };

  const isExpandable = Array.isArray(children) ? !!children.length : !!children;

  return (
    <li
      className={classNames(css.TreeNode, className)}
      role="treeitem"
      aria-expanded={!!isExpanded?.(nodeId)}
      aria-selected={!!isActive?.(nodeId)}
      onKeyDown={(event) => {
        const { key } = event;

        if (key === " ") {
          handleClick();
        }
      }}
    >
      <FakeButton
        className={classNames(
          css.label,
          isExpanded?.(nodeId) && css.expanded,
          isActive?.(nodeId) && css.active,
        )}
        onClick={handleClick}
        tabIndex={0}
      >
        <Chevron
          className={classNames(css.icon, isExpandable && css.visible)}
        />
        <Heading variant="h4">{label}</Heading>
      </FakeButton>
      <CSSTransition
        in={!!isExpanded?.(nodeId)}
        addEndListener={handleAnimation}
        classNames={transition}
        unmountOnExit
      >
        <ul className={css.group} role="group" ref={refCallback}>
          {children}
        </ul>
      </CSSTransition>
    </li>
  );
};

export { TreeNode };

export default TreeNode;
