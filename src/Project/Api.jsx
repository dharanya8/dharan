import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products", {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        if (!Array.isArray(data)) {
          throw new Error("Unexpected response format from products API");
        }
        setProducts(data);
      } catch (err) {
        if (err.name === "AbortError") return;
        console.error("Failed to load products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();

    return () => controller.abort();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Details</h1>
      {loading && <p>Loading products…</p>}
      {error && (
        <p role="alert" style={{ color: "#ed3a56" }}>
          Could not load products: {error}
        </p>
      )}
      {!loading && !error && products.length === 0 && <p>No products found.</p>}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.map(product => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px" }}>
            <img src={product.image} alt={product.title} width="150" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h4>${product.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
