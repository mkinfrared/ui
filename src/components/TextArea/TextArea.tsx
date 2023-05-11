import { uniqueId } from "lodash-es";
import { ChangeEventHandler, useMemo, useRef } from "react";

import Heading from "components/Heading";
import Text from "components/Text";
import TextAreaInput from "components/TextAreaInput";
import { classNames, mergeRefs } from "utils";

import css from "./TextArea.module.scss";
import { TextAreaProps } from "./TextArea.type";

const TextArea = ({
  autogrow = true,
  className,
  defaultValue,
  disabled = false,
  error,
  label,
  name,
  onChange,
  placeholder,
  rows = 4,
  textAreaRef,
  value,
}: TextAreaProps) => {
  const initialRows = rows;
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const errorId = useMemo(() => uniqueId("error"), []);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const { current } = ref;

    if (current && autogrow) {
      current.setAttribute("rows", "2");

      const { lineHeight } = window.getComputedStyle(current);
      const { scrollHeight } = current;
      const lines = Math.floor(scrollHeight / parseInt(lineHeight, 10));
      const rowsAmount = Math.max(lines, initialRows);

      current.setAttribute("rows", `${rowsAmount}`);
    }

    onChange?.(event);
  };

  return (
    <label
      className={classNames(css.TextArea, className)}
      data-testid="TextArea"
    >
      {!!label && (
        <Heading variant="h5" className={css.label}>
          {label}
        </Heading>
      )}
      <TextAreaInput
        aria-invalid={!!error}
        aria-errormessage={errorId}
        className={css.textArea}
        defaultValue={defaultValue}
        disabled={disabled}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        rows={initialRows}
        textAreaRef={mergeRefs(ref, textAreaRef)}
        value={value}
      />
      <Text aria-live="polite" className={css.error} id={errorId}>
        {error}
      </Text>
    </label>
  );
};

export default TextArea;
