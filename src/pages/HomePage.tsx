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
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position: "fixed", top: "0px",zIndex: "999",width:"65.7%"}}>
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
                Products
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='about'>
                About
              </Link>
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
      <div className="banner-img">
        <img src="/src/assets/image/Head-section.png" alt="" className="mt-5 w-full" />
      </div>
      <div style={{borderLeft: "4px solid red", marginTop: "80px"}} className="mb-4"><h3 style={{paddingLeft: "10px"}}>News Foods</h3></div>
      <div className="row container mx-auto w-full">
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
      <footer className="container-fluid bg-light p-5">
        <div className="row">
            <div className="col-md-2">
            <h5 className="text-center">Section 1</h5>
            <ul>
                <li style={{listStyle:"none"}}><a href="#">Liên hệ</a></li>
                <li style={{listStyle:"none"}}><a href="#">Giới thiệu</a></li>
                <li style={{listStyle:"none"}}><a href="#">Hỏi đáp</a></li>
            </ul>
            </div>
            <div className="col-md-2">
            <h5 className="text-center">Section 2</h5>
            <ul>
                <li style={{listStyle:"none"}}><a href="#">Điều khoản</a></li>
                <li style={{listStyle:"none"}}><a href="#">Chính sách</a></li>
                <li style={{listStyle:"none"}}><a href="#">Bảo mật</a></li>
            </ul>
            </div>
            <div className="col-md-2">
            <h5 className="text-center">Section 3</h5>
            <ul>
                <li style={{listStyle:"none"}}><a href="#">Thanh toán</a></li>
                <li style={{listStyle:"none"}}><a href="#">Vận chuyển</a></li>
                <li style={{listStyle:"none"}}><a href="#">Trả hàng</a></li>
            </ul>
            </div>
            <div className="col-md-2">
            <h5 className="text-center">Section 4</h5>
            <ul>
                <li style={{listStyle:"none"}}><a href="#">Facebook</a></li>
                <li style={{listStyle:"none"}}><a href="#">Instagram</a></li>
                <li style={{listStyle:"none"}}><a href="#">Youtube</a></li>
            </ul>
            </div>
            <div className="col-md-2">
            <h5 className="text=center">Section 5</h5>
            <p>Bản quyền © 2024</p>
            </div>
        </div>
      </footer>

    </div>
  );
}

export default HomePage;
