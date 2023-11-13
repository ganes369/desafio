import axios from "axios";

class ExampleService {
  /**
   * Get all posts
   * @returns
   */
  getAllPosts() {
    return axios.get<{ products: any[] }>(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
    );
  }
}
export default new ExampleService();
