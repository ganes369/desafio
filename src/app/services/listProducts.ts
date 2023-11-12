import axios from "axios";
import { Products } from "../@types/product";

export const fetchPosts = async (): Promise<{
  products: Products[];
  count: number;
}> => {
  const { data } = await axios.get<{ products: any[]; count: number }>(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
  );
  return data;
};
