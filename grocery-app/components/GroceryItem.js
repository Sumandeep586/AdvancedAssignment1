import Image from "next/image";

export default function GroceryItem({ name, price, inStock, image, addToCart }) {
  return (
    <div style={styles.card}>
      <Image src={image} alt={name} width={150} height={150} style={styles.image} /> 
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p style={{ color: inStock ? "green" : "red" }}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
      <button onClick={() => addToCart({ name, price })} disabled={!inStock}>
        {inStock ? "Add to Cart" : "Unavailable"}
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    background: "#fff",
  },
  image: {
    borderRadius: "8px",
  },
};





