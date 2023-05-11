import { InputProps } from "../Input.type";

const InputMock = (props: InputProps) => (
  <div data-testid="Input">{JSON.stringify(props)}</div>
);

export default InputMock;
