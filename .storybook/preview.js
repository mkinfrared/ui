import { useEffect } from "react";

import { useTheme } from "../src/hooks/useTheme";

import "./styles/story.scss";

import cssHasPseudo from "css-has-pseudo/browser";

const tokenContext = require.context(
  "!!raw-loader!../src",
  true,
  /.\.(css|less|svg)$/,
);

const tokenFiles = tokenContext.keys().map(function (filename) {
  return { filename: filename, content: tokenContext(filename).default };
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  designToken: {
    files: tokenFiles,
  },
};

const getTheme = (backgroundColor) => {
  switch (backgroundColor) {
    case "#333333":
      return "dark";
    case "#F8F8F8":
      return "light";
    default:
      return "dark";
  }
};

export const decorators = [
  (Story, context) => {
    const { setPreferredTheme } = useTheme("app-story-theme");

    useEffect(() => {
      cssHasPseudo(document);
    }, []);

    useEffect(() => {
      const { backgrounds } = context.globals;
      const theme = getTheme(backgrounds?.value);

      setPreferredTheme(theme);
    }, [context]);

    return <Story />;
  },
];
