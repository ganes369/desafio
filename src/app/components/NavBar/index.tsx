"use client";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Montserrat } from "next/font/google";
import React, { useState } from "react";
import Sidebar from "../SideBar";
import Ranger from "../Range";

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
          <QtdeShoppingCart>2</QtdeShoppingCart>
        </BtnCar>
      </Nav>
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle}>
        {/* Conteúdo do menu lateral aqui */}
        <Ul>
          <Li>
            <Image
              src={
                "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp"
              }
              alt={""}
            ></Image>
            <p style={{ width: "80px", fontSize: "12px" }}>
              Apple Watch Series 4 GPS
            </p>
            <Ranger></Ranger>
            <p>R$399</p>
            <Icon
              style={{
                position: "relative",
                top: "-50%",
                right: "-4%",
                fontSize: "20px",
                width: "20px",
                height: "20px",
                background: "white",
                borderRadius: "100%",
              }}
              icon={"carbon:close-filled"}
            ></Icon>
          </Li>
          <Li>
            <Image
              src={
                "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperx-cloudrevolver.webp"
              }
              alt={""}
            ></Image>
            <p style={{ width: "80px", fontSize: "12px" }}>
              Apple Watch Series 4 GPS
            </p>
            <Ranger></Ranger>
            <p>R$399</p>
            <Icon
              style={{
                position: "relative",
                top: "-50%",
                right: "-4%",
                fontSize: "20px",
                width: "20px",
                height: "20px",
                background: "white",
                borderRadius: "100%",
              }}
              icon={"carbon:close-filled"}
            ></Icon>
          </Li>
        </Ul>
      </Sidebar>
    </>
  );
};

export default NavBar;
