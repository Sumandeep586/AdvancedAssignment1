import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-yellow-200 via-orange-300 to-pink-500 min-h-screen">
      <Navbar /> 
      <div className="text">
        <h1 className="text1">
          Welcome to the Grocery Store
        </h1>
        <p className="text2">
          Your one-stop shop for fresh and organic groceries. Order now and get fast delivery!
        </p>
        <a href="/grocery">
          <button className="text3">
            Start Shopping
          </button>
        </a>
      </div>
    </div>
  );
}