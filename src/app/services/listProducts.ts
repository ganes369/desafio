import axios from "axios";

export const fetchPosts = async (): Promise<{
  products: any[];
  count: number;
}> => {
  const { data } = await axios.get<{ products: any[]; count: number }>(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
  );
  return data;
};
