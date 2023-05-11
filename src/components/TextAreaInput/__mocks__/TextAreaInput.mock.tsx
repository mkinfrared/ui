import { TextAreaInputProps } from "../TextAreaInput.type";

const TextAreaInputMock = (props: TextAreaInputProps) => (
  <div data-testid="TextAreaInput">{JSON.stringify(props)}</div>
);

export default TextAreaInputMock;
