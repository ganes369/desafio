"use client";
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import PostList from "./store";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <PostList />
    </QueryClientProvider>
  );
}

export default App;
