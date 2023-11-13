"use client";
import React from "react";
import { useQuery } from "react-query";
import Card from "../components/Card";
import styled from "styled-components";
import { fetchPosts } from "../services/listProducts";

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

  return <GridContainer></GridContainer>;
};

export default PostList;
