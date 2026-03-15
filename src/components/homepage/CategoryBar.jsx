import styled from "styled-components";
import icon1 from './../../assets/icons/1.svg';
import icon2 from './../../assets/icons/2.svg';
import icon3 from './../../assets/icons/3.svg';
import icon4 from './../../assets/icons/4.svg';
import icon5 from './../../assets/icons/5.svg';
import icon6 from './../../assets/icons/6.svg';

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 26px 0;
  gap: 52.13px;
`;

const CategoryItem = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`
const CategoryIcon = styled.img`
    width: 42px;
    height: 42px;
`
const CategoryName = styled.span`
    font-family: "Barlow", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 32.4px;
    color: #292929;
`

const categories = [
  {
    id: 1,
    name: "YENİ! Kore",
    img: icon1,
  },
  { id: 2, name: "Pizza", img: icon2 },
  { id: 3, name: "Burger", img: icon3 },
  {
    id: 4,
    name: "Kızartmalar",
    img: icon4,
  },
  {
    id: 5,
    name: "Fast food",
    img: icon5,
  },
  {
    id: 6,
    name: "Gazlı içecek",
    img: icon6,
  },
];

export default function CategoryBar() {
  return <NavContainer>
    {categories.map(category => (
        <CategoryItem key={category.id}>
            <CategoryIcon src={category.img} />
            <CategoryName>{category.name}</CategoryName>
        </CategoryItem>
    ))}
  </NavContainer>;
}
