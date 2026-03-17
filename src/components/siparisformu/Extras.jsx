import styled from "styled-components";
import { useState } from "react";
import CheckBox from "./CheckBox";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  width: 570px;
`;

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Title = styled.h2`
  color: #292929;
  font-weight: 600;
  font-size: 19px;
  line-height: 0px;
  font-family: "Barlow", sans-serif;
`;

const Text = styled.p`
  color: #5f5f5f;
  font-weight: 500;
  font-size: 16px;
  line-height: 10px;
  font-family: "Barlow", sans-serif;
`;

const initalValue = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak",
  "Mantar",
];

export default function Extras(props) {
  const [toppings, setToppings] = useState(initalValue);
  const { selectedToppings, handleChange } = props;

  return (
    <>
      <ContainerHeader>
        <Title>Ek Malzemeler</Title>
        <Text>En fazla 10 malzeme seçebilirsiniz. 5₺</Text>
      </ContainerHeader>

      <Container>
        {toppings.map((topping, index) => (
          <CheckBox
            key={index}
            checked={selectedToppings.includes(topping)}
            handleChange={handleChange}
            topping={topping}
            data-cy="topping-input"
            disabled={
              selectedToppings.length >= 10 &&
              !selectedToppings.includes(topping)
            }
          />
        ))}
      </Container>
    </>
  );
}
