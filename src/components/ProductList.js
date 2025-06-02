import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const snapshot = await getDocs(collection(db, "products"));
      setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }
    fetchProducts();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">All Products</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="row">
          {products.map(p => (
            <div className="col-md-4 mb-4" key={p.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">${p.price}</h6>
                  <p className="card-text">{p.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
