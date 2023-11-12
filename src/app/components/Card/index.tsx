"use client";

import styled from "styled-components";
import { Montserrat } from "next/font/google";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Products, ProductsCard } from "@/app/@types/product";
//import "./globals.css";

const Container = styled.div`
  width: 218px;
  height: 320px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  color: black;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 111px;
  height: 138px;
  flex-shrink: 0;
  vertical-align: middle;
  border-radius: 8px; /* Você pode aplicar borda à imagem se necessário */

  flex: 1;
`;

const DescriptionCard = styled.div`
  display: flex;
  height: 50px;
  align-items: "center";
  flex: 1;
`;

const CompraBtn = styled.div`
  width: 100%;
  height: 31.907px;
  border-radius: 0px 0px 8px 8px;
  background: #0f52ba;
  color: white;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  align-self: flex-end;
`;

const StyledShoppingBagIcon = styled(Icon)`
  width: 12px;
  height: 13.5px;
  flex-shrink: 0;
  color: white;
  padding: 0 5px;
`;
interface CardProps {
  product: {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});
const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <>
      <Container>
        <Image src={product.photo} alt="Descrição da imagem" />
        <DescriptionCard>
          <p
            style={{
              width: "124px",
              height: "38px",
              flexShrink: 0,
              color: "#2C2C2C",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "19px",
              margin: "0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {product.name}
          </p>
          <p
            className={montserrat.className}
            style={{
              width: "64px",
              height: "26px",
              fontSize: "10px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              borderRadius: "5px",
              background: "#373737",
              textAlign: "center",
              color: "#FFF",
              justifyContent: "center",
              flexWrap: "wrap-reverse",
            }}
          >
            R$ {product.price}
          </p>
        </DescriptionCard>
        <p
          style={{
            padding: "5px",
            fontSize: "10px",
            textAlign: "left",
            height: "35px",
            overflow: "hidden",
            flex: 1,
          }}
        >
          {product.description}
        </p>
        <CompraBtn>
          <StyledShoppingBagIcon icon="charm:shopping-bag" /> Comprar
        </CompraBtn>
      </Container>
    </>
  );
};

export default Card;
