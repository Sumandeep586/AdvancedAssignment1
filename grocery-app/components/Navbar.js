import Link from "next/link"; 

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/grocery">Grocery List</Link>
      <Link href="/cart">Cart</Link>
      <Link href="/contact">Contact</Link> 
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    background: "#ddd",
  },
};
