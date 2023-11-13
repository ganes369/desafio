"use client";
import React from "react";
import { useQuery, QueryClientProvider, QueryClient } from "react-query";

import { fetchPosts } from "./services/listProducts";
import PostList from "./store/page";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <PostList />
    </QueryClientProvider>
  );
}

export default App;
