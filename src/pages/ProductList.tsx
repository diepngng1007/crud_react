import React, { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../api/api";
import { IProduct } from "../interface/product";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  },[]);
  const fetchProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };
  const handleRemoveProduct = async (id: string) => {
    const confirmMessage = window.confirm(
      "Are you sure you want to remove this product?"
    );
    if (confirmMessage) {
      await deleteProduct(id);
      fetchProducts();
    }
  };

  return (
    <div className="container">
      <h1 className="text-center text-danger my-3">Product List</h1>
      <Link className="btn btn-primary text-light my-2" to="/add-product">
        Add Product
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item: IProduct, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>
                <img src={`${item.image}`} alt="" width="200" />
              </td>
              <td>{item.price}</td>
              <td>{item.desc}</td>
              <td>
                <button
                  className="btn btn-danger mr-2"
                  onClick={() => handleRemoveProduct(item.id)}
                >
                  Delete
                </button>
                <Link
                  className="btn btn-warning mr-2"
                  to={`/update-product/${item.id}`}
                >
                  Update
                </Link>
                <Link className="btn btn-info" to={`/detail-product/${item.id}`}>View detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
