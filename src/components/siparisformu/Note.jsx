import styled from "styled-components";

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
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #faf7f2;
  font-family: "Barlow", sans-serif;
  font-size: 14px;
  color: #5f5f5f;
  resize: none;

  &:focus {
    outline: none;
    border-color: #fdc913;
  }
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #bbbbbb;
  margin: 40px 0;
  width: 104%;
`;

export default function Note(props) {
  const { note, handleChange } = props;

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
