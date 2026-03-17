import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 19px;
`;

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 532px;
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

const ButtonWrapper = styled.div`
  display: flex;
  gap: 17.2px;
`;

const Label = styled.label`
  width: 56px;
  height: 56px;
  background-color: ${(props) => (props.isSelected ? "#ffeecc" : "#FAF7F2")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #5f5f5f;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  font-family: "Barlow", sans-serif;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ffeecc;
  }
`;
const StyledInput = styled.input`
  display: none;
`;

export default function PizzaSize(props) {
  const { size, handleChange } = props;

  return (
    <Container>
      <Title>Boyut Seç</Title>
      <ContainerForm>
        <ButtonWrapper>
          <Label htmlFor="S" isSelected={size === "small"}>
            <StyledInput
              type="radio"
              id="S"
              name="size"
              value="small"
              checked={size === "small"}
              onChange={handleChange}
              required
            />
            S
          </Label>
          <Label htmlFor="M" isSelected={size === "medium"}>
            <StyledInput
              type="radio"
              id="M"
              name="size"
              value="medium"
              checked={size === "medium"}
              onChange={handleChange}
              data-cy="Medium-size-input"
              required
            />
            M
          </Label>
          <Label htmlFor="L" isSelected={size === "large"}>
            <StyledInput
              type="radio"
              id="L"
              name="size"
              value="large"
              checked={size === "large"}
              onChange={handleChange}
              required
            />
            L
          </Label>
        </ButtonWrapper>
      </ContainerForm>
    </Container>
  );
}
