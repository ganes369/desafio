"use client";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Montserrat } from "next/font/google";
import React, { useState } from "react";
import Sidebar from "../SideBar";
import Ranger from "../Range";
import { Products } from "../../@types/product";

const Image = styled.img`
  width: 46px;
  height: 57px;
`;

const Nav = styled.div`
  background-color: #0f52ba;
  color: #ffffff;
  margin: 0;
  height: 101px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 65px;
`;

const BtnCar = styled.div`
  width: 90px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CardSmall = styled.small`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 19px;
`;

const StyledShoppingCartIcon = styled(Icon)`
  padding-left: 5px;
  color: #333;
  font-size: 24px;
`;

const QtdeShoppingCart = styled.strong`
  color: #333;
  font-size: 24px;
`;

const HTitlle = styled.h1`
  color: #fff;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px; /* 47.5% */
`;

const Ul = styled.ul`
  list-style-type: none;
`;

const Li = styled.li`
  list-style-type: none;
  width: 379px;
  height: 95px;
  border-radius: 8px;
  background: #fff;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  margin: 20px;
  max-width: 420px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});
const NavBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [elementos, setElementos] = useState([
    {
      id: 1,
      name: "Apple Watch Series 4 GPS",
      brand: "head seat",
      description: "string",
      photo:
        "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp",
      price: "399",
    },
    {
      id: 1,
      name: "Apple Watch Series 4 GPS",
      brand: "string",
      description: "string",
      photo:
        "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp",
      price: "399",
    },
  ]);

  const handleExcluirElemento = (index: number) => {
    // Cria uma nova lista excluindo o elemento na posição 'index'
    const novaLista = [
      ...elementos.slice(0, index),
      ...elementos.slice(index + 1),
    ];
    setElementos(novaLista);
    console.log(elementos.length);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Nav>
        <HTitlle className={montserrat.className}>
          MKS <CardSmall className={montserrat.className}>Sistemas</CardSmall>
        </HTitlle>
        <BtnCar onClick={handleSidebarToggle}>
          <StyledShoppingCartIcon icon="typcn:shopping-cart" />
          <QtdeShoppingCart>{elementos.length}</QtdeShoppingCart>
        </BtnCar>
      </Nav>
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle}>
        {/* Conteúdo do menu lateral aqui */}

        <ul>
          {elementos.map((elemento, index) => (
            <Li key={index}>
              <Image src={elemento.photo} alt={elemento.description}></Image>
              <p style={{ width: "80px", fontSize: "12px" }}>{elemento.name}</p>
              <Ranger></Ranger>
              <p>R${elemento.price}</p>
              <Icon
                // onClick={() => handleExcluirElemento(index)}
                style={{
                  position: "relative",
                  top: "-50%",
                  right: "-4%",
                  fontSize: "20px",
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
                icon={"carbon:close-filled"}
              ></Icon>
            </Li>
          ))}
        </ul>
      </Sidebar>
    </>
  );
};

export default NavBar;
