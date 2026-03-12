import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 532px;
`;

const Title = styled.h2`
  color: #292929;
  font-weight: 600;
  font-size: 19px;
  line-height: 24.76px;
  font-family: "Barlow", sans-serif;

  &::after {
    content: " *";
    color: #ce2829;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  max-width: 250px;
  padding: 2px 7px;
  border: 1px solid #292929;
  border-radius: 5px;
  color: #292929;
  font-family: "Barlow", sans-serif;
  font-size: 16px;
`;

export default function DoughType() {
  const [dough, setDough] = useState("");

  const handleChange = (e) => {
    setDough(e.target.value);
  };
  return (
    <Container>
      <Title>Hamur Seç</Title>
      <StyledSelect value={dough} onChange={handleChange} required>
        <option value="" disabled>
          Hamur Kalınlığı
        </option>
        <option value="ince">İnce</option>
        <option value="normal">Normal</option>
        <option value="Kalin">Kalın</option>
      </StyledSelect>
    </Container>
  );
}
