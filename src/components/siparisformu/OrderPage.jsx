import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./../../../images/iteration-1-images/logo.svg";
import PizzaInfo from "./PizzaInfo";
import PizzaSize from "./PizzaSize";
import DoughType from "./DoughType";

const ContainerHeader = styled.header`
  background-color: #ce2829;
  width: 100%;
  height: 15.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 66.49px;
`;
const Image = styled.img`
  width: 363px;
  height: 47px;
`;
const Nav = styled.nav`
  margin-top: 44.72px;
  display: flex;
  justify-content: flex-start;
  max-width: 532px;
  width: 100%;
  gap: 5px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #faf7f2;
  font-weight: 400;
  font-size: 14.5px;
  line-height: 28.8px;
  font-family: "Barlow", sans-serif;

  &:hover {
    transition: opacity 0.2s;
    color: #cac8c4;
  }
`;
const MainContent = styled.main`
  max-width: 532px;
  margin: 0 auto;
  padding: 31px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default function OrderPage() {
  console.log("OrderPage buradayım!");
  return (
    <>
      <ContainerHeader>
        <Image src={logo} />
        <Nav>
          <StyledLink to="/">Anasayfa</StyledLink>
          <span style={{ color: "#FAF7F2" }}>-</span>
          <StyledLink to="/order" style={{ fontWeight: "bold" }}>
            Sipariş Oluştur
          </StyledLink>
        </Nav>
      </ContainerHeader>
      <MainContent>
        <PizzaInfo />
        <section style={{ display: "flex", justifyContent: "flex-start", gap: "167.88px" }}>
          <PizzaSize />
          <DoughType />
        </section>
        {/* Malzemeler */}
        <section>
          <h4>Ek Malzemeler</h4>
          <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          {/* Checkbox Grid */}
        </section>
      </MainContent>
    </>
  );
}
