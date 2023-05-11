import { InputProps } from "./Input.type";

const Input = ({ className, inputRef, value, ...rest }: InputProps) => {
  const testid = "Input";

  if (typeof value !== "undefined") {
    return (
      <input
        {...rest}
        className={className}
        data-testid={testid}
        ref={inputRef}
        value={value}
      />
    );
  }

  return (
    <input
      {...rest}
      className={className}
      data-testid={testid}
      ref={inputRef}
    />
  );
};

export default Input;
