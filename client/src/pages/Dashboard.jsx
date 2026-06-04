import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import { getOrders } from "../services/orderService";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {

  const [orders, setOrders] = useState([]);

  

  useEffect(() => {

    const fetchOrders = async () => {

      try {

        const data = await getOrders();

        setOrders(data);

      } catch (error) {

        console.log(error);
      }
    };

    fetchOrders();

  }, []);


  // STATS
  const totalOrders = orders.length;

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const processingOrders = orders.filter(
    (order) => order.status === "Processing"
  ).length;

  const completedOrders = orders.filter(
    (order) => order.status === "Completed"
  ).length;

  const chartData = [
    {
      name: "Pending",
      value: pendingOrders,
    },

    {
      name: "Processing",
      value: processingOrders,
    },

    {
      name: "Completed",
      value: completedOrders,
    },
  ];

  const COLORS = [
    "#facc15",
    "#3b82f6",
    "#22c55e",
  ];


  return (
   <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen">

  {/* Sidebar */}
  <Sidebar />

  {/* Main */}
  <div className="ml-64 flex-1 p-8 overflow-x-hidden">

    {/* Heading */}
    <h1 className="text-4xl font-bold text-black dark:text-white mb-10">
      Dashboard
    </h1>

    {/* TOP CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {/* Total */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6">

        <h2 className="text-gray-500 text-lg">
          Total Orders
        </h2>

        <h1 className="text-5xl font-bold mt-4">
          {totalOrders}
        </h1>

      </div>

      {/* Pending */}
      <div className="bg-yellow-100 rounded-3xl shadow-lg p-6">

        <h2 className="text-yellow-700 text-lg">
          Pending
        </h2>

        <h1 className="text-5xl font-bold mt-4">
          {pendingOrders}
        </h1>

      </div>

      {/* Processing */}
      <div className="bg-blue-100 rounded-3xl shadow-lg p-6">

        <h2 className="text-blue-700 text-lg">
          Processing
        </h2>

        <h1 className="text-5xl font-bold mt-4">
          {processingOrders}
        </h1>

      </div>

      {/* Completed */}
      <div className="bg-green-100 rounded-3xl shadow-lg p-6">

        <h2 className="text-green-700 text-lg">
          Completed
        </h2>

        <h1 className="text-5xl font-bold mt-4">
          {completedOrders}
        </h1>

      </div>

    </div>

    {/* ANALYTICS SECTION */}
    <div className="mt-12 flex justify-center">

      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 w-[550px] h-[500px]">

        <h2 className="text-3xl font-bold text-center mb-6 text-black dark:text-white">
          Order Analytics
        </h2>

        <div className="w-full h-[420px]">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={140}
                dataKey="value"
                label
              >

                {chartData.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />

                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
     


  </div>

</div>


        
    
  );
}

export default Dashboard;