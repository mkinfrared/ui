import { useCallback, useEffect, useState } from "react";

import { useMutationObserver } from "hooks/useMutationObserver";
import { isHtmlElement } from "utils/typeGuards";

const useRoverIndex = (selector = ":scope > *") => {
  const [rootNode, setRootNode] = useState<HTMLElement | null>(null);

  const focusNext = () => {
    const { activeElement } = document;

    if (!(activeElement instanceof HTMLElement)) {
      return;
    }

    const nextElement = activeElement.nextElementSibling;

    if (!(nextElement instanceof HTMLElement)) {
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
    const { key } = event;

    if (key === "ArrowRight" || key === "ArrowDown") {
      event.preventDefault();

      focusNext();

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

    rootNode?.addEventListener("keydown", handleKeyDown);

    const targets = rootNode?.querySelectorAll(selector);

    targets?.forEach((target, index) => {
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

export { useRoverIndex };
