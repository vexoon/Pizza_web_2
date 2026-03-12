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

const StyledInput = styled.textarea`
  width: 100%;
  max-width: 532px;
  height: 30px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: "Barlow", sans-serif;

  &:focus {
    outline: none;
    border-color: #fdc913;
  }
`;

const Divider = styled.hr`
  border: 0;
  border-top: 2px solid #ccc;
  margin: 40px 0;
  width: 104%;
`;

export default function Note(props) {
  const { note, setNote } = props;

  const handleChange = (e) => {
    setNote(e.target.value);
  };
  return (
    <ContainerForm>
      <Label htmlFor="note">Sipariş Notu</Label>
      <StyledInput
        id="note"
        name="note"
        value={note}
        onChange={handleChange}
        placeholder="Siparişine eklemek istediğin bir not var mı?"
        required
      />
      <Divider />
    </ContainerForm>
  );
}
