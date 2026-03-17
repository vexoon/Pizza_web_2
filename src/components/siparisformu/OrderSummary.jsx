import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 33px;
  align-items: start;
  max-width: 350px;
  margin-bottom: 110px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: #fdc913;
  width: 56px;
  height: 56px;
  color: #292929;
  border: none;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;

  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  &:last-child {
    border-radius: 0 5px 5px 0;
  }
`;

const Text = styled.div`
  border: 1px solid #d9d9d9;
  width: 56px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Barlow", sans-serif;
  font-weight: 600;
`;

const SummaryCard = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  max-width: 350px;
  background-color: #faf7f2;
  max-height: 150px;
  display: flex;
  flex-direction: column;
  padding: 42px 49px;
`;

const Title = styled.h2`
  color: #292929;
  font-weight: 600;
  font-size: 20px;
  font-family: "Barlow", sans-serif;
  margin-bottom: 25px;
`;

const Selections = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: "Barlow", sans-serif;
  font-weight: 600;
`;

const Text2 = styled.p`
  color: #5f5f5f;
  font-weight: 500;
  font-size: 18px;
  line-height: 10px;
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  margin-bottom: 12px;
`;

const Total = styled(Text2)`
  color: #ce2829;
`;

const SubmitButton = styled(Button)`
  width: 350px;
  height: 62px;
  border-radius: 5px !important;
  margin-top: -1px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    color: #777;
  }
`;

export default function OrderSummary(props) {
  const { quantity, handleChange, extraPrice, total, isValid, handleSubmit } =
    props;

  const increase = () => {
    handleChange({
      target: { name: "quantity", value: quantity + 1 },
    });
  };
  const decrease = () => {
    if (quantity > 1) {
      handleChange({
        target: { name: "quantity", value: quantity - 1 },
      });
    }
  };
  return (
    <Container>
      <ButtonContainer>
        <Button type="button" onClick={decrease}>
          -
        </Button>
        <Text>{quantity}</Text>
        <Button data-cy="increase-button" type="button" onClick={increase}>
          +
        </Button>
      </ButtonContainer>
      <div>
        <SummaryCard>
          <Title>Sipariş Toplamı</Title>
          <Selections>
            <Text2>Seçimler</Text2>
            <Text2>{extraPrice}₺</Text2>
          </Selections>
          <Selections>
            <Total>Toplam</Total>
            <Total>{total}₺</Total>
          </Selections>
        </SummaryCard>
        <SubmitButton data-cy="submit-button" type="submit" onClick={handleSubmit} disabled={!isValid}>
          Sipariş Ver
        </SubmitButton>
      </div>
    </Container>
  );
}
