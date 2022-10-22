/// <reference types="react-scripts" />

enum Keyboard {
  ENTER = "Enter",
  SPACE = " ",
}

type RequiredProps<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property];
};
