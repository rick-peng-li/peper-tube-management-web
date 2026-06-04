import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import {
  getOrders,
  createOrder,
  deleteOrder,
  updateOrderStatus,
} from "../services/orderService";

function Orders() {

  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    customer: "",
    product: "",
    quantity: "",
    status: "Pending",
  });

  const [search, setSearch] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateOrder = async (e) => {

    e.preventDefault();

    try {

      const data = await createOrder(formData);

      // Add instantly in UI
      setOrders([data, ...orders]);

      // Reset form
      setFormData({
        customer: "",
        product: "",
        quantity: "",
        status: "Pending",
      });

      setShowModal(false);

    } catch (error) {

      console.log(error);
    }
  };

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure?"
    );

    if (!confirmDelete) return;

    try {

      await deleteOrder(id);

      // Remove instantly from UI
      setOrders(
        orders.filter((order) => order._id !== id)
      );

    } catch (error) {

      console.log(error);
    }
  };

  const handleStatusChange = async (
    id,
    newStatus
  ) => {

    try {

      const updatedOrder =
        await updateOrderStatus(id, newStatus);

      setOrders(
        orders.map((order) =>
          order._id === id
            ? updatedOrder
            : order
        )
      );

    } catch (error) {

      console.log(error);
    }
  };

  // Fetch Orders
  useEffect(() => {

    const fetchOrders = async () => {

      try {

        const data = await getOrders();

        setOrders(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

    fetchOrders();

  }, []);

  const filteredOrders = orders.filter((order) =>

    order.customer
      .toLowerCase()
      .includes(search.toLowerCase())

    ||

    order.product
      .toLowerCase()
      .includes(search.toLowerCase())

    ||

    order.status
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="ml-64 w-full p-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">

          <h1 className="text-4xl font-bold text-black dark:text-white font-bold">
            Orders
          </h1>

          <input
            type="text"
            placeholder="Search orders..."
            className="w-full md:w-96 px-4 py-3 rounded-xl border outline-none focus:border-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={() => setShowModal(true)}
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition"
          >

            + Add Order

          </button>

        </div>


        {/* Loading */}
        {loading ? (

          <h2 className="text-4xl font-bold text-black dark:text-white font-semibold">
            Loading Orders...
          </h2>

        ) : (

          <div className="border p-3 rounded dark:bg-gray-700 dark:text-white">

            <table className="w-full">

              <thead className="bg-black text-white">

                <tr>

                  <th className="text-left px-6 py-4">
                    Customer
                  </th>

                  <th className="text-left px-6 py-4">
                    Product
                  </th>

                  <th className="text-left px-6 py-4">
                    Quantity
                  </th>

                  <th className="text-left px-6 py-4">
                    Status
                  </th>

                  <th className="text-left px-6 py-4">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredOrders.map((order) => (

                  <tr
                    key={order._id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="px-6 py-4">
                      {order.customer}
                    </td>

                    <td className="px-6 py-4">
                      {order.product}
                    </td>

                    <td className="px-6 py-4">
                      {order.quantity}
                    </td>

                    <td className="px-6 py-4">

                      <span
                        className={`px-4 py-1 rounded-full text-sm font-semibold
                        ${order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : order.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                      >

                        <select
                          value={order.status}
                          onChange={(e) =>
                            handleStatusChange(
                              order._id,
                              e.target.value
                            )
                          }
                          className={`px-4 py-2 rounded-full text-sm font-semibold outline-none
  ${order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : order.status === "Completed"
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                        >

                          <option value="Pending">
                            Pending
                          </option>

                          <option value="Processing">
                            Processing
                          </option>

                          <option value="Completed">
                            Completed
                          </option>

                        </select>

                      </span>

                    </td>
                    <td className="px-6 py-4">

                      <button
                        onClick={() => handleDelete(order._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                      >

                        Delete

                      </button>

                    </td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>
      {/* MODAL */}
      {showModal && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white dark:bg-gray-800 w-full max-w-lg p-8 rounded-3xl">

            <h2 className="text-4xl font-bold text-black dark:text-white font-bold mb-6">
              Add New Order
            </h2>

            <form
              onSubmit={handleCreateOrder}
              className="space-y-5"
            >

              <input
                type="text"
                name="customer"
                placeholder="Customer Name"
                className="w-full border px-4 py-3 rounded-xl outline-none"
                value={formData.customer}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="product"
                placeholder="Product Name"
                className="w-full border px-4 py-3 rounded-xl outline-none"
                value={formData.product}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                className="w-full border px-4 py-3 rounded-xl outline-none"
                value={formData.quantity}
                onChange={handleChange}
                required
              />

              <select
                name="status"
                className="w-full border px-4 py-3 rounded-xl outline-none"
                value={formData.status}
                onChange={handleChange}
              >

                <option value="Pending">
                  Pending
                </option>

                <option value="Processing">
                  Processing
                </option>

                <option value="Completed">
                  Completed
                </option>

              </select>

              <div className="flex gap-4">

                <button
                  type="submit"
                  className="flex-1 bg-black text-white py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition"
                >

                  Create Order

                </button>

                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-300 py-3 rounded-xl hover:bg-gray-400 transition"
                >

                  Cancel

                </button>

              </div>

            </form>

          </div>

        </div>
      )}
    </div>
  );
}

export default Orders;