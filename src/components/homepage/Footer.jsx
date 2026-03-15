import styled from "styled-components";
import logo from "./../../assets/logo-footer.svg";
import icon1 from "./../../assets/footer-icons/icons/icon-1.png";
import icon2 from "./../../assets/footer-icons/icons/icon-2.png";
import icon3 from "./../../assets/footer-icons/icons/icon-3.png";
import insta1 from "./../../assets/insta/li-0.png";
import insta2 from "./../../assets/insta/li-1.png";
import insta3 from "./../../assets/insta/li-2.png";
import insta4 from "./../../assets/insta/li-3.png";
import insta5 from "./../../assets/insta/li-4.png";
import insta6 from "./../../assets/insta/li-5.png";
import twitter from "./../../assets/footer-icons/icons/twitter.png";

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: white;
  padding-top: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FooterContent = styled.div`
  max-width: 1066px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  gap: 53px;
  margin-bottom: 30px;
`;
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 306px;
  width: 100%;
`;
const InfoIcon = styled.img`
  width: 28px;
  height: 28px;
`;
const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Barlow", sans-serif;
  font-size: 18px;
  font-weight: 400;
  align-items: baseline;
  margin-bottom: 22px;
`;
const InfoLogo = styled.img`
  width: 200px;
  height: 100px;
  margin-bottom: 40px;
`;
const MenuTitle = styled.h4`
  font-size: 24px;
  font-weight: 500;
  font-family: "Barlow", sans-serif;
  margin-bottom: 26px;
`;
const MenuUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const MenuLi = styled.li`
  font-family: "Barlow", sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    color: #fdc913;
  }
`;
const InstaTitle = styled.h4`
  font-size: 24px;
  font-weight: 500;
  font-family: "Barlow", sans-serif;
  margin-bottom: 40px;
`;
const InstaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10.5px;
`;
const InstaImage = styled.img`
  width: 105px;
  height: 105px;
  border-radius: 3px;
`;
const CopyrightBar = styled.div`
  width: 100%;
  max-width: 1064.58px;
  border-top: 1px solid #ffffff20;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #ffffff;
`;
const CopyrightIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <InfoSection>
          <InfoLogo src={logo} />

          <InfoItem>
            <InfoIcon src={icon1} />
            341 Londonderry Road, <br /> Istanbul Türkiye
          </InfoItem>
          <InfoItem>
            <InfoIcon src={icon2} />
            aciktim@teknolojikyemekler.com
          </InfoItem>
          <InfoItem>
            <InfoIcon src={icon3} />
            +90 216 123 45 67
          </InfoItem>
        </InfoSection>

        <section style={{ marginTop: "40px" }}>
          <MenuTitle>Hot Menu</MenuTitle>
          <MenuUl>
            <MenuLi>Terminal Pizza</MenuLi>
            <MenuLi>5 Kişilik Hackathlon Pizza</MenuLi>
            <MenuLi>useEffect Tavuklu Pizza</MenuLi>
            <MenuLi>Beyaz Console Frosty</MenuLi>
            <MenuLi>Testler Geçti Mutlu Burger</MenuLi>
            <MenuLi>Position Absolute Acı Burger</MenuLi>
          </MenuUl>
        </section>

        <section style={{ margin: "40px 0 0 40px" }}>
          <InstaTitle>Instagram</InstaTitle>
          <InstaGrid>
            <InstaImage src={insta1} />
            <InstaImage src={insta2} />
            <InstaImage src={insta3} />
            <InstaImage src={insta4} />
            <InstaImage src={insta5} />
            <InstaImage src={insta6} />
          </InstaGrid>
        </section>
      </FooterContent>
      <CopyrightBar>
        <p>© 2023 Teknolojik Yemekler</p>
        <CopyrightIcon src={twitter} />
      </CopyrightBar>
    </FooterContainer>
  );
}
