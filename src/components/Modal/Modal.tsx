import { ReactEventHandler, memo, useEffect, useRef } from "react";

import IconButton from "components/IconButton";
import { ReactComponent as Close } from "icons/clear.svg";
import { classNames } from "utils";

import css from "./Modal.module.scss";
import { ModalProps } from "./Modal.type";

const Modal = ({ children, className, onClose, open }: ModalProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  const handleCloseClick = () => {
    onClose?.();
  };

  const handleClose: ReactEventHandler<HTMLDialogElement> = () => {
    onClose?.();
  };

  useEffect(() => {
    const { current } = ref;

    if (open && !current?.open) {
      ref.current?.showModal();

      document.body.style.height = "100vh";

      document.body.style.overflow = "hidden";
    } else {
      ref.current?.close();

      document.body.style.height = "";

      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <dialog
      className={classNames(css.Modal, className)}
      data-testid="Modal"
      onClose={handleClose}
      ref={ref}
    >
      <IconButton
        className={css.close}
        onClick={handleCloseClick}
        variant="outlined"
      >
        <Close />
      </IconButton>
      {children}
    </dialog>
  );
};

export { Modal };

export default memo(Modal);
