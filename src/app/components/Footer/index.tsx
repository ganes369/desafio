"use client";
import styled from "styled-components";
import { Montserrat } from "next/font/google";
import React from "react";

const FooterDiv = styled.div`
  width: 100%;
  height: 34px;
  flex-shrink: 0;
  background: #eee;
  position: fixed;
  bottom: 0;
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 5px;
  text-align: center;
  padding: 10px;
`;
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});
const Footer = () => {
  return (
    <>
      <FooterDiv className={montserrat.className}>
        MKS sistemas © Todos os direitos reservados
      </FooterDiv>
    </>
  );
};

export default Footer;
