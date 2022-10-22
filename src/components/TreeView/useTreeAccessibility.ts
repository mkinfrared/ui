import { useCallback, useEffect, useState } from "react";

import { useMutationObserver } from "hooks";
import { isHtmlElement } from "utils/typeGuards";

type Callback = (nodeId: string, expanded: boolean) => void;

const useTreeAccessibility = (callback: Callback) => {
  const selector = "li[role=treeitem]";
  const [rootNode, setRootNode] = useState<HTMLElement | null>(null);

  const getNextElement = (element: Element | null): Element | null => {
    if (!element) {
      return null;
    }

    if (element.nextElementSibling) {
      return element.nextElementSibling;
    }

    return getNextElement(element.parentElement?.parentElement ?? null);
  };

  const getLastElement = (element: Element | null): Element | null => {
    if (!element) {
      return null;
    }

    const { lastElementChild } = element;

    if (
      lastElementChild?.lastElementChild?.getAttribute("aria-expanded") ===
      "true"
    ) {
      return getLastElement(lastElementChild.lastElementChild);
    }

    return lastElementChild?.lastElementChild ?? null;
  };

  const handleArrowDown = () => {
    const { activeElement } = document;
    const currentActiveNode = activeElement?.closest("li");

    if (!isHtmlElement(currentActiveNode)) {
      return;
    }

    let nextElement: Element | null;

    const isExpanded =
      currentActiveNode.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      nextElement = currentActiveNode.querySelector(selector);
    } else {
      nextElement = getNextElement(currentActiveNode);
    }

    if (!isHtmlElement(nextElement)) {
      return;
    }

    currentActiveNode.tabIndex = -1;

    nextElement.tabIndex = 0;

    nextElement.focus();

    nextElement.scrollIntoView?.({ behavior: "smooth" });
    // (nextElement as any).scrollIntoViewIfNeeded?.(true);
  };

  const handleArrowUp = (root: HTMLElement) => {
    const { activeElement } = document;
    const currentActiveNode = activeElement?.closest("li");

    if (!isHtmlElement(currentActiveNode)) {
      return;
    }

    let prevElement: Element | null = null;

    if (!currentActiveNode.previousElementSibling) {
      if (currentActiveNode.parentElement !== root) {
        prevElement = currentActiveNode.parentElement?.parentElement ?? null;
      }
    } else {
      prevElement = currentActiveNode.previousElementSibling;
    }

    const { previousElementSibling } = currentActiveNode;

    if (previousElementSibling?.getAttribute("aria-expanded") === "true") {
      prevElement = getLastElement(previousElementSibling);
    }

    if (!isHtmlElement(prevElement)) {
      return;
    }

    currentActiveNode.tabIndex = -1;

    prevElement.tabIndex = 0;

    prevElement.focus();

    prevElement.scrollIntoView?.({ behavior: "smooth" });

    // (prevElement as any).scrollIntoViewIfNeeded?.(true);
  };

  const handleArrowRight = () => {
    const { activeElement } = document;
    const currentActiveNode = activeElement?.closest("li");

    if (!isHtmlElement(currentActiveNode)) {
      return;
    }

    if (!currentActiveNode.hasAttribute("aria-expanded")) {
      return;
    }

    const isExpanded =
      currentActiveNode.getAttribute("aria-expanded") === "true";

    if (!isExpanded) {
      callback(currentActiveNode.dataset.nodeid ?? "", true);

      return;
    }

    const nextElement = currentActiveNode.lastElementChild?.firstElementChild;

    if (!isHtmlElement(nextElement)) {
      return;
    }

    currentActiveNode.tabIndex = -1;

    nextElement.tabIndex = 0;

    nextElement.focus();

    nextElement.scrollIntoView?.({ behavior: "smooth" });
  };

  const handleArrowLeft = (event: KeyboardEvent) => {
    const { activeElement } = document;
    const currentActiveNode = activeElement?.closest("li");

    if (!isHtmlElement(currentActiveNode)) {
      return;
    }

    const isExpanded =
      currentActiveNode.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      callback(currentActiveNode.dataset.nodeid ?? "", false);

      return;
    }

    if (currentActiveNode.parentElement === event.currentTarget) {
      return;
    }

    const prevElement = currentActiveNode.parentElement?.parentElement;

    if (!isHtmlElement(prevElement)) {
      return;
    }

    currentActiveNode.tabIndex = 0;

    prevElement.tabIndex = 0;

    prevElement.focus();

    prevElement.scrollIntoView?.({ behavior: "smooth", block: "nearest" });
  };

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const { key, currentTarget } = event;

    if (!isHtmlElement(currentTarget)) {
      return;
    }

    if (key === "ArrowDown") {
      event.preventDefault();

      handleArrowDown();

      return;
    }

    if (key === "ArrowUp") {
      event.preventDefault();

      handleArrowUp(currentTarget);
    }

    if (key === "ArrowRight") {
      event.preventDefault();

      handleArrowRight();
    }

    if (key === "ArrowLeft") {
      event.preventDefault();

      handleArrowLeft(event);
    }
  }, []);

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (!isHtmlElement(event.target)) {
        return;
      }

      const listElements = rootNode?.querySelectorAll(selector);

      if (!listElements) {
        return;
      }

      for (const listElement of listElements) {
        listElement.setAttribute("tabindex", "-1");
      }

      const currentActive = event.target.closest(selector);

      currentActive?.setAttribute("tabindex", "0");
    },
    [rootNode],
  );

  const mutationCallback: MutationCallback = useCallback(
    (mutations) => {
      mutations.forEach(
        ({ addedNodes, removedNodes, previousSibling, nextSibling }) => {
          addedNodes.forEach((node) => {
            if (!isHtmlElement(node)) {
              return;
            }

            // for each added node that matches the provided selector
            // add tabindex=-1
            if (node.matches(selector)) {
              node.setAttribute("tabindex", "-1");
            }
          });

          removedNodes.forEach((node) => {
            if (!isHtmlElement(node)) {
              return;
            }

            if (node.getAttribute("tabindex") !== "0") {
              return;
            }

            // if remove node was active one
            // try to set tabindex=0 to next or previous sibling
            if (isHtmlElement(nextSibling)) {
              nextSibling.setAttribute("tabindex", "0");

              return;
            }

            if (isHtmlElement(previousSibling)) {
              previousSibling.setAttribute("tabindex", "0");
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

    rootNode.addEventListener("click", handleClick);

    const targetElements = rootNode?.querySelectorAll(selector);

    targetElements?.forEach((target, index) => {
      if (!isHtmlElement(target)) {
        return;
      }

      target.setAttribute("tabindex", "-1");

      if (index === 0) {
        target.setAttribute("tabindex", "0");
      }
    });

    return () => {
      rootNode?.removeEventListener("keydown", handleKeyDown);

      setRootNode(null);
    };
  }, [handleKeyDown, handleClick, mutationCallback, rootNode, selector]);

  return refCallback;
};

export default useTreeAccessibility;
