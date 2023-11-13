"use client";
import React from "react";
import { useQuery } from "react-query";
import Card from "../components/Card";
import styled from "styled-components";
import { fetchServerResponse } from "next/dist/client/components/router-reducer/fetch-server-response";
import { useAllPosts } from "../services/listProducts";

const PostList = () => {
  const { data, isLoading, isError } = useAllPosts();
  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2px;
    width: 900px;
    justify-content: center;
    align-self: center;
    margin: 0 auto;
  `;

  const GridItem = styled.div`
    background-color: white;
    padding: 20px;
    text-align: center;
  `;

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (isError) {
    return <div>Ocorreu um erro ao carregar os dados.</div>;
  }

  return (
    <GridContainer>
      {Array.isArray(data?.data.products) &&
        data?.data.products.map((post) => (
          <GridItem key={post.id}>
            <Card product={post}></Card>
          </GridItem>
        ))}
    </GridContainer>
  );
};

export default PostList;
