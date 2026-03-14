import styled from "styled-components";
import ramen from "./../../../images/iteration-2-images/icons/1.svg";
import pizza from "./../../../images/iteration-2-images/icons/2.svg";
import burger from "./../../../images/iteration-2-images/icons/3.svg";
import fries from "./../../../images/iteration-2-images/icons/4.svg";
import fastfood from "./../../../images/iteration-2-images/icons/5.svg";
import drinks from "./../../../images/iteration-2-images/icons/6.svg";

const MenuContainer = styled.section`
  background-color: #faf7f2;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;
const HeaderSlogan = styled.h3`
  font-family: "Satisfy", cursive;
  color: #ce2829;
  font-size: 32px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 8px;
`;
const HeaderTitle = styled.h2`
  font-family: "Roboto Condensed", sans-serif;
  color: #292929;
  font-size: 42px;
  font-weight: 600;
  margin: 0;
`;
const NavigationBar = styled.div`
  display: flex;
  gap: 22.38px;
  margin-bottom: 33px;
  flex-wrap: wrap;
  justify-content: center;
`;
const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border: none;
  border-radius: 50px;
  background-color: white;
  color: #292929;
  font-family: "Barlow", sans-serif;
  font-weight: 500;
  font-size: 18px;
  transition: all 0.3s ease;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #292929;
    color: white;
  }
`;
const ButtonIcon = styled.img`
  width: 42px;
  height: 42px;
`;
const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1068px;
  width: 100%;
`;
const ItemCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;
const ItemImage = styled.img`
  width: 100%;
  margin-bottom: 24px;
  object-fit: contain;
`;
const ItemTitle = styled.h4`
  font-family: "Barlow", sans-serif;
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 8px;
  color: #292929;
`;
const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  color: #5f5f5f;
`;
const Price = styled.p`
  color: #292929;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;
const Rating = styled.div`
  display: flex;
  gap: 121px;
`;

const products = [
  {
    id: 1,
    name: "Terminal Pizza",
    rating: 4.9,
    reviews: 200,
    price: "60₺",
    img: "./../../../images/iteration-2-images/pictures/food-1.png",
  },
  {
    id: 2,
    name: "Position Absolute Acı Pizza",
    rating: 4.9,
    reviews: 928,
    price: "85₺",
    img: "./../../../images/iteration-2-images/pictures/food-2.png",
  },
  {
    id: 3,
    name: "useEffect Tavuklu Burger",
    rating: 4.9,
    reviews: 462,
    price: "75₺",
    img: "./../../../images/iteration-2-images/pictures/food-3.png",
  },
];

export default function ProductCard() {
  return (
    <MenuContainer>
      <Header>
        <HeaderSlogan>en çok paketlenen menüler</HeaderSlogan>
        <HeaderTitle>Acıktıran Kodlara Doyuran Lezzetler</HeaderTitle>
      </Header>

      <NavigationBar>
        <NavButton>
          <ButtonIcon src={ramen} />
          Ramen
        </NavButton>
        <NavButton>
          <ButtonIcon src={pizza} />
          Pizza
        </NavButton>
        <NavButton>
          <ButtonIcon src={burger} />
          Burger
        </NavButton>
        <NavButton>
          <ButtonIcon src={fries} />
          French fries
        </NavButton>
        <NavButton>
          <ButtonIcon src={fastfood} />
          Fast food
        </NavButton>
        <NavButton>
          <ButtonIcon src={drinks} />
          Soft drinks
        </NavButton>
      </NavigationBar>

      <ProductGrid>
        {products.map((product, index) => (
          <ItemCard key={index}>
            <ItemImage src={product.img} />
            <ItemTitle>{product.name}</ItemTitle>
            <CardInfo>
              <Rating>
                <span>{product.rating}</span>
                <span>{product.reviews}</span>
              </Rating>
              <Price>{product.price}</Price>
            </CardInfo>
          </ItemCard>
        ))}
      </ProductGrid>
    </MenuContainer>
  );
}
