import { ReactElement, ReactNode } from "react";

/**
 * Returns the text content of a ReactNode.
 *
 * @param {ReactNode} node - The node to extract the text content from.
 * @returns {number|string} - The text content of the node.
 *
 * @example
 *
 * const node = 'Hello, world!';
 * const text = getNodeText(node); // 'Hello, world!'
 *
 * @example
 *
 * const node = [<span key="1">Hello</span>, <span key="2">, world!</span>];
 * const text = getNodeText(node); // 'Hello, world!'
 *
 * @example
 *
 * const node = <div><span>Hello</span>, <span>world!</span></div>;
 * const text = getNodeText(node); // 'Hello, world!'
 */
const getNodeText = (node: ReactNode): number | string => {
  if (typeof node === "string" || typeof node === "number") {
    return node;
  }

  if (node instanceof Array) {
    return node.map(getNodeText).join("");
  }

  if (typeof node === "object" && node) {
    return getNodeText((node as ReactElement).props.children);
  }

  return "";
};

export { getNodeText };
