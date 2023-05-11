import { Ref, TextareaHTMLAttributes } from "react";

type TextAreaAttributes = TextareaHTMLAttributes<HTMLTextAreaElement>;

export type TextAreaInputProps = TextAreaAttributes & {
  textAreaRef?: Ref<HTMLTextAreaElement>;
};
