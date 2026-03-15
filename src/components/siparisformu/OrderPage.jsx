import styled from "styled-components";
import { useState, useEffect } from "react";
import logo from "./../../assets/logo.svg";
import PizzaInfo from "./PizzaInfo";
import PizzaSize from "./PizzaSize";
import DoughType from "./DoughType";
import Extras from "./Extras";
import NameInput from "./NameInput";
import Note from "./Note";
import OrderSummary from "./OrderSummary";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Footer from "./../homepage/Footer";

const ContainerHeader = styled.header`
  background-color: #ce2829;
  width: 100%;
  height: 138px;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  margin: 54.41px 0 33.59px 0;
  width: 363px;
`;

const MainContent = styled.main`
  max-width: 532px;
  margin: 0 auto;
  padding: 31px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ErrorText = styled.p`
  color: #ce2829;
  font-size: 14px;
  font-family: "Barlow", sans-serif;
  margin-top: 5px;
`;

const initialFormData = {
  name: "",
  size: "",
  dough: "",
  toppings: [],
  note: "",
  quantity: 1,
};

const ErrorMessages = {
  name: "İsim en az 3 karakter olmalıdır.",
  size: "Lütfen bir boyut seçiniz.",
  dough: "Lütfen hamur tipi seçiniz.",
  toppings: "En az 4, en fazla 10 malzeme seçmelisiniz.",
};

export default function OrderPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    size: "",
    dough: "",
    toppings: "",
    name: "",
  });

  const history = useHistory();

  function handleChange(e) {
    let { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      const currentToppings = formData.toppings;
      let updatedToppings;

      if (checked) {
        updatedToppings = [...currentToppings, value];
      } else {
        updatedToppings = currentToppings.filter((item) => item !== value);
      }

      setFormData({ ...formData, toppings: updatedToppings });

      setErrors({
        ...errors,
        toppings: updatedToppings.length < 4 || updatedToppings.length > 10,
      });
    } else {
      setFormData({ ...formData, [name]: value });

      if (name === "name") {
        setErrors({ ...errors, name: value.length < 3 });
      }
      if (name === "size") {
        setErrors({ ...errors, size: !value });
      }
      if (name === "dough") {
        setErrors({ ...errors, dough: !value });
      }
    }
  }

  useEffect(() => {
    if (
      formData.dough !== "" &&
      formData.name.length >= 3 &&
      formData.size !== "" &&
      formData.toppings.length >= 4 &&
      formData.toppings.length <= 10
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;

    const orderToSave = {
      ...formData,
      total: (85.5 + extraPrice) * formData.quantity,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", formData)
      .then((response) => {
        console.log("Sipariş Başarıyla Gönderildi!");
        console.log("API Yanıtı (Sipariş Özeti):", response.data);
        localStorage.setItem("pizzaSiparisi", JSON.stringify(orderToSave));
        history.push("/success");

        setFormData(initialFormData);
      })
      .catch((error) => {
        console.error(
          "Hata Detayı:",
          error.response ? error.response.data : error.message,
        );
      });
  }

  const extraPrice = formData.toppings.length * 5;
  const total = (85.5 + extraPrice) * formData.quantity;
  return (
    <>
      <ContainerHeader>
        <Image src={logo} />
      </ContainerHeader>
      <PizzaInfo />
      <MainContent as="form" onSubmit={handleSubmit}>
        <section
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "56px",
          }}
        >
          <div>
            <PizzaSize size={formData.size} handleChange={handleChange} />
            {errors.size && <ErrorText>{ErrorMessages.size}</ErrorText>}
          </div>
          <div>
            <DoughType dough={formData.dough} handleChange={handleChange} />
            {errors.dough && <ErrorText>{ErrorMessages.dough}</ErrorText>}
          </div>
        </section>
        <Extras
          selectedToppings={formData.toppings}
          handleChange={handleChange}
        />
        {errors.toppings && <ErrorText>{ErrorMessages.toppings}</ErrorText>}
        <NameInput name={formData.name} handleChange={handleChange} />
        {errors.name && <ErrorText>{ErrorMessages.name}</ErrorText>}
        <Note note={formData.note} handleChange={handleChange} />
        <OrderSummary
          quantity={formData.quantity}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          extraPrice={extraPrice}
          total={total}
          isValid={isValid}
        />
      </MainContent>
    </>
  );
}
