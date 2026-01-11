import axios from "axios";

export const productData = async () => {
  const fetchedapi = await axios.get("https://fakestoreapi.com/products");
  const resp = fetchedapi.data;
  return resp;
};
