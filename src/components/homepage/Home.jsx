import styled from "styled-components";
import { useHistory } from "react-router-dom";
import logo from "./../../../images/iteration-1-images/logo.svg";
import banner from "./../../../images/iteration-1-images/home-banner.png";
import CategoryBar from "./CategoryBar";
import PromoCard from "./PromoCard";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

const HomeContainer = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  height: 120vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #faf7f2;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainHeading = styled.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 300;
  font-size: 90px;
  line-height: 92px;
  line-spacing: 1.5;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 26px;
`;

const Slogan = styled.p`
  font-family: "Satisfy", cursive;
  color: #fdc913;
  font-size: 32px;
  margin-top: 53px;
  font-weight: 400;
  margin-bottom: 0;
`;

const ActionButton = styled.button`
  width: 193.27px;
  height: 56px;
  background-color: #fdc913;
  color: #292929;
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  font-size: 18px;
  padding: 15px 50px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    background-color: #eebb11;
  }
`;

export default function Home() {
  const history = useHistory();

  return (
    <>
      <HomeContainer>
        <img
          src={logo}
          alt="Teknolojik Yemekler Logo"
          style={{ marginTop: "56px" }}
        />
        <Content>
          <Slogan>fırsatı kaçırma</Slogan>
          <MainHeading>
            KOD ACIKTIRIR <br /> PİZZA, DOYURUR
          </MainHeading>
          <ActionButton onClick={() => history.push("/order")}>
            ACIKTIM
          </ActionButton>
        </Content>
      </HomeContainer>
      <CategoryBar />
      <PromoCard />
      <ProductCard />
      <Footer />
    </>
  );
}
