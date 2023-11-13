"use client";
import React from "react";
import { useQuery, QueryClientProvider, QueryClient } from "react-query";

import { fetchPosts } from "./services/listProducts";
import PostList from "./store/page";

function App({ pageProps }: any) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <PostList {...pageProps} fetchPosts={fetchPosts} />
    </QueryClientProvider>
  );
}

export default App;
