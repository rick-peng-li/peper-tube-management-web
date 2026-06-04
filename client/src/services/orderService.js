import axios from "axios";

const API_URL = "http://localhost:5000/api/orders";


// GET TOKEN
const getToken = () => {
  return localStorage.getItem("token");
};


// GET ALL ORDERS
export const getOrders = async () => {

  const response = await axios.get(API_URL, {

    headers: {
      Authorization: `Bearer ${getToken()}`,
    },

  });

  return response.data;
};

// CREATE ORDER
export const createOrder = async (orderData) => {

  const response = await axios.post(
    API_URL,
    orderData,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return response.data;
};

// DELETE ORDER
export const deleteOrder = async (id) => {

  const response = await axios.delete(
    `${API_URL}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return response.data;
};

// UPDATE ORDER STATUS
export const updateOrderStatus = async (
  id,
  status
) => {

  const response = await axios.put(
    `${API_URL}/${id}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return response.data;
};