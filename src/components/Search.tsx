import { InputGroup, FormControl } from "react-bootstrap";

type Props = {
  query: string,
  onChange: (newVal: string) => void
}

export const Search: React.FC<Props> = ({ query, onChange }) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">Search tweet</InputGroup.Text>
      <FormControl
        aria-label="Username"
        aria-describedby="basic-addon1"
        value={query}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputGroup>
  );
};
