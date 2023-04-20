// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cssHasPseudo from "css-has-pseudo/browser";

const { document } = window;

const polyfill = () => {
  cssHasPseudo(document);
};

export { polyfill };
