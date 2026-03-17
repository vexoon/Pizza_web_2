import styled from "styled-components";
import { Link } from "react-router-dom";
import banner from "./../../assets/pictures/form-banner.png";

const Container = styled.div`
  background-color: #faf7f2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  width: 532px;
  display: flex;
  flex-direction: column;
  align-items: felx-start;
`;
const BannerImage = styled.img`
  max-width: 600px;
  margin-top: -70px;
`;

const Title = styled.h2`
  color: #292929;
  font-weight: 600;
  font-size: 22px;
  line-height: 29.44px;
  font-family: "Barlow", sans-serif;
  margin: 0;
  margin-bottom: 28px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  color: #292929;
  font-weight: 700;
  font-size: 28px;
  line-height: 37.47px;
  font-family: "Barlow", sans-serif;
  margin-bottom: 35px;
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
  font-size: 16px;
  line-height: 28.8px;
  font-family: "Barlow", sans-serif;
  margin-top: 5px;
  margin-bottom: 50px;
`;
const Nav = styled.nav`
  margin-top: 44.72px;
  display: flex;
  justify-content: flex-start;
  max-width: 532px;
  width: 100%;
  gap: 5px;
  align-items: center;
  margin-bottom: 35px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #5f5f5f;
  font-weight: 700;
  font-size: 14.5px;
  line-height: 28.8px;
  font-family: "Barlow", sans-serif;

  &:hover {
    transition: opacity 0.2s;
    color: #cac8c4;
  }
`;

export default function PizzaInfo() {
  return (
    <Container>
      <BannerImage src={banner} />
      <InfoContainer>
        <Nav>
          <StyledLink to="/">Anasayfa</StyledLink>
          <span style={{ color: "#5f5f5f" }}>-</span>
          <StyledLink
            to="/order"
            style={{ color: "#ce2829", fontWeight: "bold" }}
          >
            Sipariş Oluştur
          </StyledLink>
        </Nav>
        <Title data-cy="pizza-info">Position Absolute Acı Pizza</Title>
        <Info>
          85.50₺
          <Rating>
            <span>4.9</span>
            <span>(200)</span>
          </Rating>
        </Info>
        <Text>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </Text>
      </InfoContainer>
    </Container>
  );
}
