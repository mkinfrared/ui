import { TextAreaInputProps } from "./TextAreaInput.type";

const TextAreaInput = ({
  className,
  textAreaRef,
  value,
  ...rest
}: TextAreaInputProps) => {
  const testid = "TextAreaInput";

  if (typeof value !== "undefined") {
    return (
      <textarea
        {...rest}
        className={className}
        data-testid={testid}
        ref={textAreaRef}
        value={value}
      />
    );
  }

  return (
    <textarea
      {...rest}
      className={className}
      data-testid={testid}
      ref={textAreaRef}
    />
  );
};

export default TextAreaInput;
