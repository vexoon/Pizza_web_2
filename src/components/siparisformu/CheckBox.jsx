import styled from "styled-components";

const Label = styled.label`
  display: flex;
  column-gap: 11px;
  align-items: center;
  color: #5f5f5f;
  font-weight: 700;
  font-size: 16px;
  line-height: 13px;
  font-family: "Barlow", sans-serif;
`;

const ToppingInput = styled.input`
  display: none;
`;
const StyledBox = styled.div`
  width: 45px;
  height: 45px;
  background-color: ${props => (props.$checked ? "#fdc913" : "#FAF7F2")};
  border-radius: 6px; 
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &::after {
    content: "✔";
    display: ${props => (props.$checked ? "block" : "none")};
    color: #000000;
    font-size: 18px;
  }
`;

export default function CheckBox(props) {
  const { topping, handleChange, checked, disabled } = props;
  return (
    <Label htmlFor={topping} style={{ opacity: props.disabled ? 0.5 : 1 }}>
      <ToppingInput
        type="checkbox"
        id={topping}
        name="toppings"
        value={topping}
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
      />
      <StyledBox $checked={checked} />
      {topping}
    </Label>
  );
}
