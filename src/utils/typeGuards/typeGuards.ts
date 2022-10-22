const isHtmlElement = (value: any): value is HTMLElement =>
  value instanceof HTMLElement;

export { isHtmlElement };
