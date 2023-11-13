import { useQuery, useQueryClient, useMutation } from "react-query";
import exampleService from "./example-service";
import { Products } from "../@types/product";

const useAllPosts = () => {
  return useQuery(["posts"], exampleService.getAllPosts);
};

export { useAllPosts };
