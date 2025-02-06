import Navbar from "../components/Navbar";
import GroceryItem from "../components/GroceryItem";
import { useCart } from "../context/CartContext"; 

export default function GroceryList() {
  const { addToCart } = useCart(); 
  const groceries = [
    { name: "Apples", price: 3, inStock: true, image: "/images/apples.jpg" },
    { name: "Milk", price: 2.5, inStock: false, image: "/images/milk.jpg" },
    { name: "Bananas", price: 1.5, inStock: true, image: "/images/bananas.jpg" },
    { name: "Bread", price: 2, inStock: true, image: "/images/bread.jpg" },
    { name: "Eggs", price: 4, inStock: true, image: "/images/eggs.jpg" },
    { name: "Cheese", price: 5, inStock: false, image: "/images/cheese.jpg" },
    { name: "Tomatoes", price: 2.8, inStock: true, image: "/images/tomatoes.jpg" },
    { name: "Carrots", price: 1.2, inStock: true, image: "/images/carrots.jpg" },
    { name: "Chicken", price: 7, inStock: true, image: "/images/chicken.jpg" },
    { name: "Rice", price: 3.5, inStock: true, image: "/images/rice.jpg" },
    { name: "Pasta", price: 2.2, inStock: true, image: "/images/pasta.jpg" },
    { name: "Orange Juice", price: 4.5, inStock: false, image: "/images/orange-juice.jpg" },
    { name: "Potatoes", price: 3.0, inStock: true, image: "/images/potatoes.jpg" },
    { name: "Yogurt", price: 2.8, inStock: true, image: "/images/yogurt.jpg" },
  ];

  return (
    <div>
      <Navbar />
      <h1>Grocery List</h1>
      <div style={styles.grid}>
        {groceries.map((item, index) => (
          <GroceryItem key={index} {...item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
};
