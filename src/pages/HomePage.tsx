import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Search } from "../components/Search";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  margin-top: 20px;
`

export const HomePage = () => {
  const [query, setQuery] = useState<string>("");

  const handleQueryOnChange = (newQuery: string) => {
    setQuery(newQuery);
  }

  return (
    <Container fluid="md">
      <Row>
        <SearchBarContainer>
          <Search query={query} onChange={handleQueryOnChange} />
        </SearchBarContainer>
      </Row>
    </Container>
  );
};
