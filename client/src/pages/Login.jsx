import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { FaUserAlt, FaLock } from "react-icons/fa";

import { loginUser } from "../services/authService";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const data = await loginUser(formData);
      
      console.log(data);
      // Save token
      localStorage.setItem("token", data.token);

      // Save user
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message || "Login Failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold">
            Admin Login
          </h1>

          <p className="text-gray-500 mt-2">
            Peper Tube Management System
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Email */}
          <div>

            <label className="block mb-2 font-semibold">
              Email
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">

              <FaUserAlt className="text-gray-500 mr-3" />

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="w-full outline-none"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          {/* Password */}
          <div>

            <label className="block mb-2 font-semibold">
              Password
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">

              <FaLock className="text-gray-500 mr-3" />

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="w-full outline-none"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-xl text-lg font-semibold hover:bg-yellow-400 hover:text-black transition duration-300"
          >

            {loading ? "Loading..." : "Login"}

          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;