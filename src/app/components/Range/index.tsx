"use client";
import React, { useState } from "react";
import styled from "styled-components";

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;
  margin: 5px;
  height: 35px;
`;

const QuantityInput = styled.input`
  width: 25px;
  text-align: center;
  border: none;
  height: 25px;
`;

const QuantityButton = styled.button`
  color: black;
  width: 25px;
  border: none;
  cursor: pointer;
  height: 25px;
  background: white;
`;

const QuantityComponent = ({ quantity, onQuantityChange }: any) => {
  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    onQuantityChange(quantity - 1 > 0 ? quantity - 1 : 1);
  };

  return (
    <QuantityContainer>
      <QuantityButton onClick={handleDecrement}>-</QuantityButton>
      <QuantityInput
        style={{ borderLeft: "0.2px solid #BFBFBF" }}
        value={quantity}
        onChange={(e) => onQuantityChange(parseInt(e.target.value, 10) || 1)}
      />
      <QuantityButton
        style={{ borderLeft: "0.2px solid #BFBFBF" }}
        onClick={handleIncrement}
      >
        +
      </QuantityButton>
    </QuantityContainer>
  );
};

const Ranger = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: React.SetStateAction<number>) => {
    setQuantity(newQuantity);
  };

  return (
    <div>
      <small style={{ fontSize: "10px" }}>Qtde:</small>
      <QuantityComponent
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
      />
    </div>
  );
};

export default Ranger;
