import styled from "styled-components";
import logo from "./../assets/logo.svg";

const SuccessContainer = styled.div`
  background-color: #ce2829;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #faf7f2;
  font-family: "Barlow", sans-serif;
  text-align: center;
  padding-bottom: 200px;
`;

const Logo = styled.img`
  width: 361.93px;
  height: 45.79px;
  margin-bottom: 40px;
  margin-top: 56px;
`;
const SubTitle = styled.p`
  font-family: "Satisfy", cursive;
  font-size: 32px;
  color: #fdc913;
  margin-bottom: 3px;
`;

const MainTitle = styled.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 300;
  font-size: 86px;
  line-height: 1.1;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0;
  padding-bottom: 53px;
  max-width: 724px;
  border-bottom: 1px solid #faf7f2;
`;
const PizzaName = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 25px;
  font-family: "Barlow", sans-serif;
`;
const InfoBox = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-bottom: 40px;
  font-family: "Barlow", sans-serif;
  width: 202px;
`;
const InfoSpan = styled.span`
  font-weight: 700;
`;
const SummaryCard = styled.div`
  border: 1px solid #faf7f2;
  border-radius: 6px;
  padding: 40px;
  width: 270px;
  text-align: left;
  height: 110px;
`;
const SummaryDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  width: 252px;
`;
const SummaryTitle = styled.h3`
  font-size: 20px;
  margin: 0;
  margin-bottom: 22px;
`;

export default function Success() {
  const siparis = JSON.parse(localStorage.getItem("pizzaSiparisi"));
  if (!siparis)
    return <SuccessContainer>Sipariş bilgisi bulunamadı.</SuccessContainer>;
  return (
    <SuccessContainer>
      <Logo src={logo} alt="logo" />
      <SubTitle>lezzetin yolda</SubTitle>
      <MainTitle>SİPARİŞ ALINDI</MainTitle>
      <PizzaName>Position Absolute Acı Pizza</PizzaName>
      <InfoBox>
        <p>
          Boyut: <InfoSpan>{siparis.size}</InfoSpan>
        </p>
        <p style={{ margin: "0" }}>
          Hamur: <InfoSpan>{siparis.dough}</InfoSpan>
        </p>
        <p>
          Ek Malzemeler:
          <InfoSpan>{siparis.toppings?.join(", ")}</InfoSpan>
        </p>
      </InfoBox>
      <SummaryCard>
        <SummaryTitle>Sipariş Toplamı</SummaryTitle>
        <SummaryDiv>
          <p style={{ margin: "0" }}>Seçimler</p>
          <p style={{ margin: "0" }}>
            {(siparis.toppings?.length * 5).toFixed(2)}₺
          </p>
        </SummaryDiv>
        <SummaryDiv style={{ fontWeight: "bold" }}>
          <p style={{ margin: "0" }}>Toplam</p>
          <p style={{ margin: "0" }}>{siparis.total?.toFixed(2)}₺</p>
        </SummaryDiv>
      </SummaryCard>
    </SuccessContainer>
  );
}
