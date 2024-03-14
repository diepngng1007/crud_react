import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/api";
import { IProduct } from "../interface/product";
import { Link } from "react-router-dom";

function HomePage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts();
    },[]);
    const fetchProducts = async () => {
        const data = await getAllProducts();
        setProducts(data);
    };
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div style={{borderLeft: "4px solid red", marginTop: "30px"}} className="mb-4"><h3 style={{paddingLeft: "10px"}}>News Foods</h3></div>
      <div className="row container">
        {products.map((product : IProduct) => (
        <div className="col-md-4" key={product.id}>
            <Link className="d-flex justify-content-center product-image" to={`/detail-product/${product.id}`}>
                <img src={`${product.image}`} alt="" style={{width:"100%", height: "100%", cursor: "pointer"}} />
            </Link>
            <div className="text-center my-3">
                <h4>{product.name}</h4>
                <strong className="text-warning">${product.price}</strong>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
