import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";



import {

  getProducts,
  deleteProduct,
  addProduct,
  updateProduct,

} from "../services/productService";

function Products() {

  const [editId, setEditId] = useState(null);
   
  const [products, setProducts] = useState([]);

  useEffect(() => {

  fetchProducts();

}, []);

const [formData, setFormData] = useState({

  productName: "",
  category: "",
  price: "",
  stock: "",

});

const fetchProducts = async () => {

  try {

    const data = await getProducts();

    setProducts(data);

  } catch (error) {

    console.log(error);

  }

};

const handleDelete = async (id) => {

  try {

    await deleteProduct(id);

    fetchProducts();

  } catch (error) {

    console.log(error);

  }

};

const handleEdit = (product) => {

  setFormData({

    productName: product.productName,
    category: product.category,
    price: product.price,
    stock: product.stock,

  });

  setEditId(product._id);

};

const handleChange = (e) => {

  setFormData({

    ...formData,

    [e.target.name]: e.target.value,

  });

};

const handleAddProduct = async (e) => {

  e.preventDefault();

  try {

    if (editId) {

      await updateProduct(editId, formData);

      setEditId(null);

    } else {

      await addProduct(formData);

    }

    fetchProducts();

    setFormData({

      productName: "",
      category: "",
      price: "",
      stock: "",

    });

  } catch (error) {

    console.log(error);

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
            Products
          </h1>

          

        </div>

         <form
  onSubmit={handleAddProduct}
  className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 mb-10"
>

  <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
    Add Product
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <input
      type="text"
      name="productName"
      placeholder="Product Name"
      value={formData.productName}
      onChange={handleChange}
      className="border p-4 rounded-2xl outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
      required
    />

    <input
      type="text"
      name="category"
      placeholder="Category"
      value={formData.category}
      onChange={handleChange}
       className="border p-4 rounded-2xl outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
      required
    />

    <input
      type="number"
      name="price"
      placeholder="Price"
      value={formData.price}
      onChange={handleChange}
       className="border p-4 rounded-2xl outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
      required
    />

    <input
      type="number"
      name="stock"
      placeholder="Stock"
      value={formData.stock}
      onChange={handleChange}
       className="border p-4 rounded-2xl outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
      required
    />

  </div>

  <button
    type="submit"
    className="mt-6 bg-black text-white px-6 py-3 rounded-2xl"
  >
    Add Product
  </button>

</form>

        {/* Table */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8">

          <table className="w-full">

            <thead>

              <tr className="border-b text-left">

                <th className="pb-4 text-black dark:text-white">
                  Product
                </th>

                <th className="pb-4 text-black dark:text-white">
                  Category
                </th>

                <th className="pb-4 text-black dark:text-white">
                  Price
                </th>

                <th className="pb-4 text-black dark:text-white">
                  Stock
                </th>

                <th className="pb-4 text-black dark:text-white">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              

              {products.map((product) => (

  <tr
    key={product._id}
    className="border-b dark:border-gray-700"
  >

    <td className="py-5 text-black dark:text-white">
      {product.productName}
    </td>

    <td>
      {product.category}
    </td>

    <td>
      ₹ {product.price}
    </td>

    <td>
      {product.stock}
    </td>

    <td>

      <div className="flex gap-3">

       <button
  onClick={() => handleEdit(product)}
  className="bg-blue-500 text-white px-4 py-2 rounded-xl"
>
  Edit
</button>

        <button
          onClick={() => handleDelete(product._id)}
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

export default Products;