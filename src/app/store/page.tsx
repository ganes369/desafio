"use client";
import React from "react";
import { useQuery } from "react-query";
import Card from "../components/Card";
import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2px;
  width: 900px;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
`;

export const GridItem = styled.div`
  background-color: white;
  padding: 20px;
  text-align: center;
  /* Adicione estilos adicionais conforme necessário */
`;

interface FetchPosts {
  fetchPosts: () => { products: any[]; count: number };
}

const PostList: React.FC<FetchPosts> = ({ fetchPosts }) => {
  const { data, isLoading, isError } = useQuery("posts", fetchPosts);
  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (isError) {
    return <div>Ocorreu um erro ao carregar os dados.</div>;
  }

  return (
    <GridContainer>
      {Array.isArray(data?.products) &&
        data?.products.map((post) => (
          <GridItem key={post.id}>
            <Card product={post}></Card>
          </GridItem>
        ))}
    </GridContainer>
  );
};

export default PostList;
