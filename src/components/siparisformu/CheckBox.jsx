import styled from "styled-components";

const Label = styled.label`
  display: flex;
  column-gap: 11px;
  align-items: baseline;
  color: #5f5f5f;
  font-weight: 700;
  font-size: 16px;
  line-height: 13px;
  font-family: "Barlow", sans-serif;
`;

const ToppingInput = styled.input`
  width: 15px;
  height: 15px;
  accent-color: #fdc913;
  cursor: pointer;
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
      {topping}
    </Label>
  );
}
