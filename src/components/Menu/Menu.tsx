import { useEffect, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { useOutsideClick } from "hooks";
import { classNames } from "utils";

import css from "./Menu.module.scss";
import { MenuProps } from "./Menu.type";

const Menu = ({ className, children, comboboxRef, id, onClose }: MenuProps) => {
  const { body } = document;
  const ref = useRef<HTMLUListElement>(null);

  useOutsideClick([ref, comboboxRef], onClose);

  const computeYAxis = (combobox: HTMLElement, dropdownMenu: HTMLElement) => {
    const { top, bottom } = combobox.getBoundingClientRect();
    const { height: comboboxHeight } = dropdownMenu.getBoundingClientRect();
    const nextBottomY = bottom + comboboxHeight;
    const nextTopY = top - comboboxHeight;
    const visualOffset = Math.ceil(window.visualViewport?.offsetTop ?? 0);
    const visualHeight = window.visualViewport?.height ?? Infinity;
    const windowHeight = Math.min(window.innerHeight, visualHeight);

    // if dropdown bottom edge doesn't show up outside the viewport
    // place it at the bottom of combobox
    if (nextBottomY < windowHeight) {
      dropdownMenu.style.setProperty("--top", `${bottom}px`);

      dropdownMenu.style.setProperty("--bottom", "auto");

      dropdownMenu.style.setProperty("--translate-y", `${visualOffset}px`);

      // else if dropdown top edge doesn't show up outside the viewport
      // place it at the top of combobox
    } else if (nextTopY >= 0) {
      dropdownMenu.style.setProperty(
        "--bottom",
        `${window.innerHeight - top}px`,
      );

      dropdownMenu.style.setProperty("--top", "auto");

      dropdownMenu.style.setProperty("--translate-y", `${visualOffset}px`);
      // otherwise place it at the bottom of combobox
    } else {
      dropdownMenu.style.setProperty("--top", `${bottom}px`);

      dropdownMenu.style.setProperty("--bottom", "auto");

      dropdownMenu.style.setProperty("--translate-y", `${visualOffset}px`);
    }
  };

  const computeXAxis = (combobox: HTMLElement, dropdownMenu: HTMLElement) => {
    const { left, right } = combobox.getBoundingClientRect();
    const { width: comboboxWidth } = dropdownMenu.getBoundingClientRect();
    const nextRightX = left + comboboxWidth;
    const nextLeftX = right - comboboxWidth;

    // if dropdown right edge doesn't show up outside the viewport
    // place it at the left of combobox
    if (nextRightX < window.innerWidth) {
      dropdownMenu.style.setProperty("--left", `${left}px`);

      // else if dropdown left edge doesn't show up outside the viewport
      // place it at the right of combobox
    } else if (nextLeftX >= 0) {
      dropdownMenu.style.setProperty("--left", `${nextLeftX}px`);
      // otherwise place it at the left of viewport and set the width of viewport
    } else {
      dropdownMenu.style.setProperty("--left", "0px");

      dropdownMenu.style.setProperty(
        "--combobox-width",
        `${window.innerWidth}px`,
      );
    }
  };

  const setPosition = (comboboxElement: HTMLElement) => {
    const { current } = ref;

    if (!current) {
      return;
    }

    const { width } = comboboxElement.getBoundingClientRect();

    current.style.setProperty("--combobox-width", `${width}px`);

    computeYAxis(comboboxElement, current);

    computeXAxis(comboboxElement, current);
  };

  useLayoutEffect(() => {
    if (comboboxRef.current) {
      setPosition(comboboxRef.current);
    }
  }, []);

  useEffect(() => {
    const { height, overflow } = document.body.style;

    document.body.style.height = "100vh";

    document.body.style.overflow = "hidden";

    const handleResize = () => {
      if (comboboxRef.current) {
        setPosition(comboboxRef.current);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;

      if (key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("resize", handleResize);

    window.visualViewport?.addEventListener("scroll", handleResize);

    window.visualViewport?.addEventListener("resize", handleResize);

    window.addEventListener("scroll", (event) => {
      event.preventDefault();

      handleResize();
    });

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);

      window.visualViewport?.removeEventListener("scroll", handleResize);

      window.visualViewport?.removeEventListener("resize", handleResize);

      window.removeEventListener("keydown", handleKeyDown);

      document.body.style.height = height;

      document.body.style.overflow = overflow;
    };
  }, []);

  return createPortal(
    <ul
      className={classNames(css.Menu, className)}
      data-testid="Menu"
      id={id}
      ref={ref}
      role="listbox"
      onKeyDown={() => null}
    >
      {children}
    </ul>,
    body,
  );
};

export default Menu;
