import React, { useRef, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddProduct() {
  const nameRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      await addDoc(collection(db, "products"), {
        name: nameRef.current.value,
        price: parseFloat(priceRef.current.value),
        description: descRef.current.value,
      });
      setMessage("Product added!");
      e.target.reset();
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: 500 }}>
      <h2 className="mb-4">Add Product</h2>
      {message && <div className={`alert ${message.startsWith('Error') ? 'alert-danger' : 'alert-success'}`}>{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" ref={nameRef} className="form-control" placeholder="Name" required />
        </div>
        <div className="mb-3">
          <input type="number" ref={priceRef} className="form-control" placeholder="Price" required />
        </div>
        <div className="mb-3">
          <textarea ref={descRef} className="form-control" placeholder="Description" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Add Product</button>
      </form>
    </div>
  );
}
