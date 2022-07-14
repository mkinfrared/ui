import React, { KeyboardEventHandler, memo, useEffect, useRef } from "react";

import { classNames } from "utils";

import css from "./FakeButton.module.scss";
import { FakeButtonProps } from "./FakeButton.type";

const FakeButton = ({
  autoFocus,
  className,
  children,
  onClick,
}: FakeButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleKeyDown: KeyboardEventHandler = (event) => {
    const { key } = event;

    if (key === "Enter" || key === " ") {
      const { target } = event;
      const ev = new MouseEvent("click", { bubbles: true });

      target.dispatchEvent(ev);
    }
  };

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.autofocus = true;
    }
  }, []);

  return (
    <div
      ref={ref}
      className={classNames(css.FakeButton, className)}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      data-testid="FakeButton"
    >
      {children}
    </div>
  );
};

export { FakeButton };

export default memo(FakeButton);
