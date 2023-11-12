"use client";
// @ts-nocheck
import React from "react";
import { useQuery } from "react-query";
import Card from "../components/Card";
import styled from "styled-components";
import { Products } from "../@types/product";
import { fetchPosts } from "../services/listProducts";

type FetchPostsResponse = {
  products: any[];
  count: number;
};
const PostList = () => {
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
  const { data, isLoading, isError } = useQuery<FetchPostsResponse>(
    "posts",
    fetchPosts
  );
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
