import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 19px;
`;

const Title = styled.h2`
  color: #292929;
  font-weight: 600;
  font-size: 20px;
  line-height: 24.76px;
  font-family: "Barlow", sans-serif;
  margin: 0;

  &::after {
    content: " *";
    color: #ce2829;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  min-width: 258px;
  height: 56px;
  padding: 0px 22px;
  border: none;
  border-radius: 6px;
  background-color: #faf7f2;
  color: #5f5f5f;
  font-family: "Barlow", sans-serif;
  font-size: 16px;
  outline: none;
`;

export default function DoughType(props) {
  const { dough, handleChange } = props;

  return (
    <Container>
      <Title>Hamur Seç</Title>
      <StyledSelect name="dough" value={dough} onChange={handleChange} required>
        <option value="" disabled>
          --Hamur Kalınlığı--
        </option>
        <option value="ince">İnce</option>
        <option value="normal">Normal</option>
        <option value="kalın">Kalın</option>
      </StyledSelect>
    </Container>
  );
}
