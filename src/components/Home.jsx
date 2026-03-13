import styled from "styled-components";
import { useHistory } from "react-router-dom";
import logo from "./../../images/iteration-1-images/logo.svg";
import banner from "./../../images/iteration-1-images/home-banner.png";

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
    <HomeContainer>
      <img
        src={logo}
        alt="Teknolojik Yemekler Logo"
        style={{ marginTop: "106.99px" }}
      />
      <Content>
        <MainHeading>
          KOD ACIKTIRIR <br /> PİZZA, DOYURUR
        </MainHeading>
        <ActionButton onClick={() => history.push("/order")}>
          ACIKTIM
        </ActionButton>
      </Content>
    </HomeContainer>
  );
}
