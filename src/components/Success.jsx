import styled from "styled-components";
import logo from "./../../images/iteration-1-images/logo.svg";

const SuccessContainer = styled.div`
  background-color: #ce2829;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #faf7f2;
  text-align: center;
`;

const Logo = styled.img`
  width: 361.93px;
  height: 45.79px;
  margin-bottom: 266.21px;
  margin-top: 149px;
`;

const MainTitle = styled.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 300;
  font-size: 86px;
  line-height: 1.1;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0;
  padding-bottom: 20px;
  max-width: 724px;
`;

export default function Success() {
  return (
    <SuccessContainer>
      <Logo src={logo} alt="logo" />
      <MainTitle>
        TEBRİKLER!
        <br />
        SİPARİŞİNİZ ALINDI!
      </MainTitle>
    </SuccessContainer>
  );
}
