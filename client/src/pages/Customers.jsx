import { useState } from "react";

import Sidebar from "../components/Sidebar";

function Customers() {

  const [customers, setCustomers] = useState([

    {
      id: 1,
      name: "Rahul Patel",
      email: "rahul@gmail.com",
      phone: "9876543210",
      city: "Ahmedabad",
      status: "Active",
      orders: 12,
      type: "Premium",
    },

    {
      id: 2,
      name: "Dixit Shah",
      email: "dixit@gmail.com",
      phone: "9999999999",
      city: "Surat",
      status: "Inactive",
      orders: 5,
      type: "Normal",
    },

    {
      id: 3,
      name: "Meet Joshi",
      email: "meet@gmail.com",
      phone: "8888888888",
      city: "Rajkot",
      status: "Active",
      orders: 18,
      type: "Premium",
    },

  ]);

  const [search, setSearch] = useState("");

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // SEARCH
  const filteredCustomers = customers.filter((customer) =>

    customer.name.toLowerCase().includes(search.toLowerCase()) ||

    customer.email.toLowerCase().includes(search.toLowerCase()) ||

    customer.city.toLowerCase().includes(search.toLowerCase())

  );

  // DELETE
  const handleDelete = (id) => {

    const updatedCustomers = customers.filter(

      (customer) => customer.id !== id

    );

    setCustomers(updatedCustomers);

  };

  // VIEW
  const handleView = (customer) => {

  if (selectedCustomer?.id === customer.id) {

    setSelectedCustomer(null);

  } else {

    setSelectedCustomer(customer);

  }

};

  return (

    <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="ml-64 flex-1 p-8">

        {/* Heading */}
        <div className="flex items-center justify-between mb-10">

          <h1 className="text-4xl font-bold text-black dark:text-white">
            Customers
          </h1>

        </div>

        {/* SEARCH */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 mb-8">

          <input
            type="text"
            placeholder="Search customer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border p-4 rounded-2xl outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />

        </div>

        {/* CUSTOMER DETAILS */}
        {selectedCustomer && (

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 mb-8">

            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
              Customer Details
            </h2>

            <div className="space-y-4 text-lg">

              <p className="text-black dark:text-white">
                <strong>Name:</strong> {selectedCustomer.name}
              </p>

              <p className="text-black dark:text-white">
                <strong>Email:</strong> {selectedCustomer.email}
              </p>

              <p className="text-black dark:text-white">
                <strong>Phone:</strong> {selectedCustomer.phone}
              </p>

              <p className="text-black dark:text-white">
                <strong>City:</strong> {selectedCustomer.city}
              </p>

              <p className="text-black dark:text-white">
                <strong>Orders:</strong> {selectedCustomer.orders}
              </p>

              <p className="text-black dark:text-white">
                <strong>Type:</strong> {selectedCustomer.type}
              </p>

              <p className="text-black dark:text-white">
                <strong>Status:</strong> {selectedCustomer.status}
              </p>

            </div>

          </div>

        )}

        {/* TABLE */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b dark:border-gray-700 text-left">

                <th className="pb-4 text-black dark:text-white">
                  Name
                </th>

                <th className="pb-4 text-black dark:text-white">
                  Email
                </th>

                <th className="pb-4 text-black dark:text-white">
                  Phone
                </th>

                <th className="pb-4 text-black dark:text-white">
                  City
                </th>

                <th className="pb-4 text-black dark:text-white">
                  Orders
                </th>

                <th className="pb-4 text-black dark:text-white">
                  Type
                </th>

                <th className="pb-4 text-black dark:text-white">
                  Status
                </th>

                <th className="pb-4 text-black dark:text-white">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredCustomers.map((customer) => (

                <tr
                  key={customer.id}
                  className="border-b dark:border-gray-700"
                >

                  <td className="py-5 text-black dark:text-white">
                    {customer.name}
                  </td>

                  <td className="text-black dark:text-white">
                    {customer.email}
                  </td>

                  <td className="text-black dark:text-white">
                    {customer.phone}
                  </td>

                  <td className="text-black dark:text-white">
                    {customer.city}
                  </td>

                  {/* Orders */}
                  <td>

                    <span className="bg-gray-200 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-xl">
                      {customer.orders} Orders
                    </span>

                  </td>

                  {/* Type */}
                  <td>

                    {customer.type === "Premium" ? (

                      <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-xl font-semibold">
                        Premium
                      </span>

                    ) : (

                      <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-semibold">
                        Normal
                      </span>

                    )}

                  </td>

                  {/* Status */}
                  <td>

                    {customer.status === "Active" ? (

                      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold">
                        Active
                      </span>

                    ) : (

                      <span className="bg-red-100 text-red-700 px-4 py-2 rounded-xl font-semibold">
                        Inactive
                      </span>

                    )}

                  </td>

                  {/* ACTION */}
                  <td>

                    <div className="flex gap-3">

                      <button
                        onClick={() => handleView(customer)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-xl"
                      >
                        View
                      </button>

                      <button
                        onClick={() => handleDelete(customer.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-xl"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
}

export default Customers;