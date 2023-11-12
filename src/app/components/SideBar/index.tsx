"use client";
// Sidebar.tsx
import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const SidebarWrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;

  right: ${(props) =>
    props.$isOpen
      ? "0"
      : "-486px"}; /* Mova a barra lateral para a direita quando aberta e para fora da tela quando fechada */
  height: 100%;
  width: 486px;
  background: #0f52ba;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  z-index: 1000;
  padding-top: 10px; /* Ajuste conforme necessário para deixar espaço para o cabeçalho */
  transition: right 0.3s ease; /* Adiciona uma transição suave à propriedade right */

  @media (max-width: 768px) {
    width: 100%; /* Ajusta a largura para ocupar toda a largura em telas menores */
  }
`;

const Title = styled.div`
  max-width: 600px;
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const StyledShoppingCartIcon = styled(Icon)`
  width: 38px;
  height: 38px;
  color: black;
  cursor: pointer;
`;

const Footer = styled.div`
  width: 486px;
  height: 125px;
  cursor: pointer;
  color: white;
  diplay: flex;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  bottom: 0;
`;
const BtnFinish = styled.div`
  height: 65px;
  cursor: pointer;
  color: white;
  background: black;
`;

const FlexContainer = styled.div`
  display: flex;
  margin: 0;
`;

const FlexChild = styled.div`
  flex: 1;
  align-items: stretch;
  max-height: 100%;
`;

const Paragramph = styled.p`
  color: #fff;
  font-size: 100%;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
`;
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, children }) => {
  return (
    <SidebarWrapper $isOpen={isOpen}>
      <Title>
        <h2
          style={{
            width: "180px",
            height: "56px",
            flexShrink: 0,
            color: "#FFF",
            fontSize: "27px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          Carrinho de compras
        </h2>
        <div
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "100%",
            background: "white",
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          <StyledShoppingCartIcon
            icon="carbon:close-filled"
            onClick={onClose}
          />
        </div>
      </Title>
      <FlexContainer>
        {children && React.isValidElement(children) ? (
          <FlexChild>{children}</FlexChild>
        ) : null}
      </FlexContainer>
      <Footer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "45px",
            padding: "10px",
          }}
        >
          <Paragramph>Total:</Paragramph>
          <Paragramph>R$798</Paragramph>
        </div>
        <BtnFinish>
          <p>Finalizar Compra</p>
        </BtnFinish>
      </Footer>
    </SidebarWrapper>
  );
};

export default Sidebar;
