import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <Navbar />
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <p>
                {item.name} - ${item.price} x {item.quantity}
              </p>
              <button onClick={() => removeFromCart(item.name)}>Remove</button>
            </div>
          ))}
          <h3>
            Total Price: $
            {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
          </h3>
        </div>
      )}
    </div>
  );
}

const styles = {
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid gray",
  },
};
