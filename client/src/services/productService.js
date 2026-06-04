import axios from "axios";

const API = "http://localhost:5000/api/products";


// GET PRODUCTS
export const getProducts = async () => {

  const response = await axios.get(API);

  return response.data;

};


// ADD PRODUCT
export const addProduct = async (productData) => {

  const response = await axios.post(
    API,
    productData
  );

  return response.data;

};


// DELETE PRODUCT
export const deleteProduct = async (id) => {

  const response = await axios.delete(
    `${API}/${id}`
  );

  return response.data;

};


// UPDATE PRODUCT
export const updateProduct = async (
  id,
  updatedData
) => {

  const response = await axios.put(
    `${API}/${id}`,
    updatedData
  );

  return response.data;

};