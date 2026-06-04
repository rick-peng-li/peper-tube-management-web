import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="h-[80vh] bg-gray-100 flex flex-col items-center justify-center">
        
        <h1 className="text-6xl font-bold mb-6">
          Peper Tube Management
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          Manage Orders, Products & Customers Easily
        </p>

        <button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition duration-300">
          Get Started
        </button>

      </div>
    </>
  );
}

export default Home;