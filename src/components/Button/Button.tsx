/* eslint-disable react/button-has-type */

import Spinner from "components/Spinner";
import { classNames } from "utils";

import css from "./Button.module.scss";
import { ButtonColors, ButtonProps, ButtonVariants } from "./Button.type";

/*
  renders an html button

  @example
  see Button.stories.tsx
 */

const colors: Record<ButtonColors, string> = {
  primary: css.primary,
  secondary: css.secondary,
  success: css.success,
  error: css.error,
};

const variants: Record<ButtonVariants, string> = {
  contained: css.contained,
  outlined: css.outlined,
};

const getButtonColor = (color: ButtonColors) => colors[color];
const getButtonVariant = (variant: ButtonVariants) => variants[variant];

const Button = ({
  buttonRef,
  children,
  className,
  color = "primary",
  disabled = false,
  loading = false,
  type = "button",
  variant = "contained",
  ...rest
}: ButtonProps) => {
  const classes = [
    css.Button,
    className,
    getButtonVariant(variant),
    getButtonColor(color),
  ];

  if (loading) {
    classes.push(css.loading);
  }

  return (
    <button
      className={classNames(...classes)}
      disabled={disabled}
      data-testid="Button"
      ref={buttonRef}
      type={type}
      {...rest}
    >
      <Spinner className={css.spinner} type="bars" />
      <span className={css.content}>{children}</span>
    </button>
  );
};

export default Button;
