import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  alig-items: start;
  max-width: 532px;
  gap: 10px;
`;

const Title = styled.h2`
  color: #292929;
  font-weight: 600;
  font-size: 20px;
  line-height: 29.44px;
  font-family: "Barlow", sans-serif;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  color: #292929;
  font-weight: 700;
  font-size: 28px;
  line-height: 37.47px;
  font-family: "Barlow", sans-serif;
`;
const Rating = styled.div`
  display: flex;
  color: #5f5f5f;
  font-weight: 400;
  font-size: 16px;
  gap: 54.2px;
  line-height: 28.8px;
  font-family: "Barlow", sans-serif;
  align-items: center;
`;

const Text = styled.p`
  color: #5f5f5f;
  font-weight: 400;
  font-size: 15.5px;
  line-height: 28.8px;
  font-family: "Barlow", sans-serif;
  margin-top: 5px;
`;

export default function PizzaInfo() {
  return (
    <Container>
      <Title>Position Absolute Acı Pizza</Title>
      <Info>
        85.50₺
        <Rating>
          <span>4.9</span>
          <span>(200)</span>
        </Rating>
      </Info>
      <Text>
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. . Küçük bir pizzaya bazen pizzetta denir.
      </Text>
    </Container>
  );
}
