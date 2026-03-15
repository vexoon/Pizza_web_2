import styled from "styled-components";
import { useHistory } from "react-router-dom";
import card1 from './../../assets/cta/kart-1.png';
import card2 from './../../assets/cta/kart-2.png';
import card3 from './../../assets/cta/kart-3.png';

const PromoCardWrapper = styled.div`
  width: 100%;
  padding-top: 68px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  background-color: #faf7f2;
`;

const ContentContainer = styled.div`
  max-width: 1072px;
  max-height: 449px;
  height: 100%;
  width: 100%;
  display: flex;
  gap: 11px;
`;

const PizzaCard = styled.div`
  background-image: url(${card1});
  background-size: cover;
  background-position: center;
  width: 531px;
  height: 449px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  align-items: flex-start;
  justify-content: flex-start;
  color: white;
  flex: 1;
`;

const PizzaCardTitle = styled.h2`
  font-family: "Quattrocento", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 68px;
  line-height: 70px;
  margin-top: 44px;
  margin-left: 39px;
  margin-bottom: 0;
`;
const PizzaCardText = styled.p`
  margin: 25px 39px;
  font-family: "Barlow", sans-serif;
  font-size: 20px;
  font-weight: 600;
`;
const PromoCardButton = styled.button`
  width: 140px;
  height: 48px;
  background-color: white;
  color: #ce2829;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 14px;
  lin-height: 48px;
  transition: transform 0.2s;
  margin: 0 39px;

  &:hover {
    transform: scale(1.05);
  }
`;

const PromoCardRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  flex: 1;
  min-width: 530px;
  max-height: 449px;
`;
const PromoCardRight = styled.div`
  height: 220spx;
  border-radius: 12px;
  color: white;
  background-image: url(${(props) => props.bgimg});
  background-size: cover;
  background-position: center;
  flex: 1;
`;
const PromoCardRightTitle = styled.h2`
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  font-size: 32px;
  margin: 28.5px 39px;
`;

export default function PromoCard() {
  const history = useHistory();
  return (
    <PromoCardWrapper>
      <ContentContainer>
        <PizzaCard>
          <PizzaCardTitle>
            Özel
            <br />
            Lezzetus
          </PizzaCardTitle>
          <PizzaCardText>Position:Absolute Acı Burger</PizzaCardText>
          <PromoCardButton onClick={() => history.push("/order")}>
            SİPARİŞ VER
          </PromoCardButton>
        </PizzaCard>
        <PromoCardRightWrapper>
          <PromoCardRight bgimg={card2}>
            <PromoCardRightTitle>
              Hackathlon
              <br />
              Burger Menü
            </PromoCardRightTitle>
            <PromoCardButton onClick={() => history.push("/order")}>
              SİPARİŞ VER
            </PromoCardButton>
          </PromoCardRight>
          <PromoCardRight bgimg={card3}>
            <PromoCardRightTitle style={{ color: "black" }}>
              <span style={{ color: "red" }}>Çoooook</span> hızlı
              <br />
              npm gibi kurye{" "}
            </PromoCardRightTitle>
            <PromoCardButton onClick={() => history.push("/order")}>
              SİPARİŞ VER
            </PromoCardButton>
          </PromoCardRight>
        </PromoCardRightWrapper>
      </ContentContainer>
    </PromoCardWrapper>
  );
}
