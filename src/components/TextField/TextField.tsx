import { uniqueId } from "lodash-es";
import { useMemo } from "react";

import FakeButton from "components/FakeButton";
import Heading from "components/Heading";
import Text from "components/Text";
import { classNames, mergeRefs } from "utils";

import css from "./TextField.module.scss";
import { TextFieldProps } from "./TextField.type";

const TextField = ({
  autoComplete,
  className,
  disabled = false,
  error,
  inputRef,
  name,
  label,
  type = "text",
  onBlur,
  onChange,
  onSuffixClick,
  prefix,
  suffix,
  value,
}: TextFieldProps) => {
  const classes = [
    css.TextField,
    className,
    !!error && css.hasError,
    !!prefix && css.hasPrefix,
    !!suffix && css.hasSuffix,
    disabled && css.disabled,
  ];

  const errorId = useMemo(() => uniqueId("error"), []);
  const mergedRefs = mergeRefs(inputRef);

  return (
    <label className={classNames(...classes)} data-testid="TextField">
      {label && (
        <Heading variant="h5" className={css.label}>
          {label}
        </Heading>
      )}
      <div className={css.input}>
        {prefix && <FakeButton className={css.prefix}>{prefix}</FakeButton>}
        <input
          aria-invalid={!!error}
          aria-errormessage={errorId}
          autoComplete={autoComplete}
          disabled={disabled}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          ref={mergedRefs}
          type={type}
          value={value}
        />
        {suffix && (
          <FakeButton className={css.suffix} onClick={onSuffixClick}>
            {suffix}
          </FakeButton>
        )}
      </div>
      <Text aria-live="polite" className={css.error} id={errorId}>
        {error}
      </Text>
    </label>
  );
};

export default TextField;
