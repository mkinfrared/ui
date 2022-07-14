import React from "react";

import { ModalProps } from "../Modal.type";

const ModalMock = (props: ModalProps) => (
  <div data-testid="Modal">{JSON.stringify(props)}</div>
);

export default ModalMock;
