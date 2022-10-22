/* eslint-disable react/jsx-no-constructed-context-values */
import { useCallback, useEffect, useState } from "react";

import { useMutationObserver } from "hooks";
import { classNames } from "utils";
import { isHtmlElement } from "utils/typeGuards";

import css from "./TreeView.module.scss";
import { UncontrolledTreeProps } from "./TreeView.type";
import TreeViewContext from "./TreeViewContext";

const useTreeAccessibility = () => {
  const selector = "li[role=treeitem]";
  const [rootNode, setRootNode] = useState<HTMLElement | null>(null);

  const getTargets = (root: HTMLElement | null) =>
    root?.querySelectorAll(selector);

  const focusNext = (root: HTMLElement | null) => {
    const { activeElement } = document;
    const targets = getTargets(root);

    if (!isHtmlElement(activeElement)) {
      return;
    }

    if (!targets) {
      return;
    }

    let nextElement: Element | null = null;

    for (let i = 0; i < targets.length; i++) {
      const target = targets[i];

      if (target === activeElement) {
        // console.log("active", target);
      }
    }

    nextElement = activeElement.nextElementSibling;

    if (!isHtmlElement(nextElement)) {
      return;
    }

    activeElement.tabIndex = -1;

    nextElement.tabIndex = 0;

    nextElement.focus();
    // (nextElement as any).scrollIntoViewIfNeeded?.(true);
  };

  const focusPrev = () => {
    const { activeElement } = document;

    if (!(activeElement instanceof HTMLElement)) {
      return;
    }

    const prevElement = activeElement.previousElementSibling;

    if (!(prevElement instanceof HTMLElement)) {
      return;
    }

    activeElement.tabIndex = -1;

    prevElement.tabIndex = 0;

    prevElement.focus();
    // (prevElement as any).scrollIntoViewIfNeeded?.(true);
  };

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const { key, currentTarget } = event;

    if (!isHtmlElement(currentTarget)) {
      return;
    }

    if (key === "ArrowDown") {
      event.preventDefault();

      focusNext(currentTarget);

      return;
    }

    if (key === "ArrowLeft" || key === "ArrowUp") {
      event.preventDefault();

      focusPrev();
    }
  }, []);

  const mutationCallback: MutationCallback = useCallback(
    (mutations) => {
      mutations.forEach(
        ({ addedNodes, removedNodes, previousSibling, nextSibling }) => {
          addedNodes.forEach((node) => {
            if (!(node instanceof HTMLElement)) {
              return;
            }

            // for each added node that matches the provided selector
            // add tabindex=-1
            if (node.matches(selector)) {
              node.tabIndex = -1;
            }
          });

          removedNodes.forEach((node) => {
            if (!(node instanceof HTMLElement)) {
              return;
            }

            if (node.tabIndex !== 0) {
              return;
            }

            // if remove node was active one
            // try to set tabindex=0 to next or previous sibling
            if (nextSibling instanceof HTMLElement) {
              nextSibling.tabIndex = 0;

              return;
            }

            if (previousSibling instanceof HTMLElement) {
              previousSibling.tabIndex = 0;
            }
          });
        },
      );
    },
    [selector],
  );

  const nodeCallback = useMutationObserver(mutationCallback);

  const refCallback = useCallback(
    (node: HTMLElement | null) => {
      setRootNode(node);

      nodeCallback(node);
    },
    [nodeCallback],
  );

  useEffect(() => {
    if (!rootNode) {
      return;
    }

    rootNode.addEventListener("keydown", handleKeyDown);

    const targetElements = rootNode?.querySelectorAll(selector);

    targetElements?.forEach((target, index) => {
      if (!isHtmlElement(target)) {
        return;
      }

      target.tabIndex = -1;

      if (index === 0) {
        target.tabIndex = 0;
      }
    });

    return () => {
      rootNode?.removeEventListener("keydown", handleKeyDown);

      setRootNode(null);
    };
  }, [handleKeyDown, mutationCallback, rootNode, selector]);

  return refCallback;
};

const UncontrolledTree = ({
  className,
  children,
  onNodeClick,
}: UncontrolledTreeProps) => {
  const [expandedNodes, setExpandedNodes] = useState(new Set<string>());
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const refCallback = useTreeAccessibility();
  const isExpanded = (nodeId: string) => expandedNodes.has(nodeId);
  const isActive = (nodeId: string) => activeNode === nodeId;

  const handleNodeClick = (nodeId: string) => {
    setExpandedNodes((prevState) => {
      if (prevState.has(nodeId)) {
        prevState.delete(nodeId);
      } else {
        prevState.add(nodeId);
      }

      return new Set(prevState);
    });

    setActiveNode(nodeId);

    onNodeClick?.(nodeId);
  };

  const value = {
    isExpanded,
    onNodeClick: handleNodeClick,
    isActive,
  };

  return (
    <TreeViewContext.Provider value={value}>
      <ul
        className={classNames(css.TreeView, className)}
        role="tree"
        data-testid="UncontrolledTreeView"
        ref={refCallback}
      >
        {children}
      </ul>
    </TreeViewContext.Provider>
  );
};

export default UncontrolledTree;
