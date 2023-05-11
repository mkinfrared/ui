import { MouseEvent } from "react";

import FakeButton from "components/FakeButton";
import { ReactComponent as Cancel } from "icons/cancel.svg";
import { classNames } from "utils";

import css from "./Chip.module.scss";
import { ChipProps } from "./Chip.type";

const Chip = ({ className, label, onClick, onDelete }: ChipProps) => {
  const handleDeleteClick = (event: MouseEvent) => {
    event.stopPropagation();

    onDelete?.();
  };

  return (
    <FakeButton
      className={classNames(css.Chip, className)}
      data-testid="Chip"
      onClick={onClick}
    >
      <span>{label}</span>
      {!!onDelete && (
        <FakeButton className={css.cancel} onClick={handleDeleteClick}>
          <Cancel />
        </FakeButton>
      )}
    </FakeButton>
  );
};

export default Chip;
