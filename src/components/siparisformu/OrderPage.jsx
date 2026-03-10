import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./../../../images/iteration-1-images/logo.svg";

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
  transition: opacity 0.2s;

  &:hover {
    text-decoration: underline;
  }
`;
const MainContent = styled.main`
  max-width: 532px; 
  margin: 0 auto; 
  padding: 31px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
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
        {/* Pizza Bilgisi */}
        <section>
          <h2>Position Absolute Acı Pizza</h2>
          <div className="price-rating">
            <span>85.50₺</span>
            <span>4.9</span>
            <span>(200)</span>
          </div>
          <p>
            Frontend Dev olarak hala position:absolute kullanıyorsan bu pizza
            tam sana göre...
          </p>
        </section>

        {/* Seçim Alanları (Boyut ve Hamur) */}
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          {/*  SizeComponent */}
          <div>
            <h4>
              Boyut Seç <span style={{ color: "red" }}>*</span>
            </h4>
            {/* Radio butonlar */}
          </div>

          {/*  DoughComponent */}
          <div>
            <h4>
              Hamur Seç <span style={{ color: "red" }}>*</span>
            </h4>
            {/* Select Box */}
          </div>
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
