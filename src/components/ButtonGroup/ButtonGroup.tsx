import {
  Children,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";

import { ButtonColors, ButtonProps, ButtonVariants } from "components/Button";
import { classNames } from "utils";

import css from "./ButtonGroup.module.scss";
import { ButtonGroupProps } from "./ButtonGroup.type";

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

const ButtonGroup = ({
  className,
  children,
  color = "primary",
  variant = "contained",
}: ButtonGroupProps) => {
  const classes = [
    css.ButtonGroup,
    className,
    getButtonVariant(variant),
    getButtonColor(color),
  ];

  const childrenWithProps = Children.map<ReactNode, ReactNode>(
    children,
    (child) => {
      if (!isValidElement(child)) {
        return child;
      }

      const buttonClassNames = classNames(child.props.className, css.button);

      const clone = cloneElement<ButtonProps>(
        child as ReactElement<ButtonProps>,
        {
          className: buttonClassNames,
          variant: "contained",
          color: "primary",
        },
      );

      return clone;
    },
  );

  return (
    <div className={classNames(...classes)} data-testid="ButtonGroup">
      {childrenWithProps}
    </div>
  );
};

export default ButtonGroup;
