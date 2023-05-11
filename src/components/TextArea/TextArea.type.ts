import { ChangeEventHandler, Ref } from "react";

export type TextAreaProps = {
  autogrow?: boolean;
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  /**
   * an error text to be displayed under input field
   * if value is truthy also changes css styles to display error
   */
  error?: string;
  label?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  rows?: number;
  textAreaRef?: Ref<HTMLTextAreaElement>;
  value?: string;
};
