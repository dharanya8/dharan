import React, { useEffect, useState } from "react";

const PRODUCTS_URL = "https://api.escuelajs.co/api/v1/products";

const isHttpsUrl = (value) => {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
};

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch(PRODUCTS_URL, { signal: controller.signal, credentials: "omit" })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed with ${res.status}`);
        return res.json();
      })
      .then((data) => setProducts(Array.isArray(data) ? data : []))
      .catch((err) => {
        if (err.name !== "AbortError") console.error("Error:", err);
      });

    return () => controller.abort();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Details</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.map(product => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px" }}>
            {isHttpsUrl(product.image) && (
              <img src={product.image} alt={product.title} width="150" />
            )}
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
