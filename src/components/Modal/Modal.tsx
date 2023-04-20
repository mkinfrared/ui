import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import IconButton from "components/IconButton";
import { useOutsideClick } from "hooks/useOutsideClick";
import { ReactComponent as Close } from "icons/clear.svg";
import { classNames } from "utils";
import { isHtmlElement } from "utils/typeGuards";

import css from "./Modal.module.scss";
import { ModalProps } from "./Modal.type";

const Modal = ({ children, className, onClose, open }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCloseClick = () => {
    onClose?.();
  };

  useOutsideClick([ref], handleCloseClick);

  useEffect(() => {
    const { activeElement } = document;

    buttonRef.current?.focus();

    return () => {
      if (isHtmlElement(activeElement)) {
        activeElement.focus();
      }
    };
  }, [open]);

  useEffect(() => {
    const { height, overflow } = document.body.style;

    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;

      if (key === "Escape") {
        onClose?.();
      }
    };

    document.body.style.height = "100vh";

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.height = height;

      document.body.style.overflow = overflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return createPortal(
    <div className={classNames(css.Modal, className)} data-testid="Modal">
      <div className={css.backdrop} />
      <div className={css.dialog} ref={ref} role="dialog">
        <IconButton
          buttonRef={buttonRef}
          className={css.close}
          onClick={handleCloseClick}
          variant="outlined"
        >
          <Close />
        </IconButton>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
