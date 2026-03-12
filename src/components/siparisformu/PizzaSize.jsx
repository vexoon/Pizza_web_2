import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 532px;
`;

const ContainerForm = styled.form`
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

const Label = styled.label`
  display: flex;
  column-gap: 11px;
  align-items: baseline;
  color: #5f5f5f;
  font-weight: 500;
  font-size: 16px;
  line-height: 40px;
  font-family: "Barlow", sans-serif;
`;

export default function PizzaSize(props) {
  const {size, setSize} = props;

  const handleChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <Container>
      <Title>Boyut Seç</Title>
      <ContainerForm>
        <Label htmlFor="S">
          <input
            type="radio"
            id="S"
            name="pizza-size"
            value="small"
            checked={size === "small"}
            onChange={handleChange}
            required
          />
          Küçük
        </Label>
        <Label htmlFor="M">
          <input
            type="radio"
            id="M"
            name="pizza-size"
            value="medium"
            checked={size === "medium"}
            onChange={handleChange}
            required
          />
          Orta
        </Label>
        <Label htmlFor="L">
          <input
            type="radio"
            id="L"
            name="pizza-size"
            value="large"
            checked={size === "large"}
            onChange={handleChange}
            required
          />
          Büyük
        </Label>
      </ContainerForm>
    </Container>
  );
}
