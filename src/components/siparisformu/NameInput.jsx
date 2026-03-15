import styled from "styled-components";
import { useState } from "react";

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 532px;
  margin-top: 30px;
`;

const Label = styled.label`
  color: #292929;
  font-weight: 600;
  font-size: 19px;
  line-height: 50px;
  font-family: "Barlow", sans-serif;
`;

const StyledInput = styled.input`
  width: 100%;
  max-width: 532px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-family: "Barlow", sans-serif;
  background-color: #faf7f2;

  &:focus {
    outline: none;
    border-color: #fdc913;
  }
`;

export default function NameInput(props) {
  const { name, handleChange } = props;

  return (
    <ContainerForm>
      <Label htmlFor="name">Adınız:</Label>
      <StyledInput
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
        required
      />
    </ContainerForm>
  );
}
