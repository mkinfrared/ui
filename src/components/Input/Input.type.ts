import { InputHTMLAttributes, Ref } from "react";

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;

export type InputProps = Omit<InputAttributes, "type"> & {
  inputRef?: Ref<HTMLInputElement>;
  type?:
    | "email"
    | "file"
    | "hidden"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "url";
};
