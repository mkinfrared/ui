import { TransitionEventHandler, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import Card from "components/Card";
import { useOutsideClick } from "hooks/useOutsideClick";
import { classNames } from "utils";
import { isHtmlElement } from "utils/typeGuards";

import css from "./Drawer.module.scss";
import { DrawerProps } from "./Drawer.type";

const Drawer = ({
  children,
  className,
  open,
  onClose,
  placement = "left",
}: DrawerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useOutsideClick([ref], onClose);

  const placementClass: Record<typeof placement, string> = {
    left: css.left,
    right: css.right,
    top: css.top,
    bottom: css.bottom,
  };

  const handleTransitionEnd: TransitionEventHandler = () => {
    if (!isHtmlElement(drawerRef.current)) {
      return;
    }

    if (!open) {
      drawerRef.current.style.zIndex = "-1";
    }
  };

  const handleTransitionStart = () => {
    if (drawerRef.current) {
      drawerRef.current.style.zIndex = "1";
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event;

    if (key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    drawerRef.current?.addEventListener(
      "transitionstart",
      handleTransitionStart,
    );

    return () => {
      drawerRef.current?.removeEventListener(
        "transitionstart",
        handleTransitionStart,
      );
    };
  }, []);

  useEffect(() => {
    if (!drawerRef.current) {
      return;
    }

    if (!open) {
      drawerRef.current.style.zIndex = "-1";
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return createPortal(
    <div
      className={classNames(css.Drawer)}
      data-testid="Drawer"
      role="presentation"
      aria-hidden={!open}
      onTransitionEnd={handleTransitionEnd}
      ref={drawerRef}
    >
      <Card
        className={classNames(
          css.content,
          placementClass[placement],
          className,
        )}
        cardRef={ref}
      >
        {children}
      </Card>
    </div>,
    document.body,
  );
};

export default Drawer;
