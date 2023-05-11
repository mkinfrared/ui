import { ChipProps } from "../Chip.type";

const ChipMock = (props: ChipProps) => (
  <div data-testid="Chip">{JSON.stringify(props)}</div>
);

export default ChipMock;
